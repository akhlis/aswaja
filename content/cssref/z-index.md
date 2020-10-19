---
title: z-index
description: z-index
date: "2019-11-18T10:34:07+07:00"
slug: z-index
css_collections:
- posisi
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/z-index
---

Defines the *order* of the elements on the *z-axis*. It only works on *positioned* elements (anything apart from static).

<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example--default" data-tooltip="This is the property's default value">default</code>
      <code class="example--value" data-tooltip="Click to copy" data-clipboard-text="z-index: auto;">z-index:
        auto;</code>
    </p>
    <div class="example__description">
      <p>The order is defined by the order in the <strong>HTML code</strong>:</p>
      <ul>
        <li>first in the code = behind</li>
        <li>last in the code = in front</li>
      </ul>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example z-index " id="z-index-auto">
        <div class="block block--alpha">One</div>
        <div class="block block--pink">Two<br><strong>Target</strong></div>
        <div class="block block--beta">Three</div>
        <div class="block block--yellow">Four</div>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example--value" data-tooltip="Click to copy" data-clipboard-text="z-index: 1;">z-index: 1;</code>
    </p>
    <div class="example__description">
      <p>The z-index value is <strong>relative</strong> to the other ones. The target element is move in
        <strong>front</strong> of its siblings.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example z-index " id="z-index-1">
        <div class="block block--alpha">One</div>
        <div class="block block--pink">Two<br><strong>Target</strong></div>
        <div class="block block--beta">Three</div>
        <div class="block block--yellow">Four</div>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example--value" data-tooltip="Click to copy" data-clipboard-text="z-index: -1;">z-index: -1;</code>
    </p>
    <div class="example__description">
      <p>You can use <strong>negative values</strong>. The target element is move in <strong>behind</strong> its
        siblings.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example z-index " id="z-index--1">
        <div class="block block--alpha">One</div>
        <div class="block block--pink">Two<br><strong>Target</strong></div>
        <div class="block block--beta">Three</div>
        <div class="block block--yellow">Four</div>
      </div>
    </div>
  </aside>
</section>