---
title: border-right-color
description: border-right-color
date: "2019-11-12T10:34:07+07:00"
slug: border-right-color
css_collections:
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-right-color
---

Properti CSS `border-right-color` digunakan untuk mengatur warna border kanan suatu elemen.

## CSS Syntax
```css
border-right-color: color | transparent | initial | inherit;
```

#### Javascript Syntax
```js
object.style.borderRightColor="blue"
```

{{< property >}}
{{< property-value value="border-right-color: transparent;" >}}
Menerapkan warna __transparan__ ke border kanan. Border kanan masih akan mengambil nilai _spasi_ yang ditentukan oleh
nilai `border-width`.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-right-color border-r-4 border-transparent py-2 px-4"
    id="border-right-color-transparent">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-right-color: red;" >}}
Kamu bisa menggunakan salah satu dari __[140+ nama warna](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-right-color border-r-4 border-solid border-red-500 py-2 px-4"
    id="border-right-color-red">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-right-color: #05ffb0;" >}}
Kamu dapat menggunakan kode warna __heksadesimal__, `rgb()`, `rgba()`, `hsl()`, `hsla()` ...
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-right-color border-r-4 border-solid border-green-A400 py-2 px-4"
    id="border-right-color-05ffb0">Hello world</div>
{{< /property-preview >}}
{{< /property >}}