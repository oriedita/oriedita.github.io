---
layout: default
title: FOLD File Format
nav_order: 5
---

# FOLD File Format

Oriedita supports importing and exporting to the [FOLD](https://github.com/edemaine/fold/blob/main/doc/spec.md) file format. 

## Additions to FOLD

There are some custom additions to the FOLD format for oriedita. These fields always start with `oriedita:`.

### Circles

Oriedita circles are stored in the `oriedita:circles_coords`, `oriedita:circles_radii` and `oriedita:circles_colors` fields in the fold file.

```json
{
  "oriedita:circles_coords": [[-150.0, -150.0], [200.0, -200.0], [0, 0.0]],
  "oriedita:circles_radii": [50.0, 300.0, 180.0],
  "oriedita:circles_colors": ["3", "3", "3"]
}
```

### Texts

Oriedita texts are stored in the `oriedita:texts_coords` and `oriedita:texts_text` fields in the fold file.

```json
{
  "oriedita:texts_text": ["This is test text", "Additional test text"],
  "oriedita:texts_coords": [[9.0, -121.0], [-156.0, 17.0]]
}
```