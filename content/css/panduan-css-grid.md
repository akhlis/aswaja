---
title: "Panduan Lengkap CSS Grid"
description: "In this course, you will master a technology that was recently added to CSS! This is a long-awaited improvement to laying-out and positioning elements on web pages."
date: "2020-02-06T06:34:07+07:00"
slug: panduan-lengkap-css-grid
weight: 500
authors:
- akhlis
layout: grid
table_content:
- title: Apa itu CSS Grid Layout?
- title: Dasar CSS Grid Layout
- title: Terminology CSS Grid
  subtitle:
  - title: Grid Container
  - title: Grid Item
  - title: Grid Line
  - title: Grid Track
  - title: Grid Cell
  - title: Grid Area
- title: Membuat Grid Container
  subtitle:
  - title: Display Grid
  - title: Display Inline Grid
- title: Explicit Grid
  subtitle:
  - title: grid-template-columns
  - title: grid-template-rows
- title: Ukuran Minimum dan Maksimum Grid Track
- title: Grid Track Berulang
- title: Grid Gaps (Gutter)
  subtitle:
  - title: grid-column-gap
  - title: grid-row-gap
- title: Mengatur Posisi Item berdasarkan Angka Grid Line
  subtitle:
  - title: grid-column-start
  - title: grid-column-end
  - title: grid-row-start
  - title: grid-row-end
- title: Merentangkan Item Di Antara Baris dan Kolom
- title: Memberi Nama Garis Grid
---

Proses pertama yang harus dilakukan dalam membuat desain halaman website yaitu menentukan layoutnya.

Sayangnya, proses inilah yang biasanya paling banyak menyita waktu karena tingkat kesulitannya cukup tinggi.

Tapi itu dulu...

Di era tahun 90an.

Waktu itu, untuk membuat layout halaman website masih menggunakan teknik CSS tabel dengan dibantu  _image slicing tools_ seperti Fireworks.

Saat ini dunia terus berubah.

Fitur CSS juga terus berkembang.

Sekarang sudah ada beberapa teknik yang bisa dilakukan untuk menentukan layout halaman website.

Mulai dari teknik CSS table (cara jadul), CSS property _float_ dan _clearfix_, CSS Flexbox, dan yang paling baru yaitu CSS Grid.

Semakin baru fiturnya, semakin memudahkan kita untuk mengatur tata letak elemen website.

Jadi bagi kamu yang baru belajar CSS, tidak ada salahnya untuk langsung mempelajari teknik membuat layout dengan CSS Grid ini.

Dan saya akan membahasnya secara detail dalam artikel ini.

Yuk baca sampai selesai...

## Apa itu CSS Grid Layout?

CSS Grid Layout adalah fitur terbaru dari CSS3 yang digunakan untuk mengatur sistem tata letak elemen HTML.

_Grid layout_ memiliki sistem 2 dimensi sehingga dapat menangani kolom dan baris.

Tidak seperti [CSS Flexbox](/css/css-flexbox) yang sebagian besar merupakan sistem 1 dimensi.

Dengan menentukan CSS Grid pada elemen induk (sebagai _grid container_), otomatis elemen anak akan menjadi item grid (_grid items_).

CSS Grid telah mengubah cara kita dalam mengatur tata letak elemen menjadi lebih mudah.

Sebelum adanya fitur ini, untuk mengatur tata letak elemen (misalnya menengahkan elemen secara vertikal) harus menggunakan teknik _float_ atau _positioning_ yang cukup ribet dan kadang perlu teknik _hack CSS_.

Kemudian datang fitur flexbox yang bisa memecahkan masalah tersebut. Tapi masih menyisakan sedikit masalah dalam hal pengaturan baris elemen.

Dan akhirnya, fitur grid layout ini datang untuk menyelesaikan semua masalah sebelumnya.

## Dasar CSS Grid Layout

Untuk mulai menggunakan CSS Grid, kamu harus menentukan elemen _container_ sebagai grid dengan `display: grid`.

Kemudian tentukan ukuran kolom dan baris dengan `grid-template-columns` dan `grid-template-rows`.

Setelah itu, tambahkan `grid-column` dan `grid-row` pada elemen anak sebagai _grid item_.

## Terminology CSS Grid

Sebelum mendalami konsep Grid, kamu harus memahami dulu terminologinya.

Karena ada beberapa istilah dalam CSS grid ini yang semua konsepnya hampir sama.

Sehingga kamu harus menghafalnya seperti yang didefinisikan oleh spesifikasi Grid.

### Grid Container

_Grid container_ adalah elemen yang ditentukan dengan `display: grid` dan dijadikan induk dari semua item grid.

Pada contoh ini, `<div class="container">` adalah grid container.
```html
<div class="container">
  <div class="item item-1"></div>
  <div class="item item-2"></div>
  <div class="item item-3"></div>
</div>
```

### Grid Item

_Grid Item_ adalah semua elemen anak pertama dari _grid container_.

Pada contoh berikut, semua `<div class="item">` adalah grid item. 

Tetapi `<p class="sub-item">` bukanlah grid item karena sebagai anak kedua.
```html
<div class="container">
  <div class="item"></div>
  <div class="item">
      <p class="sub-item"></p>
  </div>
  <div class="item"></div>
</div>
```

### Grid Line

_Grid line_ adalah garis pemisah yang membentuk struktur grid.

Garis ini berupa garis vertikal ("column grid lines") dan juga garis horizontal ("row grid lines") yang berada di kedua sisi baris dan kolom.

Garis ini bisa dilihat secara real pada browser Chrome dengan cara `klik kanan > klik inspeksi > pada tab elements, arahkan kursor pada elemen grid container`.

