---
title: transform
description: transform
date: "2019-11-12T10:34:07+07:00"
slug: transform
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/transform
---

## Syntax
```css
transform: none | transform-functions | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.transform="rotate(7deg)"
```
{{< cssref default="none" inherited="tidak" animatable="ya" version="CSS3" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="transform: none;" >}}
Menghapus transformasi apa pun.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transform text-sm p-3 lg:p-4" id="transform-none">
  <p class="natural">Natural position</p>
  <p class="actual"></p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transform: translateX(40px);" >}}
Memindahkan elemen pada sumbu __horizontal__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transform text-sm p-3 lg:p-4" id="transform-translatex40px">
  <p class="natural">Natural position</p>
  <p class="actual"></p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transform: translateY(20px);" >}}
Memindahkan elemen pada sumbu __vertikal__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transform text-sm p-3 lg:p-4" id="transform-translatey20px">
  <p class="natural">Natural position</p>
  <p class="actual"></p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transform: translateY(100%);" >}}
Kamu dapat menggunakan nilai __persentase__: persentase itu relatif terhadap elemen itu sendiri, dan bukan sebagai induk.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transform text-sm p-3 lg:p-4" id="transform-translatey100">
  <p class="natural">Natural position</p>
  <p class="actual"></p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transform: translate(20px, -10%);" >}}
Kamu dapat menggunakan `translate()` dengan dua nilai:

- nilai pertama untuk sumbu horizontal
- nilai kedua untuk sumbu vertikal
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transform text-sm p-3 lg:p-4" id="transform-translate20px--10">
  <p class="natural">Natural position</p>
  <p class="actual"></p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transform: scaleX(1.5);" >}}
Menskala elemen pada sumbu __horizontal__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transform text-sm p-3 lg:p-4" id="transform-scalex15">
  <p class="natural">Natural position</p>
  <p class="actual"></p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transform: scaleY(0.4);" >}}
Menskala elemen pada sumbu __vertikal__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transform text-sm p-3 lg:p-4" id="transform-scaley04">
  <p class="natural">Natural position</p>
  <p class="actual"></p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transform: scaleY(-2);" >}}
Kamu dapat menggunakan nilai __negatif__: nilai ini akan membalikkan elemen.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transform text-sm p-3 lg:p-4" id="transform-scaley-2">
  <p class="natural">Natural position</p>
  <p class="actual"></p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transform: scale(0.8, 0.8);" >}}
Kamu dapat menggunakan `scale()` dengan __dua nilai__:

- nilai pertama untuk sumbu __horizontal__
- nilai kedua untuk sumbu __vertikal__

Dengan menggunakan nilai yang sama untuk keduanya, kamu dapat menskala secara proporsional.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transform text-sm p-3 lg:p-4" id="transform-scale08-08">
  <p class="natural">Natural position</p>
  <p class="actual"></p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transform: rotate(45deg);" >}}
Memutar elemen.

Kamu bisa memakai:
- __degrees__ dari `0` ke `360deg`
- __gradians__ dari `0` ke `400grad`
- __radians__ dari `0` ke `2πrad`
- __turns__ dari `0` ke `1turn`
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transform text-sm p-3 lg:p-4" id="transform-rotate45deg">
  <p class="natural">Natural position</p>
  <p class="actual"></p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transform: skewX(15deg);" >}}
Miringkan elemen pada sumbu __horizontal__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transform text-sm p-3 lg:p-4" id="transform-skewx15deg">
  <p class="natural">Natural position</p>
  <p class="actual"></p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transform: skewY(45deg);" >}}
Miringkan elemen pada sumbu __vertikal__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transform text-sm p-3 lg:p-4" id="transform-skewy45deg">
  <p class="natural">Natural position</p>
  <p class="actual"></p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transform: skew(10deg, -20deg);" >}}
Kamu dapat menggunakan `skew()` dengan dua nilai:

- nilai pertama untuk sumbu __horizontal__
- nilai kedua untuk sumbu __vertikal__
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transform text-sm p-3 lg:p-4" id="transform-skew10deg--20deg">
  <p class="natural">Natural position</p>
  <p class="actual"></p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transform: rotate(5deg) scale(1.1, 1.1) translate(-20%, 30px);" >}}
Kamu dapat menggabungkan banyak transformasi dengan memisahkannya dengan spasi.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transform text-sm p-3 lg:p-4" id="transform-rotate5deg-scale11-11-translate-20-30px">
  <p class="natural">Natural position</p>
  <p class="actual"></p>
</div>
{{< /property-preview >}}
{{< /property >}}


