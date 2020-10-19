---
title: flex-wrap
description: flex-wrap
date: "2019-11-12T10:34:07+07:00"
slug: flex-wrap
css_collections:
- flexbox
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/flex-wrap
caniuse: http://caniuse.com/#feat=flexbox
---

Properti CSS `flex-wrap` merupakan sub-properti dari modul layout kotak [Flexbox](/css/flexbox).

Properti ini mendefinisikan apakah item flex dipaksa dalam satu baris atau dapat dialirkan ke beberapa baris.

Jika diatur ke beberapa garis, ini juga menentukan sumbu silang yang menentukan arah garis baru ditumpuk.

{{< note >}}
Sumbu silang adalah sumbu tegak lurus terhadap sumbu utama. Arahnya tergantung pada arah sumbu utama.
{{< /note >}}

## CSS Syntax
```css
flex-flow: flex-direction flex-wrap | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.flexFlow="column nowrap"
```

{{< cssref default="row nowrap" inherited="tidak" animatable="tidak" version="CSS3" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="flex-wrap: nowrap;" >}}
Item-item flexbox akan tetap berada pada __satu baris__, apa pun yang terjadi, dan pada akhirnya akan meluap jika diperlukan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example flex flex-no-wrap max-w-360px bg-indigo-200 py-3 px-4" id="flex-wrap-nowrap">
  <p class="block text-sm bg-green-200 p-4 rounded-lg"><strong>1.</strong> Satu</p>
  <p class="block text-sm bg-blue-200 p-4 rounded-lg"><strong>2.</strong> Dua</p>
  <p class="block text-sm bg-pink-200 p-4 rounded-lg"><strong>3.</strong> Tiga</p>
  <p class="block text-sm bg-yellow-200 p-4 rounded-lg"><strong>4.</strong> Empat</p>
  <p class="block text-sm bg-red-200 p-4 rounded-lg"><strong>5.</strong> Lima</p>
  <p class="block text-sm bg-purple-200 p-4 rounded-lg"><strong>6.</strong> Enam</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="flex-wrap: wrap;" >}}
Item-item flexbox akan didistribusikan di antara banyak baris jika diperlukan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example flex flex-wrap max-w-360px bg-indigo-200 py-3 px-4" id="flex-wrap-wrap">
  <p class="block text-sm bg-green-200 p-4 rounded-lg"><strong>1.</strong> Satu</p>
  <p class="block text-sm bg-blue-200 p-4 rounded-lg"><strong>2.</strong> Dua</p>
  <p class="block text-sm bg-pink-200 p-4 rounded-lg"><strong>3.</strong> Tiga</p>
  <p class="block text-sm bg-yellow-200 p-4 rounded-lg"><strong>4.</strong> Empat</p>
  <p class="block text-sm bg-red-200 p-4 rounded-lg"><strong>5.</strong> Lima</p>
  <p class="block text-sm bg-purple-200 p-4 rounded-lg"><strong>6.</strong> Enam</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="flex-wrap: wrap-reverse;" >}}
Item-item flexbox akan didistribusikan di antara banyak baris jika diperlukan. Setiap baris tambahan akan muncul sebelum yang sebelumnya.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example flex flex-wrap-reverse max-w-360px bg-indigo-200 py-3 px-4" id="flex-wrap-wrap-reverse">
  <p class="block text-sm bg-green-200 p-4 rounded-lg"><strong>1.</strong> Satu</p>
  <p class="block text-sm bg-blue-200 p-4 rounded-lg"><strong>2.</strong> Dua</p>
  <p class="block text-sm bg-pink-200 p-4 rounded-lg"><strong>3.</strong> Tiga</p>
  <p class="block text-sm bg-yellow-200 p-4 rounded-lg"><strong>4.</strong> Empat</p>
  <p class="block text-sm bg-red-200 p-4 rounded-lg"><strong>5.</strong> Lima</p>
  <p class="block text-sm bg-purple-200 p-4 rounded-lg"><strong>6.</strong> Enam</p>
</div>
{{< /property-preview >}}
{{< /property >}}