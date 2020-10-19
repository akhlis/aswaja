---
title: font-family
description: font-family
date: "2019-11-12T10:34:07+07:00"
slug: font-family
css_collections:
- typography
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/font-family
---

Properti CSS `font-family` menentukan keluarga font yang akan digunakan untuk konten elemen.

Khususnya properti ini mendefinisikan daftar prioritas nama _font family_ dan atau nama _generic family_ yang akan
digunakan.

Nama _font family_ yang ditentukan dipisahkan oleh koma, menunjukkan bahwa mereka adalah alternatif satu sama lain.

Browser akan memilih font dari daftar yang diinstal pada komputer, atau yang dapat diunduh menggunakan informasi yang
disediakan oleh `@font-face`.

Contoh:
```css
font-family: Helvetica, Verdana, sans-serif;
```

Browser pertama-tama akan menerapkan _font family_ pertama yang ditentukan dalam daftar.

Jika tidak valid atau tidak keluar atau gagal memuat font yang ditentukan, ia mencoba menerapkan font kedua, lalu yang
ketiga, dan keempat, hingga akhir daftar..

Jika tidak ada _font family_ yang ditentukan yang tersedia, browser kembali ke font default yang ditentukan dalam sistem
operasi.

Pada contoh diatas, jika Helvetica tersedia, ia akan digunakan saat rendering.

Jika Helvetica atau Verdana tidak ada, maka font sans serif yang ditentukan browser akan digunakan.

Ada dua jenis nama _font family_: nama _font family_ dan nama _generic family_.

- **Nama _font family_** adalah nama font yang sebenarnya, seperti "Helvetica", "Arial", "Times New Roman", "Open Sans",
"Lato", dll.

Nama _font family_ harus diberikan dikutip sebagai string, atau tidak dikutip sebagai urutan satu atau lebih
pengidentifikasi.

Ini berarti sebagian besar karakter tanda baca dan angka pada awal setiap token harus diloloskan dengan nama _font
family_ yang tidak dikutip.

Misalnya, deklarasi berikut __tidak valid:__
```css
font-family: Red/Black, sans-serif;
font-family: "Lucida" Grande, sans-serif;
font-family: Ahem!, sans-serif;
font-family: test@foo, sans-serif;
font-family: #POUND, sans-serif;
font-family: Hawaii 5-0, sans-serif;
```
Untuk menghindari kesalahan, jika nama keluarga mengandung banyak kata, dipisahkan oleh spasi, digit, atau karakter
tanda baca selain tanda hubung, disarankan untuk mencantumkan nama keluarga dalam tanda kutip (tunggal atau ganda).
```css
font-family: "New Century Schoolbook", serif;
font-family: "21st Century", fantasy;
```
- **Nama _generic family_** adalah nama yang biasanya digunakan sebagai mekanisme mundur, yang memberi tahu browser
jenis font apa yang akan digunakan jika tidak ada _font family_ tertentu yang tersedia.

Saat beberapa nama font ditentukan, kamu disarankan untuk memasukkan nama _generic font_ pada bagian akhir daftar untuk
memberikan cadangan ketika font family yang diinginkan tidak tersedia.

Nama _generic font_ biasanya kata kunci. Kata kunci _generic font_ didefinisikan seperti: '__serif__', '__sans-serif__',
'__cursive__', '__fantasy__', dan '__monospace__'.

Karena nama _generic font_ adalah kata kunci, mereka tidak boleh pakai dikutip. Dalam contoh di atas, "serif" dan
"fantasi" adalah nama _generic family_ yang disediakan.

## CSS Syntax
```css
font-family: family-name | generic-family | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.fontFamily="Verdana,sans-serif"
```

{{< cssref default="tergantung pada browser" inherited="ya" animatable="tidak" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value value="font-family: 'Source Sans Pro', 'Arial', sans-serif;" >}}
Saat menggunakan __beberapa__ nilai, daftar `font-family` dari keluarga font mendefinisikan prioritas di mana browser
harus memilih keluarga font.

Browser akan mencari setiap keluarga di komputer pengguna dan di setiap sumber file __@font-face__.

Daftar ini diprioritaskan dari __kiri__ ke __kanan__: dan akan menggunakan nilai pertama jika tersedia, atau pergi ke
yang berikutnya, sampai akhir daftar tercapai. Keluarga font default ditentukan oleh preferensi browser.

Dalam contoh ini, browser akan mencoba menggunakan `Source Sans Pro` jika tersedia. Jika tidak dapat menemukannya, ia
akan mencoba menggunakan `Arial`. Jika tidak tersedia, itu akan menggunakan font `sans-serif` browser.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-family p-4" id="font-family-source-sans-pro-arial-sans-serif">Hello
  world<br>The quick brown fox jumps over the lazy dog</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="font-family: serif;" >}}
Browser akan menggunakan keluarga font __serif__: semua karakter memiliki akhiran goresan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-family p-4" id="font-family-serif">Hello world<br>The quick brown fox jumps
  over the lazy dog</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="font-family: sans-serif;" >}}
Browser akan menggunakan keluarga font __sans-serif__: __tidak ada__ karakter yang memiliki akhiran garis.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-family p-4" id="font-family-sans-serif">Hello world<br>The quick brown fox
  jumps over the lazy dog</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="font-family: monospace;" >}}
Browser akan menggunakan keluarga font __monospace__: semua karakter memiliki lebar yang sama.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-family p-4" id="font-family-monospace">Hello world<br>The quick brown fox jumps
  over the lazy dog</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="font-family: cursive;" >}}
Browser akan menggunakan keluarga font __cursive__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-family p-4" id="font-family-cursive">Hello world<br>The quick brown fox jumps
  over the lazy dog</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="font-family: fantasy;" >}}
Browser akan menggunakan keluarga font __fantasy__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-family p-4" id="font-family-fantasy">Hello world<br>The quick brown fox jumps
  over the lazy dog</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .font-family {
    font-size: 1.5em;
    line-height: 1.2;
  }

  #font-family-source-sans-pro-arial-sans-serif {
    font-family: "Source Sans Pro", "Arial", sans-serif;
  }

  #font-family-serif {
    font-family: serif;
  }

  #font-family-sans-serif {
    font-family: sans-serif;
  }

  #font-family-monospace {
    font-family: monospace;
  }

  #font-family-cursive {
    font-family: cursive;
  }

  #font-family-fantasy {
    font-family: fantasy;
  }
</style>