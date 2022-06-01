import 'dart:convert';
import 'dart:typed_data';

import 'package:blurhash_dart/blurhash_dart.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;
import 'package:http/retry.dart';
import 'package:image/image.dart' as img;

enum BlurHashMode { encode, decode }

enum BlurHashDecode {
  unknown,
  decodeFromFile,
  decodeFromBase64String,
  decodeFromUrl,
  decodeFromBlurHash
}

extension MyBlurHashDecode on BlurHashDecode {
  String? value() {
    switch (this) {
      case BlurHashDecode.decodeFromFile:
        return 'Decoded from File';
      case BlurHashDecode.decodeFromBase64String:
        return 'Decoded from Base64 String';
      case BlurHashDecode.decodeFromUrl:
        return 'Decoded from URL';
      case BlurHashDecode.decodeFromBlurHash:
        return 'Decoded from Blur Hash';
      case BlurHashDecode.unknown:
        return null;
    }
  }
}

class BlurHashController extends ChangeNotifier {
  BlurHashController()
      : _mode = BlurHashMode.encode,
        _decodeMode = BlurHashDecode.unknown;

  final TextEditingController inputController = TextEditingController();
  final TextEditingController outputController = TextEditingController();

  String? inputError;

  BlurHashMode _mode;

  BlurHashMode get mode => _mode;

  set mode(BlurHashMode value) {
    if (value == mode) return;

    final input = inputController.text.toString();
    final output = outputController.text.toString();

    inputController.text = output;
    outputController.text = input;

    _mode = value;

    clear();
  }

  BlurHashDecode _decodeMode;

  BlurHashDecode get decodeMode => _decodeMode;

  ImageProvider? _imageInput;

  ImageProvider? get imageInput => _imageInput;

  ImageProvider? _imageOutput;

  ImageProvider? get imageOutput => _imageOutput;

  clear() {
    inputController.text = '';
    outputController.text = '';
    _imageInput = null;
    _imageOutput = null;
    _decodeMode = BlurHashDecode.unknown;
    notifyListeners();
  }

  onInputChanged(String input) {
    inputError = null;
    if (input.isEmpty) {
      clear();
      return;
    }

    if (mode == BlurHashMode.decode) {
      _decodeMode = BlurHashDecode.decodeFromBlurHash;
      final decodedImage = BlurHash.decode(input).toImage(16, 9);
      _imageInput = MemoryImage(
        Uint8List.fromList(
          img.encodeJpg(decodedImage),
        ),
      );
      notifyListeners();
      return;
    }

    if (input.startsWith(RegExp(r'data:image/png;base64,'))) {
      input = input.substring(22);
    }

    try {
      base64.decode(input);
      _decodeMode = BlurHashDecode.decodeFromBase64String;
    } catch (_) {}

    if (_decodeMode == BlurHashDecode.decodeFromBase64String) {
      final bytes = base64.decode(input);
      calculatedBytes(bytes);
      notifyListeners();
      return;
    }

    final uri = Uri.tryParse(input);
    if (uri != null) {
      _decodeMode = BlurHashDecode.decodeFromUrl;
      final client = RetryClient(http.Client());
      client.get(uri).then((http.Response response) {
        calculatedBytes(response.bodyBytes);
        notifyListeners();
      }, onError: (_, __) {
        notifyListeners();
      }).whenComplete(() {
        client.close();
      });
    }
  }

  calculatedBytes(Uint8List bytes) {
    _imageInput = MemoryImage(bytes);
    final image = img.decodeImage(bytes);
    if (image != null) {
      final w = image.width;
      final h = image.height;
      outputController.text = BlurHash.encode(
        image,
        numCompX: 4,
        numCompY: 3,
      ).hash;

      final decodedImage = BlurHash.decode(outputController.text).toImage(w, h);
      _imageOutput = MemoryImage(
        Uint8List.fromList(
          img.encodeJpg(decodedImage),
        ),
      );
    }
  }

  onCopy() async {
    final data = ClipboardData(text: outputController.text);
    await Clipboard.setData(data);
  }

  onPaste() async {
    final data = await Clipboard.getData('text/plain');
    if (data != null) {
      inputController.text = data.text ?? '';
      onInputChanged(data.text ?? '');
    }
  }
}
