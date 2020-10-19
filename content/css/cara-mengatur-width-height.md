---
title: "Cara Mengatur Lebar dan Tinggi Elemen dengan CSS"
description: "Cara mengatur lebar dan tinggi dengan CSS"
date: "2020-01-12T07:34:07+07:00"
slug: cara-mengatur-lebar-dan-tinggi-elemen
weight: 90
authors:
- akhlis
---

Setiap elemen HTML memiliki bentuk persegi panjang secara default.

Dan setiap elemen tersebut memiliki karakteristik "box model" seperti yang sudah saya bahas pada tutorial sebelumnya tentang [margin](/css/pengertian-margin-css/) dan [padding](/css/pengertian-padding-css/).

__Box-model__ menggambarkan area yang terdapat dalam setiap elemen, yaitu: _content area_, _padding area_, _border area_, dan _margin area_.

_Content area_ ada pada setiap elemen, sedangkan _padding area_, _border area_, dan _margin area_ merupakan opsional yang keberadaannya tergantung pada _layout_ desain halaman web yang dibuat oleh web developer.

{{< figure src="/images/cssref/box-areas.png" class="text-center" imgClass="mx-auto" alt="Area box model dalam CSS — termasuk area konten, padding, border, dan margin" title="Area box model dalam CSS — termasuk area konten, padding, border, dan margin." >}}

Dalam web desain, keberadaan _box model_ ini bisa berpengaruh pada tata letak elemen _block_ HTML.

Selain memiliki karakteristik _box model_ yang sudah disebutkan di atas, elemen HTML juga bisa diatur lebar dan tingginya menggunakan property CSS `width` dan `height`.

## Cara Mengatur Lebar dan Tinggi Elemen dengan Property CSS `width` dan `height`

Untuk mengatur lebar elemen HTML, kamu bisa menggunakan property CSS `width`.

Dan untuk mengatur tinggi elemen HTML, kamu bisa menggunakan property CSS `height`.

Perlu diingat! property `width` dan `height` tidak menyertakan lebar padding, border, dan margin.

Sehingga properti _width_ dan _height_ ini hanya mengatur lebar dan tinggi area di dalam _padding_, _border_, dan _margin_.


### Nilai Property CSS width dan height

Property CSS `width` dan `height` memiliki nilai berikut:
- `auto` - Ini nilai default yang ditentukan oleh web browser
- `length` - menentukan lebar dan tinggi dengan satuan px, cm, em, rem, dll.
- `%` - menentukan lebar dan tinggi dalam persen.
- `initial` - menentukan lebar dan tinggi berdasarkan nilai defaultnya.
- `inherit` - menentukan lebar dan tinggi dengan mengikuti nilai elemen induk.

Sebagai contoh, saya akan membuat elemen box menggunakan tag `<div class="box"></div` dengan lebar 300px dan tinggi 200px.

Seperti ini _style_ CSS-nya:
```css
.box {
    width: 300px;
    height: 200px;
}
```

Dan ini hasilnya:

<div class="w-300px h-200px bg-orange-100 m-auto mt-4 mb-8"></div>

Perhatikan contoh di atas! elemen box benar-benar memiliki lebar 300px dan tinggi 200px.

Sekarang saya akan memberikan padding atas 32px dan padding bawah 32px pada elemen box.

Seperti ini _style_ CSS-nya:
```css
.box {
    width: 300px;
    height: 200px;
    padding-top: 32px;
    padding-bottom: 32px;
}
```
Dan seperti ini hasil akhirnya:

<div class="w-300px bg-orange-100 border border-dashed border-orange-500 m-auto mt-4 pt-8"></div>
<div class="w-300px h-200px bg-orange-100 m-auto"></div>
<div class="w-300px bg-orange-100 border border-dashed border-orange-500 m-auto mb-8 pt-8"></div>

Perhatikan lagi contoh di atas!

Lebar box tetap 300px karena tidak ada padding kanan dan kiri didalam elemen box.

Sedangkan tinggi box akan menjadi 264px.

Lalu kenapa tinggi box bisa berubah menjadi 264px?

Seperti yang sudah saya terangkan di atas tadi bahwa property `width` dan `height` tidak menyertakan lebar padding, border, dan margin.

Sehingga properti _height_ pada elemen box hanya mengatur tinggi area di dalam _padding_ elemen box.

Jadi nilai tinggi 264px didapat dari jumlah `padding-top: 32px` + `height: 200px` + `padding-bottom: 32px`.

## Mengatur Box Model dengan Property CSS `box-sizing`

Dalam menentukan layout halaman website, kadang keberadaan "box model" akan menyebabkan kendala jika ingin menentukan lebar dan tinggi elemen dengan nilai yang tetap.

Misalnya seperti contoh di atas tadi.

Ketika kamu ingin menentukan tinggi elemen box dengan nilai __200px__, tetapi hasil akhirnya malah menjadi __264px__ karena adanya _padding top_ dan _padding bottom_ pada elemen box.

Masalah ini bisa diatasi dengan cara menggunakan property CSS `box-sizing: border-box` pada elemen box.

Jadi seperti ini _style_ CSS-nya:
```css
.box {
    width: 300px;
    height: 200px;
    padding-top: 32px;
    padding-bottom: 32px;
    box-sizing: border-box;
}
```
Dan seperti ini hasilnya:

<div class="w-300px h-200px flex flex-col justify-between bg-orange-100 m-auto mb-8">
    <div class="w-300px h-8 border border-dashed border-orange-500"></div>
    <div class="w-300px h-8 border border-dashed border-orange-500"></div>
</div>

Sekarang perhatikan lagi contoh di atas!

Lebar box tetap 300px dan tingginya juga tetap 200px meskipun terdapat _padding top_ dan _padding bottom_ pada elemen.

Hal ini disebabkan karena nilai _padding_ juga ikut dihitung sebagai tinggi elemen box.

Namun dampaknya tinggi _content area_ akan berkurang dari 200px menjadi 136px.

<div class="w-300px h-200px flex flex-col justify-between bg-amber-100 m-auto mb-8">
    <div class="w-300px h-8 border border-dashed border-orange-500 bg-orange-100 text-center text-sm pt-1">padding top 32px</div>
    <span class="text-sm text-center">content area tingginya menjadi 136px</span>
    <div class="w-300px h-8 border border-dashed border-orange-500 bg-orange-100 text-center text-sm pt-1">padding bottom 32px</div>
</div>

Darimana nilai tinggi 136px pada _content area_ ini didapatkan?

Nilai tinggi 136px pada _content area_ didapatkan dari `height: 200px` - `padding-top: 32px` - `padding-bottom: 32px`.




