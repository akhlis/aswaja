---
title: "Cara Menengahkan Elemen dengan CSS"
description: "Cara Menengahkan Elemen dengan CSS"
date: "2020-01-23T07:49:36+07:00"
slug: cara-menengahkan-elemen
weight: 210
authors:
- akhlis
---

Membuat sebuah elemen agar bisa berada di tengah-tengah halaman web sebenarnya merupakan hal yang sederhana.

Tetapi hal ini sering sekali membuat para web developer pemula merasa bingung untuk melakukannya.

Pada tutorial kali ini, saya akan berbagi trik untuk membuat sebuah elemen atau item agar berada di tengah halaman atau elemen lain.

Ada 6 cara untuk melakukan hal tersebut dengan menggunakan CSS.

Berikut ini caranya:

{{< toc >}}

## 1. Menggunakan Text-Align

Metode `text-align: center` ini sering digunakan untuk menengahkan sebuah teks judul artikel maupun halaman.

Namun cara ini juga bisa digunakan untuk menengahkan elemen lain seperti `<div>` secara horizontal.

Berikut ini langkah-langkah implementasinya:
- Buat elemen `<div>` sebagai _parent_ dengan nama _class_ `box__container` seperti ini `<div class="box__container">`.
- Buat elemen `<div>` baru sebagai _child_ dari elemen di atas dengan nama `box` seperti ini `<div class="box">`.
- Pada _class_ `box__container` tambahkan deklarasi `text-align: center` yang berfungsi untuk menengahkan elemen _child_ atau _class_ `box`.
- Pada _class_ `box` tambahkan deklarasi `display: inline-block` untuk mengubah default display dari `block` agar dapat ditengahkan.
- Pada _class_ `box` tambahkan juga properti tinggi, lebar, serta warna background sesuai selera kamu.

