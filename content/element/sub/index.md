---
title: sub
description: sub
date: "2019-11-18T10:34:07+07:00"
slug: sub
authors:
- akhlis
name: sub
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/sub
---

Tag `<sub>` mewakili teks subskrip dalam dokumen HTML.

Subskrip dan superskrip sering digunakan dalam ekspresi matematika dan dalam bahasa seperti bahasa Perancis sebagai konvensi untuk mewakili beberapa singkatan.

Elemen `<sub>` sebaiknya hanya digunakan untuk menandai konvensi tipografi dengan makna tertentu.

Umumnya hanya digunakan dalam kasus-kasus dimana ketiadaan elemen akan mengubah makna konten.

Subskrip biasanya diberikan dengan baseline yang diturunkan menggunakan teks yang lebih kecil.

Prinsip yang sama berlaku untuk tag `<sup>` (yang mewakili teks superscript).

## Syntax

Tag `<sub>` ditulis seperti `<sub></sub>` dengan teks subskrip dimasukkan di antara tag pembuka dan penutup.

Seperti ini:
```html
<sub>Teks subskrip disini...</sub>
```

{{< code lang="html" >}}
The formula of carbon dioxide is CO<sub>2</sub>.
{{< /code >}}


{{< browser tag="sub" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<sub>` dengan pengaturan CSS:

```css
sub {
  vertical-align: sub;
  font-size: smaller;
}
```