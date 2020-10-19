---
title: border-left
description: border-left
date: "2019-11-12T10:34:07+07:00"
slug: border-left
css_collections:
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-left
---

Properti CSS `border-left` adalah singkatan dari properti yang digunakan untuk menentukan lebar, style, dan warna border
kiri elemen.

Atau singkatan dari properti: `border-left-width`, `border-left-style`, dan `border-left-color`.

Properti `border-left` dapat menerima satu, dua, atau argumen sebagai nilai. Nilai yang dihilangkan akan diatur ke nilai
awalnya.

## CSS Syntax
```css
border-left: border-width border-style border-color | initial | inherit;
```

#### Javascript Syntax
```js
object.style.borderLeft="3px dotted blue"
```

{{< property >}}
{{< property-value value="border-left: 4px dotted red;" >}}
__Urutan__ itu penting:

- lebar
- style
- warna
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-left border-l-4 border-dotted border-red-500 py-2 px-4"
    id="border-left-4px-dotted-red">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-left: 2px solid;" >}}
Hanya _warna_ yang __opsional__. Jika kamu menghilangkannya, warna yang diterapkan akan menjadi warna __teks__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-left border-l-2 border-solid border-red-500 py-2 px-4" id="border-left-2px-solid">
    Hello world</div>
{{< /property-preview >}}
{{< /property >}}