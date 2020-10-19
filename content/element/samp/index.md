---
title: samp
description: samp
date: "2019-11-18T10:34:07+07:00"
slug: samp
authors:
- akhlis
name: samp
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/samp
---


Tag `<samp>` mewakili output sampel dari program komputer, skrip, dll. 

Output sampel ini adalah output yang ditampilkan kepada pengguna ketika pengguna menjalankan aplikasi.

Misalnya, pesan `Kamu yakin ingin mengganti file ini?` adalah pesan umum yang ditampilkan ketika seseorang mencoba mengganti file dengan yang lain.

Dan dalam konteks ini, akan dianggap "sampel keluaran" yang dapat digunakan dalam elemen `<samp>` pada halaman web.

## Syntax

Tag `<samp>` ditulis seperti `<samp></samp>` dengan output sampel dimasukkan diantara tag pembuka dan penutup.

Seperti ini:
```html
<samp>Sample output...</samp>
```

{{< code lang="html" >}}
I entered <code>git push</code> and the terminal printed out <samp>Everything up-to-date</samp>.
{{< /code >}}


{{< browser tag="samp" chrome="yes" edge="yes" firefox="yes" safari="yes" opera="yes" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<samp>` dengan pengaturan CSS:

```css
samp {
  font-family: monospace;
}
```
