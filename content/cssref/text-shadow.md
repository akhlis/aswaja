---
title: text-shadow
description: text-shadow
date: "2019-11-12T10:34:07+07:00"
slug: text-shadow
css_collections:
- typography
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/text-shadow
---


## CSS Syntax
```css
text-shadow: h-shadow v-shadow blur-radius color | none | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.textShadow="2px 5px 5px red"
```
{{< cssref default="none" inherited="ya" animatable="ya" version="CSS3" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="text-shadow: none;" >}}
Konten teks tidak memiliki bayangan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example text-shadow p-3 lg:p-4" id="text-shadow-none">Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
  diam, consequat gravida libero rhoncus ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit
  amet.
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="text-shadow: 2px 6px;" >}}
Kamu memerlukan setidaknya dua nilai:

- yang pertama adalah offset horizontal
- yang kedua adalah offset vertikal

Warna bayangan akan diwarisi dari warna teks.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example text-shadow p-3 lg:p-4" id="text-shadow-2px-6px">Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
  diam, consequat gravida libero rhoncus ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit
  amet.</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="text-shadow: 2px 6px red;" >}}
Kamu dapat mendefinisikan warna sebagai nilai terakhir.

Seperti halnya warna, kamu dapat menggunakan nama warna, heksadesimal, rgb, hsl ...
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example text-shadow p-3 lg:p-4" id="text-shadow-2px-6px-red">Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
  volutpat tellus diam, consequat gravida libero rhoncus ut. Maecenas imperdiet felis nisi, fringilla luctus
  felis hendrerit sit amet.</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="text-shadow: 2px 4px 10px red;" >}}
Nilai ketiga opsional menentukan kaburnya bayangan.

Warna akan tersebar di 10px dalam contoh ini, dari buram ke transparan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example text-shadow p-3 lg:p-4" id="text-shadow-2px-4px-10px-red">Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
  volutpat tellus diam, consequat gravida libero rhoncus ut. Maecenas imperdiet felis nisi, fringilla luctus
  felis hendrerit sit amet.</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  #text-shadow-none {
    text-shadow: none;
  }

  #text-shadow-2px-6px {
    text-shadow: 2px 6px;
  }

  #text-shadow-2px-6px-red {
    text-shadow: 2px 6px red;
  }

  #text-shadow-2px-4px-10px-red {
    text-shadow: 2px 4px 10px red;
  }
</style>