---
title: max-height
description: max-height
date: "2019-11-12T10:34:07+07:00"
slug: max-height
css_collections:
- box-model
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/max-height
---

Properti CSS `max-height` digunakan untuk mengatur ketinggian maksimum elemen yang ditentukan.

Properti ini mengesampingkan properti `height` dan mencegah nilai properti `height` menjadi lebih besar dari nilai yang
ditentukan.

Penggunaan properti ini berguna untuk membatasi ketinggian elemen dalam CSS ke rentang tertentu.

Dua properti yang tersedia untuk menetapkan tinggi minimum dan maksimum untuk suatu elemen yaitu: properti `min-height`
dan `max-height`.

Properti `max-height` mengesampingkan properti `height` tetapi selalu diganti oleh properti `min-height`.

## CSS Syntax
```css
max-height: none | length | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.maxHeight="100px"
```

{{< cssref default="none" inherited="tidak" animatable="ya" version="CSS2" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="max-height: none;" >}}
Elemen tidak memiliki batasan dalam hal ketinggian.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example max-height p-4" id="max-height-none">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Pellentesque interdum, nisl
    nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="max-height: 2000px;" >}}
Kamu dapat menggunakan nilai numerik seperti __piksel, (r)em, persentase ...__

Jika tinggi maksimum lebih besar dari tinggi elemen sebenarnya, tinggi maks tidak berpengaruh.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example max-height p-4" id="max-height-2000px">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Pellentesque interdum, nisl
    nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="max-height: 100px;" >}}
Jika konten tidak sesuai dengan ketinggian maksimum, maka akan meluap. Bagaimana wadah akan menangani konten yang meluap ini ditentukan oleh properti `overflow`.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example max-height p-4" id="max-height-100px">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Pellentesque interdum, nisl
    nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .max-height {
    max-width: 400px;
  }

  #max-height-100px .block {
    max-height: 100px;
  }
</style>