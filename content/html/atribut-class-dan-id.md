---
title: Mengenal Atribut Class dan ID
description: Mengenal Atribut Class dan ID
date: "2019-11-18T10:34:07+07:00"
slug: atribut-class-dan-id
weight: 190
authors:
- akhlis
thumbnail: /uploads/blog-10-2-465x290.jpg
design:
  type: docs
  section: html
---

Proses pembuatan website biasanya dimulai dengan merancang prototipe desain web menggunakan software grafis seperti Adobe Photoshop, Sketch, atau Figma.

Setelah rancangan desain web selesai dibuat, selanjutnya baru menerapkan prototipe desain tersebut pada dokumen HTML.

Agar dokumen HTML bisa memiliki tampilan yang sama persis dengan prototipe desain, maka harus diberi _style_ CSS pada masing-masing elemen HTML penyusunnya.

Sayangnya, sangat sulit menyeleksi elemen mana yang akan diberi style yang sama atau diberi style yang berbeda.

Misalnya ada 3 elemen `<div>` yang masing-masing ingin diberi warna background merah, hijau, dan biru.

Bagaimana cara menyeleksinya?

{{< toc >}}

Untuk mengatasi masalah ini, maka selector class bisa digunakan sebagai solusinya.

Kamu bisa menambahkan atribut `class` dengan nama yang berbeda pada ketiga elemen `<div>` tersebut.

```html
<div class="box__container">
  <div class="box box--red">merah</div>
  <div class="box box--green">hijau</div>
  <div class="box box--blue">biru</div>
</div>
```

```css
.box__container {
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  grid-gap: 1.5rem;
  gap: 1.5rem;
  text-align: center;
}

.box {
  grid-column: span 1/span 1;
  padding: 1rem 0.75rem;
}

.box--red {
  background-color: #ffcdd2;
}

.box--green {
  background-color: #c8e6c9;
}

.box--blue {
  background-color: #bbdefb;
}
```

{{< preview >}}
<div class="grid grid-cols-3 gap-6 text-center">
    <div class="col-span-1 bg-red-100 py-4 px-3">merah</div>
    <div class="col-span-1 bg-green-100 py-4 px-3">hijau</div>
    <div class="col-span-1 bg-blue-100 py-4 px-3">biru</div>
</div>
{{< /preview >}}

## Penggunaan Atribut Class

Atribut class bisa ditambahkan pada hampir semua tag HTML yang berfungsi sebagai _selector class_.

Atribut class ini digunakan untuk menentukan _style_ yang sama pada semua elemen dengan nama class yang sama.

Untuk membuat selector class, caranya dengan menambahkan atribut class pada elemen HTML. Kemudian diberi nama class yang unik dan mewakili tujuan class tersebut.

Misalnya saya ingin membuat elemen kotak dengan tag `<div>`, agar lebih mudah diingat maka saya akan memberi nama class `box` menjadi seperti ini `<div class="box">`.

Kemudian elemen dengan class "box" tersebut bisa dipanggil sebagai _selector class_ dengan cara menuliskan karakter titik (.), kemudian diikuti oleh nama _class_-nya.

Seperti ini cara memanggil selector class di stylesheet:
```css
.box {
  background-color: #ffe0b2;
  color: #4a5568;
  padding: 1.5em;
}
```

Contoh:
```html
<!DOCTYPE html>
<html>
<head>
<style>
.brand {
  background-color: #ffe0b2;
  color: #4a5568;
  margin: 20px;
  padding: 20px;
}
</style>
</head>
<body>

<div class="brand">
  <h2>Huawai</h2>
  <p>Huawai adalah brand smartphone asal China.</p>
</div>

<div class="brand">
  <h2>Samsung</h2>
  <p>Samsung adalah brand smartphone asal Korea Selatan.</p>
</div>

<div class="brand">
  <h2>iPhone</h2>
  <p>iPhone adalah brand smartphone asal Amerika Serikat.</p>
</div>

</body>
</html>
```

{{< preview >}}
<div class="bg-orange-100 pt-2 pb-2 px-4 mb-4">
  <h2>Huawai</h2>
  <p>Huawai adalah brand smartphone asal China.</p>
</div>

