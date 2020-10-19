---
title: grid-auto-columns
description: grid-auto-columns
date: "2019-11-12T10:34:07+07:00"
slug: grid-auto-columns
css_collections:
- css-grid
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/grid-auto-columns
caniuse: http://caniuse.com/#feat=css-grid
---

Properti CSS `grid-auto-columns` menentukan nama garis dan melacak fungsi ukuran kolom yang dibuat secara implisit pada
grid.

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
  <div>10</div>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
#grid {
display: grid;
grid-template-rows: 80px 80px;
grid-template-columns: 300px;
grid-auto-columns: 10%;
grid-auto-flow: column;
grid-gap: 5px;
}

#grid>div {
background-color: #F48FB1;
color: white;
font-size: 1.9em;
padding: 10px;
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
  <div>10</div>
</div>
{{< /editor-preview >}}
{{< /editor >}}

Properti `grid-auto-columns` hanya memengaruhi kolom dengan ukuran yang tidak ditetapkan.

Jika kita memeriksa kode dari contoh diatas:
```css
grid-template-columns: 300px;
grid-auto-columns: 10%;
grid-auto-flow: column;
```

Kamu bisa melihat bahwa hanya kolom pertama yang secara eksplisit berukuran dengan properti `grid-template-column`.

Keempat kolom lainnya dibuat secara implisit, dan oleh karena itu mereka berukuran sesuai dengan properti
`grid-auto-columns`.

Hasilnya, kolom pertama adalah 300px dan kolom lainnya 10%;

## CSS Syntax
```css
grid-auto-columns: auto | max-content | min-content | length;
```

#### JavaScript Syntax
```js
object.style.gridAutoColumns="120px"
```
{{< cssref default="auto" inherited="tidak" animatable="ya" version="CSS Grid Layout Module Level 1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="grid-auto-columns: auto;" >}}
Kolom yang dibuat dengan implikasi memiliki ukuran otomatis.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example grid-auto-columns " id="grid-auto-columns-auto">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4"><strong>1.</strong> One</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4"><strong>2.</strong> Two</p>
  <p class="block block--pink text-sm bg-pink-100 rounded-sm p-4"><strong>3.</strong> Three</p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4"><strong>4.</strong> Four</p>
  <p class="block block--orange text-sm bg-orange-100 rounded-sm p-4"><strong>5.</strong> Five</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4"><strong>6.</strong> Six</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="grid-auto-columns: 100px;" >}}
Di sini kami menggabungkan `grid-template-areas: "header header header" "sidebar main main"` dengan `grid-template-columns: 50px 200px`.

Dalam situasi ini, `grid-template-areas` mendefinisikan 3 kolom, sedangkan `grid-template-columns` hanya menetapkan 2 lebar kolom.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example grid-auto-columns " id="grid-auto-columns-100px">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4">Header</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4">Sidebar</p>
  <p class="block block--pink text-sm bg-pink-100 rounded-sm p-4">Main</p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4">50px</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4">200px</p>
  <p class="block block--orange text-sm bg-orange-100 rounded-sm p-4">100px</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  #grid {
    display: grid;
    grid-template-rows: 80px 80px;
    grid-template-columns: 300px;
    grid-auto-columns: 10%;
    grid-auto-flow: column;
    grid-gap: 5px;
  }

  #grid>div {
    background-color: #F48FB1;
    color: white;
    font-size: 1.9em;
    padding: 10px;
  }

  .grid-auto-columns {
    display: grid;
    padding: 0;
  }

  #grid-auto-columns-auto {
    grid-auto-columns: auto;
  }

  #grid-auto-columns-100px {
    grid-auto-columns: 100px;
  }

  #grid-auto-columns-100px {
    grid-template-areas: "header header header""sidebar main main";
    grid-template-columns: 50px 200px;
  }

  #grid-auto-columns-100px .block--alpha {
    grid-area: header;
  }

  #grid-auto-columns-100px .block--beta {
    grid-area: sidebar;
  }

  #grid-auto-columns-100px .block--pink {
    grid-area: main;
  }
</style>