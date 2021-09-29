import 'package:developer_tools/src/views/responsive_view.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:flutter/material.dart';

class DrawerMenuHeader extends StatelessWidget {
  const DrawerMenuHeader({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final title = Text.rich(TextSpan(
      children: [
        const WidgetSpan(child: FlutterLogo()),
        const TextSpan(text: '  '),
        TextSpan(text: AppLocalizations.of(context)!.appTitle),
      ],
    ));

    return ResponsiveView(
      builder: (BuildContext context) {
        return UserAccountsDrawerHeader(
          accountName: title,
          accountEmail: const Text('kangmas.alan@gmail.com'),
        );
      },
      tablet: (BuildContext context) {
        return AppBar(
          automaticallyImplyLeading: false,
          title: title,
          centerTitle: true,
          elevation: 0,
        );
      },
    );
  }
}
