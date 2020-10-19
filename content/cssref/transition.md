---
title: transition
description: transition
date: "2019-11-12T10:34:07+07:00"
slug: transition
css_collections:
- transisi
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/transition
caniuse: http://caniuse.com/#feat=css-transitions
---

## CSS Syntax
```css
transition: property duration timing-function delay | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.transition="all 2s"
```
{{< cssref default="all 0s ease 0s" inherited="tidak" animatable="tidak" version="CSS3" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="transition: 1s;" >}}
- `transition-duration` diatur ke `1s`
- `transition-property` defaults ke `all`
- `transition-timing-function` defaults ke `ease`
- `transition-delay` defaults ke `0s`
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transition text-sm" id="transition-1s">
  <p class="square square--alpha">Hover me</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transition: 1s linear;" >}}
- `transition-duration` diatur ke `1s`
- `transition-property` defaults ke `all`
- `transition-timing-function` diatur ke `linear`
- `transition-delay` defaults ke `0s`
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transition text-sm" id="transition-1s-linear">
  <p class="square square--alpha">Hover me</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transition: background 1s linear;" >}}
- `transition-duration` diatur ke `1s`
- `transition-property` diatur ke `background`
- `transition-timing-function` diatur ke `linear`
- `transition-delay` defaults ke `0s`
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transition text-sm" id="transition-background-1s-linear">
  <p class="square square--alpha">Hover me</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transition: background 1s linear 500ms;" >}}
- `transition-duration` diatur ke `1s`
- `transition-property` diatur ke `background`
- `transition-timing-function` diatur ke `linear`
- `transition-delay` diatur ke `500ms`
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transition text-sm" id="transition-background-1s-linear-500ms">
  <p class="square square--alpha">Hover me</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="transition: background 4s, transform 1s;" >}}
Kamu dapat menggabungkan beberapa properti dengan durasi transisinya sendiri.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example transition text-sm" id="transition-background-4s-transform-1s">
  <p class="square square--alpha">Hover me</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .square {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #e6e6e6;
    border-radius: 3px;
    color: #4d4d4d;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 75px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    line-height: 1.2;
    padding: 0;
    text-align: center;
    width: 75px;
  }

  .square--alpha {
    background: #05ffb0;
    color: #310736;
  }

  .transition {
    padding: 0;
  }

  .transition:hover .square {
    background: hsl(348, 100%, 61%);
    color: #fff;
    transform: translateX(200%);
  }

  #transition-1s .square {
    transition: 1s;
  }

  #transition-1s-linear .square {
    transition: 1s linear;
  }

  #transition-background-1s-linear .square {
    transition: background 1s linear;
  }

  #transition-background-1s-linear-500ms .square {
    transition: background 1s linear 500ms;
  }

  #transition-background-4s-transform-1s .square {
    transition: background 4s, transform 1s;
  }
</style>