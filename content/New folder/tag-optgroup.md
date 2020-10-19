# HTML `<optgroup>` Tag

Digunakan untuk membuat grup elemen `<option>`

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
<select>
  <optgroup label="South America">
    <option>Uruguay</option>
    <option>Brazil</option>
    <option>Argentina</option>
  </optgroup>
  <optgroup label="Europe">
    <option>Italy</option>
    <option>Germany</option>
    <option>England</option>
    <option>France</option>
    <option>Spain</option>
  </optgroup>
</select>
	</div>
</div>

```html
<select>
  <optgroup label="South America">
    <option>Uruguay</option>
    <option>Brazil</option>
    <option>Argentina</option>
  </optgroup>
  <optgroup label="Europe">
    <option>Italy</option>
    <option>Germany</option>
    <option>England</option>
    <option>France</option>
    <option>Spain</option>
  </optgroup>
</select>
```

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
<select>
  <optgroup label="Winter">
    <option>December</option>
    <option>January</option>
    <option>February</option>
    <option>March</option>
  </optgroup>
  <optgroup label="Not winter" disabled>
    <option>April</option>
    <option>May</option>
    <option>June</option>
    <option>July</option>
    <option>August</option>
    <option>September</option>
    <option>October</option>
    <option>November</option>
  </optgroup>
</select>
	</div>
</div>

```html
<select>
  <optgroup label="Winter">
    <option>December</option>
    <option>January</option>
    <option>February</option>
    <option>March</option>
  </optgroup>
  <optgroup label="Not winter" disabled>
    <option>April</option>
    <option>May</option>
    <option>June</option>
    <option>July</option>
    <option>August</option>
    <option>September</option>
    <option>October</option>
    <option>November</option>
  </optgroup>
</select>
```

<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">label</code>
		</h4>
		<div class="attribute__desc">
			<p>Menjelaskan label grup.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"South America"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Label tidak bisa diklik</p>
				</div>
			</header>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag attribute__tag--novalue">disabled</code>
		</h4>
		<div class="attribute__desc">
			<p>Menonaktifkan pilihan</p>
		</div>
        <strong class="attribute__desc--novalue">Value tidak diperlukan</strong>
	</header>
</article>