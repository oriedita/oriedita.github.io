---
layout: default
nav_order: 2
title: Getting Started
---

# Getting Started

## Installation

Oriedita is distributed in a couple of different ways, on the [latest release page](https://github.com/oriedita/oriedita/releases/latest) you can find download links.

### Multiplatform Jar

The distributed jar file can be executed on any platform supported by Java SE.

Make sure you have at least Java 11 installed, you can download Java from [adoptium.net](https://adoptium.net/index.html?variant=openjdk11&jvmVariant=hotspot) or from other trusted Java distributors.

### Windows Installer

_This is recommended on Microsoft Windows_

The `.exe` file installs Oriedita on your computer, it adds a shortcut to your start menu and associates `.cp` and `.ori` files to open with Oriedita. The installer brings it's own version of Java which is used only by Oriedita, so you don't have to install it yourself.

### Windows Portable Executable

The Windows portable executable comes with it's own version of Java, which is used by Oriedita. Use this version if you have problems installing Java on your computer, but don't want to install Oriedita on your computer.

## Saving

When saving you have to choose between two different save types. Either one has their own advantages.

<dl>
<dt>.ori</dt>
<dd>You can save files using the Oriedita file format .ori, this saves the creasepattern, customized colors and the camera position. This format is recommended when developing a new crease pattern as loading it brings you back to the same state as you left it.</dd>
<dt>.cp</dt>
<dd>You can also use the .cp format to save files, this file format only saves creases (so no circles or state). But this format is more lightweight and portable and should be used to share a crease pattern with someone else. This format can also be opened in other origami crease pattern software.</dd>
</dl>