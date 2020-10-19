---
title: outline-width
description: outline-width
date: "2019-11-12T10:34:07+07:00"
slug: outline-width
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/outline-width
---

Properti `outline-width` digunakan untuk mengatur lebar outline elemen.

_Outline_ adalah garis yang digambar di luar batas elemen untuk membuatnya menonjol di halaman web.

Biasanya digunakan untuk alasan aksesibilitas, dan dapat digunakan untuk tujuan dekorasi.

## CSS Syntax
```css
outline-width: medium | thin | thick | length | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.outlineWidth="12px"
```
{{< cssref default="medium" inherited="tidak" animatable="ya" version="CSS2" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="outline-width: medium;" >}}
Menentukan lebar semua garis besar ke sedang.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example outline-width p-4" id="outline-width-medium">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="outline-width: 1px;" >}}
Menentukan lebar semua garis untuk 1px.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example outline-width p-4" id="outline-width-1px">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .outline-width {
    outline-style: solid;
  }

  #outline-width-medium {
    outline-width: medium;
  }

  #outline-width-1px {
    outline-width: 1px;
  }
</style>