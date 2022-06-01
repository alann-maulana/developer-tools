import 'package:flutter/material.dart';

const double kTabletBreakpoint = 720.0;
const double kDesktopBreakpoint = 1024.0;

class ResponsiveView extends StatelessWidget {
  final double tabletBreakpoint;
  final double desktopBreakpoint;
  final WidgetBuilder? desktop;
  final WidgetBuilder? tablet;
  final WidgetBuilder builder;

  const ResponsiveView({
    Key? key,
    this.tabletBreakpoint = kTabletBreakpoint,
    this.desktopBreakpoint = kDesktopBreakpoint,
    this.desktop,
    this.tablet,
    required this.builder,
  }) : super(key: key);

  bool get _isDesktopBuilderSet => desktop != null;

  bool get _isTabletBuilderSet => tablet != null;

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;

    if (size.width >= desktopBreakpoint) {
      return _isDesktopBuilderSet
          ? desktop!(context)
          : _isTabletBuilderSet
              ? tablet!(context)
              : builder(context);
    }

    if (size.width >= tabletBreakpoint) {
      return _isTabletBuilderSet ? tablet!(context) : builder(context);
    }

    return builder(context);
  }
}

class ResponsiveButton extends StatelessWidget {
  final String label;
  final IconData icon;
  final VoidCallback onTap;

  const ResponsiveButton({
    Key? key,
    required this.label,
    required this.icon,
    required this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ResponsiveView(
      tablet: (context) {
        return OutlinedButton.icon(
          onPressed: onTap,
          icon: Icon(icon),
          label: Text(label),
        );
      },
      builder: (context) {
        return OutlinedButton(
          onPressed: onTap,
          child: Tooltip(
            message: label,
            child: Icon(icon),
          ),
        );
      },
    );
  }
}
