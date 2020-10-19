---
title: latihan Coding
description: latihan
date: "2019-11-18T10:34:07+07:00"
slug: latihan
authors:
- akhlis
---

<div class="main-holder">
	<div class="top-pane">
		<div class="box-1">

    <textarea id="html" class="language-html">
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tuliskan Judul Website Kamu disini</title>
    <meta name="description" content="tulis deskripsi/penjelasan singkat mengenai websitemu disini">
</head>

<body>
    <div>
        <header>
            <div>
                <h2>Codingku.id</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/">home</a>
                        <a href="/artikel">artikel</a>
                        <a href="/blog">blog</a>
                        <a href="/kontak">kontak</a>
                        <a href="/tentang-kami">tentang kami</a>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <article>
                <h1>Belajar Membuat Website Sendiri dari Nol</h1>
                <div>
                    <p>Membuat website sebenarnya sangat mudah, yang diperlukan hanyalah teks editor untuk menulis baris kode HTML.</p>
                    <p>Selain kode editor, tentu saja diperlukan web browser untuk menjalankan file HTML yang sudah dibuat tadi.</p>
                    <p>Tulis paragraf selanjutnya disini</p>
                </div>
            </article>
        </main>
        <aside>
            <h4>Judul Sidebar</h4>
            <div>Tempat Widget disini</div>
        </aside>
        <footer>
            <span>Ditulis oleh <a href="codingku.id">codingku.id</a></span>
        </footer>
    </div>
</body>

</html>
    </textarea>
</div>
		<div class="drag-x"></div>
		<div class="box-2">
    <textarea id="css" class="language-css">
html {
    background: #e6e9e9;
}

body {
    background: #fff;
    color: #545454;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    margin: 0 auto;
    max-width: 1040px;
    height: 100vh;
    padding: 0 2em;
}

h1 {
    color: #222;
    font-weight: 600;
    line-height: 1.3;
}

h4 {
    margin: 0.5em 0;
}

a {
    color: #0083e8;
}

body > div {
    display: grid;
    grid-template-areas:
        'header header header header'
        'main main main aside'
        'footer footer footer footer';
    grid-gap: 30px;
}

header {
    grid-area: header;
}

main {
    grid-area: main;
    min-height: 400px;
}

aside {
    grid-area: aside;
    background: #e6e9e9;
    min-width: 240px;
    padding: 1.5em;
}

footer {
    grid-area: footer;
    text-align: center;
    padding: 1em 1.5em;
    background: ghostwhite;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

li {
    margin: 0;
    padding: 0;
    background: gainsboro;
    height: 42px;
}

ul li a {
    display: inline-block;
    text-transform: capitalize;
    text-decoration: none;
    color: dimgrey;
    line-height: 42px;
    padding-left: 12px;
    padding-right: 12px;
}

ul li a:hover {
    background: ghostwhite;
}
    </textarea>

</div>
	</div>
	<div class="drag-y"></div>
	<div class="bottom-pane">
    <!-- Preview of the code -->
<div class="iframe">
    <iframe id="preview" allow="autoplay" allowfullscreen></iframe>
</div>
    </div>
</div>