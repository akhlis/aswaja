---
title: top
description: top
date: "2019-11-12T10:34:07+07:00"
slug: top
css_collections:
- posisi
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/top
---

## CSS Syntax
```css
top: auto | length | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.top="100px"
```
{{< cssref default="auto" inherited="tidak" animatable="ya" version="CSS2" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="top: auto;" >}}
Elemen akan tetap pada posisi aslinya.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example top relative p-3 lg:p-4" id="top-auto">
  <p>Parent container</p>
  <div class="natural">Natural position</div>
  <div class="actual">Actual position</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="top: 20px;" >}}
Jika elemen dalam posisi __relative__, elemen akan bergerak ke bawah dengan jumlah yang ditentukan oleh nilai `top`.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example top relative p-3 lg:p-4" id="top-20px">
  <p>Parent container</p>
  <div class="natural">Natural position</div>
  <div class="actual">Actual position</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="top: 0;" >}}
Jika elemen dalam posisi __absolute__, elemen akan memposisikan dirinya dari atas induk yang diposisikan pertama.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example top relative p-3 lg:p-4" id="top-0">
  <p>Parent container</p>
  <div class="natural">Natural position</div>
  <div class="actual">Actual position</div>
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
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
    background: #05ffb0;
    border: 2px solid #05ffb0;
    color: #310736;
  }

  .natural {
    border: 2px dotted #ff4538;
    color: #ff4538;
  }

  .top {
    background: #310736;
    height: 200px;
    position: relative;
  }

  .top p {
    color: #fff;
  }

  .top .natural {
    width: 200px;
  }

  .top .actual {
    animation-direction: alternate;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    position: absolute;
    width: 200px;
  }

  #top-auto {
    top: auto;
  }

  #top-auto .actual {
    animation-name: fadeIn;
    transform: translateY(-100%);
  }

  #top-20px {
    top: 20px;
  }

  #top-20px .actual {
    animation-name: fadeIn;
    position: relative;
    top: 20px;
    transform: translateY(-100%);
  }

  #top-0 {
    top: 0;
  }

  #top-0 .actual {
    top: 0;
  }
</style>