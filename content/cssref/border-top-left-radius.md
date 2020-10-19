---
title: border-top-left-radius
description: border-top-left-radius
date: "2019-11-12T10:34:07+07:00"
slug: border-top-left-radius
css_collections:
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-top-left-radius
---

Properti CSS `border-top-left-radius` digunakan untuk membulatkan sudut kiri atas suatu elemen.

Properti mengambil dalam satu atau dua nilai yang menentukan jari-jari seperempat elips yang mendefinisikan bentuk sudut
tepi batas luar.

Nilai pertama adalah jari-jari horizontal, yang kedua jari-jari vertikal. Jika nilai kedua dihilangkan, itu disalin dari
yang pertama.

Jika salah satu panjangnya nol, sudutnya persegi, bukan bulat.

Persentase untuk jari-jari horizontal mengacu pada lebar kotak pembatas, sedangkan persentase untuk jari-jari vertikal
mengacu pada tinggi kotak pembatas.

Nilai negatif tidak diperbolehkan.

{{< figure src="/css/top-left-corner-radii.png" class="img-center" alt="Dua nilai batas-atas-kiri-jari-jari: 55pt 25pt menentukan lengkungan sudut." title="Dua nilai batas-atas-kiri-jari-jari: 55pt 25pt menentukan lengkungan sudut." >}}

Lengkungan sudut tidak harus melingkar sempurna.

Ketika hanya satu nilai yang ditentukan dan yang lainnya disalin dari yang ditentukan, hasilnya akan menjadi kurva
lingkaran: yaitu, busur lingkaran digunakan sebagai border.

{{< figure src="/css/circular-top-left-curve.png" class="img-center" alt="Dua jari-jari yang sama akan menghasilkan lengkungan melingkar." title="Dua jari-jari yang sama akan menghasilkan lengkungan melingkar." >}}

Tetapi ketika dua nilai ditentukan dan mereka tidak sama, hasilnya adalah kurva elips; Yaitu, busur elips digunakan
sebagai perbatasan.

{{< figure src="/css/elliptical-top-left-curve.png" class="img-center" alt="Dua jari-jari yang tidak sama akan menghasilkan lengkungan elips." title="Dua jari-jari yang tidak sama akan menghasilkan lengkungan elips." >}}

## CSS Syntax
```css
border-top-left-radius: length | % [length | %] | initial | inherit;
```
#### Javascript Syntax

```js
object.style.borderTopLeftRadius="25px"
```

{{< property >}}
{{< property-value default="default" value="border-top-left-radius: 0;" >}}
Menghapus semua radius perbatasan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-top-left-radius " id="border-top-left-radius-0">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-top-left-radius: 20px;" >}}
Kamu dapat menggunakan nilai-nilai __piksel__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-top-left-radius " id="border-top-left-radius-20px">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-top-left-radius: 50%;" >}}
Kamu dapat menggunakan nilai __persentase__. Dalam contoh ini, jari-jari mulai di tengah-tengah perbatasan _atas_, dan
berakhir setengah di perbatasan _kiri_.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-top-left-radius " id="border-top-left-radius-50">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-top-left-radius: 20px 50%;" >}}
Jika kamu menetapkan __dua nilai__, yang pertama adalah untuk perbatasan _atas_, yang kedua untuk perbatasan _kiri_.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-top-left-radius " id="border-top-left-radius-20px-50">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
    .border-top-left-radius {
        border-top-color: #05ffb0;
        border-left-color: hsl(348, 100%, 61%);
        border-style: solid;
        border-width: 4px;
        padding: 0.5em 1em;
    }

    #border-top-left-radius-0 {
        border-top-left-radius: 0;
    }

    #border-top-left-radius-20px {
        border-top-left-radius: 20px;
    }

    #border-top-left-radius-50 {
        border-top-left-radius: 50%;
    }

    #border-top-left-radius-20px-50 {
        border-top-left-radius: 20px 50%;
    }
</style>