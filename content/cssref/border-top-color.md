---
title: border-top-color
description: border-top-color
date: "2019-11-12T10:34:07+07:00"
slug: border-top-color
css_collections:
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-top-color
---

Properti CSS `border-top-color` digunakan untuk mengatur warna border atas suatu elemen.

## CSS Syntax
```css
border-top-color: color | transparent | initial | inherit;
```

#### Javascript Syntax
```js
object.style.borderTopColor="blue"
```

{{< property >}}
{{< property-value value="border-top-color: transparent;" >}}
Menerapkan warna __transparan__ ke batas atas. Batas atas masih akan mengambil nilai _spasi_ yang ditentukan oleh nilai
`border-width`.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-top-color border-t-0 border-transparent border-gray-600 py-2 px-4"
    id="border-top-color-transparent">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-top-color: red;" >}}
Kamu bisa menggunakan __[140+ nama warna](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)__
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-top-color border-t-4 border-solid border-red-500 py-2 px-4"
    id="border-top-color-red">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-top-color: #05ffb0;" >}}
Kamu dapat menggunakan kode warna __heksadesimal__, `rgb()`, `rgba()`, `hsl()`, `hsla()`...
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-top-color border-t-4 border-solid border-05ffb0 py-2 px-4"
    id="border-top-color-05ffb0">Hello world</div>
{{< /property-preview >}}
{{< /property >}}