---
title: mark
description: mark
date: "2019-11-18T10:34:07+07:00"
slug: mark
authors:
- akhlis
name: mark
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/mark
caniuse: https://caniuse.com/#feat=html5semantic
---

Tag `<mark>` mewakili teks yang ditandai atau disorot untuk tujuan referensi, karena relevansi bagian yang ditandai atau pentingnya dalam konteks terlampir

## Syntax

Tag `<mark>` ditulis seperti `<mark></mark>` dengan teks yang ditandai disisipkan diantara tag pembuka dan penutup.

Seperti ini:

```html
<mark>Teks disini...</mark>
```

{{< code lang="html" >}}
<blockquote>
<p>"Today I swam <mark>100 laps</mark> of my swimming pool... I bet you can't do that!"</p>
<cite>Tom the Toughy</cite>
</blockquote>
<p>What Tom the Toughy fails to tell us is that each lap is only 20 feet long!</p>
{{< /code >}}

{{< browser tag="mark" chrome="6.0" edge="9.0" firefox="4.0" safari="5.0" opera="11.1" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<map>` dengan pengaturan CSS:

```css
mark {
  background-color: yellow;
  color: black;
}
```