---
title: border-top-width
description: border-top-width
date: "2019-11-12T10:34:07+07:00"
slug: border-top-width
css_collections:
- box-model
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-top-width
---

Properti CSS `border-top-width` digunakan untuk mengatur lebar border atas suatu elemen.

Lebar border dapat ditetapkan secara eksplisit menggunakan nilai `length`, atau dengan menggunakan salah satu dari
tiga kata kunci lebar border: `thin`, `medium`, dan `thick`.

## CSS Syntax
```css
border-top-width: medium | thin | thick | length | initial | inherit;
```

#### Javascript Syntax
```js
object.style.borderTopWidth="5px"
```

{{< property >}}
{{< property-value default="default" value="border-top-width: 0;" >}}
Menghapus border atas.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-top-width border-t-0 border-solid border-gray-600 py-2 px-4"
    id="border-top-width-0">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-top-width: 4px;" >}}
Kamu dapat menggunakan nilai-nilai __piksel__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-top-width border-t-4 border-solid border-gray-600 py-2 px-4"
    id="border-top-width-4px">Hello world</div>
{{< /property-preview >}}
{{< /property >}}