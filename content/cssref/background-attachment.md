---
title: background-attachment
description: background-attachment
date: "2019-11-12T10:34:07+07:00"
slug: background-attachment
css_collections:
- background
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/background-attachment
caniuse: http://caniuse.com/#feat=background-attachment
---

Properti CSS `background-attachment` menetapkan apakah posisi gambar background tetap (_fixed_) dalam _viewport_, atau
menggulir dengan blok yang mengandungnya.

## CSS Syntax
```css
background-attachment: scroll | fixed | local | initial | inherit;
```

#### Javascript Syntax
```js
object.style.backgroundAttachment="fixed"
```

## Value

Properti `background-attachment` ditentukan dengan salah satu nilai kata kunci dari daftar di bawah ini.

{{< property >}}
{{< property-value default="default" value="background-attachment: scroll;" >}}
Gambar latar belakang akan bergulir dengan halaman. Itu juga akan memposisikan dan mengubah ukurannya sendiri sesuai
dengan elemen yang diterapkannya.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-attachment w-full h-200px bg-scroll bg-center bg-cover overflow-y-scroll p-4"
	id="background-attachment-scroll" style="background-image:url('/images/cssref/koala.jpeg');">
	<p class="bg-white py-2 px-4">Hello world</p>
	<div class="h-64"></div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-attachment: local;" >}}
Gambar latar belakang akan bergulir dengan isi elemen.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-attachment w-full h-200px bg-local bg-center bg-cover overflow-y-scroll p-4"
	id="background-attachment-local" style="background-image:url('/images/cssref/koala.jpeg');">
	<p class="bg-white py-2 px-4">Hello world</p>
	<div class="h-64"></div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-attachment: fixed;" >}}
Gambar latar belakang <em> tidak </em> akan menggulir dengan halaman, dan tetap diposisikan sesuai dengan viewport. Ini
juga akan memposisikan dan mengubah ukuran dirinya sesuai dengan viewport. Akibatnya, gambar latar belakang mungkin
hanya akan terlihat sebagian.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example relative background-attachment w-full h-200px bg-fixed bg-center bg-auto overflow-y-scroll p-4"
	id="background-attachment-fixed" style="background-image:url('/images/cssref/koala.jpeg');">
	<p class="bg-white py-2 px-4">Hello world</p>
	<div class="h-64"></div>
</div>
{{< /property-preview >}}
{{< /property >}}