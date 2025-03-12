---
title       : "16- Nesne Yönelimli Programlama"
date        : 2025-02-22
description : >
    Yazılım geliştirmede önemli bir yere sahip nesne yönelimli programlama
    kavramı açıklanmıştır.
slug        : nesne-yonelimli-programlama
tags        : ["nesne tabanlı programlama"]
categories  : ["Python"]
weight      : 16
---
**Nesne Yönelimli Programlama (Object-Oriented Programming - OOP)**, yazılım geliştirme paradigmasıdır ve programları **nesneler** etrafında yapılandırmayı hedefler. Her nesne, hem veriyi (özellikler/attributeler) hem de bu verilerle ilgili işlevleri (metodlar) içerir. OOP, kodu daha düzenli, anlaşılır ve yeniden kullanılabilir hale getirir.

### OOP'nin Temel Kavramları
1. **Sınıf (Class)**: Bir nesnenin şablonu ya da tasarımıdır. Sınıflar, nesnelerin sahip olacağı özellikleri ve metodları tanımlar.
2. **Nesne (Object)**: Bir sınıfın örneğidir. Her nesne, sınıfın bir örneği olarak tanımlanır ve sınıftaki özelliklere/metodlara sahiptir.
3. **Kapsülleme (Encapsulation)**: Veriyi ve işlevleri bir arada tutma ve doğrudan erişimi kısıtlama sürecidir. Genellikle özel (private) ve genel (public) erişim belirteçleri ile uygulanır.
4. **Kalıtım (Inheritance)**: Bir sınıfın başka bir sınıftan özellikleri ve metodları miras almasıdır. Bu, kodun yeniden kullanılabilirliğini artırır.
5. **Polimorfizm (Polymorphism)**: Farklı sınıfların aynı isme sahip metodları farklı şekillerde uygulayabilmesidir.
6. **Soyutlama (Abstraction)**: Karmaşıklığı gizleyerek, sadece önemli detayları ön plana çıkarma işlemidir.

```python
# Temel sınıf: Canlı
class Canli:
    def __init__(self, isim):
        self.isim = isim

    def hareket_et(self):
        print(f"{self.isim} hareket ediyor.")

# Alt sınıf: Hayvan (Canli sınıfından miras alır)
class Hayvan(Canli):
    def __init__(self, isim, beslenme_tipi):
        super().__init__(isim)  # Üst sınıfın __init__ metodunu çağırıyoruz
        self.beslenme_tipi = beslenme_tipi

    def ses_cikar(self):
        print(f"{self.isim} bir ses çıkarıyor.")

# Alt sınıf: Memeli (Hayvan sınıfından miras alır)
class Memeli(Hayvan):
    def __init__(self, isim, beslenme_tipi, tuy_tipi):
        super().__init__(isim, beslenme_tipi)  # Hayvan sınıfının özelliklerini alır
        self.tuy_tipi = tuy_tipi

    def ses_cikar(self):
        print(f"{self.isim} miyavlıyor ya da havlıyor.")  # Polimorfizm: Ses çıkarma farklı olabilir

# Alt sınıf: Kuş (Hayvan sınıfından miras alır)
class Kus(Hayvan):
    def __init__(self, isim, beslenme_tipi, kanat_uzunlugu):
        super().__init__(isim, beslenme_tipi)
        self.kanat_uzunlugu = kanat_uzunlugu

    def uc(self):
        print(f"{self.isim} uçuyor.")

    def ses_cikar(self):
        print(f"{self.isim} cik cik diyor.")  # Polimorfizm

# Nesneler oluşturma
aslan = Memeli("Aslan", "Etçil", "Kısa")
serce = Kus("Serçe", "Otçul", 20)

# Ortak metodlar
aslan.hareket_et()  # Çıktı: Aslan hareket ediyor.
serce.hareket_et()  # Çıktı: Serçe hareket ediyor.

# Polimorfik metodlar
aslan.ses_cikar()   # Çıktı: Aslan miyavlıyor ya da havlıyor.
serce.ses_cikar()   # Çıktı: Serçe cik cik diyor.

# Kuş sınıfına özgü metod
serce.uc()          # Çıktı: Serçe uçuyor.
```
---

### 1. **Sınıf ve Nesne**

Sınıf, nesneler için bir şablondur. Nesneler ise bu sınıftan yaratılan örneklerdir.

#### Örnek: Basit Bir Sınıf ve Nesne

```python
# Sınıf tanımı
class Araba:
    def __init__(self, marka, model, yil):  # Yapıcı metot
        self.marka = marka  # Özellikler (Attributes)
        self.model = model
        self.yil = yil

    def calistir(self):  # Metot
        print(f"{self.marka} {self.model} çalıştırıldı.")
    
    def durdur(self):
        print(f"{self.marka} {self.model} durduruldu.")

# Nesne oluşturma
araba1 = Araba("Toyota", "Corolla", 2020)
araba2 = Araba("Honda", "Civic", 2018)

# Metotları çağırma
araba1.calistir()  # Çıktı: Toyota Corolla çalıştırıldı.
araba2.durdur()    # Çıktı: Honda Civic durduruldu.
```

