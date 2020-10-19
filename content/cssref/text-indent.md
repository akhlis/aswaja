---
title: text-indent
description: text-indent
date: "2019-11-12T10:34:07+07:00"
slug: text-indent
css_collections:
- typography
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/text-indent
---

## CSS Syntax
```css
text-indent: length | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.textIndent="50px"
```
{{< cssref default="0" inherited="ya" animatable="ya" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="text-indent: 0;" >}}
Teksnya tidak berlekuk.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example text-indent text-sm p-3 lg:p-4" id="text-indent-0">
  <p class="block block--alpha text-sm leading-tight bg-green-A100 rounded-sm p-3 lg:p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="text-indent: 40px;" >}}
Kamu dapat menggunakan nilai numerik seperti __piksel, (r)em, persentase__...

Perhatikan! hanya baris pertama yang diindentasi.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example text-indent text-sm p-3 lg:p-4" id="text-indent-40px">
  <p class="block block--alpha text-sm leading-tight bg-green-A100 rounded-sm p-3 lg:p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="text-indent: -2em;" >}}
Kamu juga dapat menggunakan nilai negatif.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example text-indent text-sm p-3 lg:p-4" id="text-indent--2em">
  <p class="block block--alpha text-sm leading-tight bg-green-A100 rounded-sm p-3 lg:p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  #text-indent-0 {
    text-indent: 0;
  }

  #text-indent-40px {
    text-indent: 40px;
  }

  #text-indent--2em {
    text-indent: -2em;
  }
</style>