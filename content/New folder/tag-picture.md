# HTML `<picture>` Tag

Menentukan container untuk elemen `<img>`.

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
  srcset="./images/sunset-360.jpg 360w,
          ./images/sunset-720.jpg 720w,
          ./images/sunset-1440.jpg 1440w"
  sizes="33.3vw">
 <source
  srcset="./images/sunset-720.jpg 2x,
          ./images/sunset-360.jpg 1x">
 <img src="./images/sunset.jpg" alt="Picture of a Ha Long Bay sunset">
</picture>
```