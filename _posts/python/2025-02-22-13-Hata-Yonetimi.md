---
title       : "13- Hata Yönetimi"
date        : 2025-02-22
description : >
   Python'da hata yakalama ve yönetimi için kullanılan try-except yapısı
   bu yazıda ele alınmıştır.

slug        : hata-yonetimi
tags        : ["python hata yönetimi", "try-except yapısı"]
categories  : ["Python"]
weight      : 13
---

Python'da **`try-except` bloğu**, bir kod parçasını çalıştırırken oluşabilecek hataları yakalamak ve bu hataları kontrol etmek için kullanılır. Programda bir hata meydana geldiğinde, kod normalde çalışmayı durdurur ve bir hata mesajı verir. Ancak, `try-except` bloğu ile bu hataları yakalayarak programın çökmesini engelleyebiliriz.

### **try-except Bloğunun Temel Yapısı**
- **`try`**: Bu bloğun içine hataya neden olabilecek kodu yazarız.
- **`except`**: Bu bloğun içine hata meydana geldiğinde çalışmasını istediğimiz kodu yazarız.

```python
try:
    # Hata oluşabilecek kod
except:
    # Hata durumunda çalışacak kod
```

İsterseniz belirli hata türlerini yakalayarak ona göre işlem yapabilirsiniz. Örneğin `ZeroDivisionError`, `ValueError` gibi hatalar.

---

### **Kod Örnekleri**

#### **Örnek 1: Sıfıra Bölme Hatası (ZeroDivisionError)**
Bu örnekte, bir sayıyı sıfıra bölmeye çalıştığımızda oluşabilecek hatayı yakalıyoruz.

```python
try:
    sonuc = 10 / 0
except ZeroDivisionError:
    print("Bir sayı sıfıra bölünemez.")
```

**Çıktı:**
```python
Bir sayı sıfıra bölünemez.
```

**Açıklama**: `10 / 0` işlemi bir `ZeroDivisionError` hatası oluşturur ve `except` bloğuna geçerek kullanıcıya hata mesajı gösterir.

---

#### **Örnek 2: Geçersiz Tip Hatası (TypeError)**
Bu örnekte, farklı tipteki değişkenleri toplarken oluşabilecek bir hatayı yakalıyoruz.

```python
try:
    sonuc = "5" + 10
except TypeError:
    print("Farklı tipteki değişkenler toplanamaz.")
```

**Çıktı:**
```python
Farklı tipteki değişkenler toplanamaz.
```

**Açıklama**: `str` ve `int` tipindeki değişkenleri toplamak bir `TypeError` hatası oluşturur. Bu hatayı yakalayıp, kullanıcılara açıklayıcı bir mesaj gösteriyoruz.

---

#### **Örnek 3: Belirtilen Dosya Bulunamadığında (FileNotFoundError)**
Bir dosya açmaya çalıştığınızda, eğer dosya yoksa bu hatayı yakalayabilirsiniz.

```python
try:
    dosya = open("olmayan_dosya.txt", "r")
except FileNotFoundError:
    print("Dosya bulunamadı.")
```

**Çıktı:**
```python
Dosya bulunamadı.
```

**Açıklama**: Program, belirtilen dosyayı bulamayınca `FileNotFoundError` oluşur ve bu hatayı yakalayarak kullanıcıya mesaj gösterir.

---

#### **Örnek 4: Birden Fazla Hata Türünü Yakalama**
Aynı anda birden fazla hata türünü yakalamak istiyorsak, birden fazla `except` bloğu kullanabiliriz.

```python
try:
    sayi = int(input("Bir sayı girin: "))
    sonuc = 10 / sayi
except ValueError:
    print("Geçerli bir sayı girmelisiniz.")
except ZeroDivisionError:
    print("Bir sayı sıfıra bölünemez.")
```

**Olası Çıktılar:**
1. Eğer kullanıcı harf girerse:
   ```python
   Geçerli bir sayı girmelisiniz.
   ```
2. Eğer kullanıcı sıfır girerse:
   ```python
   Bir sayı sıfıra bölünemez.
   ```

**Açıklama**: `int()` fonksiyonu geçersiz bir değer girilirse `ValueError`, sıfıra bölme işlemi yapılırsa `ZeroDivisionError` oluşturur. İki hatayı ayrı ayrı yakalayıp ona göre mesaj veriyoruz.

---
