---
title: "Pengertian Box Model dalam CSS"
description: "Pengertian Box Model dalam CSS"
date: "2020-01-12T07:34:07+07:00"
slug: pengertian-box-model-css
weight: 100
authors:
- akhlis
---

Semua elemen HTML bisa dianggap sebagai kotak atau _box_.

Mulai dari elemen header, article, paragraf, image, footer, dan lainnya memiliki bentuk segi empat.

Sehingga untuk membuat desain halaman website dengan HTML mirip seperti bermain lego.

Dalam CSS, terdapat istilah "box model" yang harus dipahami saat membahas desain dan layout halaman web.

__Box model__ merupakan lapisan kotak yang membungkus setiap elemen HTML yang terdiri dari _margin area_, _border area_, _padding area_, dan _content area_.

_Content area_ bisa terdiri dari teks atau gambar yang selalu ada dalam setiap elemen.

Sedangkan [margin](/css/pengertian-margin-css/), [border](/css/cara-membuat-border-dengan-css/), dan [padding](/css/pengertian-padding-css/) merupakan opsional yang keberadaannya tergantung pada layout desain halaman web yang dibuat oleh web developer.

<div class="w-3/4 bg-orange-100 border border-dashed border-orange-500 text-sm text-center mx-auto mb-12"><span class="inline-block py-3">margin area</span>
    <div class="bg-green-100 border border-dashed border-green-500 text-sm text-center mx-12 mb-12"><span class="inline-block py-3">border area</span>
        <div class="bg-amber-100 border border-dashed border-green-500 text-sm text-center mx-12 mb-12"><span class="inline-block py-3">padding area</span>
            <div class="bg-yellow-100 border border-dashed border-yellow-500 text-sm text-center py-16 mx-12 mb-12"><span>content area</span>
            </div>
        </div>
    </div>
</div>

_Keterangan:_
- __Content area__ - Konten elemen, bisa berupa teks dan gambar
- __Padding__ - Area kosong disekitar _content_
- __Border__ - Garis tepi elemen disekitar _padding_ dan _content_
- __Margin__ - Area kosong di luar border

Selain ketiga properti di atas, __box model__ juga terdiri dari properti `width` yang digunakan untuk menentukan lebar elemen.

Dan properti `height` yang digunakan untuk menentukan tinggi suatu elemen.

Contoh:

```css
.box {
  width: 300px;
  border: 16px solid green;
  padding: 48px;
  margin: 20px;
}
```

{{< preview >}}
<div class="w-300px border-16 border-solid border-green-500 content-box p-12 m-6"></div>
{{< /preview >}}

## Mengatur Lebar dan Tinggi Elemen HTML

Untuk mengatur lebar dan tinggi elemen secara tepat pada semua web browser, kamu perlu memahami cara kerja "box model".

Dalam CSS, property `width` digunakan untuk menentukan lebar elemen, dan property `height` digunakan untuk menentukan tinggi elemen.

{{< tips >}}
__Perlu diingat!__ Secara default, property CSS `width` dan `height` hanya mengatur lebar dan tinggi bagian _content area_ saja.
{{< /tips >}}

Sehingga untuk menghitung ukuran penuh suatu elemen, kamu harus menambahkannya dengan _padding_, _border_, dan _margin_.

Contoh:

Coba hitung berapa lebar penuh dari elemen box berikut?

```css
.box {
  width: 300px;
  height: 200px;
  border: 16px solid #ff9800;
  padding: 48px;
  margin: 24px;
  background: #ffe0b2;
}
```

{{< preview >}}
<div class="w-300px h-200px bg-orange-100 border-16 border-solid border-orange-500 content-box p-12 m-6"></div>
{{< /preview >}}

Sebelum menghitungnya, coba perhatikan lagi box di atas! faktor apa saja yang mempengaruhi lebar elemen box tersebut?

