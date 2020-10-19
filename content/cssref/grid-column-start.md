---
title: grid-column-start
description: grid-column-start
date: "2019-11-12T10:34:07+07:00"
slug: grid-column-start
css_collections:
- css-grid
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/grid-column-start
caniuse: http://caniuse.com/#feat=css-grid
---

<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__default" data-tooltip="This is the property's default value">default</code>
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="grid-column-start: auto;">grid-column-start: auto;</code>
    </p>
    <div class="example__description">
      <p>In this <strong>3-column setup</strong>, the grid item is automatically placed.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-column-start " id="grid-column-start-auto">
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
        data-clipboard-text="grid-column-start: 2;">grid-column-start: 2;</code>
    </p>
    <div class="example__description">
      <p>The target grid item is placed on the <strong>second</strong> column.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-column-start " id="grid-column-start-2">
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
        data-clipboard-text="grid-column-start: 4;">grid-column-start: 4;</code>
    </p>
    <div class="example__description">
      <p>The target grid item is placed <em>outside</em> the grid, in an auto-generated <strong>fourth</strong>
        column.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-column-start " id="grid-column-start-4">
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