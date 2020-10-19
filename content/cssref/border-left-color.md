---
title: border-left-color
description: border-left-color
date: "2019-11-12T10:34:07+07:00"
slug: border-left-color
css_collections:
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-left-color
---

Properti CSS `border-left-color` digunakan untuk mengatur warna border kiri suatu elemen.

## CSS Syntax
```css
border-left-color: color | transparent | initial | inherit;
```

#### Javascript Syntax
```js
object.style.borderLeftColor="blue"
```

{{< property >}}
{{< property-value value="border-left-color: transparent;" >}}
Menerapkan warna __transparan__ ke border kiri. Border kiri masih akan mengambil nilai _spasi_ yang ditentukan oleh
nilai `border-width`.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-left-color " id="border-left-color-transparent">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-left-color: red;" >}}
Kamu bisa menggunakan salah satu dari __[140+ nama
warna](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-left-color " id="border-left-color-red">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-left-color: #05ffb0;" >}}
Kamu dapat menggunakan kode warna __heksadesimal__, `rgb()`, `rgba()`, `hsl()`, `hsla()`...
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-left-color " id="border-left-color-05ffb0">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
    .border-left-color {
        border-left-style: solid;
        border-left-width: 4px;
        padding: 0.5em 1em;
    }

    #border-left-color-transparent {
        border-left-color: transparent;
    }

    #border-left-color-red {
        border-left-color: red;
    }

    #border-left-color-05ffb0 {
        border-left-color: #05ffb0;
    }
</style>