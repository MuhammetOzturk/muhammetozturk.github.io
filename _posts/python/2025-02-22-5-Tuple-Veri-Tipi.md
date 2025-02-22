---  
title       : "5- Tuple Veri Tipi"
date        : 2025-02-22
description : 
slug        : tuple-veri-tipi
tags        : 
categories  : ["Python"]
weight      : 5
---
Python'da **tuple**, sıralı ve **değiştirilemez (immutable)** bir veri tipidir. Bir tuple, birden fazla öğeyi bir arada tutan ve sırasını koruyan bir veri yapısıdır. Tuple, **()** parantezleri içinde tanımlanır ve öğeler virgülle ayrılır. Listeler gibi birden fazla veri tipini bir arada tutabilir ancak listelerden farklı olarak bir kez oluşturulduktan sonra içeriği değiştirilemez.

### Tuple’ın Temel Özellikleri:
1. **Sıralı (Ordered)**: Tuple, listeler gibi sıralıdır, yani elemanların eklenme sırasını hatırlar. İlk öğe `0` indisinde bulunur, ikinci öğe `1` indisinde bulunur vb.
2. **Değiştirilemez (Immutable)**: Tuple'lar, bir kez oluşturulduktan sonra değiştirilemezler. Yani tuple’ın elemanlarını değiştirmek, eklemek veya silmek mümkün değildir.
3. **Heterojen (Farklı Türlerde Öğeler İçerebilir)**: Bir tuple, farklı veri türlerinden öğeler içerebilir (string, integer, float, başka bir tuple vb.).
4. **Tekrar Eden Değerler**: Tuple'lar içinde tekrar eden değerler olabilir, yani aynı öğe birden fazla kez bulunabilir.

### Tuple Oluşturma
Tuple, **()** parantezler içine elemanları yazarak veya direkt elemanları virgülle ayırarak oluşturulabilir.

#### Örnekler:
```python
# Boş bir tuple
t1 = ()

# Tek elemanlı bir tuple (Sonuna virgül koymak zorunludur)
t2 = (5,)

# Birden fazla elemanlı tuple
t3 = (1, 2, 3)

# Farklı veri tiplerini içeren tuple
t4 = (1, "Python", 3.14)

# Parantezsiz tuple (virgülle ayrılmış değerler de tuple olarak kabul edilir)
t5 = 1, 2, 3
```

### Tuple Elemanlarına Erişim
Tuple’lar sıralı olduğundan, listeler gibi indis ile erişim sağlanabilir. İndeksleme 0'dan başlar ve negatif indeksler sondan başlayarak elemanlara erişir.

```python
t = (10, 20, 30, 40, 50)

# İlk elemana erişim
print(t[0])  # 10

# Son elemana erişim
print(t[-1])  # 50

# İkinci elemana erişim
print(t[1])  # 20
```

### Tuple Elemanlarını Güncelleme ve Silme
Tuple **değiştirilemez** olduğu için elemanları güncellenemez veya silinemez. Ancak, tamamen bir tuple'ı silebilirsiniz.

#### Örnek:
```python
t = (10, 20, 30)

# Eleman değiştirme girişimi hata verecektir:
# t[0] = 100  # TypeError: 'tuple' object does not support item assignment

# Ancak tüm tuple silinebilir:
del t
```

### Tuple İçinde Dilimleme (Slicing)
Tuple’larda listeler gibi dilimleme (slicing) işlemi yapılabilir. Bu işlem, belirli bir aralıktaki elemanları almayı sağlar.

```python
t = (10, 20, 30, 40, 50)

# 1. indisten 3. indise kadar elemanları al
print(t[1:4])  # (20, 30, 40)

# Baştan 3. indise kadar elemanları al
print(t[:3])  # (10, 20, 30)

# 2. indisten sonuna kadar elemanları al
print(t[2:])  # (30, 40, 50)
```

### Tuple Metodları
Tuple, listeler gibi zengin bir metod setine sahip değildir çünkü **değiştirilemez** yapıdadır. Ancak bazı temel metodları vardır:

1. **`count()`**: Belirtilen değerin tuple içinde kaç kez geçtiğini döner.
   ```python
   t = (1, 2, 3, 1, 1)
   print(t.count(1))  # 3
   ```

2. **`index()`**: Belirtilen değerin ilk geçtiği indeksi döner.
   ```python
   t = (10, 20, 30, 20)
   print(t.index(20))  # 1
   ```

### Tuple’ların Avantajları
1. **Performans**: Tuple'lar, değiştirilemez oldukları için listelere göre daha hızlıdır.
2. **Veri Güvenliği**: Eğer bir veri yapısının içeriğinin değişmesini istemiyorsanız tuple kullanmak daha güvenlidir.
3. **Sabit Veri Yapıları**: Tuple’lar genellikle sabit veri yapıları (coğrafi koordinatlar gibi) için kullanılır, çünkü bu tür verilerin değiştirilmesi gerekmez.

### Tuple ile Listeler Arasında Dönüşüm
Bir tuple’ı listeye veya bir listeyi tuple’a dönüştürebilirsiniz.

#### Örnek:
```python
# Tuple'dan listeye dönüştürme
t = (1, 2, 3)
lst = list(t)
print(lst)  # [1, 2, 3]

# Listeden tuple'a dönüştürme
lst = [1, 2, 3]
t = tuple(lst)
print(t)  # (1, 2, 3)
```

### Tuple Kullanım Alanları
- Tuple’lar genellikle **değiştirilemez** veri kümelerini temsil etmek için kullanılır. Örneğin, sabit koordinatlar, ayar değerleri vb.
- Fonksiyonlardan birden fazla değer döndürmek için kullanılabilir:
  ```python
  def koordinatlar():
      return (40.7128, 74.0060)  # New York City'nin koordinatları

  lat, lon = koordinatlar()
  print(lat, lon)  # 40.7128 74.0060
  ```


Tuple, sabit veri yapılarını yönetirken ve veri güvenliğini korurken oldukça kullanışlı bir veri tipidir.
