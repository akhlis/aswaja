---
title: animation-play-state
description: animation-play-state
date: "2019-11-12T10:34:07+07:00"
slug: animation-play-state
css_collections:
- animasi
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/animation-play-state
caniuse: http://caniuse.com/#feat=css-animation
---

Properti CSS `animation-play-state` memungkinkan kamu untuk menentukan apakah animasi berjalan atau dihentikan
sementara.

Animasi yang sedang berjalan dapat di jeda dengan mengatur properti `animation-play-state` ke `paused`.

Untuk terus menjalankan animasi, properti dapat diatur ke `running`.

Properti ini dapat digunakan oleh skrip (seperti Javascript) untuk menjalankan/menjeda animasi atau untuk mengetahui
keadaan animasi saat ini (misal, sedang berjalan atau dijeda).

Animasi yang dijeda akan terus menampilkan nilai animasi saat ini dalam keadaan statis, seolah-olah waktu animasi itu
konstan.

Ketika animasi yang dijeda dilanjutkan, dimulai kembali dari nilai saat ini, tidak harus dari awal animasi.

<div class="property__animation">
	<a class="button property-animation-toggle" data-property-name="animation-play-state"></a>
</div>

{{< property >}}
{{< property-value default="default" value="animation-play-state: running;" >}}
Jika <code> animation-play-state </code> dan <code> animation-name </code> didefinisikan, animasi akan mulai bermain
secara otomatis.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-play-state text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-play-state-running">
	Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-play-state: paused;" >}}
Animasi ini disetel "paused" di <strong> keyframes pertama </strong>.

Ini berbeda dengan tidak memiliki <code> animation-play-state </code> atau <code> animation-name </code> sama sekali.
Jika animasi dijeda, gaya yang diterapkan adalah keyframes <em> pertama </em>, dan <strong> tidak </strong> style
default.

Dalam contoh ini, kotak terlihat secara default, tetapi pada keyframe pertama dari
<code> fadeAndMove </code>, <code> opacity </code> diatur ke <code> 0 </code>. Saat dijeda, animasinya akan &quot; macet
&quot; pada keyframe pertama ini, dan karenanya tidak akan terlihat.

```css
@keyframes fadeAndMove {
	from {
		opacity: 0;
		transform: translateX(0);
	}
	to {
		opacity: 0;
		transform: translateX(100px);
	}
}
```
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-play-state text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-play-state-paused">
	Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
	.animation-play-state {
		animation-duration: 2s;
		animation-iteration-count: infinite;
	}

	.animation-play-state.is-animated {
		animation-name: fadeAndMove;
	}

	#animation-play-state-running {
		animation-play-state: running;
	}

	#animation-play-state-paused {
		animation-play-state: paused;
	}
</style>

<p class="codepen" data-height="300" data-theme-id="37132" data-default-tab="result" data-user="codingku"
	data-slug-hash="mdyeaVj"
	style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
	data-pen-title="Contoh #1 animation-play-state">
	<span>See the Pen <a href="https://codepen.io/codingku/pen/mdyeaVj">
			Contoh #1 animation-play-state</a> by Codingku (<a href="https://codepen.io/codingku">@codingku</a>)
		on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

Tabel berikut ini menunjukkan tingkat dukungan browser untuk fitur `animasi` yang disediakan oleh
[Caniuse.com]('caniuse.com').

<iframe src="https://caniuse.com/css-animation/embed/" width="100%" height="350"></iframe>
