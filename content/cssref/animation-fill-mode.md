---
title: animation-fill-mode
description: animation-fill-mode
date: "2019-11-12T10:34:07+07:00"
slug: animation-fill-mode
css_collections:
- animasi
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/animation-fill-mode
caniuse: http://caniuse.com/#feat=css-animation
---

Properti CSS `animation-fill-mode` memungkinkan kamu menentukan nilai apa yang diterapkan oleh animasi di luar waktu
eksekusi.

Ini bisa dilakukan sebelum animasi diterapkan, atau setelah selesai berjalan.

<div class="property__animation">
	<a class="button property-animation-toggle" data-property-name="animation-fill-mode"></a>
</div>

{{< property >}}
{{< property-value default="default" value="animation-fill-mode: none;" >}}
Gaya <em> animasi </em> tidak memengaruhi gaya <em> default </em>: elemen diatur ke status default sebelum animasi
dimulai, dan kembali ke status default setelah animasi berakhir.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-fill-mode text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px square--pink"
	id="animation-fill-mode-none">
	Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-fill-mode: forwards;" >}}
Gaya terakhir yang diterapkan di akhir animasi dipertahankan <em> setelahnya </em>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-fill-mode text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px square--pink"
	id="animation-fill-mode-forwards">
	Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-fill-mode: backwards;" >}}
Gaya animasi sudah akan diterapkan <em> sebelum </em> animasi benar-benar dimulai.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-fill-mode text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px square--pink"
	id="animation-fill-mode-backwards">
	Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-fill-mode: both;" >}}
Gaya diterapkan <em> sebelum </em> dan <em> setelah </em> animasi diputar.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-fill-mode text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px square--pink"
	id="animation-fill-mode-both">
	Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
	.square--pink {
		background: #ff3860;
		color: #fff;
	}

	.animation-fill-mode {
		animation-delay: 1s;
		animation-duration: 2s;
		animation-iteration-count: 1;
		animation-name: kf-animation-fill-mode;
		animation-play-state: paused;
	}

	.animation-fill-mode.is-animated {
		animation-play-state: running;
	}

	#animation-fill-mode-none {
		animation-fill-mode: none;
	}

	#animation-fill-mode-forwards {
		animation-fill-mode: forwards;
	}

	#animation-fill-mode-backwards {
		animation-fill-mode: backwards;
	}

	#animation-fill-mode-both {
		animation-fill-mode: both;
	}
</style>

<p class="codepen" data-height="300" data-theme-id="37132" data-default-tab="result" data-user="codingku"
	data-slug-hash="dyPYdjP"
	style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
	data-pen-title="Contoh #1 animation-fill-mode">
	<span>See the Pen <a href="https://codepen.io/codingku/pen/dyPYdjP">
			Contoh #1 animation-fill-mode</a> by Codingku (<a href="https://codepen.io/codingku">@codingku</a>)
		on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>