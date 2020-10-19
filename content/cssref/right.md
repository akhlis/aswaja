---
title: right
description: right
date: "2019-11-12T10:34:07+07:00"
slug: right
css_collections:
- posisi
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/right
---

## CSS Syntax
```css
right: auto | length | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.right="200px"
```
{{< cssref default="auto" inherited="tidak" animatable="ya" version="CSS2" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="right: auto;" >}}
Elemen akan tetap pada posisi aslinya.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example right p-4" id="right-auto">
  <p>Parent container</p>
  <div class="natural">Natural position</div>
  <div class="actual">Actual position</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="right: 80px;" >}}
Jika elemen dalam posisi relatif, elemen akan bergerak ke kanan dengan jumlah yang ditentukan oleh nilai yang tepat.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example right p-4" id="right-80px">
  <p>Parent container</p>
  <div class="natural">Natural position</div>
  <div class="actual">Actual position</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="right: -20px;" >}}
Jika elemen dalam posisi absolut, elemen akan memposisikan dirinya dari kanan induk pertama.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example right relative p-4" id="right--20px">
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

  .right {
    background: #310736;
    height: 200px;
    position: relative;
  }

  .right p {
    color: #fff;
  }

  .right .natural {
    width: 200px;
  }

  .right .actual {
    animation-direction: alternate;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    position: absolute;
    width: 200px;
  }

  #right-auto {
    right: auto;
  }

  #right-auto .actual {
    animation-name: fadeIn;
    transform: translateY(-100%);
  }

  #right-80px .actual {
    animation-name: fadeIn;
    right: 80px;
    position: relative;
    transform: translateY(-100%);
  }

  #right--20px .actual {
    animation-name: fadeIn;
    right: -20px;
    transform: translateY(-100%);
  }
</style>