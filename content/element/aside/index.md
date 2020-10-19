---
title: aside
description: aside
date: "2019-11-18T10:34:07+07:00"
slug: aside
authors:
- akhlis
name: aside
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/aside
caniuse: https://caniuse.com/#feat=html5semantic
---

Tag `<aside>` digunakan untuk membuat elemen `aside` yang mewakili konten yang terkait dengan konten utama dalam artikel atau halaman website.

Elemen `aside` biasanya ditampilkan sebagai sidebar atau widget halaman website.

## Syntax

Tag `<aside>` ditulis seperti `<aside></aside>` dengan konten aside diselipkan diantara tag pembuka dan penutup.

```html
<aside>
  Konten aside disini ...
</aside>
```

{{< code lang="html" >}}
<main>
  <h1>My blog post</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
  <p>etc.</p>
</main>
<aside>
  <h3>About the author</h3>
  <p>Frontend Designer from Bordeaux, currently working for Improbable in sunny London.</p>
</aside>
{{< /code >}}

{{< browser tag="aside" chrome="6.0" edge="9.0" firefox="4.0" safari="5.0" opera="11.1" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<aside>` dengan pengaturan CSS:

```css
aside {
  display: block;
}
```