---
title: bottom
description: bottom
date: "2019-11-12T10:34:07+07:00"
slug: bottom
css_collections:
- posisi
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/bottom
---

Properti CSS `bottom` adalah properti offset yang digunakan untuk menentukan offset bawah elemen yang diposisikan
sehubungan dengan konteks penentuan posisi.

Properti ini merupakan salah satu properti _offset_ seperti [right](/cssref/right/), [top](/cssref/top/), dan
[left](/cssref/left/).

Properti offset digunakan untuk menentukan posisi yang tepat dari elemen yang diposisikan dan tidak berpengaruh pada
elemen yang tidak diposisikan (statis).

Untuk menggunakan properti ini, elemen harus memiliki nilai posisi selain default statis.

Properti `bottom` menentukan seberapa jauh tepi margin bawah elemen yang diposisikan benar-benar diimbangi di atas (atau
di bawah) tepi bawah konteks posisi elemen, yang biasanya berupa blok yang berisi.

Untuk elemen yang relatif diposisikan, offset terkait dengan tepi bawah elemen itu sendiri.

Untuk elemen `fixed` dan `sticky`, konteks posisinya yaitu viewport.

Kamu harus membaca properti [position](/cssref/position/) untuk mengetahui detail tentang cara memilih posisi dan cara
menggunakan properti offset diatas.

## CSS Syntax
```css
bottom: auto | length | initial | inherit;
```

#### Javascript Syntax
```js
object.style.bottom="10px"
```
{{< property >}}
{{< property-value default="default" value="bottom: auto;" >}}
Elemen akan tetap di posisi __natural__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example bottom " id="bottom-auto">
  <p>Parent container</p>
  <div class="natural">Natural position</div>
  <div class="actual">Actual position</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="bottom: 20px;" >}}
Jika elemen berada di posisi __relatif__, elemen akan bergerak _ke atas_ dengan jumlah yang ditentukan oleh nilai
__terbawah__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example bottom " id="bottom-20px">
  <p>Parent container</p>
  <div class="natural">Natural position</div>
  <div class="actual">Actual position</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="bottom: 0;" >}}
Jika elemen berada di posisi __absolute__, elemen akan memposisikan dirinya dari _bawah_ dari posisi elemen induk
pertama.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example bottom " id="bottom-0">
  <p>Parent container</p>
  <div class="natural">Natural position</div>
  <div class="actual">Actual position</div>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .bottom {
    background: #310736;
    height: 200px;
    position: relative;
    padding: 1em 1.5em;
  }

  .bottom p {
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

  .bottom .natural {
    width: 200px;
  }

  .bottom .actual {
    animation-direction: alternate;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    position: absolute;
    width: 200px;
  }

  #bottom-auto {
    bottom: auto;
  }

  #bottom-auto .actual {
    animation-name: fadeIn;
    transform: translateY(-100%);
  }

  #bottom-20px {
    bottom: 20px;
  }

  #bottom-20px .actual {
    animation-name: fadeIn;
    bottom: 20px;
    position: relative;
    transform: translateY(-100%);
  }

  #bottom-0 {
    bottom: 0;
  }

  #bottom-0 .actual {
    bottom: 0;
  }
</style>