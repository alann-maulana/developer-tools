import 'package:flutter/material.dart';

import 'src/app.dart';
import 'src/settings/settings_controller.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await settingsController.loadSettings();
  runApp(const MyApp());
}
