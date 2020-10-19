---
title: height
description: height
date: "2019-11-12T10:34:07+07:00"
slug: height
css_collections:
- box-model
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/height
---

Properti CSS `height` digunakan untuk mengatur ketinggian kotak konten elemen.

Setiap elemen pada halaman web adalah persegi panjang.

Dan setiap elemen memiliki model kotak persegi panjang yang menggambarkan area yang di hasilkan untuk elemen, yaitu:
_content box_, _padding box_, _border-box_, dan _margin box_.

_Content box_ ada pada setiap elemen. Sedangkan _padding, border, dan margin box_ merupakan opsional yang keberadaannya
tergantung pada layout desain halaman web yang dibuat oleh web developer.

{{< figure src="/images/cssref/box-areas.png" class="text-center" imgClass="mx-auto" alt="Model kotak elemen dalam CSS — termasuk area konten, padding, border, dan margin" title="Model kotak elemen dalam CSS — termasuk area konten, padding, border, dan margin." >}}

_Padding_ apa pun yang ditambahkan ke elemen akan meningkatkan tinggi total elemen yang dihitung, sehingga elemen tidak
selalu sesuai dengan ketinggian yang diharapkan hanya dengan menggunakan properti `height`.

Elemen dengan properti `height: 300px` dan `padding: 20px` akan merender hingga ketinggian 340px.

Properti `height` tidak memengaruhi elemen inline yang tidak diganti, seperti `span`.

Ketinggian konten kotak elemen inline yang tidak diganti adalah dari konten yang dirender di dalamnya.

Untuk mengatur ketinggian pada elemen inline, elemen tersebut harus diubah menjadi block dengan properti `display:
block` atau `display: inline-block`.

Properti `height` dapat mengambil nilai panjang atau nilai persentase, selain nilai `auto` dan `inherit`.

## CSS Syntax
```css
height: auto | length | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.height="500px"
```

{{< cssref default="auto" inherited="tidak" animatable="ya" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="none" value="height: auto;" >}}
Elemen akan secara otomatis menyesuaikan ketinggiannya agar kontennya dapat ditampilkan dengan benar.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example height p-4" id="height-auto">
  <p class="block text-sm bg-green-200 rounded-sm py-2 px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Pellentesque interdum, nisl
    nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="height: 100px;" >}}
Kamu dapat menggunakan nilai numerik seperti piksel, (r) em, persentase ...

Jika konten tidak sesuai dengan ketinggian yang ditentukan, itu akan meluap. Bagaimana wadah akan menangani konten yang
meluap ini ditentukan oleh properti `overflow`.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example height p-4" id="height-100px">
  <p class="block text-sm bg-green-200 rounded-sm py-2 px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at
    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
    ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Pellentesque interdum, nisl
    nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .height {
    max-width: 400px;
  }

  #height-100px .block {
    height: 100px;
  }
</style>