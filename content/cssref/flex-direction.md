---
title: flex-direction
description: flex-direction
date: "2019-11-12T10:34:07+07:00"
slug: flex-direction
css_collections:
- flexbox
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/flex-direction
caniuse: http://caniuse.com/#feat=flexbox
---

Properti CSS `flex-direction` merupakan sub-properti dari modul layout kotak [Flexbox](/css/flexbox).

Properti `flex-direction` ini memungkinkan kamu untuk mengatur arah item flex berjalan dalam wadah flex mereka.

Kamu juga dapat menentukan apakah item flex dijalankan dalam baris atau kolom. 

Dan kamu juga dapat membuatnya berjalan dalam urutan terbalik.

Properti ini menerima nilai-nilai berikut:
- row
- row-reverse
- column
- column-reverse

{{< note >}}
Jika elemen bukan item yang fleksibel, properti `flex-direction` tidak berpengaruh.
{{< /note >}}

## CSS Syntax
```css
flex-direction: row | row-reverse | column | column-reverse | initial | inherit;
```

#### Javascript Syntax
```js
object.style.flexDirection="column-reverse"
```

## Attribute Value

{{< property >}}
{{< property-value default="default" value="flex-direction: row;" >}}
Elemen akan secara otomatis diukur berdasarkan isinya, atau pada nilai `width` dan `height` apa pun jika ditentukan.
{{< /property-value >}}
{{< property-preview >}}
      <div class="property__example flex-direction flex flex-row" id="flex-direction-row">
        <p class="block bg-purple-200 py-4 px-2 text-center text-sm rounded-sm">Flex Item 1</p>
        <p class="block bg-indigo-200 py-4 px-2 text-center text-sm rounded-sm">Flex Item 2</p>
        <p class="block bg-blue-200 py-4 px-2 text-center text-sm rounded-sm">Flex Item 3</p>
        <p class="block bg-teal-200 py-4 px-2 text-center text-sm rounded-sm">Flex Item 4</p>
      </div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="flex-direction: row-reverse;" >}}
Item-item flexbox disusun dengan cara yang berlawanan dengan arah teks, di sepanjang sumbu utama.
{{< /property-value >}}
{{< property-preview >}}
      <div class="property__example flex-direction flex flex-row-reverse" id="flex-direction-row-reverse">
        <p class="block bg-purple-200 py-4 px-2 text-center text-sm rounded-sm">Flex Item 1</p>
        <p class="block bg-indigo-200 py-4 px-2 text-center text-sm rounded-sm">Flex Item 2</p>
        <p class="block bg-blue-200 py-4 px-2 text-center text-sm rounded-sm">Flex Item 3</p>
        <p class="block bg-teal-200 py-4 px-2 text-center text-sm rounded-sm">Flex Item 4</p>
      </div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="flex-direction: column;" >}}
Item-item flexbox disusun dengan cara yang sama seperti arah teks, di sepanjang sumbu silang.
{{< /property-value >}}
{{< property-preview >}}
      <div class="property__example flex-direction flex flex-col" id="flex-direction-column">
        <p class="block bg-purple-200 py-4 px-2 text-center text-sm rounded-sm">Flex Item 1</p>
        <p class="block bg-indigo-200 py-4 px-2 text-center text-sm rounded-sm">Flex Item 2</p>
        <p class="block bg-blue-200 py-4 px-2 text-center text-sm rounded-sm">Flex Item 3</p>
        <p class="block bg-teal-200 py-4 px-2 text-center text-sm rounded-sm">Flex Item 4</p>
      </div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="flex-direction: column-reverse;" >}}
Item-item flexbox disusun dengan cara yang berlawanan dengan arah teks, di sepanjang sumbu silang
{{< /property-value >}}
{{< property-preview >}}
      <div class="property__example flex-direction flex flex-col-reverse" id="flex-direction-column-reverse">
        <p class="block bg-purple-200 py-4 px-2 text-center text-sm rounded-sm">Flex Item 1</p>
        <p class="block bg-indigo-200 py-4 px-2 text-center text-sm rounded-sm">Flex Item 2</p>
        <p class="block bg-blue-200 py-4 px-2 text-center text-sm rounded-sm">Flex Item 3</p>
        <p class="block bg-teal-200 py-4 px-2 text-center text-sm rounded-sm">Flex Item 4</p>
      </div>
{{< /property-preview >}}
{{< /property >}}