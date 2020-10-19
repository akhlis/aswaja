---
title: thead
description: thead
date: "2019-11-18T10:34:07+07:00"
slug: thead
authors:
- akhlis
name: thead
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/thead
---

Elemen HTML <thead> mendefinisikan satu set baris yang mendefinisikan kepala kolom dari tabel.

Tag `<thead>` mewakili header dalam tabel HTML. Tag ini adalah blok baris yang terdiri dari label kolom untuk elemen induk `<table>`.

Tag `<thead>` dapat digunakan dengan tag `<tbody>` dan tag `<tfoot>` dalam menentukan setiap bagian dari tabel (headder, footer, body).

## Syntax

Tag `<thead>` ditulis deperti `<thead></thead>` dengan judul tabel disisipkan diantara tag pembuka dan penutup.

Tag ini dapat berisi nol atau lebih elemen `<tr>` dan elemen pendukung skrip (`<script>`, `<template>`).

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
  thead {
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

{{< browser tag="thead" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<thead>` dengan pengaturan CSS:

```css
thead {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}
```