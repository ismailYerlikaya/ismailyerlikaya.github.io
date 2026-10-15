---
title: "Lab 04 — Access Control"
short_title: "Access Control"
slug: access-control
order: 4
category: "Authorization"
difficulty: "Orta"
environment: "İzole web laboratuvarı"
status: "draft"
status_label: "Taslak"
date: 2026-10-15
last_modified_at: 2026-10-15
description: "Kaynak ve işlev seviyesindeki yetki kontrollerini, kullanıcı rolleri ve en az ayrıcalık ilkesi üzerinden inceleyen çalışma."
---

## Lab amacı

Bir kullanıcının kimliğinin doğrulanmış olmasının her kaynağa erişebileceği anlamına gelmediğini göstermek ve sunucu tarafı yetkilendirme kontrollerini değerlendirmek.

## Kullanılan ortam

- Birden fazla rol içeren eğitim uygulaması
- Ayrı test kullanıcıları
- Yerel HTTP istek gözlem aracı

## Analiz

Her istek için “Bu kullanıcı bu kaynak üzerinde bu işlemi yapabilir mi?” sorusunun sunucu tarafında yanıtlanıp yanıtlanmadığı incelenir. Arayüzde bir düğmenin gizlenmesi yetkilendirme kontrolü olarak kabul edilmez.

## Uygulanan adımlar

1. Roller ve beklenen izinler çıkarıldı.
2. Kaynak erişimleri farklı test kullanıcılarıyla karşılaştırıldı.
3. Doğrudan nesne referansları lab kapsamı içinde değerlendirildi.
4. Sunucu tarafı politika kontrolü ile güvenli yaklaşım belgelendi.

## Kod / komut / payload

Kaynak sahipliği kontrolüne ilişkin örnek sözde kod:

```text
resource = findResource(request.resourceId)
if resource.ownerId != currentUser.id:
    return 403
```

## Ekran görüntüleri

<div class="screenshot-placeholder"><span>SCREENSHOT_01</span><strong>Rol ve erişim matrisi buraya eklenecek</strong><small>Kullanıcı adları ve kaynak kimlikleri örnek verilerle değiştirilmelidir.</small></div>

## Sonuç

Lab tamamlandığında beklenen ve gözlenen yetki davranışları burada karşılaştırılacak.

## Öğrendiklerim

- Yetkilendirme her istekte sunucu tarafında uygulanmalıdır.
- Varsayılan davranış erişimi reddetmek olmalıdır.
- Nesne seviyesindeki kontroller işlev seviyesindeki kontroller kadar önemlidir.
