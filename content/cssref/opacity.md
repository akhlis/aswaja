---
title: opacity
description: opacity
date: "2019-11-12T10:34:07+07:00"
slug: opacity
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/opacity
caniuse: http://caniuse.com/#feat=css-opacity
---

Properti CSS `opacity` digunakan untuk mengontrol tingkat transparansi suatu elemen.

Dengan menggunakan properti ini, kamu bisa mengatur elemen agar sepenuhnya transparan, buram (default), atau tembus.

Untuk menentukan tingkat transparansi elemen, diperlukan nilai `angka` berkisar antara __0__ dan __1__.

Nilai 1 merupakan nilai __default__ yang membuat elemen tersebut sepenuhnya buram.

Sedangkan nilai 0 membuat elemen sepenuhnya menjadi transparan sehingga kamu tidak dapat melihatnya lagi.

Nilai antara 0 dan 1 membuatnya tembus (semi-transparan).

Semakin rendah nilainya dari 1 menjadi 0, elemen akan semakin transparan dan kamu dapat melihat latar belakang atau
elemen yang ada di belakang/dibawahnya.

Properti `opacity` menerapkan opacity yang ditentukan ke elemen secara keseluruhan, termasuk kontennya, daripada
menerapkannya ke setiap keturunan secara individual.

## CSS Syntax
```css
opacity: number | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.opacity="0.5"
```

{{< cssref default="1" inherited="tidak" animatable="ya" version="CSS3" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="opacity: 1;" >}}
Elemen ini sepenuhnya __buram__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example opacity bg-indigo-900 p-4" id="opacity-1">
  <p class="block block--alpha text-sm leading-tight bg-green-A400 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="opacity: 0;" >}}
Elemen ini sepenuhnya __transparan__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example opacity bg-indigo-900 p-4" id="opacity-0">
  <p class="block block--alpha text-sm leading-tight bg-green-A400 opacity-0 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="opacity: 0.25;" >}}
Nilai apa pun antara __0__ dan __1__ akan membuat elemen __semi transparan__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example opacity bg-indigo-900 p-4" id="opacity-025">
  <p class="block block--alpha text-sm leading-tight bg-green-A400 opacity-25 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}