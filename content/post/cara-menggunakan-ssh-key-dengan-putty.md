---
title: Cara Menggunakan SSH Key dengan PuTTY untuk Login VPS
description: PuTTY memungkinkan anda untuk menghubungkan dan meremote server dengan aman dari komputer windows lokal. Berikut ini cara menggunakan SSH Key dengan PuTTY.
date: "2017-11-4"
tags:
  - ssl
  - digital ocean
categories:
  - hosting
authors:
  - akhlis
slug: cara-menggunakan-ssh-key-dengan-putty
thumbnail: '/images/post/2017/11/cara-menggunakan-ssk-key.jpg'
---

Salah satu hal yang paling ditakutkan bagi pemilik website yaitu jika website miliknya diretas oleh orang yang tidak bertanggung jawab.

Apapun motif peretasannya, entah karena tujuan persaingan bisnis atau cuma sekedar iseng untuk menunjukkan kemampuan hacking seseorang, hal tersebut pasti akan membuat pemilik websitenya kesal dan marah.

Coba bayangkan saja, seandainya anda sebagai pemilik website tersebut. Sudah susah payah membangun website bertahun-tahun, dalam sekejab bisa dibobol orang lain dan mengacak-acak website anda itu. Bagaimana perasaan anda, marah bukan?

Sebenarnya, seseorang bisa meretas website kita itu, belum tentu karena dia memang jago hacking loh. Tapi bisa saja karena memang kita yang lalai menjaga keamanan website kita sendiri.

Misalnya saja jika kita menggunakan VPS sebagai server website, tapi masih login ke server tersebut dengan username dan password, itu berbahaya banget, karena seseorang bisa saja melakukan serangan [brute-force](https://en.wikipedia.org/wiki/Brute-force_attack) untuk mencuri password kemudian masuk ke server anda.

Solusinya, gunakan `SSH Key` sebagai pengganti password untuk login ke server. Jika anda pengguna Windows, bisa menggunakan PuTTY untuk meremote server melalui SSH.

PuTTY adalah aplikasi klien SSH dan Telnet untuk Windows. PuTTY memungkinkan anda untuk menghubungkan dan meremote server dengan aman dari komputer windows lokal.

PuTTY menggunakan sepasang file _public key dan private key_ sebagai pengganti password yang disebut dengan SSH Key. Untuk membuatnya silakan ikuti panduan [Cara Membuat SSH Key](https://nettren.com/cara-membuat-ssh-key/)

Berikut ini panduan cara menghubungkan komputer windows lokal ke droplets menggunakan PuTTY.

1. Pastikan PuTTY sudah terinstal pada komputermu. Kalau belum, download PuTTY dulu [disini](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), lalu instal di komputermu.
2. Jalankan PuTTY, setelah itu masukkan `Host Name (IP address)` servermu pada kolom yang tersedia, dan pastikan menggunakan `port: 22` dengan `Connection type: SSH`.

    {{< image src="/images/post/2017/11/02_masukkan-ip-address.jpg" alt="02_masukkan-ip-address" width="452" height="442" layout="responsive" >}}
3. Pilih category `Auth` pada sidebar di sebelah kiri dengan cara klik menu dropdown `Connection > SSH > Auth`.

    {{< image src="/images/post/2017/11/03_buka-private-key.png" alt="03_buka-private-key" width="452" height="442" layout="responsive" >}}
4. Carilah _private key_ yang telah anda buat dengan menekan tombol `browse`, lalu arahkan ke tempat file _private key_ tersimpan.
    
    {{< image src="/images/post/2017/11/04_masukkan-private-key.png" alt="04_masukkan-private-key" width="851" height="502" layout="responsive" >}}
    kemudian klik `open` untuk memasukkan _private key_ dengan ekstensi .ppk tersebut.

    {{< image src="/images/post/2017/11/05_klik-open-putty.png" alt="05_klik-open-putty" width="452" height="442" layout="responsive" >}}
5. Tekan tombol `Open` untuk masuk ke SSH.
6. Terminal PuTTY terbuka, kemudian masuklah ke server sebagai user `root` (login as: root).
    ```bash
    root
    ```
    {{< image src="/images/post/2017/11/06_login-as-root.png" alt="06_login-as-root" width="661" height="418" layout="responsive" >}}
7. Jika anda sudah memiliki `nama pengguna` selain `root`, masuklah dengan `nama pengguna` anda tersebut (misal: akhlis).
    ```bash
    su - akhlis
    ```
    {{< image src="/images/post/2017/11/07_login-as-username.png" alt="07_login-as-username" width="661" height="418" layout="responsive" >}}
   
Setelah berhasil masuk ke server menggunakan PuTTY, anda bisa dengan mudah meremote server menggunakan komputer lokal untuk mengkonfigurasi website anda.

Anda bisa membaca selengkapnya [Panduan Cara Menggunakan VPS](https://nettren.com/cara-menggunakan-vps-digital-ocean/) agar tidak bingung saat pertama kali menggunakan VPS [Digital Ocean](https://m.do.co/c/29ffbe26bb28).

Semoga informasi ini bermanfaat.