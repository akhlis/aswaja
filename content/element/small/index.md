---
title: small
description: small
date: "2019-11-18T10:34:07+07:00"
slug: small
authors:
- akhlis
name: small
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/small
---

Tag `<small>` mewakili komentar sampingan seperti cetakan kecil.

Cetak kecil (juga disebut sebagai "cetak mouseprint") biasanya mengacu pada bagian dokumen yang berisi penafian, peringatan, atau batasan hukum, seperti hak cipta.

Elemen `<small>` hanya ditujukan untuk teks yang berjalan singkat. Jadi tidak cocok untuk rentang teks yang besar seperti paragraf, daftar, dll.

Oleh karena itu, tag `<small>` tidak boleh digunakan untuk menandai konten penuh halaman "Ketentuan Penggunaan".

## Syntax

Tag `<small>` ditulis seperti `<small></small>` dengan teks kecil disisipkan diantara tag pembuka dan penutup.

Seperti ini:
```html
<small>Teks small disini...</small>
```

{{< code lang="html" >}}
<p>Beer, half price! <small>(as long as you tip us the other half)</small></p>
{{< /code >}}

{{< browser tag="small" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<small>` dengan pengaturan CSS:

```css
small {
  font-size: smaller;
}
```