---
title: background-origin
description: background-origin
date: "2019-11-12T10:34:07+07:00"
slug: background-origin
css_collections:
- background
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/background-origin
caniuse: http://caniuse.com/#feat=background-origin
---

Properti CSS `background-origin` menetapkan apa yang disebut area pemosisian latar belakang.

Artinya, properti ini menentukan akan kemana gambar latar belakang (sudut kiri atas) ketika latar belakang diwarnai.

Nilai yang berbeda akan menghasilkan efek yang berbeda ketika dikombinasikan dengan properti background lainnya seperti
`background-attachment` dan `background-clip`.

Jika nilai `background-attachment` diatur ke `fixed`, nilai properti `background-origin` diabaikan.

Elemen dalam CSS memiliki 3 area, disebut box yang didefinisikan seperti: border box, padding box, dan content box.

Ada juga area keempat yang disebut kotak margin yang mencakup elemen dan margin luarnya.

![box area](/css/box-areas.png)

Asal gambar latar belakang suatu elemen biasanya sudut kiri atas padding box.

Properti `background-origin` juga dapat mengambil nilai yang dipisahkan koma sehingga ketika elemen memiliki lebih dari
satu gambar latar belakang, setiap nilai diterapkan ke gambar latar belakang yang sesuai.

## CSS Syntax

```css
background-origin: padding-box | border-box | content-box | initial | inherit;
```
#### Javascript Syntax
```js
object.style.backgroundOrigin="content-box"
```

{{< property >}}
{{< property-value default="default" value="background-origin: padding-box;" >}}
Gambar latar belakang dimulai pada <em> tepi </em> perbatasan: di dalam padding tetapi <em> bukan </em> border.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-origin " id="background-origin-padding-box">
    <p>Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-origin: border-box;" >}}
Gambar latar belakang dimulai <strong> dari bawah </strong> perbatasan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-origin " id="background-origin-border-box">
    <p>Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-origin: content-box;" >}}
Gambar latar belakang hanya dimulai di tepi konten <em> </em>: itu tidak termasuk padding, atau border.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-origin " id="background-origin-content-box">
    <p>Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
    .background-origin {
        background-image: url(/images/cssref/koala.jpeg);
        background-repeat: no-repeat;
        background-size: 64px 64px;
        border: 4px dashed;
        padding: 2em;
    }

    .background-origin p {
        background-color: rgba(5, 255, 176, 0.5);
        padding: 1em;
    }

    #background-origin-padding-box {
        background-origin: padding-box;
    }

    #background-origin-border-box {
        background-origin: border-box;
    }

    #background-origin-content-box {
        background-origin: content-box;
    }
</style>



## Browser Support

Tabel berikut ini menunjukkan tingkat dukungan browser untuk fitur `animasi` yang disediakan oleh
[Caniuse.com]('http://caniuse.com').

<iframe src="https://caniuse.com/background-img-opts/embed/" width="100%" height="350"></iframe>