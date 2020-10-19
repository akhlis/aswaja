---
title: "Cara Membuat Border dengan CSS"
description: "Cara membuat border dengan CSS"
date: "2020-01-10T09:34:07+07:00"
slug: cara-membuat-border-dengan-css
weight: 60
authors:
- akhlis
---

Kalau kamu jeli mengamati tampilan halaman website yang kamu baca saat ini ([kodekit.id](/css/)), kamu akan melihat garis di bawah menu atau di bawah artikel ini.

Fungsi garis tersebut sebenarnya hanyalah sebagai aksesoris untuk mempercantik tampilan desain website saja.

Lalu bagaimana cara membuatnya?

Dalam web desain, garis itu disebut sebagai garis tepi atau _border_ karena dibuat pada batas tepi elemen HTML.

Garis tepi dibuat menggunakan property CSS `border`.

Property CSS [border](/cssref/border/) merupakan _shorthand_ dari properti CSS [border-width](/cssref/border-width), [border-style](/cssref/border-style), dan [border-color](/cssref/border-color).

Untuk membuat garis tepi, diperlukan 3 nilai tersebut.

Ketiga nilai itu berfungsi untuk mengatur __tebal__ border, __style__ border, dan __warna__ border.

```css
div {
    border: 5px solid red;
}
```

{{< tips >}}
Penjelasan lebih lengkap tentang properti border bisa kamu pelajari di referensi [property CSS](/cssref/)
{{< /tips >}}

## Property CSS Border Style

Property [border-style](/cssref/border-style/) digunakan untuk menentukan gaya garis tepi elemen HTML.

Properti ini singkatan dari properti: `border-top-style`, `border-right-style`, `border-bottom-style`, dan `border-left-style`.

Nilai property `border-style` dapat ditentukan menggunakan satu, dua, tiga, atau empat dari nilai properti di atas.

Dan ini nilai atau _value_ dari property `border`:
- `dotted` - Menentukan border dengan urutan titik-titik
- `dashed` - Menentukan border dengan urutan garis putus-putus
- `solid` - Menentukan border dengan garis solid
- `double` - Menentukan border dengan dua garis
- `groove` - Menentukan border dengan alur 3D. Efeknya tergantung pada nilai warna tepi
- `ridge` - Menentukan border dengan garis bergerigi 3D. Efeknya tergantung pada nilai warna tepi
- `inset` - Menentukan border dengan inset 3D. Efeknya tergantung pada nilai warna tepi
- `outset` - Menentukan border dengan outset 3D. Efeknya tergantung pada nilai warna tepi
- `none` - Menghilangkan efek border
- `hidden` - Menentukan efek border menjadi tersembunyi

