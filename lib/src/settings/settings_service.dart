import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class SettingsService {
  Future<ThemeMode> themeMode() async {
    final prefs = await SharedPreferences.getInstance();
    try {
      return ThemeMode.values[prefs.getInt('ThemeMode') ?? 0];
    } catch (_) {
      prefs.setInt('ThemeMode', ThemeMode.system.index);
      return ThemeMode.system;
    }
  }

  Future<void> updateThemeMode(ThemeMode theme) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt('ThemeMode', theme.index);
  }
}
