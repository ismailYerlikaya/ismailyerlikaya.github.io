---
title: "Lab 01 — SQL Injection"
short_title: "SQL Injection"
slug: sql-injection
order: 1
category: "Injection"
difficulty: "Başlangıç"
environment: "İzole web laboratuvarı"
status: "draft"
status_label: "Taslak"
date: 2026-10-15
last_modified_at: 2026-10-15
description: "Kullanıcı girdisinin sorgu mantığını nasıl etkileyebildiğini ve parametreli sorgularla nasıl güvenli hale getirildiğini inceleyen çalışma."
---

## Lab amacı

Güvensiz biçimde oluşturulan bir veritabanı sorgusundaki kullanıcı girdisinin etkisini anlamak ve güvenli sorgu yaklaşımını karşılaştırmak.

## Kullanılan ortam

- Yalnızca eğitim için hazırlanmış izole web laboratuvarı
- Tarayıcı geliştirici araçları
- HTTP isteklerini gözlemlemeye uygun yerel test aracı

## Analiz

Uygulama davranışı incelenirken kullanıcı girdisinin sorguya nasıl taşındığı ve sunucunun farklı girdilere verdiği yanıtlar karşılaştırılır. Amaç gerçek bir sisteme erişmek değil, güvensiz sorgu oluşturma biçiminin neden riskli olduğunu gözlemlemektir.

## Uygulanan adımlar

1. Normal girdinin oluşturduğu istek ve yanıt kaydedildi.
2. Girdi doğrulamasının sınırları yalnızca lab kapsamında test edildi.
3. Sunucu tarafındaki sorgu oluşturma yaklaşımı analiz edildi.
4. Parametreli sorgu ile güvenli alternatif karşılaştırıldı.

## Kod / komut / payload

Güvenli PHP sorgusu için örnek:

```php
$statement = $pdo->prepare('SELECT id, username FROM users WHERE username = :username');
$statement->execute(['username' => $username]);
```

> Çalışmada kullanılan deneysel girdiler, yalnızca ilgili eğitim laboratuvarının kapsamına uygun şekilde belgelenecektir.

## Ekran görüntüleri

<div class="screenshot-placeholder"><span>SCREENSHOT_01</span><strong>İstek ve yanıt karşılaştırması buraya eklenecek</strong><small>Yayınlamadan önce oturum bilgileri ve kişisel veriler maskelenmelidir.</small></div>

## Sonuç

Bu bölüm, laboratuvar tamamlandığında doğrulanan bulgularla güncellenecek.

## Öğrendiklerim

- Girdi doğrulama tek başına veritabanı güvenliği sağlamaz.
- Sorgu ile veriyi ayıran parametreli sorgular temel savunmadır.
- Hata mesajları gereksiz sistem ayrıntıları sızdırmamalıdır.
