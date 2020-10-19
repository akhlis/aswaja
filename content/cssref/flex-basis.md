---
title: flex-basis
description: flex-basis
date: "2019-11-12T10:34:07+07:00"
slug: flex-basis
css_collections:
- flexbox
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/flex-basis
caniuse: http://caniuse.com/#feat=flexbox
---

Properti CSS `flex-basis` merupakan sub-properti dari modul layout kotak [Flexbox](/css/flexbox).

Properti ini menentukan ukuran awal item _flex_, sebelum ruang yang tersedia didistribusikan sesuai dengan faktor-faktor
_flex_.

Ketika dihilangkan dari _shortend_ `flex` (singkatan properti flex), nilai yang ditentukan adalah panjang nol.

Nilai _flex-basis_ diatur ke ukuran `auto` elemen sesuai dengan properti ukurannya (`auto` adalah kata kunci otomatis
untuk mengukur elemen berdasarkan isinya).

{{< note >}}
Jika elemen bukan item yang fleksibel, properti `flex-basis` tidak berpengaruh.
{{< /note >}}

## CSS Syntax
```css
flex-basis: number | auto | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.flexBasis="200px"
```

## Attribute Value

{{< property >}}
{{< property-value default="default" value="flex-basis: auto;" >}}
Elemen akan secara otomatis diukur berdasarkan isinya, atau pada nilai `width` dan `height` apa pun jika ditentukan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example flex-basis " id="flex-basis-auto">
  <p class="bg-green-200 py-4 px-3 text-center text-sm">Flexbox item</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="flex-basis: 80px;" >}}
Kamu dapat menentukan nilai __pixel__ atau __(r)em__. Elemen akan membungkus isinya untuk menghindari luapan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example flex-basis " id="flex-basis-80px">
  <p class="block bg-green-200 py-4 px-3 text-center text-sm">Flexbox item</p>
</div>
{{< /property-preview >}}
{{< /property >}}


<style type="text/css">
  .flex-basis {
    background: hsl(0, 0%, 95%);
    display: flex;
    padding: 1em;
    word-break: break-all;
  }

  #flex-basis-auto {
    flex-basis: auto;
  }

  #flex-basis-auto .block {
    flex-basis: auto;
  }

  #flex-basis-80px {
    flex-basis: 80px;
  }

  #flex-basis-80px .block {
    flex-basis: 80px;
  }
</style>