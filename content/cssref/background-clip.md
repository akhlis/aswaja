---
title: background-clip
description: background-clip
date: "2019-11-12T10:34:07+07:00"
slug: background-clip
css_collections:
- background
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/background-clip
caniuse: http://caniuse.com/#feat=background-clip
---

Properti CSS `background-clip` diperkenalkan pada CSS3 untuk keperluan pengaturan perilaku kliping untuk latar belakang
elemen.

Ini menetapkan elemen sebagai "area background lukisan".

Properti `background-clip` memungkinkan kamu untuk menentukan apakah background akan dicat ke "kotak konten", "kotak
border", atau "didalam kotak".

Properti ini digunakan bersama dengan properti "background" terkait lainnya, seperti properti `background-color` dan
`background-image`.

## CSS Syntax

```css
background-clip: border-box | padding-box | content-box | initial | inherit;
```
#### Javascript Syntax
```js
object.style.backgroundClip="content-box"
```

{{< property >}}
{{< property-value default="default" value="background-clip: border-box;" >}}
Latar belakang membentang sepenuhnya di seluruh elemen, bahkan <strong> di bawah </strong> perbatasan.
{{< /property-value >}}
{{< property-preview >}}
<div class="bg-teal-A400 border-4 border-dashed border-teal-700 p-8" id="background-clip-border-box">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-clip: padding-box;" >}}
Latar belakang hanya meluas ke <em> tepi </em> perbatasan: itu termasuk padding tetapi <em> tidak </em> perbatasan.
{{< /property-value >}}
{{< property-preview >}}
<div class="bg-teal-A400 border-4 border-dashed border-teal-700 p-8" id="background-clip-padding-box">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-clip: content-box;" >}}
Latar belakang hanya meluas ke tepi konten <em> </em>: itu tidak termasuk padding, atau perbatasan.
{{< /property-value >}}
{{< property-preview >}}
<div class="bg-teal-A400 border-4 border-dashed border-teal-700 p-8" id="background-clip-content-box">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
	#background-clip-border-box {
		background-clip: border-box;
	}

	#background-clip-padding-box {
		background-clip: padding-box;
	}

	#background-clip-content-box {
		background-clip: content-box;
	}
</style>


## Browser Support

Tabel berikut ini menunjukkan tingkat dukungan browser untuk fitur `animasi` yang disediakan oleh
[Caniuse.com]('caniuse.com').

<iframe src="https://caniuse.com/background-img-opts/embed/" width="100%" height="350"></iframe>