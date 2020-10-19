---
title: justify-content
description: justify-content
date: "2019-11-12T10:34:07+07:00"
slug: justify-content
css_collections:
- flexbox
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/justify-content
caniuse: http://caniuse.com/#feat=flexbox
---

Properti CSS `justify-content` menyelaraskan item flex ketika item tidak menggunakan semua ruang yang tersedia pada
sumbu utama (horizontal) dari wadah fleksibel (_flex container_).

Ini dilakukan setelah setiap panjang item flex dan margin otomatis telah diselesaikan.

Biasanya properti ini membantu mendistribusikan sisa ruang bebas tambahan ketika semua item flex berada di garis yang
tidak fleksibel, atau fleksibel tetapi telah mencapai ukuran maksimumnya.

Properti ini juga memberikan beberapa kontrol atas perataan item ketika mereka meluap dari baris.

## CSS Syntax
```css
justify-content: flex-start | flex-end | center | space-between | space-around | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.justifyContent="space-between"
```

{{< cssref default="flex-start" inherited="tidak" animatable="tidak" version="CSS3" >}}

## Attribute Value

{{< property >}}
{{< property-value default="none" value="justify-content: flex-start;" >}}
Item flexbox/grid didorong ke arah awal sumbu utama _flex/grid container_.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example flex justify-start bg-indigo-100 pb-8" id="justify-content-flex-start">
  <p class="block text-sm bg-green-200 rounded-lg p-4"><strong>1.</strong> One</p>
  <p class="block text-sm bg-blue-200 rounded-lg p-4"><strong>2.</strong> Two</p>
  <p class="block text-sm bg-pink-200 rounded-lg p-4"><strong>3.</strong> Three</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="justify-content: flex-end;" >}}
Item flexbox/grid didorong ke arah ujung sumbu utama _flex/grid container_.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example flex justify-end bg-indigo-100 pb-8" id="justify-content-flex-end">
  <p class="block text-sm bg-green-200 rounded-lg p-4"><strong>1.</strong> One</p>
  <p class="block text-sm bg-blue-200 rounded-lg p-4"><strong>2.</strong> Two</p>
  <p class="block text-sm bg-pink-200 rounded-lg p-4"><strong>3.</strong> Three</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="justify-content: center;" >}}
Item flexbox/grid dipusatkan di sepanjang sumbu utama _flex/grid container_.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example flex justify-center bg-indigo-100 pb-8" id="justify-content-center">
  <p class="block text-sm bg-green-200 rounded-lg p-4"><strong>1.</strong> One</p>
  <p class="block text-sm bg-blue-200 rounded-lg p-4"><strong>2.</strong> Two</p>
  <p class="block text-sm bg-pink-200 rounded-lg p-4"><strong>3.</strong> Three</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="justify-content: space-between;" >}}
Ruang yang tersisa didistribusikan di antara item-item flexbox/grid.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example flex justify-between bg-indigo-100 pb-8" id="justify-content-space-between">
  <p class="block text-sm bg-green-200 rounded-lg p-4"><strong>1.</strong> One</p>
  <p class="block text-sm bg-blue-200 rounded-lg p-4"><strong>2.</strong> Two</p>
  <p class="block text-sm bg-pink-200 rounded-lg p-4"><strong>3.</strong> Three</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="justify-content: space-around;" >}}
Ruang yang tersisa didistribusikan di sekitar item flexbox/grid: ini menambah ruang sebelum item pertama dan setelah yang terakhir.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example flex justify-around bg-indigo-100 pb-8" id="justify-content-space-around">
  <p class="block text-sm bg-green-200 rounded-lg p-4"><strong>1.</strong> One</p>
  <p class="block text-sm bg-blue-200 rounded-lg p-4"><strong>2.</strong> Two</p>
  <p class="block text-sm bg-pink-200 rounded-lg p-4"><strong>3.</strong> Three</p>
</div>
{{< /property-preview >}}
{{< /property >}}