<div class="w-full lg:w-1/2 grid grid-cols-3 border-2 border-solid border-gray-500 mb-6 mx-auto">
  <div class="col-span-1 h-75px border-r border-b border-dashed border-amber-500"></div>
  <div class="col-span-1 h-75px border-r border-b border-dashed border-amber-500"></div>
  <div class="col-span-1 h-75px border-b border-dashed border-amber-500"></div>
  <div class="col-span-1 h-75px border-r border-dashed border-amber-500"></div>
  <div class="col-span-1 h-75px border-r border-dashed border-amber-500"></div>
  <div class="col-span-1 h-75px"></div>
</div>

Garis berwarna orange itulah yang disebut dengan _grid lines_.

### Grid Track

_Grid track_ adalah ruang antara dua garis grid yang berdekatan.

Atau bisa disebut sebagai kolom atau baris grid.

Pada contoh berikut, _grid track_ ada diantara garis grid kedua dan ketiga yang saya beri warna orange.

<div class="w-full lg:w-1/2 grid grid-cols-3 border-2 border-solid border-gray-500 mb-6 mx-auto">
  <div class="col-span-1 h-75px border-r border-b border-dashed border-gray-400"></div>
  <div class="col-span-1 h-75px border-r border-b border-dashed border-gray-400"></div>
  <div class="col-span-1 h-75px border-b border-dashed border-gray-400"></div>
  <div class="col-span-1 h-75px bg-amber-100 border-r border-dashed border-gray-400"></div>
  <div class="col-span-1 h-75px bg-amber-100 border-r border-dashed border-gray-400"></div>
  <div class="col-span-1 h-75px bg-amber-100"></div>
</div>

### Grid Cell

_Grid Cell_ adalah ruang antara dua garis grid kolom ("column") dan garis grid baris ("row") yang berdekatan.

Grid cell ini merupakan satu "unit" dari grid.

Pada contoh berikut, _grid cell_ ada di antara garis grid baris 1 dan 2, dan garis grid kolom 2 dan 3.

<div class="w-full lg:w-1/2 grid grid-cols-3 border-2 border-solid border-gray-500 mb-6 mx-auto">
  <div class="col-span-1 h-75px border-r border-b border-dashed border-gray-400"></div>
  <div class="col-span-1 h-75px bg-amber-100 border-r border-b border-dashed border-gray-400"></div>
  <div class="col-span-1 h-75px border-b border-dashed border-gray-400"></div>
  <div class="col-span-1 h-75px border-r border-dashed border-gray-400"></div>
  <div class="col-span-1 h-75px border-r border-dashed border-gray-400"></div>
  <div class="col-span-1 h-75px"></div>
</div>

### Grid Area

_Grid Area_ adalah total ruang dari beberapa _grid cell_ yang telah ditentukan sebelumnya.

Pada contoh berikut, grid area terdiri dari 4 grid cell yang ada di antara garis grid baris 1 dan 3, dan garis grid kolom 1 dan 3.

<div class="w-full lg:w-1/2 grid grid-cols-3 border-2 border-solid border-gray-500 mb-6 mx-auto">
  <div class="col-span-1 h-75px bg-amber-100 border-r border-b border-dashed border-gray-400"></div>
  <div class="col-span-1 h-75px bg-amber-100 border-r border-b border-dashed border-gray-400"></div>
  <div class="col-span-1 h-75px border-b border-dashed border-gray-400"></div>
  <div class="col-span-1 h-75px border-r bg-amber-100 border-dashed border-gray-400"></div>
  <div class="col-span-1 h-75px border-r bg-amber-100 border-dashed border-gray-400"></div>
  <div class="col-span-1 h-75px"></div>
</div>

{{< grid class="bg-purple" >}}
{{< grid-header headline="Membuat Grid Container">}}
_Grid Container_ dibuat dengan cara menambahkan properti CSS `display:grid` atau `display: inline-grid` pada elemen.

Semua elemen anak pertama dari grid container ini akan menjadi item grid (grid items).
{{< /grid-header >}}
{{< grid-line >}}
{{< grid-main>}}
### Display Grid

`display: grid` digunakan untuk menentukan elemen sebagai _container_ level-block.

Grid item ditempatkan pada baris (_rows_) secara _default_ dan menjangkau lebar penuh dari _grid container_.
```css
.container {
  display: grid;
}
```
{{< /grid-main >}}
{{< grid-preview >}}
<div class="grid border-4 border-solid border-white rounded-sm mb-6">
  <div class="h-75px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">item grid 1</div>
  <div class="h-75px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">item grid 2</div>
  <div class="h-75px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">item grid 3</div>
</div>
{{< /grid-preview >}}
{{< grid-line >}}
{{< grid-main>}}
### Display Inline Grid

`display: inline-grid` digunakan untuk menentukan elemen sebagai _container_ level-inline.
```css
.container {
  display: grid;
}
```
{{< /grid-main >}}
{{< grid-preview >}}
<div class="h-300px inline-block border-4 border-solid border-white rounded-sm mb-6">
  <div class="inline-grid">
    <div class="h-75px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white px-4">item grid 1</div>
    <div class="h-75px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white px-4">item grid 2</div>
    <div class="h-75px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white px-4">item grid 3</div>
  </div>
</div>
{{< /grid-preview >}}
{{< /grid >}}

{{< grid class="bg-orange" >}}
{{< grid-header headline="Explicit Grid">}}
Secara eksplisit mengatur grid dengan membuat kolom ("columns") dan baris ("rows") dengan properti `grid-template-columns` dan `grid-template-rows`.

### grid-template-columns
Menentukan kolom ("column") grid dengan cara menambahkan beberapa nilai yang dipisahkan oleh spasi. 

Nilai tersebut menunjukkan ukuran _grid track_, dan spasi diantara nilai-nilai itu menunjukkan _grid line_.

