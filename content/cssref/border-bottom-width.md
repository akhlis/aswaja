---
title: border-bottom-width
description: border-bottom-width
date: "2019-11-12T10:34:07+07:00"
slug: border-bottom-width
css_collections:
- box-model
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-width
---

Properti CSS `border-bottom-width` digunakan untuk mengatur lebar batas bawah suatu elemen.

Lebar perbatasan dapat ditetapkan secara eksplisit menggunakan nilai `length`, atau dengan menggunakan salah satu dari
tiga kata kunci lebar perbatasan: `thin`, `medium`, `thick`.

## CSS Syntax
```css
border-bottom-width: medium | thin | thick | length | initial | inherit;
```

#### Javascript Syntax
```js
object.style.borderBottomWidth="5px"
```

{{< property >}}
{{< property-value default="default" value="border-bottom-width: 0;" >}}
Menghapus batas bawah.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-bottom-width border-b-0 border-gray-700 py-2 px-4" id="border-bottom-width-0">
    Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-bottom-width: 4px;" >}}
Kamu dapat menggunakan nilai piksel.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-bottom-width border-b-4 border-gray-700 py-2 px-4" id="border-bottom-width-4px">
    Hello world</div>
{{< /property-preview >}}
{{< /property >}}