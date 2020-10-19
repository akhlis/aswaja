---
title: align-self
description: align-self
date: "2019-11-18T10:34:07+07:00"
slug: align-self
css_collections:
- flexbox
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/align-self
---
Properti `align-self` merupakan bagian sub-property dari module [Flexible Box](/css-flexbox).

Properti `align-self` menentukan perataan pada item yang dipilih secara individual di dalam wadah fleksibel (flexbox
container).

Properti ini dapat digunakan untuk mengesampingkan segala penyelarasan item kotak yang telah ditetapkan pada tingkat
_container_ menggunakan properti [align-items]('/cssref/align-items').

## Syntax
```css
align-self: auto | stretch | center | flex-start | flex-end | baseline | initial | inherit;

/* Default value*/
.flex-item {
align-self: auto;
}
```

#### Javascript Syntax
```js
object.style.alignSelf="center"
```

{{< property >}}
{{< property-value default="default" value="align-self: auto;" >}}
Target harus menggunakan nilai <code> align-items </code>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example relative flex items-center justify-center bg-gray-200 h-200px p-0" id="align-self-auto">
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		1</div>
	<div
		class="square target text-white flex items-center justify-center text-center leading-tight rounded-sm bg-teal-400 w-20pr h-50px m-2px">
		Target</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		3</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-75px m-2px">
		4</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		5</div>
	<div class="h-2px absolute top-50pr right-0 left-0 bg-gray-600 z-10"><span
			class="absolute top-50pr left-0 text-2xs text-white bg-gray-600 py-2px px-5px">Items</span></div>
	<div class="h-2px absolute top-50pr right-0 left-0 bg-red-500 z-10"><span
			class="absolute top-50pr left-0 text-2xs text-white bg-red-500 py-2px px-2">Self</span></div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="align-self: flex-start;" >}}
Jika wadah tersebut memiliki <code> align-items: center </code> dan <strong> target </strong> miliki <code> align-self:
	flex-start </code>, hanya target yang akan berada di awal sumbu silang.

Secara default, ini berarti akan diselaraskan <strong> secara vertikal </strong> di <strong> atas </strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example relative flex items-center justify-center bg-gray-200 h-200px p-0"
	id="align-self-flex-start">
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		1</div>
	<div
		class="square target text-white flex items-center justify-center self-start text-center leading-tight rounded-sm bg-teal-400 w-20pr h-50px m-2px">
		Target</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		3</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-75px m-2px">
		4</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		5</div>
	<div class="h-2px absolute top-50pr right-0 left-0 bg-gray-600 z-10"><span
			class="absolute top-50pr left-0 text-2xs text-white bg-gray-600 py-2px px-5px">Items</span></div>
	<div class="h-2px absolute top-50pr right-0 left-0 bg-red-500 z-10"><span
			class="absolute top-50pr left-0 text-2xs text-white bg-red-500 py-2px px-2">Self</span></div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="align-self: flex-end;" >}}
Jika wadah tersebut memiliki <code> align-items: center </code> dan <strong> target </strong> miliki<code> align-self:
	flex-end </code>, hanya target yang akan berada di ujung sumbu silang.

Secara default, ini berarti akan diselaraskan <strong> secara vertikal </strong> di <strong> bawah</strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example relative flex items-center justify-center bg-gray-200 h-200px p-0"
	id="align-self-flex-end">
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		1</div>
	<div
		class="square target text-white flex items-center justify-center self-end text-center leading-tight rounded-sm bg-teal-400 w-20pr h-50px m-2px">
		Target</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		3</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-75px m-2px">
		4</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		5</div>
	<div class="h-2px absolute top-50pr right-0 left-0 bg-gray-600 z-10"><span
			class="absolute top-50pr left-0 text-2xs text-white bg-gray-600 py-2px px-5px">Items</span>
	</div>
	<div class="h-2px absolute bottom-0 right-0 left-0 bg-red-500 z-10"><span
			class="absolute bottom-0 left-0 text-2xs text-white bg-red-500 py-2px px-2">Self</span></div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="align-self: center;" >}}
Jika wadah itu memiliki <code> align-items: flex-start </code> dan <strong> target </strong> miliki <code> align-self:
	center </code>, hanya target yang akan berada di tengah sumbu silang.

Secara default, ini berarti <strong> berpusat vertikal </strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example relative flex items-start justify-center bg-gray-200 h-200px p-0"
	id="align-self-center">
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		1</div>
	<div
		class="square target text-white flex items-center justify-center self-center text-center leading-tight rounded-sm bg-teal-400 w-20pr h-50px m-2px">
		Target</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		3</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-75px m-2px">
		4</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		5</div>
	<div class="h-2px absolute top-0 right-0 left-0 bg-gray-600 z-10"><span
			class="absolute top-0 left-0 text-2xs text-white bg-gray-600 py-2px px-5px">Items</span></div>
	<div class="h-2px absolute top-50pr right-0 left-0 bg-red-500 z-10"><span
			class="absolute top-50pr left-0 text-2xs text-white bg-red-500 py-2px px-2">Self</span></div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="align-self: baseline;" >}}
Jika wadah tersebut memiliki <code> align-items: center </code> dan <strong> target </strong> miliki<code> align-self:
	baseline </code>, hanya target yang akan berada di garis dasar sumbu silang.

Secara default, ini berarti akan disejajarkan di sepanjang garis dasar teks.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example relative flex items-center justify-center bg-gray-200 h-200px p-0"
	id="align-self-baseline">
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		1</div>
	<div
		class="square target text-white flex items-center justify-center self-baseline text-center leading-tight rounded-sm bg-teal-400 w-20pr h-50px m-2px">
		Target</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		3</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-75px m-2px">
		4</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		5</div>
	<div class="h-2px absolute top-50pr right-0 left-0 bg-gray-600 z-10"><span
			class="absolute top-50pr left-0 text-2xs text-white bg-gray-600 py-2px px-5px">Items</span>
	</div>
	<div class="h-2px absolute top-30px right-0 left-0 bg-red-500 z-10"><span
			class="absolute left-0 text-2xs text-white bg-red-500 py-2px px-2">Self</span></div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="align-self: stretch;" >}}
Jika wadah tersebut memiliki <code> align-items: center </code> dan <strong> target </strong> miliki <code> align-self:
	stretch </code>, hanya target yang akan merentangkan sepanjang sumbu silang.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example relative flex items-center justify-center bg-gray-200 h-200px p-0"
	id="align-self-stretch">
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		1</div>
	<div
		class="square target text-white flex items-center justify-center self-stretch text-center leading-tight rounded-sm bg-teal-400 w-20pr h-auto m-2px">
		Target</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		3</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-75px m-2px">
		4</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		5</div>
	<div class="h-2px absolute top-50pr right-0 left-0 bg-gray-600 z-10"><span
			class="absolute top-50pr left-0 text-2xs text-white bg-gray-600 py-2px px-5px">Items</span>
	</div>
</div>
{{< /property-preview >}}
{{< /property >}}


<p class="codepen" data-height="300" data-theme-id="37132" data-default-tab="result" data-user="codingku"
	data-slug-hash="eYmpGVL"
	style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
	data-pen-title="Contoh Property align-self">
	<span>See the Pen <a href="https://codepen.io/codingku/pen/eYmpGVL">
			Contoh Property align-self</a> by Codingku (<a href="https://codepen.io/codingku">@codingku</a>)
		on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>