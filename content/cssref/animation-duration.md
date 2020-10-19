---
title: animation-duration
description: animation-duration
date: "2019-11-12T10:34:07+07:00"
slug: animation-duration
css_collections:
- animasi
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/animation-duration
caniuse: http://caniuse.com/#feat=css-animation
---

Properti CSS `animation-duration` memungkinkan kamu untuk menentukan berapa lama animasi akan selesai dalam satu siklus.

Properti ini memungkinkan kamu untuk menyesuaikan kecepatan animasi, sehingga berjalan cepat atau lambat.

Properti `animation-duration` menerima nilai "waktu". Misalnya, nilai 3s akan menghasilkan animasi berjalan selama 3
detik.

Dengan mengubah nilai properti `animation-duration`, kamu secara efektif mengubah kecepatan di mana animasi berjalan.

Nilai yang lebih tinggi menghasilkan animasi yang lebih lambat, sedangkan nilai yang lebih kecil menghasilkan animasi
yang lebih cepat.

## Syntax
```css
animation-duration: time | initial | inherit;
```

#### Javascript Syntax
```js
object.style.animationDuration="3s"
```

<div class="property__animation">
	<a class="button property-animation-toggle" data-property-name="animation-duration"></a>
</div>

{{< property >}}
{{< property-value default="default" value="animation-duration: 0s;" >}}
Nilai defaultnya adalah <strong> nol detik </strong>: animasi tidak akan diputar.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-duration text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-duration-0s">
	Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-duration: 1.2s;" >}}
Kamu dapat menggunakan nilai <strong> desimal </strong> dalam <strong> detik </strong> dengan kata kunci <code> s
</code>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-duration text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-duration-12s">
	Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-duration: 2400ms;" >}}
Kamu dapat menggunakan <strong> milidetik </strong> daripada detik, dengan kata kunci <code> ms </code>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-duration text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-duration-2400ms">
	Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
	.animation-duration {
		animation-iteration-count: infinite;
	}

	.animation-duration.is-animated {
		animation-name: fadeAndMove;
	}

	#animation-duration-0s {
		animation-duration: 0s;
	}

	#animation-duration-12s {
		animation-duration: 1.2s;
	}

	#animation-duration-2400ms {
		animation-duration: 2400ms;
	}
</style>