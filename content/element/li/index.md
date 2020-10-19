---
title: li
description: li
date: "2019-11-18T10:34:07+07:00"
slug: li
authors:
- akhlis
name: li
experimental: false
meta: false
selfclosing: false
inline: false
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/li
---

Tag `<li>` mewakili setiap item daftar dalam daftar berurutan (`<ol>`) dan daftar tidak berurutan (`<ul>`).

Tag `<li>` dalam daftar berurutan (`ol`) biasanya ditampilkan dengan penghitung naik di sebelah kiri seperti angka atau huruf.

Sedangkan tag `li` dalam daftar tidak berurutan (`ul`) akan ditampilkan menggunakan poin-poin.

## Syntax

Tag `<li>` ditulis seperti `<li></li>` dengan item daftar disisipkan diantara tag pembuka dan penutup.

Tag `li` ini harus ditempatkan didalam elemen `<ol>` (Ordered List) atau elemen `<ul>` (Unordered List).

Seperti ini:

```html
<ul>
	<li>Daftar item...</li>
	<li>Daftar item...</li>
	<li>Daftar item...</li>
</ul>
```

#### Contoh Daftar tidak Berurutan

{{< code lang="html" >}}
<ul>
  <li>Merah</li>
  <li>Kuning</li>
  <li>Hijau</li>
</ul>
{{< /code >}}


#### Contoh Daftar Berurutan

{{< code lang="html" >}}
<ol>
  <li>Merah</li>
  <li>Kuning</li>
  <li>Hijau</li>
</ol>
{{< /code >}}


{{< browser tag="li" chrome="Ya" edge="Ya" firefox="Ya" safari="Ya" opera="Ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<li>` dengan pengaturan CSS:

```css
li {
  display: list-item;
}
```