import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:flutter_native/flutter_native.dart';

import 'drawer_menu.dart';

class DashboardView extends StatelessWidget {
  const DashboardView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ResponsiveScaffold(
      title: Text(AppLocalizations.of(context)!.appTitle),
      drawer: const DrawerMenu(),
      appBarElevation: 0,
      centerTitle: true,
      body: Column(
        mainAxisSize: MainAxisSize.max,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        mainAxisAlignment: MainAxisAlignment.center,
        children: const [
          FlutterLogo(size: 96),
          SizedBox(height: 16),
          Text(
            'Select a tools on the left side',
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }
}