{{< editor class="w-1/3" >}}
{{< editor-html >}}
```html
<h2>Property border-style</h2>

<p class="border border--dotted">A dotted border.</p>
<p class="border border--dashed">A dashed border.</p>
<p class="border border--solid">A solid border.</p>
<p class="border border--double">A double border.</p>
<p class="border border--groove">A groove border.</p>
<p class="border border--ridge">A ridge border.</p>
<p class="border border--inset">An inset border.</p>
<p class="border border--outset">An outset border.</p>
<p class="border border--none">No border.</p>
<p class="border border--hidden">A hidden border.</p>
<p class="border border--mix">A mixed border.</p>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.border {
    border-width: 4px;
    border-color: darkorange;
    padding: 1em;
    margin-bottom: 1em;
}

.border--dotted {
    border-style: dotted;
}

.border--dashed {
    border-style: dashed;
}

.border--solid {
    border-style: solid;
}

.border--double {
    border-style: double;
}

.border--groove {
    border-style: groove;
}

.border--ridge {
    border-style: ridge;
}

.border--inset {
    border-style: inset;
}

.border--outset {
    border-style: outset;
}

.border--none {
    border-style: none;
}

.border--hidden {
    border-style: hidden;
}

.border--mix {
    border-style: dotted dashed solid double;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<h2>Property border-style</h2>

<p class="border-4 border-gray-400 py-2 px-4 mb-4 dotted">A dotted border.</p>
<p class="border-4 border-gray-400 py-2 px-4 mb-4 dashed">A dashed border.</p>
<p class="border-4 border-gray-400 py-2 px-4 mb-4 solid">A solid border.</p>
<p class="border-4 border-gray-400 py-2 px-4 mb-4 double">A double border.</p>
<p class="border-4 border-gray-400 py-2 px-4 mb-4 groove">A groove border.</p>
<p class="border-4 border-gray-400 py-2 px-4 mb-4 ridge">A ridge border.</p>
<p class="border-4 border-gray-400 py-2 px-4 mb-4 inset">An inset border.</p>
<p class="border-4 border-gray-400 py-2 px-4 mb-4 outset">An outset border.</p>
<p class="border-4 border-gray-400 py-2 px-4 mb-4 none">No border.</p>
<p class="border-4 border-gray-400 py-2 px-4 mb-4 hidden">A hidden border.</p>
<p class="border-4 border-gray-400 py-2 px-4 mb-4 mix">A mixed border.</p>

<style>
p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}
</style>
{{< /editor-preview >}}
{{< /editor >}}

{{< tryit-button link="/tutorial-css-border-style" >}}

## Property CSS Border Width

Property [border-width](/cssref/border-width/) digunakan untuk menentukan lebar garis tepi elemen HTML.

Properti ini merupakan singkatan untuk properti `border-top-width`, `border-right-width`, `border-bottom-width`, `border-left-width`.

Nilai properti `border-width` dapat ditentukan menggunakan satu, dua, tiga, atau empat nilai properti di atas, dimana nilainya diatur menggunakan nilai `length` (px, pt, cm, atau em) atau menggunakan salah satu kata kunci `thin`, `medium`, dan `thick`.

{{< editor class="w-1/3" editor="1" >}}
{{< editor-html >}}
```html
<p class="teks p__pertama border--dotted">Teks paragraf pertama.</p>
<p class="teks p__kedua border--dashed">Teks paragraf kedua.</p>
<p class="teks p__ketiga border--solid">Teks paragraf ketiga.</p>
<p class="teks p__keempat border--double">Teks paragraf keempat.</p>
<p class="teks p__kelima border--groove">Teks paragraf kelima.</p>
<p class="teks p__keenam border--mix">Teks paragraf kelima.</p>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.teks {
    padding: 0.5em 1em;
    margin-bottom: 1em;
}

.p__pertama {
    border-width: 4px;
}

.p__kedua {
    border-width: 2px;
}

.p__ketiga {
    border-width: 1px;
}

.p__keempat {
    border-width: 5px;
}

.p__kelima {
    border-width: 7px;
}

.p__keenam {
    border-width: 4px;
}

.border--dotted {
    border-style: dotted;
}

.border--dashed {
    border-style: dashed;
}

.border--solid {
    border-style: solid;
}

.border--double {
    border-style: double;
}

.border--groove {
    border-style: groove;
}

