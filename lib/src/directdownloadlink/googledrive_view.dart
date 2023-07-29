import 'package:developer_tools/src/dashboard/drawer_menu.dart';
import 'package:developer_tools/src/views/responsive_view.dart';
import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';

import '../views/responsive_scaffold.dart';
import 'ddl_controller.dart';

class GoogleDriveView extends StatelessWidget {
  static const String route = 'google-drive-direct-download-link-generator';

  GoogleDriveView({Key? key})
      : controller = DDLController(),
        super(key: key);

  final DDLController controller;

  @override
  Widget build(BuildContext context) {
    return ResponsiveScaffold(
      title: Text(AppLocalizations.of(context)!.googleDriveDDLSideMenu),
      drawer: const DrawerMenu(),
      appBarElevation: 0,
      centerTitle: true,
      body: (layout) => GooglDriveBody(controller: controller),
    );
  }
}

class GooglDriveBody extends StatelessWidget {
  final DDLController controller;

  const GooglDriveBody({Key? key, required this.controller}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: AnimatedBuilder(
        animation: controller,
        builder: (context, child) {
          final childrenInput = [
            Row(
              children: [
                const Text('Input :'),
                const SizedBox(width: 8),
                ElevatedButton(
                  onPressed: controller.onPaste,
                  child: const Text('Clipboard'),
                ),
                const SizedBox(width: 8),
                OutlinedButton(
                  onPressed: controller.clear,
                  child: const Text('Clear'),
                ),
                const Spacer(),
              ],
            ),
            const SizedBox(height: 8),
            TextField(
              controller: controller.inputController,
              maxLines: null,
              decoration: InputDecoration(
                border: const OutlineInputBorder(),
                errorText: controller.inputError,
              ),
              onChanged: controller.onInputChanged,
              textAlignVertical: TextAlignVertical.top,
            ),
          ];

          const padding = EdgeInsets.only(right: 16);
          const childrenNotes = [
            ListTile(
              contentPadding: padding,
              title: Text('NOTES'),
            ),
            ListTile(
              contentPadding: padding,
              title: Text('''
Make sure your file's visibility is set to "Anyone with the link". '''),
            ),
            ListTile(
              contentPadding: padding,
              title: Text('''
If it's set to "Restricted" then only people who are logged in and have been granted access to the file will be able to open the direct link (which probably isn't what you want).'''),
            ),
            ListTile(
              contentPadding: padding,
              title: Text('''
It is support type : file, document, presentation and spreadsheets.'''),
            ),
          ];

          final childrenOutput = [
            Row(
              children: [
                const Text('Output :'),
                const Spacer(),
                ElevatedButton.icon(
                  onPressed: () async {
                    await controller.onCopy();
                    if (context.mounted) {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('Output copied')));
                    }
                  },
                  label: const Text('Copy'),
                  icon: const Icon(Icons.copy),
                ),
              ],
            ),
            const SizedBox(height: 8),
            TextField(
              controller: controller.outputController,
              maxLines: null,
              decoration: const InputDecoration(
                border: OutlineInputBorder(),
              ),
              textAlignVertical: TextAlignVertical.top,
            ),
          ];

          return ResponsiveView(
            builder: (context) {
              return Column(
                children: [
                  ...childrenInput,
                  const SizedBox(height: 16),
                  ...childrenOutput,
                  const SizedBox(height: 16),
                  ...childrenNotes,
                ],
              );
            },
            tablet: (context) {
              return Row(
                children: [
                  Expanded(
                    flex: 2,
                    child: Column(
                      children: [
                        ...childrenInput,
                        const SizedBox(height: 16),
                        ...childrenOutput,
                      ],
                    ),
                  ),
                  const VerticalDivider(width: 32),
                  const Expanded(child: Column(children: childrenNotes)),
                ],
              );
            },
          );
        },
      ),
    );
  }
}
