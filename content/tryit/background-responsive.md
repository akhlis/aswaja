---
title: Background Responsive
description: Background Responsive
date: "2019-11-18T10:34:07+07:00"
slug: tutorial-css-background-responsive
authors:
- akhlis
---

{{< try >}}
<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tutorial CSS: Background Responsive</title>
    <style>
        body {
            margin: 0;
        }
        .img__wrapper {
            position: relative;
            width: 100%;
            padding-top: 75%;
        }
        .img__bg {
            background-image: url("/images/css/paragliding.jpg");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            background-color: bisque;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
    </style>
</head>

<body>
    <div class="img__wrapper">
        <div class="img__bg">
        </div>
    </div>
</body>

</html>

{{< /try >}}