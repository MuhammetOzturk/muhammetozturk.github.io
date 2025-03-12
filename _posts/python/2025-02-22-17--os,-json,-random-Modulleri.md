---  
title       : "17- os,json,random Modülleri"
date        : 2025-02-22
description : >
    os,json,random modüllerinin kullanımı açıklanmıştır.
slug        : modul-kullanimi
tags        : ["modül kullanımı"]
categories  : ["Python"]
weight      : 17
---
### **`os`** Modülü

**`os` modülü**, Python’da işletim sistemi ile etkileşime geçmek için kullanılan yerleşik bir modüldür. `os` modülü, dosya ve dizin işlemleri, çevre değişkenlerine erişim ve işletim sistemine özgü işlevlerle çalışma gibi birçok faydalı fonksiyon sağlar. Python programlarının işletim sistemi üzerinde daha esnek ve güçlü işlemler yapmasını sağlar.

### `os` Modülünün Temel Fonksiyonları ve Kullanım Alanları

#### 1. **Geçerli Çalışma Dizinini Öğrenme**: 
`os.getcwd()` ile Python programının şu an hangi dizinde çalıştığını öğrenebilirsiniz.

```python
import os

# Geçerli çalışma dizinini öğrenme
current_directory = os.getcwd()
print("Geçerli çalışma dizini:", current_directory)
```

#### 2. **Dizin Değiştirme**: 
`os.chdir()` fonksiyonu ile çalışma dizinini değiştirebilirsiniz.

```python
import os

# Yeni çalışma dizinine geçiş
os.chdir("/path/to/directory")
print("Yeni çalışma dizini:", os.getcwd())
```

#### 3. **Dizin ve Dosya Yapısını Listeleme**: 
`os.listdir()` ile bir dizindeki dosya ve klasörleri listeleyebilirsiniz.

```python
import os

# Bulunduğunuz dizindeki dosya ve klasörleri listeleme
files = os.listdir()
print("Dizindeki dosyalar:", files)
```

#### 4. **Yeni Bir Dizin Oluşturma**: 
`os.mkdir()` fonksiyonu ile yeni bir klasör oluşturabilirsiniz.

```python
import os

# Yeni bir klasör oluşturma
os.mkdir("yeni_klasor")
print("Klasör başarıyla oluşturuldu.")
```

#### 5. **Bir Dosyanın veya Klasörün Var Olup Olmadığını Kontrol Etme**: 
`os.path.exists()` ile belirli bir dosyanın veya dizinin var olup olmadığını kontrol edebilirsiniz.

```python
import os

# Bir dosyanın veya klasörün olup olmadığını kontrol etme
dosya_yolu = "test.txt"
if os.path.exists(dosya_yolu):
    print(f"{dosya_yolu} mevcut.")
else:
    print(f"{dosya_yolu} mevcut değil.")
```

#### 6. **Dosya Kaldırma (Silme)**: 
`os.remove()` fonksiyonu ile bir dosyayı silebilirsiniz.

```python
import os

# Bir dosya silme
os.remove("gereksiz_dosya.txt")
print("Dosya başarıyla silindi.")
```

#### 7. **Bir Dizin Kaldırma (Silme)**: 
`os.rmdir()` ile boş bir klasörü silebilirsiniz.

```python
import os

# Bir boş klasörü silme
os.rmdir("bos_klasor")
print("Klasör başarıyla silindi.")
```

#### 8. **Çevre Değişkenlerine Erişim**: 
`os.environ` ile çevre değişkenlerine erişebilir ve yeni değişkenler atayabilirsiniz.

```python
import os

# Çevre değişkenlerini listeleme
print("HOME çevre değişkeni:", os.environ.get("HOME"))

# Yeni çevre değişkeni atama
os.environ["YENI_DEGISKEN"] = "deger"
print("Yeni çevre değişkeni atandı:", os.environ.get("YENI_DEGISKEN"))
```

