---
title: kbd
description: kbd
date: "2019-11-18T10:34:07+07:00"
slug: kbd
authors:
- akhlis
name: kbd
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/kbd
---

Tag `<kbd>` mewakili input pengguna tekstual dari keyboard, input suara, atau perangkat entri teks lainnya.

Misalnya, tag `<kbd>` digunakan untuk menulis instruksi menyimpan file dokumen Microsoft Word ke penyimpanan komputer.


## Syntax

Tag `<kbd>` ditulis seperti `<kbd></kbd>` dengan teks input pengguna diantara tag pembuka dan penutup.

```html
<kbd>Teks input pengguna ...</kbd>
```

{{< code lang="html" >}}
Untuk menyimpan file dokumen Ms. Word, tekan <kbd>Ctrl + S</kbd>.
{{< /code >}}

#### Contoh Lain

{{< code lang="html" >}}
<h1>Register a Domain Name</h1>
<ol>
  <li>Open your browser</li>
  <li>Type <kbd>zappyhost.com</kbd> into your browser address bar</li>
  <li>Enter your domain name into the search field (eg, <kbd>example.com</kbd>)</li>
  <li>If available, follow the prompts.</li>
</ol>
{{< /code >}}


{{< browser tag="kbd" chrome="Ya" edge="Ya" firefox="Ya" safari="Ya" opera="Ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<kbd>` dengan pengaturan CSS:

```css
kbd {
  font-family: monospace;
}
```