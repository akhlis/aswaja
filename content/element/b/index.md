---
title: b
description: b
date: "2019-11-18T10:34:07+07:00"
slug: b
authors:
- akhlis
name: b
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/b
---
Tag `<b>` digunakan untuk membuat elemen `b` yang mewakili teks tebal dalam dokumen HTML.

Elemen `b` berfungsi untuk menandai teks sebagai huruf tebal tanpa menyampaikan arti penting tambahan.

Misalnya dalam artikel, kadang bagian awal artikel diatur dalam teks tebal.

Perlu diingat, tag `<b>` jangan digunakan untuk membuat teks yang memiliki kepentingan atau penekanan khusus.

Untuk membuat teks yang tujuannya untuk menyampaikan kepentingan khusus, gunakan tag `<strong>`.

Dan untuk membuat teks yang memiliki penekanan khusus, gunakan tag `<em>`.

## Syntax

Tag `<b>` ditulis seperti `<b></b>` dengan teks tebal disematkan diantara tag pembuka dan penutup.

```html
Hello <b>World</b>
```

#### Contoh pada Review Produk

{{< code lang="html" >}}
<p>The <b>iPhone 5s</b> edged out the <b>Samsung Galaxy S4</b> slightly in all of our tests, however we recommend buying both.</p>
{{< /code >}}

#### Contoh pada Artikel Lead

{{< code lang="html" >}}
<article>
  <h1>Scientist Claims Science is Dogmatic</h1>
  <p><b>Biologist Rupert Sheldrake claims that modern science is being held back by scientists' belief systems, and that
      many scientists are unaware of their own assumptions.</b></p>
  <p>In his book <cite>Science Set Free</cite> (known as <cite>The Science Delusion</cite> in the UK), Sheldrake
    outlines ten dogmas of mainstream science. He argues that the biggest scientific delusion of all is that science
    already knows the answers. The details still need working out but, in principle, the fundamental questions are
    settled.</p>
  <p>Sheldrake points out that contemporary science is based on the claim that all reality is material or physical.
    There is no reality but material reality...</p>
</article>
{{< /code >}}

{{< browser tag="b" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<b>` dengan pengaturan CSS:

```css
b {
  font-weight: bold;
}
```