**Açıklama**:
- `Araba` sınıfı, `marka`, `model` ve `yil` özelliklerine sahiptir.
- `__init__` metodu, nesne oluşturulurken bu özelliklerin atanmasını sağlar.
- `calistir` ve `durdur` metodları ise araba nesneleri üzerinde işlemler yapar.

---

### 2. **Kapsülleme (Encapsulation)**

Kapsülleme, verilerin dışarıdan doğrudan erişilememesini sağlar. Bu, veri güvenliğini artırır.

#### Örnek: Kapsülleme ile Erişim Kontrolü

```python
class BankaHesabi:
    def __init__(self, hesap_sahibi, bakiye):
        self.hesap_sahibi = hesap_sahibi
        self.__bakiye = bakiye  # Gizli özellik (__ ile tanımlanır)
    
    def para_cek(self, miktar):
        if miktar > self.__bakiye:
            print("Yetersiz bakiye!")
        else:
            self.__bakiye -= miktar
            print(f"{miktar} TL çekildi. Kalan bakiye: {self.__bakiye} TL")
    
    def bakiye_goruntule(self):
        print(f"Hesaptaki bakiye: {self.__bakiye} TL")

# Nesne oluşturma
hesap = BankaHesabi("Ali", 1000)

# Metotları kullanma
hesap.bakiye_goruntule()  # Çıktı: Hesaptaki bakiye: 1000 TL
hesap.para_cek(200)       # Çıktı: 200 TL çekildi. Kalan bakiye: 800 TL
hesap.__bakiye = 5000     # Gizli özelliğe doğrudan erişim sağlanamaz
hesap.bakiye_goruntule()  # Çıktı: Hesaptaki bakiye: 800 TL
```

**Açıklama**:
- `__bakiye`, dışarıdan doğrudan erişilemeyen bir gizli özelliktir.
- Kapsülleme sayesinde veriye sadece tanımlanan metodlarla erişilebilir.

---

### 3. **Kalıtım (Inheritance)**

Bir sınıf, başka bir sınıftan özellikleri ve metodları miras alabilir. Bu sayede kod tekrarından kaçınılır ve sınıflar arası ilişki kurulur.

#### Örnek: Kalıtım ile Yeni Bir Sınıf Türetme

```python
class Hayvan:
    def __init__(self, isim):
        self.isim = isim

    def ses_cikar(self):
        print("Hayvan bir ses çıkarıyor.")

# Kalıtım: Kedi sınıfı Hayvan sınıfından türetiliyor
class Kedi(Hayvan):
    def ses_cikar(self):  # Metodu geçersiz kılma (override)
        print("Miyav!")

# Kalıtım: Kopek sınıfı Hayvan sınıfından türetiliyor
class Kopek(Hayvan):
    def ses_cikar(self):
        print("Hav hav!")

# Nesneler oluşturma
kedi = Kedi("Minnoş")
kopek = Kopek("Karabaş")

# Miras alınan ve geçersiz kılınan metotları kullanma
kedi.ses_cikar()  # Çıktı: Miyav!
kopek.ses_cikar() # Çıktı: Hav hav!
```

**Açıklama**:
- `Hayvan` sınıfı bir temel sınıf olarak tanımlanmış ve `ses_cikar` metodu tüm hayvanlar için geçerlidir.
- `Kedi` ve `Kopek` sınıfları, `Hayvan` sınıfından miras almış, ancak `ses_cikar` metodunu kendilerine uygun şekilde geçersiz kılmışlardır.

---

### 4. **Polimorfizm (Polymorphism)**

Polimorfizm, aynı ada sahip metodların farklı sınıflarda farklı şekilde uygulanmasını sağlar.

#### Örnek: Polimorfizm ile Farklı Sınıflarda Aynı Metod

```python
class Kus:
    def ses_cikar(self):
        return "Cik cik!"
    
class Kedi:
    def ses_cikar(self):
        return "Miyav!"

# Polimorfik fonksiyon
def hayvan_sesi(hayvan):
    print(hayvan.ses_cikar())

# Farklı hayvan nesneleri
kedi = Kedi()
kus = Kus()

# Polimorfik çağrı
hayvan_sesi(kedi)  # Çıktı: Miyav!
hayvan_sesi(kus)   # Çıktı: Cik cik!
```

---

### 5. ABC Modülü

**Açıklama**:
- `Kedi` ve `Kus` sınıflarının her ikisi de `ses_cikar` metoduna sahiptir.
- `hayvan_sesi` fonksiyonu, parametre olarak gelen her hayvan için doğru ses çıkarma metodunu çağırır, böylece polimorfizm sağlanmış olur.

---



