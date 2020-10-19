---
title: align-items
description: align-items
date: "2019-11-18T10:34:07+07:00"
slug: align-items
css_collections:
- flexbox
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/align-items
---
Properti `align-items` merupakan bagian sub-property dari module [Flexible Box](/css-flexbox).

Property `align-items` terkait dengan layout CSS yang mempengaruhi bagaimana elemen-elemen disejajarkan dalam tata letak
Flexbox dan Grid.

Property ini menentukan nilai `align-self` langsung pada semua elemen item kotak sebagai grup.

Elemen-elemen item kotak ini disejajarkan mirip dengan `justify-content` tetapi letaknya di sepanjang sumbu silang
(arahnya tegak lurus terhadap sumbu utama).

Di flexbox, `align-items` mengontrol perataan item pada palang sumbu. Sedangkan di layout Grid, ia mengontrol perataan
item pada sumbu blok didalam area grid.

{{< note >}}
Gunakan property `align-self` pada masing-masing item kotak untuk menimpa property `align-self`.
{{< /note >}}

## Syntax

```css
align-items: stretch|center|flex-start|flex-end|baseline|initial|inherit;

/* Default value */
.flex-container {
align-items: stretch;
}
```

Javascript Syntax
```js
object.style.alignItems="center"
```
{{< property >}}
{{< property-value value="align-items: flex-start;" >}}
Item flexbox disejajarkan di <strong> awal </strong> dari <strong> sumbu silang </strong>.

Secara default, sumbu silang adalah vertikal. Ini berarti item-item flexbox akan sejajar <em> secara vertikal </em> di
bagian <em> atas </em>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example relative align-items flex items-start justify-center bg-gray-200 h-200px p-0"
	id="align-items-flex-start">
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		1</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-100px m-2px">
		2</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		3</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-75px m-2px">
		4</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		5</div>
	<div class="h-2px absolute top-0 right-0 left-0 bg-red-500 z-10"><span
			class="absolute -top-18px left-0 text-2xs text-white bg-red-500 py-2px px-5px">Garis</span>
	</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="align-items: flex-end;" >}}
Item flexbox disejajarkan di <strong> akhir </strong> dari <strong> sumbu silang </strong>.

Secara default, sumbu silang adalah vertikal. Ini berarti item-item flexbox akan sejajar <em> secara vertikal </em>di
bagian bawah <em> </em>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example relative align-items flex items-end justify-center bg-gray-200 h-200px p-0"
	id="align-items-flex-end">
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		1</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-100px m-2px">
		2</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		3</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-75px m-2px">
		4</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		5</div>
	<div class="h-2px absolute bottom-0 right-0 left-0 bg-red-500 z-10"><span
			class="absolute -bottom-18px left-0 text-2xs text-white bg-red-500 py-2px px-5px">Garis</span>
	</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="align-items: center;" >}}
Item flexbox disejajarkan di <strong> tengah </strong> dari <strong> sumbu silang </strong>.

Secara default, sumbu silang adalah vertikal. Ini berarti item flexbox akan berada <strong> di tengah</strong><em>
	vertikal </em>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example relative align-items flex items-center justify-center bg-gray-200 h-200px p-0"
	id="align-items-center">
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		1</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-100px m-2px">
		2</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		3</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-75px m-2px">
		4</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		5</div>
	<div class="h-2px absolute top-50pr right-0 left-0 bg-red-500 z-10"><span
			class="absolute top-50pr left-0 text-2xs text-white bg-red-500 py-2px px-5px">Garis</span></div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="align-items: baseline;" >}}
Item flexbox disejajarkan di <strong> garis dasar </strong> dari <strong> sumbu silang </strong>.

Secara default, sumbu silang adalah vertikal. Ini berarti item-item flexbox akan menyesuaikan diri sesuai<em> garis
	dasar </em> dari teks <em> </em> yang sejajar di sepanjang garis horizontal.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example relative align-items flex items-baseline justify-center bg-gray-200 h-200px p-0"
	id="align-items-baseline">
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		1</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-100px m-2px">
		2</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		3</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-75px m-2px">
		4</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-50px m-2px">
		5</div>
	<div class="h-2px absolute top-55px right-0 left-0 bg-red-500 z-10"><span
			class="absolute top-50pr left-0 text-2xs text-white bg-red-500 py-2px px-5px">Garis</span></div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value default="default" value="align-items: stretch;" >}}
Item flexbox akan merentangkan seluruh <strong> sumbu silang </strong>.

Secara default, sumbu silang adalah vertikal. Ini berarti item-item flexbox akan mengisi seluruh ruang vertikal.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example relative align-items flex items-stretch justify-center bg-gray-200 h-200px p-0"
	id="align-items-stretch">
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-auto m-2px">
		1</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-auto m-2px">
		2</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-auto m-2px">
		3</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-auto m-2px">
		4</div>
	<div
		class="square text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-20pr h-auto m-2px">
		5</div>
	<div class="h-2px absolute top-0 right-0 left-0 bg-red-500 z-10"><span
			class="absolute top-0 left-0 text-2xs text-white bg-red-500 py-2px px-5px">Garis</span></div>
</div>
{{< /property-preview >}}
{{< /property >}}

<p class="codepen" data-height="300" data-theme-id="37132" data-default-tab="result" data-user="codingku"
	data-slug-hash="BayNXvo"
	style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
	data-pen-title="Contoh Property align-items">
	<span>See the Pen <a href="https://codepen.io/codingku/pen/BayNXvo">
			Contoh Property align-items</a> by Codingku (<a href="https://codepen.io/codingku">@codingku</a>)
		on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>