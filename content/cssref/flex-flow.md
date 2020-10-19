---
title: flex-flow
description: flex-flow
date: "2019-11-12T10:34:07+07:00"
slug: flex-flow
css_collections:
- flexbox
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/flex-flow
caniuse: http://caniuse.com/#feat=flexbox
---

Properti CSS `flex-flow` merupakan sub-properti dari modul layout kotak [Flexbox](/css/flexbox).

Properti flex-flow adalah singkatan untuk mengatur properti `flex-direction` dan `flex-wrap`, yang bersama-sama
menentukan sumbu utama dan poros penyaluran _container_.

Nilai awal dari properti `flex-flow` ini adalah rangkuman dari nilai awal properti `flex-direction` dan `flex-wrap`.

```css
flex-flow: row nowrap;
```

## CSS Syntax
```css
flex-flow: flex-direction flex-wrap | initial | inherit;
```

#### Javascript Syntax
```js
object.style.flexFlow="column nowrap"
```

## Attribute Value

- `flex-direction`
    - row
    - row-reverse
    - column
    - column-reverse
    - initial
    - inherit
- `flex-wrap`
    - nowrap
    - wrap
    - wrap-reverse
    - initial
    - inherit

{{< editor class="w-1/3" >}}
{{< editor-html >}}
```html
<p>
    <code>flex-flow: row nowrap; /* the default value */</code>
</p>
<div class="flex__wrap">
    <div class="flex__item">1</div>
    <div class="flex__item">2</div>
    <div class="flex__item">3</div>
    <div class="flex__item">4</div>
    <div class="flex__item">5</div>
    <div class="flex__item">6</div>
    <div class="flex__item">7</div>
    <div class="flex__item">8</div>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.flex__wrap {
display: flex;
flex-flow: row nowrap;
margin: 20px auto;
width: 100%;
padding: 20px;
display: flex;
flex-flow: row nowrap;
background-color: #594255;
}

.flex__item {
background-color: #fff;
width: 100px;
height: 100px;
margin: 2px;
text-align: center;
line-height: 100px;
font-weight: bold;
font-family: sans-serif;
font-size: 5em;
color: #594255;
}
```
{{< /editor-css >}}
{{< editor-js >}}
```js
#tab1:checked~#content1,
#tab2:checked~#content2,
#tab3:checked~#content3,
#tab4:checked~#content4{
display: block;
padding: 20px;
background: #fff;
color: #999;
border-bottom: 2px solid #f0f0f0;
}
```
{{< /editor-js >}}
{{< editor-preview >}}
<p>
    <code>flex-flow: row nowrap; /* the default value */</code>
</p>
<div class="flex__wrap">
    <div class="flex__item">1</div>
    <div class="flex__item">2</div>
    <div class="flex__item">3</div>
    <div class="flex__item">4</div>
    <div class="flex__item">5</div>
    <div class="flex__item">6</div>
    <div class="flex__item">7</div>
    <div class="flex__item">8</div>
</div>
{{< /editor-preview >}}
{{< /editor >}}



<style type="text/css">
    .flex__wrap {
        display: flex;
        flex-flow: row nowrap;
        margin: 20px auto;
        width: 100%;
        padding: 20px;
        display: flex;
        flex-flow: row nowrap;
        background-color: #80CBC4;
    }

    .flex__item {
        background-color: #FFE082;
        width: 100px;
        height: 100px;
        margin: 2px;
        text-align: center;
        line-height: 100px;
        font-weight: bold;
        font-family: sans-serif;
        font-size: 5em;
        color: #FF9800;
    }
</style>