---
title: canvas
description: canvas
date: "2019-11-18T10:34:07+07:00"
slug: canvas
authors:
- akhlis
name: canvas
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/canvas
caniuse: https://caniuse.com/#feat=canvas
---

Tag `<canvas>` digunakan untuk membuat grafis didalam dokumen HTML.

Tag ini bisa merender grafis, grafis permainan, teks unik, atau gambar lainnya.

Dan tag ini sendiri merender canvas kosong sebagai container. 

Untuk menggambar di canvas, tag `<canvas>` dibantu oleh Javascript dengan method _getContext()_.

## Syntax

Tag `<canvas>` ditulis seperti `<canvas id=""></canvas>` dengan konten diletakkan diantara tag pembuka dan penutup.

Kamu juga bisa mengatur tinggi dan lebar canvas menggunakan atribut `height` dan `width`.

Jika kamu tidak menggunakan atribut tersebut, maka canvas akan dirender sesuai dengan ukuran default yaitu lebarnya 300 dan tingginya 150.

```html
<canvas id="myCanvas">
Fallback content...
</canvas>

<script>
function displayCanvas()
	{
      var canvas = document.getElementById("myCanvas");
...
</script>
```

#### Contoh Canvas Persegi

{{< code lang="html" >}}
<canvas id="Rectangles" width="300" height="200">
<p>Your browser does not support the canvas tag.</p> 
<p>Here's an <a href="/pix/html_5/tags/html_canvas_tag.gif">image of what it's supposed to look like</a>.</p>
</canvas>
<script>
var canvasRect = document.getElementById("Rectangles");
if (canvasRect.getContext) {
  var ctxRect = canvasRect.getContext("2d");

  ctxRect.fillStyle = "rgb(200,0,0)";
  ctxRect.fillRect (0, 0, 150, 75);

  ctxRect.fillStyle = "rgba(0, 0, 200, 0.5)";
  ctxRect.fillRect (40, 30, 125, 75);

  ctxRect.fillStyle = "rgb(0,0,150)";
  ctxRect.strokeRect (20, 20, 50, 100); 
}
</script>
{{< /code >}}

#### Contoh Bezier Curves

{{< code lang="html" >}}
<canvas id="Path"><p>Your browser does not support the canvas tag.</p></canvas>
<script>
var canvasPath = document.getElementById("Path");
if (canvasPath.getContext) {
	var ctxPath = canvasPath.getContext("2d");

	ctxPath.beginPath();
	ctxPath.moveTo(150, 130);
	ctxPath.bezierCurveTo(90, 100, 40, 75, 160, 15);
	ctxPath.bezierCurveTo(130, 50, 110, 75, 150, 130);
	
	ctxPath.closePath();
	ctxPath.lineWidth = 1;
	ctxPath.strokeStyle = '#f90';
	ctxPath.stroke(); 
}
</script>
{{< /code >}}

#### Contoh Teks 

{{< code lang="html" >}}
<canvas id="Text"><p>Your browser does not support the canvas tag.</p></canvas>
<script>
var canvasText = document.getElementById("Text");
if (canvasText.getContext) {
	var ctxText = canvasText.getContext("2d");
	var text = 'Canvas';
	ctxText.font = '60pt Cursive';
	ctxText.fillStyle = '#fc0';
	ctxText.strokeStyle = '#f90';
	ctxText.fillText(text, 3, 62);
	ctxText.strokeText(text, 1, 60);
 }
</script>
{{< /code >}}

#### Canvas dengan Gambar

{{< code lang="html" >}}
<canvas id="Image"><p>Your browser does not support the canvas tag.</p></canvas>
<script>
var canvasImage = document.getElementById("Image");
if (canvasImage.getContext) {
	var ctxImage = canvasImage.getContext('2d');
	var imageObj = new Image();
	
	imageObj.onload = function() {
	  ctxImage.drawImage(imageObj, 10, 10);
	};
	imageObj.src = '/images/html/phi-phi-200x150.png';
 }
</script>
{{< /code >}}

## Atribut Canvas

<article id="canvas-height" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="height">
        height
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan tinggi canvas.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="canvas-height-50" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy height=&quot;50&quot;"
            data-clipboard-text="height=&quot;50&quot;">
            "50"
          </code>
        </h4>
        <div class="value__description">
          <p>Defaultnya 150.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><canvas height="50"></canvas></div>
      </aside>
    </article>
  </div>
</article>
<article id="canvas-width" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="width">
        width
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan lebar canvas.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="canvas-width-200" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy width=&quot;200&quot;"
            data-clipboard-text="width=&quot;200&quot;">
            "200"
          </code>
        </h4>
        <div class="value__description">
          <p>Defaultnya 100.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><canvas width="200"></canvas></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="canvas" chrome="4.0" edge="9.0" firefox="2.0" safari="3.1" opera="9.0" >}}

## Pengaturan Default CSS

Sebagian besar browser akan menampilkan elemen `canvas` dengan default CSS berikut:

```css
canvas {
  height: 150px;
  width: 300px;
}
```