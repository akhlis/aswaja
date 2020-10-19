---
title: letter-spacing
description: letter-spacing
date: "2019-11-12T10:34:07+07:00"
slug: letter-spacing
css_collections:
- typography
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/letter-spacing
---

Properti `letter-spacing` menentukan perilaku spasi antara huruf-huruf individual dalam kata-kata teks.

Properti ini digunakan untuk menambah atau mengurangi jumlah ruang default antara huruf-huruf di dalam kata.

## CSS Syntax
```css
letter-spacing: normal | length | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.letterSpacing="3px"
```

{{< cssref default="normal" inherited="ya" animatable="ya" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="letter-spacing: normal;" >}}
Jarak antar karakter adalah __normal__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example letter-spacing p-4" id="letter-spacing-normal">The quick brown fox jumps over the
  lazy dog</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="letter-spacing: 2px;" >}}
Kamu dapat menggunakan nilai __piksel__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example letter-spacing p-4" id="letter-spacing-2px">The quick brown fox jumps over the lazy
  dog</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="letter-spacing: 0.1em;" >}}
Kamu dapat menggunakan nilai __em__: ini memungkinkan jarak tetap _relatif_ terhadap ukuran font.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example letter-spacing p-4" id="letter-spacing-01em">The quick brown fox jumps over the lazy
  dog</div>
{{< /property-preview >}}
{{< /property >}}


<style type="text/css">
  #letter-spacing-normal {
    letter-spacing: normal;
  }

  #letter-spacing-2px {
    letter-spacing: 2px;
  }

  #letter-spacing-01em {
    letter-spacing: 0.1em;
  }
</style>