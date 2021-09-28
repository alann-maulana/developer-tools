import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:json_to_dart/json_to_dart.dart';

class JsonToDartController extends ChangeNotifier {
  final TextEditingController inputController = TextEditingController();
  final TextEditingController outputController = TextEditingController();

  String? inputError;

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

    try {
      final _ = json.decode(input);
    } catch (_) {
      inputError = 'Invalid json format';
      notifyListeners();
      return;
    }

    final classGenerator = ModelGenerator('Sample');
    final dartCode = classGenerator.generateDartClasses(input);
    outputController.text = dartCode.code;
    notifyListeners();
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
