---
title: text-transform
description: text-transform
date: "2019-11-12T10:34:07+07:00"
slug: text-transform
css_collections:
- typography
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/text-transform
---

## CSS Syntax
```css
text-transform: none | capitalize | uppercase | lowercase | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.textTransform="uppercase"
```
{{< cssref default="none" inherited="ya" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="text-transform: none;" >}}
Menghapus transformasi teks apa pun: teks akan muncul sama dengan di kode HTML.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example text-transform text-sm normal-case p-3 lg:p-4" id="text-transform-none"><strong>Hello world!</strong><br>Lorem
  ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis
  blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Maecenas imperdiet felis nisi,
  fringilla luctus felis hendrerit sit amet.</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="text-transform: capitalize;" >}}
Mengubah huruf __pertama__ dari setiap kata menjadi __huruf besar__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example text-transform text-sm capitalize p-3 lg:p-4" id="text-transform-capitalize"><strong>Hello
    world!</strong><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat
  pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
  Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="text-transform: uppercase;" >}}
Mengubah __semua__ huruf menjadi huruf __kapital__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example text-transform text-sm uppercase p-3 lg:p-4" id="text-transform-uppercase"><strong>Hello
    world!</strong><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat
  pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
  Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="text-transform: lowercase;" >}}
Mengubah __semua__ huruf menjadi __huruf kecil__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example text-transform text-sm lowercase p-3 lg:p-4" id="text-transform-lowercase"><strong>Hello
    world!</strong><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat
  pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
  Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.</div>
{{< /property-preview >}}
{{< /property >}}