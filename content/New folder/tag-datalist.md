# HTML `<datalist>` Tag

Digunakan untuk membuat daftar pilihan otomatis dengan teks `<input>`

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
<label>South American countries</label><br>
<input list="countries" placeholder="Type a country">

<datalist id="countries">
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
</datalist>
	</div>
</div>

```html
<label>South American countries</label><br>
<input list="countries" placeholder="Type a country">

<datalist id="countries">
  <option value="Argentina">
  <option value="Bolivia">
  <option value="Brazil">
  <option value="Chile">
  <option value="Colombia">
  <option value="Ecuador">
  <option value="Guyana">
  <option value="Paraguay">
  <option value="Peru">
  <option value="Suriname">
  <option value="Uruguay">
  <option value="Venezuela">
</datalist>
```