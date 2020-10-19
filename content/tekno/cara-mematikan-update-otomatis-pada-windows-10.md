---
title: Hemat Kuota Internet dengan Mematikan Update Windows Otomatis pada Windows 10
description: Berikut ini cara mematikan update otomatis pada Windows 10 sehingga tidak membuat kinerja laptop anda menjadi lambat dan menghindari penggunaan kuota internet yang berlebihan.
date: "2017-10-20"
tags:
  - windows
categories:
  - tekno
authors:
  - akhlis
slug: mematikan-update-otomatis-pada-windows-10
thumbnail: '/images/post/2017/10/mematikan-update-otomatis-windows10.jpg'
---

Pernahkah anda berselancar internet di laptop dengan menggunakan modem kartu seluler tiba-tiba kehabisan kuota internet, padahal anda baru saja mengisinya dan belum anda gunakan untuk download file yang besar? 

Pengalaman itu saya rasakan beberapa hari yang lalu dimana saya baru saja mengisi kuota internet pada mifi salah satu operator seluler yang saya gunakan. Waktu itu saya beli kuota internet sebesar 5 gb dan baru saja saya gunakan seharian untuk browsing internet di laptop.

Tanpa sadar, dengan asyiknya saya terus memakainya untuk berselancar internet mencari artikel-artikel yang saya butuhkan. Ditengah asyiknya itu, eh tiba-tiba koneksi internet saya putus. Setelah saya cek, ternyata kuota internet saya habis. Saya pun merasa kaget, hla wong kuotanya baru saya isi masak dah abis. Padahal biasanya bisa saya pakai dua mingguan.

Saya pun mencari penyebabnya, aplikasi apa yang membuat kuota saya cepat habis. Setelah ketemu, ternyata sitem operasi Windows 10 di laptop saya melakukan update otomatis tanpa memberi notifikasi dulu sebelumnya.

Sayangnya, pada Windows 10 tidak disediakan pilihan untuk mematikan update otomatis melalui Control Panel dan PC Setting, berbeda dengan Windows versi sebelumnya.

## Mematikan Update Otomatis pada Windows 10

Sebenarnya tujuan utama Windows 10 melakukan update otomatis itu untuk menjaga agar sistem operasi kita terus terupdate dan keamanannya tetap terjaga. 

Tapi bagi sebagian orang, hal itu bisa membuat kinerja laptop kita menjadi lambat pada saat melakukan update otomatis tersebut. Tujuan lainnya yaitu agar bagi anda yang menggunakan koneksi internet melalui modem mifi tidak kebobolan kuota internet seperti yang pernah saya alami.

Namun bagi anda yang ingin mematikan update otomatis pada Windows 10, gak usah bingung. Disini saya akan menunjukkan pada anda bagaimana cara menonaktifkan update otomatis pada Windows 10.

Langkah-langkahnya yaitu:

1. Jalankan perintah `Run` dengan cara tekan `tombol windows + R`
2. Ketik perintah `gpedit.msc` pada kolom Open

    ![01_gp-edit](/images/post/2017/10/01_gp-edit.jpg)

3. Kemudian jendela `Local Group Policy Editor` terbuka, arahkah kursor kemudian klik pada folder `Administrative Templates`

    ![02_administrative-templates](/images/post/2017/10/02_administrative-templates.jpg)
    
4. Arahkan kursor dan klik kiri dua kali pada folder `Windows Components`

    ![03_windows-components](/images/post/2017/10/03_windows-components.jpg)
    
5. Scroll kebawah dan cari folder `Windows Update`, kemudian klik kiri dua kali

    ![04_windows-updates](/images/post/2017/10/04_windows-updates.jpg)
    
6. Kemudian cari file `Configure Automatic Updates` lalu klik dua kali

    ![05_configure-automatic-updates](/images/post/2017/10/05_configure-automatic-updates.jpg)
    
7. Jendela `Configure Automatic Updates` akan terbuka, arahkan button radio pada pilihan `Enabled`, lalu pada menu dropdown pilihlah `Notify for download and notify for install`. Selanjutnya klik `ok`.

    ![06_enabled](/images/post/2017/10/06_enabled.jpg)
    
8. Selesai. 

Sekarang kalau ada update windows terbaru akan muncul pemberitahuan terlebih dahulu. Anda bisa membiarkannya atau memilih untuk mengupdate Windows anda.

Bagaimana dengan sistem operasi Windows 10 yang anda gunakan saat ini? kalau sistem operasi Windows 10 anda juga melakukan update otomatis tanpa ada pemberitahuan terlebih dahulu, sekarang anda bisa mengaturnya dengan mengikuti langkah-langkah yang telah saya sebutkan diatas.

Semoga tips ini bermanfaat bagi anda, dan jangan lupa untuk membagikan artikel ini agar manfaatnya juga bisa dirasakan oleh teman-teman anda.