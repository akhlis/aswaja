---
title: cursor
description: cursor
date: "2019-11-12T10:34:07+07:00"
slug: cursor
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/cursor
---

Properti CSS `cursor` menentukan jenis kursor mouse apa yang akan digunakan ketika mouse berada di atas elemen di mana
properti tersebut diterapkan.

Kursor dapat diatur ke salah satu dari banyak jenis kursor yang telah ditentukan sebelumnya, atau ke sebuah gambar.

Properti kursor hanya akan berpengaruh pada perangkat yang memiliki perangkat penunjuk seperti mouse.

## CSS Syntax
```css
cursor: value;
```

#### Javascript Syntax
```js
object.style.cursor="crosshair"
```

## Attribute Value

{{< property >}}
{{< property-value default="default" value="cursor: default;" >}}
Setel kursor ke nilai default elemen. Untuk tautan, itu akan menjadi pointer. Untuk teks itu akan menjadi kursor
pilihan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example cursor p-4" id="cursor-default">
  <p>Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="cursor: auto;" >}}
auto
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example cursor p-4" id="cursor-auto">
  <p>Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="cursor: pointer;" >}}
pointer
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example cursor p-4" id="cursor-pointer">
  <p>Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="cursor: move;" >}}
move
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example cursor p-4" id="cursor-move">
  <p>Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="cursor: crosshair;" >}}
crosshair
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example cursor p-4" id="cursor-crosshair">
  <p>Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="cursor: text;" >}}
text
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example cursor p-4" id="cursor-text">
  <p>Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="cursor: wait;" >}}
wait
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example cursor p-4" id="cursor-wait">
  <p>Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="cursor: help-resize;" >}}
help-resize
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example cursor p-4" id="cursor-help-resize">
  <p>Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="cursor: ne-resize;" >}}
ne-resize
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example cursor p-4" id="cursor-ne-resize">
  <p>Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="cursor: nw-resize;" >}}
nw-resize
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example cursor p-4" id="cursor-nw-resize">
  <p>Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="cursor: n-resize;" >}}
n-resize
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example cursor p-4" id="cursor-n-resize">
  <p>Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="cursor: se-resize;" >}}
se-resize
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example cursor p-4" id="cursor-se-resize">
  <p>Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="cursor: sw-resize;" >}}
sw-resize
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example cursor p-4" id="cursor-sw-resize">
  <p>Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="cursor: s-resize;" >}}
s-resize
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example cursor p-4" id="cursor-s-resize">
  <p>Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="cursor: w-resize;" >}}
w-resize
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example cursor p-4" id="cursor-w-resize">
  <p>Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}


<style type="text/css">
  #cursor-default {
    cursor: default;
  }

  #cursor-auto {
    cursor: auto;
  }

  #cursor-pointer {
    cursor: pointer;
  }

  #cursor-move {
    cursor: move;
  }

  #cursor-crosshair {
    cursor: crosshair;
  }

  #cursor-text {
    cursor: text;
  }

  #cursor-wait {
    cursor: wait;
  }

  #cursor-help-resize {
    cursor: help-resize;
  }

  #cursor-ne-resize {
    cursor: ne-resize;
  }

  #cursor-nw-resize {
    cursor: nw-resize;
  }

  #cursor-n-resize {
    cursor: n-resize;
  }

  #cursor-se-resize {
    cursor: se-resize;
  }

  #cursor-sw-resize {
    cursor: sw-resize;
  }

  #cursor-s-resize {
    cursor: s-resize;
  }

  #cursor-w-resize {
    cursor: w-resize;
  }
</style>