import 'package:developer_tools/src/app.dart';
import 'package:developer_tools/src/settings/settings_controller.dart';
import 'package:flutter/material.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await settingsController.loadSettings();
  runApp(const MyApp());
}
