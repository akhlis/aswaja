---
title: animation-name
description: animation-name
date: "2019-11-12T10:34:07+07:00"
slug: animation-name
css_collections:
- animasi
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/animation-name
caniuse: http://caniuse.com/#feat=css-animation
---

Properti CSS `animation-name` menetapkan satu atau lebih animasi untuk diterapkan pada suatu elemen.

Setiap nama adalah aturan kunci `@keyframes` yang menetapkan nilai properti untuk urutan animasi.

## Syntax
```css
animation-name: nama-keyframes | none | initial | inherit;
```

#### Javascript Syntax
```js
object.style.animationName="myNEWmove"
```

`nama-keyframes` adalah nama `@keyframes` yang memberikan nilai properti untuk animasi.

Jika nama tidak cocok dengan aturan kunci apapun, tidak ada properti yang akan dianimasikan dan animasi tidak akan
dijalankan.

Mengatur properti ke `none` secara eksplisit menonaktifkan animasi.

Jadi, jika properti ini mengandung nilai `none`, tidak ada animasi yang dieksekusi bahkan jika ada @keyframes dengan
nama itu.

<div class="property__animation">
	<a class="button property-animation-toggle" data-property-name="animation-name"></a>
</div>

{{< property >}}
{{< property-value default="default" value="animation-name: none;" >}}
Jika tidak ada nama animasi yang ditentukan, tidak ada animasi yang dimainkan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-name text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-name-none">Hello<br>World
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-name: fadeIn;" >}}
Jika nama ditentukan, <strong> keyframes </strong> yang cocok dengan nama itu akan digunakan.

Contohnya, nama animasi<code>fadeIn</code> seperti berikut:

```css
@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
```
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-name text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-name-fadein">
	Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-name: moveRight;" >}}
Contoh lainnya: nama animasi <code>moveRight</code>:

```css
@keyframes moveRight {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(100px);
	}
}
```
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-name text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-name-moveright">
	Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
	.animation-name {
		animation-iteration-count: infinite;
	}

	.animation-name.is-animated {
		animation-duration: 2s;
	}

	#animation-name-none {
		animation-name: none;
	}

	#animation-name-fadein {
		animation-name: fadeIn;
	}

	#animation-name-moveright {
		animation-name: moveRight;
	}
</style>


## Browser Support

Tabel berikut ini menunjukkan tingkat dukungan browser untuk fitur `animasi` yang disediakan oleh
[Caniuse.com]('caniuse.com').

<iframe src="https://caniuse.com/css-animation/embed/" width="100%" height="350"></iframe>
