---
title: grid-row-start
description: grid-row-start
date: "2019-11-12T10:34:07+07:00"
slug: grid-row-start
css_collections:
- css-grid
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/grid-row-start
caniuse: http://caniuse.com/#feat=css-grid
---

<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__default" data-tooltip="This is the property's default value">default</code>
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="grid-row-start: auto;">grid-row-start: auto;</code>
    </p>
    <div class="example__description">
      <p>In this <strong>3-column setup</strong>, the grid item is automatically placed on the first row.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-row-start " id="grid-row-start-auto">
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
      <code class="example__value" data-tooltip="Click to copy" data-clipboard-text="grid-row-start: 2;">grid-row-start:
        2;</code>
    </p>
    <div class="example__description">
      <p>The target grid item is placed on the <strong>second</strong> row.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-row-start " id="grid-row-start-2">
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
      <code class="example__value" data-tooltip="Click to copy" data-clipboard-text="grid-row-start: 3;">grid-row-start:
        3;</code>
    </p>
    <div class="example__description">
      <p>The target grid item is placed <em>outside</em> the grid, in an auto-generated <strong>third</strong> row.
      </p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-row-start " id="grid-row-start-3">
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