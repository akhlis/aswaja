---
title: address
description: address
date: "2019-11-18T10:34:07+07:00"
slug: address
authors:
- akhlis
name: address
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/address
---

Tag `<address>` digunakan untuk membuat elemen `address` yang menjelaskan informasi kontak dari pemilik atau penulis dokumen atau artikel.

Jika elemen `<address>` terletak lebih dekat dengan elemen  `<body>`, maka `<address>` menunjukkan informasi kontak dokumen HTML.

Jika elemen `<address>` terletak didalam elemen `<article>`, maka yang ditunjukkan adalah kontak informasi untuk artikel tersebut.

Teks didalam elemen `<address>` biasanya ditampilkan dengan garis miring.

## Syntax

Tag `<address>` ditulis seperti `<address></address>` dengan informasi kontak disematkan antara tag pembuka dan penutup.

{{< code lang="html" >}}
<address>
    Ditulis oleh <a href="mailto:author@codingku.id">Luthfi</a>.<br>
    Kunjungi profil kami di:<br>
    Publii.id<br>
    Jl. Slamet Riyadi No. 03, Surakarta<br>
    Indonesia
</address>
{{< /code >}}

{{< browser tag="address" chrome="yes" edge="yes" firefox="yes" safari="yes" opera="yes" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<address>` dengan pengaturan CSS:

```css
address {
  display: block;
  font-style: italic;
}
```