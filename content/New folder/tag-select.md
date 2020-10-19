# HTML `<select>` Tag

Menentukan _select dropdown_ dengan elemen `<option>` berbeda.

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
<select name="country">
  <option value="Argentina">Argentina</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Brazil">Brazil</option>
  <option value="Chile">Chile</option>
  <option value="Colombia">Colombia</option>
  <option value="Ecuador">Ecuador</option>
  <option value="Guyana">Guyana</option>
  <option value="Paraguay">Paraguay</option>
  <option value="Peru">Peru</option>
  <option value="Suriname">Suriname</option>
  <option value="Uruguay">Uruguay</option>
  <option value="Venezuela">Venezuela</option>
</select>
	</div>
</div>

```html
<select name="country">
  <option value="Argentina">Argentina</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Brazil">Brazil</option>
  <option value="Chile">Chile</option>
  <option value="Colombia">Colombia</option>
  <option value="Ecuador">Ecuador</option>
  <option value="Guyana">Guyana</option>
  <option value="Paraguay">Paraguay</option>
  <option value="Peru">Peru</option>
  <option value="Suriname">Suriname</option>
  <option value="Uruguay">Uruguay</option>
  <option value="Venezuela">Venezuela</option>
</select>
```

<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag attribute__tag--required">name</code>
		</h4>
		<div class="attribute__desc">
			<p>Menjelaskan penanda unik untuk pilihan didalam form.</p>
			<strong class="attribute__desc--required">Diperlukan.</strong>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"countries"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Nama value harus unik dalam konteks container form. Dan hanya boleh menggunakan karakter alphanumeric a-z A-Z 0-9 dan karakter khusus seperti - _.</p>
				</div>
			</header>
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
					<select name="country">
  <option value="Argentina">Argentina</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Brazil">Brazil</option>
  <option value="Chile">Chile</option>
  <option value="Colombia">Colombia</option>
  <option value="Ecuador">Ecuador</option>
  <option value="Guyana">Guyana</option>
  <option value="Paraguay">Paraguay</option>
  <option value="Peru">Peru</option>
  <option value="Suriname">Suriname</option>
  <option value="Uruguay">Uruguay</option>
  <option value="Venezuela">Venezuela</option>
</select>
				</div>
			</aside>
		</article>
	</div>
</article>
<article class="attribute">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">size</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan jumlah pilihan list yang ingin ditampilkan.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"12"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Kamu bisa menentukan dengan angka integer.</p>
				</div>
			</header>
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
					<select name="country" size="12">
  <option value="Argentina">Argentina</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Brazil">Brazil</option>
  <option value="Chile">Chile</option>
  <option value="Colombia">Colombia</option>
  <option value="Ecuador">Ecuador</option>
  <option value="Guyana">Guyana</option>
  <option value="Paraguay">Paraguay</option>
  <option value="Peru">Peru</option>
  <option value="Suriname">Suriname</option>
  <option value="Uruguay">Uruguay</option>
  <option value="Venezuela">Venezuela</option>
</select>
				</div>
			</aside>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag attribute__tag--novalue">multiple</code>
		</h4>
		<div class="attribute__desc">
			<p>Mengijinkan untuk memilih beberapa pilihan sekaligus.</p>
			<strong class="attribute__desc--novalue">Value tidak diperlukan</strong>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
<select multiple>
  <option value="Argentina">Argentina</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Brazil">Brazil</option>
  <option value="Chile">Chile</option>
  <option value="Colombia">Colombia</option>
  <option value="Ecuador">Ecuador</option>
  <option value="Guyana">Guyana</option>
  <option value="Paraguay">Paraguay</option>
  <option value="Peru">Peru</option>
  <option value="Suriname">Suriname</option>
  <option value="Uruguay">Uruguay</option>
  <option value="Venezuela">Venezuela</option>
</select>
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
			<p>Mengatur fokus pada selest saat halaman web diload.</p>
			<strong class="attribute__desc--novalue">Value tidak diperlukan</strong>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
<select autofocus>
  <option value="Argentina">Argentina</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Brazil">Brazil</option>
  <option value="Chile">Chile</option>
  <option value="Colombia">Colombia</option>
  <option value="Ecuador">Ecuador</option>
  <option value="Guyana">Guyana</option>
  <option value="Paraguay">Paraguay</option>
  <option value="Peru">Peru</option>
  <option value="Suriname">Suriname</option>
  <option value="Uruguay">Uruguay</option>
  <option value="Venezuela">Venezuela</option>
</select>
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
			<p>Menonaktifkan pilihan select.</p>
			<strong class="attribute__desc--novalue">Value tidak diperlukan</strong>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
<select disabled>
  <option value="Argentina">Argentina</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Brazil">Brazil</option>
  <option value="Chile">Chile</option>
  <option value="Colombia">Colombia</option>
  <option value="Ecuador">Ecuador</option>
  <option value="Guyana">Guyana</option>
  <option value="Paraguay">Paraguay</option>
  <option value="Peru">Peru</option>
  <option value="Suriname">Suriname</option>
  <option value="Uruguay">Uruguay</option>
  <option value="Venezuela">Venezuela</option>
</select>
				</div>
			</aside>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag attribute__tag--novalue">required</code>
		</h4>
		<div class="attribute__desc">
			<p>Memberitahukan pada web browser kalau pilihan select diperlukan. Jika dibiarkan kosong maka akan tampil peringatan.</p>
			<strong class="attribute__desc--novalue">Value tidak diperlukan</strong>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
<select disabled>
  <option value="Argentina">Argentina</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Brazil">Brazil</option>
  <option value="Chile">Chile</option>
  <option value="Colombia">Colombia</option>
  <option value="Ecuador">Ecuador</option>
  <option value="Guyana">Guyana</option>
  <option value="Paraguay">Paraguay</option>
  <option value="Peru">Peru</option>
  <option value="Suriname">Suriname</option>
  <option value="Uruguay">Uruguay</option>
  <option value="Venezuela">Venezuela</option>
</select>
				</div>
			</aside>
		</article>
	</div>
</article>