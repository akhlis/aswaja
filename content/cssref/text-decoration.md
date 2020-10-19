---
title: text-decoration
description: text-decoration
date: "2019-11-12T10:34:07+07:00"
slug: text-decoration
css_collections:
- typography
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/text-decoration
---

## CSS Syntax
```css
text-decoration: text-decoration-line text-decoration-color text-decoration-style | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.textDecoration="underline"
```

{{< cssref default="none currentcolor solid" inherited="tidak" animatable="tidak" version="CSS1 diperbarui di CSS3" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="text-decoration: none;" >}}
Menghapus semua hiasan teks.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example text-sm text-decoration no-underline p-4" id="text-decoration-none">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="text-decoration: underline;" >}}
Menggarisbawahi konten teks.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example text-sm text-decoration underline p-4" id="text-decoration-underline">Hello world</div>
{{< /property-preview >}}
{{< /property >}}