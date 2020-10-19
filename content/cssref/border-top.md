---
title: border-top
description: border-top
date: "2019-11-12T10:34:07+07:00"
slug: border-top
css_collections:
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-top
---

Properti CSS `border-top` adalah properti singkatan yang digunakan untuk menentukan lebar, gaya, dan warna border atas
suatu elemen.

Atau singkatan dari properti: `border-top-width`, `border-top-style`, dan `border-top-color`.

Properti `border-top` dapat menerima satu, dua atau tiga argumen sebagai nilai.

Nilai yang dihilangkan diatur ke nilai awalnya.

## CSS Syntax
```css
border-top: border-width border-style border-color | initial | inherit;
```

#### Javascript Syntax
```js
object.style.borderTop="3px dashed blue"
```
{{< property >}}
{{< property-value value="border-top: 4px dotted red;" >}}
__Urutan__ sangat penting:

- lebar
- style
- warna
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-top border-t-4 border-dotted border-red-500 py-2 px-4"
    id="border-top-4px-dotted-red">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-top: 2px solid;" >}}
Hanya _warna_ yang __opsional__. Jika kamu menghilangkannya, warna yang diterapkan akan menjadi warna __teks__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-top border-t-4 border-solid border-gray-600 py-2 px-4" id="border-top-2px-solid">
    Hello world</div>
{{< /property-preview >}}
{{< /property >}}