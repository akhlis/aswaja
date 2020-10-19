---
title: Mengenal Warna di HTML
description: Mengenal Warna di HTML
date: "2019-11-18T10:34:07+07:00"
slug: mengenal-warna-html
weight: 111
authors:
- akhlis
---

Dalam web desain, pewarnaan pada HTML dilakukan dengan menggunakan kode.

Mungkin kamu juga sudah terbiasa melihat beberapa kode seperti #92a8d1 dan #ff0000.

Kedua kode tersebut merupakan kode _hexadecimal_ atau disingkat HEX.

Ada beberapa tipe kode warna yang biasanya digunakan dalam CSS, yaitu nama warna, atau RGB, HEX, HSL, RGBA, HSLA.

## Nama Warna

Cara paling mudah untuk memberi warna di HTML yaitu dengan menggunakan kode nama warna. Yaitu:

<div class="flex flex-wrap text-sm text-white -ml-4 -mr-4 mb-6">
    <div class="w-1/4 h-75px px-4 mb-4"><div class="w-full h-full flex justify-center items-center tomato">Tomato</div></div>
    <div class="w-1/4 h-75px px-4 mb-4"><div class="w-full h-full flex justify-center items-center orange">Orange</div></div>
    <div class="w-1/4 h-75px px-4 mb-4"><div class="w-full h-full flex justify-center items-center DodgerBlue">DodgerBlue</div></div>
    <div class="w-1/4 h-75px px-4 mb-4"><div class="w-full h-full flex justify-center items-center MediumSeaGreen">MediumSeaGreen</div></div>
    <div class="w-1/4 h-75px px-4"><div class="w-full h-full flex justify-center items-center Gray">Gray</div></div>
    <div class="w-1/4 h-75px px-4"><div class="w-full h-full flex justify-center items-center SlateBlue">SlateBlue</div></div>
    <div class="w-1/4 h-75px px-4"><div class="w-full h-full flex justify-center items-center Violet">Violet</div></div>
    <div class="w-1/4 h-75px px-4"><div class="w-full h-full flex justify-center items-center LightGray">LightGray</div></div>
</div>
<style>
    .tomato {
        background-color: tomato;
    }
    .orange {
        background-color: orange;
    }
    .DodgerBlue {
        background-color: DodgerBlue;
    }
    .MediumSeaGreen {
        background-color: MediumSeaGreen;
    }
    .Gray {
        background-color: Gray;
    }
    .SlateBlue {
        background-color: SlateBlue;
    }
    .Violet {
        background-color: Violet;
    }
    .LightGray {
        background-color: LightGray;
    }
</style>

```css
div {
    background-color: tomato;
}
```