#### 9. **İşletim Sistemi Bilgilerine Erişim**: 
`os.name` ve `os.uname()` ile işletim sistemi hakkında bilgi alabilirsiniz.

```python
import os

# İşletim sistemi hakkında bilgi
print("İşletim sistemi:", os.name)

# Detaylı sistem bilgisi (Bazı sistemlerde desteklenir)
print("Detaylı sistem bilgisi:", os.uname())
```

#### 10. **Dosya ve Klasör Adı Değiştirme**: 
`os.rename()` ile bir dosya veya klasörün adını değiştirebilirsiniz.

```python
import os

# Dosya adını değiştirme
os.rename("eski_dosya.txt", "yeni_dosya.txt")
print("Dosya adı başarıyla değiştirildi.")
```


### `os` Modülünün Yaygın Kullanım Alanları
1. **Dosya ve dizin işlemleri**: Python programlarınızda dosya ve klasör yaratma, silme, yeniden adlandırma işlemleri yapmanızı sağlar.
2. **Çalışma dizini yönetimi**: Programın hangi dizinde çalıştığını kontrol edebilir, dizin değiştirme işlemleri yapabilirsiniz.
3. **Çevre değişkenleriyle çalışma**: Çevre değişkenlerine erişim sağlayarak sistemde tanımlı önemli bilgilere ulaşabilirsiniz (örneğin, PATH, HOME).
4. **Sistem bilgilerine erişim**: İşletim sistemi ve sistemle ilgili çeşitli bilgileri alabilirsiniz (işletim sistemi adı, kullanıcı bilgileri, platform bilgileri).


### Sonuç  
Python `os` modülü, dosya ve dizin işlemleri, sistem komutlarını çalıştırma, ortam değişkenlerine erişim, çalışma dizini yönetimi ve dosya yollarıyla çalışma gibi işletim sistemiyle etkileşim gerektiren işlemleri kolaylaştırır.  

---

### Python'da `os` Modülüyle Modüler Programlama

`os` modülü, Python programlarınızı işletim sistemi ile etkileşime sokarak daha esnek ve kapsamlı hale getirir. İşletim sistemi bağımlı işlemleri yönetmek, sistemdeki dosya yapılarıyla çalışmak ve çeşitli dosya operasyonlarını yürütmek için kullanılır.

### Modülün Genel Avantajları:
- **Taşınabilirlik**: Python’un `os` modülü, işletim sistemi bağımsız bir şekilde kullanılabilir. Yani, aynı Python kodunu farklı işletim sistemlerinde (Windows, macOS, Linux) çalıştırabilirsiniz.
- **Dosya ve Dizin Yönetimi**: `os` modülü, dosya sistemine erişimi ve dosya/dizin işlemlerini kolaylaştırır.
- **Sistemle Entegrasyon**: Python programlarını, çevre değişkenlerine ve işletim sistemi komutlarına entegre etmenizi sağlar.

**Not**: Dosya ve dizin işlemlerini yaparken dikkatli olunmalıdır. `os.remove()` gibi fonksiyonlar kullanıldığında dosyalar kalıcı olarak silinir.

---
### **`json`** Modülü
**`json` modülü**, Python’da JSON (JavaScript Object Notation) formatında veri işlemek için kullanılan yerleşik bir modüldür. JSON, veri alışverişinde yaygın olarak kullanılan bir formattır ve özellikle web servisleri ve API’lerde sıkça kullanılır. Python’daki `json` modülü, JSON verilerini Python veri yapılarına (sözlükler, listeler vb.) dönüştürmeyi ve Python veri yapılarını JSON formatına dönüştürmeyi sağlar.

### JSON Nedir?
JSON, insan tarafından okunabilir bir veri formatıdır. JSON, anahtar-değer çiftlerinden oluşur ve veri nesneleri hiyerarşik bir yapıda olabilir. Örneğin, bir JSON verisi şu şekilde olabilir:

