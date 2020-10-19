---
title: border-left-width
description: border-left-width
date: "2019-11-12T10:34:07+07:00"
slug: border-left-width
css_collections:
- box-model
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-left-width
---

Properti CSS `border-left-width` digunakan untuk mengatur lebar border kiri suatu elemen.

Lebar border dapat ditetapkan secara eksplisit menggunakan nilai `length`, atau dengan menggunakan salah satu dari tiga
kata kunci lebar border: `thin`, `medium`, dan `thick`.

## CSS Syntax
```css
border-left-width: medium | thin | thick | length | initial | inherit;
```

```js
object.style.borderLeftWidth="5px"
```
{{< property >}}
{{< property-value default="default" value="border-left-width: 0;" >}}
Menghapus border kiri.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-left-width border-l-4 border-none py-2 px-4" id="border-left-width-0">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-left-width: 4px;" >}}
Kamu dapat menggunakan nilai-nilai __piksel__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-left-width border-l-4 border-solid border-gray-600 py-2 px-4"
    id="border-left-width-4px">Hello world</div>
{{< /property-preview >}}
{{< /property >}}