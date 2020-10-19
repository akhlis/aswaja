---
title: sup
description: sup
date: "2019-11-18T10:34:07+07:00"
slug: sup
authors:
- akhlis
name: sup
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/sup
---
Tag `<sup>` mewakili teks superskrip dalam dokumen HTML.

Subskrip dan superskrip sering digunakan dalam ekspresi matematika dan dalam bahasa seperti bahasa Perancis sebagai konvensi untuk mewakili beberapa singkatan.

Elemen `<sup>` sebaiknya hanya digunakan untuk menandai konvensi tipografi dengan makna tertentu.

Umumnya hanya digunakan dalam kasus-kasus dimana ketiadaan elemen akan mengubah makna konten.

Superskrip biasanya diberikan dengan garis dasar yang dinaikkan menggunakan teks yang lebih kecil.

Prinsip yang sama berlaku untuk tag `<sub>` (yang mewakili teks subscript).

## Syntax

Tag `<sup>` ditulis seperti `<sup></sup>` dengan teks superskrip dimasukkan di antara tag pembuka dan penutup.

{{< code lang="html" >}}
The "power of two" is 2<sup>n</sup> where n is an integer.
{{< /code >}}

{{< browser tag="sup" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<sup>` dengan pengaturan CSS:

```css
sup {
  vertical-align: super;
  font-size: smaller;
}
```