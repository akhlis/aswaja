---
title: list-style
description: list-style
date: "2019-11-12T10:34:07+07:00"
slug: list-style
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/list-style
---

Properti CSS `list-style` adalah singkatan properti `list-style-type`, `list-style-image`, dan `list-style-position`.

Properti `list-style` merupakan cara yang lebih mudah untuk mengatur gaya penanda daftar untuk _list items_ dan item yang memiliki `display: list-item`, daripada menggunakan tiga properti sekaligus.

Jika gambar yang ditentukan menggunakan properti `list-style-image` tersedia, itu akan menggantikan set penanda menggunakan properti `list-style-type`.

Jika salah satu dari tiga nilai properti di atas tidak diatur di properti singkatan, maka akan diatur ke nilai defaultnya oleh browser.

Properti `list-style` dapat ditetapkan pada item daftar atau pada daftar item (`<ul>` atau `<ol>`), dan gaya itu akan mengalir dan diterapkan ke item daftar dalam daftar tersebut.

## CSS Syntax
```css
list-style: list-style-type list-style-position list-style-image | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.listStyle="decimal inside"
```

{{< cssref default="disc outside none" inherited="ya" animatable="tidak" version="CSS1" >}}