```json
{
    "isim": "Ahmet",
    "yas": 30,
    "meslek": "Mühendis",
    "hobiler": ["futbol", "kitap okuma"]
}
```

Bu JSON verisi Python'daki bir sözlük veri yapısına çok benzer.

### `json` Modülünün Fonksiyonları

#### 1. **`json.dumps()`**: Python Nesnesini JSON Formatına Dönüştürme
Bu fonksiyon, Python’daki bir veri yapısını (sözlük, liste vb.) JSON formatına dönüştürür (serialize eder). `dumps()` işlevi JSON verisini bir Python string nesnesi olarak döner.

**Örnek:**
```python
import json

# Python sözlüğü
data = {
    "isim": "Ahmet",
    "yas": 30,
    "meslek": "Mühendis"
}

# Python verisini JSON string'ine dönüştürme
json_string = json.dumps(data)
print(json_string)
```

**Çıktı:**
```json
{"isim": "Ahmet", "yas": 30, "meslek": "Mühendis"}
```

#### 2. **`json.loads()`**: JSON Verisini Python Nesnesine Dönüştürme
`loads()` fonksiyonu JSON formatındaki veriyi Python veri yapılarına (sözlük, liste vb.) dönüştürür (deserialize eder).

**Örnek:**
```python
import json

# JSON string'i
json_string = '{"isim": "Ahmet", "yas": 30, "meslek": "Mühendis"}'

# JSON verisini Python nesnesine dönüştürme
data = json.loads(json_string)
print(data)
```

**Çıktı:**
```python
{'isim': 'Ahmet', 'yas': 30, 'meslek': 'Mühendis'}
```

#### 3. **`json.dump()`**: Python Nesnesini JSON Formatında Dosyaya Yazma
`dump()` fonksiyonu, Python nesnesini JSON formatına dönüştürerek bir dosyaya yazar.

**Örnek:**
```python
import json

# Python sözlüğü
data = {
    "isim": "Ahmet",
    "yas": 30,
    "meslek": "Mühendis"
}

# JSON verisini dosyaya yazma
with open('veri.json', 'w') as dosya:
    json.dump(data, dosya)
```

Bu kod, `veri.json` adında bir dosya oluşturur ve Python sözlüğünü JSON formatında bu dosyaya yazar.

#### 4. **`json.load()`**: JSON Formatında Dosyadan Python Nesnesi Yükleme
`load()` fonksiyonu, bir JSON dosyasındaki veriyi okuyarak Python veri yapılarına dönüştürür.

**Örnek:**
```python
import json

# JSON dosyasını okuma ve Python nesnesine dönüştürme
with open('veri.json', 'r') as dosya:
    data = json.load(dosya)

print(data)
```

Bu kod, `veri.json` dosyasındaki JSON verisini okur ve Python veri yapısına (sözlük) dönüştürür.

### JSON ve Python Veri Tipleri Eşleşmesi

| JSON Veri Tipi  | Python Veri Tipi  |
|-----------------|-------------------|
| `object`        | `dict`            |
| `array`         | `list`            |
| `string`        | `str`             |
| `number` (int)  | `int`             |
| `number` (float)| `float`           |
| `true`          | `True`            |
| `false`         | `False`           |
| `null`          | `None`            |

### JSON Veri Formatının Özellikleri
- **Basit ve Hafif:** JSON, XML’e göre daha basit ve hafif bir veri formatıdır.
- **Platform Bağımsız:** JSON, platformdan bağımsızdır. Farklı programlama dilleri arasında veri paylaşımını kolaylaştırır.
- **Yaygın Kullanım:** JSON, özellikle web geliştirme ve API'lerde veri alışverişi için yaygın olarak kullanılır.



