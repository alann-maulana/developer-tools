import 'package:developer_tools/src/views/responsive_view.dart';
import 'package:flutter/material.dart';
import 'package:flutter_native/flutter_native.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';

import '../dashboard/drawer_menu.dart';
import 'blurhash_controller.dart';

class BlurHashView extends StatelessWidget {
  static const String route = 'blur-hash';

  BlurHashView({Key? key})
      : controller = BlurHashController(),
        super(key: key);

  final BlurHashController controller;

  @override
  Widget build(BuildContext context) {
    return ResponsiveScaffold(
      title: Text(AppLocalizations.of(context)!.blurHashEncoderDecoderSideMenu),
      drawer: const DrawerMenu(),
      appBarElevation: 0,
      centerTitle: true,
      body: BlurHashBody(controller: controller),
    );
  }
}

class BlurHashBody extends StatelessWidget {
  final BlurHashController controller;

  const BlurHashBody({Key? key, required this.controller}) : super(key: key);

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
                Radio<BlurHashMode>(
                  value: BlurHashMode.encode,
                  groupValue: controller.mode,
                  onChanged: (value) {
                    if (value != null) controller.mode = value;
                  },
                ),
                const Text('Encode'),
                const SizedBox(width: 8),
                Radio<BlurHashMode>(
                  value: BlurHashMode.decode,
                  groupValue: controller.mode,
                  onChanged: (value) {
                    if (value != null) controller.mode = value;
                  },
                ),
                const Text('Decode'),
              ],
            ),
            const SizedBox(height: 8),
            TextField(
              controller: controller.inputController,
              maxLines: 10,
              minLines: 1,
              decoration: InputDecoration(
                border: const OutlineInputBorder(),
                errorText: controller.inputError,
                helperText: controller.decodeMode.value(),
              ),
              onChanged: controller.onInputChanged,
              textAlignVertical: TextAlignVertical.top,
            ),
            const SizedBox(height: 16),
            AspectRatio(
              aspectRatio: 16 / 9,
              child: Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(8),
                  border: Border.all(
                    color: Theme.of(context).dividerColor,
                  ),
                  image: controller.imageInput != null
                      ? DecorationImage(
                          image: controller.imageInput!,
                          fit: BoxFit.contain,
                          alignment: Alignment.center,
                        )
                      : null,
                ),
                child: controller.decodeMode == BlurHashDecode.unknown
                    ? const FlutterLogo()
                    : null,
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
            const SizedBox(height: 8),
            TextField(
              controller: controller.outputController,
              maxLines: 10,
              minLines: 1,
              decoration: InputDecoration(
                border: const OutlineInputBorder(),
                helperText: controller.decodeMode.value() != null
                    ? 'Generated Blur Hash'
                    : null,
              ),
              textAlignVertical: TextAlignVertical.top,
            ),
            const SizedBox(height: 16),
            AspectRatio(
              aspectRatio: 16 / 9,
              child: Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(8),
                  border: Border.all(
                    color: Theme.of(context).dividerColor,
                  ),
                  image: controller.imageOutput != null
                      ? DecorationImage(
                          image: controller.imageOutput!,
                          fit: BoxFit.contain,
                          alignment: Alignment.center,
                        )
                      : null,
                ),
                child: controller.decodeMode == BlurHashDecode.unknown
                    ? const FlutterLogo()
                    : null,
              ),
            ),
          ];

          return ResponsiveView(
            builder: (context) {
              return SingleChildScrollView(
                child: Column(
                  children: [
                    ...childrenInput,
                    if (controller.mode == BlurHashMode.encode)
                      const SizedBox(height: 16),
                    if (controller.mode == BlurHashMode.encode)
                      ...childrenOutput,
                  ],
                ),
              );
            },
            tablet: (context) {
              return Row(
                children: [
                  Expanded(
                    child: Column(children: childrenInput),
                  ),
                  const VerticalDivider(width: 32),
                  Expanded(
                    child: controller.mode == BlurHashMode.encode
                        ? Column(children: childrenOutput)
                        : const SizedBox.shrink(),
                  ),
                ],
              );
            },
          );
        },
      ),
    );
  }
}
