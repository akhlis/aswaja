---
title: will-change
description: will-change
date: "2019-11-12T10:34:07+07:00"
slug: will-change
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/will-change
---

<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__default" data-tooltip="This is the property's default value">default</code>
      <code class="example__value" data-tooltip="Click to copy" data-clipboard-text="will-change: auto;">will-change:
        auto;</code>
    </p>
    <div class="example__description">
      <p><strong>Doesn&#39;t</strong> tell the browser to optimize <em>any</em> property.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example will-change " id="will-change-auto">Hello world</div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="will-change: scroll-position;">will-change: scroll-position;</code>
    </p>
    <div class="example__description">
      <p>Tells the browser to optimize for the element&#39;s <strong>scroll position</strong>, as it might change in
        the future.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example will-change " id="will-change-scroll-position">Hello world</div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="will-change: contents;">will-change: contents;</code>
    </p>
    <div class="example__description">
      <p>Tells the browser to optimize for the element&#39;s <strong>contents</strong>, as it might change in the
        future.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example will-change " id="will-change-contents">Hello world</div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="will-change: box-shadow;">will-change: box-shadow;</code>
    </p>
    <div class="example__description">
      <p>You can specify any other CSS <strong>property</strong>. For example, this tells the browser to optimize for
        the element&#39;s <strong>box-shadow</strong>, as it might change in the future.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example will-change " id="will-change-box-shadow">Hello world</div>
    </div>
  </aside>
</section>