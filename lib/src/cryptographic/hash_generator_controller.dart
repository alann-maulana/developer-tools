import 'dart:convert';

import 'package:crypto/crypto.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class HashGeneratorController extends ChangeNotifier {
  HashGeneratorController();

  final TextEditingController inputController = TextEditingController();
  final TextEditingController md5OutputController = TextEditingController();
  final TextEditingController sha1OutputController = TextEditingController();
  final TextEditingController sha224OutputController = TextEditingController();
  final TextEditingController sha256OutputController = TextEditingController();
  final TextEditingController sha384OutputController = TextEditingController();
  final TextEditingController sha512OutputController = TextEditingController();
  final TextEditingController sha512224OutputController =
      TextEditingController();
  final TextEditingController sha512256OutputController =
      TextEditingController();

  final TextEditingController hMacKeyOutputController = TextEditingController();
  final TextEditingController hMacMd5OutputController = TextEditingController();
  final TextEditingController hMacSha1OutputController =
      TextEditingController();
  final TextEditingController hMacSha256OutputController =
      TextEditingController();
  final TextEditingController hMacSha512OutputController =
      TextEditingController();

  clear() {
    inputController.text = '';
    md5OutputController.text = '';
    sha1OutputController.text = '';
    sha224OutputController.text = '';
    sha256OutputController.text = '';
    sha384OutputController.text = '';
    sha512OutputController.text = '';
    sha512224OutputController.text = '';
    sha512256OutputController.text = '';
    hMacKeyOutputController.text = '';
    hMacMd5OutputController.text = '';
    hMacSha1OutputController.text = '';
    hMacSha256OutputController.text = '';
    hMacSha512OutputController.text = '';
    notifyListeners();
  }

  onInputChanged(String input) {
    if (input.isEmpty) {
      clear();
      return;
    }

    final data = utf8.encode(input);
    md5OutputController.text = md5.convert(data).toString();
    sha1OutputController.text = sha1.convert(data).toString();
    sha224OutputController.text = sha224.convert(data).toString();
    sha256OutputController.text = sha256.convert(data).toString();
    sha384OutputController.text = sha384.convert(data).toString();
    sha512OutputController.text = sha512.convert(data).toString();
    sha512224OutputController.text = sha512224.convert(data).toString();
    sha512256OutputController.text = sha512256.convert(data).toString();

    onHMacKeyChanged(hMacKeyOutputController.text);
  }

  onHMacKeyChanged(String value) {
    final key = utf8.encode(value);
    final data = utf8.encode(inputController.text);
    hMacMd5OutputController.text = Hmac(md5, key).convert(data).toString();
    hMacSha1OutputController.text = Hmac(sha1, key).convert(data).toString();
    hMacSha256OutputController.text =
        Hmac(sha256, key).convert(data).toString();
    hMacSha512OutputController.text =
        Hmac(sha512, key).convert(data).toString();
    notifyListeners();
  }

  onCopy(String value) async {
    final data = ClipboardData(text: value);
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
