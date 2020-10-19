---
title: tbody
description: tbody
date: "2019-11-18T10:34:07+07:00"
slug: tbody
authors:
- akhlis
name: tbody
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/tbody
---

Tag `<tbody>` digunakan untuk mengelompokkan baris tabel. 

Secara khusus, ini mewakili blok baris yang terdiri dari kumpulan data untuk elemen induk `<table>`.

Tag `<tbody>` dapat digunakan dengan tag `<thead>` dan tag `<tfoot>` dalam menentukan setiap bagian dari tabel (header, footer, body).

Browser dapat menggunakan informasi ini untuk mengaktifkan pengguliran badan tabel secara independen dari header dan footer, khususnya berguna untuk tabel besar.

## Syntax

Tag `<tbody>` ditulis seperti `<tbody></tbody>` dengan isi data yang dimasukkan antara tag pembuka dan penutup.

Elemen `<tbody>` hanya dapat digunakan sebagai anak dari elemen `<table>` setelah elemen `<caption>`, `<colgroup>`, dan `<thead>`. Tetapi hanya jika tidak ada elemen `<tr>` yang merupakan anak-anak dari elemen `<table>`.

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
table, td, th {
border: 1px solid #ccc;
padding: 5px;
}
tbody {
background-color:yellow;
}
</style>
<table>
<thead>
     <tr><th>Table Header (thead)</th><th>Table Header (thead)</th></tr>
</thead>
<tfoot>
     <tr><th>Table Footer (tfoot)</th><th>Table Footer (tfoot)</th></tr>
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

{{< browser tag="tbody" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<tbody>` dengan pengaturan CSS:

```css
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
```