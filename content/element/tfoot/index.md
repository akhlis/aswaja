---
title: tfoot
description: tfoot
date: "2019-11-18T10:34:07+07:00"
slug: tfoot
authors:
- akhlis
name: tfoot
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/tfoot
---

Tag `<tfoot>` mewakili footer di dalam tabel HTML. Ini adalah blok baris yang terdiri dari ringkasan kolom untuk elemen induk `<table>`.

Tag `<tfoot>` dapat digunakan dengan tag `<tbody>` dan tag `<thead>` dalam menentukan setiap bagian dari tabel (header, footer, body).

Browser dapat menggunakan informasi ini untuk mengaktifkan pengguliran badan tabel secara independen dari header dan footer, khususnya berguna pada tabel besar.

## Syntax

Tag `<tfoot>` ditulis seperti `<tfoot></tfoot>` dengan tabel footer disisipkan diantara tag pembuka dan penutup.

Tag `<tfoot>` dapat berisi nol atau lebih elemen `<tr>` dan elemen pendukung skrip (`<script>`, `<template>`).

Seperti ini:
```html
<table>
	<thead>
	     <tr><th>Table Header</th><th>Table Header</th></tr>
	</thead>
	<tfoot>
	     <tr><th>Table Footer</th><th>Table Footer</th></tr>
	</tfoot>
	<tbody>
		<tr>
			<td>Cell 1 - part of tbody</td>
			<td>Cell 2 - part of tbody</td>
		</tr>
		<tr>
			<td>Cell 3 - part of tbody</td>
			<td>Cell 4 - part of tbody</td>
		</tr>
		<tr>
			<td>Cell 5 - part of tbody</td>
			<td>Cell 6 - part of tbody</td>
		</tr>
	</tbody>
</table>
```

{{< code lang="html" >}}
<!DOCTYPE html>
<title>Example</title>
<style>
  table,
  td,
  th {
    border: 1px solid #ccc;
    padding: 5px;
  }

  tfoot {
    background-color: yellow;
  }
</style>
<table>
  <thead>
    <tr>
      <th>Table Header (thead)</th>
      <th>Table Header (thead)</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th>Table Footer (tfoot)</th>
      <th>Table Footer (tfoot)</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Cell 1 - part of tbody</td>
      <td>Cell 2 - part of tbody</td>
    </tr>
    <tr>
      <td>Cell 3 - part of tbody</td>
      <td>Cell 4 - part of tbody</td>
    </tr>
    <tr>
      <td>Cell 5 - part of tbody</td>
      <td>Cell 6 - part of tbody</td>
    </tr>
  </tbody>
</table>
{{< /code >}}

{{< browser tag="tfoot" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<tfoot>` dengan pengaturan CSS:

```css
tfoot {
  display: table-footer-group;
  vertical-align: middle;
  border-color: inherit;
}
```