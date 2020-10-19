# HTML `<option>` Tag

Digunakan untuk membuat option didalam elemen `<select>`

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
			<code class="attribute__tag attribute__tag--required">value</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan nilai &lt;select&gt; jika option dipilih.</p>
			<strong class="attribute__desc--required">Diperlukan.</strong>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"south-africa"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Value akan dikirim ke server saat form disubmit.</p>
				</div>
			</header>
		</article>
        <aside class="attribute__preview">
            <div class="attribute__preview-output">
                <select>
  <option value="south-africa">South Africa</option>
</select>
            </div>
        </aside>
	</div>
</article>

```html
<select>
  <option value="south-africa">South Africa</option>
</select>
```

<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">label</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan label pada option.</p>
		</div>
	</header>
	<div class="attribute__values">
        <aside class="attribute__preview">
            <div class="attribute__preview-output">
<select>
  <option value="south-africa" label="Republic of South Africa">South Africa</option>
</select>
            </div>
        </aside>
	</div>
</article>

```html
<select>
  <option value="south-africa" label="Republic of South Africa">South Africa</option>
</select>
```

<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag attribute__tag--novalue">disabled</code>
		</h4>
		<div class="attribute__desc">
			<p>Menonaktifkan option.</p>
		</div>
        <strong class="attribute__desc--novalue">Value tidak diperlukan</strong>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
            <aside class="attribute__preview">
				<div class="attribute__preview-output">
<select>
  <option>Monday</option>
  <option>Tuesday</option>
  <option disabled>Wednesday</option>
  <option disabled>Thursday</option>
  <option>Friday</option>
  <option>Saturday</option>
  <option>Sunday</option>
</select>
				</div>
			</aside>
		</article>
	</div>
</article>

```html
<select>
  <option>Monday</option>
  <option>Tuesday</option>
  <option disabled>Wednesday</option>
  <option disabled>Thursday</option>
  <option>Friday</option>
  <option>Saturday</option>
  <option>Sunday</option>
</select>
```

<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag attribute__tag--novalue">selected</code>
		</h4>
		<div class="attribute__desc">
			<p>Memilih option saat halaman web diload.</p>
		</div>
        <strong class="attribute__desc--novalue">Value tidak diperlukan</strong>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
            <aside class="attribute__preview">
				<div class="attribute__preview-output">
<select>
  <option>Monday</option>
  <option>Tuesday</option>
  <option>Wednesday</option>
  <option>Thursday</option>
  <option selected>Friday</option>
  <option>Saturday</option>
  <option>Sunday</option>
</select>
				</div>
			</aside>
		</article>
	</div>
</article>

```html
<select>
  <option>Monday</option>
  <option>Tuesday</option>
  <option>Wednesday</option>
  <option>Thursday</option>
  <option selected>Friday</option>
  <option>Saturday</option>
  <option>Sunday</option>
</select>
```