<div class="bg-orange-100 pt-3 pb-2 px-4 mb-4">
  <h2>Samsung</h2>
  <p>Samsung adalah brand smartphone asal Korea Selatan.</p>
</div>

<div class="bg-orange-100 pt-3 pb-2 px-4 mb-4">
  <h2>iPhone</h2>
  <p>iPhone adalah brand smartphone asal Amerika Serikat.</p>
</div>
{{< /preview >}}

### Menggunakan Atribut Class pada Elemen Inline

Atribut class juga bisa ditambahkan pada elemen inline.

Contoh:
```html
<!DOCTYPE html>
<html>
<head>
<style>
span.note {
  font-size: 120%;
  color: red;
}
</style>
</head>
<body>

<h1>Teks Judul Berwarna <span class="note">Merah</span> pada Tag span</h1>
<p>Ini teks paragraf berwarna <span class="note">merah</span> pada tag span.</p>

</body>
</html>
```

{{< preview >}}
<h1>Teks Judul Berwarna <span class="text-red-500">Merah</span> pada Tag span</h1>
<p>Ini teks paragraf berwarna <span class="text-red-500 text-lg">merah</span> pada tag span.</p>
{{< /preview >}}

{{< tips >}}
Tip: atribut class bisa digunakan pada berbagai elemen HTML

Catatan: nama class sangat sensitif.

Silahkan pelajari CSS secara detail di [tutorial CSS](/css/)
{{< /tips >}}

### Memilih Elemen dengan class Khusus

Dalam CSS, untuk menyeleksi elemen dengan class khusus, tuliskan karakter titik (.), kemudian diikuti oleh nama class.

Contoh:
```html
<style>
.brand {
  background-color: #ffe0b2;
  color: white;
  padding: 20px;
}
</style>

<h2 class="brand">Huawai</h2>
<p>Huawai adalah brand smartphone asal China.</p>

<h2 class="brand">Samsung</h2>
<p>Samsung adalah brand smartphone asal Korea Selatan.</p>

<h2 class="brand">iPhone</h2>
<p>iPhone adalah brand smartphone asal Amerika Serikat.</p>
```

{{< preview >}}
<div class="mb-4">
  <h2 class="text-white bg-orange-100 pt-2 pb-2 px-4">Huawai</h2>
  <p>Huawai adalah brand smartphone asal China.</p>
</div>

<div class="mb-4">
  <h2 class="text-white bg-orange-100 pt-2 pb-2 px-4">Samsung</h2>
  <p>Samsung adalah brand smartphone asal Korea Selatan.</p>
</div>

<div class="mb-4">
  <h2 class="text-white bg-orange-100 pt-2 pb-2 px-4 ">iPhone</h2>
  <p>iPhone adalah brand smartphone asal Amerika Serikat.</p>
</div>
{{< /preview >}}

### Menggunakan Multiple Class

Elemen HTML juga bisa ditambahkan dengan lebih dari satu nama class. Dan setiap class harus dipisahkan dengan spasi.

Contoh:
```html
<style>
.brand {
  background-color: #ffe0b2;
  color: white;
  padding: 20px;
}

.text-center {
  text-align: center;
}
</style>

<h2 class="brand text-center">Huawai</h2>
<p>Huawai adalah brand smartphone asal China.</p>

<h2 class="brand">Samsung</h2>
<p>Samsung adalah brand smartphone asal Korea Selatan.</p>

<h2 class="brand">iPhone</h2>
<p>iPhone adalah brand smartphone asal Amerika Serikat.</p>
```

{{< preview >}}
<div class="mb-4">
  <h2 class="text-white text-center bg-orange-100 pt-2 pb-2 px-4">Huawai</h2>
  <p>Huawai adalah brand smartphone asal China.</p>
</div>

<div class="mb-4">
  <h2 class="text-white bg-orange-100 pt-2 pb-2 px-4">Samsung</h2>
  <p>Samsung adalah brand smartphone asal Korea Selatan.</p>
</div>

<div class="mb-4">
  <h2 class="text-white bg-orange-100 pt-2 pb-2 px-4 ">iPhone</h2>
  <p>iPhone adalah brand smartphone asal Amerika Serikat.</p>
</div>
{{< /preview >}}

### Menggunakan Atribut Class di JavaScript

