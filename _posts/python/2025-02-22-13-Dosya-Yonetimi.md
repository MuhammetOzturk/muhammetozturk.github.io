---
title       : "13.1- Dosya İşlemleri"
date        : 2025-02-22
description : >
   Python'da temel dosya işlemleri anlatılmıştır.

slug        : dosya-yonetimi
tags        : ["python dosya yönetimi"]
categories  : ["Python"]
weight      : 13.1
---


## 1. Dosya Nedir?

Dosya; kalıcı veri saklamak için kullanılan, disk üzerinde yer alan veri yapısıdır. Python’da dosyalar genellikle:

* Metin dosyaları (`.txt`, `.csv`, `.json`)
* İkili dosyalar (`.bin`, `.jpg`, `.pdf`)

olarak ikiye ayrılır.

---

## 2. `open()` Fonksiyonu

Python’da dosya işlemleri `open()` fonksiyonu ile yapılır.

```python
open(dosya_adi, mod, encoding)
```

### Parametreler

| Parametre   | Açıklama                             |
| ----------- | ------------------------------------ |
| `dosya_adi` | Dosya yolu veya adı                  |
| `mod`       | Dosya açma modu                      |
| `encoding`  | Karakter kodlaması (genelde `utf-8`) |

---

## 3. Dosya Açma Modları

| Mod  | Açıklama                           |
| ---- | ---------------------------------- |
| `r`  | Okuma (dosya yoksa hata verir)     |
| `w`  | Yazma (dosyayı siler / oluşturur)  |
| `a`  | Ekleme (dosyanın sonuna yazar)     |
| `x`  | Oluşturma (dosya varsa hata verir) |
| `rb` | Binary okuma                       |
| `wb` | Binary yazma                       |

---

## 4. Dosya Okuma İşlemleri

### 4.1 `read()` – Tüm Dosyayı Okuma

```python
file = open("veri.txt", "r", encoding="utf-8")
icerik = file.read()
file.close()

print(icerik)
```

---

### 4.2 `readline()` – Satır Satır Okuma

```python
file = open("veri.txt", "r", encoding="utf-8")
satir = file.readline()
file.close()

print(satir)
```

---

### 4.3 `readlines()` – Liste Olarak Okuma

```python
file = open("veri.txt", "r", encoding="utf-8")
satirlar = file.readlines()
file.close()

print(satirlar)
```

---

### 4.4 `for` Döngüsü ile Okuma (Önerilen)

```python
with open("veri.txt", "r", encoding="utf-8") as file:
    for satir in file:
        print(satir.strip())
```

---

## 5. Dosya Yazma İşlemleri

### 5.1 `write()` – Dosyaya Yazma

```python
with open("sonuc.txt", "w", encoding="utf-8") as file:
    file.write("Merhaba Python\n")
    file.write("Dosya yazma işlemi\n")
```

> `w` modu dosyanın içeriğini **tamamen siler**.

---

### 5.2 `writelines()` – Listeyi Dosyaya Yazma

```python
satirlar = ["Ali\n", "Veli\n", "Ayşe\n"]

with open("isimler.txt", "w", encoding="utf-8") as file:
    file.writelines(satirlar)
```

---

## 6. Dosyaya Ekleme (Append)

```python
with open("log.txt", "a", encoding="utf-8") as file:
    file.write("Yeni kayıt eklendi\n")
```

---

## 7. `with` Kullanımının Önemi

```python
with open("data.txt", "r") as file:
    veri = file.read()
```

Avantajları:

* `close()` otomatik çağrılır
* Bellek sızıntısı olmaz
* Güvenlidir

---

## 8. Binary Dosya Okuma / Yazma

### Binary Yazma

```python
with open("veri.bin", "wb") as file:
    file.write(b"\x48\x65\x6C\x6C\x6F")
```

### Binary Okuma

```python
with open("veri.bin", "rb") as file:
    data = file.read()

print(data)
```

---

## 9. Dosya Hataları ve `try-except`

```python
try:
    with open("olmayan.txt", "r") as file:
        print(file.read())
except FileNotFoundError:
    print("Dosya bulunamadı")
```

---

## 10. Dosya İmleci (`seek`, `tell`)

```python
with open("veri.txt", "r") as file:
    print(file.tell())   # Konum
    file.seek(10)        # 10. byte'a git
    print(file.read())
```

---

## 11. Pratik Örnekler

### 11.1 Not Ortalaması Kaydetme

```python
notlar = [70, 85, 90]

with open("notlar.txt", "w") as file:
    for n in notlar:
        file.write(f"{n}\n")
```

---

### 11.2 Dosyadan Veri Okuyup Hesaplama

```python
toplam = 0

with open("notlar.txt", "r") as file:
    for satir in file:
        toplam += int(satir)

print("Ortalama:", toplam / 3)
```

