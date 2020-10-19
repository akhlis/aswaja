---
title: transition-timing-function
description: transition-timing-function
date: "2019-11-12T10:34:07+07:00"
slug: transition-timing-function
css_collections:
- transisi
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/transition-timing-function
caniuse: http://caniuse.com/#feat=css-transitions
---

<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__default" data-tooltip="This is the property's default value">default</code>
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="transition-timing-function: ease;">transition-timing-function: ease;</code>
    </p>
    <div class="example__description">
      <p>The transition starts slowly, accelerates in the middle, and slows down at the end.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example transition-timing-function " id="transition-timing-function-ease">
        <p class="square square--alpha">Hover me</p>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="transition-timing-function: ease-in;">transition-timing-function: ease-in;</code>
    </p>
    <div class="example__description">
      <p>The transition starts slowly, and accelerates gradually until the end.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example transition-timing-function " id="transition-timing-function-ease-in">
        <p class="square square--alpha">Hover me</p>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="transition-timing-function: ease-out;">transition-timing-function: ease-out;</code>
    </p>
    <div class="example__description">
      <p>The transition starts quickly, and decelerates gradually until the end.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example transition-timing-function " id="transition-timing-function-ease-out">
        <p class="square square--alpha">Hover me</p>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="transition-timing-function: ease-in-out;">transition-timing-function: ease-in-out;</code>
    </p>
    <div class="example__description">
      <p>Like <code>ease</code>, but more pronounced.</p>
      <p>The transition starts quickly, and decelerates gradually until the end.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example transition-timing-function " id="transition-timing-function-ease-in-out">
        <p class="square square--alpha">Hover me</p>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="transition-timing-function: linear;">transition-timing-function: linear;</code>
    </p>
    <div class="example__description">
      <p>The transition has a <em>*constant speed</em>.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example transition-timing-function " id="transition-timing-function-linear">
        <p class="square square--alpha">Hover me</p>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="transition-timing-function: step-start;">transition-timing-function: step-start;</code>
    </p>
    <div class="example__description">
      <p>The transition jumps <em>instantly</em> to the <strong>final state</strong>.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example transition-timing-function " id="transition-timing-function-step-start">
        <p class="square square--alpha">Hover me</p>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="transition-timing-function: step-end;">transition-timing-function: step-end;</code>
    </p>
    <div class="example__description">
      <p>The transition stays at the <strong>initial state</strong> until the end, when it <em>instantly</em> jumps to
        the <strong>final state</strong>.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example transition-timing-function " id="transition-timing-function-step-end">
        <p class="square square--alpha">Hover me</p>
      </div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="transition-timing-function: steps(4, end);">transition-timing-function: steps(4,
        end);</code>
    </p>
    <div class="example__description">
      <p>By using <code>steps()</code> with an <strong>integer</strong>, you can define a specific <em>number</em> of
        steps before reaching the end. The state of the element will <em>not</em> vary gradually, but rather
        <strong>jump</strong> from state to state in separate instants.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example transition-timing-function " id="transition-timing-function-steps4-end">
        <p class="square square--alpha">Hover me</p>
      </div>
    </div>
  </aside>
</section>