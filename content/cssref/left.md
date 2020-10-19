---
title: left
description: left
date: "2019-11-12T10:34:07+07:00"
slug: left
css_collections:
- posisi
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/left
---

Properti CSS `left` adalah properti offset yang digunakan untuk menentukan offset kiri elemen yang diposisikan
sehubungan dengan konteks penentuan posisi.

Properti ini merupakan salah satu properti _offset_ seperti [right](/cssref/right/), [top](/cssref/top/), dan
[bottom](/cssref/bottom/).

Properti offset digunakan untuk menentukan posisi yang tepat dari elemen yang diposisikan dan tidak berpengaruh pada
elemen yang tidak diposisikan (statis).

Untuk menggunakan properti ini, elemen harus memiliki nilai posisi selain __default statis__.

Properti `left` menentukan seberapa jauh tepi margin kiri elemen yang diposisikan benar-benar diimbangi relatif terhadap
tepi kiri konteks pemosisian elemen, yang biasanya merupakan blok yang mengandungnya.

Untuk elemen yang relatif diposisikan, offset terkait dengan tepi kiri elemen itu sendiri.

Untuk elemen `fixed` dan `sticky`, konteks posisinya yaitu viewport.

Kamu harus membaca properti [position](/cssref/position/) untuk mengetahui detail tentang cara memilih posisi dan cara
menggunakan properti offset diatas.

## CSS Syntax
```css
left: auto | length | initial | inherit;
```

#### Javascript Syntax
```js
object.style.left="100px"
```
{{< cssref default="auto" inherited="tidak" animatable="ya" version="CSS2" >}}

{{< property >}}
{{< property-value default="default" value="left: auto;" >}}
Elemen akan tetap di posisi __natural__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example left p-4" id="left-auto">
  <p>Parent container</p>
  <div class="natural">Natural position</div>
  <div class="actual">Actual position</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="left: 80px;" >}}
Jika elemen dalam posisi relatif, elemen akan bergerak ke kiri dengan jumlah yang ditentukan oleh nilai kiri.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example left p-4" id="left-80px">
  <p>Parent container</p>
  <div class="natural">Natural position</div>
  <div class="actual">Actual position</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="left: -20px;" >}}
Jika elemen dalam posisi absolut, elemen akan memposisikan dirinya dari kiri leluhur pertama.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example left p-4" id="left--20px">
  <p>Parent container</p>
  <div class="natural">Natural position</div>
  <div class="actual">Actual position</div>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .left {
    background: #310736;
    height: 200px;
    position: relative;
  }

  .left p {
    color: #fff;
  }

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

  .left .natural {
    width: 200px;
  }

  .left .actual {
    animation-direction: alternate;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    position: absolute;
    width: 200px;
  }

  #left-auto {
    left: auto;
  }

  #left-auto .actual {
    animation-name: fadeIn;
    transform: translateY(-100%);
  }

  #left-80px .actual {
    animation-name: fadeIn;
    left: 80px;
    position: relative;
    transform: translateY(-100%);
  }

  #left--20px .actual {
    animation-name: fadeIn;
    left: -20px;
    transform: translateY(-100%);
  }
</style>