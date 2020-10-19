---
title: border-bottom-color
description: border-bottom-color
date: "2019-11-12T10:34:07+07:00"
slug: border-bottom-color
css_collections:
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-color
---

Properti CSS `border-bottom-color` digunakan untuk mengatur warna border bawah elemen.

## CSS Syntax
```css
border-bottom-color: color | transparent | initial | inherit;
```

#### Javascript Syntax
```js
object.style.borderBottomColor="blue"
```

{{< property >}}
{{< property-value value="border-bottom-color: transparent;" >}}
Menerapkan warna <strong> transparan </strong> ke batas bawah. Batas bawah masih akan mengambil nilai <em> spasi </em> yang ditentukan oleh nilai <code> border-width </code>.
{{< /property-value >}}
{{< property-preview >}}
            <div class="property__example border-bottom-color border-b-4 border-solid border-transparent py-2 px-4" id="border-bottom-color-transparent">Hello world
            </div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-bottom-color: red;" >}}
Kamu dapat menggunakan salah satu dari <strong><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value">140+ nama warna</a></strong>.
{{< /property-value >}}
{{< property-preview >}}
            <div class="property__example border-bottom-color border-b-4 border-solid border-red-500 py-2 px-4" id="border-bottom-color-red">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-bottom-color: #05ffb0;" >}}
Kamu dapat menggunakan kode warna <strong>hexadecimal</strong>, <code>rgb()</code>, <code>rgba()</code>, <code>hsl()</code>, <code>hsla()</code>...
{{< /property-value >}}
{{< property-preview >}}
            <div class="property__example border-bottom-color border-b-4 border-solid border-green-A400 py-2 px-4" id="border-bottom-color-05ffb0">Hello world</div>
{{< /property-preview >}}
{{< /property >}}