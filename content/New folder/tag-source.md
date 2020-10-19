# HTML `<source>` Tag

Menentukan sumber elemen `<audio>`, `<video>`, atau `<picture>`.

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
<picture>
 <source
  media="(min-width: 800px)"
  srcset="/images/sunset-360.jpg 360w,
          /images/sunset-720.jpg 720w,
          /images/sunset-1440.jpg 1440w"
  sizes="33.3vw">
 <source
  srcset="/images/sunset-720.jpg 2x,
          /images/sunset-360.jpg 1x">
 <img src="/images/sunset.jpg" alt="Picture of a Ha Long Bay sunset">
</picture>
	</div>
</div>

```html
<picture>
 <source
  media="(min-width: 800px)"
  srcset="/images/sunset-360.jpg 360w,
          /images/sunset-720.jpg 720w,
          /images/sunset-1440.jpg 1440w"
  sizes="33.3vw">
 <source
  srcset="/images/sunset-720.jpg 2x,
          /images/sunset-360.jpg 1x">
 <img src="/images/sunset.jpg" alt="Picture of a Ha Long Bay sunset">
</picture>
```

<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">src</code>
		</h4>
		<div class="attribute__desc">
			<p>URL yang menunjukkan lokasi media.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"/images/tiramisu.jpg"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>kamu bisa menggunakan URL relative.</p>
				</div>
			</header>
		</article>
        <article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"https://htmlreference.io/images/traffic.jpg"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>kamu juga bisa menggunakan URL absolute.</p>
				</div>
			</header>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">srcset</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan daftar sumber yang berbeda pada media yang sama. Browser akan memilih salah satu yang terbaik.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"/images/sunset-360.jpg 360w, /images/sunset-720.jpg 720w, /images/sunset-1440.jpg 1440w"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Kamu bisa menggunakan keterangan lebar sepserti 360w. Nilainya ini ditentukan oleh salah satu ukuran sumber media berdasarkan kerapatan pixel.</p>
				</div>
			</header>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">sizes</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan daftar sumber media yang berbeda ukuran. Kamu bisa mengkombinasikan masing-masing dengan media query.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"(min-width: 800px) 1440px, 720px"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Browser akan menggunakan gambar dengan ukuran 1440px (berdasarkan srcset) jika viewport lebih dari 800px. Jika viewport kurang dari 800px maka akan menggunakan gambar dengan ukuran 720px</p>
				</div>
			</header>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">type</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan tipe media</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"image/jpg"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Kamu hanya bisa menggunakan audio, video, atau gambar dengan tipe MIME</p>
				</div>
			</header>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">media</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan media query untuk sumber file &lt;picture&gt;.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"(min-width: 800px)"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>media hanya digunakan pada viewport yang lebih besar dari 800px</p>
				</div>
			</header>
		</article>
	</div>
</article>