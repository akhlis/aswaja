---
title: align-content
description: align-content
date: "2019-11-18T10:34:07+07:00"
slug: align-content
css_collections:
- flexbox
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/align-content
---

Properti `align-content` merupakan bagian sub-property dari module [Flexible Box](/css-flexbox).

Properti ini mengontrol penyelarasan kotak konten sepanjang sumbu silang/blok di dalam kotak kontennya.

Penyelarasan ini mirip dengan bagaimana `justify-content` menyelaraskan item individual. Namun `align-content`
menyelaraskan konten seluruh baris.

Properti `align-content` meluruskan garis fleksibel dalam wadah fleksibel multi-garis ketika ada ruang tambahan di sumbu
silang.

Properti ini hanya berpengaruh jika ada beberapa baris item flexbox/grid.

Untuk membuat container fleksibel multi-baris, terapkan property `flex-wrap: wrap` atau `flex-wrap: wrap-reverse`.

## Syntax

```css {hl_lines=[5]}
align-content: stretch | center | flex-start | flex-end | space-between | space-around | initial | inherit;

/* Default value */
.flex-container {
align-content: stretch;
}
```

Javascript Syntax
```js
object.style.alignContent="center"
```

{{< property >}}
{{< property-value default="default" value="align-content: stretch;" >}}
Setiap baris akan direntangkan hingga <em> mengisi </em> ruang yang tersisa.

Pada contoh ini, tinggi wadahnya <code> 300px </code>. Semua tinggi kotak <code> 50px </code>, kotak yang kedua
tingginya <code> 100px </code>.

- Baris pertama tingginya <strong> 100px </strong>
- Baris kedua tingginya <strong> 50px </strong>
- Ruang tersisa tingginya <strong> 150px </strong>

Ruang yang tersisa ini didistribusikan secara merata di antara dua garis:

- Baris pertama sekarang tingginya <strong> 175px </strong>
- Baris kedua sekarang tingginya <strong> 125px </strong>
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example relative align-content flex flex-wrap content-stretch bg-gray-200 h-300px p-0"
	id="align-content-stretch">
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		1</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-100px m-2px">
		2</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		3</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		4</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		5</div>
	<div class="h-175px absolute top-0 right-0 left-0 border-2 border-solid border-red-500 rounded-sm z-10"><span
			class="absolute top-0 left-0 text-xs text-white bg-red-500 py-2px px-5px">Baris Pertama</span></div>
	<div class="h-125px absolute top-175px right-0 left-0 border-2 border-solid border-green-A400 rounded-sm z-10"><span
			class="absolute top-0 left-0 text-xs text-white bg-green-A400 py-2px px-5px">Baris Kedua</span></div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="align-content: flex-start;" >}}
Setiap baris hanya akan mengisi ruang yang dibutuhkan <em> </em>. Mereka semua akan bergerak menuju <strong> awal
</strong> dari poros silang kotak fleksibel/grid.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example relative align-content flex flex-wrap content-start bg-gray-200 h-300px p-0"
	id="align-content-flex-start">
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		1</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-100px m-2px">
		2</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		3</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		4</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		5</div>
	<div class="h-104px absolute top-0 right-0 left-0 border-2 border-solid border-red-500 rounded-sm z-10"><span
			class="absolute top-0 left-0 text-xs text-white bg-red-500 py-2px px-5px">Baris Pertama</span></div>
	<div class="h-54px absolute top-104px right-0 left-0 border-2 border-solid border-green-A400 rounded-sm z-10"><span
			class="absolute top-0 left-0 text-xs text-white bg-green-A400 py-2px px-5px">Baris Kedua</span></div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="align-content: flex-end;" >}}
Setiap baris hanya akan mengisi ruang yang dibutuhkan <em> </em>. Mereka semua akan bergerak menuju <strong> akhir
</strong> dari poros silang kotak fleksibel/grid.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example relative align-content flex flex-wrap content-end bg-gray-200 h-300px p-0"
	id="align-content-flex-end">
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		1</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-100px m-2px">
		2</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		3</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		4</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		5</div>
	<div class="h-104px absolute top-142px right-0 left-0 border-2 border-solid border-red-500 rounded-sm z-10"><span
			class="absolute top-0 left-0 text-xs text-white bg-red-500 py-2px px-5px">Baris Pertama</span></div>
	<div class="h-54px absolute top-246px right-0 left-0 border-2 border-solid border-green-A400 rounded-sm z-10"><span
			class="absolute top-0 left-0 text-xs text-white bg-green-A400 py-2px px-5px">Baris Kedua</span></div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="align-content: center;" >}}
Setiap baris hanya akan mengisi ruang yang dibutuhkan <em> </em>. Mereka semua akan bergerak menuju ke <strong> tengah
</strong> dari sumbu silang flexbox/grid.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example relative align-content flex flex-wrap content-center bg-gray-200 h-300px p-0"
	id="align-content-center">
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		1</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-100px m-2px">
		2</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		3</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		4</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		5</div>
	<div class="h-104px absolute top-71px right-0 left-0 border-2 border-solid border-red-500 rounded-sm z-10"><span
			class="absolute top-0 left-0 text-xs text-white bg-red-500 py-2px px-5px">Baris Pertama</span></div>
	<div class="h-54px absolute top-175px right-0 left-0 border-2 border-solid border-green-A400 rounded-sm z-10"><span
			class="absolute top-0 left-0 text-xs text-white bg-green-A400 py-2px px-5px">Baris Kedua</span></div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="align-content: space-between;" >}}
Setiap baris hanya akan mengisi ruang yang dibutuhkan <em> </em>. Ruang <em> tersisa </em> akan muncul <strong> antara
</strong> kedua baris.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example relative align-content flex flex-wrap content-between bg-gray-200 h-300px p-0"
	id="align-content-space-between">
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		1</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-100px m-2px">
		2</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		3</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		4</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		5</div>
	<div class="h-104px absolute top-0 right-0 left-0 border-2 border-solid border-red-500 rounded-sm z-10"><span
			class="absolute top-0 left-0 text-xs text-white bg-red-500 py-2px px-5px">Baris Pertama</span></div>
	<div class="h-54px absolute top-246px right-0 left-0 border-2 border-solid border-green-A400 rounded-sm z-10"><span
			class="absolute top-0 left-0 text-xs text-white bg-green-A400 py-2px px-5px">Baris Kedua</span></div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="align-content: space-around;" >}}
Setiap baris hanya akan mengisi ruang yang dibutuhkan <em> </em>. Ruang <em> tersisa </em> akan didistribusikan secara
merata <strong> di sekitar </strong> baris: sebelum baris pertama, antara keduanya, dan setelah yang terakhir.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example relative align-content flex flex-wrap content-around bg-gray-200 h-300px p-0"
	id="align-content-space-around">
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		1</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-100px m-2px">
		2</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		3</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		4</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-30pr h-50px m-2px">
		5</div>
	<div class="h-104px absolute top-36px right-0 left-0 border-2 border-solid border-red-500 rounded-sm z-10"><span
			class="absolute top-0 left-0 text-xs text-white bg-red-500 py-2px px-5px">Baris Pertama</span></div>
	<div class="h-54px absolute top-211px right-0 left-0 border-2 border-solid border-green-A400 rounded-sm z-10"><span
			class="absolute top-0 left-0 text-xs text-white bg-green-A400 py-2px px-5px">Baris Kedua</span></div>
</div>
{{< /property-preview >}}
{{< /property >}}