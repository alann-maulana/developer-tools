import 'package:developer_tools/src/base64/base64_view.dart';
import 'package:developer_tools/src/cryptographic/hash_generator_view.dart';
import 'package:developer_tools/src/directdownloadlink/googledrive_view.dart';
import 'package:developer_tools/src/json/jsontodart_view.dart';
import 'package:developer_tools/src/settings/settings_controller.dart';
import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:provider/provider.dart';

import '../blurhash/blur_hash_view.dart';
import 'drawer_menu_header.dart';

class DrawerMenu extends StatelessWidget {
  const DrawerMenu({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    const divider = Divider(height: 0);
    const separator = SizedBox(height: 16);
    final currentRouteName = ModalRoute.of(context)!.settings.name;
    final settingsController = context.read<SettingsController>();

    final scroll = SingleChildScrollView(
      child: Column(
        children: [
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
          DrawerMenuTile(
            leading: Icons.code,
            title: AppLocalizations.of(context)!.jsonToDartSideMenu,
            selected: currentRouteName == JsonToDartView.route,
            onTap: () {
              Navigator.pushNamed(context, JsonToDartView.route);
            },
          ),
          divider,
          DrawerHeaderMenuTile(
            title: AppLocalizations.of(context)!.headerDDLSideMenu,
          ),
          DrawerMenuTile(
            leading: Icons.link_outlined,
            title: AppLocalizations.of(context)!.googleDriveDDLSideMenu,
            selected: currentRouteName == GoogleDriveView.route,
            onTap: () {
              Navigator.pushNamed(context, GoogleDriveView.route);
            },
          ),
          divider,
          separator,
          separator,
          divider,
          Selector<SettingsController, ThemeMode>(
            builder: (context, themeMode, child) {
              return ListTile(
                leading: themeMode == ThemeMode.dark
                    ? const Icon(Icons.dark_mode_outlined)
                    : themeMode == ThemeMode.light
                        ? const Icon(Icons.light_mode_outlined)
                        : const Icon(
                            Icons.system_security_update_good_outlined),
                minLeadingWidth: 0,
                tileColor: Theme.of(context).brightness == Brightness.light
                    ? Colors.white
                    : null,
                title: const Text('Theme'),
                trailing: DropdownButton<ThemeMode>(
                  value: themeMode,
                  onChanged: settingsController.updateThemeMode,
                  isDense: true,
                  underline: const SizedBox.shrink(),
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
            selector: (context, c) => c.themeMode,
          ),
          divider,
        ],
      ),
    );

    return Column(
      children: [
        const DrawerMenuHeader(),
        Expanded(
          child: Container(
            decoration: BoxDecoration(
              border: Border(
                right: BorderSide(
                  color: Theme.of(context).dividerColor,
                ),
              ),
            ),
            child: scroll,
          ),
        ),
      ],
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
    final isLight = Theme.of(context).brightness == Brightness.light;
    final tileColor = isLight ? Colors.white : null;
    final selectedTileColor =
        Theme.of(context).primaryColor.withOpacity(isLight ? 0.1 : 0.5);

    return ListTile(
      leading: Icon(leading),
      minLeadingWidth: 0,
      tileColor: tileColor,
      selectedTileColor: selectedTileColor,
      title: Text(title),
      subtitle: subtitle != null ? Text(subtitle!) : null,
      selected: selected,
      onTap: onTap,
    );
  }
}

class DrawerHeaderMenuTile extends StatelessWidget {
  const DrawerHeaderMenuTile({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    final isLight = Theme.of(context).brightness == Brightness.light;
    final tileColor = isLight ? Colors.white : null;

    return ListTile(
      minLeadingWidth: 0,
      tileColor: tileColor,
      subtitle: Text(title),
    );
  }
}
