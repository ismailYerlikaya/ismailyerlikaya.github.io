---
title: "Lab 02 — Cross-Site Scripting (XSS)"
short_title: "Cross-Site Scripting"
slug: xss
order: 2
category: "Client-side"
difficulty: "Başlangıç"
environment: "İzole web laboratuvarı"
status: "draft"
status_label: "Taslak"
date: 2026-10-15
last_modified_at: 2026-10-15
description: "Güvenilmeyen verinin HTML çıktısına taşınmasını, bağlama uygun kodlamayı ve tarayıcı tarafındaki etkileri inceleyen çalışma."
---

## Lab amacı

Güvenilmeyen kullanıcı verisinin sayfaya kontrolsüz biçimde yazılmasının tarayıcı davranışını nasıl etkileyebildiğini ve çıktı kodlamasının önemini anlamak.

## Kullanılan ortam

- Eğitim amaçlı yerel web uygulaması
- Modern web tarayıcısı ve geliştirici araçları
- İçerik Güvenlik Politikası gözlem araçları

## Analiz

Verinin uygulamaya giriş noktası ile HTML içindeki çıkış bağlamı birlikte değerlendirilir. HTML gövdesi, öznitelik, URL ve JavaScript bağlamlarının farklı savunmalar gerektirdiği not edilir.

## Uygulanan adımlar

1. Kullanıcı girdisinin sayfada görüntülendiği konum belirlendi.
2. Çıktının HTML olarak mı metin olarak mı işlendiği incelendi.
3. Bağlama uygun kodlama uygulandı.
4. Savunma katmanı olarak CSP davranışı gözlemlendi.

## Kod / komut / payload

Güvenilmeyen veriyi metin olarak eklemek için:

```javascript
const output = document.querySelector('#output');
output.textContent = untrustedValue;
```

## Ekran görüntüleri

<div class="screenshot-placeholder"><span>SCREENSHOT_01</span><strong>DOM ve çıktı karşılaştırması buraya eklenecek</strong><small>Gerçek kullanıcı verisi içermeyen lab ekranı kullanılmalıdır.</small></div>

## Sonuç

Lab tamamlandığında gözlemler ve uygulanan düzeltmeler burada özetlenecek.

## Öğrendiklerim

- Girdi filtreleme ile çıktı kodlama aynı şey değildir.
- Kodlama, verinin yerleştirildiği bağlama uygun yapılmalıdır.
- CSP faydalı bir ek katmandır; güvenli çıktı işlemenin yerini tutmaz.
