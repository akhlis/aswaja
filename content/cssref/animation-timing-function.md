---
title: animation-timing-function
description: animation-timing-function
date: "2019-11-12T10:34:07+07:00"
slug: animation-timing-function
css_collections:
- animasi
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/animation-timing-function
caniuse: http://caniuse.com/#feat=css-animation
---

Properti CSS `animation-timing-function` memungkinkan kamu untuk menentukan bagaimana animasi akan berkembang selama
satu siklus durasinya.

Lebih detailnya, properti ini menjelaskan bagaimana animasi akan berubah kecepatan selama durasi setiap siklus.

Efek ini diterapkan dengan menggunakan salah satu fungsi pengaturan waktu yang dijelaskan dalam CSS.

Properti `animation-timing-function` ditentukan dengan menggunakan kurva _cubic bezier_ yang didefinisikan oleh empat
titik kontrol: P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, dan P<sub>3</sub>.

Poin P<sub>0</sub> dan P<sub>3</sub>, yang mewakili awal dan akhir dari siklus animasi, selalu diatur ke (0,0) dan (1,1)
secara berulang.

Properti `animation-timing-function` mencakup sejumlah kata kunci yang dapat digunakan sebagai cara cepat untuk
mendapatkan transisi yang bagus.

Atau kamu dapat menggunakan fungsi `cubic-bezier()` untuk menentukan kurva _cubic-bezier` kamu sendiri.

Untuk animasi keyframes, properti `animation-timing-function` berlaku antara keyframe, bukan seluruh animasi.

Misalnya, dalam hal fungsi timing `ease-in-out`, animasi akan melambat pada awal keyframe dan melambat pada akhir
keyframe.

`animation-timing-function` yang didefinisikan dalam blok keyframe berlaku untuk keyframe itu. Jika tidak, fungsi timing
yang ditentukan untuk animasi akan digunakan.

## Sintax

```css
animation-timing-function: linear | ease | ease-in | ease-out | ease-in-out | step-start | step-end |
steps(int,start|end) | cubic-bezier(n,n,n,n) | initial | inherit;
```

#### Javascript Syntax
```js
object.style.animationTimingFunction="linear"
```


<div class="property__animation">
	<a class="button property-animation-toggle" data-property-name="animation-timing-function"></a>
</div>

{{< property >}}
{{< property-value default="default" value="animation-timing-function: ease;" >}}
Animasi dimulai perlahan, berakselerasi di tengah, dan melambat di akhir.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-timing-function text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-timing-function-ease">Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-timing-function: ease-in;" >}}
Animasi dimulai perlahan, dan berakselerasi secara bertahap hingga akhir.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-timing-function text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-timing-function-ease-in">Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-timing-function: ease-out;" >}}
Animasi dimulai dengan cepat, dan melambat secara bertahap hingga akhir.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-timing-function text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-timing-function-ease-out">Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-timing-function: ease-in-out;" >}}
Seperti <code> ease </code>, tetapi lebih jelas.

Animasi dimulai dengan cepat, dan melambat secara bertahap hingga akhir.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-timing-function text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-timing-function-ease-in-out">Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-timing-function: linear;" >}}
Animasi ini memiliki <em> *kecepatan konstan </em>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-timing-function text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-timing-function-linear">Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-timing-function: step-start;" >}}
Animasi melompat <em> langsung </em> ke <strong> keadaan akhir </strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-timing-function text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-timing-function-step-start">Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-timing-function: step-end;" >}}
Animasi tetap berada di <strong> keadaan awal </strong> hingga akhir, sesaat <em> langsung </em> melonjak ke <strong>
	keadaan akhir </strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-timing-function text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-timing-function-step-end">Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-timing-function: steps(4, end);" >}}
Dengan menggunakan <code> steps() </code> dengan <strong> integer </strong>, kamu dapat menentukan <em> jumlah </em>
langkah tertentu sebelum mencapai akhir. Keadaan elemen <em> tidak </em> akan berubah secara bertahap, tetapi sebaliknya
<strong> lompat </strong> dari bagian ke bagian dalam contoh terpisah.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-timing-function text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-timing-function-steps4-end">Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
	.animation-timing-function {
		animation-duration: 3s;
		animation-fill-mode: forwards;
	}

	.animation-timing-function.is-animated {
		animation-name: moveRight;
	}

	#animation-timing-function-ease {
		animation-timing-function: ease;
	}

	#animation-timing-function-ease-in {
		animation-timing-function: ease-in;
	}

	#animation-timing-function-ease-out {
		animation-timing-function: ease-out;
	}

	#animation-timing-function-ease-in-out {
		animation-timing-function: ease-in-out;
	}

	#animation-timing-function-linear {
		animation-timing-function: linear;
	}

	#animation-timing-function-step-start {
		animation-timing-function: step-start;
	}

	#animation-timing-function-step-end {
		animation-timing-function: step-end;
	}

	#animation-timing-function-steps4-end {
		animation-timing-function: steps(4, end);
	}
</style>







## Browser Support

Tabel berikut ini menunjukkan tingkat dukungan browser untuk fitur `animasi` yang disediakan oleh
[Caniuse.com]('caniuse.com').

<iframe src="https://caniuse.com/css-animation/embed/" width="100%" height="350"></iframe>