Nilai atau value:
- `<track-size>` - bisa berupa _length_ (dengan unit px, em, rem, dll), persen, atau sebagian kecil dari ruang kosong di grid (menggunakan unit `fr`).
- `<line-name>` - bisa kamu beri nama sesukamu.

```css
.container {
  grid-template-columns: <track-size> ... | <line-name> <track-size> ...;
}
```


### grid-template-rows
Menentukan baris ("row") grid dengan cara menambahkan beberapa nilai yang dipisahkan oleh spasi. 

Nilai tersebut menunjukkan ukuran _grid track_, dan spasi diantara nilai-nilai itu menunjukkan _grid line_.

Nilai atau value:
- `<track-size>` - bisa berupa _length_ (dengan unit px, em, rem, dll), persen, atau sebagian kecil dari ruang kosong di grid (menggunakan unit `fr`).
- `<line-name>` - bisa kamu beri nama sesukamu.

```css
.container {
  grid-template-rows: <track-size> ... | <line-name> <track-size> ...;
}
```
Contoh:

Saat kamu meninggalkan ruang kosong di antara nilai _track_, garis grid secara otomatis diberi angka positif dan negatif:
```css
.container {
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;
}
```
![template-columns-rows](/images/css/grid/template-columns-rows-01.svg)

Tetapi kamu juga bisa memilih untuk memberi nama garis secara eksplisit menggunakan syntax bracket seperti berikut:
```css
.container {
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
}
```
![template-columns-rows](/images/css/grid/template-column-rows-02.svg)

Garis grid juga bisa memiliki lebih dari satu nama.

Contoh, pada garis kedua berikut memiliki dua nama: `row1-end` dan `row2-start`:
```css
.container {
  grid-template-rows: [row1-start] 25% [row1-end row2-start] 25% [row2-end];
}
```
Jika definisi kamu berisi bagian berulang, kamu dapat menggunakan notasi `repeat()` untuk merampingkan kode:
```css
.container {
  grid-template-columns: repeat(3, 20px [col-start]);
}
```
Yang sama dengan kode berikut:
```css
.container {
  grid-template-columns: 20px [col-start] 20px [col-start] 20px [col-start];
}
```
Jika beberapa baris memiliki nama yang sama, mereka dapat direferensikan dengan nama dan jumlah baris mereka.
```css
.item {
  grid-column-start: col-start 2;
}
```
Unit `fr` memungkinkan kamu untuk mengatur ukuran track sebagai sebagian kecil dari ruang kosong grid container. 

Misalnya, untuk mengatur setiap item menjadi sepertiga lebar grid container, ini kodenya:
```css
.container {
  grid-template-columns: 1fr 1fr 1fr;
}
```
Ruang kosong dihitung setelah item yang tidak fleksibel.

Pada contoh berikut, jumlah total ruang kosong yang tersedia untuk unit fr tidak termasuk `50px`.
```css
.container {
  grid-template-columns: 1fr 50px 1fr 1fr;
}
```
{{< /grid-header >}}
{{< grid-line >}}
{{< grid-main>}}
### grid-template-rows: 50px 100px

Track baris dibuat untuk setiap nilai yang ditentukan dengan `grid-template-rows`. Nilai ukuran track dapat berupa nilai panjang selain negatif (px, %, em, dll).

Item grid 1 dan 2 memiliki ketinggian tetap 50px dan 100px.

Karena hanya 2 track baris yang ditentukan, ketinggian item 3 dan 4 ditentukan oleh konten masing-masing.
{{< /grid-main >}}
{{< grid-preview >}}
<div class="h-300px border-4 border-solid border-gray-200 rounded-sm mb-6">
  <div class="grid gtr-50px-100px">
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">item grid 1 (50px)</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">item grid 2 (100px)</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">item grid 3 (auto)</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">item grid 3 (auto)</div>
  </div>
</div>
{{< /grid-preview >}}
{{< grid-line >}}
{{< grid-main>}}
### grid-template-columns: 90px 50px 120px

Seperti baris, track kolom dibuat untuk setiap nilai yang ditentukan dengan `grid-template-columns`.

Item grid 4, 5 dan 6 ditempatkan pada track baris baru karena hanya 3 ukuran _track column_ yang ditentukan.

Dan karena mereka ditempatkan di track column 1, 2 dan 3, ukuran kolom mereka sama dengan item 1, 2 dan 3.

Item grid 1, 2 dan 3 memiliki lebar tetap masing-masing 90px, 50px, dan 120px.
{{< /grid-main >}}
{{< grid-preview >}}
<div class="h-300px border-4 border-solid border-gray-200 rounded-sm mb-6">
  <div class="grid gtc-90px-50px-120px">
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">1</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">2</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">3</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">4</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">5</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">6</div>
  </div>
</div>
{{< /grid-preview >}}
{{< grid-main>}}
### grid-template-columns: 1fr 1fr 2fr

Unit `fr` bisa digunakan untuk membuat _track grid_ yang fleksibel. Unit ini mewakili sebagian kecil dari ruang yang tersedia dalam grid container (seperti pada flexbox).

Pada contoh ini, item 1 dan 2 mengambil dua (empat) bagian pertama, sedangkan item 3 mengambil dua yang terakhir.
{{< /grid-main >}}
{{< grid-preview >}}
<div class="h-300px border-4 border-solid border-gray-200 rounded-sm mb-6">
  <div class="grid gtc-1fr-1fr-2fr">
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">1</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">2</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">3</div>
  </div>
</div>
{{< /grid-preview >}}
{{< grid-main>}}
### grid-template-columns: 3rem 25% 1fr 2fr

`fr` dihitung berdasarkan ruang yang tersisa bila dikombinasikan dengan nilai panjang lainnya.

