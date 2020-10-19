---
title: font-variant
description: font-variant
date: "2019-11-12T10:34:07+07:00"
slug: font-variant
css_collections:
- typography
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/font-variant
---

Salah satu jenis variasi dalam _font family_ adalah `small-caps`. Dalam huruf kecil _small-caps_ terlihat mirip dengan
huruf besar, tetapi dalam ukuran yang lebih kecil dan dengan proporsi yang sedikit berbeda. Properti `font-variant`
memilih font itu.

## CSS Syntax
```css
font-variant: normal | small-caps | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.fontVariant="small-caps"
```

{{< cssref default="normal" inherited="ya" animatable="tidak" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="none" value="font-variant: normal;" >}}
Setiap huruf menggunakan _normal glyph_.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-variant p-4" id="font-variant-normal">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="font-variant: small-caps;" >}}
Setiap huruf menggunakan versi kecil kapitalnya.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-variant p-4" id="font-variant-small-caps">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .font-variant {
    font-size: 1.2em;
  }

  #font-variant-normal {
    font-variant: normal;
  }

  #font-variant-small-caps {
    font-variant: small-caps;
  }
</style>