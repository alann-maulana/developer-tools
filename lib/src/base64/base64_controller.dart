import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

enum Base64Mode { encode, decode }

class Base64Controller extends ChangeNotifier {
  Base64Controller() : _mode = Base64Mode.encode;

  final TextEditingController inputController = TextEditingController();
  final TextEditingController outputController = TextEditingController();

  String? inputError;

  Base64Mode _mode;
  Base64Mode get mode => _mode;
  set mode(Base64Mode value) {
    if (value == mode) return;

    final input = inputController.text.toString();
    final output = outputController.text.toString();

    inputController.text = output;
    outputController.text = input;

    _mode = value;

    notifyListeners();
  }

  clear() {
    inputController.text = '';
    outputController.text = '';
    notifyListeners();
  }

  onInputChanged(String input) {
    inputError = null;
    if (input.isEmpty) {
      clear();
      return;
    }

    String output;
    switch (mode) {
      case Base64Mode.encode:
        output = base64.encode(utf8.encode(input));
        break;
      case Base64Mode.decode:
        if (input.length < 4) {
          return;
        }
        try {
          output = utf8.decode(base64.decode(input));
        } catch (_) {
          inputError = 'Invalid base64 string';
          notifyListeners();
          return;
        }
        break;
    }
    outputController.text = output;
    notifyListeners();
  }

  useAsInput() {
    inputController.text = outputController.text;
    onInputChanged(inputController.text);
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