<footer class="example__complements">
  <strong>Pilihan Nilai Properti lainnya yaitu</strong>:<br><code class="shorthand"><a
      href="https://developer.mozilla.org/en/docs/Web/CSS/transform#matrix()" target="_blank">matrix()</a></code>
  <code class="shorthand"><a href="https://developer.mozilla.org/en/docs/Web/CSS/transform#matrix3d()"
      target="_blank">matrix3d()</a></code> <code class="shorthand"><a
      href="https://developer.mozilla.org/en/docs/Web/CSS/transform#translateZ()"
      target="_blank">translateZ()</a></code> <code class="shorthand"><a
      href="https://developer.mozilla.org/en/docs/Web/CSS/transform#translate3d()"
      target="_blank">translate3d()</a></code> <code class="shorthand"><a
      href="https://developer.mozilla.org/en/docs/Web/CSS/transform#scaleZ()" target="_blank">scaleZ()</a></code>
  <code class="shorthand"><a href="https://developer.mozilla.org/en/docs/Web/CSS/transform#scale3d()"
      target="_blank">scale3d()</a></code> <code class="shorthand"><a
      href="https://developer.mozilla.org/en/docs/Web/CSS/transform#rotateX()" target="_blank">rotateX()</a></code>
  <code class="shorthand"><a href="https://developer.mozilla.org/en/docs/Web/CSS/transform#rotateY()"
      target="_blank">rotateY()</a></code> <code class="shorthand"><a
      href="https://developer.mozilla.org/en/docs/Web/CSS/transform#rotateZ()" target="_blank">rotateZ()</a></code>
  <code class="shorthand"><a href="https://developer.mozilla.org/en/docs/Web/CSS/transform#rotate3d()"
      target="_blank">rotate3d()</a></code> and <code class="shorthand"><a
      href="https://developer.mozilla.org/en/docs/Web/CSS/transform#perspective()"
      target="_blank">perspective()</a></code>.
</footer>

<style type="text/css">
  .natural,
  .actual {
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    text-align: center;
    border-radius: 3px;
    line-height: 1.2;
    padding: 0.8em 1em;
  }

  .actual {
    text-align: center;
    background: #05ffb0;
    border: 2px solid #05ffb0;
    color: #310736;
  }

  .natural {
    border: 2px dotted #ff4538;
    color: #ff4538;
  }

  .transform {
    display: flex;
  }

  .transform .natural {
    height: 75px;
    position: absolute;
    width: 75px;
  }

  .transform .actual {
    height: 75px;
    position: relative;
    width: 75px;
  }

  #transform-none .actual:before {
    content: "no transform";
  }

  #transform-translatex40px .actual {
    transform: translateX(40px);
  }

  #transform-translatex40px .actual:before {
    content: "translateX";
  }

  #transform-translatey20px .actual {
    transform: translateY(20px);
  }

  #transform-translatey20px .actual:before {
    content: "translateY";
  }

  #transform-translatey100 .actual {
    transform: translateY(100%);
  }

  #transform-translatey100 .actual:before {
    content: "translateY";
  }

  #transform-translate20px--10 .actual {
    transform: translate(20px, -10%);
  }

  #transform-translate20px--10 .actual:before {
    content: "translate";
  }

  #transform-scalex15 .actual {
    transform: scaleX(1.5);
  }

  #transform-scalex15 .actual:before {
    content: "scaleX";
  }

  #transform-scaley04 .actual {
    transform: scaleY(0.4);
  }

  #transform-scaley04 .actual:before {
    content: "scaleY";
  }

  #transform-scaley-2 .actual {
    transform: scaleY(-2);
  }

  #transform-scaley-2 .actual:before {
    content: "scaleY";
  }

  #transform-scale08-08 .actual {
    transform: scale(0.8, 0.8);
  }

  #transform-scale08-08 .actual:before {
    content: "scale";
  }

  #transform-rotate45deg .actual {
    transform: rotate(45deg);
  }

  #transform-rotate45deg .actual:before {
    content: "rotate";
  }

  #transform-skewx15deg .actual {
    transform: skewX(15deg);
  }

  #transform-skewx15deg .actual:before {
    content: "skewX";
  }

  #transform-skewy45deg .actual {
    transform: skewY(45deg);
  }

  #transform-skewy45deg .actual:before {
    content: "skewY";
  }

  #transform-skew10deg--20deg .actual {
    transform: skew(10deg, -20deg);
  }

  #transform-skew10deg--20deg .actual:before {
    content: "skew";
  }

  #transform-rotate5deg-scale11-11-translate-20-30px .actual {
    transform: rotate(5deg) scale(1.1, 1.1) translate(-20%, 30px);
  }

  #transform-rotate5deg-scale11-11-translate-20-30px .actual:before {
    content: "multi";
  }
</style>