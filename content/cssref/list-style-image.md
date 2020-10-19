---
title: list-style-image
description: list-style-image
date: "2019-11-12T10:34:07+07:00"
slug: list-style-image
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/list-style-image
---

Properti CSS `list-style-image` digunakan untuk menentukan gambar yang akan digunakan sebagai penanda (bullet) untuk
item daftar atau elemen dengan `display: list-item`.

Ketika gambar tersedia, gambar tersebut akan menggantikan set penanda menggunakan properti `list-style-type`.

## CSS Syntax
```css
list-style-image: none | url | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.listStyleImage="url('smiley.gif')"
```

{{< cssref default="none" inherited="ya" animatable="tidak" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="list-style-image: none;" >}}
Item daftar akan menggunakan poin-poin yang ditentukan oleh nilai `list-style-type`, yang secara default adalah __disk__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example list-style-image p-4" id="list-style-image-none">
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="list-style-image: url(/images/list-style-image.png);" >}}
Item daftar akan menggunakan gambar yang terletak di URL yang ditentukan sebagai titik poin mereka.

Gambar tidak dapat diubah ukurannya.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example list-style-image p-4" id="list-style-image-urlimageslist-style-imagepng">
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
</div>
{{< /property-preview >}}
{{< /property >}}


<style type="text/css">
  .list-style-image ul {
    list-style-type: disc;
    margin-left: 1em;
  }

  #list-style-image-none {
    list-style-image: none;
  }

  #list-style-image-urlimageslist-style-imagepng {
    list-style-image: url(/images/cssref/list-style-image.png);
  }

  #list-style-image-urlimageslist-style-imagepng ul {
    list-style-image: url(/images/cssref/list-style-image.png);
  }
</style>