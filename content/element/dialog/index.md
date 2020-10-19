---
title: dialog
description: dialog
date: "2019-11-18T10:34:07+07:00"
slug: dialog
authors:
- akhlis
name: dialog
experimental: true
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/dialog
caniuse: https://caniuse.com/#feat=dialog
---

Tag `<dialog>` menunjukkan bagian dari aplikasi yang dapat berinteraksi dengan pengguna untuk melakukan tugas.

Misalnya kotak dialog, inspektur, atau jendela.

Elemen `<dialog>` memiliki atribut `open` yang menetapkan elemen menjadi "aktif" dan memungkinkan pengguna untuk berinteraksi dengannya.

Jika atribut dihilangkan, kamu harus menggunakan script (seperti Javascript) untuk mengaktifkan dialog agar bisa terbuka dan tertutup sesuai kebutuhan.

## Syntax

Tag `<dialog>` ditulis seperti `<dialog id=""></dialog>` dengan konten dialog diletakkan diantara tag pembuka dan penutup.

Atribut id dapat digunakan untuk mengaitkan script dengan elemen `<dialog>`.

Seperti ini:
```html
<dialog id="">
    <p>Konten Dialog ...</p>
    <button id="hide">Tutup</button>
</dialog>
```

{{< code lang="html" >}}
<dialog open>
<p><q>The world is full of magical things patiently waiting for our wits to grow sharper.</q> - <cite>Bertrand Russell</cite></p>
</dialog>
{{< /code >}}

{{< code lang="html" >}}
<dialog id="dialog1">
<p><q>The world is full of magical things patiently waiting for our wits to grow sharper.</q> - <cite>Bertrand Russell</cite></p>
<button id="hide1">Close</button>
</dialog>
<!-- "Show" button -->
<button id="show1">Show Dialog</button>

<!-- JavaScript to provide the "Show/Close" functionality -->
<script type="text/JavaScript">
(function() {  
    var dialog1 = document.getElementById('dialog1');  
    document.getElementById('show1').onclick = function() {  
        dialog1.show();  
    };  
    document.getElementById('hide1').onclick = function() {  
        dialog1.close();  
    };  
})(); 
</script>
{{< /code >}}

{{< browser tag="dialog" chrome="37.0" edge="tidak" firefox="59.0" safari="6.0" opera="24.0" >}}