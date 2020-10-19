---
title: figure
description: figure
date: "2019-11-18T10:34:07+07:00"
slug: figure
authors:
- akhlis
name: figure
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/figure
caniuse: https://caniuse.com/#feat=html5semantic
---

Elemen `<figure>` mewakili konten yang mandiri dan biasanya direferensikan sebagai satu unit kesatuan dengan keterangan (figcaption) dan kontennya.

Tag `<figure>` dapat digunakan untuk menganotasi ilustrasi, diagram, foto, daftar kode, dll

## Syntax

Tag `<figure>` ditulis seperti `<figure></figure>` dengan caption diletakkan diantara tag pembuka dan penutup.

Kamu bisa menggunakan elemen `<figcaption>` untuk memberi keterangan pada elemen `<figure>`.

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

{{< browser tag="figure" chrome="6.0" edge="9.0" firefox="4.0" safari="5.0" opera="11.1" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<figure>` dengan pengaturan CSS:

```css
figure {
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 40px;
  margin-right: 40px;
}
```