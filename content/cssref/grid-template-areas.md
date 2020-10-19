---
title: grid-template-areas
description: grid-template-areas
date: "2019-11-12T10:34:07+07:00"
slug: grid-template-areas
css_collections:
- css-grid
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/grid-template-areas
caniuse: http://caniuse.com/#feat=css-grid
---

<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__default" data-tooltip="This is the property's default value">default</code>
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="grid-template-areas: none;">grid-template-areas: none;</code>
    </p>
    <div class="example__description">
      <p>No area is defined.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-template-areas " id="grid-template-areas-none">
        <p class="block block--alpha">Header</p>
        <p class="block block--beta">Sidebar</p>
        <p class="block block--pink">Main</p>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="grid-template-areas: &quot;header header header&quot; &quot;sidebar main main&quot;;">grid-template-areas:
        &quot;header header header&quot; &quot;sidebar main main&quot;;</code>
    </p>
    <div class="example__description">
      <p>You can use <strong>area names</strong> to specify which cells each grid item should occupy.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-template-areas "
        id="grid-template-areas-header-header-header-sidebar-main-main">
        <p class="block block--alpha">Header</p>
        <p class="block block--beta">Sidebar</p>
        <p class="block block--pink">Main</p>
      </div>
    </div>
  </aside>
</section>