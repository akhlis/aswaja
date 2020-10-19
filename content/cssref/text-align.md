---
title: text-align
description: text-align
date: "2019-11-12T10:34:07+07:00"
slug: text-align
css_collections:
- typography
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/text-align
---

## CSS Syntax
```css
text-align: left | right | center | justify | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.textAlign="right"
```
{{< cssref default="left jika arah ltr, dan right jika arah rtl" inherited="ya" animatable="tidak" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value value="text-align: left;" >}}
Konten teks disejajarkan ke kiri.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example text-align text-sm text-left p-4" id="text-align-left">
  <p class="block block--alpha"><strong>Hello world</strong><br>Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
    diam, consequat gravida libero rhoncus ut.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="text-align: right;" >}}
Konten teks disejajarkan ke kanan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example text-align text-sm text-right p-4" id="text-align-right">
  <p class="block block--alpha"><strong>Hello world</strong><br>Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
    diam, consequat gravida libero rhoncus ut.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="text-align: center;" >}}
Konten teks terpusat.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example text-align text-sm text-center p-4" id="text-align-center">
  <p class="block block--alpha"><strong>Hello world</strong><br>Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
    diam, consequat gravida libero rhoncus ut.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="text-align: justify;" >}}
Konten teks rata kanan dan kiri
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example text-align text-sm text-justify p-4" id="text-align-justify">
  <p class="block block--alpha"><strong>Hello world</strong><br>Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
    diam, consequat gravida libero rhoncus ut.</p>
</div>
{{< /property-preview >}}
{{< /property >}}