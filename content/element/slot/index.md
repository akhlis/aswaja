---
title: slot
description: slot
date: "2019-11-18T10:34:07+07:00"
slug: slot
authors:
- akhlis
name: slot
experimental: true
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/slot
---

Elemen `<slot>` — bagian dari rangkaian teknologi Komponen Web — adalah penampung di dalam komponen web yang dapat kamu isi dengan markup kamu sendiri, yang memungkinkan kamu membuat pohon DOM terpisah dan menyajikannya bersama-sama.

{{< code lang="html" >}}
<template id="element-details-template">
  <style>
    details {font-family: "Open Sans Light", Helvetica, Arial, sans-serif }
    .name {font-weight: bold; color: #217ac0; font-size: 120% }
    h4 {
      margin: 10px 0 -8px 0;
      background: #217ac0; 
      color: white;
      padding: 2px 6px;
      border: 1px solid #cee9f9; 
      border-radius: 4px;
    }
    .attributes { margin-left: 22px; font-size: 90% }
    .attributes p { margin-left: 16px; font-style: italic }
  </style>
  <details>
    <summary>
      <code class="name">&lt;<slot name="element-name">NEED NAME</slot>&gt;</code>
      <i class="desc"><slot name="description">NEED DESCRIPTION</slot></i>
    </summary>
    <div class="attributes">
      <h4>Attributes</h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr>
</template>
{{< /code >}}