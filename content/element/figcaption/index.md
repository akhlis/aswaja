---
title: figcaption
description: figcaption
date: "2019-11-18T10:34:07+07:00"
slug: figcaption
authors:
- akhlis
name: figcaption
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/figcaption
caniuse: https://caniuse.com/#feat=html5semantic
---

Tag `<figcaption>` digunakan untuk memberikan keterangan ketika menggunakan tag `<figure>` (tag untuk menjelaskan ilustrasi, diagram, foto, daftar kode, dll.).

## Syntax

Tag `<figcaption>` ditulis seperti `<figcaption></figcaption>` dengan caption diletakkan diantara tag pembuka dan penutup.

Elemen `<figcaption>` bisa ditempatkan pada awal atau akhir dari elemen `<figure>`.

Seperti Ini:

```html
<figure>
	<figcaption>
		Caption disini...
	</figcaption>
	
	Konten figure disini...
<figure>
```

Atau seperti ini:

```html
<figure>
  Konten figure disini...

	<figcaption>
		Caption disini...
	</figcaption>
<figure>
```

{{< code lang="html" >}}
<p><a href="#1">Figure 1</a> provides the JavaScript code for creating an alert box:</p>
<figure id="1">
  <figcaption>Figure 1. JavaScript Alert Box.</figcaption>
  <pre><code>alert('Hello!');</code></pre>
</figure>
{{< /code >}}

{{< code lang="html" >}}
<figure>
    <img src="/images/html/elephant-660-480.jpg"
         alt="Elephant at sunset">
    <figcaption>An elephant at sunset</figcaption>
</figure>
{{< /code >}}

{{< browser tag="figcaption" chrome="6.0" edge="9.0" firefox="4.0" safari="5.0" opera="11.1" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<figcaption>` dengan pengaturan CSS:

```css
figcaption {
  display: block;
}
```