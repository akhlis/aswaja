---
title: clear
description: clear
date: "2019-11-12T10:34:07+07:00"
slug: clear
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/clear
---

Properti `clear` terkait langsung dengan properti [`float`](/cssref/float/) dan digunakan pada suatu elemen untuk
menghapus `float` pada salah satu sisi elemen atau keduanya.

Properti `clear` merupakan saudara dari properti `float`. Properti ini menunjukkan sisi mana dari suatu elemen yang
mungkin tidak berdekatan dengan elemen `float` (mengambang) sebelumnya.

Dengan kata lain, properti clear menentukan apakah suatu elemen dapat diposisikan di sebelah elemen `float` yang
mendahuluinya, atau harus dipindahkan ke bawahnya.

Jika suatu elemen memiliki elemen melayang di sebelah sisi kanannya, kamu dapat menghapus elemen di sisi kanan itu dari
efek melayang (float).

Jadi elemen tersebut akan dipindahkan ke bawah, sehingga elemen melayang tidak lagi disisi kanannya.

Properti `clear` berlaku untuk elemen yang tidak melayang maupun elemen yang melayang (float).

Kamu dapat menghapus efek "float" (mengapung) di kedua sisi, atau di sekitar elemen float.

## CSS Syntax
```css
clear: none | left | right | both | initial | inherit;
```

#### Javascript Syntax
```js
object.style.clear="both"
```
{{< property >}}
{{< property-value default="default" value="clear: none;" >}}
Properti `clear` hanya relevan ketika digunakan dengan saudara kandung yang memiliki nilai `float`.

Elemen akan berada __di samping__ elemen melayang yang mendahuluinya.
{{< /property-value >}}
{{< property-preview >}}
<div class="clear" id="clear-none">
  <p class="bg-grey-100 text-sm rounded-sm py-2 px-4 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Etiam semper diam at erat pulvinar,
    at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
  <p class="bg-green-200 text-sm text-center rounded-sm float-left py-2 px-4 mb-0">Float left<br>block</p>
  <p class="bg-teal-200 text-sm rounded-sm float-right py-2 px-4 mb-0">Float right</p>
  <p class="bg-orange-200 text-sm rounded-sm py-2 px-4 mb-0"><strong>This is the clear none block</strong>. It lives
    alongside its floating
    siblings. It takes up the remaining space left in between.</p>
  <p class="bg-grey-100 text-sm rounded-sm py-2 px-4 mb-0">Maecenas imperdiet felis nisi, fringilla luctus felis
    hendrerit sit amet. Pellentesque
    interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.
  </p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="clear: left;" >}}
Elemen `clear` akan bergerak setelah elemen `float` kiri mendahuluinya, tetapi akan tetap di samping elemen `float`
kanan.
{{< /property-value >}}
{{< property-preview >}}
<div class="clear" id="clear-left">
  <p class="bg-grey-100 text-sm rounded-sm py-2 px-4 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Etiam semper diam at erat pulvinar,
    at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
  <p class="bg-green-200 text-sm text-center rounded-sm float-left py-2 px-4 mb-0">Float left<br>block</p>
  <p class="bg-teal-200 text-sm rounded-sm float-right py-2 px-4 mb-0">Tall<br>float<br>right<br>block</p>
  <p class="bg-orange-200 text-sm rounded-sm clear-left py-2 px-4 mb-0"><strong>This is the clear left element</strong>.
    It comes after the clear left, but remains alongside the float right.</p>
  <p class="bg-grey-100 text-sm rounded-sm py-2 px-4 mb-0">Maecenas imperdiet felis nisi, fringilla luctus felis
    hendrerit sit amet. Pellentesque
    interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.
  </p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="clear: right;" >}}
Elemen `clear` akan bergerak setelah elemen `float` kanan mendahuluinya, tetapi akan tetap di samping elemen `float`
kiri.
{{< /property-value >}}
{{< property-preview >}}
<div class="clear" id="clear-left">
  <p class="bg-grey-100 text-sm rounded-sm py-2 px-4 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Etiam semper diam at erat pulvinar,
    at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
  <p class="bg-green-200 text-sm text-center rounded-sm float-left py-2 px-4 mb-0">Tall<br>float<br>left<br>block</p>
  <p class="bg-teal-200 text-sm rounded-sm float-right py-2 px-4 mb-0">Float right</p>
  <p class="bg-orange-200 text-sm rounded-sm clear-right py-2 px-4 mb-0"><strong>This is the clear left element</strong>. It comes after the clear right, but remains alongside the float left.</p>
  <p class="bg-grey-100 text-sm rounded-sm py-2 px-4 mb-0">Maecenas imperdiet felis nisi, fringilla luctus felis
    hendrerit sit amet. Pellentesque
    interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.
  </p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="clear: both;" >}}
Elemen `clear` akan bergerak setelah elemen `float` yang mendahuluinya. Ini termasuk elemen float kiri dan float kanan.
{{< /property-value >}}
{{< property-preview >}}
<div class="clear" id="clear-left">
  <p class="bg-grey-100 text-sm rounded-sm py-2 px-4 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Etiam semper diam at erat pulvinar,
    at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
  <p class="bg-green-200 text-sm text-center rounded-sm float-left py-2 px-4 mb-0">Float left</p>
  <p class="bg-teal-200 text-sm rounded-sm float-right py-2 px-4 mb-0">Float right</p>
  <p class="bg-orange-200 text-sm rounded-sm clear-both py-2 px-4 mb-0"><strong>This is the clear both element</strong>. It comes after both floating elements.</p>
  <p class="bg-grey-100 text-sm rounded-sm py-2 px-4 mb-0">Maecenas imperdiet felis nisi, fringilla luctus felis
    hendrerit sit amet. Pellentesque
    interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.
  </p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .clear-left {
    clear: left;
  }

  .clear-right {
    clear: right;
  }

  .clear-both {
    clear: both;
  }
</style>