Dalam contoh ini, `3rem` dan `25%` akan dikurangi dari ruang yang tersedia sebelum ukuran `fr` dihitung:
`1fr = ((lebar kisi) - (3rem) - (25% dari lebar kisi)) / 3`
{{< /grid-main >}}
{{< grid-preview >}}
<div class="h-300px border-4 border-solid border-gray-200 rounded-sm mb-6">
  <div class="grid gtc-3rem-25pr-1fr-2fr">
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">1</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">2</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">3</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">4</div>
  </div>
</div>
{{< /grid-preview >}}
{{< /grid >}}

{{< grid class="bg-purple" >}}
{{< grid-header headline="Ukuran Minimum dan Maksimum Grid Track">}}
Ukuran minimum dan maksimum _grid track_ dapat didefinisikan dengan fungsi `minmax()`.
{{< /grid-header >}}
{{< grid-line >}}
{{< grid-main>}}
### grid-template-rows: minmax(100px, auto);
### grid-template-columns: minmax(auto, 50%) 1fr 3em;

Fungsi `minmax()` menerima 2 argumen: yang pertama adalah ukuran minimun track dan yang kedua adalah ukuran maksimum track.

Selain nilai panjang (px, em,rem, dll), juga bisa diberi nilai otomatis (`auto`) yang memungkinkan track meregang/melebar berdasarkan ukuran konten.

Dalam contoh ini, track baris pertama diatur untuk memiliki ketinggian minimum 100px, tetapi ukuran maksimum otomatisnya akan memungkinkan track baris meregang jika kontennya lebih tinggi dari 100px.

Track kolom pertama memiliki ukuran minimum otomatis, tetapi ukuran maksimum 50% akan mencegahnya tidak lebih lebar dari 50% dari lebar grid container.
{{< /grid-main >}}
{{< grid-preview >}}
<div class="border-4 border-solid border-gray-200 rounded-sm mb-6">
  <div class="grid gtr-minmax-100px-auto">
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">1</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">2</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">3</div>
    <div class="bg-teal-100 text-white text-xs leading-tight font-medium flex items-center justify-center border border-solid border-white py-2 px-3">4. This item has more content than the others and is intentionally, unnecessarily, superfluously, uselessly, and annoyingly verbose for the sake of example. This item has more content than the others and is intentionally, unnecessarily, superfluously, uselessly, and annoyingly verbose for the sake of example. This item has more content than the others and is intentionally, unnecessarily, superfluously, uselessly, and annoyingly verbose for the sake of example.</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">5</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">6</div>
  </div>
</div>
{{< /grid-preview >}}
{{< /grid >}}

{{< grid class="bg-orange" >}}
{{< grid-header headline="Grid Track Berulang">}}
Untuk menentukan grid track yang memiliki ukuran sama secara berulang-ulang, kamu bisa menggunakan notasi `repeat()`.
{{< /grid-header >}}
{{< grid-line >}}
{{< grid-main>}}
### grid-template-rows: repeat(4, 100px);
### grid-template-columns: repeat(3, 1fr);

Notasi `repeat()` menerima 2 argumen: yang pertama menunjukkan berapa kali track harus diulang, dan yang kedua menunjukkan definisi track (bisa diberi nilai panjang).
{{< /grid-main >}}
{{< grid-preview >}}
<div class="border-4 border-solid border-gray-200 rounded-sm mb-6">
  <div class="grid gtr-repeat-4-100px">
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">1</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">2</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">3</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">4</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">5</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">6</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">7</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">8</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">9</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">10</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">11</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">12</div>
  </div>
</div>
{{< /grid-preview >}}
{{< grid-line >}}
{{< grid-main>}}
### grid-template-columns: 30px repeat(3, 1fr) 30px

`repeat()` juga dapat digunakan dalam daftar track.

Dalam contoh ini, track kolom pertama dan terakhir memiliki lebar 30px, dan 3 kolom track di antaranya, dibuat oleh `repeat()` yang masing-masing memiliki lebar 1fr.
{{< /grid-main >}}
{{< grid-preview >}}
<div class="h-300px border-4 border-solid border-gray-200 rounded-sm mb-6">
  <div class="grid gtc-30px-repeat-3-1fr-30px">
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">1</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">2</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">3</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">4</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">5</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">6</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">7</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">8</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">9</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-1">10</div>
  </div>
</div>
{{< /grid-preview >}}
{{< /grid >}}

{{< grid class="bg-purple" >}}
{{< grid-header headline="Grid Gaps (Gutter)">}}
Properti `grid-gap` merupakan kependekan dari `grid-row-gap` dan `grid-column-gap`.

Properti ini digunakan untuk membuat jarak antar kolom dan baris.

Values:

`<grid-row-gap> <grid-column-gap>` - nilai panjang

```css
.container {
  grid-gap: <grid-row-gap> <grid-column-gap>;
}
```

Contoh:
```css
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  grid-gap: 15px 10px;
}
```

Jika `grid-row-gap` tidak ditentukan, maka akan digunakan nilai yang sama dengan `grid-column-grid`.

Catatan: awalan `grid-` akan dihapus dan `grid-gap` diubah namanya menjadi `gap`. Properti tanpa awan `grid-` sudah didukung di Chrome 68+, Safari 11.2 rilis 50+ dan Opera 54+.

<h3 id="grid-column-gap" class="mb-0">grid-column-gap</h3>
<h3 class="pl-12 mb-0">&</h3>

### grid-row-gap

Menentukan ukuran garis grid. Caranya seperti mengatur lebar _gutter_ (celah) di antara kolom atau baris.

Values:

`<line-size>` - nilai panjang (px, em, rem, dll)

```css
.container {
  grid-column-gap: <line-size>;
  grid-row-gap: <line-size>;
}
```

Contoh:
```css
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  grid-column-gap: 10px;
  grid-row-gap: 15px;
}
```

![grid-gap](/images/css/grid/dddgrid-gap.svg)

