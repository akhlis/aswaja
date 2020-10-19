---
title: line-height
description: line-height
date: "2019-11-12T10:34:07+07:00"
slug: line-height
css_collections:
- box-model
- typography
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/line-height
---
Properti CSS `line-height` digunakan untuk mengatur ketinggian kotak garis elemen atau jarak antara dua garis _baseline_
berdekatan.

Dengan kata lain, properti ini digunakan untuk mengatur jumlah ruang di atas dan di bawah elemen inline (elemen yang
memiliki `display: inline` atau `display: inline-block`).

Perbedaan antara tinggi konten dan tinggi baris yang ditentukan disebut "`leading`".

Properti `line-height` dapat menerima keyword nilai `normal` atau `none` sama dengan angka, panjang, atau persentase.

Menurut spec, nilai "normal" bukan hanya nilai konkret tunggal yang diterapkan euntuk semua elemen, tetapi lebih
menghitung nilai "wajar" tergantung pada ukuran font yang ditetapkan pada elemen.

Nilai panjang dapat didefinisikan menggunakan unit CSS yang valid (px, em, rem, dll).

## CSS Syntax
```css
line-height: normal | number | length | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.lineHeight="30px"
```

{{< cssref default="normal" inherited="ya" animatable="ya" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="line-height: normal;" >}}
Kembali ke nilai default browser.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example line-height p-4" id="line-height-normal">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value recommended="disarankan" value="line-height: 1.6;" >}}
Kamu dapat menggunakan nilai tanpa unit: tinggi baris akan relatif terhadap ukuran font.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example line-height p-4" id="line-height-16">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="line-height: 30px;" >}}
Jarak antar karakter adalah __normal__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example line-height p-4" id="line-height-30px">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="line-height: 0.8em;" >}}
Jarak antar karakter adalah __normal__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example line-height " id="line-height-08em">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  #line-height-normal {
    line-height: normal;
  }

  #line-height-16 {
    line-height: 1.6;
  }

  #line-height-16 .block {
    line-height: 1.6;
  }

  #line-height-30px {
    line-height: 30px;
  }

  #line-height-30px .block {
    line-height: 30px;
  }

  #line-height-08em {
    line-height: 0.8em;
  }

  #line-height-08em .block {
    line-height: 0.8em;
  }
</style>