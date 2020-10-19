---
title: display
description: display
date: "2019-11-12T10:34:07+07:00"
slug: display
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/display
---

Properti CSS `display` digunakan untuk menentukan jenis kotak apa yang dihasilkan untuk elemen pada halaman website.

Setiap elemen pada halaman web berbentuk segi empat (lihat lebih detail tentang [box-sizing](/cssref/box-sizing)).

Jenis kotak suatu elemen inilah yang akhirnya mempengaruhi perilakunya dalam format visual halaman.

Ada dua format kotak utama dalam CSS: __inline__ dan __block__.

Kotak __inline__ (elemen level sebaris) adalah kotak yang mengalir dalam garis tanpa menyebabkannya terpisah.

Contoh yang sering digunakan misalnya `span`, `em`, dan `img`.

Elemen-elemen tersebut merupakan bagian dari kotak garis dan tidak menyebabkan garis itu terpisah.

{{< preview >}}
<p class="relative py-2 px-4 mb-8">Ini adalah contoh kotak <strong>inline</strong> yang menggunakan <span class="text-white bg-green-200 py-1 px-4">"elemen span"</span> dengan background elemen warna hijau.<span class="absolute w-full h-full top-0 left-0 border-2 border-solid border-amber-200"></span><span class="absolute text-xs bg-amber-200 left-0 -top-4 px-4">Baris Pertama</span></p>
<p class="relative py-2 px-4 mb-8">Dan ini contoh lain kotak <strong>inline</strong> dengan gambar <img class="inline-block border-4 border-solid border-red-200" src="/images/cssref/inline-block-1.jpg"> menggunakan elemen "img".<span class="absolute w-full h-full top-0 left-0 border-2 border-solid border-amber-200"></span><span class="absolute text-xs bg-amber-200 left-0 -top-4 px-4">Baris Kedua</span>
<p class="relative py-2 px-4 mb-4">Ketiga baris elemen ini dibuat menggunakan tag "&lt;p&gt;".<span class="absolute w-full h-full top-0 left-0 border-2 border-solid border-amber-200"></span><span class="absolute text-xs bg-amber-200 left-0 -top-4 px-4">Baris Ketiga</span>
{{< /preview >}}

Elemen "level-inline" bisa diberi `padding` dan `margin`, tetapi tidak dapat memiliki `width` dan `height`.

Memberi `padding` dan `margin` pada elemen __inline__ akan mendorong elemen lain pada garis secara horizontal, tetapi tidak secara vertikal.

Jika kamu ingin mengatur `width` dan `height` pada elemen __level-inline__, kamu harus menggunakan properti `inline-block`.

Elemen __inline-block__ mirip dengan elemen __inline__, tetapi bisa menerima nilai lebar dan tinggi.

Lebar dan tinggi elemen __inline-block__ akan mendorong elemen di sekitarnya secara horizontal dan vertikal sesuai kebutuhan.

Kotak __block__ (elemen tingkat block) adalah elemen yang akan memisahkan diri dari kotak garis elemen lain atau membuat baris baru.

Elemen block biasanya menempati ruang horizontal sebanyak mungkin (tergantung pada elemen block).

Elemen level block dapat mengandung elemen level block lainnya, selain elemen inline dan inline-block.

Contoh elemen __block__ yaitu `<p>`, `<ul>`, `<h1->-<h6>`, `div>`, `<section>`, dan `<header>`.

{{< preview >}}
<header class="relative p-4 mb-6">
  <h1>Ini Judul Elemen Block dengan tag "h1"</h1>
  <span class="absolute w-full h-full top-0 left-0 border-2 border-solid border-amber-200"></span><span class="absolute text-xs bg-amber-200 left-0 -top-4 px-4">Baris Pertama</span>
</header>
<p class="relative py-2 px-4 mb-4">Ini paragraf pertama sebagai elemen block dengan tag "&lt;p&gt;". Elemen paragraf ini akan memisahkan diri dari elemen judul di atas dan membuat baris baru.<span class="absolute w-full h-full top-0 left-0 border-2 border-solid border-amber-200"></span><span class="absolute text-xs bg-amber-200 left-0 -top-4 px-4">Baris Kedua</span>
{{< /preview >}}

Dengan menggunakan properti `display`, kamu dapat mengubah format visual (level kotak yang dihasilkan) dari suatu elemen.

## CSS Syntax
```css
display: value;
```

#### Javascript Syntax
```js
object.style.display="none"
```

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