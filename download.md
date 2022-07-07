---
layout: default
nav_order: 2
title: Download
---

# Download

<div class="anchor" id="windows"></div>
<div class="anchor" id="mac"></div>
<div class="anchor" id="linux"></div>

[Windows](#windows){: .btn .btn-outline .windows-btn :}
[Linux](#linux){: .btn .btn-outline .linux-btn :}
[Mac](#mac){: .btn .btn-outline .mac-btn :}
[Show All](#){: .btn .btn-outline .all-btn :}

The latest version of Oriedita is **{{ site.data.version.latest }}** you can download it from this page.

<div class="platform" id="windows-install">
<h2>Windows</h2>
<h3 id="windows-installer">Windows installer</h3>

<p>Installs Oriedita on your computer, it adds a shortcut to your start menu and associates <code>.cp</code> and <code>.ori</code> files to open with Oriedita. The installer brings it's own version of Java which is used only by Oriedita, so you don't have to install it yourself.</p>

<p><a href="https://github.com/oriedita/oriedita/releases/download/v{{ site.data.version.latest }}/Oriedita-{{ site.data.version.latest }}.exe" class="btn btn-download">Download Windows Installer (.exe)</a></p>

<h3 id="windows-portable-executable">Windows Portable Executable</h3>

<p>The Windows portable executable comes with it's own version of Java, which is used by Oriedita. Use this version if you have problems installing Java on your computer, but don't want to install Oriedita on your computer.</p>

<p><a href="https://github.com/oriedita/oriedita/releases/download/v{{ site.data.version.latest }}/Oriedita.Portable.Windows.{{ site.data.version.latest }}.zip" class="btn btn-download">Download Windows Portable (.zip)</a></p>

</div>

<div class="platform" id="linux-install">
<h2>Linux</h2>
<h3 id="ubuntu-debian-installer">Ubuntu/Debian installer</h3>

<p>Installs Oriedita on Ubuntu and other Debian-like Linux distributions. Creates a shortcut in your launcher and associates <code>.cp</code> and <code>.ori</code> files to open with Oriedita.</p>

<p><a href="https://github.com/oriedita/oriedita/releases/download/v{{ site.data.version.latest }}/oriedita_{{ site.data.version.latest }}-1_amd64.deb" class="btn btn-download">Download Linux Installer (.deb)</a></p>

<h3 id="linux-portable">Linux portable</h3>

<p>A prebuild version of Oriedita with an embedded Java runtime. Execute the <code>Oriedita/bin/Oriedita</code> file to start Oriedita. This should work on most x64 Linux installations.</p>

<p><a href="https://github.com/oriedita/oriedita/releases/download/v{{ site.data.version.latest }}/Oriedita.Portable.Linux.{{ site.data.version.latest }}.zip" class="btn btn-download">Download Linux Portable (.zip)</a></p>

</div>

<div class="platform" id="mac-install">
<h2>Mac</h2>
<p><em>These packages are not trusted by Mac, you need to explicitly trust them. You can do this by running <code>xattr -d com.apple.quarantine Oriedita.app</code> from the directory where Oriedita.app is placed.</em></p>

<h3 id="mac-installer">Mac installer</h3>

<p>This version will install Oriedita on your Mac.</p>

<p>
<a href="https://github.com/oriedita/oriedita/releases/download/v{{ site.data.version.latest }}/Oriedita-{{ site.data.version.latest }}.dmg" class="btn btn-download">Download Mac Installer (.dmg)</a>
</p>

<h3 id="mac-portable-app">Mac portable app</h3>

<p>A prebuild version of Oriedita with an embedded Java runtime.</p>

<p><a href="https://github.com/oriedita/oriedita/releases/download/v{{ site.data.version.latest }}/Oriedita.Portable.Mac.{{ site.data.version.latest }}.zip" class="btn btn-download">Download Mac Portable (.zip)</a></p>

</div>

## Cross platform

### Java .jar

Runs on any platform that is supported by Java SE. Make sure you have at least **Java 11** installed, you can download Java from [adoptium.net](https://adoptium.net/index.html?variant=openjdk11&jvmVariant=hotspot) or from other trusted Java distributors.

[Download Java Executable Jar (.jar)](https://github.com/oriedita/oriedita/releases/download/v{{ site.data.version.latest }}/oriedita-{{ site.data.version.latest }}.jar){: .btn .btn-download :}

## Older versions

Download older releases from the GitHub Releases page.

[Older releases](https://github.com/oriedita/oriedita/releases){: .btn :}

<script src="https://cdnjs.cloudflare.com/ajax/libs/platform/1.3.6/platform.min.js"></script>
<script type="text/javascript">
    {% comment %}
    Automatically redirect the user to the page of their platform
    If it doesn't exist all platforms will be shown.
    {% endcomment %}

    if (platform.os.family && location.hash == "") {
        if (platform.os.family.includes("Windows")) {
            location.hash = "windows";
        }
        if (platform.os.family.includes("Ubuntu") || platform.os.family.includes("Linux")) {
            location.hash = "linux";
        }
        if (platform.os.family.includes("OS X")) {
            location.hash = "mac";
        }
    }
</script>