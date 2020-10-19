---
title: h2
description: h2
date: "2019-11-18T10:34:07+07:00"
slug: h2
authors:
- akhlis
name: h2
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/h2
---

Tag `<h2>` mewakili judul level 2 dalam dokumen HTML.

HTML terdiri dari 6 level judul yang diberi peringkat berdasarkan keperluan. Yaitu `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, dan `<h6>`.

Judul dengan peringkat tertinggi disebut dengan tag `h1` (ukuran teks terbesar), dan peringkat terendah disebut tag `<h6>` (ukuran teks terkecil).

Browser biasanya memuat judul dalam berbagai ukuran - dengan `<h1>` sebagai yang terbesar dan `<h6>` sebagai yang terkecil.

## Syntax

Tag `<h2>` ditulis seperti `<h2></h2>` dengan teks judul diletakkan diantara tag pembuka dan penutup.

```html
<h2>Heading</h2>
```

{{< code lang="html" >}}
<h2>Judul 2</h2>
<p>Teks Paragraf...</p>
{{< /code >}}

#### Perbandingan ukuran Judul

{{< code lang="html" >}}
<h1>Judul 1</h1>
<p>Teks paragraf ...</p>
<h2>Judul 2</h2>
<p>Teks paragraf ...</p>
<h3>Judul 3</h3>
<p>Teks paragraf ...</p>
<h4>Judul 4</h4>
<p>Teks paragraf ...</p>
<h5>Judul 5</h5>
<p>Teks paragraf ...</p>
<h6>Judul 6</h6>
<p>Teks paragraf ...</p>
{{< /code >}}

{{< browser tag="h2" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<h2>` dengan pengaturan CSS:

```css
h2 {
  display: block;
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
```