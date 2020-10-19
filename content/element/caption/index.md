---
title: caption
description: caption
date: "2019-11-18T10:34:07+07:00"
slug: caption
authors:
- akhlis
name: caption
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/caption
---

Tag `<caption>` digunakan untuk membuat caption pada elemen `<table>` yang menunjukkan judul tabel.

Elemen `<caption>` berguna saat tabel tidak diketahui apa isinya. 

Misalnya tabel data hanya terdapat angka, atau serangkaian huruf atau simbol.

## Syntax

Tag `<caption>` ditulis seperti `<caption></caption>` dengan konten caption diselipkan diantara tag pembuka dan penutup.

_Catatan:_ Kamu hanya boleh menentukan satu caption tiap tabel

__Tip:__ Secara default, caption tabel akan diatur menjadi center-aligned diatas tabel. Namun properti CSS `text-align` dan `caption-side` dapat digunakan untuk mengatur align dan menempatkan caption.

```html
<table>
<caption>Table caption</caption>
<tr>
<td>Left cell</td>
<td>Right cell</td>
</tr>
</table>
```

{{< code lang="html" >}}
<table border="1">
<caption>Table caption</caption>
<tr>
<td>Left cell</td>
<td>Right cell</td>
</tr>
</table>
{{< /code >}}

{{< code lang="html" >}}
<!DOCTYPE html>
<title>Example</title>
<style>
table {width:100%;border-collapse:collapse;}
td, th {border:1px solid #ccc;}
th {background:#ccc;color:white;}
caption {text-align:left;}
</style>
<table>
<caption>
<p><strong>Table 1.</strong></p>
<p>This table demonstrates how $10,000 will grow over 10 years assuming an interest rate of 5% per annum. It also displays the weekly and annual yields based on the capital invested for that year.</p>
</caption>
<tr><th>Year</th><th>Capital</th><th>Per week</th><th>Per Year</th></tr>
<tr><td>1</td><td>$10,000</td><td>$10</td><td>$500</td></tr>
<tr><td>2</td><td>$10,500</td><td>$10</td><td>$525</td></tr>
<tr><td>3</td><td>$11,025</td><td>$11</td><td>$551</td></tr>
<tr><td>4</td><td>$11,576</td><td>$11</td><td>$579</td></tr>
<tr><td>5</td><td>$12,155</td><td>$12</td><td>$608</td></tr>
<tr><td>6</td><td>$12,763</td><td>$12</td><td>$638</td></tr>
<tr><td>7</td><td>$13,401</td><td>$13</td><td>$670</td></tr>
<tr><td>8</td><td>$14,071</td><td>$14</td><td>$704</td></tr>
<tr><td>9</td><td>$14,775</td><td>$14</td><td>$739</td></tr>
<tr><td>10</td><td>$15,513</td><td>$15</td><td>$776</td></tr>
</table>
{{< /code >}}

{{< browser tag="caption" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser akan menampilkan elemen `caption` dengan default CSS berikut:

```css
caption {
  display: table-caption;
  text-align: center;
}
```