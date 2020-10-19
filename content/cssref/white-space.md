---
title: white-space
description: white-space
date: "2019-11-12T10:34:07+07:00"
slug: white-space
css_collections:
- typography
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/white-space
---

<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__default" data-tooltip="This is the property's default value">default</code>
      <code class="example__value" data-tooltip="Click to copy" data-clipboard-text="white-space: normal;">white-space:
        normal;</code>
    </p>
    <div class="example__description">
      <p>Sequences of spaces are combined into one.<br>Line breaks are ignored.<br>The text content is wrapped.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example white-space  block block--alpha" id="white-space-normal">#parent .selector ul li
        blockquote{
        color: red;
        font-size: 1rem;
        }</div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy" data-clipboard-text="white-space: nowrap;">white-space:
        nowrap;</code>
    </p>
    <div class="example__description">
      <p>Sequences of spaces are combined into one.<br>Line breaks are ignored.<br>The text content is
        <strong>not</strong> wrapped and remains on a <strong>single line</strong>.</p>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example white-space  block block--alpha" id="white-space-nowrap">#parent .selector ul li
        blockquote{
        color: red;
        font-size: 1rem;
        }</div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy" data-clipboard-text="white-space: pre;">white-space:
        pre;</code>
    </p>
    <div class="example__description">
      <p>The white space is <strong>exactly preserved</strong>.</p>
      <ul>
        <li>Sequences of spaces are preserved</li>
        <li>Lines break only on new lines and <code>&lt;br&gt;</code></li>
      </ul>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example white-space  block block--alpha" id="white-space-pre">#parent .selector ul li
        blockquote{
        color: red;
        font-size: 1rem;
        }</div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="white-space: pre-wrap;">white-space: pre-wrap;</code>
    </p>
    <div class="example__description">
      <p>The white space is <strong>mostly preserved</strong>.</p>
      <ul>
        <li>Sequences of spaces are preserved</li>
        <li>Lines break on new lines, <code>&lt;br&gt;</code>, but also when reaching the end of the element</li>
      </ul>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example white-space  block block--alpha" id="white-space-pre-wrap">#parent .selector ul
        li blockquote{
        color: red;
        font-size: 1rem;
        }</div>
    </div>
  </aside>
</section>
<section class="example">
  <header class="example__header">
    <p class="example__name">
      <code class="example__value" data-tooltip="Click to copy"
        data-clipboard-text="white-space: pre-line;">white-space: pre-line;</code>
    </p>
    <div class="example__description">
      <p>Only <strong>new lines</strong> are preserved.</p>
      <ul>
        <li>Sequences of spaces are <strong>combined</strong> into one</li>
        <li>Lines break on new lines, <code>&lt;br&gt;</code>, but also when reaching the end of the element</li>
      </ul>
    </div>
  </header>
  <aside class="example__preview">
    <div class="example__browser"><i></i><i></i><i></i></div>
    <div class="example__output">
      <div class="property__example white-space  block block--alpha" id="white-space-pre-line">#parent .selector ul
        li blockquote{
        color: red;
        font-size: 1rem;
        }</div>
    </div>
  </aside>
</section>