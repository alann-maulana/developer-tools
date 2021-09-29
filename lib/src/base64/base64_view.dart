import 'package:developer_tools/src/dashboard/drawer_menu.dart';
import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:flutter_native/flutter_native.dart';

import 'base64_controller.dart';

class Base64View extends StatelessWidget {
  static const String route = 'base64';

  Base64View({Key? key})
      : controller = Base64Controller(),
        super(key: key);

  final Base64Controller controller;

  @override
  Widget build(BuildContext context) {
    return ResponsiveScaffold(
      title: Text(AppLocalizations.of(context)!.base64EncoderDecoderSideMenu),
      drawer: const DrawerMenu(),
      appBarElevation: 0,
      centerTitle: true,
      body: Base64Body(controller: controller),
    );
  }
}

class Base64Body extends StatelessWidget {
  final Base64Controller controller;

  const Base64Body({Key? key, required this.controller}) : super(key: key);

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
                  Radio<Base64Mode>(
                    value: Base64Mode.encode,
                    groupValue: controller.mode,
                    onChanged: (value) {
                      if (value != null) controller.mode = value;
                    },
                  ),
                  const Text('Encode'),
                  const SizedBox(width: 8),
                  Radio<Base64Mode>(
                    value: Base64Mode.decode,
                    groupValue: controller.mode,
                    onChanged: (value) {
                      if (value != null) controller.mode = value;
                    },
                  ),
                  const Text('Decode'),
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
                  if (controller.mode == Base64Mode.encode)
                    OutlinedButton.icon(
                      onPressed: controller.useAsInput,
                      label: const Text('Use as Input'),
                      icon: const Icon(Icons.arrow_upward_outlined),
                    ),
                  if (controller.mode == Base64Mode.encode)
                    const SizedBox(width: 8),
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
