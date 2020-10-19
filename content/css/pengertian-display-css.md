---
title: "Pengertian Display pada CSS"
description: "Pengertian Display pada CSS"
date: "2020-01-20T13:49:36+07:00"
slug: pengertian-display-css
weight: 180
authors:
- akhlis
---

Properti CSS `display` merupakan salah satu fitur CSS terpenting yang digunakan untuk mengatur tampilan tata letak elemen.

Halaman website tersusun dari berbagai elemen yang berbentuk segi empat atau kotak (baca lebih detail tentang [box model](css/pengertian-box-model-css/).

Bentuk kotak elemen inilah yang mempengaruhinya dalam format visual halaman.

Dengan properti `display`, kita bisa mengontrol perilaku kotak elemen untuk ditampilkan seperti apa, disembunyikan, atau tidak ditampilkan pada visual halaman.

Secara umum, elemen bisa ditampilkan sesuai nilai __display__ berikut:
- `display: none` vs `visibility: hidden`
- `display: block`
- `display: inline`
- `display: inline-block`

Yuk kita lanjut ke pembahasannya...

{{< toc >}}

## Display: None vs Visibility: Hidden

Kita bisa menyembunyikan elemen dengan deklarasi `display: none`.

Selain itu, kita juga bisa menyembunyikan elemen dengan menggunakan deklarasi `visibility: hidden`.

Namun kedua deklarasi tersebut memiliki perbedaan.

Untuk melihat perbedaannya, saya membuat 3 _box_ seperti ini:
<div class="flex bg-gray-100 mx-auto mb-8">
    <div class="w-100px h-100px bg-red-100 m-4"></div>
    <div class="w-100px h-100px bg-green-100 m-4"></div>
    <div class="w-100px h-100px bg-blue-100 m-4"></div>
</div>

Lalu pada box warna hijau (`.box-2`) saya sembunyikan dengan deklarasi `display: none`.
```css
.box-2 {
    background: #c8e6c9;
    display: none;
}
```

{{< editor class="w-1/3" >}}
{{< editor-html >}}
```html
<div class="flex">
    <div class="box box-1"></div>
    <div class="box box-2"></div>
    <div class="box box-3"></div>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.flex {
    display: flex;
    background: #f7fafc;
    margin: 4rem;
}
.box {
    width: 100px;
    height: 100px;
    margin: 1rem;
}
.box-1 {
    background: #ffcdd2;
}
.box-2 {
    background: #c8e6c9;
    display: none;
}
.box-3 {
    background: #bbdefb;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div class="flex bg-gray-100 mx-auto">
<div class="w-100px h-100px bg-red-100 m-4"></div>
<div class="w-100px h-100px bg-green-100 m-4 hidden"></div>
<div class="w-100px h-100px bg-blue-100 m-4"></div>
</div>
{{< /editor-preview >}}
{{< /editor >}}

Sekarang _box_ warna hijau menjadi hilang dari tampilan halaman web.

Sebenarnya _box_ tersebut masih ada dalam struktur HTML, namun dengan `display: none` menyebabkan elemen seolah-olah terhapus.

Sehingga _box_ warna biru (`.box-3`) akan bergeser ke kiri dan menggunakan ruang kosong yang sebelumnya ditempati oleh _box_ hijau.

Berbeda halnya jika menggunakan deklarasi `visibility: hidden` untuk menyembunyikan _box_ warna hijau.

_Box_ hijau tersebut tidak benar-benar hilang, tetapi hanya membuat elemen menjadi tidak tampak.

Sehingga posisi _box_ warna biru (`.box-3`) masih tetap berada di tempat aslinya.

```css
.box-2 {
    background: #c8e6c9;
    visibility: hidden;
}
```

{{< editor class="w-1/3" editor="1" >}}
{{< editor-html >}}
```html
<div class="flex">
    <div class="box box-1"></div>
    <div class="box box-2"></div>
    <div class="box box-3"></div>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.flex {
    display: flex;
    background: #f7fafc;
    margin: 4rem;
}
.box {
    width: 100px;
    height: 100px;
    margin: 1rem;
}
.box-1 {
    background: #ffcdd2;
}
.box-2 {
    background: #c8e6c9;
    visibility: hidden;
}
.box-3 {
    background: #bbdefb;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div class="flex bg-gray-100 mx-auto">
<div class="w-100px h-100px bg-red-100 m-4"></div>
<div class="w-100px h-100px bg-green-100 m-4 invisible"></div>
<div class="w-100px h-100px bg-blue-100 m-4"></div>
</div>
{{< /editor-preview >}}
{{< /editor >}}

## Block vs. Inline

Pernahkah kamu memperhatikan beberapa tag HTML seperti `<div>`, `<p>`, `<ul>` akan memulainya dengan baris baru dan masing-masing mengambil ruang penuh?

Disisi lain, tag HTML seperti `<span>`, `<img>`, atau `<a>` tidak memulainya dengan baris baru dan bisa ditempatkan berdampingan?

Hal ini bisa terjadi karena perbedaan perilaku `display` _Block_ dan _Inline_.

Apa saja perbedaannya?

Mari kita lihat perbedaannya melalui contoh berikut:

Saya membuat template HTML dengan tag `<p>` dan tag `<span>` tanpa diberi CSS seperti ini:
```html
<body>
  <p>Ini contoh elemen block dengan tag "&lt;p&gt;"</p>
  <p>Elemen block ini akan membuat baris baru</p>
  <p>Elemen block juga akan mengambil ruang penuh</p>
  <span>Ini elemen inline</span>
  <span>Ini tag "&lt;span&gt;"</span>
  <span>Elemen inline hanya mengambil ruang seperlunya</span>
</body>
```
Ini hasilnya di browser Chrome

![display block vs inline](/images/css/display/display-block-vs-inline.png)

Dapatkah kamu melihat perbedaannya?

pada masing-masing tag `<p>` akan dimulai dengan baris baru meski masih tersedia ruang kosong di atasnya.

Sedangkan pada tag `<span>` hanya mengambil ruang seperlunya dan tidak dimulai dengan baris baru.

Secara default, elemen HTML memiliki perilaku sebagai _block_ atau _inline_.

Elemen yang selalu dimulai dengan baris baru disebut elemen __block-level__.

## Display: Block

Elemen __block__ adalah elemen yang akan memisahkan diri dari kotak garis elemen lain atau membuat baris baru.

Elemen block biasanya menempati ruang horizontal sebanyak mungkin (tergantung pada elemen block).

Agar lebih mudah dipahami, inilah karakteristik elemen __level blok__:
- Mengambil ruang penuh (lebar 100%) secara default.
- Selalu ditampilkan pada baris baru.
- Dapat ditentukan lebar dan tingginya dengan properti CSS `width` dan `height`.
- Dapat mengandung elemen _block_ lain dan elemen _inline_ atau _inline-block_.

Contoh elemen __block__ yaitu `<p>`, `<ul>`, `<h1->-<h6>`, `div>`, `<section>`, dan `<header>`.

{{< tips >}}
Silahkan cek referensi tentang [tag HTML](/element/) untuk melihat daftar elemen block secara lengkap.
{{< /tips >}}

{{< preview >}}
<header class="relative p-4 mb-6">
  <h1>Ini Judul Elemen Block dengan tag "h1"</h1>
  <span class="absolute w-full h-full top-0 left-0 border-2 border-solid border-amber-200"></span><span class="absolute text-xs bg-amber-200 left-0 -top-4 px-4">level block: &lt;h1&gt;</span>
</header>
<p class="relative py-2 px-4 mb-6">Ini paragraf pertama sebagai elemen block dengan tag "&lt;p&gt;".<span class="absolute w-full h-full top-0 left-0 border-2 border-solid border-amber-200"></span><span class="absolute text-xs bg-amber-200 left-0 -top-4 px-4">level block: &lt;p&gt;</span>
<p class="relative py-2 px-4">Elemen paragraf ini akan memisahkan diri dari elemen lain dan membuat baris baru.<span class="absolute w-full h-full top-0 left-0 border-2 border-solid border-amber-200"></span><span class="absolute text-xs bg-amber-200 left-0 -top-4 px-4">level block: &lt;p&gt;</span>
{{< /preview >}}

Selama tag `<p>` sebagai elemen _level blok_, maka lebar dan tingginya bisa ditentukan dengan properti `width` dan `height`.

```css
p {
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}
```
{{< editor class="w-1/3" editor="2" >}}
{{< editor-html >}}
```html
<div>
  <p>Paragraf satu</p>
  <p>Paragraf dua</p>
  <p>Paragraf tiga</p>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
div {
    background: #f7fafc;
}

p {
  width: 100px;
  height: 100px;
  background: #bbdefb;
  color: #fff;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div class="bg-gray-100 p-4">
<p class="w-100px h-100px bg-blue-100 text-white text-sm mb-4">Paragraf satu</p>
<p class="w-100px h-100px bg-blue-100 text-white text-sm mb-4">Paragraf dua</p>
<p class="w-100px h-100px bg-blue-100 text-white text-sm">Paragraf tiga</p>
</div>
{{< /editor-preview >}}
{{< /editor >}}

Jika lebarnya tidak ditentukan, maka lebar default `<p>` akan menjadi 100%.

## Display: Inline

Elemen __inline__ (elemen level sebaris) adalah elemen yang mengalir dalam garis tanpa menyebabkannya terpisah.

Elemen _inline_ memiliki karakteristik:
- Hanya mengambil ruang kosong yang diperlukan.
- Ditampilkan bersanding dengan elemen inline lain.
- Tidak menerima pengaturan properti `width` atau `height`, dan `margin-top` atau `margin-bottom`.
- Bisa menjadi induk dari elemen _inline_ lain.

Contoh elemen _inline_ yang sering digunakan misalnya `span`, `em`, dan `img`.

Elemen-elemen tersebut merupakan bagian dari kotak garis dan tidak menyebabkan garis itu terpisah.

{{< preview >}}
<p class="relative py-2 px-4 mb-8">Ini adalah contoh elemen inline dengan
<strong class="border-2 border-solid border-amber-200 py-1 px-2 mb-8 mr-2">tag &lt;strong&gt;</strong> dan 
<span class="border-2 border-solid border-amber-200 py-1 px-2 mb-8 mr-2">tag &lt;span&gt;</span> yang ditandai dengan border warna amber.
<span class="absolute w-full h-full top-0 left-0 border-2 border-solid border-gray-200"></span><span class="absolute text-xs bg-gray-200 left-0 -top-4 px-4">level block: &lt;p&gt;</span></p>

<p class="relative py-2 px-4 mb-8">Dan ini contoh lain kotak <strong>inline</strong> dengan gambar <img class="inline-block border-4 border-solid border-amber-200" src="/images/cssref/inline-block-1.jpg"> menggunakan elemen "img".<span class="absolute w-full h-full top-0 left-0 border-2 border-solid border-gray-200"></span><span class="absolute text-xs bg-gray-200 left-0 -top-4 px-4">level block: &lt;p&gt;</span></p>
<span class="relative py-2 px-4 mr-2">Elemen inline<span class="absolute w-full h-full top-0 left-0 border-2 border-solid border-amber-200"></span><span class="absolute text-xs bg-amber-200 left-0 -top-4 px-4">level inline</span>
</span>
<span class="relative py-2 px-4 mr-2">Tag &lt;span&gt;<span class="absolute w-full h-full top-0 left-0 border-2 border-solid border-amber-200"></span><span class="absolute text-xs bg-amber-200 left-0 -top-4 px-4">level inline</span>
</span>
{{< /preview >}}


Selama tag `<p>` diatur menjadi elemen _level inline_, maka penempatannya bisa bersanding dan properti CSS `width` & `height` tidak memiliki efek.

```css {hl_lines=[6]}
p {
  width: 100px;
  height: 100px;
  background: red;
  color: white;
  display: inline;
}
```
{{< editor class="w-1/3" editor="3" >}}
{{< editor-html >}}
```html
<div>
  <p>Paragraf satu</p>
  <p>Paragraf dua</p>
  <p>Paragraf tiga</p>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
div {
    background: #f7fafc;
}

p {
  width: 100px;
  height: 100px;
  background: #bbdefb;
  color: #fff;
  display: inline;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div class="bg-gray-100 p-4">
<p class="w-100px h-100px bg-blue-100 text-white text-sm mb-4 inline">Paragraf satu</p>
<p class="w-100px h-100px bg-blue-100 text-white text-sm mb-4 inline">Paragraf dua</p>
<p class="w-100px h-100px bg-blue-100 text-white text-sm inline">Paragraf tiga</p>
</div>
{{< /editor-preview >}}
{{< /editor >}}

## Display: Inline-block

Dalam beberapa kasus, kadang kedua nilai display di atas belum cukup untuk mengatur tampilan desain menjadi lebih baik.

Solusinya bisa menggunakan kombinasi dari karakteristik nilai display _block_ dan _inline_ menjadi `display: inline-block`.

Sehingga elemen _inline block_ bisa ditentukan lebar dan tingginya menggunakan properti `width` & `height`.

Dan elemen ini hanya mengambil ruang seperlunya, jadi tidak dimulai dari baris baru.

Sebagai contoh, saya akan mengatur tag `<p>` menjadi elemen _inline block_ seperti berikut:

```css {hl_lines=[6]}
p {
  width: 100px;
  height: 100px;
  background: red;
  color: white;
  display: inline-block;
}
```
{{< editor class="w-1/3" editor="4" >}}
{{< editor-html >}}
```html
<div>
  <p>Paragraf satu</p>
  <p>Paragraf dua</p>
  <p>Paragraf tiga</p>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
div {
    background: #f7fafc;
}

p {
  width: 100px;
  height: 100px;
  background: #bbdefb;
  color: #fff;
  display: inline-block;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div class="bg-gray-100 p-4">
<p class="w-100px h-100px bg-blue-100 text-white text-sm mb-4 inline-block">Paragraf satu</p>
<p class="w-100px h-100px bg-blue-100 text-white text-sm mb-4 inline-block">Paragraf dua</p>
<p class="w-100px h-100px bg-blue-100 text-white text-sm inline-block">Paragraf tiga</p>
</div>
{{< /editor-preview >}}
{{< /editor >}}

Sekarang elemen paragraf bisa ditempatkan bersanding dan lebar & tingginya juga bisa ditentukan.

## Daftar Nilai Display Secara Lengkap

{{< property >}}
{{< property-value value="display: none;" >}}
Elemen ini sepenuhnya dihapus, seolah-olah tidak ada dalam kode HTML di tempat pertama.
{{< /property-value >}}
{{< property-preview >}}
      <div class="property__example display p-4" id="display-none">
        <div class="block text-sm bg-grey-100 rounded-sm p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <p class="hidden block--alpha">
            Hello world</p> Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
          diam, consequat gravida libero rhoncus ut.</div>
      </div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="display: inline;" >}}
Elemen diubah menjadi elemen inline: berperilaku seperti teks sederhana.

`width` dan `height` yang diterapkan tidak akan berpengaruh.
{{< /property-value >}}
{{< property-preview >}}
      <div class="property__example display p-4" id="display-inline">
        <div class="block text-sm bg-grey-100 rounded-sm p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <p class="block inline bg-green-A400">
            Hello world</p> Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
          diam, consequat gravida libero rhoncus ut.</div>
      </div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="display: block;" >}}
Elemen diubah menjadi elemen blok: dimulai pada baris baru, dan mengambil seluruh lebar yang tersedia.
{{< /property-value >}}
{{< property-preview >}}
      <div class="property__example display p-4" id="display-block">
        <div class="block text-sm bg-grey-100 rounded-sm p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <p class="block bg-green-A400">
            Hello world</p> Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
          diam, consequat gravida libero rhoncus ut.</div>
      </div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="display: inline-block;" >}}
Elemen ini membagikan properti elemen __inline__ dan __block__:
- __inline__ karena elemen berperilaku seperti teks sederhana, dan menyisipkan dirinya dalam blok teks
- __block__ karena kamu dapat menerapkan nilai `width` dan `height`.

Sebagai contoh, elemen ini memiliki
```css
.element{
  height: 3em;
  width: 60px;
}
```
{{< /property-value >}}
{{< property-preview >}}
      <div class="property__example display p-4" id="display-inline-block">
        <div class="block text-sm bg-grey-100 rounded-sm p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <p class="block--alpha inline-block bg-green-A400">
            Hello world</p> Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
          diam, consequat gravida libero rhoncus ut.</div>
      </div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="display: list-item;" >}}
Elemen berperilaku seperti __list item__: `<li>`. Satu-satunya perbedaan dengan __block__ yaitu item daftar memiliki __bullet point__.
{{< /property-value >}}
{{< property-preview >}}
      <div class="property__example display p-4" id="display-list-item">
        <div class="block text-sm bg-grey-100 rounded-sm p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <p class="block--alpha list-item bg-green-A400">
            Hello world</p> Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
          diam, consequat gravida libero rhoncus ut.</div>
      </div>
      <style>
        .list-item {
          display: list-item;
        }
      </style>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="display: table;" >}}
Elemen berperilaku seperti __tabel__: `<table>`.

Konten dan elemen turunannya berperilaku seperti sel tabel
{{< /property-value >}}
{{< property-preview >}}
  <div class="property__example display p-4" id="display-table">
    <div class="block text-sm bg-grey-100 rounded-sm p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <p class="block--alpha table bg-green-A400">
        Target <span>First child</span> <span>Second child</span></p> Etiam semper diam at erat pulvinar, at
      pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</div>
  </div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="display: table-cell;" >}}
Elemen berperilaku seperti sel tabel: `<td>` atau `<th>`.

Konten dan elemen turunannya berperilaku seperti sel tabel.
{{< /property-value >}}
{{< property-preview >}}
  <div class="property__example display p-4" id="display-table-cell">
    <div class="block text-sm bg-grey-100 rounded-sm p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <p class="block--alpha table-cell bg-green-A400">
        Target <span>First child</span> <span>Second child</span></p> Etiam semper diam at erat pulvinar, at
      pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</div>
  </div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="display: table-row;" >}}
Elemen berperilaku seperti baris tabel: `<tr>`.

Konten dan elemen turunannya berperilaku seperti sel tabel.
{{< /property-value >}}
{{< property-preview >}}
  <div class="property__example display p-4" id="display-table-row">
    <div class="block text-sm bg-grey-100 rounded-sm p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <p class="block--alpha table-row bg-green-A400">
        Target <span>First child</span> <span>Second child</span></p> Etiam semper diam at erat pulvinar, at
      pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</div>
  </div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="display: flex;" >}}
Elemen diubah menjadi wadah flexbox. Dengan sendirinya, ia berperilaku seperti elemen blok.

Elemen turunannya akan diubah menjadi item flexbox.
{{< /property-value >}}
{{< property-preview >}}
  <div class="property__example display p-4" id="display-flex">
    <div class="block text-sm bg-grey-100 rounded-sm p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <p class="block--alpha flex bg-green-A400">
        <span>First child</span> <span>Second child</span></p> Etiam semper diam at erat pulvinar, at
      pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</div>
  </div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="display: inline-flex;" >}}
Elemen ini membagikan properti elemen __inline__ dan __flexbox__:
- __inline__ karena elemen berperilaku seperti teks sederhana, dan menyisipkan dirinya dalam blok teks
- __flexbox__ karena elemen turunannya akan diubah menjadi item-item flexbox

Sebagai contoh, elemen ini memiliki:
```css
.element{
  height: 3em;
  width: 120px;
}
```
{{< /property-value >}}
{{< property-preview >}}
  <div class="property__example display p-4" id="display-inline-flex">
    <div class="block text-sm bg-grey-100 rounded-sm p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <p class="block--alpha inline-flex bg-green-A400">
        <span>First child</span> <span>Second child</span></p> Etiam semper diam at erat pulvinar, at
      pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</div>
  </div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="display: grid;" >}}
Elemen diubah menjadi wadah __grid__. Dengan sendirinya, ia berperilaku seperti elemen blok.

Elemen turunannya akan diubah menjadi __grid items__.
{{< /property-value >}}
{{< property-preview >}}
  <div class="property__example display p-4" id="display-grid">
    <div class="block text-sm bg-grey-100 rounded-sm p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <p class="block--alpha grid bg-green-A400">
        <span>First child</span> <span>Second child</span></p> Etiam semper diam at erat pulvinar, at
      pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</div>
  </div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="display: inline-grid;" >}}
Elemen ini membagikan properti elemen __inline__ dan __grid__:
- __inline__ karena elemen berperilaku seperti teks sederhana, dan menyisipkan dirinya dalam blok teks
- __block__ karena elemen turunannya akan diubah menjadi item flexbox

Sebagai contoh, elemen ini memiliki:
```css
.element{
  height: 3em;
  width: 120px;
}
```
{{< /property-value >}}
{{< property-preview >}}
  <div class="property__example display p-4" id="display-inline-grid">
    <div class="block text-sm bg-grey-100 rounded-sm p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <p class="block--alpha inline-grid bg-green-A400">
        <span>First child</span> <span>Second child</span></p> Etiam semper diam at erat pulvinar, at
      pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</div>
  </div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
    .display .block span {
        background: hsl(348, 100%, 61%);
        color: #fff;
    }

    .display .block span:last-child {
        background: hsl(217, 71%, 53%);
    }

    #display-inline-block .block--alpha {
        height: 3em;
        width: 60px;
    }

    #display-inline-flex .block--alpha {
        height: 3em;
        width: 120px;
    }

    #display-grid .block--alpha {
        display: grid;
        grid-template-columns: auto auto;
    }

    #display-inline-grid .block--alpha {
        display: inline-grid;
        grid-template-columns: auto auto;
        height: 3em;
        width: 120px;
    }
</style>