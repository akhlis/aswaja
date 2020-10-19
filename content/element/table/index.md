---
title: table
description: table
date: "2019-11-18T10:34:07+07:00"
slug: table
authors:
- akhlis
name: table
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/table
---

Tag `<table>` digunakan untuk mendefinisikan tabel dua dimensi yang terdiri dari baris dan kolom sel yang berisi data.

Tag `table` berisi tag lain yang menentukan struktur tabel.

## Syntax

Tag `<table>` ditulis seperti `<table></table>` dengan berbagai elemen tabel bersarang di antara tag pembuka dan penutup.

Setiap elemen `<tr>` mewakili baris dalam tabel. Baris dapat memiliki satu atau lebih elemen `<td>` atau `<th>` yang menentukan kolom dalam tabel.

Secara khusus, `<td>` mewakili data tabel dan `<th>` mewakili header tabel.

Seperti ini:
```html
<table>
 <tr>
  <th>Table Header 1</th>
  <th>Table Header 2</th>
 </tr>
 <tr>
  <td>Cell 1</td>
  <td>Cell 2</td>
 </tr>
 <tr>
  <td>Cell 3</td>
  <td>Cell 4</td>
 </tr>
</table>
```

#### Contoh Sederhana

{{< code lang="html" >}}
<table border="1">
 <tr>
  <th>Table Header 1</th>
  <th>Table Header 2</th>
 </tr>
 <tr>
  <td>Cell 1</td>
  <td>Cell 2</td>
 </tr>
 <tr>
  <td>Cell 3</td>
  <td>Cell 4</td>
 </tr>
</table>
{{< /code >}}


#### Contoh captions

{{< code lang="html" >}}
<table border = "1">
 <caption>Table Caption...</caption>
 <tr>
  <th>Table Header 1</th>
  <th>Table Header 2</th>
 </tr>
 <tr>
  <td>Cell 1</td>
  <td>Cell 2</td>
 </tr>
 <tr>
  <td>Cell 3</td>
  <td>Cell 4</td>
 </tr>
</table>
{{< /code >}}

#### Contoh dengan Elemen `tbody`, `thead`, dan `tfoot`

{{< code lang="html" >}}
<table border="1">
  <thead>
    <tr>
      <th colspan="2">Table Header (thead)</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th colspan="2">Table Footer (tfoot)</th>
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

{{< code lang="html" >}}
<!DOCTYPE html>
<title>Example</title>
<style>
  .myTable {
    border-collapse: collapse;
  }
  .myTable th {
    background-color: #BDB76B;
    color: white;
  }
  .myTable td,
  .myTable th {
    padding: 5px;
    border: 1px solid #BDB76B;
  }
</style>
<table class="myTable">
  <tr>
    <th>Table header</th>
    <th>Table header</th>
    <th>Table header</th>
  </tr>
  <tr>
    <td>Table cell</td>
    <td>Table cell</td>
    <td>Table cell</td>
  </tr>
  <tr>
    <td>Table cell</td>
    <td>Table cell</td>
    <td>Table cell</td>
  </tr>
  <tr>
    <td>Table cell</td>
    <td>Table cell</td>
    <td>Table cell</td>
  </tr>
</table>
{{< /code >}}

{{< browser tag="table" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<table>` dengan pengaturan CSS:

```css
table {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: gray;
}
```