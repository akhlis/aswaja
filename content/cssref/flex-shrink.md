---
title: flex-shrink
description: flex-shrink
date: "2019-11-12T10:34:07+07:00"
slug: flex-shrink
css_collections:
- flexbox
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/flex-shrink
caniuse: http://caniuse.com/#feat=flexbox
---

Properti CSS `flex-shrink` merupakan sub-properti dari modul layout kotak [Flexbox](/css/flexbox).

Properti ini menentukan seberapa banyak item flex akan menyusut relatif terhadap sisa item flex dalam wadah fleksibel
ketika tidak ada cukup ruang di baris.

Ketika dihilangkan, nilai "flex-shrink" diatur ke 1 dan faktor penyusut item flex dikalikan dengan basis flex ketika
mendistribusikan ruang negatif.

Item flex ditempatkan dalam _flex container_, yaitu elemen dengan `display: flex` atau `display: inline-flex`.

Dalam model layout flex, elemen anak dari wadah fleksibel (_flex container_) dapat diletakkan di segala arah, dan dapat
"melenturkan" ukurannya, baik melebar untuk mengisi ruang yang tersisa atau menyusut untuk menghindari meluapnya elemen
induk.

## CSS Syntax
```css
flex-shrink: number | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.flexShrink="5"
```

## Attribute Value

{{< property >}}
{{< property-value default="default" value="flex-shrink: 1;" >}}
Jika tidak ada ruang yang cukup di sumbu utama _flex container_, elemen akan menyusut dengan faktor 1, dan akan
membungkus isinya.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example w-300px flex flex-shrink bg-indigo-200 rounded-lg p-4" id="flex-shrink-1">
  <p class="flex-shrink bg-green-200 py-4 px-2 text-center text-sm rounded-sm"><strong>This is the flex-shrink
      target</strong>
    <p class="flex-shrink bg-pink-200 py-4 px-2 text-center text-sm rounded-sm">Foo bar</p>
    <p class="flex-shrink bg-orange-200 py-4 px-2 text-center text-sm rounded-sm">Lorem ipsum</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="flex-shrink: 0;" >}}
Elemen tidak akan menyusut: ia akan mempertahankan lebar yang dibutuhkan, dan tidak membungkus isinya. Elemen sibling
(saudara kandung elemen) akan menyusut untuk memberi ruang pada elemen target.

Karena elemen target tidak akan membungkus isinya, ada kemungkinan konten _flex container_ meluap (__overflow__).
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example w-300px flex flex-shrink-0 bg-indigo-200 rounded-lg p-4" id="flex-shrink-1">
  <p class="flex-shrink-0 bg-green-200 py-4 px-3 text-center text-sm rounded-sm"><strong>This is the flex-shrink
      target</strong>
    <p class="flex-shrink bg-pink-200 py-4 px-3 text-center text-sm rounded-sm">Foo bar</p>
    <p class="flex-shrink bg-orange-200 py-4 px-3 text-center text-sm rounded-sm">Lorem ipsum</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="flex-shrink: 2;" >}}
Karena nilai flex-shrink relatif, perilakunya tergantung pada nilai saudara item flex.

Dalam contoh ini, item hijau ingin mengisi 100% dari lebar. Ruang yang dibutuhkan diambil dari dua saudara kandungnya, dan dibagi menjadi 4.
- 3 perempat diambil dari item merah
- seperempat diambil dari item kuning
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example w-300px flex flex-shrink-2 bg-indigo-200 rounded-lg p-4" id="flex-shrink-2">
  <p class="w-full flex-shrink flex-grow bg-green-200 py-4 px-3 text-center text-sm rounded-sm">Width<br><strong>100%</strong>
    <p class="flex-shrink-3 bg-pink-200 py-4 px-3 text-center text-sm rounded-sm break-all">Shrink<br><strong>3</strong></p>
    <p class="flex-shrink bg-orange-200 py-4 px-3 text-center text-sm rounded-sm break-all">Shrink<br><strong>1</strong></p>
</div>
{{< /property-preview >}}
{{< /property >}}


<style type="text/css">
 
</style>