import 'package:developer_tools/src/base64/base64_view.dart';
import 'package:developer_tools/src/cryptographic/hash_generator_view.dart';
import 'package:developer_tools/src/settings/settings_controller.dart';
import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';

import '../blurhash/blur_hash_view.dart';
import 'drawer_menu_header.dart';

class DrawerMenu extends StatelessWidget {
  const DrawerMenu({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    const divider = Divider(height: 0);
    const separator = SizedBox(height: 16);
    final currentRouteName = ModalRoute.of(context)!.settings.name;

    return SingleChildScrollView(
      child: Column(
        children: [
          const DrawerMenuHeader(),
          separator,
          divider,
          DrawerMenuTile(
            leading: Icons.enhanced_encryption_outlined,
            title: AppLocalizations.of(context)!.hashGeneratorSideMenu,
            selected: currentRouteName == HashGeneratorView.route,
            onTap: () {
              Navigator.pushNamed(context, HashGeneratorView.route);
            },
          ),
          divider,
          DrawerMenuTile(
            leading: Icons.sports_baseball_outlined,
            title: AppLocalizations.of(context)!.base64EncoderDecoderSideMenu,
            selected: currentRouteName == Base64View.route,
            onTap: () {
              Navigator.pushNamed(context, Base64View.route);
            },
          ),
          divider,
          DrawerMenuTile(
            leading: Icons.blur_circular_outlined,
            title: AppLocalizations.of(context)!.blurHashEncoderDecoderSideMenu,
            selected: currentRouteName == BlurHashView.route,
            onTap: () {
              Navigator.pushNamed(context, BlurHashView.route);
            },
          ),
          divider,
          separator,
          separator,
          divider,
          AnimatedBuilder(
            animation: settingsController,
            builder: (context, child) {
              return ListTile(
                leading: settingsController.isDark
                    ? const Icon(Icons.dark_mode_outlined)
                    : settingsController.isLight
                        ? const Icon(Icons.light_mode_outlined)
                        : const Icon(
                            Icons.system_security_update_good_outlined),
                minLeadingWidth: 0,
                dense: true,
                title: const Text('Theme'),
                trailing: DropdownButton<ThemeMode>(
                  value: settingsController.themeMode,
                  onChanged: settingsController.updateThemeMode,
                  isDense: true,
                  items: const [
                    DropdownMenuItem(
                      value: ThemeMode.system,
                      child: Text('System'),
                    ),
                    DropdownMenuItem(
                      value: ThemeMode.light,
                      child: Text('Light'),
                    ),
                    DropdownMenuItem(
                      value: ThemeMode.dark,
                      child: Text('Dark'),
                    )
                  ],
                ),
              );
            },
          ),
          divider,
        ],
      ),
    );
  }
}

class DrawerMenuTile extends StatelessWidget {
  const DrawerMenuTile({
    Key? key,
    required this.leading,
    required this.title,
    this.subtitle,
    this.selected = false,
    this.onTap,
  }) : super(key: key);

  final IconData leading;
  final String title;
  final String? subtitle;
  final bool selected;
  final GestureTapCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: Icon(leading),
      minLeadingWidth: 0,
      dense: true,
      title: Text(title),
      subtitle: subtitle != null ? Text(subtitle!) : null,
      selected: selected,
      onTap: onTap,
    );
  }
}