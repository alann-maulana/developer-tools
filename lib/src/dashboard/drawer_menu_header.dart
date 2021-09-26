import 'package:developer_tools/src/views/responsive_view.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:flutter/material.dart';

class DrawerMenuHeader extends StatelessWidget {
  const DrawerMenuHeader({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ResponsiveView(
      builder: (BuildContext context) {
        return UserAccountsDrawerHeader(
          accountName: Text(AppLocalizations.of(context)!.appTitle),
          accountEmail: const Text('kangmas.alan@gmail.com'),
        );
      },
      tablet: (BuildContext context) {
        return AppBar(
          automaticallyImplyLeading: false,
          title: Text(AppLocalizations.of(context)!.appTitle),
        );
      },
    );
  }
}