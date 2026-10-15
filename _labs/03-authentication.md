---
title: "Lab 03 — Authentication"
short_title: "Authentication"
slug: authentication
order: 3
category: "Identity"
difficulty: "Orta"
environment: "İzole web laboratuvarı"
status: "draft"
status_label: "Taslak"
date: 2026-10-15
last_modified_at: 2026-10-15
description: "Kimlik doğrulama akışındaki oturum, parola politikası ve hesap kurtarma kontrollerini sistematik olarak inceleyen çalışma."
---

## Lab amacı

Kimlik doğrulama sürecinin yalnızca giriş formundan ibaret olmadığını; oturum yönetimi, hesap kurtarma ve hata davranışlarının birlikte değerlendirilmesi gerektiğini görmek.

## Kullanılan ortam

- İzinli eğitim uygulaması
- Tarayıcı geliştirici araçları
- Yerel HTTP istek gözlem aracı

## Analiz

Giriş, çıkış, parola sıfırlama ve oturum yenileme akışları ayrı ayrı incelenir. Farklı hata durumlarının hesap varlığı hakkında gereksiz bilgi verip vermediği değerlendirilir.

## Uygulanan adımlar

1. Başarılı ve başarısız giriş akışları karşılaştırıldı.
2. Oturum belirtecinin yaşam döngüsü gözlemlendi.
3. Çıkış işleminden sonra oturumun geçersizleşmesi kontrol edildi.
4. Hesap kurtarma akışındaki bilgi sızıntıları değerlendirildi.

## Kod / komut / payload

Güvenli çerez seçenekleri için örnek yapı:

```http
Set-Cookie: session=<redacted>; Secure; HttpOnly; SameSite=Lax; Path=/
```

## Ekran görüntüleri

<div class="screenshot-placeholder"><span>SCREENSHOT_01</span><strong>Oturum yaşam döngüsü buraya eklenecek</strong><small>Oturum belirteçleri mutlaka tamamen maskelenmelidir.</small></div>

## Sonuç

Lab tamamlandığında doğrulanan kimlik doğrulama bulguları burada listelenecek.

## Öğrendiklerim

- Genel hata mesajları hesap keşfini zorlaştırır.
- Oturum belirteçleri URL içinde taşınmamalıdır.
- Çıkış ve parola değişimi mevcut oturumları doğru biçimde sonlandırmalıdır.