{{< editor class="w-1/3" >}}
{{< editor-html >}}
```html
<div class="box__container">
    <div class="box"></div>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.box__container {
    text-align: center;
}
.box {
    display: inline-block;
    width: 200px;
    height: 100px;
    background: #b9f6ca;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div class="text-center">
<div class="w-200px h-100px bg-green-A100 inline-block"></div>
</div>
{{< /editor-preview >}}
{{< /editor >}}

## 2. Menggunakan Margin Auto
Cara kedua ini sering digunakan untuk menengahkan sebuah konten halaman secara horizontal seperti pada cara pertama.

Langsung saja ke langkah-langkah pembuatannya:
- Buat elemen `<div>` dengan nama _class_ box seperti ini `<div class="box">`.
- Tambahkan _style_ pada _class box_ untuk menentukan lebar, tinggi, dan warnanya.
- Terakhir tambahkan juga `margin: 0 auto` pada _class box_. Properti ini yang membuat elemen bisa menjadi berada di tengah secara horizontal. 

    Nilai `0` akan membuat _margin top_ dan _bottom_ menjadi 0px (bisa juga diganti nilai lain sesukamu). 
    
    Sedangkan nilai `auto` akan mengatur secara otomatis margin-left dan margin-bottom agar elemen berada di tengah.

{{< editor class="w-1/3" editor="1" >}}
{{< editor-html >}}
```html
<div class="box"></div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.box {
    width: 200px;
    height: 100px;
    background: #b9f6ca;
    margin: 0 auto;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div class="w-200px h-100px bg-green-A100 mx-auto"></div>
{{< /editor-preview >}}
{{< /editor >}}

Contoh lain untuk menengahkan gambar:

{{< editor class="w-1/3" editor="2" >}}
{{< editor-html >}}
```html
<img class="image" src="/images/gambar.jpg">
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.image {
    display: block;
    border: 2px solid orange;
    margin: 0 auto;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<img class="border-4 border-solid border-amber-200 mx-auto" src="/images/cssref/inline-block-1.jpg">
{{< /editor-preview >}}
{{< /editor >}}

## 3. Menggunakan Posisi Absolute

Pada materi tentang [position CSS](/css/pengertian-position-css/#position-absolute) sudah dijelaskan mengenai perilaku posisi "absolute" yang tidak mengikuti aliran halaman.

Sehingga dengan posisi "absolute" kita bisa menempatkan elemen dimanapun pada halaman tanpa terpengaruh oleh posisi elemen lain.

Termasuk juga bisa digunakan untuk menengahkan elemen di dalam elemen lain.

Begini langkah-langkahnya:
- Buat elemen `<div>` sebagai _parent_ dengan nama _class_ box__container seperti `<div class="box__container">`
- Buat lagi elemen `<div>` sebagai _child_ dengan nama _class_ box seperti `<div class="box">`
- Tambahkan deklarasi `position: relative` pada class `box__container` untuk dijadikan acuan dari elemen _child_
- Pada _class_ `box` tambahkan _style_ lebar, tinggi, dan warna elemen.
- Kemudian tambahkan juga `position: absolute`
- Tambahkan lagi `left: 50%`
- Yang terakhir tambahkan `margin-left` dengan nilai __negatif__ setengah dari lebar elemen "box". Pada contoh ini lebar elemen box 200px, sehingga nilai setengahnya yaitu 100px. Jadi `margin-left: -100px`.

{{< editor class="w-1/3" editor="3" >}}
{{< editor-html >}}
```html
<div class="box__container">
<div class="box"></div>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.box__container {
    position: relative;
    height: 300px;
}
.box {
    position: absolute;
    width: 200px;
    height: 100px;
    background: #b9f6ca;
    left: 50%;
    margin-left: -100px;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div class="relative h-300px bg-gray-100">
<div class="w-200px h-100px bg-green-A100 absolute left-50pr -ml-100px"></div>
</div>
{{< /editor-preview >}}
{{< /editor >}}

## 4. Menggunakan Transform dan Translate

Cara-cara yang kita pelajari di atas, digunakan untuk menengahkan elemen secara horizontal.

Lalu bagaimana jika kita ingin membuat elemen agar bisa berada di tengah-tengah elemen lain secara vertikal dan horizontal.

Kita pakai cara ini:
- Buatlah 2 elemen `<div>` seperti pada contoh sebelumnya, serta atur lebar, tinggi, dan warnanya.
- Tambahkan `position: absolute` pada _class_ "box"
- Tambahkan juga _left_ dan _top_ menjadi 50% pada _class_ "box"
- Terakhir tambahkan `transform: translate(-50%, -50%)`

Sekarang lihat hasilnya...

Elemen box kamu bisa tepat berada ditengah-tengah.

{{< editor class="w-1/3" editor="4" >}}
{{< editor-html >}}
```html
<div class="box__container">
<div class="box"></div>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.box__container {
    position: relative;
    height: 300px;
}
.box {
    position: absolute;
    width: 200px;
    height: 100px;
    background: #b9f6ca;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div class="relative h-300px bg-gray-100">
<div class="box--center w-200px h-100px bg-green-A100 absolute left-50pr top-50pr"></div>
</div>
<style>
    .box--center {
        transform: translate(-50%, -50%)
    }
</style>
{{< /editor-preview >}}
{{< /editor >}}

## 5. Menggunakan Flexbox

Ini merupakan cara favorit yang paling sering saya gunakan untuk membuat elemen agar bisa berada di tengah baik secara horizontal maupun vertikal.

Cara membuatnya mirip dengan cara-cara sebelumnya, namun menurut saya cara ini yang paling mudah dipahami oleh pemula.

Terutama untuk membuat elemen agar bisa di tengah-tengah secara vertikal dan horizontal.

Begini langkah-langkah membuatnya:
- Buat elemen `<div>` sebagai _parent_ dengan nama _class_ box__container seperti `<div class="box__container">`
- Buat lagi elemen `<div>` sebagai _child_ dengan nama _class_ box seperti `<div class="box">`
- Tambahkan CSS berikut pada class `box__container`:
    ```css
    .box__container {
        display: flex;
        justify-content: center; /* membuat konten berada di tengah secara horizontal */
        align-items: center; /* membuat konten berada di tengah secara vertikal */
        height: 300px;
    }
    ```
- Pada _class_ `box` tambahkan style lebar, tinggi, dan warna

{{< editor class="w-1/3" editor="5" >}}
{{< editor-html >}}
```html
<div class="box__container">
<div class="box"></div>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.box__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
}
.box {
    width: 200px;
    height: 100px;
    background: #b9f6ca;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div class="h-300px bg-gray-100 flex justify-center items-center">
<div class="w-200px h-100px bg-green-A100"></div>
</div>
{{< /editor-preview >}}
{{< /editor >}}

## 6. Di Tengah secara Vertikal
Cara terakhir ini digunakan untuk membuat elemen agar berada di tengah secara vertikal.

Caranya mirip dengan nomor 4 yaitu menggunakan position "absolute" dan "transform".

Hanya _style_-nya saja yang diubah sedikit, jadi seperti ini:
```css
.box {
    position: absolute;
    width: 200px;
    height: 100px;
    background: #b9f6ca;
    top: 50%;
    transform: translate(0, -50%)
}
```

{{< editor class="w-1/3" editor="6" >}}
{{< editor-html >}}
```html
<div class="box__container">
<div class="box"></div>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.box__container {
    position: relative;
    height: 300px;
}
.box {
    position: absolute;
    width: 200px;
    height: 100px;
    background: #b9f6ca;
    top: 50%;
    transform: translate(0, -50%)
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div class="relative h-300px bg-gray-100">
<div class="box--vertical w-200px h-100px bg-green-A100 absolute top-50pr"></div>
</div>
<style>
    .box--vertical {
        transform: translate(0, -50%)
    }
</style>
{{< /editor-preview >}}
{{< /editor >}}