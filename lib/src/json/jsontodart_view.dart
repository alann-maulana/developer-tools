import 'package:developer_tools/src/dashboard/drawer_menu.dart';
import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:flutter_native/flutter_native.dart';

import 'jsontodart_controller.dart';

class JsonToDartView extends StatelessWidget {
  static const String route = 'json-to-dart';

  JsonToDartView({Key? key})
      : controller = JsonToDartController(),
        super(key: key);

  final JsonToDartController controller;

  @override
  Widget build(BuildContext context) {
    return ResponsiveScaffold(
      title: Text(AppLocalizations.of(context)!.jsonToDartSideMenu),
      drawer: const DrawerMenu(),
      body: JsonToDartBody(controller: controller),
    );
  }
}

class JsonToDartBody extends StatelessWidget {
  final JsonToDartController controller;

  const JsonToDartBody({Key? key, required this.controller}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: AnimatedBuilder(
        animation: controller,
        builder: (context, child) {
          return Column(
            children: [
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
              Expanded(
                child: TextField(
                  controller: controller.inputController,
                  maxLines: null,
                  expands: true,
                  decoration: InputDecoration(
                    border: const OutlineInputBorder(),
                    errorText: controller.inputError,
                  ),
                  onChanged: controller.onInputChanged,
                  textAlignVertical: TextAlignVertical.top,
                ),
              ),
              const SizedBox(height: 16),
              Row(
                children: [
                  const Text('Output :'),
                  const Spacer(),
                  ElevatedButton.icon(
                    onPressed: () async {
                      await controller.onCopy();
                      ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(content: Text('Output copied')));
                    },
                    label: const Text('Copy'),
                    icon: const Icon(Icons.copy),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              Expanded(
                child: TextField(
                  controller: controller.outputController,
                  maxLines: null,
                  expands: true,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                  ),
                  textAlignVertical: TextAlignVertical.top,
                ),
              ),
            ],
          );
        },
      ),
    );
  }
}
