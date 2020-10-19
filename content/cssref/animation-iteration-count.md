---
title: animation-iteration-count
description: animation-iteration-count
date: "2019-11-12T10:34:07+07:00"
slug: animation-iteration-count
css_collections:
- animasi
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/animation-iteration-count
caniuse: http://caniuse.com/#feat=css-animation
---

Properti CSS `animation-iteration-count` memungkinkan kamu untuk menentukan berapa kali iterasi (siklus) yang akan
dimainkan oleh animasi.

Dengan kata lain, properti ini menentukan berapa kali loop sebelum berhenti.

Misalnya, `animation-iteration-count: 5` akan menghasilkan animasi yang diulang selama 5 siklus/loop.

Menentukan `animation-iteration-count` dengan nilai `infinite` menghasilkan jumlah animasi tak terbatas atau akan
diulang selamanya.

## Syntax

```css
animation-iteration-count: number | infinite | initial | inherit;
```

#### Javascript Syntax
```js
object.style.animationIterationCount="infinite"
```

<div class="property__animation">
	<a class="button property-animation-toggle" data-property-name="animation-iteration-count"></a>
</div>

{{< property >}}
{{< property-value default="default" value="animation-iteration-count: 1;" >}}
Animasi hanya akan diputar <strong> sekali </strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-iteration-count text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-iteration-count-1">Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-iteration-count: 2;" >}}
Kamu dapat menggunakan <strong> nilai integer </strong> untuk menentukan jumlah <em> spesifik </em> berapa kali animasi
akan diputar.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-iteration-count text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-iteration-count-2">Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-iteration-count: infinite;" >}}
Dengan menggunakan kata kunci <code> infinite </code>, animasi akan diputar tanpa batas.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-iteration-count text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-iteration-count-infinite">Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
	.animation-iteration-count {
		animation-duration: 2s;
	}

	.animation-iteration-count.is-animated {
		animation-name: fadeAndMove;
	}

	#animation-iteration-count-1 {
		animation-iteration-count: 1;
	}

	#animation-iteration-count-2 {
		animation-iteration-count: 2;
	}

	#animation-iteration-count-infinite {
		animation-iteration-count: infinite;
	}
</style>

<p class="codepen" data-height="300" data-theme-id="37132" data-default-tab="result" data-user="codingku"
	data-slug-hash="MWYaGme"
	style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
	data-pen-title="Contoh #1 animation-iteration-count">
	<span>See the Pen <a href="https://codepen.io/codingku/pen/MWYaGme">
			Contoh #1 animation-iteration-count</a> by Codingku (<a href="https://codepen.io/codingku">@codingku</a>)
		on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>