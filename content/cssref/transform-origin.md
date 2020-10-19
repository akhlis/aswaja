---
title: transform-origin
description: transform-origin
date: "2019-11-12T10:34:07+07:00"
slug: transform-origin
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/transform-origin
---

## CSS Syntax
```css
transform-origin: x-axis y-axis z-axis | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.transformOrigin="0 0"
```

{{< cssref default="50% 50% 0" inherited="tidak" animatable="ya" version="CSS3" >}}

## Attribute Value

{{< animation property="transform-origin" >}}

{{< property >}}
{{< property-value default="default" value="transform-origin: 50% 50% 0;" >}}
Asal transformasi berada di tengah elemen.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transform-origin " id="transform-origin-50-50-0">
  <div class="block block--container">
    <p class="block block--alpha text-sm leading-tight bg-green-A100 rounded-sm p-4"><span class="origin"></span>Hello
      world</p>
  </div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transform-origin: 20px 70%;" >}}
Kamu dapat menggunakan 2 nilai:

- nilai pertama adalah sumbu horizontal
- yang kedua adalah sumbu vertikal
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transform-origin " id="transform-origin-20px-70">
  <div class="block block--container">
    <p class="block block--alpha text-sm leading-tight bg-green-A100 rounded-sm p-4"><span class="origin"></span>Hello
      world</p>
  </div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transform-origin: top right;" >}}
Kamu dapat menggunakan kombinasi kata kunci posisi: `center`, `top`, `bottom`, `left` dan `right`.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transform-origin " id="transform-origin-top-right">
  <div class="block block--container">
    <p class="block block--alpha text-sm leading-tight bg-green-A100 rounded-sm p-4"><span class="origin"></span>Hello
      world</p>
  </div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transform-origin: center bottom;" >}}
Saat menggunakan kata kunci, kamu dapat mengubah urutan sumbu, asalkan setiap kata kunci tidak ambigu.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transform-origin " id="transform-origin-center-bottom">
  <div class="block block--container">
    <p class="block block--alpha text-sm leading-tight bg-green-A100 rounded-sm p-4"><span class="origin"></span>Hello
      world</p>
  </div>
</div>
{{< /property-preview >}}
{{< /property >}}

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

  .transform-origin.is-animated .block--alpha {
    animation-name: rotateFull;
  }

  .transform-origin .block {
    height: 100px;
    width: 100px;
  }

  .transform-origin .block--container {
    padding: 0;
    position: relative;
  }

  .transform-origin .block--alpha {
    align-items: center;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    display: flex;
    justify-content: center;
  }

  .transform-origin .origin {
    background: hsl(348, 100%, 61%);
    border-radius: 290486px;
    height: 10px;
    margin: -5px 0 0 -5px;
    position: absolute;
    width: 10px;
  }

  #transform-origin-50-50-0 {
    transform-origin: 50% 50% 0;
  }

  #transform-origin-50-50-0 .origin {
    left: 50%;
    top: 50%;
  }

  #transform-origin-20px-70 {
    transform-origin: 20px 70%;
  }

  #transform-origin-20px-70 .origin {
    left: 20px;
    top: 70%;
  }

  #transform-origin-20px-70 .block--alpha {
    transform-origin: 20px 70%;
  }

  #transform-origin-top-right {
    transform-origin: top right;
  }

  #transform-origin-top-right .origin {
    left: 100%;
    top: 0;
  }

  #transform-origin-top-right .block--alpha {
    transform-origin: top right;
  }

  #transform-origin-center-bottom {
    transform-origin: center bottom;
  }

  #transform-origin-center-bottom .origin {
    left: 50%;
    top: 100%;
  }

  #transform-origin-center-bottom .block--alpha {
    transform-origin: center bottom;
  }
</style>