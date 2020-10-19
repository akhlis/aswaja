---
title: animation-direction
description: animation-direction
date: "2019-11-12T10:34:07+07:00"
slug: animation-direction
css_collections:
- animasi
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/animation-direction
caniuse: http://caniuse.com/#feat=css-animation
---



<div class="property__animation">
	<a class="button property-animation-toggle" data-property-name="animation-direction"></a>
</div>

{{< property >}}
{{< property-value default="default" value="animation-direction: normal;" >}}
The animation is played forwards. When it reaches the end, it starts over at the first keyframe.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-direction text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-direction-normal">
	Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-direction: reverse;" >}}
The animation is played backwards: begins at the last keyframe, finishes at the first keyframe.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-direction text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-direction-reverse">
	Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-direction: alternate;" >}}
The animation is played forwards first, then backwards:

- starts at the first keyframe
- stops at the last keyframe
- starts again, but at the last keyframe
- stops at the first keyframe
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-direction text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-direction-alternate">
	Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="animation-direction: alternate-reverse;" >}}
The animation is played backwards first, then forwards:

- starts at the last keyframe
- stops at the first keyframe
- starts again, but at the first keyframe
- stops at the last keyframe
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example animation-direction text-white flex items-center justify-center text-center leading-tight rounded-sm bg-indigo-900 w-75px h-75px"
	id="animation-direction-alternate-reverse">
	Hello<br>World</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
.animation-direction {
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

.animation-direction.is-animated {
    animation-name: fadeAndMove;
}

#animation-direction-normal {
    animation-direction: normal;
}

#animation-direction-reverse {
    animation-direction: reverse;
}

#animation-direction-alternate {
    animation-direction: alternate;
}

#animation-direction-alternate-reverse {
    animation-direction: alternate-reverse;
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