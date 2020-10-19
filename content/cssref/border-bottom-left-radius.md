---
title: border-bottom-left-radius
description: border-bottom-left-radius
date: "2019-11-12T10:34:07+07:00"
slug: border-bottom-left-radius
css_collections:
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-left-radius
---

Properti CSS `border-bottom-left-radius` digunakan untuk membulatkan sudut kiri bawah elemen.

Properti ini mengambil satu atau dua nilai yang menentukan jari-jari seperempat elips yang mendefinisikan bentuk sudut
tepi batas luar.

Nilai pertama adalah jari-jari horizontal, yang kedua jari-jari vertikal. Jika nilai kedua dihilangkan, maka nilai
pertama akan disalin.

Jika salah satu panjangnya nol, sudutnya persegi, bukan bulat.

Persentase untuk jari-jari horizontal mengacu pada lebar kotak pembatas, sedangkan persentase untuk jari-jari vertikal
mengacu pada tinggi kotak pembatas. Dan nilai negatif tidak dibolehkan.

{{< figure src="/css/bottom-left-corner-radius.png" class="img-center" alt="border bottom left corder radius" title="Dua nilai batas-kiri-jari-jari: 55pt 25pt menentukan lengkungan sudut." >}}

Lengkungan sudut tidak harus melingkar sempurna.

Ketika hanya satu nilai yang ditentukan dan yang lainnya disalin dari yang ditentukan, hasilnya akan menjadi kurva
lingkaran; Yaitu, busur lingkaran digunakan sebagai perbatasan.

{{< figure src="/css/circular-bottom-left-curve.png" class="img-center" alt="Dua jari-jari yang sama akan menghasilkan lengkungan melingkar." title="Dua jari-jari yang sama akan menghasilkan lengkungan melingkar." >}}

Tetapi ketika dua nilai ditentukan dan mereka tidak sama, hasilnya adalah kurva elips; Yaitu, busur elips digunakan
sebagai perbatasan.

{{< figure src="/css/elliptical-bottom-left-curve.png" class="img-center" alt="Dua jari-jari yang tidak sama akan menghasilkan lengkungan elips." title="Dua jari-jari yang tidak sama akan menghasilkan lengkungan elips." >}}

## CSS Syntax
```css
border-bottom-left-radius: length | % [length|%] | initial | inherit;
```

#### Javascript Syntax
```js
object.style.borderBottomLeftRadius="25px"
```

{{< property >}}
{{< property-value default="default" value="border-bottom-left-radius: 0;" >}}
Menghapus semua radius perbatasan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-bottom-left-radius" id="border-bottom-left-radius-0">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-bottom-left-radius: 20px;" >}}
Kamu dapat menggunakan nilai-nilai <strong> piksel </strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-bottom-left-radius " id="border-bottom-left-radius-20px">Hello
    world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-bottom-left-radius: 50%;" >}}
Kamu dapat menggunakan nilai <strong> persentase </strong>. Dalam contoh ini, jari-jari dimulai setengah di perbatasan
<em> bawah </em>, dan berakhir di setengah di perbatasan <em> kiri </em>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-bottom-left-radius " id="border-bottom-left-radius-50">Hello
    world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-bottom-left-radius: 20px 50%;" >}}
Jika kamu menetapkan <strong> dua nilai </strong>, yang pertama adalah untuk perbatasan <em> bawah </em>, yang kedua
untuk perbatasan <em> kiri </em>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-bottom-left-radius " id="border-bottom-left-radius-20px-50">Hello
    world</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
    .border-bottom-left-radius {
        border-bottom-color: #05ffb0;
        border-left-color: hsl(348, 100%, 61%);
        border-style: solid;
        border-width: 4px;
        padding: 0.5em 1em;
    }

    #border-bottom-left-radius-0 {
        border-bottom-left-radius: 0;
    }

    #border-bottom-left-radius-20px {
        border-bottom-left-radius: 20px;
    }

    #border-bottom-left-radius-50 {
        border-bottom-left-radius: 50%;
    }

    #border-bottom-left-radius-20px-50 {
        border-bottom-left-radius: 20px 50%;
    }
</style>

## Browser Support

Tabel berikut ini menunjukkan tingkat dukungan browser untuk fitur `border radius` yang disediakan oleh
[Caniuse.com]('http://caniuse.com').

<iframe src="https://caniuse.com/border-radius/embed/" width="100%" height="350"></iframe>