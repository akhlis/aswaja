---
title: bdi
description: bdi
date: "2019-11-18T10:34:07+07:00"
slug: bdi
authors:
- akhlis
name: bdi
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/bdi
---

Elemen `bdi` digunakan pada rentang teks yang perlu diisolasi dari sekitarnya untuk keperluan pemformatan teks dua arah.

Elemen ini berguna pada website yang memiliki teks kiri-ke-kanan namun terdapat konten teks yang berjalan dari kanan ke kiri seperti teks bahasa Arab, Ibrani, Persia, Urdu, dll.

Dengan elemen `bdi` memungkinkan kamu untuk menulis teks tersebut dengan arah yang benar.

## Syntax

Tag `<bdi>` ditulis seperti `<bdi></bdi>` dengan teks yang arahnya berlawanan disematkan diantara tag pembuka dan pebutup.

{{< code lang="html" >}}
Kata <bdi>مرحبا</bdi> artinya "Halo" dalam bahasa Arab
{{< /code >}}

{{< browser tag="base" chrome="ya" edge="tidak" firefox="ya" safari="ya" opera="ya" >}}