Gutter (celah) hanya dibuat di antara kolom atau baris, bukan di tepi luar grid.

{{< /grid-header >}}
{{< grid-line >}}
{{< grid-main>}}
### grid-row-gap: 24px;
### grid-column-gap: 5rem;

Nilai ukuran _gap_ bisa berupa angka panjang (px, %, em, dll) selain negatif.
```css
.container {
  grid-template-columns: repeat(2,minmax(0,1fr));
  grid-row-gap: 24px;
  grid-column-gap: 5rem;
}
```
{{< /grid-main >}}
{{< grid-preview >}}
<div class="h-300px bg-white border-4 border-solid border-gray-200 rounded-sm mb-6">
  <div class="grid grid-cols-2 row-gap-6 col-gap-20">
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-4">1</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-4">2</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-4">3</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-4">4</div>
  </div>
</div>
{{< /grid-preview >}}
{{< grid-line >}}
{{< grid-main>}}
### grid-gap: 100px 1em

`grid-gap` merupakan kependekan dari `grid-row-gap` dan `grid-column-gap`.

Jika 2 nilai didefinisikan, yang pertama menunjukkan `grid-row-gap` dan yang kedua `grid-column-gap`.
```css
.container {
  grid-template-columns: repeat(2,minmax(0,1fr));
  grid-gap: 100px 1em
}
```
{{< /grid-main >}}
{{< grid-preview >}}
<div class="h-300px bg-white border-4 border-solid border-gray-200 rounded-sm mb-6">
  <div class="grid grid-cols-2 gap-100px-em">
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-4">1</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-4">2</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-4">3</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-4">4</div>
  </div>
</div>
{{< /grid-preview >}}
{{< grid-line >}}
{{< grid-main>}}
### grid-gap: 2rem

Jika hanya satu nilai yang ditentukan, maka celah (gap) baris dan kolom akan sama.
```css
.container {
  grid-template-columns: repeat(2,minmax(0,1fr));
  grid-gap: 2rem;
}
```
{{< /grid-main >}}
{{< grid-preview >}}
<div class="h-300px bg-white border-4 border-solid border-gray-200 rounded-sm mb-6">
  <div class="grid grid-cols-2 gap-8">
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-4">1</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-4">2</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-4">3</div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white py-4">4</div>
  </div>
</div>
{{< /grid-preview >}}
{{< /grid >}}

{{< grid class="bg-orange" >}}
{{< grid-header headline="Mengatur Posisi Item berdasarkan Angka Grid Line">}}

_Grid Line_ atau garis grid merupakan garis yang mewakili awal, akhir, atau antara _track_ kolom dan baris.

Setiap garis, mulai dari awal lintasan ke arah grid, diberi nomor secara bertahap mulai dari 1.

<h3 id="grid-column-start" class="mb-0"><a href="/cssref/grid-column-start">grid-column-start</a></h3>
<h3 id="grid-column-end" class="mb-0"><a href="/cssref/grid-column-end">grid-column-end</a></h3>
<h3 id="grid-row-start" class="mb-0"><a href="/cssref/grid-row-start">grid-row-start</a></h3>
<h3 id="grid-row-end"><a href="/cssref/grid-row-end">grid-row-end</a></h3>

Properti ini digunakan untuk menentukan lokasi item grid di dalam grid container dengan merujuk ke garis grid tertentu.

`grid-column-start/grid-row-start` merupakan garis tempat item dimulai.

Sedangkan `grid-column-end/grid-row-end` merupakan garis di mana item berakhir.

Nilai:

- `<line>` - bisa berupa angka untuk merujuk ke garis grid bernomor, atau nama untuk merujuk ke garis grid bernama
- `span <number>` - item akan membentang melintasi jumlah track grid yang disediakan
- `span <name>` - item akan membentang sampai menyentuh baris berikutnya dengan nama yang disediakan
- `auto` - menunjukkan penempatan otomatis, rentang otomatis, atau rentang default

```css
.item {
  grid-column-start: <number> | <name> | span <number> | span <name> | auto;
  grid-column-end: <number> | <name> | span <number> | span <name> | auto;
  grid-row-start: <number> | <name> | span <number> | span <name> | auto;
  grid-row-end: <number> | <name> | span <number> | span <name> | auto;
}
```

Contoh:
```css
.item-a {
  grid-column-start: 2;
  grid-column-end: five;
  grid-row-start: row1-start;
  grid-row-end: 3;
}
```
![grid-column-row-start-end-01](/images/css/grid/grid-column-row-start-end-01.svg)

```css
.item-b {
  grid-column-start: 1;
  grid-column-end: span col4-start;
  grid-row-start: 2;
  grid-row-end: span 2;
}
```
![grid-column-row-start-end-02](/images/css/grid/grid-column-row-start-end-02.svg)

Jika tidak ada `grid-column-end / grid-row-end` yang dideklarasikan, item akan membentang 1 track secara default.

Item grid bisa saling tumpang tindih. Sehingga kamu dapat menggunakan `z-index` untuk mengontrol urutan susunannya.
{{< /grid-header >}}
{{< grid-line >}}
{{< grid-main>}}
<h3 class="mb-0">grid-row-start: 2;</h3>
<h3 class="mb-0">grid-row-end: 3;</h3>
<h3 class="mb-0">grid-column-start: 2;</h3>
<h3 class="mb-6">grid-column-end: 3;</h3>

Item grid 1 (warna pink) dimulai dari garis _row_ 2 dan diakhiri pada garis _row_ 3, dan dimulai dari garis _column_ 2 dan diakhiri pada garis _column_ 3.

