---
title: background-repeat
description: background-repeat
date: "2019-11-12T10:34:07+07:00"
slug: background-repeat
css_collections:
- background
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/background-repeat
caniuse: http://caniuse.com/#feat=background-repeat
---

Jika gambar latar belakang ditentukan, properti `background-repeat` menentukan apakah gambar diulang dan bagaimana cara
mengulangnya.

Pengulangan gambar latar belakang terjadi setelah ukuran dan posisi.

Suatu gambar dapat diulangi secara vertikal, horizontal, baik secara vertikal maupun horizontal, atau dapat diatur untuk
tidak mengulang sama sekali.

Jika gambar latar belakang diulang, mungkin saja beberapa ubinnya terpotong jika tidak cocok beberapa kali ke dalam area
penentuan latar belakang elemen.

Properti `background-repeat` dapat mengambil nilai tunggal atau dua nilai kata kunci.

Nilai ini menentukan apakah dan bagaimana gambar diulang secara horizontal dan vertikal.

Jika satu nilai tunggal digunakan, nilai tersebut dianggap sebagai singkatan untuk sintaks dua nilai dan nilai lainnya
ditetapkan oleh browser.

Jika dua nilai kata kunci digunakan, maka yang pertama adalah arah horizontal dan yang kedua untuk arah vertikal.

Properti `background-image` juga dapat mengambil nilai yang dipisahkan koma sehingga ketika elemen memiliki lebih dari
satu gambar latar belakang, setiap nilai diterapkan ke gambar latar belakang yang sesuai.

## CSS Syntax
```css
background-repeat: repeat | repeat-x | repeat-y | no-repeat | initial | inherit;
```

#### Javascript Syntax
```js
object.style.backgroundRepeat="repeat-x"
```

{{< property >}}
{{< property-value default="default" value="background-repeat: repeat;" >}}
Gambar latar belakang akan berulang sendiri <strong> secara horizontal </strong> dan <strong> secara vertikal </strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example bg-repeat bg-center bg-gray-100 bg-24 h-150px p-4" id="background-repeat-repeat"
    style="background-image:url('/images/cssref/koala.jpeg');">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-repeat: repeat-x;" >}}
Gambar latar belakang hanya akan berulang dengan sendirinya <strong> secara horizontal </strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example bg-repeat-x bg-center bg-gray-100 bg-24 h-150px p-4" id="background-repeat-repeat-x"
    style="background-image:url('/images/cssref/koala.jpeg');">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-repeat: repeat-y;" >}}
Gambar latar belakang hanya akan berulang sendiri <strong> secara vertikal </strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example bg-repeat-y bg-center bg-gray-100 bg-24 h-150px p-4" id="background-repeat-repeat-y"
    style="background-image:url('/images/cssref/koala.jpeg');">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-repeat: no-repeat;" >}}
Gambar latar belakang hanya akan muncul <strong> sekali </strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example bg-repeat-no-repeat bg-gray-100 bg-24 h-150px p-4" id="background-repeat-no-repeat"
    style="background-image:url('/images/cssref/koala.jpeg');">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-repeat: space;" >}}
Gambar latar diulang sebanyak mungkin tanpa kliping. Gambar pertama dan terakhir disematkan ke kedua sisi elemen, dan
spasi putih didistribusikan secara merata di antara gambar.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example bg-repeat-space bg-gray-100 bg-24 h-150px p-4" id="background-repeat-repeat-space"
    style="background-image:url('/images/cssref/koala.jpeg');">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-repeat: round;" >}}
Gambar latar diulang dan diperas atau direntangkan untuk mengisi ruang (tanpa celah).
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example bg-repeat-round bg-gray-100 bg-24 h-150px p-4" id="background-repeat-repeat-round"
    style="background-image:url('/images/cssref/koala.jpeg');">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}