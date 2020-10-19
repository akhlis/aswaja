---
title: u
description: u
date: "2019-11-18T10:34:07+07:00"
slug: u
authors:
- akhlis
name: u
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/u
---

Elemen Anotasi Unartikulasi HTML (`<u>`) mewakili rentang teks sebaris yang harus diterjemahkan dengan cara yang menunjukkan bahwa ia memiliki anotasi non-tekstual. Ini diberikan secara default sebagai garis bawah solid yang sederhana, tetapi dapat diubah menggunakan CSS.

Tag `<u>` mewakili teks dengan anotasi non-tekstual yang tidak diartikulasikan, meskipun secara eksplisit dibuat.

Ini dapat mencakup kata-kata atau rentang teks yang perlu disajikan secara berbeda seperti kata yang salah eja atau nama China.

Sebelum HTML5, tag `<u>` digunakan murni untuk tujuan presentasi (menggarisbawahi teks).

Namun pada HTML5, elemen `<u>` memiliki tujuan semantik yang lebih spesifik seperti yang diuraikan diatas.

Jika kamu hanya ingin menggarisbawahi teks (tanpa menyampaikan makna lain), gunakan properti `text-decoration` sebagai gantinya.

## Syntax

Tag `<u>` ditulis seperti `<u></u>` dengan anotasi non-tekstual dimasukkan diantara tag pembuka dan penutup.

Seperti ini:
```html
<u>Non-textual annotation here...</u>
```

{{< code lang="html" >}}
<p>It is very easy to <u>mispell</u> the word "misspell".</p>
{{< /code >}}

{{< browser tag="u" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<u>` dengan pengaturan CSS:

```css
u {
  text-decoration: underline;
}
```