#### Python Nesnesini JSON Formatına Çevirme ve Dosyaya Yazma
Bir Python sözlüğünü JSON formatına çevirip bir dosyaya yazabiliriz:
```python
import json

# Python nesnesi
veri = {
    "isim": "Ayşe",
    "yas": 24,
    "hobiler": ["resim", "yüzme"]
}

# JSON dosyasına yazma
with open("veri.json", "w") as dosya:
    json.dump(veri, dosya)
```

#### JSON Dosyasından Veri Okuma ve Python Nesnesine Dönüştürme
Bir JSON dosyasından veriyi alıp Python nesnesine çevirebiliriz:
```python
import json

# JSON dosyasını okuma
with open("veri.json", "r") as dosya:
    veri = json.load(dosya)

print(veri)
```

### JSON Modülü ile İlgili Uyarılar
- JSON formatı sadece metin içerir. Bu nedenle Python'daki karmaşık veri yapıları (örneğin sınıflar, fonksiyonlar) JSON formatına dönüştürülemez.
- `dumps()` fonksiyonu JSON verisini bir Python string’ine dönüştürürken, `dump()` fonksiyonu JSON verisini doğrudan bir dosyaya yazar.

---

### Sonuç

**`json` modülü**, Python’da JSON formatındaki verileri işlemek için çok kullanışlı bir araçtır. Web servisleri ve API'lerden veri almak ya da bu sistemlere veri göndermek için JSON formatı sıkça kullanılır. Python'da bu modül ile JSON formatındaki verileri kolayca yönetebilir, veri alışverişini daha etkili hale getirebilirsiniz.

---
### **`random`** Modülü 

Python'daki **`random` modülü**, rastgele sayılar ve seçimler yapmak için kullanılır. Bu modül, rastgele sayı üretmek, belirli bir aralıktan rastgele değerler seçmek, listeleri karıştırmak gibi işlemler için çeşitli işlevler sağlar. Hem basit rastgele seçimler hem de karmaşık simülasyonlar için kullanışlıdır.

### `random` Modülünün Temel Fonksiyonları

#### 1. **`random()`**: 0 ile 1 Arasında Rastgele Bir Sayı Üretme
Bu fonksiyon, 0.0 ile 1.0 arasında (1.0 hariç) bir float değer döner.

```python
import random

# 0 ile 1 arasında rastgele bir sayı
sayi = random.random()
print(sayi)
```

**Çıktı:**
```
0.7435923293604292 (Rastgele bir sayı)
```

#### 2. **`randint(a, b)`**: Belirli Bir Aralıkta Rastgele Bir Tam Sayı Üretme
Bu fonksiyon, a ile b arasında (her iki uç dahil) rastgele bir tam sayı döner.

```python
import random

# 1 ile 10 arasında rastgele bir tam sayı
sayi = random.randint(1, 10)
print(sayi)
```

**Çıktı:**
```
7 (Rastgele bir tam sayı)
```

#### 3. **`uniform(a, b)`**: Belirli Bir Aralıkta Rastgele Bir Ondalık Sayı Üretme
Bu fonksiyon, a ile b arasında rastgele bir float değeri döner.

```python
import random

# 5 ile 10 arasında rastgele bir float
sayi = random.uniform(5, 10)
print(sayi)
```

**Çıktı:**
```
7.3465453245724 (Rastgele bir float)
```

#### 4. **`choice(seq)`**: Bir Liste veya Diziden Rastgele Bir Eleman Seçme
Bu fonksiyon, bir listeden veya herhangi bir sıralı veri yapısından (tuple, string) rastgele bir eleman döner.

```python
import random

# Bir listeden rastgele eleman seçme
renkler = ["kırmızı", "mavi", "yeşil", "sarı"]
secim = random.choice(renkler)
print(secim)
```

**Çıktı:**
```
mavi (Rastgele seçilen eleman)
```

#### 5. **`choices(population, k)`**: Belirli Bir Listeden Rastgele Kadar Eleman Seçme
Bu fonksiyon, bir listeden rastgele olarak k tane eleman seçer ve bunları yeni bir liste olarak döner. Elemanlar tekrar edebilir.

