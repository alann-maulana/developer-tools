import 'package:developer_tools/src/dashboard/drawer_menu.dart';
import 'package:developer_tools/src/views/responsive_view.dart';
import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:flutter_native/flutter_native.dart';

import 'hash_generator_controller.dart';

class HashGeneratorView extends StatelessWidget {
  static const String route = 'hash-generator';

  HashGeneratorView({Key? key})
      : controller = HashGeneratorController(),
        super(key: key);

  final HashGeneratorController controller;

  @override
  Widget build(BuildContext context) {
    return ResponsiveScaffold(
      title: Text(AppLocalizations.of(context)!.hashGeneratorSideMenu),
      drawer: const DrawerMenu(),
      appBarElevation: 0,
      centerTitle: true,
      body: HashGeneratorBody(controller: controller),
    );
  }
}

class HashGeneratorBody extends StatelessWidget {
  final HashGeneratorController controller;

  const HashGeneratorBody({Key? key, required this.controller})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: AnimatedBuilder(
        animation: controller,
        builder: (context, child) {
          List<Widget> childrenInput([bool vertical = false]) {
            return [
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
              if (vertical)
                TextField(
                  controller: controller.inputController,
                  maxLines: 12,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                  ),
                  onChanged: controller.onInputChanged,
                  textAlignVertical: TextAlignVertical.top,
                )
              else
                Expanded(
                  child: TextField(
                    controller: controller.inputController,
                    maxLines: null,
                    expands: true,
                    decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                    ),
                    onChanged: controller.onInputChanged,
                    textAlignVertical: TextAlignVertical.top,
                  ),
                ),
            ];
          }

          final childrenOutput = [
            Row(
              children: [
                const Text('Output :'),
                const Spacer(),
                OutlinedButton.icon(
                  onPressed: () {},
                  label:
                      Text('${controller.inputController.text.length} bytes'),
                  icon: const Icon(Icons.format_size),
                ),
                const SizedBox(width: 8),
              ],
            ),
            const SizedBox(height: 8),
            _OutputTextField(
              controller: controller.md5OutputController,
              labelText: 'MD5',
              onCopy: () async {
                await controller.onCopy(controller.md5OutputController.text);
                ScaffoldMessenger.of(context)
                    .showSnackBar(const SnackBar(content: Text('MD5 copied')));
              },
            ),
            const SizedBox(height: 16),
            _OutputTextField(
              controller: controller.sha1OutputController,
              labelText: 'SHA-1',
              onCopy: () async {
                await controller.onCopy(controller.sha1OutputController.text);
                ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('SHA-1 copied')));
              },
            ),
            const SizedBox(height: 16),
            _OutputTextField(
              controller: controller.sha224OutputController,
              labelText: 'SHA-224',
              onCopy: () async {
                await controller.onCopy(controller.sha224OutputController.text);
                ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('SHA-224 copied')));
              },
            ),
            const SizedBox(height: 16),
            _OutputTextField(
              controller: controller.sha256OutputController,
              labelText: 'SHA-256',
              onCopy: () async {
                await controller.onCopy(controller.sha256OutputController.text);
                ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('SHA-256 copied')));
              },
            ),
            const SizedBox(height: 16),
            _OutputTextField(
              controller: controller.sha384OutputController,
              labelText: 'SHA-384',
              onCopy: () async {
                await controller.onCopy(controller.sha384OutputController.text);
                ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('SHA-384 copied')));
              },
            ),
            const SizedBox(height: 16),
            _OutputTextField(
              controller: controller.sha512OutputController,
              labelText: 'SHA-512',
              onCopy: () async {
                await controller.onCopy(controller.sha512OutputController.text);
                ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('SHA-512 copied')));
              },
            ),
            const SizedBox(height: 16),
            _OutputTextField(
              controller: controller.sha512224OutputController,
              labelText: 'SHA-512/224',
              onCopy: () async {
                await controller
                    .onCopy(controller.sha512224OutputController.text);
                ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('SHA-512/224 copied')));
              },
            ),
            const SizedBox(height: 16),
            _OutputTextField(
              controller: controller.sha512256OutputController,
              labelText: 'SHA-512/256',
              onCopy: () async {
                await controller
                    .onCopy(controller.sha512256OutputController.text);
                ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('SHA-512/256 copied')));
              },
            ),
            const SizedBox(height: 32),
            TextField(
              controller: controller.hMacKeyOutputController,
              maxLines: 1,
              decoration: const InputDecoration(
                border: OutlineInputBorder(),
                labelText: 'HMAC Key',
                helperText: 'Type to change HMAC key (a secret shared between '
                    'the sender and receiver of the message)',
                helperMaxLines: 2,
              ),
              onChanged: controller.onHMacKeyChanged,
            ),
            const SizedBox(height: 16),
            _OutputTextField(
              controller: controller.hMacMd5OutputController,
              labelText: 'HMAC-MD5',
              onCopy: () async {
                await controller
                    .onCopy(controller.hMacMd5OutputController.text);
                ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('HMAC-MD5 copied')));
              },
            ),
            const SizedBox(height: 16),
            _OutputTextField(
              controller: controller.hMacSha1OutputController,
              labelText: 'HMAC-SHA1',
              onCopy: () async {
                await controller
                    .onCopy(controller.hMacSha1OutputController.text);
                ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('HMAC-SHA1 copied')));
              },
            ),
            const SizedBox(height: 16),
            _OutputTextField(
              controller: controller.hMacSha256OutputController,
              labelText: 'HMAC-SHA256',
              onCopy: () async {
                await controller
                    .onCopy(controller.hMacSha256OutputController.text);
                ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('HMAC-SHA256 copied')));
              },
            ),
            const SizedBox(height: 16),
            _OutputTextField(
              controller: controller.hMacSha512OutputController,
              labelText: 'HMAC-SHA512',
              onCopy: () async {
                await controller
                    .onCopy(controller.hMacSha512OutputController.text);
                ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('HMAC-SHA512 copied')));
              },
            ),
          ];

          return ResponsiveView(
            builder: (context) {
              return SingleChildScrollView(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    ...childrenInput(true),
                    const Divider(height: 32),
                    ...childrenOutput,
                  ],
                ),
              );
            },
            tablet: (context) {
              return Row(
                children: [
                  Expanded(
                    child: Column(
                      children: childrenInput(),
                    ),
                  ),
                  const VerticalDivider(width: 32),
                  Expanded(
                    child: SingleChildScrollView(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: childrenOutput,
                      ),
                    ),
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

class _OutputTextField extends StatelessWidget {
  const _OutputTextField({
    required this.controller,
    required this.labelText,
    required this.onCopy,
  });

  final TextEditingController controller;
  final String labelText;
  final VoidCallback onCopy;

  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: controller,
      maxLines: 1,
      decoration: InputDecoration(
        border: const OutlineInputBorder(),
        labelText: labelText,
        suffixIcon: InkWell(
          onTap: onCopy,
          child: const Icon(Icons.copy),
        ),
      ),
      readOnly: true,
    );
  }
}
