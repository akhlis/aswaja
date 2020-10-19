---
title: border-bottom-right-radius
description: border-bottom-right-radius
date: "2019-11-12T10:34:07+07:00"
slug: border-bottom-right-radius
css_collections:
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-right-radius
---

Properti CSS `border-bottom-right-radius` digunakan untuk membulatkan sudut kanan bawah suatu elemen.

Properti ini mengambil satu atau dua nilai yang menentukan jari-jari seperempat elips yang mendefinisikan bentuk sudut
tepi batas luar.

Nilai pertama adalah jari-jari horizontal, yang kedua jari-jari vertikal.

Jika nilai kedua dihilangkan, itu disalin dari yang pertama.

Jika salah satu panjangnya nol, sudutnya persegi, bukan bulat.

Persentasi untuk jari-jari vertikal mangacu pada tinggi kotak pembatas. Nilai negatif tidak diperbolehkan.

{{< figure src="/css/bottom-right-corner-radius.png" class="img-center" alt="Dua nilai batas-kanan-bawah: 55pt 25pt menentukan kelengkungan sudut." title="Dua nilai batas-kanan-bawah: 55pt 25pt menentukan kelengkungan sudut." >}}

Lengkungan sudut tidak harus melingkar sempurna.

Ketika hanya satu nilai yang ditentukan dan yang lainnya disalin dari yang ditentukan, hasilnya akan menjadi kurva
lingkaran; yaitu, busur lingkaran digunakan sebagai perbatasan.

{{< figure src="/css/circular-bottom-right-curve.png" class="img-center" alt="Dua jari-jari yang sama akan menghasilkan lengkungan melingkar." title="Dua jari-jari yang sama akan menghasilkan lengkungan melingkar." >}}

Tetapi ketika dua nilai ditentukan dan mereka tidak sama, hasilnya adalah kurva elips; Yaitu, busur elips digunakan
sebagai perbatasan.

{{< figure src="/css/elliptical-bottom-right-curve.png" class="img-center" alt="Dua jari-jari yang tidak sama akan menghasilkan lengkungan elips." title="Dua jari-jari yang tidak sama akan menghasilkan lengkungan elips." >}}

## CSS Syntax
```css
border-bottom-right-radius: length | % [length|%] | initial | inherit;
```

#### Javascript Syntax
```js
object.style.borderBottomRightRadius="25px"
```
{{< property >}}
{{< property-value default="default" value="border-bottom-right-radius: 0;" >}}
Menghapus semua radius perbatasan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-bottom-right-radius " id="border-bottom-right-radius-0">Hello
    world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-bottom-right-radius: 20px;" >}}
Kamu dapat menggunakan nilai-nilai <strong> piksel </strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-bottom-right-radius " id="border-bottom-right-radius-20px">Hello
    world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-bottom-right-radius: 50%;" >}}
Kamu dapat menggunakan nilai <strong> persentase </strong>. Dalam contoh ini, jari-jari dimulai setengah di perbatasan
<em> bawah </em>, dan berakhir di setengah di perbatasan <em> kanan </em>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-bottom-right-radius " id="border-bottom-right-radius-50">Hello
    world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-bottom-right-radius: 20px 50%;" >}}
Jika kamu menetapkan <strong> dua nilai </strong>, yang pertama adalah untuk perbatasan <em> bawah </em>, yang kedua
untuk perbatasan <em> kanan </em>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-bottom-right-radius " id="border-bottom-right-radius-20px-50">
    Hello world</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
    .border-bottom-right-radius {
        border-bottom-color: #05ffb0;
        border-right-color: hsl(348, 100%, 61%);
        border-style: solid;
        border-width: 4px;
        padding: 0.5em 1em;
    }

    #border-bottom-right-radius-0 {
        border-bottom-right-radius: 0;
    }

    #border-bottom-right-radius-20px {
        border-bottom-right-radius: 20px;
    }

    #border-bottom-right-radius-50 {
        border-bottom-right-radius: 50%;
    }

    #border-bottom-right-radius-20px-50 {
        border-bottom-right-radius: 20px 50%;
    }
</style>

## Browser Support

Tabel berikut ini menunjukkan tingkat dukungan browser untuk fitur `border radius` yang disediakan oleh
[Caniuse.com]('http://caniuse.com').

<iframe src="https://caniuse.com/border-radius/embed/" width="100%" height="350"></iframe>