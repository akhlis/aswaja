---
title: resize
description: resize
date: "2019-11-12T10:34:07+07:00"
slug: resize
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/resize
---

## CSS Syntax
```css
resize: none | both | horizontal | vertical | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.resize="both"
```

{{< cssref default="none" inherited="tidak" animatable="tidak" version="CSS3" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="resize: none;" >}}
Textarea __tidak__ bisa diubah ukurannya.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example resize text-sm" id="resize-none">
  <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.</textarea>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="resize: horizontal;" >}}
Textarea dapat diatur ulang secara __horizontal__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example resize text-sm" id="resize-horizontal">
  <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.</textarea>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="resize: vertical;" >}}
Textarea dapat diubah ukurannya secara __vertikal__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example resize text-sm" id="resize-vertical">
  <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.</textarea>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="resize: both;" >}}
Textarea dapat diubah ukurannya baik secara __horizontal__ maupun __vertikal__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example resize text-sm" id="resize-both">
  <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.</textarea>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .resize textarea {
    background: #fff;
    border: 1px solid hsl(0, 0%, 50%);
    color: hsl(0, 0%, 20%);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    height: 10em;
    padding: 0.8em 1em;
    width: 25em;
  }

  #resize-none {
    resize: none;
  }

  #resize-none textarea {
    resize: none;
  }

  #resize-horizontal {
    resize: horizontal;
  }

  #resize-horizontal textarea {
    resize: horizontal;
  }

  #resize-vertical {
    resize: vertical;
  }

  #resize-vertical textarea {
    resize: vertical;
  }

  #resize-both {
    resize: both;
  }

  #resize-both textarea {
    resize: both;
  }
</style>