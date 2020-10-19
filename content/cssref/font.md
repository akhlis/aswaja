---
title: font
description: font
date: "2019-11-12T10:34:07+07:00"
slug: font
css_collections:
- typography
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/font
---

Properti CSS `font` adalah properti singkatan yang menggabungkan semua sub-properti berikut dalam satu deklarasi.

Yaitu: `font-style font-variant font-weight font-size line-height` dan `font-family`.

```css
body {
  font: normal small-caps normal 16px/1.4 Georgia;
}

/* sama seperti:

body {
  font-family: Georgia;
  line-height: 1.4;
  font-weight: normal;
  font-stretch: normal;
  font-variant: small-caps;
  font-size: 16px;
}
 */
 ```

Ada tujuh sub-properti `font`, termasuk:
- `font-stretch`: properti ini mengatur lebar font, seperti terkondensasi atau diperluas.
    - `normal`
    - `ultra-condensed`
    - `extra-condensed`
    - `condensed`
    - `semi-condensed`
    - `semi-expanded`
    - `expanded`
    - `extra-expanded`
    - `ultra-expanded`
- `font-style`: membuat teks tampak miring atau miring.
    - `normal`
    - `italic`
    - `oblique`
    - `inherit`
- `font-variant`: mengubah teks target menjadi huruf kecil.
    - `normal`
    - `small-caps`
    - `inherit`
- `font-weight`: mengatur berat atau ketebalan font.
    - `normal`
    - `bold`
    - `bolder`
    - `lighter`
    - `100, 200, 300, 400, 500, 600, 700, 800, 900`
    - `inherit`
- `font-size`: mengatur ketinggian font.
    - `xx-small`
    - `x-small`
    - `small`
    - `medium`
    - `large`
    - `x-large`
    - `xx-large`
    - `smaller, larger`
    - `percentage`
    - `inherit`
- `line-height`: mendefinisikan jumlah ruang di atas dan di bawah elemen inline.
    - `normal`
    - `number (font-size multiplier)`
    - `percentage`
- `font-family`: mendefinisikan font yang diterapkan pada elemen.
    - `sans-serif`
    - `serif`
    - `monospace`
    - `cursive`
    - `fantasy`
    - `caption`
    - `icon`
    - `menu`
    - `message-box`
    - `small-caption`
    - `status-bar`
    - `"string"`

## CSS Syntax
```css
font: font-style font-variant font-weight font-size/line-height font-family | caption | icon | menu | message-box | small-caption | status-bar | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.font="italic small-caps bold 12px arial,sans-serif"
```

{{< cssref default="nilai default dari properti font" inherited="ya" animatable="ya" version="CSS1" >}}