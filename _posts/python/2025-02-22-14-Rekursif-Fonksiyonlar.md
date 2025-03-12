---
title       : "14- Rekürsif Fonksiyonlar"
date        : 2025-02-22
description : >
   Rekürsif fonksiyonlar nedir ve nasıl kullanılır sorusu bu yazıda 
   cevaplanmıştır.

slug        : rekursif-programlama
tags        : ["rekürsif programlama"]
categories  : ["Python"]
weight      : 14
---

Rekürsif fonksiyonlar, bir fonksiyonun kendi kendisini çağırdığı fonksiyonlardır. Bu, problemi daha küçük alt parçalara bölerek çözmeyi sağlar. Rekürsif fonksiyonlar genellikle **temel durum** (base case) ve **rekürsif durum** (recursive case) olmak üzere iki bileşene sahiptir:

1. **Temel durum**: Fonksiyonun kendini çağırmayı durdurduğu koşuldur. Bu, genellikle en küçük problem alt kümesidir ve doğrudan bir çözüm sağlar.
2. **Rekürsif durum**: Fonksiyonun kendini çağırdığı kısımdır. Problem, daha küçük alt problemler halinde çözümlenir.

### Rekürsif Fonksiyonların Temel Yapısı

```python
def rekursif_fonksiyon(parametre):
    if temel_durum_kontrol(parametre):  # Temel durum
        return sonuç
    else:
        # Rekürsif durum
        return rekursif_fonksiyon(daha_küçük_parametre)
```

```python
def rekursif(n):
	if n < 0 :
		return n
	#print(n)
	rekursif(n-1)
	print(n, end=" ")

rekursif(5)

#0 1 2 3 4 5
```

### Örneklerle Rekürsif Fonksiyonlar

#### **Örnek 1: Faktöriyel Hesaplama**
Bir sayının faktöriyelini hesaplayan rekürsif bir fonksiyon yazalım. Faktöriyel, n sayısının n! = n * (n-1) * (n-2) * ... * 1 şeklinde tanımlanır. Temel durum, 1’in faktöriyelinin 1 olduğu durumdur.

```python
def faktoriyel(n):
    # Temel durum: n 1 ya da 0 olduğunda
    if n == 0 or n == 1:
        return 1
    # Rekürsif durum: n * (n-1)'in faktöriyelini hesapla
    else:
        return n * faktoriyel(n-1)
```

**Girdi:**
```python
print(faktoriyel(5))
```

**Çıktı:**
```python
120  # 5 * 4 * 3 * 2 * 1 = 120
```

**Açıklama**: `faktoriyel(5)` çağrısı kendini yeniden çağırarak, her seferinde 1 azaltır ve en sonunda `faktoriyel(1)` durumuna gelir. Burada temel duruma ulaşılır ve fonksiyon çözülmeye başlar.

---

#### **Örnek 2: Fibonacci Dizisi**
Fibonacci dizisi, her sayının kendinden önceki iki sayının toplamı olduğu bir dizidir: 0, 1, 1, 2, 3, 5, 8, 13, 21, vb. Fibonacci sayısını hesaplayan rekürsif bir fonksiyon yazalım.

```python
def fibonacci(n):
    # Temel durum: n 0 veya 1 olduğunda
    if n == 0:
        return 0
    elif n == 1:
        return 1
    # Rekürsif durum: önceki iki Fibonacci sayısının toplamı
    else:
        return fibonacci(n-1) + fibonacci(n-2)
```

**Girdi:**
```python
print(fibonacci(6))
```

**Çıktı:**
```python
8  # Fibonacci dizisinde 6. sıradaki sayı 8'dir
```

**Açıklama**: `fibonacci(6)` kendini tekrar tekrar çağırır, her seferinde daha küçük değerlere ulaşarak temel duruma gelir ve çözüm üretilir.

---

#### **Örnek 3: Liste Toplamı**
Bir listenin elemanlarını toplayan rekürsif bir fonksiyon yazalım. Temel durumda, boş bir listenin toplamı sıfırdır.

```python
def liste_toplami(liste):
    # Temel durum: Liste boş olduğunda
    if len(liste) == 0:
        return 0
    # Rekürsif durum: Listenin ilk elemanını al ve geri kalan listeyi topla
    else:
        return liste[0] + liste_toplami(liste[1:])
```

**Girdi:**
```python
print(liste_toplami([1, 2, 3, 4, 5]))
```

**Çıktı:**
```python
15  # 1 + 2 + 3 + 4 + 5 = 15
```

**Açıklama**: Fonksiyon her adımda listenin ilk elemanını alır ve geri kalan listeyi tekrar toplar, en sonunda liste boş kaldığında `0` döner ve toplam geri döndürülmeye başlanır.

---

#### **Örnek 4: Bir Sayının Basamaklarının Toplamı**
Bir sayının basamaklarının toplamını hesaplayan rekürsif bir fonksiyon yazalım. Örneğin, 123 sayısının basamaklarının toplamı 1 + 2 + 3 = 6’dır.

```python
def basamak_toplami(n):
    # Temel durum: n tek basamaklı olduğunda
    if n < 10:
        return n
    # Rekürsif durum: Son basamağı al ve geri kalan basamakları topla
    else:
        return n % 10 + basamak_toplami(n // 10)
```

**Girdi:**
```python
print(basamak_toplami(123))
```

**Çıktı:**
```python
6  # 1 + 2 + 3 = 6
```

**Açıklama**: `basamak_toplami(123)` işlemi son basamağı (`3`) alır ve kalan sayı olan `12` için aynı işlemi uygular. Sonunda tek basamağa ulaştığında, toplama işlemi başlar.

---

### Rekürsif Fonksiyonlarda Dikkat Edilmesi Gerekenler
1. **Temel Durum**: Her rekürsif fonksiyonun bir temel durumu olmalıdır. Aksi takdirde fonksiyon sonsuz döngüye girer ve program çöker.
2. **Verimlilik**: Bazı rekürsif fonksiyonlar, özellikle Fibonacci gibi, çok sayıda tekrarlı hesaplama yapabilir. Bu gibi durumlarda **dinamik programlama** veya **hafızalama (memoization)** teknikleri kullanılarak performans artırılabilir.

Rekürsif fonksiyonlar, özellikle problem alt problemlere bölünebiliyorsa ve tekrarlı yapılar içeriyorsa çok güçlü bir araçtır.
