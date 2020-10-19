---
title: colgroup
description: colgroup
date: "2019-11-18T10:34:07+07:00"
slug: colgroup
authors:
- akhlis
name: colgroup
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/colgroup
---

Tag `<colgroup>` mewakili grup satu atau banyak kolom dalam tabel HTML.

ELemen ini berguna untuk mengatur style kolom secara keseluruhan tanpa harus repot mengatur style masing-masing tabel cell dan row.

_Catatan:_ Tag `<colgroup>` harus didalam elemen `<table>` setelah elemen `<caption>` dan sebelum elemen `<thead>`, `<tbody>`, `<troot>`, dan `<tr>`.

## Syntax

Tag `<colgroup>` ditulis seperti `<colgroup></colgroup>` dengan diberi atribut `span` untuk mengatur jumlah kolom span, atau tanpa atribut span namun dibantu dengan tag `<col>` didalamnya.

Seperti ini:

```html
<table>
	<colgroup span="" class="">
	</colgroup>
	<tr>
		<td>Cell</td>
		<td>Cell</td>
		<td>Cell</td>
	</tr>
</table>
```

Atau ini:

```html
<table>
	<colgroup>
		<col class=""></col>
		<col class=""></col>
		<col class=""></col>
	</colgroup>
	<tr>
		<td>Cell</td>
		<td>Cell</td>
		<td>Cell</td>
	</tr>
</table>
```

#### Contoh sederhana

{{< code lang="html" >}}
<!DOCTYPE html>
<title>Example</title>
<style>
table {border-collapse:collapse;}
td, th {border:1px solid #ccc;}
</style>
<table>
  <colgroup span="2" style="background:#eee;"></colgroup>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
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

#### Contoh Multiple Elemen colgroup

{{< code lang="html" >}}
<!DOCTYPE html>
<title>Example</title>
<style>
  table {border-collapse:collapse;}
  td, th {border:1px solid #ccc;}
</style>
<table>
  <colgroup span="2"></colgroup>
  <colgroup style="background:#eee;"></colgroup>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
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

#### Contoh dengan Tag `col`

{{< code lang="html" >}}
<table border="1">
  <colgroup>
    <col style="background:#AEF642;">
    <col span="3" style="background:#F4FBEA;">
    <col style="background:orange;">
  </colgroup>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
    <th>Header 4</th>
    <th>Header 5</th>
  </tr>
  <tr>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
  <tr>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
</table>
{{< /code >}}

{{< browser tag="colgroup" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<colgroup>` dengan pengaturan CSS:

```css
colgroup {
  display: table-column-group;
}
```