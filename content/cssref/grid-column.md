---
title: grid-column
description: grid-column
date: "2019-11-12T10:34:07+07:00"
slug: grid-column
css_collections:
- css-grid
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/grid-column
caniuse: http://caniuse.com/#feat=css-grid
---

Properti CSS `grid-column` adalah singkatan untuk penempatan item grid berbasis baris di sepanjang garis awal dan akhir
kolom.

{{< editor class="w-1/3" >}}
{{< editor-html >}}
```html
<div id="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
#grid {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 1px;
}

#grid>div {
background-color: #A5D6A7;
color: white;
font-size: 1.9em;
padding: 10px;
}

#grid>div:nth-child(6) {
grid-column: 1 / 3;
background: #FFE082;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div id="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>
{{< /editor-preview >}}
{{< /editor >}}

Properti `grid-column` adalah singkatan untuk properti `grid-column-start` dan `grid-column-end`.

Ini memungkinkan kamu untuk menentukan baris mana yang memulai item grid, dan berapa banyak trek yang terbentang.
Yuk lihat kode yang relevan dari contoh di atas:
```css
#grid>div:nth-child(6) {
grid-column: 1 / 3;
background: #FFE082;
}
```

Kode ini menghasilkan item grid keenam dipindahkan ke kolom 1 dari baris berikutnya, dan merentangkan dua kolom.

Untuk lebih tepatnya, angka 1 dan 3 sebenarnya merujuk pada garis grid. Jadi item grid dimulai pada garis grid 1 dan
berakhir pada garis grid 3.

Garis miring ke depan (/) memisahkan nilai awal kolom-kolom dari nilai akhir kolom-kolom.

## CSS Syntax
```css
grid-column: grid-column-start / grid-column-end;
```

#### JavaScript Syntax
```js
object.style.gridColumn="2 / span 2"
```

{{< cssref default="auto / auto" inherited="tidak" animatable="ya" version="CSS Grid Layout Module Level 1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="grid-column: auto auto;" >}}
Awal dan akhir kolom grid item diatur secara otomatis.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example grid-column " id="grid-column-auto-auto">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4">Item</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4">Item</p>
  <p class="block block--pink text-sm bg-pink-100 rounded-sm p-4"><strong>Target</strong></p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4">Item</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4">Item</p>
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4">Item</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4">Item</p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4">Item</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4">Item</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="grid-column: 1 / 3;" >}}
Item grid dimulai sebelum kolom pertama dan berakhir tepat sebelum yang ketiga.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example grid-column " id="grid-column-1--3">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4">Item</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4">Item</p>
  <p class="block block--pink text-sm bg-pink-100 rounded-sm p-4"><strong>Target</strong></p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4">Item</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4">Item</p>
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4">Item</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4">Item</p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4">Item</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4">Item</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="grid-column: span 3;" >}}
Item grid mencakup __3 kolom__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example grid-column " id="grid-column-span-3">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4">Item</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4">Item</p>
  <p class="block block--pink text-sm bg-pink-100 rounded-sm p-4"><strong>Target</strong></p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4">Item</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4">Item</p>
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4">Item</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4">Item</p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4">Item</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4">Item</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="grid-column: 1 / span 4;" >}}
Item grid dimulai sebelum kolom pertama dan membentang untuk __4 kolom__, membuat yang baru dalam proses.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example grid-column " id="grid-column-1--span-4">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4">Item</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4">Item</p>
  <p class="block block--pink text-sm bg-pink-100 rounded-sm p-4"><strong>Target</strong></p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4">Item</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4">Item</p>
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4">Item</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4">Item</p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4">Item</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4">Item</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="grid-column: main;" >}}
Kamu dapat menggunakan nama area untuk "menyalin" posisi awal dan akhir kolomnya.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example grid-column " id="grid-column-main">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4">Header</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4">Sidebar</p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4">Main</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4">Footer</p>
  <p class="block block--pink text-sm bg-pink-100 rounded-sm p-4"><strong>Target</strong></p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  #grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1px;
  }

  #grid>div {
    background-color: #A5D6A7;
    color: white;
    font-size: 1.9em;
    padding: 10px;
  }

  #grid>div:nth-child(6) {
    grid-column: 1 / 3;
    background: #FFE082;
  }

  .grid-column {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0;
  }

  #grid-column-auto-auto {
    grid-column: auto auto;
  }

  #grid-column-1--3 {
    grid-column: 1 / 3;
  }

  #grid-column-1--3 .block--pink {
    grid-column: 1 / 3;
  }

  #grid-column-span-3 {
    grid-column: span 3;
  }

  #grid-column-span-3 .block--pink {
    grid-column: span 3;
  }

  #grid-column-1--span-4 {
    grid-column: 1 / span 4;
  }

  #grid-column-1--span-4 .block--pink {
    grid-column: 1 / span 4;
  }

  #grid-column-main {
    grid-column: main;
  }

  #grid-column-main {
    grid-template-columns: 3fr 70fr;
    grid-template-rows: 50px 200px 50px;
    grid-template-areas: "header header header""sidebar main main""sidebar main main""sidebar footer footer";
  }

  #grid-column-main .block--alpha {
    grid-area: header;
  }

  #grid-column-main .block--beta {
    grid-area: sidebar;
  }

  #grid-column-main .block--yellow {
    grid-area: main;
  }

  #grid-column-main .block--purple {
    grid-area: footer;
  }

  #grid-column-main .block--pink {
    grid-column: main;
  }
</style>