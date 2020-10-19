---
title: "Cara Mengatur Tampilan List dengan CSS"
description: "Cara Mengatur Tampilan List dengan CSS"
date: "2020-01-15T07:34:07+07:00"
slug: cara-mengatur-tampilan-list-dengan-css
weight: 160
authors:
- akhlis
---

List adalah elemen yang digunakan untuk menampilkan informasi dalam bentuk daftar item.

Dalam web desain, _list_ sering digunakan untuk membuat menu halaman website.

Pada tutorial sebelumnya sudah dibahas mengenai [cara membuat list dengan HTML](/html/cara-membuat-list-pada-html/).

Selanjutnya kita akan membahas tentang cara mengatur tampilan list dengan CSS.

## Mengatur Tampilan List

Dalam HTML, ada 2 tipe list yang bisa dibuat, yaitu:
- __unordered list (ul)__ - daftar list yang tidak berurutan, ditandai dengan titik bulat.
- __ordered list (ol)__ - daftar list yang berurutan, ditandai dengan angka atau huruf.

Contoh daftar list berurutan:

{{< editor class="w-1/3" editor="1" >}}
{{< editor-html >}}
```html
<h2>Daftar Brand Smartphone</h2>

<ul>
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ul>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
/* nilai default ul akan menggunakan style disc */
```
{{< /editor-css >}}
{{< editor-preview >}}
<h2>Daftar Brand Smartphone</h2>

<ul class="list__ul">
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ul>

<style type="text/css">
.list__ul {
    list-style: disc;
    margin-left: 2em;
}
</style>
{{< /editor-preview >}}
{{< /editor >}}

Sekarang mari kita coba untuk mengubah tampilan penanda pada daftar item di atas.

Caranya...

Gunakan properti CSS `list-style-type`

```css
ul {
    list-style-type: circle;
}
```

{{< editor class="w-1/3" editor="2" >}}
{{< editor-html >}}
```html
<h3>List dengan type = square</h3>

<ul class="list-square">
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ul>

<h3>List dengan type = disc</h3>

<ul class="list-disc">
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ul>

<h3>List dengan type = none</h3>

<ul class="list-none">
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ul>

<h3>List dengan type = circle</h3>

<ul class="list-circle">
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ul>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.list-square {
    list-style-type: square;
}

.list-disc {
    list-style-type: disc;
}

.list-none {
    list-style-type: none;
}

.list-circle {
    list-style-type: circle;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<h3>List dengan type = square</h3>

<ul class="list-square ml-8 mb-8">
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ul>

<h3>List dengan type = disc</h3>

<ul class="list-disc ml-8 mb-8">
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ul>

<h3>List dengan type = none</h3>

<ul class="list-none ml-8 mb-8">
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ul>

<h3>List dengan type = circle</h3>

<ul class="list-circle ml-8">
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ul>

{{< /editor-preview >}}
{{< /editor >}}


List di atas merupakan contoh list tidak beraturan.

Lalu bagaimana cara mengubah list yang beraturan dengan urutan angka romawi seperti I, II, III atau dengan huruf besar seperti A, B, C?

Caranya sangat mudah...

Untuk membuat tampilan list dengan urutan seperti itu, kamu tinggal mengganti nilai properti CSS `list-style-type` dengan nilai `upper-roman` atau `upper-latin`.

Seperti berikut:

{{< editor class="w-1/3" editor="3" >}}
{{< editor-html >}}
```html
<h3>List dengan type = decimal (nilai default)</h3>

<ol class="list-decimal">
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ol>

<h3>List dengan type = lower-latin (Alfabet Kecil)</h3>

<ol class="list-lower-latin">
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ol>

<h3>List dengan type = upper-latin (Alfabet Kapital)</h3>

<ul class="list-upper-latin">
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ul>

<h3>List dengan type = lower-roman (Angka Romawi)</h3>

<ul class="list-lower-roman">
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ul>

<h3>List dengan type = upper-roman (Angka Romawi Kapital)</h3>

<ul class="list-upper-roman">
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ul>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.list-decimal {
    list-style-type: decimal;
}

.list-lower-latin {
    list-style-type: lower-latin;
}

.list-upper-latin {
    list-style-type: upper-latin;
}

.list-lower-roman {
    list-style-type: lower-roman;
}

.list-upper-roman {
    list-style-type: upper-roman;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<h3>List dengan type = decimal (nilai default)</h3>

<ol class="list-decimal ml-8 mb-8">
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ol>

<h3>List dengan type = lower-latin (Alfabet Kecil)</h3>

<ol class="list-lower-latin ml-8 mb-8">
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ol>

<h3>List dengan type = upper-latin (Alfabet Kapital)</h3>

<ul class="list-upper-latin ml-8 mb-8">
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ul>

<h3>List dengan type = lower-roman (Angka Romawi)</h3>

<ul class="list-lower-roman ml-8 mb-8">
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ul>

<h3>List dengan type = upper-roman (Angka Romawi Kapital)</h3>

<ul class="list-upper-roman ml-8">
    <li>Huawai</li>
    <li>iPhone</li>
    <li>Samsung</li>
    <li>Oppo</li>
    <li>Vivo</li>
    <li>Xiaomi</li>
</ul>

{{< /editor-preview >}}
{{< /editor >}}
