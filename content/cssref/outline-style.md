---
title: outline-style
description: outline-style
date: "2019-11-12T10:34:07+07:00"
slug: outline-style
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/outline-style
---

Properti `outline-style` digunakan untuk mengatur gaya outline elemen.

_Outline_ adalah garis yang digambar di luar batas elemen untuk membuatnya menonjol di halaman web.

Biasanya digunakan untuk alasan aksesibilitas, dan dapat digunakan untuk tujuan dekorasi.

## CSS Syntax
```css
outline-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.outlineStyle="dashed"
```

{{< cssref default="none" inherited="tidak" animatable="tidak" version="CSS2" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="outline-style: none;" >}}
Menghapus outline elemen.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example outline-style " id="outline-style-none">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="outline-style: dotted;" >}}
Mengubah outline menjadi urutan titik-titik.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example outline-style " id="outline-style-dotted">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="outline-style: dashed;" >}}
Mengubah outline menjadi urutan garis.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example outline-style " id="outline-style-dashed">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="outline-style: solid;" >}}
Mengubah outline menjadi garis yang solid.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example outline-style " id="outline-style-solid">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="outline-style: double;" >}}
Mengubah outline menjadi dua garis.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example outline-style " id="outline-style-double">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="outline-style: groove;" >}}
Setel gaya inset ke outline
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example outline-style " id="outline-style-groove">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .outline-style {
    padding: 1em;
    outline-width: 4px;
  }

  #outline-style-none {
    outline-style: none;
  }

  #outline-style-dotted {
    outline-style: dotted;
  }

  #outline-style-dashed {
    outline-style: dashed;
  }

  #outline-style-solid {
    outline-style: solid;
  }

  #outline-style-double {
    outline-style: double;
  }

  #outline-style-groove {
    outline-style: groove;
  }
</style>