---
title: position
description: position
date: "2019-11-12T10:34:07+07:00"
slug: position
css_collections:
- posisi
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/position
---

## CSS Syntax
```css
position: static | absolute | fixed | relative | sticky | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.position="absolute"
```
{{< cssref default="static" inherited="tidak" animatable="tidak" version="CSS2" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="position: static;" >}}
Elemen akan tetap berada di aliran alami halaman.

Akibatnya, elemen ini tidak akan bertindak sebagai titik acuan untuk blok merah muda yang posisinya `absolute`.

Elemen ini __tidak akan bereaksi__ terhadap sifat-sifat berikut:

- `top`
- `bottom`
- `left`
- `right`
- `z-index`
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example position p-3" id="position-static">
  <p>Ancestor container</p>
  <div class="block block--alpha text-sm leading-tight bg-green-A100 rounded-sm p-4"><strong>Target element<br>position:
      static</strong>
    <div class="block block--pink text-sm leading-tight bg-pink-A100 rounded-sm p-4">Child element<br>position:
      absolute<br>right: 5px<br>top: 5px</div>
  </div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="position: relative;" >}}
Elemen akan tetap berada di aliran alami halaman.

Properti ini juga membuat elemen __diposisikan__: elemen ini akan bertindak sebagai titik acuan untuk blok merah muda
yang posisinya `absolute`.

Elemen ini akan __bereaksi__ terhadap sifat-sifat berikut:

- `top`
- `bottom`
- `left`
- `right`
- `z-index`
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example position p-3" id="position-relative">
  <p>Ancestor container</p>
  <div class="block block--alpha text-sm leading-tight bg-green-A100 rounded-sm p-4"><strong>Target element<br>position:
      relative</strong>
    <div class="block block--pink text-sm leading-tight bg-pink-A100 rounded-sm p-4">Child element<br>position:
      absolute<br>right: 5px<br>top: 5px</div>
  </div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="position: absolute;" >}}
Elemen tidak akan tetap berada di aliran alami halaman. Elemen ini akan memposisikan dirinya menurut elemen induk
terdekat yang posisinya `relative`.

Karena diposisikan, elemen ini akan bertindak sebagai titik acuan untuk blok merah muda yang posisinya `absolute`.

Elemen ini akan __bereaksi__ terhadap sifat-sifat berikut:

- `top`
- `bottom`
- `left`
- `right`
- `z-index`
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example position p-3" id="position-absolute">
  <p>Ancestor container</p>
  <div class="block block--alpha text-sm leading-tight bg-green-A100 rounded-sm p-4"><strong>Target element<br>position:
      absolute<br>left: 0<br>top: 0</strong>
    <div class="block block--pink text-sm leading-tight bg-pink-A100 rounded-sm p-4">Child element<br>right: 5px<br>top:
      5px</div>
  </div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="position: fixed;" >}}
<div class="button-fixed flex mt-4 mb-4">
  <a class="button example-fixed-toggle text-white text-sm py-2 bg-green-A400 rounded-sm hover:no-underline px-6"
    data-slug="position-fixed"></a>
</div>
Elemen tidak akan tetap berada di aliran alami halaman. Elemen ini akan memposisikan dirinya sesuai dengan viewport.

Karena diposisikan, elemen ini akan bertindak sebagai titik acuan untuk blok merah muda yang posisinya `absolute`.

Elemen ini akan __bereaksi__ terhadap sifat-sifat berikut:

- `top`
- `bottom`
- `left`
- `right`
- `z-index`
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example position p-3" id="position-fixed">
  <p>Ancestor container</p>
  <div class="block block--alpha text-sm leading-tight bg-green-A100 rounded-sm p-4"><strong>Target element<br>position:
      fixed<br>right: 0<br>top: 0</strong>
    <div class="block block--pink text-sm leading-tight bg-pink-A100 rounded-sm p-4">Child element<br>position:
      absolute<br>right: 5px<br>top: 5px</div>
  </div>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .position {
    background: #6200EA;
    color: #fff;
    height: 200px;
    position: relative;
  }

  .position .block--alpha {
    margin-top: 1em;
  }

  .position .block--pink {
    position: absolute;
    right: 5px;
    top: 5px;
  }

  #position-relative .block--alpha {
    position: relative;
  }

  #position-absolute .block--alpha {
    left: 0;
    margin-top: 0;
    position: absolute;
    top: 0;
    width: 280px;
  }

  #position-fixed.is-fixed .block--alpha {
    position: fixed;
    z-index: 10000;
  }

  #position-fixed .block--alpha {
    left: auto;
    right: 0;
    margin-top: 0;
    position: absolute;
    top: 0;
    width: 280px;
  }

  .button-fixed .button:before {
    content: "▶ Aktifkan posisi Fixed"
  }

  .button-fixed .button:first-letter {
    margin-right: 1px;
  }

  .button-fixed .button.is-enabled {
    background: red;
  }

  .button-fixed .button.is-enabled:before {
    content: "￭ Nonaktifkan posisi fixed"
  }
</style>

<script>
  // Property: Enable fixed
  var $fixedButtons = document.querySelectorAll('.example-fixed-toggle');

  Array.prototype.forEach.call($fixedButtons, function ($fixedButton, index) {
    var slug = $fixedButton.dataset.slug;
    var $target = document.getElementById(slug);

    $fixedButton.addEventListener('click', function (event) {
      this.classList.toggle('is-enabled');
      $target.classList.toggle('is-fixed');
    });
  });
</script>