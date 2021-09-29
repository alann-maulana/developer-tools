import 'dart:ui';

import 'package:developer_tools/src/dashboard/drawer_menu.dart';
import 'package:developer_tools/src/views/responsive_view.dart';
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
                const SizedBox(width: 16),
                Expanded(
                  child: TextField(
                    controller: controller.classController,
                    maxLines: 1,
                    decoration: const InputDecoration(
                      hintText: 'Dart class name',
                      isDense: true,
                    ),
                    onChanged: controller.onClassChanged,
                    style: const TextStyle(
                      fontFeatures: [FontFeature.tabularFigures()],
                    ),
                  ),
                ),
                PopupMenuButton<String>(
                  tooltip: 'Options',
                  padding: EdgeInsets.zero,
                  itemBuilder: (BuildContext context) {
                    return <PopupMenuEntry<String>>[
                      CheckedPopupMenuItem(
                        value: 'final',
                        checked: controller.finalField,
                        child: const Text('Final Field'),
                      ),
                      CheckedPopupMenuItem(
                        value: 'private',
                        checked: controller.privateField,
                        child: const Text('Private Field'),
                      ),
                      const PopupMenuDivider(),
                      const CheckedPopupMenuItem(
                        value: 'private',
                        checked: true,
                        child: Text('Null Safety'),
                        enabled: false,
                      ),
                    ];
                  },
                  onSelected: (value) {
                    if (value == 'final') {
                      controller.finalField = !controller.finalField;
                    } else if (value == 'private') {
                      controller.privateField = !controller.privateField;
                    }
                  },
                ),
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
                style: const TextStyle(
                  fontFeatures: [FontFeature.tabularFigures()],
                ),
              ),
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
                    ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('Output copied')));
                  },
                  label: const Text('Copy'),
                  icon: const Icon(Icons.copy),
                ),
              ],
            ),
            const SizedBox(height: 20),
            Expanded(
              child: TextField(
                controller: controller.outputController,
                maxLines: null,
                expands: true,
                decoration: const InputDecoration(
                  border: OutlineInputBorder(),
                ),
                textAlignVertical: TextAlignVertical.top,
                style: const TextStyle(
                  fontFeatures: [FontFeature.tabularFigures()],
                ),
                readOnly: true,
              ),
            ),
          ];

          return ResponsiveView(
            builder: (context) {
              return Column(
                children: [
                  ...childrenInput,
                  const SizedBox(height: 16),
                  ...childrenOutput,
                ],
              );
            },
            tablet: (context) {
              return Row(
                children: [
                  Expanded(child: Column(children: childrenInput)),
                  const VerticalDivider(width: 32),
                  Expanded(child: Column(children: childrenOutput)),
                ],
              );
            },
          );
        },
      ),
    );
  }
}
