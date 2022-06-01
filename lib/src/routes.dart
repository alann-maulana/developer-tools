import 'package:developer_tools/src/base64/base64_view.dart' deferred as base64;
import 'package:developer_tools/src/blurhash/blur_hash_view.dart'
    deferred as blur_hash;
import 'package:developer_tools/src/cryptographic/hash_generator_view.dart'
    deferred as hash;
import 'package:developer_tools/src/dashboard/dashboard_view.dart'
    deferred as dashboard;
import 'package:developer_tools/src/directdownloadlink/googledrive_view.dart'
    deferred as direct_link;
import 'package:developer_tools/src/json/jsontodart_view.dart' deferred as json;
import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';

class AppRoutes {
  static Map<String, WidgetBuilder> get routes {
    return <String, WidgetBuilder>{};
  }

  static Route<dynamic> onGenerateRoute(RouteSettings settings) {
    WidgetBuilder builder = (context) => FutureBuilder(
        future: dashboard.loadLibrary(),
        builder: (context, snapshot) {
          return dashboard.DashboardView();
        });
    bool disableAnimation = kIsWeb;
    bool fullscreenDialog = false;

    switch (settings.name) {
      case Navigator.defaultRouteName:
        builder = (context) => FutureBuilder(
            future: dashboard.loadLibrary(),
            builder: (context, snapshot) {
              return dashboard.DashboardView();
            });
        break;
      case 'hash-generator':
        builder = (context) => FutureBuilder(
            future: hash.loadLibrary(),
            builder: (context, snapshot) {
              return hash.HashGeneratorView();
            });
        break;
      case 'base64':
        builder = (context) => FutureBuilder(
            future: base64.loadLibrary(),
            builder: (context, snapshot) {
              return base64.Base64View();
            });
        break;
      case 'blur-hash':
        builder = (context) => FutureBuilder(
            future: blur_hash.loadLibrary(),
            builder: (context, snapshot) {
              return blur_hash.BlurHashView();
            });
        break;
      case 'json-to-dart':
        builder = (context) => FutureBuilder(
            future: json.loadLibrary(),
            builder: (context, snapshot) {
              return json.JsonToDartView();
            });
        break;
      case 'google-drive-direct-download-link-generator':
        builder = (context) => FutureBuilder(
            future: direct_link.loadLibrary(),
            builder: (context, snapshot) {
              return direct_link.GoogleDriveView();
            });
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
