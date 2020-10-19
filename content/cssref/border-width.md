---
title: border-width
description: border-width
date: "2019-11-12T10:34:07+07:00"
slug: border-width
css_collections:
- box-model
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-width
---

Properti CSS `border-width` digunakan untuk mengatur lebar border elemen.

Properti ini merupakan singkatan untuk properti `border-top-width`, `border-right-width`, `border-bottom-width`, `border-left-width`.

Nilai properti `border-width` dapat ditentukan menggunakan satu, dua, tiga, atau empat komponen, dimana nilai komponen dapat secara eksplisit diatur menggunakan nilai `length`, atau dengan menggunakan salah satu dari tiga kata kunci lebar border: `thin`, `medium`, dan `thick`.

Ketika satu nilai digunakan, nilai menentukan lebar border atas, kanan, bawah, dan kiri.

Jika dua nilai digunakan, nilai pertama menentukan lebar border atas dan bawah dan nilai kedua menentukan lebar border kanan dan kiri.

Jika tiga nilai digunakan, yang pertama menentukan lebar border atas, yang kedua menentukan lebar border kanan dan kiri, dan yang ketiga menentukan lebar border bawah.

Jika empat nilai digunakan, nilai pertama, kedua, ketiga, dan keempat menentukan lebar masing-masing border atas, kanan, bawah, dan kiri.

## CSS Syntax
```css
border-width: medium | thin | thick | length | initial | inherit;
```

#### Javascript Syntax
```js
object.style.borderWidth="1px 5px"
```
{{< property >}}
{{< property-value value="border-width: 1px;" >}}
Menentukan lebar __semua__ border dengan 1px.
{{< /property-value >}}
{{< property-preview >}}
            <div class="property__example border-width border border-solid border-gray-600 py-2 px-4" id="border-width-1px">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-width: 2px 0;" >}}
Menentukan border atas dan bawah menjadi 2px, kiri dan kanan ke 0.
{{< /property-value >}}
{{< property-preview >}}
            <div class="property__example border-width border-t-2 border-b-2 border-solid border-gray-600 py-2 px-4" id="border-width-2px-0">Hello world</div>
{{< /property-preview >}}
{{< /property >}}