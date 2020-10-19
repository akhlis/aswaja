---
title: list-style-position
description: list-style-position
date: "2019-11-12T10:34:07+07:00"
slug: list-style-position
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/list-style-position
---

Properti `list-style-position` digunakan untuk menentukan posisi penanda (bullet atau gambar yang digunakan sebagai
penanda) dari item daftar yang berhubungan dengan kotak blok utama item.

Jadi, properti ini akan menentukan apakah penanda harus diposisikan di dalam kotak elemen atau di luarnya.

Gaya daftar diterapkan ke item daftar dan elemen yang memiliki `display: list-item`, oleh karena itu posisi gaya daftar
menentukan posisi penanda di dalam salah satu kotak ini.

## CSS Syntax
```css
list-style-position: inside | outside | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.listStylePosition="inside"
```

{{< cssref default="outside" inherited="ya" animatable="tidak" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="list-style-position: outside;" >}}
Poin-poin akan berada di luar item daftar, seolah-olah itu bukan bagian dari item daftar.

Awal setiap baris item daftar akan disejajarkan secara vertikal.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example list-style-position p-4" id="list-style-position-outside">
  <ul>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Etiam semper diam at erat pulvinar, at pulvinar felis blandit.</li>
    <li>Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</li>
    <li>Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.</li>
    <li>Pellentesque interdum, nisl nec interdum maximus.</li>
  </ul>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="list-style-position: inside;" >}}
Titik-peluru akan berada di dalam daftar item.

Karena ini adalah bagian dari item daftar, itu akan menjadi bagian dari teks dan mendorong teks di awal.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example list-style-position " id="list-style-position-inside">
  <ul>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Etiam semper diam at erat pulvinar, at pulvinar felis blandit.</li>
    <li>Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</li>
    <li>Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.</li>
    <li>Pellentesque interdum, nisl nec interdum maximus.</li>
  </ul>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .list-style-position ul {
    list-style-type: disc;
    margin-left: 1em;
    max-width: 280px;
  }

  .list-style-position li {
    background: #FFECB3;
    line-height: 1.2;
  }

  .list-style-position li+li {
    margin-top: 0.5em;
  }

  #list-style-position-outside {
    list-style-position: outside;
  }

  #list-style-position-outside ul {
    list-style-position: outside;
  }

  #list-style-position-inside {
    list-style-position: inside;
  }

  #list-style-position-inside ul {
    list-style-position: inside;
  }
</style>