.border--mix {
    border-style: dotted dashed solid double;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<h2>Property border-width</h2>

<p class="teks p__pertama border--dotted">Teks paragraf pertama.</p>
<p class="teks p__kedua border--dashed">Teks paragraf kedua.</p>
<p class="teks p__ketiga border--solid">Teks paragraf ketiga.</p>
<p class="teks p__keempat border--double">Teks paragraf keempat.</p>
<p class="teks p__kelima border--groove">Teks paragraf kelima.</p>
<p class="teks p__keenam border--mix">Teks paragraf kelima.</p>

<style>
.teks {
    padding: 0.5em 1em;
    margin-bottom: 1em;
}

.p__pertama {
    border-width: 4px;
}

.p__kedua {
    border-width: 2px;
}

.p__ketiga {
    border-width: 1px;
}

.p__keempat {
    border-width: 5px;
}

.p__kelima {
    border-width: 7px;
}

.p__keenam {
    border-width: 4px;
}

.border--dotted {
    border-style: dotted;
}

.border--dashed {
    border-style: dashed;
}

.border--solid {
    border-style: solid;
}

.border--double {
    border-style: double;
}

.border--groove {
    border-style: groove;
}

.border--mix {
    border-style: dotted dashed solid double;
}
</style>
{{< /editor-preview >}}
{{< /editor >}}

{{< tryit-button link="/tutorial-css-border-style" >}}

## Property CSS Border Color

Properti CSS [border-color](/cssref/border-color/) digunakan untuk mengatur warna garis batas suatu elemen.

Properti ini merupakan singkatan untuk properti `border-top-color`, `border-right-color`, `border-bottom-color`, dan `border-left-color`.

Nilai properti `border-color` dapat ditentukan menggunakan satu, dua, tiga, atau empat nilai properti di atas.

## Mengatur Masing-masing Sisi Border

Pada contoh di atas, kamu bisa melihat pada masing-masing sisi dapat memiliki _style_ border yang berbeda.

Dalam CSS terdapat properti yang menentukan setiap sisi border, yaitu atas, kanan, bawah, dan kiri.

<div class="mb-8">
    <p class="teks border--mix">Contoh style border yang berbeda.</p>
</div>

<style>
.teks {
    padding: 0.5em 1em;
    margin-top: 1em;
    border-width: 5px;
}

.border--mix {
    border-style: dotted dashed solid double;
}
</style>

```css
p {
  border-top-style: dotted;
  border-right-style: dashed;
  border-bottom-style: solid;
  border-left-style: double;
}
```

Pada contoh di atas, bisa juga ditulis seperti:

```css
p {
  border-style: dotted dashed solid double;
}
```

Begini cara kerjanya:

Jika properti `border-style` memiliki 4 nilai:
- `border-style: dotted dashed solid double;`
    - Border __atas__ memiliki style _dotted_
    - Border __kanan__ memiliki style _dashed_
    - Border __bawah__ memiliki style _solid_
    - Border __kiri__ memiliki style _double_

    <div class="mb-8">
    <p class="teks border--4">Contoh border dengan 4 style.</p>
    </div>
    <style>
    .border--4 {
        border-style: dotted dashed solid double;
    }
    </style>

Jika properti `border-style` memiliki 3 nilai:
- `border-style: dotted dashed solid;`
    - Border __atas__ memiliki style _dotted_
    - Border __kanan__ memiliki style _dashed_
    - Border __bawah__ memiliki style _solid_
    - Border __kiri__ memiliki style _dashed_

    <div class="mb-8">
    <p class="teks border--3">Contoh border dengan 3 style.</p>
    </div>
    <style>
    .border--3 {
        border-style: dotted dashed solid;
    }
    </style>

Jika properti `border-style` memiliki 2 nilai:
- `border-style: dashed solid;`
    - Border __atas__ memiliki style _dashed_
    - Border __kanan__ memiliki style _solid_
    - Border __bawah__ memiliki style _dashed_
    - Border __kiri__ memiliki style _solid_

    <div class="mb-8">
    <p class="teks border--2">Contoh border dengan 2 style.</p>
    </div>
    <style>
    .border--2 {
        border-style: dashed solid;
    }
    </style>

Jika properti `border-style` memiliki 1 nilai:
- `border-style: solid;`
    - Border __atas__ memiliki style _solid_
    - Border __kanan__ memiliki style _solid_
    - Border __bawah__ memiliki style _solid_
    - Border __kiri__ memiliki style _solid_

    <div class="mb-8">
    <p class="teks border--1">Contoh border dengan 1 style.</p>
    </div>
    <style>
    .border--1 {
        border-style: solid;
    }
    </style>

## Menggunakan Shorthand Property Border

Seperti yang bisa kamu lihat pada contoh di atas, ada banyak properti CSS yang harus ditulis untuk mengatur border elemen.

Untuk menyingkat penulisan kode, kamu bisa menggunakan _shorthand_ property `border` berikut:
- [border-width](/cssref/border-width/)
- [border-style](/cssref/border-style/) (harus ditentukan)
- [border-color](/cssref/border-color/)

Contoh:
```css
p {
   border: 4px solid red;
}
```

{{< preview >}}
<p class="border-4 border-solid border-red-500 py-2 px-4">Contoh shorthand property border.</p>
{{< /preview >}}

Kamu juga bisa memberi style border pada salah satu sisi elemen saja.

Seperti ini cara memberi border pada sisi kiri elemen:

```css
p {
  border-left: 6px solid green;
  background-color: lightgrey;
}
```

{{< preview >}}
<p class="border-l-4 border-solid border-primary bg-gray-100 py-2 px-4">Contoh shorthand property border kiri.</p>
{{< /preview >}}

## Cara Membuat Sudut Border Membulat

Untuk membulatkan sudut-sudut suatu elemen, kamu bisa menggunakan property CSS `border-radius`

Penjelasan lebih lengkapnya bisa kamu pelajari di referensi property [border-radius](/cssref/border-radius/)

```css
p {
  border: 2px solid red;
  border-radius: 5px;
}
```

{{< preview >}}
<p class="border border-solid border-red-500 py-2 px-4 mb-6">border normal.</p>

<p class="border border-solid border-red-500 rounded-sm py-2 px-4 mb-6">border bulat kecil.</p>

<p class="border border-solid border-red-500 rounded py-2 px-4 mb-6">border bulat sedang.</p>

<p class="border border-solid border-red-500 rounded-lg py-2 px-4 mb-6">border bulat besar.</p>

<p class="border border-solid border-red-500 rounded-full py-2 px-4">border bulat penuh.</p>
{{< /preview >}}




