---
title: border
description: border
date: "2019-11-12T10:34:07+07:00"
slug: border
css_collections:
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border
---


{{< property >}}
{{< property-value value="border: 4px dotted red;" >}}
The <strong>order</strong> is important:

- width
- style
- color
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-4 border-dotted border-red-600 py-2 px-4" id="border-4px-dotted-red">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border: 2px solid;" >}}
Only the <em>color</em> is <strong>optional</strong>. If you omit it, the color applied will be the color of the
<strong>text</strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-2 border-solid py-2 px-4" id="border-2px-solid">Hello world</div>
{{< /property-preview >}}
{{< /property >}}