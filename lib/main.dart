import 'package:developer_tools/src/app.dart' deferred as app;
import 'package:developer_tools/src/settings/settings_controller.dart'
    deferred as sc;
import 'package:developer_tools/src/settings/settings_service.dart'
    deferred as ss;
import 'package:flutter/material.dart' deferred as material
    show WidgetsFlutterBinding, runApp;

void main() async {
  // loading libraries
  await Future.wait([
    material.loadLibrary(),
    sc.loadLibrary(),
    ss.loadLibrary(),
    app.loadLibrary(),
  ]);

  material.WidgetsFlutterBinding.ensureInitialized();

  final settingsController = sc.SettingsController(ss.SettingsService());
  await settingsController.loadSettings();

  material.runApp(app.MyApp(settingsController: settingsController));
}
