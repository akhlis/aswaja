---
title: pointer-events
description: pointer-events
date: "2019-11-12T10:34:07+07:00"
slug: pointer-events
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/pointer-events
---

Properti `pointer-events` digunakan untuk mengontrol dalam kondisi apa elemen grafis tertentu dapat menjadi target dari
peristiwa pointer.

Properti `pointer-events` dapat memiliki banyak nilai yang berlaku untuk elemen SVG, tetapi hanya tiga dari nilai ini
yang berlaku untuk elemen HTML.

Ketika `pointer-events` digunakan pada elemen-elemen HTML, properti ini dapat menentukan apakah suatu elemen dapat
merespon atau tidak peristiwa mouse.

Properti ini dapat digunakan untuk mencegah klik, status(status CSS aktif, fokus, dan hover), dan tindakan kursor.

Kamu dapat meminta elemen merespon peristiwa pointer (`auto`), atau mencegahnya melakukan hal itu (`none`).

Jika kamu mencegahnya merespon peristiwa penunjuk, elemen yang di bawahnya akan menjadi target dari peristiwa ini.

Jika kamu mengklik elemen tersebut, elemen di bawahnya akan menerima event klik itu.

Hal yang sama berlaku untuk kursor dan tindakan kursor lainnya.

Misalnya, kamu akan dapat memilih teks dalam elemen yang diposisikan di bawah elemen dengan `pointer-events: none`.

## CSS Syntax
```css
pointer-events: auto | none;
```

#### JavaScript Syntax
```js
object.style.pointerEvents="none"
```
{{< cssref default="auto" inherited="ya" animatable="tidak" version="CSS3" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="pointer-events: auto;" >}}
Elemen bereaksi terhadap peristiwa pointer, seperti: `:hover` (mengarahkan) atau `click`.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example pointer-events bg-grey-100 p-4" id="pointer-events-auto">
  <div class="block block--container">
    <p class="block block--alpha text-sm leading-tight bg-green-A400 rounded-sm p-4">Hover me</p>Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Etiam
    semper diam at erat pulvinar, at pulvinar felis blandit.
  </div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="pointer-events: none;" >}}
Elemen tidak bereaksi terhadap peristiwa penunjuk, seperti: `:hover` atau `click`. Akibatnya, elemen yang ada di belakang dapat diakses.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example pointer-events bg-grey-100 p-4" id="pointer-events-none">
  <div class="block block--container">
    <p class="block block--alpha text-sm leading-tight bg-green-A400 rounded-sm p-4">Hover me</p>Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Etiam
    semper diam at erat pulvinar, at pulvinar felis blandit.
  </div>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .pointer-events .block--container {
    cursor: default;
    position: relative;
  }

  .pointer-events .block--alpha {
    cursor: pointer;
    opacity: 0.7;
    padding: 0.4em 0.5em;
    position: absolute;
  }

  .pointer-events .block--alpha:hover {
    background: #310736;
    color: #fff;
    opacity: 1;
  }

  #pointer-events-auto {
    pointer-events: auto;
  }

  #pointer-events-none {
    pointer-events: none;
  }

  #pointer-events-none .block {
    pointer-events: none;
  }
</style>