# HTML `<ol>` Tag

Digunakan untuk membuat __Ordered List__.

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
<ol>
  <li>Step one</li>
  <li>Step two</li>
  <li>????</li>
  <li>PROFIT!!!</li>
</ol>
	</div>
</div>

```html
<ol>
  <li>Step one</li>
  <li>Step two</li>
  <li>????</li>
  <li>PROFIT!!!</li>
</ol>
```

<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">type</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan tipe urutan list.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"1"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Default (dengan angka).</p>
				</div>
			</header>
            <aside class="attribute__preview">
				<div class="attribute__preview-output">
                    <ol>
                        <li>Apel</li>
                        <li>Melon</li>
                        <li>Jeruk</li>
                        <li>Nanas</li>
                        <li>Semangka</li>
                    </ol>
				</div>
			</aside>
		</article>
        <article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"a"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Menggunakan lowercase atau huruf kecil.</p>
				</div>
			</header>
            <aside class="attribute__preview">
				<div class="attribute__preview-output">
                    <ol type="a">
                        <li>Apel</li>
                        <li>Melon</li>
                        <li>Jeruk</li>
                        <li>Nanas</li>
                        <li>Semangka</li>
                    </ol>
				</div>
			</aside>
		</article>
        <article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"A"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Menggunakan uppercase atau huruf besar.</p>
				</div>
			</header>
            <aside class="attribute__preview">
				<div class="attribute__preview-output">
                    <ol type="A">
                        <li>Apel</li>
                        <li>Melon</li>
                        <li>Jeruk</li>
                        <li>Nanas</li>
                        <li>Semangka</li>
                    </ol>
				</div>
			</aside>
		</article>
        <article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"i"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Menggunakan lowercase huruf roman.</p>
				</div>
			</header>
            <aside class="attribute__preview">
				<div class="attribute__preview-output">
                    <ol type="a">
                        <li>Apel</li>
                        <li>Melon</li>
                        <li>Jeruk</li>
                        <li>Nanas</li>
                        <li>Semangka</li>
                    </ol>
				</div>
			</aside>
		</article>
        <article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"I"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Menggunakan uppercase huruf Roman.</p>
				</div>
			</header>
            <aside class="attribute__preview">
				<div class="attribute__preview-output">
                    <ol type="a">
                        <li>Apel</li>
                        <li>Melon</li>
                        <li>Jeruk</li>
                        <li>Nanas</li>
                        <li>Semangka</li>
                    </ol>
				</div>
			</aside>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">start</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan angka permulaan dalam daftar list.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"3"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Contoh dimulai dengan angka 3</p>
				</div>
			</header>
            <aside class="attribute__preview">
				<div class="attribute__preview-output">
                    <ol start="3">
                        <li>Apel</li>
                        <li>Melon</li>
                        <li>Jeruk</li>
                        <li>Nanas</li>
                        <li>Semangka</li>
                    </ol>
				</div>
			</aside>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag attribute__tag--novalue">reversed</code>
		</h4>
		<div class="attribute__desc">
			<p>Membalik urutan daftar list.</p>
		</div>
        <strong class="attribute__desc--novalue">Value tidak diperlukan</strong>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
            <aside class="attribute__preview">
				<div class="attribute__preview-output">
                    <ol reversed>
                        <li>Apel</li>
                        <li>Melon</li>
                        <li>Jeruk</li>
                        <li>Nanas</li>
                        <li>Semangka</li>
                    </ol>
				</div>
			</aside>
		</article>
	</div>
</article>