# HTML `<button>` Tag

Digunakan untuk membuat elemen tombol (button) pada halaman website.

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
        <button>
        Daftar Sekarang
        </button>
	</div>
</div>

```html
<button>
  Daftar Sekarang
</button>
```

<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">name</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan penanda unik pada tombol (button) didalam form yang memungkinkan server untuk mengakses setiap nilai(value) saat disubmit.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"tombol_daftar"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Nama penanda harus unik yang terkait dengan container &lt;form&gt;. Dan hanya boleh menggunakan karakter alphanumeric a-z A-Z 0-9 dan karakter khusus seperti - dan _ .</p>
				</div>
			</header>
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
                    <button>
                    Daftar Sekarang
                    </button>
				</div>
			</aside>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">value</code>
		</h4>
		<div class="attribute__desc">
			<p>Value(nilai) dikirim ke server saat form disubmit.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"primary"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Server akan menerima nilai "primary".</p>
				</div>
			</header>
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
                    <button>
                    Daftar Sekarang
                    </button>
				</div>
			</aside>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">type</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan type button.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"submit"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Button mengirim data form ke server.</p>
				</div>
			</header>
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
                    <button type="submit">
                    Daftar Sekarang
                    </button>
				</div>
			</aside>
		</article>
        <article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"reset"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Button mereset data form.</p>
				</div>
			</header>
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
                    <button type="reset">
                    Daftar Sekarang
                    </button>
				</div>
			</aside>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag attribute__tag--novalue">disabled</code>
		</h4>
		<div class="attribute__desc">
			<p>Menonaktifkan button.</p>
            <strong class="attribute__desc--novalue">Value tidak diperlukan</strong>
		</div>
	</header>
	<div class="attribute__values">
        <article class="attribute__value">
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
                    <button type="submit" disabled>
                    Daftar Sekarang
                    </button>
				</div>
			</aside>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag attribute__tag--novalue">autofocus</code>
		</h4>
		<div class="attribute__desc">
			<p>Memfokuskan ke elemen saat halaman web diload.</p>
            <strong class="attribute__desc--novalue">Value tidak diperlukan</strong>
		</div>
	</header>
	<div class="attribute__values">
        <article class="attribute__value">
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
                    <button type="submit" autofocus>
                    Daftar Sekarang
                    </button>
				</div>
			</aside>
		</article>
	</div>
</article>
