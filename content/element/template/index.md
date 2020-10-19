---
title: template
description: template
date: "2019-11-18T10:34:07+07:00"
slug: template
authors:
- akhlis
name: template
experimental: true
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/template
---

Tag `<template>` memungkinkan kamu untuk mendeklarasikan fragmen HTML yang tidak digunakan saat dokumen dimuat, tetapi dapat digunakan nanti saat pengguna melakukan tindakan (dengan bantuan script).

Isi elemen `<template>` bukan bagian dari dokumen hingga kamu menggunakannya. Karena itu, sampai kamu menggunakannya, tidak ada konten yang diunduh, dan kamu tidak dapat merujuknya melalui DOM.

Ketika konten elemen `<template>` digunakan, mereka dikloning dan dimasukkan ke dalam DOM. Oleh karena itu, kamu dapat menggunakannya beberapa kali, dan kamu bahkan dapat menambahkan isinya.

## Syntax

Tag `<template>` ditulis seperti `<template></template>` dengan konten template diletakkan diantara tag pembuka dan penutup.

Atribut global `id` biasanya digunakan sehingga script dapat merujuk ke elemen ini.

Seperti ini:
```html
<template id="myTemplate">
	Konten template ...
</template>
```

#### Contoh

{{< code lang="html" >}}
<!-- Template Content -->
<template id="myTemplate">
<p>Template content. Click again...</p>
</template>

<!-- Normal Content -->
<div id="normalContent">
<p>Normal content</p>
</div>

<!-- JavaScript function: Clones the template and appends it to the normal content -->
<button onclick="useTemplate();">Use Template!</button>
<script>
function useTemplate() {
var myTemplate = document.getElementById('myTemplate'),
    normalContent = document.getElementById('normalContent'),
    clonedTemplate = myTemplate.content.cloneNode(true);
    normalContent.appendChild(clonedTemplate);
    }
</script>
{{< /code >}}

{{< code lang="html" >}}
<!DOCTYPE html>
<title>Example</title>
<style>
    #myTable {
        border-collapse: collapse;
    }

    #myTable td,
    #myTable th {
        padding: 5px;
        border: 1px solid #ccc;
    }

    #myTable th {
        background-color: #eee;
    }
</style>
<!-- JavaScript function: Clones the template and appends it to the normal content -->
<button onclick="addRow();">Add Row</button>

<!-- Template Content -->
<template id="newRow">
    <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
    </tr>
</template>

<!-- Normal Content -->
<table id="myTable" contenteditable>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
    </tr>
</table>

<script>
    function addRow() {
        var myTemplate = document.getElementById('newRow'),
            normalContent = document.getElementById('myTable'),
            clonedTemplate = myTemplate.content.cloneNode(true);
        normalContent.appendChild(clonedTemplate);
    }
</script>
{{< /code >}}

{{< browser tag="template" chrome="26.0" edge="13.0" firefox="22.0" safari="9" opera="15.0" >}}
