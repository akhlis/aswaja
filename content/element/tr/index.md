---
title: tr
description: tr
date: "2019-11-18T10:34:07+07:00"
slug: tr
authors:
- akhlis
name: tr
experimental: false
meta: false
selfclosing: false
inline: false
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/tr
---

Tag `<tr>` singkatan dari _table row_ yang mewakili baris sel dalam tabel HTML.

Elemen `<tr>` adalah bagian penting dari setiap tabel HTML karena sel-sel yang diwakilinya, menyediakan data yang disajikan dalam tabel.

Baris tabel dapat berisi satu atau lebih tag `<td>` dan `<th>` yang menentukan masing-masing sel, dan elemen pendukung skrip (`<script>`, `<template>`).

## Syntax

Tag `<tr>` ditulis seperti `<tr></tr>` dengan anak-anaknya bersarang di antara tag pembuka dan penutup.

Seperti ini:
```html
<table>
	<tr>
		<td>Cell 1</td>
		<td>Cell 2</td>
	</tr>
</table>
```

{{< code lang="html" >}}
<table border="1">
  <tr>
    <th>Header Cell</th>
    <th>Header Cell</th>
    <th>Header Cell</th>
  </tr>
  <tr>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
  <tr>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
</table>
{{< /code >}}

{{< browser tag="tr" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<tr>` dengan pengaturan CSS:

```css
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
```