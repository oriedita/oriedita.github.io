---
layout: default
title: Configuration
nav_order: 3
---
# Configuration

Configuration is saved to the following directory, called the _configuration directory_:

- `%APPDATA%\oriedita` on Windows
- `~/Library/Application Support/oriedita` on Mac
- `~/.oriedita` on Linux and other systems

It should not be needed to access files in this directory yourself.

## Application state

The application state is saved to `config.json` in the configuration directory. It contains information about the application and is restored when the application starts. Delete this file if any problems occur.
