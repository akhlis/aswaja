---
title: Border Style
description: Border Style
date: "2019-11-18T10:34:07+07:00"
slug: tutorial-css-border-style
authors:
- akhlis
---

{{< try >}}
<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tutorial CSS: Border Style</title>
    <style>
        .border {
            border-width: 4px;
            border-color: darkorange;
            padding: 1em;
            margin-bottom: 1em;
        }

        .border--dotted {
            border-style: dotted;
        }

        .border--dashed {
            border-style: dashed;
        }

        .border--solid {
            border-style: solid;
        }

        .border--double {
            border-style: double;
        }

        .border--groove {
            border-style: groove;
        }

        .border--ridge {
            border-style: ridge;
        }

        .border--inset {
            border-style: inset;
        }

        .border--outset {
            border-style: outset;
        }

        .border--none {
            border-style: none;
        }

        .border--hidden {
            border-style: hidden;
        }

        .border--mix {
            border-style: dotted dashed solid double;
        }
    </style>
</head>

<body>
    <h2>The border-style Property</h2>

    <p class="border border--dotted">A dotted border.</p>
    <p class="border border--dashed">A dashed border.</p>
    <p class="border border--solid">A solid border.</p>
    <p class="border border--double">A double border.</p>
    <p class="border border--groove">A groove border.</p>
    <p class="border border--ridge">A ridge border.</p>
    <p class="border border--inset">An inset border.</p>
    <p class="border border--outset">An outset border.</p>
    <p class="border border--none">No border.</p>
    <p class="border border--hidden">A hidden border.</p>
    <p class="border border--mix">A mixed border.</p>
</body></html>
{{< /try >}}