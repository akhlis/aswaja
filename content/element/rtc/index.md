---
title: rtc
description: rtc
date: "2019-11-18T10:34:07+07:00"
slug: rtc
authors:
- akhlis
name: rtc
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/rtc
---

Tag `<rtc>` (Ruby Text Container) mencakup anotasi semantik karakter yang disajikan dalam elemen `<rb>` yang digunakan di dalam elemen `<ruby>`.

Elemen `<rb>` dapat memiliki anotasi pelafalan (`<rt>`) dan semantik (`<rtc>`).

## Syntax

Tag `<rtc>` ditulis seperti `<rtc> </rtc>` dengan komponen teks ruby ​​dimasukkan di antara tag pembuka dan penutup.

```html
Tag <rtc> ditulis sebagai <rtc> </rtc> dengan komponen teks ruby ​​dimasukkan di antara tag awal dan akhir.
```

{{< code lang="html" >}}
<ruby>
  <rb>旧</rb>
  <rb>金</rb>
  <rb>山</rb>
  <rt>jiù</rt>
  <rt>jīn</rt>
  <rt>shān</rt>
  <rtc>San Francisco</rtc>
</ruby>
{{< /code >}}