Nama class juga bisa digunakan oleh JavaScript untuk mengakses elemen HTML.

Caranya dengan menuliskan kode syntax `getElementByClassName()`.

```html
<script>
function myFunction() {
  var x = document.getElementsByClassName("brand");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
</script>
```

## Penggunaan Atribut Id di HTML

Atribut `id` memiliki fungsi yang sama dengan atribut `class`.

Cara menentukannya juga sama, yaitu dengan menambahkan atribut id pada elemen dengan nama yang unik dan mewakili tujuan id tersebut.

Nilai id bisa digunakan oleh CSS dan JavaScript sebagai id selector.

Dalam CSS, untuk menyeleksi elemen dengan id khusus, tuliskan karakter tagar (#) diikuti oleh nama id elemen.

Seperti ini:
```html
<style>
#judul {
  background-color: lightblue;
  color: black;
  padding: 32px;
  text-align: center;
}
</style>

<h1 id="judul">Judul Artikel Saya</h1>
```
{{< preview >}}
<h1 class="text-center text-black bg-blue-100 p-8">Judul Artikel Saya</h1>
{{< /preview >}}

### Membuat Bookmark dengan ID dan link

Pada halaman artikel blog yang panjang, biasanya terdapat tabel konten yang berisi daftar isi dari keseluruhan konten blog tersebut.

Contohnya seperti yang bisa kamu lihat dibagian atas halaman ini.

Judul pada daftar isi ini, jika kamu klik maka akan meloncat ke bagian sub judul yang ada pada halaman website.

Di HTML, hal ini biasa disebut sebagai _bookmark_.

Contoh:

Buatlah bookmark dengan atribut id:
```html
<h2 id="B3">Bagian 3</h2>
```

Kemudian tambahkan link ke bookmark ("melompat ke bagian 3"), dari halaman yang sama:

```html
<a href="#B3">Lompat ke Bagian 3</a>
```

{{< preview >}}
<a href="#B3">Lompat ke Bagian 3</a>

<div class="w-full h-50px mb-24"></div>

<h2 id="B3" class="mb-0">Bagian 3</h2>
{{< /preview >}}

### Menggunakan Atribut ID di JavaScript

JavaScript bisa mengakses elemen dengan id khusus menggunakan syntax `getElementById()`

```html
<script>
function displayResult() {
  document.getElementById("judul").innerHTML = "Have a nice day!";
}
</script>
```

## Perbedaan antara Class dan ID

Meskipun class dan ID memiliki fungsi yang sama, tetapi ada sedikit perbedaan diantara keduanya.

Elemen HTML hanya boleh memiliki __satu id__ yang unik dalam sebuah halaman web.

Sedangkan __nama class__ bisa digunakan oleh banyak elemen sekaligus dalam sebuah halaman web.

```html
<style>
#judul {
  background-color: #c8e6c9;
  color: white;
  padding: 20px;
}
.brand {
  background-color: #ffe0b2;
  color: white;
  padding: 20px;
}
</style>
<h1 id="judul">Daftar Brand Smartphone Terpopuler</h1>

<h2 class="brand">Huawai</h2>
<p>Huawai adalah brand smartphone asal China.</p>

<h2 class="brand">Samsung</h2>
<p>Samsung adalah brand smartphone asal Korea Selatan.</p>

<h2 class="brand">iPhone</h2>
<p>iPhone adalah brand smartphone asal Amerika Serikat.</p>
```

{{< preview >}}
<h1 class="text-white text-center bg-green-100 pt-2 pb-2 px-4">Daftar Brand Smartphone Terpopuler</h1>

<div class="mb-4">
  <h2 class="text-white bg-orange-100 pt-2 pb-2 px-4">Huawai</h2>
  <p>Huawai adalah brand smartphone asal China.</p>
</div>

<div class="mb-4">
  <h2 class="text-white bg-orange-100 pt-2 pb-2 px-4">Samsung</h2>
  <p>Samsung adalah brand smartphone asal Korea Selatan.</p>
</div>

<div class="mb-4">
  <h2 class="text-white bg-orange-100 pt-2 pb-2 px-4 ">iPhone</h2>
  <p>iPhone adalah brand smartphone asal Amerika Serikat.</p>
</div>
{{< /preview >}}


