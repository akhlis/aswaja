---
title: animation-delay
description: animation-delay
date: "2019-11-12T10:34:07+07:00"
slug: animation-delay
css_collections:
- animasi
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/animation-delay
caniuse: http://caniuse.com/#feat=css-animation
---

Property CSS `animation-delay` memungkinkan kamu untuk menentukan berapa lama animasi harus menunggu sampai mulai
diputar.

Kamu bisa menentukan penundaan dengan menentukan jumlah detik atau milidetik yang harus diambil sebelum dimainkan.

Misalnya, menentukan nilai 5s akan menghasilkan animasi mulai 5 detik setelah diterapkan.

## Syntax

```css
animation-delay: time | initial | inherit;
```

#### Javascript Syntax

```js
object.style.animationDelay="1s"
```

<div class="property__animation">
	<a class="button property-animation-toggle" data-property-name="animation-delay"></a>
</div>

{{< property >}}
{{< property-value default="default" value="animation-delay: 0s;" >}}
Animasi akan menunggu <strong> nol detik </strong>, dan segera mulai.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-delay text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-delay-0s">
	Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-delay: 1.2s;" >}}
Kamu dapat menggunakan nilai <strong> desimal </strong> dalam <strong> detik </strong> dengan kata kunci <code> s
</code>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-delay text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-delay-12s">
	Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-delay: 2400ms;" >}}
Kamu dapat menggunakan <strong> milidetik </strong> daripada detik, dengan kata kunci <code> ms </code>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-delay text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-delay-2400ms">
	Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-delay: -500ms;" >}}
Kamu dapat menggunakan <strong> nilai negatif </strong>: animasi akan mulai seolah-olah <em> sudah bermain </em> untuk
<code> 500ms </code>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-delay text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-delay--500ms">
	Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
.animation-delay {
    animation-duration: 5s;
    animation-iteration-count: infinite;
}

.animation-delay.is-animated {
	animation-name: fadeAndMove;
}

#animation-delay-0s {
    animation-delay: 0s;
}

#animation-delay-12s {
    animation-delay: 1.2s;
}

#animation-delay-2400ms {
    animation-delay: 2400ms;
}

#animation-delay--500ms {
    animation-delay: -500ms;
}
</style>

<p class="codepen" data-height="300" data-theme-id="37132" data-default-tab="result" data-user="codingku"
	data-slug-hash="QWwjapw"
	style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
	data-pen-title="Contoh #1 Animation Delay">
	<span>See the Pen <a href="https://codepen.io/codingku/pen/QWwjapw">
			Contoh #1 Animation Delay</a> by Codingku (<a href="https://codepen.io/codingku">@codingku</a>)
		on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>