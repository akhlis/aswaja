---
title: border-right
description: border-right
date: "2019-11-12T10:34:07+07:00"
slug: border-right
css_collections:
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-right
---

Properti CSS `border-right` adalah properti singkatan yang digunakan untuk menentukan lebar, gaya dan warna dari border
kanan suatu elemen.

Atau properti singkatan untuk: `border-right-width`, `border-right-style`, dan `border-right-color`.

Properti `border-right` dapat menerima satu, dua atau tiga argumen sebagai nilai.

Nilai yang dihilangkan akan diatur ke nilai awalnya.

## CSS Syntax
```css
border-right: border-width border-style border-color | initial | inherit;
```

#### Javascript Syntax
```js
object.style.borderRight="5px dotted blue"
```

{{< property >}}
{{< property-value value="border-right: 4px dotted red;" >}}
__Urutannya__ sangat penting:

- lebar
- style
- warna
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-right border-r-4 border-dotted border-red-500 py-2 px-4"
    id="border-right-4px-dotted-red">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-right: 2px solid;" >}}
Hanya _warna_ yang __opsional__. Jika kamu menghilangkannya, warna yang diterapkan akan menjadi warna __teks__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-right border-r-2 border-solid border-gray-700 py-2 px-4"
    id="border-right-2px-solid">Hello world</div>
{{< /property-preview >}}
{{< /property >}}