---
title: h3
description: h3
date: "2019-11-18T10:34:07+07:00"
slug: h3
authors:
- akhlis
name: h3
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/h3
---

Tag `<h3>` mewakili judul level 3 dalam dokumen HTML.

HTML terdiri dari 6 level judul yang diberi peringkat berdasarkan keperluan. Yaitu `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, dan `<h6>`.

Judul dengan peringkat tertinggi disebut dengan tag `h1` (ukuran teks terbesar), dan peringkat terendah disebut tag `<h6>` (ukuran teks terkecil).

Browser biasanya memuat judul dalam berbagai ukuran - dengan `<h1>` sebagai yang terbesar dan `<h6>` sebagai yang terkecil.

## Syntax

Tag `<h3>` ditulis seperti `<h3></h3>` dengan teks judul diletakkan diantara tag pembuka dan penutup.

```html
<h3>Heading</h3>
```

{{< code lang="html" >}}
<h3>Judul 3</h3>
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

{{< browser tag="h3" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<h3>` dengan pengaturan CSS:

```css
h3 {
  display: block;
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
```