---
layout: default
title: FAQ
nav_order: 3
---

# FAQ

## How do I reset Oriedita?

To reset all options in Oriedita to the default state remove all files in the _configuration directory_, see the [Configuration] page to find this directory on your operating system.

## Oriedita does not fit on my screen

Some installations of windows use scaling to make everything larger and easier to use. This can cause Oriedita to become larger than the screen. Disable ui scaling to prevent this.

When running Oriedita from the jar, execute the jar as follwos:

```bash
java -jar -D"sun.java2d.uiScale=1" oriedita-X.X.X.jar
```

When using the installer or portable installation navigate to the directory of the installation (C:\Program Files\Oriedita) and edit the `Oriedita.cfg` file in the `app` directory, add the following line at the end of the file.

```
java-options=-Dsun.java2d.uiScale=1
```

## What is the difference between Orihime, OrihimeMod and Oriedita?

[Orihime] is the original software where all other versions are based on. 

OrihimeMod fixes some issues with Orihime. It is build as a mod and loads the original Orihime jar file and add additional functionality to it.

Oriedita is a [fork] of Orihime, this means that the source code of Orihime is changed to create this software. Oriedita is developed on GitHub and it is possible to contribute to the development.

## What is the difference between ORIPA and Oriedita?

[ORIPA] and Oriedita serve a very similar purpose, drawing origami crease patterns and calculating the folded shape of crease patterns.

ORIPA has a different way of drawing, which some people find easier to use.

Oriedita performs better when editing large crease patterns and is able to fold more complex crease patterns.

[Configuration]: ./configuration.md.
[Orihime]: ./orihime.md
[fork]: https://en.wikipedia.org/wiki/Fork_(software_development)
[ORIPA]: https://github.com/oripa/oripa