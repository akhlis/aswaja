---
title: background-color
description: background-color
date: "2019-11-12T10:34:07+07:00"
slug: background-color
css_collections:
- background
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/background-color
caniuse: http://caniuse.com/#feat=background-color
---

Properti `background-color` digunakan untuk mengatur latar belakang suatu elemen.

Properti ini menetapkan warna latar belakang menggunakan nilai `color`.

Elemen ini juga dapat memiliki satu atau beberapa gambar latar belakang yang diatur menggunakan properti gambar latar
belakang.

Warna yang diatur dengan `background-color` diambil di belakang gambar latar belakang apa pun.

Jika satu gambar latar belakang diatur dan gambar tersebut ternyata tidak valid, maka gambar latar belakang akan
terlihat.

Warna latar belakang terpotong sesuai dengan nilai `background-clip` yang terkait dengan gambar latar paling bawah.

Terkadang, bahkan jika gambar latar belakang yang valid diatur, warnanya masih dapat terlihat jika gambar latar tidak
sepenuhnya buram, seperti jika kamu menggunakan gambar dengan area yang sepenuhnya transparan (gambar dengan saluran
alfa).

## CSS Syntax
```css
background-color: color | transparent | initial | inherit;
```

#### Javascript Syntax
```js
object.style.backgroundColor="#00FF00"
```

{{< property >}}
{{< property-value default="default" value="background-color: transparent;" >}}
Secara default, warna latar adalah <strong> transparan </strong>, jadi pada dasarnya <strong> tidak ada </strong> warna
latar.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-color text-gray-700 flex items-center justify-center text-center h-75px"
	id="background-color-transparent">Hello World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-color: red;" >}}
Kamu bisa menggunakan salah satu dari <strong><a
		href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value">140+ nama warna</a></strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-color text-gray-700 flex items-center justify-center text-center h-75px"
	id="background-color-red">Hello World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-color: #05ffb0;" >}}
Kamu dapat menggunakan kode warna <strong> heksadesimal </strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-color text-gray-700 flex items-center justify-center text-center h-75px"
	id="background-color-05ffb0">Hello World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-color: rgb(50, 115, 220);" >}}
Kamu dapat menggunakan <strong> kode warna rgb() </strong>:

- nilai pertama adalah untuk `red`
- nilai kedua adalah untuk `green`
- nilai ketiga adalah untuk `blue`

Masing-masing dari mereka dapat memiliki nilai antara <strong> 0 </strong> dan <strong> 255 </strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-color text-gray-700 flex items-center justify-center text-center h-75px"
	id="background-color-rgb50-115-220">Hello World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-color: rgba(50, 115, 220, 0.3);" >}}
Kamu dapat menggunakan <strong> kode warna rgba() </strong>:

- 3 nilai pertama adalah untuk `rgb`
- nilai ke-4 adalah untuk saluran `alpha` dan mendefinisikan opacity warna
- nilai ketiga adalah untuk `blue`

Nilai alfa dapat berubah dari nol <strong> 0 </strong> (transparan) menjadi satu <strong> 1 </strong> (buram).
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-color text-gray-700 flex items-center justify-center text-center h-75px"
	id="background-color-rgba50-115-220-03">Hello World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-color: hsl(14, 100%, 53%);" >}}
Anda dapat menggunakan <strong> kode warna hsl() </strong>:

- nilai pertama adalah untuk <code> hue </code> dan dapat beralih dari <strong> 0 </strong> ke <strong> 359 </strong>
- nilai kedua adalah untuk <code> saturation </code> dan beralih dari <strong> 0% </strong> ke <strong> 100% </strong>
- nilai ketiga adalah untuk <code> luminosity </code> dan beralih dari <strong> 0% </strong> ke <strong> 100% </strong>
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-color text-gray-700 flex items-center justify-center text-center h-75px"
	id="background-color-hsl14-100-53">Hello World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-color: hsla(14, 100%, 53%, 0.6);" >}}
Kamu dapat menggunakan <strong> kode warna hsl() </strong>:

- 3 nilai pertama adalah untuk <code> hsl </code>
- nilai ke-4 adalah untuk saluran <code> alpha </code> dan mendefinisikan opacity warna

Nilai alfa dapat berubah dari nol <strong> 0 </strong> (transparan) menjadi satu <strong> 1 </strong> (buram).
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-color text-gray-700 flex items-center justify-center text-center h-75px"
	id="background-color-hsla14-100-53-06">Hello World</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
	#background-color-transparent {
		background-color: transparent;
	}

	#background-color-red {
		background-color: red;
	}

	#background-color-05ffb0 {
		background-color: #05ffb0;
	}

	#background-color-rgb50-115-220 {
		background-color: rgb(50, 115, 220);
	}

	#background-color-rgba50-115-220-03 {
		background-color: rgba(50, 115, 220, 0.3);
	}

	#background-color-hsl14-100-53 {
		background-color: hsl(14, 100%, 53%);
	}

	#background-color-hsla14-100-53-06 {
		background-color: hsla(14, 100%, 53%, 0.6);
	}
</style>