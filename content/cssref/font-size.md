---
title: font-size
description: font-size
date: "2019-11-12T10:34:07+07:00"
slug: font-size
css_collections:
- typography
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/font-size
---

Properti CSS `font-size` digunakan untuk mengatur ukuran, atau ketinggian font.

Karena nilai properti `font-size` digunakan untuk menghitung nilai unit __em__ dan __ex__, nilai properti `font-size`
juga dapat mempengaruhi ukuran elemen lain pada halaman yang bergantung unit em atau ex.

Misalnya, jika dimensi elemen (lebar dan tinggi) ditentukan menggunakan satuan panjang em, maka ukuran font yang
ditetapkan pada elemen akan memiliki efek langsung pada panjang dimensi elemen yang dihitung, karena em dan ex adalah
satuan relatif, dan dimensi yang diatur dalam em dan ex relatif terhadap ukuran font yang ditetapkan pada elemen.

Kamu dapat membaca lebih lanjut tentang panjang relatif di tutorial CSS `length`.

Ukuran font dapat ditentukan sebagai nilai absolut atau relatif. Nilai absolut dapat ditentukan menggunakan kata kunci
atau unit `lenght` yang telah ditentukan sebelumnya.

Nilai relatif ditentukan dengan menggunakan nilai `lenght` relatif atau nilai `persentase`. Nilai negatif untuk font
tidak diperbolehkan.

Nilai aktual ukuran font dapat berbeda dari nilai yang dihitung karena nilai numerik pada penyesuaian ukuran font dan
tidak tersedianya ukuran font tertentu.

## CSS Syntax
```css
font-size:medium | xx-small | x-small | small | large | x-large | xx-large | smaller | larger | length | initial |
inherit;
```

## JavaScript Syntax
```js
object.style.fontSize="14px"
```

{{< cssref default="medium" inherited="ya" animatable="ya" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="none" value="font-size: medium;" >}}
Teks akan menggunakan ukuran sedang default browser.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-size text-base p-4" id="font-size-medium">
  <p>Hello world</p>
  <p>The quick brown fox jumps over the lazy dog</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="font-size: 20px;" >}}
Kamu dapat menggunakan nilai piksel.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-size p-4" id="font-size-20px">
  <p>Hello world</p>
  <p>The quick brown fox jumps over the lazy dog</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="font-size: 1.2em;" >}}
Kamu dapat menggunakan nilai __em__.

Nilainya relatif terhadap ukuran font induk.

Akibatnya, nilai akan mengalir jika digunakan pada elemen anak.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-size p-4" id="font-size-12em">
  <div class="parent">Parent container: <strong>18px</strong>
    <div class="block bg-green-100 rounded-sm p-4">Font-size: 1.2em = <strong>21.6px</strong>
      <div class="block bg-pink-100 rounded-sm p-4">Font-size: 1.2em = <strong>25.92px</strong>
        <div class="block bg-yellow-100 rounded p-4">Font-size: 1.2em = <strong>31.104px</strong></div>
      </div>
    </div>
  </div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="font-size: 1.2rem;" >}}
Kamu dapat menggunakan nilai __rem__.

Nilainya relatif terhadap ukuran font elemen root, yang merupakan elemen `<html>`.

Akibatnya, nilai tidak akan bervariasi tergantung pada kedalaman elemen dalam hierarki HTML, dan akan memeriksa kembali
konteksnya secara independen.
{{< /property-value >}}
{{< property-preview >}}
<div class="example-output-div font-size p-4" id="font-size-12rem">
  <div class="parent"><code>&lt;html&gt;</code> root element: <strong>18px</strong>
    <div class="block bg-green-100 rounded-sm p-4">Font-size: 1.2rem = <strong>21.6px</strong>
      <div class="block bg-pink-100 rounded-sm p-4">Font-size: 1.2rem = <strong>21.6px</strong>
        <div class="block bg-yellow-100 rounded p-4">Font-size: 1.2rem = <strong>21.6px</strong></div>
      </div>
    </div>
  </div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="font-size: 90%;" >}}
Anda dapat menggunakan nilai __persentase__. Mereka bertindak seperti nilai mereka.

Nilainya relatif terhadap ukuran font induk.

Akibatnya, nilai akan mengalir jika digunakan pada elemen anak.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-size p-4" id="font-size-90">
  <div class="parent">Parent container: <strong>18px</strong>
    <div class="block bg-green-100 rounded-sm p-4">Font-size: 90% = <strong>16.2</strong>
      <div class="block bg-pink-100 rounded-sm p-4">Font-size: 90% = <strong>14.58px</strong>
        <div class="block bg-yellow-100 rounded p-4">Font-size: 90% = <strong>13.122px</strong></div>
      </div>
    </div>
  </div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="font-size: smaller;" >}}
Kamu dapat menggunakan kata kunci __relatif__. Nilai ini relatif terhadap induknya.

Berikut ini yamg tersedia:
- `larger`
- `smaller`
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-size p-4" id="font-size-smaller">
  <div class="parent">Parent container: <strong>18px</strong>
    <div class="block bg-green-100 rounded-sm p-4">Font-size: smaller<div class="block bg-pink-100 rounded-sm p-4">Font-size: smaller<div
          class="block bg-yellow-100 rounded p-4">Font-size: smaller</div>
      </div>
    </div>
  </div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="font-size: x-large;" >}}
Kamu dapat menggunakan kata kunci __absolut__. Nilai ini relatif terhadap elemen root <html>.

Berikut ini yang tersedia:
- `xx-small`
- `x-small`
- `small`
- `medium`
- `large`
- `x-large`
- `xx-large`
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-size p-4" id="font-size-x-large">
  <div class="parent"><code>&lt;html&gt;</code> root element: <strong>18px</strong>
    <div class="block bg-green-100 rounded-sm p-4">Font-size: x-large<div class="block bg-pink-100 rounded-sm p-4">Font-size: x-large<div
          class="block bg-yellow-100 rounded p-4">Font-size: x-large</div>
      </div>
    </div>
  </div>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .font-size {
    line-height: 1.2;
  }

  #font-size-medium {
    font-size: medium;
  }

  #font-size-20px {
    font-size: 20px;
  }

  #font-size-12em .parent {
    font-size: 18px;
  }

  #font-size-12em .block {
    font-size: 1.2em;
    margin-top: 0.25rem;
  }

  #font-size-12rem .parent {
    font-size: 18px;
  }

  #font-size-12rem .block {
    font-size: 1.2rem;
    margin-top: 0.25rem;
  }

  #font-size-90 .parent {
    font-size: 18px;
  }

  #font-size-90 .block {
    font-size: 90%;
    margin-top: 0.25rem;
  }

  #font-size-smaller .parent {
    font-size: 18px;
  }

  #font-size-smaller .block {
    font-size: smaller;
    margin-top: 0.25rem;
  }

  #font-size-x-large .parent {
    font-size: 18px;
  }

  #font-size-x-large .block {
    font-size: x-large;
    margin-top: 0.25rem;
  }
</style>