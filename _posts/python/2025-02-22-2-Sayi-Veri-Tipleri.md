---  
title       : "2- Sayı Veri Tipleri"
date        : 2025-02-22
description : 
slug        : sayi-tipleri
tags        : 
categories  : ["Python"]
weight      : 2
---
Python'da sayılar (numeric data types) matematiksel hesaplamalar yapmak için kullanılan temel veri tiplerinden biridir. Python üç ana sayı tipi sağlar:

### 1. **Integer (Tamsayılar)**
   - **Tanım**: Tamsayılar, negatif, pozitif veya sıfır olan tam sayılardır. Kesirli kısma sahip değillerdir.
   - **Örnekler**:
     ```python
     a = 10    # Pozitif tamsayı
     b = -25   # Negatif tamsayı
     c = 0     # Sıfır
     ```
   - **Özellikler**:
     - Python 3'ten itibaren tamsayıların uzunluk sınırı yoktur. Belleğinizin izin verdiği kadar büyük sayılarla çalışabilirsiniz.
     - 10 tabanlı (decimal), 2 tabanlı (binary), 8 tabanlı (octal), 16 tabanlı (hexadecimal) sayılar olarak ifade edilebilir.
     - Binary, octal ve hexadecimal sayılar şu ön eklerle tanımlanır:
       - Binary: `0b` veya `0B`
       - Octal: `0o` veya `0O`
       - Hexadecimal: `0x` veya `0X`
     
     ```python
     binary = 0b1010   # 10
     octal = 0o12      # 10
     hex_num = 0xA     # 10
     ```

### 2. **Float (Ondalıklı Sayılar)**
   - **Tanım**: Ondalık (kesirli) sayılar olarak adlandırılır. Float tipi, hem tam hem de kesirli kısmı olan sayıları temsil eder.
   - **Örnekler**:
     ```python
     x = 3.14   # Pozitif ondalıklı sayı
     y = -2.7   # Negatif ondalıklı sayı
     z = 0.0    # Ondalıklı sıfır
     ```
   - **Özellikler**:
     - Float'lar kayan noktalı sayı sistemini kullanır ve genellikle `64 bit` hassasiyetle depolanır.
     - Çok büyük veya çok küçük sayılar bilimsel gösterim ile yazılabilir:
       ```python
       bilimsel = 1.23e4  # 12300.0
       ```
     - Float'lar, Python'da 15-17 basamağa kadar hassasiyet sağlayabilir.

### 3. **Complex (Karmaşık Sayılar)**
   - **Tanım**: Karmaşık sayılar, reel ve sanal kısımlardan oluşan sayılardır. Bu sayılar, `a + bj` formatında ifade edilir; burada `a` reel kısmı, `b` ise sanal kısmı ifade eder.
   - **Örnekler**:
     ```python
     c1 = 3 + 5j   # 3 reel kısmı, 5 sanal kısmı
     c2 = -2 - 4j  # -2 reel kısmı, -4 sanal kısmı
     ```
   - **Özellikler**:
     - Karmaşık sayıların `real` (reel kısmı) ve `imag` (sanal kısmı) özellikleri vardır.
       ```python
       c = 1 + 2j
       print(c.real)  # 1.0
       print(c.imag)  # 2.0
       ```

### **Tip Dönüşümleri (Type Conversions)**
Python'da sayı türleri arasında dönüşüm yapabilirsiniz:

- **`int()`**: Ondalıklı sayıyı veya string ifadeyi tamsayıya dönüştürür.
  ```python
  int(3.14)   # 3
  int("10")   # 10
  ```

- **`float()`**: Tamsayıyı veya string ifadeyi ondalıklı sayıya dönüştürür.
  ```python
  float(5)    # 5.0
  float("2.7")  # 2.7
  ```

- **`complex()`**: Reel ve sanal kısımlarını belirterek bir karmaşık sayı oluşturur.
  ```python
  complex(3, 4)  # 3 + 4j
  ```

### **Matematiksel Operatörler**
Python, sayılarla işlem yapmak için birçok matematiksel operatör sağlar:
- **Toplama (`+`)**: İki sayıyı toplar.
- **Çıkarma (`-`)**: Bir sayıyı diğerinden çıkarır.
- **Çarpma (`*`)**: İki sayıyı çarpar.
- **Bölme (`/`)**: İki sayıyı böler ve sonuç her zaman float tipinde olur.
  ```python
  5 / 2  # 2.5
  ```
- **Tam Sayı Bölme (`//`)**: İki sayıyı böler ve sonucu tamsayıya yuvarlar.
  ```python
  5 // 2  # 2
  ```
- **Modülüs (`%`)**: İki sayının bölümünden kalanı verir.
  ```python
  5 % 2  # 1
  ```
- **Üs Alma (`**`)**: Bir sayının üssünü alır.
  ```python
  2 ** 3  # 8
  ```

### **Diğer Sayısal Fonksiyonlar**
- **`abs(x)`**: Sayının mutlak değerini döner.
  ```python
  abs(-7)  # 7
  ```
- **`round(x, n)`**: Sayıyı belirtilen basamak sayısına göre yuvarlar.
  ```python
  round(3.14159, 2)  # 3.14
  ```
- **`pow(x, y)`**: \( x^y \)'yi hesaplar (üs alma).
  ```python
  pow(2, 3)  # 8
  ```

### **Matematiksel Modüller**
Python, ileri seviye matematiksel işlemler için birkaç modül sağlar:
- **`math`**: Trigonometri, logaritma, faktöriyel gibi birçok matematiksel işlemi içerir.
  ```python
  import math
  print(math.sqrt(16))  # 4.0
  print(math.pi)        # 3.141592653589793
  ```

- **`random`**: Rastgele sayılar üretmek için kullanılır.
  ```python
  import random
  print(random.randint(1, 10))  # 1 ile 10 arasında rastgele bir tamsayı üretir
  ```

