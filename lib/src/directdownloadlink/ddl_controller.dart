import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

enum DDLMode { googleDrive }

class DDLController extends ChangeNotifier {
  DDLController([DDLMode mode = DDLMode.googleDrive]) : _mode = mode;

  final TextEditingController inputController = TextEditingController();
  final TextEditingController outputController = TextEditingController();

  String? inputError;

  DDLMode _mode;

  DDLMode get mode => _mode;

  set mode(DDLMode value) {
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

    final inputUri = Uri.tryParse(input);
    String output = input;
    switch (mode) {
      case DDLMode.googleDrive:
        if (inputUri != null) {
          String? id;

          final type = inputUri.pathSegments.first;
          if (type == 'file') {
            for (final pathSegment in inputUri.pathSegments) {
              if (id == null || pathSegment.length > id.length) {
                id = pathSegment;
              }
            }

            if (id != null) {
              final outputUri = Uri.https(
                inputUri.authority,
                'uc',
                <String, String>{
                  'export': 'download',
                  'id': id,
                },
              );
              output = outputUri.toString();
            }
          } else if (['document', 'presentation', 'spreadsheets']
              .contains(type)) {
            final newPath = List.from(inputUri.pathSegments);
            newPath.removeLast();
            newPath.add('export');
            final outputUri = Uri.https(
              inputUri.authority,
              newPath.join('/'),
              <String, String>{
                'format': 'pdf',
              },
            );
            output = outputUri.toString();
          }
        }
        break;
    }
    outputController.text = output;
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
