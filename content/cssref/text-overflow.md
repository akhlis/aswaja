---
title: text-overflow
description: text-overflow
date: "2019-11-12T10:34:07+07:00"
slug: text-overflow
css_collections:
- typography
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/text-overflow
---

## CSS Syntax
```css
text-overflow: clip | ellipsis | string | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.textOverflow="ellipsis"
```
{{< cssref default="clip" inherited="tidak" animatable="tidak" version="CSS3" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="text-overflow: clip;" >}}
Konten teks terpotong dan tidak dapat diakses.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example text-overflow p-3 lg:p-4" id="text-overflow-clip">
  <p class="block block--alpha text-sm leading-tight bg-green-A100 rounded-sm p-3 lg:p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="text-overflow: ellipsis;" >}}
Konten yang meluap digantikan oleh elipsis: ...
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example text-overflow p-3 lg:p-4" id="text-overflow-ellipsis">
  <p class="block block--alpha text-sm leading-tight bg-green-A100 rounded-sm p-3 lg:p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .text-overflow {
    display: flex;
  }

  .text-overflow .block {
    overflow: hidden;
    white-space: nowrap;
    width: 5em;
  }

  #text-overflow-clip {
    text-overflow: clip;
  }

  #text-overflow-clip .block {
    text-overflow: clip;
  }

  #text-overflow-ellipsis {
    text-overflow: ellipsis;
  }

  #text-overflow-ellipsis .block {
    text-overflow: ellipsis;
  }
</style>