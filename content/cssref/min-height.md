---
title: min-height
description: min-height
date: "2019-11-12T10:34:07+07:00"
slug: min-height
css_collections:
- box-model
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/min-height
---

Properti `min-height` digunakan untuk mengatur ketinggian minimum elemen yang ditentukan.

Properti ini berguna untuk membatasi ketinggian elemen dalam CSS ke rentang tertentu.

Dua properti yang tersedia untuk menetapkan tinggi minimumdan maksimum untuk suatu elemen yaitu: properti `min-height`
dan `max-height`.

Properti `min-height` menimpa baik properti `height` dan `max-height` dan mencegah nilai properti `height` menjadi lebih
kecil dari nilai yang ditentukan.

## CSS Syntax
```css
min-height: length | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.minHeight="400px"
```

{{< cssref default="0" inherited="tidak" animatable="ya" version="CSS2" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="min-height: 0;" >}}
Elemen tidak memiliki ketinggian minimum.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example min-height " id="min-height-0">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Pellentesque interdum, nisl
    nec interdum minimus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="min-height: 200px;" >}}
Kamu dapat menggunakan nilai numerik seperti __piksel, (r)em, persentase __...

Jika ketinggian minimum __lebih besar__ dari tinggi sebenarnya elemen, tinggi minimum akan diterapkan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example min-height " id="min-height-200px">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Pellentesque interdum, nisl
    nec interdum minimus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="min-height: 5px;" >}}
Jika tinggi minimum __lebih kecil__ dari tinggi sebenarnya elemen, tinggi minimum tidak berpengaruh.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example min-height " id="min-height-5px">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Pellentesque interdum, nisl
    nec interdum minimus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .min-height .block {
    max-width: 400px;
  }

  #min-height-200px .block {
    min-height: 200px;
  }

  #min-height-5px .block {
    min-height: 5px;
  }
</style>