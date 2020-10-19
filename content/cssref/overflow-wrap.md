---
title: overflow-wrap
description: overflow-wrap
date: "2019-11-12T10:34:07+07:00"
slug: overflow-wrap
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/overflow-wrap
---

Properti `overflow-wrap` di CSS memungkinkan kamu untuk menentukan bahwa browser dapat memecah baris teks di dalam
elemen yang ditargetkan ke beberapa baris di tempat yang tidak dapat dipecahkan.

Ini membantu menghindari string teks yang luar biasa panjang dan menyebabkan masalah tata letak karena meluap.

Contoh:

```css
.example {
overflow-wrap: break-word;
}
```

{{< property >}}
{{< property-value default="default" value="overflow-wrap: normal;" >}}
Kata-kata tanpa spasi tidak akan pecah. Urutan karakter yang tidak terputus akan ditampilkan pada satu baris.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example overflow-wrap  block block--alpha text-sm leading-tight bg-green-100 p-4"
  id="overflow-wrap-normal">
  Thequickbrownfoxjumpsoverthelazydog</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="overflow-wrap: break-word;" >}}
Kata-kata tanpa spasi akan pecah segera setelah mereka mencapai akhir baris.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example overflow-wrap  block block--alpha text-sm leading-tight bg-green-100 p-4"
  id="overflow-wrap-break-word">
  Thequickbrownfoxjumpsoverthelazydog</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .overflow-wrap {
    font-family: "Source Code Pro", monospace;
    width: 18em;
  }

  #overflow-wrap-normal {
    overflow-wrap: normal;
  }

  #overflow-wrap-break-word {
    overflow-wrap: break-word;
  }
</style>