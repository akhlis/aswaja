---
title: grid-row
description: grid-row
date: "2019-11-12T10:34:07+07:00"
slug: grid-row
css_collections:
- css-grid
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/grid-row
caniuse: http://caniuse.com/#feat=css-grid
---

<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__default" data-tooltip="This is the property's default value">default</code>
      <code class="example__value" data-tooltip="Click to copy" data-clipboard-text="grid-row: auto auto;">grid-row:
        auto auto;</code>
    </p>
    <div class="example__description">
      <p>The grid item&#39;s row start and end are automatically set.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-row " id="grid-row-auto-auto">
        <p class="block block--alpha">Item</p>
        <p class="block block--beta">Item</p>
        <p class="block block--pink"><strong>Target</strong></p>
        <p class="block block--yellow">Item</p>
        <p class="block block--purple">Item</p>
        <p class="block block--alpha">Item</p>
        <p class="block block--beta">Item</p>
        <p class="block block--yellow">Item</p>
        <p class="block block--purple">Item</p>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy" data-clipboard-text="grid-row: 1 / 3;">grid-row: 1 /
        3;</code>
    </p>
    <div class="example__description">
      <p>The grid item starts before the first row and ends just before the third one.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-row " id="grid-row-1--3">
        <p class="block block--alpha">Item</p>
        <p class="block block--beta">Item</p>
        <p class="block block--pink"><strong>Target</strong></p>
        <p class="block block--yellow">Item</p>
        <p class="block block--purple">Item</p>
        <p class="block block--alpha">Item</p>
        <p class="block block--beta">Item</p>
        <p class="block block--yellow">Item</p>
        <p class="block block--purple">Item</p>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy" data-clipboard-text="grid-row: span 3;">grid-row: span
        3;</code>
    </p>
    <div class="example__description">
      <p>The grid item spans <strong>3 rows</strong>.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-row " id="grid-row-span-3">
        <p class="block block--alpha">Item</p>
        <p class="block block--beta">Item</p>
        <p class="block block--pink"><strong>Target</strong></p>
        <p class="block block--yellow">Item</p>
        <p class="block block--purple">Item</p>
        <p class="block block--alpha">Item</p>
        <p class="block block--beta">Item</p>
        <p class="block block--yellow">Item</p>
        <p class="block block--purple">Item</p>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy" data-clipboard-text="grid-row: 1 / span 4;">grid-row: 1
        / span 4;</code>
    </p>
    <div class="example__description">
      <p>The grid items starts before the first row and spans for <strong>4 rows</strong>, creating a new one in the
        process.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-row " id="grid-row-1--span-4">
        <p class="block block--alpha">Item</p>
        <p class="block block--beta">Item</p>
        <p class="block block--pink"><strong>Target</strong></p>
        <p class="block block--yellow">Item</p>
        <p class="block block--purple">Item</p>
        <p class="block block--alpha">Item</p>
        <p class="block block--beta">Item</p>
        <p class="block block--yellow">Item</p>
        <p class="block block--purple">Item</p>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy" data-clipboard-text="grid-row: header;">grid-row:
        header;</code>
    </p>
    <div class="example__description">
      <p>You can use an <strong>area name</strong> to &quot;copy&quot; its row start and end positions.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-row " id="grid-row-header">
        <p class="block block--alpha">Header</p>
        <p class="block block--beta">Sidebar</p>
        <p class="block block--yellow">Main</p>
        <p class="block block--purple">Footer</p>
        <p class="block block--pink"><strong>Target</strong></p>
      </div>
    </div>
  </aside>
</section>