---
title: word-break
description: word-break
date: "2019-11-12T10:34:07+07:00"
slug: word-break
css_collections:
- typography
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/word-break
caniuse: http://caniuse.com/#feat=word-break
---

<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__default" data-tooltip="This is the property's default value">default</code>
      <code class="example__value" data-tooltip="Click to copy" data-clipboard-text="word-break: normal;">word-break:
        normal;</code>
    </p>
    <div class="example__description">
      <p>Words with no space will <strong>not</strong> break. Sequences of uninterrupted characters will be displayed
        on a single line.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example word-break  block block--alpha" id="word-break-normal">
        Thequickbrownfoxjumpsoverthelazydog</div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy" data-clipboard-text="word-break: break-all;">word-break:
        break-all;</code>
    </p>
    <div class="example__description">
      <p>Words with no space will <strong>break</strong> as soon as they reach the end of a line.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example word-break  block block--alpha" id="word-break-break-all">
        Thequickbrownfoxjumpsoverthelazydog</div>
    </div>
  </aside>
</section>