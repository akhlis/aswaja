---
title: box-shadow
description: box-shadow
date: "2019-11-12T10:34:07+07:00"
slug: box-shadow
css_collections:
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/box-shadow
---

Properti CSS `box-shadow` digunakan untuk memberikan satu atau lebih drop shadow ke suatu elemen.

Secara praktis, elemen apa pun bisa mendapatkan drop shadow menggunakan properti ini.

Setiap bayangan didefinisikan oleh satu hingga lima komponen: nilai offset horizontal, nilai offset vertikal, pilihan
radius blur, pilihan radius penyebaran, dan pilihan warna.

```css
box-shadow: [horizontal offset] [vertical offset] [blur radius] [spread radius] [color];
```

Drop shadow dapat diimbangi ke kiri atau kanan, dan ke atas atau bawah elemen, sehingga memungkinkan untuk memalsukan
keberadaan "sumber cahaya" pada halaman di posisi yang berbeda.

Drop shadow juga dapat dibuat di dalam elemen (bayangan dalam) menciptakan ilusi kedalaman di dalam elemen.

Caranya dengan menambahkan kata kunci `inset` dalam deklarasi.

```css
box-shadow: inset [horizontal offset] [vertical offset] [blur radius] [spread radius] [color];
```

Jika elemen memiliki sudut bulat, maka bentuk bayangan dibulatkan dengan cara yang sama. Border image tidak memengaruhi
bentuk bayangan kotak.

Ketika beberapa box shadow diterapkan ke elemen, mereka dinyatakan sebagai daftar bayangan yang dipisahkan koma.

Urutan yang digunakan untuk menampilkan banyak bayangan sama dengan urutan bayangan yang dibuat di belakang teks
menggunakan properti `text-shadow`.

Bayangan diterapkan dari depan ke belakang: bayangan pertama ada di atas dan yang lainnya diletakkan di belakang.

Bayangan tidak memengaruhi tata letak dan mungkin tumpang tindih dengan kotak lain atau bayangannya.

## CSS Syntax
```css
box-shadow: none | h-offset v-offset blur spread color | inset | initial | inherit;
```

#### Javascript Syntax
```js
object.style.boxShadow="10px 20px 30px blue"
```
{{< property >}}
{{< property-value default="default" value="box-shadow: none;" >}}
Menghapus semua bayangan kotak yang diterapkan pada elemen.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example box-shadow " id="box-shadow-none">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="box-shadow: 2px 6px;" >}}
Kamu membutuhkan setidaknya __dua nilai__:
- yang pertama adalah offset _horizontal_
- yang kedua adalah offset __vertikal__

Warna bayangan akan diwarisi dari warna teks.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example box-shadow " id="box-shadow-2px-6px">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="box-shadow: 2px 6px red;" >}}
Kamu dapat mendefinisikan __warna__ sebagai nilai terakhir.

Seperti dalam <code class="shorthand"><a href="/warna">warna</a></code>, kamu bisa menggunakan nama warna, hexadecimal,
rgb, hsl...
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example box-shadow " id="box-shadow-2px-6px-red">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="box-shadow: 2px 4px 10px red;" >}}
__Nilai ketiga__ opsional mendefinisikan __blur__ bayangan.

Warna akan tersebar di 10px dalam contoh ini, dari buram ke transparan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example box-shadow " id="box-shadow-2px-4px-10px-red">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="box-shadow: 2px 4px 10px 4px red;" >}}
__Nilai keempat__ opsional menetapkan __spread__ bayangan.

Spread menentukan seberapa banyak bayangan harus _tumbuh_: itu meningkatkan bayangan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example box-shadow " id="box-shadow-2px-4px-10px-4px-red">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .box-shadow {
    background: #05ffb0;
    padding: 1em 1.5em;
    margin: 1em;
  }

  #box-shadow-none {
    box-shadow: none;
  }

  #box-shadow-2px-6px {
    box-shadow: 2px 6px;
  }

  #box-shadow-2px-6px-red {
    box-shadow: 2px 6px red;
  }

  #box-shadow-2px-4px-10px-red {
    box-shadow: 2px 4px 10px red;
  }

  #box-shadow-2px-4px-10px-4px-red {
    box-shadow: 2px 4px 10px 4px red;
  }
</style>

<p class="codepen" data-height="300" data-theme-id="37132" data-default-tab="result" data-user="codingku"
  data-slug-hash="MWYKRZe"
  style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
  data-pen-title="Contoh #1 box-shadow">
  <span>See the Pen <a href="https://codepen.io/codingku/pen/MWYKRZe">
      Contoh #1 box-shadow</a> by Codingku (<a href="https://codepen.io/codingku">@codingku</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>