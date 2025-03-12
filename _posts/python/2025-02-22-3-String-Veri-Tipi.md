---  
title       : "3- String Veri Tipi"
date        : 2025-02-22
description : 
slug        : string-tipi
tags        : 
categories  : ["Python"]
weight      : 3
---
Python'da **string** veri tipi, bir dizi karakteri temsil eder ve oldukça güçlü ve esnek özelliklere sahiptir. İşte Python string veri tipinin sahip olduğu başlıca özellikler ve metodlar:

### 1. **String Tanımlama**
   - Tek tırnak (`'...'`) veya çift tırnak (`"..."`) kullanılarak tanımlanır.
   - Üç tırnaklı (`'''...'''` veya `"""..."""`) stringlerle birden fazla satırda metin yazılabilir.
   
     ```python
     tek_tirnak = 'Bu bir string'
     cift_tirnak = "Bu da bir string"
     uc_satirli_string = """Bu
     birden
     fazla
     satırda"""
     ```

### 2. **İmmutability (Değiştirilemezlik)**
   Stringler immutabledir, yani tanımlandıktan sonra değiştirilemezler. Bir string üzerinde herhangi bir değişiklik yapmak istediğinizde, yeni bir string oluşturulur.
   
   ```python
   s = "Merhaba"
   s[0] = "A"  # Hata verir çünkü stringler değiştirilemez
   ```

### 3. **Dilimleme (Slicing)**
   Stringler diziler gibi indekslenebilir ve dilimlenebilir. Negatif indekslerle stringin sonundan başlayarak da erişim sağlanabilir.
   
   ```python
   s = "Python"
   print(s[0])    # 'P'
   print(s[1:4])  # 'yth'
   print(s[-1])   # 'n'
   ```

### 4. **String Metodları**
   Python string'leri birçok yerleşik metoda sahiptir:
   
   - **`len()`**: String'in uzunluğunu döner.
     ```python
     len("Python")  # 6
     ```
   
   - **`upper()` ve `lower()`**: String'i büyük veya küçük harfe çevirir.
     ```python
     "Python".upper()  # 'PYTHON'
     "Python".lower()  # 'python'
     ```

   - **`strip()`**: Başındaki ve sonundaki boşlukları veya belirli karakterleri kaldırır.
     ```python
     "  Python  ".strip()  # 'Python'
     ```

   - **`replace(old, new)`**: String içinde bir karakteri ya da alt string'i başka bir string ile değiştirir.
     ```python
     "Merhaba Dünya".replace("Merhaba", "Hello")  # 'Hello Dünya'
     ```

   - **`split(delimiter)`**: String'i verilen ayraç karakterine göre böler.
     ```python
     "Python,Java,C++".split(",")  # ['Python', 'Java', 'C++']
     ```

   - **`join(iterable)`**: Bir iterable içindeki öğeleri bir string'e birleştirir.
     ```python
     ', '.join(['Python', 'Java', 'C++'])  # 'Python, Java, C++'
     ```

   - **`find(sub)`**: Alt string'in ilk bulunduğu indeks döner. Bulamazsa `-1` döner.
     ```python
     "Python".find("th")  # 2
     ```

   - **`startswith(prefix)` ve `endswith(suffix)`**: String'in belirli bir ön ekle başlayıp başlamadığını veya belirli bir son ekle bitip bitmediğini kontrol eder.
     ```python
     "Python".startswith("Py")  # True
     "Python".endswith("on")    # True
     ```

   - **`count(sub)`**: Alt string'in kaç kez geçtiğini döner.
     ```python
     "banana".count("a")  # 3
     ```

### 5. **String Formatlama**
   Python string'leri formatlama için çeşitli yollar sunar:
   
   - **F-string'ler** (Python 3.6 ve sonrası):
     ```python
     isim = "Ali"
     yas = 25
     print(f"Merhaba, ben {isim} ve {yas} yaşındayım.")
     ```

   - **`format()`** metodu:
     ```python
     isim = "Ali"
     yas = 25
     print("Merhaba, ben {} ve {} yaşındayım.".format(isim, yas))
     ```

### 6. **Kaçış Dizileri (Escape Sequences)**
   Özel karakterleri eklemek için kaçış dizileri kullanılır:
   - `\n`: Yeni satır
   - `\t`: Tab karakteri
   - `\\`: Tek ters eğik çizgi
   - `\'` ve `\"`: Tek ve çift tırnak eklemek için

   ```python
   print("Merhaba\nDünya")  # Yeni satıra geçer
   print("Python\tProgramlama")  # Tab ekler
   ```

### 7. **Karakter Dizilerini Tekrarlama**
   Bir string'i bir sayı ile çarparak tekrar edebilirsiniz:
   
   ```python
   print("Merhaba " * 3)  # 'Merhaba Merhaba Merhaba '
   ```

### 8. **String Karşılaştırma**
   Python'da stringler karşılaştırılabilir. Karşılaştırma işlemleri alfabetik sıraya göre yapılır:
   
   ```python
   "apple" < "banana"  # True
   "abc" == "abc"      # True
   ```

### 9. **Boş String Kontrolü**
   Boş bir string `len()` fonksiyonu ile kontrol edilebilir:
   
   ```python
   s = ""
   if not s:  # True olur çünkü string boş
       print("String boş")
   ```

### 10. **String İçinde Arama**
   String içerisinde belirli bir alt string'i aramak için `in` operatörü kullanılabilir:
   
   ```python
   "py" in "python"  # True
   "java" in "python"  # False
   ```