Python’daki **ABC** (Abstract Base Classes) modülü, soyut sınıflar (abstract classes) ve soyut metotlar (abstract methods) oluşturmak için kullanılan bir modüldür. Bu modül, Python’un standart kütüphanesindeki `abc` (Abstract Base Class) modülü aracılığıyla sağlanır. **Soyut sınıflar**, diğer sınıflar tarafından miras alınması amaçlanan sınıflardır ve kendi başlarına nesne oluşturamazlar.

### ABC Modülünün Amaçları

1. **Soyut sınıflar** tanımlamak.
2. **Soyut metotlar** tanımlamak ve bu metotların türetilen sınıflarda mutlaka uygulanmasını sağlamak.
3. **Kodun organizasyonunu iyileştirmek** ve bir arayüz (interface) görevi görmek.

Soyut bir sınıf, genellikle yalnızca soyut metotlar içerir, ancak bazı normal metotları da olabilir. Soyut bir sınıfın amacı, türetilen sınıflar için bir temel yapı sağlamaktır. Türetilen sınıfların soyut sınıfta tanımlanan metotları mutlaka uygulaması gerekir.

### `abc` Modülünü Kullanma

`abc` modülünü kullanarak soyut sınıf ve soyut metot oluşturabilirsiniz. Bunu yaparken, `ABC` sınıfını ve `abstractmethod` dekoratörünü kullanırız.

#### Temel Yapı

1. **ABC Sınıfı:** Soyut bir sınıf oluşturmak için bir sınıfı `ABC` (Abstract Base Class) sınıfından türetiriz.
2. **abstractmethod Dekoratörü:** Bir sınıfta soyut metot tanımlamak için bu dekoratör kullanılır.

Örnek:

```python
from abc import ABC, abstractmethod

class Sekil(ABC):
    @abstractmethod
    def alan(self):
        pass

    @abstractmethod
    def cevre(self):
        pass
```

Bu örnekte, `Sekil` soyut bir sınıftır ve `alan` ile `cevre` adında iki soyut metot tanımlanmıştır. `Sekil` sınıfından türetilen her sınıf, bu metotları kendine özgü şekilde uygulamak zorundadır.

### Soyut Sınıftan Türeyen Sınıflar

`Sekil` sınıfından türetilen bir sınıf, soyut metotları uygulamalıdır. Uygulamazsa, Python bir hata verir. Aşağıdaki örnekte, `Daire` sınıfı `Sekil` sınıfından türetilmiştir ve `alan` ile `cevre` metotlarını uygulamaktadır.

```python
import math

class Daire(Sekil):
    def __init__(self, yaricap):
        self.yaricap = yaricap
    
    def alan(self):
        return math.pi * self.yaricap ** 2
    
    def cevre(self):
        return 2 * math.pi * self.yaricap

# Nesne oluşturma ve metotları kullanma
daire = Daire(5)
print(daire.alan())  # 78.53981633974483
print(daire.cevre())  # 31.41592653589793
```

Bu örnekte:
- `Daire` sınıfı, `Sekil` soyut sınıfından türemiştir.
- `Daire` sınıfı, `alan` ve `cevre` metotlarını kendi içinde tanımlayarak soyut metotları somut hale getirmiştir.

Eğer `Daire` sınıfı bu soyut metotları tanımlamazsa, şu şekilde bir hata alırız:

```bash
TypeError: Can't instantiate abstract class Daire with abstract methods alan, cevre
```

### ABC'nin Faydaları

- **Arayüz oluşturma:** ABC sınıfları, bir arayüz sağlar ve türetilen sınıfların belirli bir yapıya sahip olmasını zorunlu kılar. Bu da daha tutarlı ve düzenli bir kod yapısına yol açar.
- **Uygulama zorunluluğu:** Soyut metotlar sayesinde türetilen sınıfların, belirli metotları uygulaması zorunlu hale gelir. Bu da, bir sınıfın tam olarak ne yapması gerektiğini açıkça belirler.
- **Çoklu miras desteği:** Python, çoklu mirası desteklediği için soyut sınıflar bu yapıda da kullanılabilir. Bu, birden fazla soyut sınıfı bir araya getirip daha karmaşık yapılar oluşturma olanağı sağlar.

### Soyut Metotlara Ek Özellikler

Soyut metotlar, yalnızca bir "zorunluluk" olarak kullanılmak zorunda değildir. Eğer isterseniz, soyut metotlara varsayılan bir davranış kazandırabilir ve türetilen sınıfların bu davranışı genişletmesini sağlayabilirsiniz.

```python
from abc import ABC, abstractmethod

class Sekil(ABC):
    @abstractmethod
    def alan(self):
        pass
    
    @abstractmethod
    def cevre(self):
        pass
    
    def tanimla(self):
        print("Bu bir geometrik şekildir.")
```

Burada `tanimla` metodu soyut değildir ve tüm türetilen sınıflar tarafından kullanılabilir.


