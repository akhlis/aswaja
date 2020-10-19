---
title: grid-template-rows
description: grid-template-rows
date: "2019-11-12T10:34:07+07:00"
slug: grid-template-rows
css_collections:
- css-grid
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/grid-template-rows
caniuse: http://caniuse.com/#feat=css-grid
---

<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__default" data-tooltip="This is the property's default value">default</code>
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="grid-template-rows: none;">grid-template-rows: none;</code>
    </p>
    <div class="example__description">
      <p>No rows are defined.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-template-rows " id="grid-template-rows-none">
        <p class="block block--alpha"><strong>1.</strong> One</p>
        <p class="block block--beta"><strong>2.</strong> Two</p>
        <p class="block block--pink"><strong>3.</strong> Three</p>
        <p class="block block--yellow"><strong>4.</strong> Four</p>
        <p class="block block--purple"><strong>5.</strong> Five</p>
        <p class="block block--orange"><strong>6.</strong> Six</p>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="grid-template-rows: 120px auto 3rem;">grid-template-rows: 120px auto 3rem;</code>
    </p>
    <div class="example__description">
      <p>You can mix the <strong>units</strong>.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-template-rows " id="grid-template-rows-120px-auto-3rem">
        <p class="block block--alpha"><strong>1.</strong> One</p>
        <p class="block block--beta"><strong>2.</strong> Two</p>
        <p class="block block--pink"><strong>3.</strong> Three</p>
        <p class="block block--yellow"><strong>4.</strong> Four</p>
        <p class="block block--purple"><strong>5.</strong> Five</p>
        <p class="block block--orange"><strong>6.</strong> Six</p>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="grid-template-rows: 20px 1fr 2fr;">grid-template-rows: 20px 1fr 2fr;</code>
    </p>
    <div class="example__description">
      <p>You can use the <code>fr</code> <strong>flex unit</strong> to distribute the <strong>remaining space</strong>
        across all flex rows.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-template-rows " id="grid-template-rows-20px-1fr-2fr">
        <p class="block block--alpha"><strong>1.</strong> One</p>
        <p class="block block--beta"><strong>2.</strong> Two</p>
        <p class="block block--pink"><strong>3.</strong> Three</p>
        <p class="block block--yellow"><strong>4.</strong> Four</p>
        <p class="block block--purple"><strong>5.</strong> Five</p>
        <p class="block block--orange"><strong>6.</strong> Six</p>
      </div>
    </div>
  </aside>
</section>