---
title: grid-template-columns
description: grid-template-columns
date: "2019-11-12T10:34:07+07:00"
slug: grid-template-columns
css_collections:
- css-grid
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/grid-template-columns
caniuse: http://caniuse.com/#feat=css-grid
---

<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__default" data-tooltip="This is the property's default value">default</code>
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="grid-template-columns: none;">grid-template-columns: none;</code>
    </p>
    <div class="example__description">
      <p>No columns are defined, so you only have one.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-template-columns " id="grid-template-columns-none">
        <p class="block block--alpha"><strong>1.</strong> One</p>
        <p class="block block--beta"><strong>2.</strong> Two</p>
        <p class="block block--pink"><strong>3.</strong> Three</p>
        <p class="block block--yellow"><strong>4.</strong> Four</p>
        <p class="block block--orange"><strong>5.</strong> Five</p>
        <p class="block block--purple"><strong>6.</strong> Six</p>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="grid-template-columns: auto auto auto;">grid-template-columns: auto auto auto;</code>
    </p>
    <div class="example__description">
      <p>You can use the keyword <code>auto</code> so that each column resizes itself automatically.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-template-columns " id="grid-template-columns-auto-auto-auto">
        <p class="block block--alpha"><strong>1.</strong> One</p>
        <p class="block block--beta"><strong>2.</strong> Two</p>
        <p class="block block--pink"><strong>3.</strong> Three</p>
        <p class="block block--yellow"><strong>4.</strong> Four</p>
        <p class="block block--orange"><strong>5.</strong> Five</p>
        <p class="block block--purple"><strong>6.</strong> Six</p>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="grid-template-columns: 80px auto 1rem;">grid-template-columns: 80px auto 1rem;</code>
    </p>
    <div class="example__description">
      <p>You can mix the <strong>units</strong>.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-template-columns " id="grid-template-columns-80px-auto-1rem">
        <p class="block block--alpha"><strong>1.</strong> One</p>
        <p class="block block--beta"><strong>2.</strong> Two</p>
        <p class="block block--pink"><strong>3.</strong> Three</p>
        <p class="block block--yellow"><strong>4.</strong> Four</p>
        <p class="block block--orange"><strong>5.</strong> Five</p>
        <p class="block block--purple"><strong>6.</strong> Six</p>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="grid-template-columns: 40px 1fr 2fr;">grid-template-columns: 40px 1fr 2fr;</code>
    </p>
    <div class="example__description">
      <p>You can use the <code>fr</code> <strong>flex unit</strong> to distribute the <strong>remaining space</strong>
        across all flex columns.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example grid-template-columns " id="grid-template-columns-40px-1fr-2fr">
        <p class="block block--alpha"><strong>1.</strong> One</p>
        <p class="block block--beta"><strong>2.</strong> Two</p>
        <p class="block block--pink"><strong>3.</strong> Three</p>
        <p class="block block--yellow"><strong>4.</strong> Four</p>
        <p class="block block--orange"><strong>5.</strong> Five</p>
        <p class="block block--purple"><strong>6.</strong> Six</p>
      </div>
    </div>
  </aside>
</section>