Jika item hanya mencakup satu baris atau kolom, `grid-row`/column-end` tidak diperlukan.
```css
.container {
  grid-template-columns: repeat(2,minmax(0,1fr));
}
.item-1 {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
}
```
{{< /grid-main >}}
{{< grid-preview >}}
<div class="h-300px bg-white border-4 border-solid border-gray-200 rounded-sm mb-6">
  <div class="h-full grid grid-cols-2">
    <div class="relative col-start-2 col-end-3 row-start-2 row-end-3 bg-red-100 text-white text-center font-medium flex items-center justify-between border-t border-b border-solid border-blue-200">
      <span class="w-px h-full bg-green-300"></span>
      <span>1</span>
      <span class="w-2px h-full bg-green-300"></span>
      <span class="absolute inline-block w-6 h-4 right-0 top-50pr bg-green-300 text-white text-xs text-center leading-none flex items-center justify-center">3</span>
    </div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-between border-t-2 border-b border-solid border-blue-200">
      <span class="w-2px h-full bg-green-300"></span>
      <span>2</span>
      <span class="w-px h-full bg-green-300"></span>
    </div>
    <div class="relative bg-teal-100 text-white text-center font-medium flex items-center justify-between border-t-2 border-b border-solid border-blue-200">
      <span class="w-px h-full bg-green-300"></span>
      <span>3</span>
      <span class="w-2px h-full bg-green-300"></span>
      <span class="absolute inline-block w-6 h-4 top-0 left-50pr bg-blue-200 text-white text-xs text-center leading-none flex items-center justify-center">1</span>
      <span class="absolute inline-block w-6 h-4 -bottom-2 left-50pr bg-blue-200 text-white text-xs text-center leading-none flex items-center justify-center">2</span>
    </div>
    <div class="relative bg-teal-100 text-white text-center font-medium flex items-center justify-between border-t border-b border-solid border-blue-200">
      <span class="w-2px h-full bg-green-300"></span>
      <span>4</span>
      <span class="w-px h-full bg-green-300"></span>
      <span class="absolute inline-block w-6 h-4 left-0 top-50pr bg-green-300 text-white text-xs text-center leading-none flex items-center justify-center">1</span>
      <span class="absolute inline-block w-6 h-4 -right-3 top-50pr bg-green-300 text-white text-xs text-center leading-none flex items-center justify-center">2</span>
    </div>
    <div class="bg-teal-100 text-white text-center font-medium flex items-center justify-between border-t border-b-2 border-solid border-blue-200">
      <span class="w-2px h-full bg-green-300"></span>
      <span>5</span>
      <span class="w-px h-full bg-green-300"></span>
    </div>
    <div class="relative bg-teal-100 text-white text-center font-medium flex items-center justify-between border-t border-b-2 border-solid border-blue-200">
      <span class="w-px h-full bg-green-300"></span>
      <span>6</span>
      <span class="w-2px h-full bg-green-300"></span>
      <span class="absolute inline-block w-6 h-4 -top-2 left-50pr bg-blue-200 text-white text-xs text-center leading-none flex items-center justify-center">3</span>
      <span class="absolute inline-block w-6 h-4 bottom-0 left-50pr bg-blue-200 text-white text-xs text-center leading-none flex items-center justify-center">4</span>
    </div>
  </div>
</div>
{{< /grid-preview >}}
{{< grid-line >}}
{{< grid-main>}}
<h3 class="mb-0">grid-row: 2;</h3>
<h3 class="mb-6">grid-column: 3 / 4;</h3>

`grid-row` merupakan singkatan untuk `grid-row-start` dan `grid-row-end`.

Dan `grid-column` merupakan singkatan untuk `grid-column-start` dan `grid-column-end`.

Jika satu nilai didefinisikan, maka akan menunjukkan `grid-row/column-start`.

Jika dua nilai didefinisikan, nilai pertama menentukan `grid-row/column-start` dan yang kedua menentukan `grid-row/column-end`, dan harus dipisah oleh tanda garis miring (/).
```css
.container {
  grid-template-columns: repeat(3,minmax(0,1fr));
}
.item-1 {
  grid-row: 2;
  grid-column: 3 / 4;
}
```
{{< /grid-main >}}
{{< grid-preview >}}
<div class="h-300px bg-white border-4 border-solid border-gray-200 rounded-sm mb-6">
  <div class="grid grid-cols-3">
    <div class="h-100px row-start-2 col-start-3 bg-red-100 text-white text-center font-medium flex items-center justify-between border-t border-b border-solid border-blue-200">
      <span class="w-px h-full bg-green-300"></span>
      <span>1</span>
      <span class="w-2px h-full bg-green-300"></span>
    </div>
    <div class="relative h-100px bg-teal-100 text-white text-center font-medium flex items-center justify-between border-t-2 border-b border-solid border-blue-200">
      <span class="w-2px h-full bg-green-300"></span>
      <span>2</span>
      <span class="w-px h-full bg-green-300"></span>
      <span class="absolute inline-block w-6 h-4 left-0 -bottom-2 bg-green-300 text-white text-xs text-center leading-none flex items-center justify-center">1</span>
      <span class="absolute inline-block w-6 h-4 -right-3 -bottom-2 bg-green-300 text-white text-xs text-center leading-none flex items-center justify-center z-20">2</span>
    </div>
    <div class="h-100px relative bg-teal-100 text-white text-center font-medium flex items-center justify-between border-t-2 border-b border-solid border-blue-200">
      <span class="w-px h-full bg-green-300"></span>
      <span>3</span>
      <span class="w-px h-full bg-green-300"></span>
      <span class="absolute inline-block w-6 h-4 top-0 left-50pr bg-blue-200 text-white text-xs text-center leading-none flex items-center justify-center">1</span>
      <span class="absolute inline-block w-6 h-4 -bottom-2 left-50pr bg-blue-200 text-white text-xs text-center leading-none flex items-center justify-center">2</span>
    </div>
    <div class="h-100px relative bg-teal-100 text-white text-center font-medium flex items-center justify-between border-t border-b border-solid border-blue-200">
      <span class="w-px h-full bg-green-300"></span>
      <span>4</span>
      <span class="w-2px h-full bg-green-300"></span>
      <span class="absolute inline-block w-6 h-4 -left-3 -bottom-2 bg-green-300 text-white text-xs text-center leading-none flex items-center justify-center z-40">3</span>
      <span class="absolute inline-block w-6 h-4 right-0 -bottom-2 bg-green-300 text-white text-xs text-center leading-none flex items-center justify-center z-20">4</span>
    </div>
    <div class="h-100px bg-teal-100 text-white text-center font-medium flex items-center justify-between border-t border-b-2 border-solid border-blue-200">
      <span class="w-2px h-full bg-green-300"></span>
      <span>5</span>
      <span class="w-px h-full bg-green-300"></span>
    </div>
    <div class="h-100px relative bg-teal-100 text-white text-center font-medium flex items-center justify-between border-t border-b-2 border-solid border-blue-200">
      <span class="w-px h-full bg-green-300"></span>
      <span>6</span>
      <span class="w-px h-full bg-green-300"></span>
      <span class="absolute inline-block w-6 h-4 -top-2 left-50pr bg-blue-200 text-white text-xs text-center leading-none flex items-center justify-center">3</span>
      <span class="absolute inline-block w-6 h-4 bottom-0 left-50pr bg-blue-200 text-white text-xs text-center leading-none flex items-center justify-center">4</span>
    </div>
  </div>
</div>
{{< /grid-preview >}}
{{< grid-line >}}
{{< grid-main>}}
### grid-area: 2 / 2 / 3 / 3

`grid-area` merupakan kependekan untuk `grid-row-start`, `grid-column-start`, `grid-row-end` dan `grid-column-end`.

Jika 4 nilai didefinisikan, yang pertama menunjukkan `grid-row-start`, yang kedua `grid-column-start`, yang ketiga `grid-row-end` dan yang keempat `grid-column-end`.
```css
.container {
  grid-template-columns: repeat(3,minmax(0,1fr));
}
.item-1 {
  grid-area: 2 / 2 / 3 / 3
}
```
{{< /grid-main >}}
{{< grid-preview >}}
<div class="h-300px bg-white border-4 border-solid border-gray-200 rounded-sm mb-6">
  <div class="grid grid-cols-3">
    <div class="relative h-100px row-start-2 col-start-2 bg-red-100 text-white text-center font-medium flex items-center justify-between border-t border-b border-solid border-blue-200">
      <span class="w-px h-full bg-green-300"></span>
      <span>1</span>
      <span class="w-px h-full bg-green-300"></span>
      <span class="absolute inline-block w-6 h-4 bottom-0 left-50pr bg-blue-200 text-white text-xs text-center leading-none flex items-center justify-center">3</span>
    </div>
    <div class="relative h-100px bg-teal-100 text-white text-center font-medium flex items-center justify-between border-t-2 border-b border-solid border-blue-200">
      <span class="w-2px h-full bg-green-300"></span>
      <span>2</span>
      <span class="w-px h-full bg-green-300"></span>
      <span class="absolute inline-block w-6 h-4 left-0 -bottom-2 bg-green-300 text-white text-xs text-center leading-none flex items-center justify-center">1</span>
      <span class="absolute inline-block w-6 h-4 -right-3 -bottom-2 bg-green-300 text-white text-xs text-center leading-none flex items-center justify-center z-20">2</span>
    </div>
    <div class="h-100px relative bg-teal-100 text-white text-center font-medium flex items-center justify-between border-t-2 border-b border-solid border-blue-200">
      <span class="w-px h-full bg-green-300"></span>
      <span>3</span>
      <span class="w-px h-full bg-green-300"></span>
      <span class="absolute inline-block w-6 h-4 top-0 left-50pr bg-blue-200 text-white text-xs text-center leading-none flex items-center justify-center">1</span>
      <span class="absolute inline-block w-6 h-4 -bottom-2 left-50pr bg-blue-200 text-white text-xs text-center leading-none flex items-center justify-center">2</span>
    </div>
    <div class="h-100px relative bg-teal-100 text-white text-center font-medium flex items-center justify-between border-t border-b border-solid border-blue-200">
      <span class="w-px h-full bg-green-300"></span>
      <span>4</span>
      <span class="w-2px h-full bg-green-300"></span>
      <span class="absolute inline-block w-6 h-4 -left-3 -bottom-2 bg-green-300 text-white text-xs text-center leading-none flex items-center justify-center z-40">3</span>
      <span class="absolute inline-block w-6 h-4 right-0 -bottom-2 bg-green-300 text-white text-xs text-center leading-none flex items-center justify-center z-20">4</span>
    </div>
    <div class="h-100px bg-teal-100 text-white text-center font-medium flex items-center justify-between border-t border-b-2 border-solid border-blue-200">
      <span class="w-2px h-full bg-green-300"></span>
      <span>5</span>
      <span class="w-px h-full bg-green-300"></span>
    </div>
    <div class="h-100px relative bg-teal-100 text-white text-center font-medium flex items-center justify-between border-t border-b-2 border-solid border-blue-200">
      <span class="w-px h-full bg-green-300"></span>
      <span>6</span>
      <span class="w-2px h-full bg-green-300"></span>
    </div>
  </div>
</div>
{{< /grid-preview >}}
{{< /grid >}}

{{< grid class="bg-purple" >}}
{{< grid-header headline="Merentangkan Item Di Antara Baris dan Kolom">}}

Item grid hanya menjangkau satu _track_ kolom dan baris secara default.

Tetapi kamu bisa mengaturnya agar dapat menjangkau beberapa _track_ baris dan kolom menggunakan properti yang sama untuk memposisikannya.
{{< /grid-header >}}
{{< grid-line >}}
{{< grid-main>}}
<h3 class="mb-0">grid-column-start: 1;</h3>

### grid-column-end: 4;

Mengatur item grid agar merentang lebih dari satu track kolom dengan menentukan `grid-column-end` ke angka garis kolom yang lebih dari satu kolom dimulai dari `grid-column-start`.
```css
.container {
  grid-template-columns: repeat(3,minmax(0,1fr));
}
.item-1 {
  grid-column-start: 1;
  grid-column-end: 4;
}
```
{{< /grid-main >}}
{{< grid-preview >}}
<div class="h-300px bg-white border-4 border-solid border-gray-200 rounded-sm mb-6">
  <div class="grid grid-cols-3">
    <div class="h-100px col-span-3 bg-red-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">1</div>
    <div class="h-100px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">2</div>
    <div class="h-100px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">3</div>
    <div class="h-100px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">4</div>
  </div>
</div>
{{< /grid-preview >}}
{{< grid-line >}}
{{< grid-main>}}
<h3 class="mb-0">grid-row-start: 1;</h3>
<h3 class="mb-6">grid-row-end: 4;</h3>

Grid item juga bisa membentang melintasi beberapa track baris dengan menentukan nilai `grid-row-end` lebih dari satu track.

```css
.container {
  grid-template-columns: repeat(3,minmax(0,1fr));
}
.item-1 {
  grid-row-start: 1;
  grid-row-end: 4;
}
```
{{< /grid-main >}}
{{< grid-preview >}}
<div class="h-300px bg-white border-4 border-solid border-gray-200 rounded-sm mb-6">
  <div class="grid grid-cols-3">
    <div class="row-start-1 row-end-4 bg-red-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">1</div>
    <div class="h-50px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">2</div>
    <div class="h-50px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">3</div>
    <div class="h-50px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">4</div>
    <div class="h-50px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">5</div>
    <div class="h-50px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">6</div>
    <div class="h-50px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">7</div>
  </div>
</div>
{{< /grid-preview >}}
{{< grid-line >}}
{{< grid-main>}}
<h3 class="mb-0">grid-row: 2 / 5 ;</h3>
<h3 class="mb-6">grid-column: 2 / 4 ;</h3>

Kependekan dari properti `grid-row` dan `grid-column` juga dapat digunakan untuk memposisikan dan merentangkan grid item lebih dari satu kolom/baris track.
```css
.container {
  grid-template-columns: repeat(3,minmax(0,1fr));
}
.item-1 {
  grid-row: 2 / 5 ;
  grid-column: 2 / 4 ;
}
```
{{< /grid-main >}}
{{< grid-preview >}}
<div class="h-300px bg-white border-4 border-solid border-gray-200 rounded-sm mb-6">
  <div class="grid grid-cols-3">
    <div class="row-start-2 row-end-5 col-start-2 col-end-4 bg-red-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">1</div>
    <div class="h-50px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">2</div>
    <div class="h-50px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">3</div>
    <div class="h-50px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">4</div>
    <div class="h-50px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">5</div>
    <div class="h-50px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">6</div>
    <div class="h-50px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">7</div>
  </div>
</div>
{{< /grid-preview >}}
{{< grid-line >}}
{{< grid-main>}}
<h3 class="mb-0">grid-row: 2 / span 3;</h3>
<h3 class="mb-6">grid-column: span 2;</h3>

Kamu juga bisa menggunakan keyword `span` diikuti jumlah kolom atau baris grid _track_.
```css
.container {
  grid-template-columns: repeat(3,minmax(0,1fr));
}
.item-1 {
  grid-row: 2 / span 3 ;
  grid-column: span 2 ;
}
```
{{< /grid-main >}}
{{< grid-preview >}}
<div class="h-300px bg-white border-4 border-solid border-gray-200 rounded-sm mb-6">
  <div class="grid grid-cols-3">
    <div class="row-start-2 row-end-5 col-start-1 col-end-3 bg-red-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">1</div>
    <div class="h-50px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">2</div>
    <div class="h-50px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">3</div>
    <div class="h-50px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">4</div>
    <div class="h-50px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">5</div>
    <div class="h-50px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">6</div>
    <div class="h-50px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">7</div>
  </div>
</div>
{{< /grid-preview >}}
{{< /grid >}}

{{< grid class="bg-orange" >}}
{{< grid-header headline="Memberi Nama Garis Grid">}}

Garis grid atau grid line bisa diberi nama saat mendefinisikan grid dengan properti `grid-template-rows` dan `grid-template-columns`.

Nama baris ini kemudian dapat dirujuk ke posisi item grid.
{{< /grid-header >}}
{{< grid-line >}}
{{< grid-main>}}
<h3 class="mb-0">grid-column-start: 1;</h3>

### grid-column-end: 4;

Mengatur item grid agar merentang lebih dari satu track kolom dengan menentukan `grid-column-end` ke angka garis kolom yang lebih dari satu kolom dimulai dari `grid-column-start`.
```css
.container {
  grid-template-columns: repeat(3,minmax(0,1fr));
}
.item-1 {
  grid-column-start: 1;
  grid-column-end: 4;
}
```
{{< /grid-main >}}
{{< grid-preview >}}
<div class="h-300px bg-white border-4 border-solid border-gray-200 rounded-sm mb-6">
  <div class="grid grid-cols-3">
    <div class="h-100px col-span-3 bg-red-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">1</div>
    <div class="h-100px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">2</div>
    <div class="h-100px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">3</div>
    <div class="h-100px bg-teal-100 text-white text-center font-medium flex items-center justify-center border border-solid border-white">4</div>
  </div>
</div>
{{< /grid-preview >}}
{{< grid-line >}}
{{< /grid >}}