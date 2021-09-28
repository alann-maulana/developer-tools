import 'package:developer_tools/src/cryptographic/hash_generator_view.dart';
import 'package:developer_tools/src/dashboard/dashboard_view.dart';
import 'package:flutter/material.dart';

import 'base64/base64_view.dart';
import 'blurhash/blur_hash_view.dart';

class AppRoutes {
  static Map<String, WidgetBuilder> get routes {
    return <String, WidgetBuilder>{};
  }

  static Route<dynamic> onGenerateRoute(RouteSettings settings) {
    WidgetBuilder builder = (context) {
      return Scaffold(
        appBar: AppBar(
          title: const Text('Page Not Found'),
        ),
        body: Center(
          child: Text(
            'Losing your path? 🙈🙉🙊',
            style: Theme.of(context).textTheme.headline4,
          ),
        ),
      );
    };
    bool disableAnimation = false;
    bool fullscreenDialog = false;

    switch (settings.name) {
      case Navigator.defaultRouteName:
        builder = (context) => const DashboardView();
        disableAnimation = true;
        break;
      case HashGeneratorView.route:
        builder = (context) => HashGeneratorView();
        disableAnimation = true;
        break;
      case Base64View.route:
        builder = (context) => Base64View();
        disableAnimation = true;
        break;
      case BlurHashView.route:
        builder = (context) => BlurHashView();
        disableAnimation = true;
        break;
    }

    if (disableAnimation) {
      return NoAnimationMaterialPageRoute(
        builder: builder,
        fullscreenDialog: fullscreenDialog,
        maintainState: true,
        settings: settings,
      );
    }

    return MaterialPageRoute(
      builder: builder,
      fullscreenDialog: fullscreenDialog,
      maintainState: true,
      settings: settings,
    );
  }
}

class NoAnimationMaterialPageRoute<T> extends MaterialPageRoute<T> {
  NoAnimationMaterialPageRoute({
    required WidgetBuilder builder,
    RouteSettings? settings,
    bool maintainState = true,
    bool fullscreenDialog = false,
  }) : super(
          builder: builder,
          maintainState: maintainState,
          settings: settings,
          fullscreenDialog: fullscreenDialog,
        );

  @override
  Widget buildTransitions(BuildContext context, Animation<double> animation,
      Animation<double> secondaryAnimation, Widget child) {
    return child;
  }
}
