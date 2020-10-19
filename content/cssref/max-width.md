---
title: max-width
description: max-width
date: "2019-11-12T10:34:07+07:00"
slug: max-width
css_collections:
- box-model
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/max-width
---

Properti CSS `max-width` digunakan untuk mengatur lebar maksimum elemen yang ditentukan.

Properti ini berguna untuk membatasi lebar elemen dalam CSS ke rentang tertentu.

Dua properti yang tersedia untuk menetapkan lebar minimum dan maksimum pada suatu elemen yaitu: properti `min-width` dan
`max-width`.

Properti `max-width` menimpa properti `width` dan mencegah nilai properti `width` menjadi lebih besar dari nilai yang
ditentukan.

## CSS Syntax
```css
max-width: none | length | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.maxWidth="600px"
````

{{< cssref default="none" inherited="tidak" animatable="ya" version="CSS2" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="max-width: none;" >}}
Elemen tidak memiliki batasan dalam hal lebar.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example max-width " id="max-width-none">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Pellentesque interdum, nisl
    nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="max-width: 2000px;" >}}
Kamu dapat menggunakan nilai numerik seperti __piksel, (r)em, persentase ...__

Jika lebar maksimum lebih besar dari lebar elemen sebenarnya, lebar maks tidak berpengaruh.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example max-width " id="max-width-2000px">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Pellentesque interdum, nisl
    nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="max-width: 150px;" >}}
Jika konten tidak sesuai dengan lebar maksimum, maka secara otomatis akan mengubah ketinggian elemen untuk mengakomodasi pembungkus konten.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example max-width " id="max-width-150px">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Pellentesque interdum, nisl
    nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  #max-width-150px .block {
    max-width: 150px;
  }
</style>