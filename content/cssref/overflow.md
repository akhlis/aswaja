---
title: overflow
description: overflow
date: "2019-11-12T10:34:07+07:00"
slug: overflow
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/overflow
---

Properti `overflow` menentukan cara menampilkan atau tidak menampilkan konten yang melampaui batas elemen.

Elemen yang isinya mungkin meluap adalah elemen tingkat blok.

Dengan menggunakan properti overflow, kamu dapat menentukan apakah akan menampilkan konten overflow (mungkin tumpang
tindih dengan elemen lain), atau membuat _scroll bar_ pada elemen sehingga konten di dalam elemen akan bergulir.

Nilai default properti ini adalah `visible`, yang berarti bahwa konten yang meluap biasanya terlihat.

Properti overflow dapat mengambil tiga nilai lebih: `hidden`, `scroll`, dan `auto`.

Satu-satunya kasus ketika konten mungkin meluap wadahnya adalah ketika wadah memiliki tinggi atau lebar yang ditetapkan
secara eksplisit.

Tanpa ketinggian yang eksplisit, elemen hanya akan meluas agar sesuai dengan konten di dalamnya.

Hal yang sama berlaku untuk konten horizontal. Elemen biasanya akan berkembang secara horizontal agar sesuai dengan
kontennya.

Jika elemen memiliki set lebar eksplisit, maka jika elemen itu mengandung konten yang memiliki lebar lebih besar dari
lebar elemen.

## CSS Syntax
```css
overflow: visible | hidden | scroll | auto | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.overflow="scroll"
```
{{< cssref default="visible" inherited="tidak" animatable="tidak" version="CSS2" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="overflow: visible;" >}}
Konten yang meluap terlihat, sedangkan elemen itu sendiri tetap pada ketinggian yang ditentukan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example overflow " id="overflow-visible">
  <p class="block overflow-visible block--alpha text-sm leading-tight bg-green-100 p-4"><span>Lorem ipsum dolor sit
      amet, consectetur adipiscing elit.</span><span>Etiam
      semper diam at erat pulvinar, at pulvinar felis blandit.</span><span>Vestibulum volutpat tellus diam,
      consequat gravida libero rhoncus ut.</span><span>Maecenas imperdiet felis nisi, fringilla luctus felis
      hendrerit sit amet.</span><span>Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor
      lorem, et sollicitudin felis neque sit amet erat.</span></p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="overflow: hidden;" >}}
Konten yang meluap disembunyikan dan tidak dapat diakses.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example overflow " id="overflow-hidden">
  <p class="block overflow-hidden block--alpha text-sm leading-tight bg-green-100 p-4"><span>Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.</span><span>Etiam
      semper diam at erat pulvinar, at pulvinar felis blandit.</span><span>Vestibulum volutpat tellus diam,
      consequat gravida libero rhoncus ut.</span><span>Maecenas imperdiet felis nisi, fringilla luctus felis
      hendrerit sit amet.</span><span>Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor
      lorem, et sollicitudin felis neque sit amet erat.</span></p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="overflow: scroll;" >}}
Konten yang meluap dapat diakses berkat bilah gulir vertikal.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example overflow " id="overflow-scroll">
  <p class="block overflow-scroll block--alpha text-sm leading-tight bg-green-100 p-4"><span>Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.</span><span>Etiam
      semper diam at erat pulvinar, at pulvinar felis blandit.</span><span>Vestibulum volutpat tellus diam,
      consequat gravida libero rhoncus ut.</span><span>Maecenas imperdiet felis nisi, fringilla luctus felis
      hendrerit sit amet.</span><span>Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor
      lorem, et sollicitudin felis neque sit amet erat.</span></p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="overflow: auto;" >}}
Browser memutuskan apakah akan menampilkan scrollbar vertikal atau tidak.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example overflow " id="overflow-auto">
  <p class="block overflow-auto block--alpha text-sm leading-tight bg-green-100 p-4"><span>Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.</span><span>Etiam
      semper diam at erat pulvinar, at pulvinar felis blandit.</span><span>Vestibulum volutpat tellus diam,
      consequat gravida libero rhoncus ut.</span><span>Maecenas imperdiet felis nisi, fringilla luctus felis
      hendrerit sit amet.</span><span>Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor
      lorem, et sollicitudin felis neque sit amet erat.</span></p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .overflow {
    height: 120px;
    overflow: hidden;
    padding: 0;
  }

  .overflow .block {
    height: 80px;
    width: 240px;
  }

  .overflow .block span {
    display: block;
    white-space: nowrap;
  }
</style>