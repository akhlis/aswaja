---
title: grid-column-end
description: grid-column-end
date: "2019-11-12T10:34:07+07:00"
slug: grid-column-end
css_collections:
- css-grid
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/grid-column-end
caniuse: http://caniuse.com/#feat=css-grid
---

<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__default" data-tooltip="This is the property's default value">default</code>
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="grid-column-end: auto;">grid-column-end: auto;</code>
    </p>
    <div class="example__description">
      <p>In this <strong>3-column setup</strong>, the grid item is automatically placed.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-column-end " id="grid-column-end-auto">
        <p class="block block--alpha">Item</p>
        <p class="block block--beta">Item</p>
        <p class="block block--pink"><strong>Target</strong></p>
        <p class="block block--yellow">Item</p>
        <p class="block block--orange">Item</p>
        <p class="block block--purple">Item</p>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="grid-column-end: 2;">grid-column-end: 2;</code>
    </p>
    <div class="example__description">
      <p>The target grid item ends just before the <strong>second</strong> column.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-column-end " id="grid-column-end-2">
        <p class="block block--alpha">Item</p>
        <p class="block block--beta">Item</p>
        <p class="block block--pink"><strong>Target</strong></p>
        <p class="block block--yellow">Item</p>
        <p class="block block--orange">Item</p>
        <p class="block block--purple">Item</p>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="grid-column-end: 1;">grid-column-end: 1;</code>
    </p>
    <div class="example__description">
      <p>The target grid item ends just before the <strong>first</strong> column, which automatically creates a
        <em>fourth</em> column.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-column-end " id="grid-column-end-1">
        <p class="block block--alpha">Item</p>
        <p class="block block--beta">Item</p>
        <p class="block block--pink"><strong>Target</strong></p>
        <p class="block block--yellow">Item</p>
        <p class="block block--orange">Item</p>
        <p class="block block--purple">Item</p>
      </div>
    </div>
  </aside>
</section>