Box di atas memiliki lebar berikut:
- margin kiri 24px
- border kiri 16px
- padding kiri 48px
- lebar content 300px
- padding kanan 48px
- border kanan 16px
- margin kanan 24px

Sehingga cara menghitungnya 2 * 24px (margin kanan & kiri) + 2 * 16px (border kanan & kiri) + 2 * 48px (padding kanan & kiri) + 300px (lebar konten) = 476px

<div class="inline-block content-box bg-orange-100 border border-dashed border-orange-500 text-xs text-center mx-auto mb-12"><span class="inline-block py-3px">margin 24px</span>
    <div class="bg-green-100 border border-dashed border-green-500 mx-6 mb-6"><span class="inline-block leading-none py-2px">border 16px</span>
        <div class="bg-amber-100 border border-dashed border-green-500 mx-4 mb-4"><span class="inline-block leading-tight py-4 mb-px">padding 48px</span>
            <div class="w-300px h-200px flex items-center justify-center bg-yellow-100 border border-dashed border-yellow-500 mx-12 mb-12"><span class="leading-tight">content: lebar 300px tinggi 200px</span>
            </div>
        </div>
    </div>
</div>

Jadi total lebar elemen box menjadi 476px.

## Mengatur Box Model dengan Property CSS `box-sizing`

Seperti pada contoh di atas, keberadaan "box model" bisa mempengaruhi lebar dan tinggi suatu elemen.

Hal ini disebabkan karena web browser akan menerapkan property CSS [box-sizing](/cssref/box-sizing/) dengan nilai `content-box` secara default.

Sehingga lebar dan tinggi yang ditentukan CSS hanya berpengaruh pada _content area_ saja.

Dalam membuat desain layout website, kadang hal tersebut akan menyebabkan kendala pada tata letak suatu elemen yang tidak sesuai keinginan.

Untuk mengatasi masalah ini, kamu bisa menggunakan nilai `border-box` pada properti CSS `box-sizing`.

Dengan menerapkan `box-sizing: border-box` ini, nilai _margin_, _border_, dan _padding_ akan ikut disertakan untuk menentukan lebar dan tinggi seperti yang ditetapkan pada property `width` dan `height`.

Artinya, lebar atau tinggi dari _content area_ akan menjadi berkurang dari yang ditetapkan pada `width` atau `height`.

Agar lebih mudah memahaminya, saya akan menggunakan contoh di atas dengan menerapkan metode "border box"

```css {hl_lines=[8]}
.box {
  width: 300px;
  height: 200px;
  border: 16px solid #ff9800;
  padding: 48px;
  margin: 24px;
  background: #ffe0b2;
  box-sizing: border-box;
}
```

{{< preview >}}
<div class="w-300px h-200px bg-orange-100 border-16 border-solid border-orange-500 p-12 m-6 border-box"></div>
{{< /preview >}}

Pada box di atas, lebar elemen tetap 300px dan tingginya juga tetap 200px.

Namun lebar dan tinggi _content area_ akan menyusut.

Begini cara menghitung lebar _content area_ saat ini, 300px (lebar elemen) - 2 * 24px (margin kanan & kiri) - 2 * 16px (border kanan & kiri) - 2 * 48px (padding kanan & kiri) = 124px

<div class="w-300px h-200 bg-orange-100 border border-dashed border-orange-500 text-xs text-center mb-12"><span class="inline-block py-3px">margin 24px</span>
    <div class="bg-green-100 border border-dashed border-green-500 mx-6 mb-6"><span class="inline-block leading-none py-2px">border 16px</span>
        <div class="bg-amber-100 border border-dashed border-green-500 mx-4 mb-4"><span class="inline-block leading-tight py-4 mb-px">padding 48px</span>
            <div class="bg-yellow-100 flex justify-center items-center border border-dashed border-yellow-500 mx-12 mb-12"><span class="leading-tight">content area</span>
            </div>
        </div>
    </div>
</div>

Jadi lebar _content area_ box di atas menjadi 124px.