```python
import random

# Bir listeden 3 rastgele eleman seçme
secimler = random.choices(renkler, k=3)
print(secimler)
```

**Çıktı:**
```
['mavi', 'yeşil', 'mavi'] (Rastgele seçilen elemanlar)
```

#### 6. **`shuffle(list)`**: Bir Listeyi Rastgele Karıştırma
Bu fonksiyon, bir listeyi yerinde (in-place) rastgele karıştırır.

```python
import random

# Bir listeyi rastgele karıştırma
liste = [1, 2, 3, 4, 5]
random.shuffle(liste)
print(liste)
```

**Çıktı:**
```
[3, 1, 4, 5, 2] (Rastgele sıralanmış liste)
```

#### 7. **`sample(population, k)`**: Belirli Bir Listeden Benzersiz Rastgele Elemanlar Seçme
Bu fonksiyon, bir listeden k kadar benzersiz rastgele eleman seçer. Elemanlar tekrarlanmaz.

```python
import random

# 3 benzersiz rastgele eleman seçme
secimler = random.sample(renkler, k=3)
print(secimler)
```

**Çıktı:**
```
['sarı', 'yeşil', 'kırmızı'] (Benzersiz rastgele elemanlar)
```

#### 8. **`randrange(start, stop, step)`**: Belirli Bir Aralıkta Rastgele Bir Tam Sayı Seçme
`randrange()`, belirli bir başlangıç ve bitiş noktası arasında, adım adım bir tam sayı döner.

```python
import random

# 0 ile 20 arasında, 5'er adımlarla bir sayı seç
sayi = random.randrange(0, 20, 5)
print(sayi)
```

**Çıktı:**
```
15 (5'er adımlarla rastgele bir sayı)
```

### `random` Modülünün Kullanım Alanları
- **Simülasyonlar**: Rastgele olayların modellenmesi gereken simülasyonlar için kullanılabilir.
- **Oyunlar**: Rastgele olaylar, ödüller, düşmanlar gibi oyun mekanikleri için kullanılır.
- **Veri Seçimi**: Büyük veri kümelerinden rastgele örnekler almak veya verileri karıştırmak için kullanılabilir.
- **Şifreleme**: Rastgele sayı üretimi, kriptografi ve güvenlik için önemli bir yere sahiptir.

### Modül Yazımı Hakkında
Python’da kendi modüllerinizi yazmak ve kullanmak oldukça basittir. Bir modül, basitçe `.py` uzantılı bir Python dosyasıdır ve bu dosyadaki tüm fonksiyonlar, değişkenler başka bir Python dosyasında kullanılabilir. 

**Örnek Modül Yazımı:**

1. **Modül Dosyasını Yaratma**: Örneğin `matematik_islemleri.py` adında bir dosya oluşturun ve içerisine aşağıdaki fonksiyonları yazın:  

---

```python
# matematik_islemleri.py

def topla(a, b):
    return a + b

def carp(a, b):
    return a * b
```

2. **Modülü Kullanma**: Aynı dizinde yeni bir Python dosyası oluşturun ve bu modülü kullanın.  

```python
# ana_program.py

import matematik_islemleri

print(matematik_islemleri.topla(5, 10))  # Çıktı: 15
print(matematik_islemleri.carp(4, 6))    # Çıktı: 24
```

Bu sayede Python’da kendi modüllerinizi oluşturabilir ve kodlarınızı daha modüler hale getirebilirsiniz.

---

**Sonuç:**
`random` modülü, Python’da rastgele sayı üretmek ve rastgele işlemler yapmak için çok güçlü bir araçtır. Veri simülasyonları, oyun geliştirme ve veri seçimi gibi birçok alanda kullanılabilir. Python'daki modüler yapı sayesinde de kendi modüllerinizi yazabilir ve projelerinizi daha yönetilebilir hale getirebilirsiniz.
