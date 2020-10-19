---
title: overflow-y
description: overflow-y
date: "2019-11-12T10:34:07+07:00"
slug: overflow-y
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/overflow-y
---

Properti `overflow-y` digunakan untuk menentukan apakah konten elemen harus terlihat, terpotong (disembunyikan), atau
apakah akan menambahkan _scroll bar_ vertikal atau tidak ketika konten meluap ke tepi atas dan bawah elemen.

Konten meluap dari elemen secara vertikal ketika elemen memiliki ketinggian yang ditentukan, dan mengandung konten di
dalamnya membutuhkan ruang lebih daripada yang tersedia oleh elemen.

Misalnya, suatu elemen dapat memiliki konten meluap jika memiliki ketinggian yang ditetapkan secara eksplisit, dan
berisi sejumlah teks atau konten lain yang terlalu banyak untuk masuk ke dalam ukuran elemen yang tersedia.

Properti `overflow-y` dapat digunakan untuk menampilkan konten overflow di tepi atas atau bawah, atau menambahkan
_scroll bar_ vertikal ke elemen sehingga konten overflow dapat terlihat pada _scroll_.

Properti overflow-y dapat mengambil salah satu dari empat nilai: `visible` (nilai default), `hidden`, `scroll`, dan
`auto`.

## CSS Syntax
```css
overflow-y: visible | hidden | scroll | auto | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.overflowY="scroll"
```
{{< cssref default="visible" inherited="tidak" animatable="tidak" version="CSS3" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="overflow-y: visible;" >}}
Konten yang meluap terlihat, sedangkan elemen itu sendiri tetap pada ketinggian yang ditentukan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example overflow-y " id="overflow-y-visible">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="overflow-y: hidden;" >}}
Konten yang meluap disembunyikan dan tidak dapat diakses.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example overflow-y " id="overflow-y-hidden">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="overflow-y: scroll;" >}}
Konten yang meluap dapat diakses berkat bilah gulir vertikal.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example overflow-y " id="overflow-y-scroll">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="overflow-y: auto;" >}}
Browser memutuskan apakah akan menampilkan scrollbar vertikal atau tidak.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example overflow-y " id="overflow-y-auto">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .overflow-y .block {
    height: 80px;
    width: 240px;
  }

  #overflow-y-visible .block {
    overflow-y: visible;
  }

  #overflow-y-hidden .block {
    overflow-y: hidden;
  }

  #overflow-y-scroll .block {
    overflow-y: scroll;
  }

  #overflow-y-auto .block {
    overflow-y: auto;
  }
</style>