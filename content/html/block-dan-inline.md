---
title: Block dan Inline
description: Block dan Inline
date: "2019-11-18T10:34:07+07:00"
slug: block-dan-inline
weight: 180
authors:
- akhlis
---

Setiap elemen HTML memiliki nilai _display_ default yang tergantung dari tipe elemen itu sendiri.

Secara umum, nilai display ada 2 jenis, yaitu: block dan inline.

{{< tips >}}
Penjelasan lengkap tentang display bisa kamu pelajari di tutorial [mengenal display CSS](/css/pengertian-display-css/)
{{< /tips >}}

{{< toc >}}

## Elemen Level Block

Elemen level block selalu dimulai dengan baris baru dan mengambil lebar penuh (100%).

Contoh:
```html
<div>Elemen div memiliki nilai default level block</div>
```

<div class="border border-solid border-green-500 py-2 px-4 mb-6">
<p class="mb-0">Elemen &lt;div&gt; memiliki nilai default level block</p>
</div>

### Elemen level block di HTML

<div class="grid grid-cols-5 mb-6">
    <div class="col-span-1">
        <div class="mylist"><a href="/element/a/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>address<span class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/article"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>article<span class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/aside/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>aside<span class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/blockquote/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>blockquote<span class="text-teal-400">&gt;</span></span></a>
        </div>
        <div class="mylist"><a href="/element/canvas/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>canvas<span class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/dd/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>dd<span class="text-teal-400">&gt;</span></span></a></div>
    </div>
    <div class="col-span-1">
        <div class="mylist"><a href="/element/div/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>div<span class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/dl/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>dl<span class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/dt/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>dt<span class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/fieldset/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>fieldset<span class="text-teal-400">&gt;</span></span></a>
        </div>
        <div class="mylist"><a href="/element/figcaption/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>figcaption<span class="text-teal-400">&gt;</span></span></a>
        </div>
        <div class="mylist"><a href="/element/figure/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>figure<span class="text-teal-400">&gt;</span></span></a></div>
    </div>
    <div class="col-span-1">
        <div class="mylist"><a href="/element/footer/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>footer<span class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/form/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>form<span class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/hn/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>h1<span class="text-teal-400">&gt;</span></span>-<span
                    class="text-teal-500"><span class="text-teal-400">&lt;</span>h6<span
                        class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/header/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>header<span class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/hr/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>hr<span class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/li/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>li<span class="text-teal-400">&gt;</span></span></a></div>
    </div>
    <div class="col-span-1">
        <div class="mylist"><a href="/element/main/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>main<span class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/nav/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>nav<span class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/noscript/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>noscript<span class="text-teal-400">&gt;</span></span></a>
        </div>
        <div class="mylist"><a href="/element/ol/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>ol<span class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/p/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>p<span class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/pre/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>pre<span class="text-teal-400">&gt;</span></span></a></div>
    </div>
    <div class="col-span-1">
        <div class="mylist"><a href="/element/section/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>section<span class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/table/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>table<span class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/tfoot/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>tfoot<span class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/ul/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>ul<span class="text-teal-400">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/video/"><span class="text-teal-500"><span
                        class="text-teal-400">&lt;</span>video<span class="text-teal-400">&gt;</span></span></a></div>
    </div>
</div>

## Elemen Inline

Elemen inline tidak dimulai dengan baris baru dan hanya mengambil lebar yang diperlukannya saja.

<p>Ini adalah <span class="border border-solid border-green-500 py-2 px-3">elemen inline dengan tag &lt;span&gt;</span> di dalam paragraf.</p>

Contoh:
```html
<span>Ini elemen inline</span>
```

### Elemen level inline di HTML
<div class="grid grid-cols-5 mb-6">
    <div class="col-span-1">
        <div class="mylist"><a href="/element/a/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>a<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/abbr/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>abbr<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/acronym/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>acronym<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/b/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>b<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/bdo/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>bdo<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/big/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>big<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/br/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>br<span class="text-teal-500">&gt;</span></span></a></div>
    </div>
    <div class="col-span-1">
        <div class="mylist"><a href="/element/button/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>button<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/cite/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>cite<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/code/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>code<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/dfn/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>dfn<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/em/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>em<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/i/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>i<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/img/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>img<span class="text-teal-500">&gt;</span></span></a></div>
    </div>
    <div class="col-span-1">
        <div class="mylist"><a href="/element/input/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>input<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/kbd/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>kbd<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/label/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>label<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/map/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>map<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/object/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>object<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/output/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>output<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/q/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>q<span class="text-teal-500">&gt;</span></span></a></div>
    </div>
    <div class="col-span-1">
        <div class="mylist"><a href="/element/samp/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>samp<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/script/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>script<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/select/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>select<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/small/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>small<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/span/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>span<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/strong/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>strong<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/sub/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>sub<span class="text-teal-500">&gt;</span></span></a></div>
    </div>
    <div class="col-span-1">
        <div class="mylist"><a href="/element/sup/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>sup<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/textarea/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>textarea<span class="text-teal-500">&gt;</span></span></a>
        </div>
        <div class="mylist"><a href="/element/time/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>time<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/tt/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>tt<span class="text-teal-500">&gt;</span></span></a></div>
        <div class="mylist"><a href="/element/var/"><span class="text-teal-500"><span
                        class="text-teal-500">&lt;</span>var<span class="text-teal-500">&gt;</span></span></a></div>
    </div>
</div>

## Penggunaan Elemen &lt;div&gt;

Elemen `<div>` sering digunakan sebagai _container_ atau pembungkus elemen HTML lain.

Tujuan penggunaan elemen `<div>` ini untuk mengelompokkan beberapa elemen agar bisa diberi _style_ CSS yang sama.

```html
<style>
    .box {
        background-color: #ffe0b2;
        padding: 1em 1.5em;
    }
</style>
<div class="box">
    <h2>Apple</h2>
    <p>Apple Inc. adalah perusahaan teknologi multinasional Amerika yang berkantor pusat di Cupertino, California, yang mendesain, mengembangkan, dan menjual produk elektronik, perangkat lunak komputer, dan layanan online.</p>

    <p>Perusahaan ini juga menjadi salah satu dari 4 perusahaan teknologi terbesar bersama dengan Amazon, Google, dan Facebook.</p>
</div>
```


{{< preview >}}
<div class="bg-orange-100 py-4 px-6">
    <h2>Apple</h2>
    <p>Apple Inc. adalah perusahaan teknologi multinasional Amerika yang berkantor pusat di Cupertino, California, yang mendesain, mengembangkan, dan menjual produk elektronik, perangkat lunak komputer, dan layanan online.</p>

    <p>Perusahaan ini juga menjadi salah satu dari 4 perusahaan teknologi terbesar bersama dengan Amazon, Google, dan Facebook.</p>
</div>
{{< /preview >}}

## Penggunaan Elemen &lt;span&gt;

Elemen `<span>` sering digunakan sebagai _container_ atau pembungkus elemen level inline atau teks.

Tujuan penggunaan elemen `<span>` ini untuk memudahkan dalam memberi _style_ bagian dari teks.
```html
<h1>Ini Judul Teks  <span style="color:red">Penting</span></h1>
```

{{< preview >}}
<h1>Ini Judul Teks  <span style="color:red">Penting</span></h1>
{{< /preview >}}