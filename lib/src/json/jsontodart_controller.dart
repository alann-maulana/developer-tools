import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:json_to_dart/json_to_dart.dart';

class JsonToDartController extends ChangeNotifier {
  final TextEditingController classController = TextEditingController();
  final TextEditingController inputController = TextEditingController();
  final TextEditingController outputController = TextEditingController();

  String? inputError;

  bool _privateField = false;
  bool _finalField = true;

  bool get privateField => _privateField;
  set privateField(bool value) {
    _privateField = value;
    onInputChanged(inputController.text);
  }

  bool get finalField => _finalField;
  set finalField(bool value) {
    _finalField = value;
    onInputChanged(inputController.text);
  }

  clear() {
    classController.text = '';
    inputController.text = '';
    outputController.text = '';
    notifyListeners();
  }

  onClassChanged(String input) {
    if (inputController.text.isNotEmpty) {
      onInputChanged(inputController.text);
    }
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

    final className =
        classController.text.isEmpty ? 'UnknownClassName' : classController.text;
    final classGenerator = ModelGenerator(
      className,
      privateFields: privateField,
      finalFields: finalField,
    );
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
