---  
title       : "18- SQL Komutları"
date        : 2025-02-22
description : >
    Temel sql komutları hakkında bilgi verilmiştir.

slug        : sql-kullanimi
tags        : ["sql kullanımı"]
categories  : ["Python"]
weight      : 18
---

### 1. **Veritabanı Oluşturma**

SQLite’da bir veritabanı dosyası oluşturmak için komut satırında ya da Python gibi bir dille şu adımları izleyebilirsiniz:

```sql
sqlite3 ornek.db
```

Bu komut, `ornek.db` adlı bir veritabanı dosyası oluşturur.

### 2. **Tablo Oluşturma**

Veritabanında bir tablo oluşturmak için `CREATE TABLE` komutu kullanılır:

```sql
CREATE TABLE ogrenciler (
    id INTEGER PRIMARY KEY,
    isim TEXT NOT NULL,
    yas INTEGER,
    sehir TEXT
);
```

Bu örnek, `ogrenciler` adlı bir tablo oluşturur ve bu tabloya `id`, `isim`, `yas`, ve `sehir` sütunlarını ekler.

### 3. **Veri Ekleme**

`INSERT INTO` komutuyla tabloya yeni kayıt eklenir:

```sql
INSERT INTO ogrenciler (isim, yas, sehir) VALUES ('Ahmet', 21, 'İstanbul');
```

Bu komut, `ogrenciler` tablosuna Ahmet isimli bir öğrenci kaydını ekler.

### 4. **Veri Okuma**

Tablodaki verileri listelemek için `SELECT` komutu kullanılır:

```sql
SELECT * FROM ogrenciler;
```

Bu komut, `ogrenciler` tablosundaki tüm kayıtları gösterir. Belirli sütunları seçmek için şunları kullanabilirsiniz:

```sql
SELECT isim, yas FROM ogrenciler;
```

### 5. **Veri Güncelleme**

Kayıtları güncellemek için `UPDATE` komutu kullanılır. Örneğin, Ahmet'in yaşını güncellemek için:

```sql
UPDATE ogrenciler SET yas = 22 WHERE isim = 'Ahmet';
```

Bu komut, `isim` değeri "Ahmet" olan öğrencinin yaşını 22 olarak günceller.

### 6. **Veri Silme**

Kayıtları silmek için `DELETE` komutu kullanılır. Örneğin, "İstanbul" şehrinde yaşayan öğrenciyi silmek için:

```sql
DELETE FROM ogrenciler WHERE sehir = 'İstanbul';
```

### 7. **Koşullu Seçim**

Belirli bir koşulu sağlayan verileri seçmek için `WHERE` ifadesi kullanılır:

```sql
SELECT * FROM ogrenciler WHERE yas > 20;
```

Bu komut, yaşı 20'den büyük olan tüm öğrencileri listeleyecektir.

### 8. **Sıralama**

Verileri sıralamak için `ORDER BY` ifadesi kullanılır:

```sql
SELECT * FROM ogrenciler ORDER BY yas DESC;
```

Bu komut, `ogrenciler` tablosundaki kayıtları `yas` sütununa göre azalan sırada listeler.

### 9. **Toplam, Ortalama, Minimum ve Maksimum Değerleri Alma**

Matematiksel işlemler yapmak için `SUM`, `AVG`, `MIN`, `MAX` gibi fonksiyonlar kullanılır:

```sql
SELECT AVG(yas) FROM ogrenciler;
```

Bu komut, `ogrenciler` tablosundaki yaşların ortalamasını verir.

### 10. **Gruplama**

Belirli bir sütuna göre kayıtları gruplamak için `GROUP BY` kullanılır:

```sql
SELECT sehir, COUNT(*) FROM ogrenciler GROUP BY sehir;
```

Bu komut, `ogrenciler` tablosundaki şehirlerin sayısını verir.

### 11. **Tablo Silme**

Bir tabloyu silmek için `DROP TABLE` komutu kullanılır:

```sql
DROP TABLE ogrenciler;
```

Bu komut `ogrenciler` tablosunu tamamen siler.



### 12. **Tablo Yapısını Değiştirme (ALTER TABLE)**

Bir tabloya yeni bir sütun eklemek veya sütun adını değiştirmek için `ALTER TABLE` komutu kullanılır:

- **Yeni Sütun Ekleme**:

  ```sql
  ALTER TABLE ogrenciler ADD COLUMN email TEXT;
  ```

  Bu komut, `ogrenciler` tablosuna `email` adlı bir sütun ekler.

- **Sütun Adını Değiştirme**:

  SQLite, bir sütunun adını değiştirmek için doğrudan bir komut sunmaz, ancak tabloyu yeniden oluşturarak sütun adını değiştirebilirsiniz.

### 13. **Birleştirme İşlemi (JOIN)**

Birden fazla tabloyu birleştirerek veri çekmek için `JOIN` ifadesi kullanılır. Aşağıda temel bir `INNER JOIN` örneği verilmiştir.

Örneğin, `dersler` tablosunu oluşturup `ogrenciler` tablosuyla ilişkilendirelim:

```sql
CREATE TABLE dersler (
    ders_id INTEGER PRIMARY KEY,
    ogrenci_id INTEGER,
    ders_adi TEXT,
    FOREIGN KEY (ogrenci_id) REFERENCES ogrenciler(id)
);
```

- **INNER JOIN**:

  ```sql
  SELECT ogrenciler.isim, dersler.ders_adi
  FROM ogrenciler
  INNER JOIN dersler ON ogrenciler.id = dersler.ogrenci_id;
  ```

  Bu komut, `ogrenciler` tablosundaki `isim` ile `dersler` tablosundaki `ders_adi` sütunlarını birleştirerek listeler.

### 14. **Alt Sorgular (Subqueries)**

Bir sorguyu başka bir sorgunun içinde kullanmak için alt sorgular yapılabilir. Alt sorgular genellikle `SELECT`, `INSERT`, `UPDATE`, veya `DELETE` ifadelerinde kullanılır.

Örneğin, yaşı ortalamanın üzerinde olan öğrencileri seçmek:

```sql
SELECT isim FROM ogrenciler WHERE yas > (SELECT AVG(yas) FROM ogrenciler);
```

Bu komut, `ogrenciler` tablosundaki yaşları ortalamadan büyük olan öğrencileri getirir.

### 15. **Veri Kısıtlamaları (Constraints)**

Tablolar oluşturulurken veri doğruluğunu sağlamak için kısıtlamalar eklenebilir:

- **NOT NULL**: Bu kısıtlama, sütunun boş bırakılamayacağını belirtir.

  ```sql
  CREATE TABLE ogrenciler (
      id INTEGER PRIMARY KEY,
      isim TEXT NOT NULL,
      yas INTEGER,
      sehir TEXT
  );
  ```

- **UNIQUE**: Bir sütunun benzersiz değerler içermesini sağlar.

  ```sql
  CREATE TABLE ogrenciler (
      id INTEGER PRIMARY KEY,
      email TEXT UNIQUE
  );
  ```

- **DEFAULT**: Sütun için bir varsayılan değer atar.

  ```sql
  CREATE TABLE ogrenciler (
      id INTEGER PRIMARY KEY,
      sehir TEXT DEFAULT 'İstanbul'
  );
  ```

### 16. **Dizinler (Indexes)**

Tablolarda hızlı veri araması yapmak için dizinler oluşturulabilir:

```sql
CREATE INDEX idx_ogrenci_isim ON ogrenciler(isim);
```

Bu komut, `ogrenciler` tablosundaki `isim` sütununda bir dizin oluşturur ve arama işlemlerini hızlandırır.

### 17. **Geçici Tablolar (Temporary Tables)**

Sadece bir oturum süresince geçerli olan geçici tablolar oluşturmak için `TEMPORARY` anahtar kelimesi kullanılır:

```sql
CREATE TEMPORARY TABLE temp_ogrenciler (
    id INTEGER,
    isim TEXT
);
```

Bu tablo, sadece geçerli oturum boyunca kullanılabilir.

### Örnek Durum:

Diyelim ki iki tablonuz var:

1. **Geçici Tablo (`gecici_tablo`)**: İçeriği başka bir tablodan güncellenecek.
   ```sql
   CREATE TABLE gecici_tablo (
       id INTEGER PRIMARY KEY,
       isim TEXT,
       yas INTEGER
   );
   ```

2. **Kaynak Tablo (`kaynak_tablo`)**: Veriler buradan alınacak.
   ```sql
   CREATE TABLE kaynak_tablo (
       id INTEGER PRIMARY KEY,
       isim TEXT,
       yas INTEGER
   );
   ```

### `17.1 `Geçici Tabloyu Kaynak Tablo Verileriyle Tamamen Yeniden Doldurma

Eğer geçici tablodaki mevcut verileri tamamen silip, yerine kaynak tablodan yeni veriler eklemek isterseniz:

```sql
DELETE FROM gecici_tablo;

INSERT INTO gecici_tablo (id, isim, yas)
SELECT id, isim, yas
FROM kaynak_tablo;
```

---

###  Örnek Veriler ve İşlem Akışı

#### A. Kaynak Tabloya Veri Ekleme:
```sql
INSERT INTO kaynak_tablo (id, isim, yas) VALUES
(1, 'Ahmet', 20),
(2, 'Ayşe', 22),
(3, 'Mehmet', 25);
```

#### B. Geçici Tabloya Başlangıçta Eksik Veriler Ekleme:
```sql
INSERT INTO gecici_tablo (id) VALUES
(1),
(2),
(3);
```

#### C. Geçici Tabloyu Kaynak Tablo Verileriyle Güncelleme:
```sql
UPDATE gecici_tablo
SET isim = (
    SELECT kaynak_tablo.isim
    FROM kaynak_tablo
    WHERE kaynak_tablo.id = gecici_tablo.id
),
yas = (
    SELECT kaynak_tablo.yas
    FROM kaynak_tablo
    WHERE kaynak_tablo.id = gecici_tablo.id
)
WHERE EXISTS (
    SELECT 1
    FROM kaynak_tablo
    WHERE kaynak_tablo.id = gecici_tablo.id
);
```

#### D. Sonuçları Görüntüleme:
```sql
SELECT * FROM gecici_tablo;
```

Sonuç:

| id  | isim    | yas  |
|-----|---------|------|
| 1   | Ahmet   | 20   |
| 2   | Ayşe    | 22   |
| 3   | Mehmet  | 25   |


### `17.2` Kaynak Tablodaki Verilerle Geçici Tabloyu Güncelleme

**Senaryo:** `gecici_tablo` içinde `isim` ve `yas` sütunlarını, `kaynak_tablo` içindeki eşleşen `id` değerine göre güncellemek istiyoruz.

```sql
UPDATE gecici_tablo
SET isim = (
    SELECT kaynak_tablo.isim
    FROM kaynak_tablo
    WHERE kaynak_tablo.id = gecici_tablo.id
),
yas = (
    SELECT kaynak_tablo.yas
    FROM kaynak_tablo
    WHERE kaynak_tablo.id = gecici_tablo.id
)
WHERE EXISTS (
    SELECT 1
    FROM kaynak_tablo
    WHERE kaynak_tablo.id = gecici_tablo.id
);
```


Bu yöntemle, geçici tablonuzdaki bilgileri diğer bir tablonun verileriyle güvenli bir şekilde güncelleyebilirsiniz. `WHERE EXISTS` kısmı, yalnızca eşleşen verilerin güncellenmesini garanti eder.


### 18. **Görünümler (Views)**

Sık kullanılan sorguları kolaylaştırmak için `VIEW` ifadesiyle sanal tablolar oluşturabilirsiniz:

```sql
CREATE VIEW yasli_ogrenciler AS
SELECT * FROM ogrenciler WHERE yas > 20;
```

Bu komut, yaşı 20'den büyük olan öğrencileri listeleyen `yasli_ogrenciler` adlı bir görünüm oluşturur.

### 19. **Trigger (Tetikleyiciler)**

Belirli bir olay gerçekleştiğinde otomatik olarak çalışan tetikleyiciler oluşturabilirsiniz. Örneğin, bir kayıt silindiğinde bir tetikleyici çalıştırmak için:

```sql
CREATE TRIGGER ogrenci_sil_trigger
AFTER DELETE ON ogrenciler
BEGIN
    INSERT INTO silinen_ogrenciler (isim, yas, sehir) VALUES (OLD.isim, OLD.yas, OLD.sehir);
END;
```

Bu tetikleyici, bir öğrenci silindiğinde `silinen_ogrenciler` tablosuna bu öğrencinin bilgilerini ekler.

### 20. **Transaksiyonlar (Transactions)**

Veritabanında bir dizi işlemi bir arada gerçekleştirmek ve işlemlerin tam olarak tamamlanmasını sağlamak için transaksiyonlar kullanılır:

```sql
BEGIN TRANSACTION;

INSERT INTO ogrenciler (isim, yas, sehir) VALUES ('Merve', 19, 'Ankara');
UPDATE ogrenciler SET sehir = 'İzmir' WHERE isim = 'Ahmet';

COMMIT;
```

`BEGIN TRANSACTION` ile başlayan işlemler, `COMMIT` ifadesiyle tamamlanır. Eğer bir hata oluşursa `ROLLBACK` ile işlemler geri alınabilir.

### 21. **Veritabanı ilişkileri**

Veritabanı ilişkileri, birden fazla tablo arasında bağlantı kurarak veritabanında veri tutarlılığını sağlamak ve karmaşık sorgular yapabilmek için kullanılır. İlişkiler veritabanında, tablolar arasında anlamlı bağlantılar kurarak verinin daha organize ve kolay erişilebilir olmasını sağlar. İşte başlıca ilişki türleri ve açıklamaları:

### 1. **Bir-e-Bir (One-to-One) İlişkisi**

Bir tablodaki bir satırın, diğer tablodaki yalnızca bir satırla ilişkilendirildiği durumdur. Bu ilişki türü genellikle, bir tabloyu başka bir tabloya bölerek daha organize ve güvenli veri depolama sağlamak için kullanılır.

**Örnek**: 

- `kullanicilar` tablosunda her kullanıcıya ait `kullanici_id` ile `kullanici_detaylar` tablosunda her kullanıcıya ait ayrıntıların bulunması.

**Kullanım:**

```sql
CREATE TABLE kullanicilar (
    kullanici_id INTEGER PRIMARY KEY,
    isim TEXT
);

CREATE TABLE kullanici_detaylar (
    kullanici_detay_id INTEGER PRIMARY KEY,
    kullanici_id INTEGER,
    adres TEXT,
    telefon TEXT,
    FOREIGN KEY (kullanici_id) REFERENCES kullanicilar(kullanici_id)
);
```

Bu örnekte, her kullanıcıya karşılık gelen bir kullanıcı detayı vardır.

### 2. **Bir-e-Çok (One-to-Many) İlişkisi**

Bir tablodaki bir satırın, diğer tablodaki birden fazla satırla ilişkili olduğu durumu ifade eder. Bu, en yaygın kullanılan ilişki türüdür ve genellikle bir ana tablodaki bir öğeye bağlı birden fazla alt öğeyi saklamak için kullanılır.

**Örnek**: 

- `ogretmenler` tablosunda her öğretmen, `ogrenciler` tablosundaki birden fazla öğrenci ile ilişkilidir.

**Kullanım:**

```sql
CREATE TABLE ogretmenler (
    ogretmen_id INTEGER PRIMARY KEY,
    isim TEXT
);

CREATE TABLE ogrenciler (
    ogrenci_id INTEGER PRIMARY KEY,
    isim TEXT,
    ogretmen_id INTEGER,
    FOREIGN KEY (ogretmen_id) REFERENCES ogretmenler(ogretmen_id)
);
```

Bu yapıda her öğrenci yalnızca bir öğretmenle ilişkiliyken, her öğretmen birden fazla öğrenciyle ilişkilidir.

### 3. **Çok-e-Çok (Many-to-Many) İlişkisi**

Bir tablodaki bir satırın, diğer tablodaki birden fazla satırla ilişkili olduğu ve bu ilişkinin her iki yönde de geçerli olduğu durumdur. `Many-to-Many` ilişkilerde genellikle bir ara tablo (ilişki tablosu) kullanılarak bağlantı kurulur.

**Örnek**: 

- `ogrenciler` tablosunda her öğrenci, `dersler` tablosundaki birden fazla dersle ilişkili olabilir ve her ders de birden fazla öğrenciyle ilişkili olabilir.

**Kullanım:**

```sql
CREATE TABLE ogrenciler (
    ogrenci_id INTEGER PRIMARY KEY,
    isim TEXT
);

CREATE TABLE dersler (
    ders_id INTEGER PRIMARY KEY,
    ders_adi TEXT
);

CREATE TABLE ogrenci_ders (
    ogrenci_id INTEGER,
    ders_id INTEGER,
    FOREIGN KEY (ogrenci_id) REFERENCES ogrenciler(ogrenci_id),
    FOREIGN KEY (ders_id) REFERENCES dersler(ders_id),
    PRIMARY KEY (ogrenci_id, ders_id)
);
```

Bu yapıda `ogrenci_ders` adlı ara tablo, `ogrenciler` ve `dersler` tabloları arasında bir `Many-to-Many` ilişki oluşturur. 

### 4. **Bir Tablo İçindeki Kendi Kendine İlişki (Self-Referencing Relationship)**

Bir tablodaki kayıtların kendi içlerinde ilişki kurabildiği durumu ifade eder. Bu, özellikle hiyerarşik yapılar kurarken kullanışlıdır.

**Örnek**: 

- `calisanlar` tablosunda her çalışan bir yöneticiye bağlı olabilir. Bu ilişki aynı tabloda kendisiyle ilişki kurarak sağlanır.

**Kullanım:**

```sql
CREATE TABLE calisanlar (
    calisan_id INTEGER PRIMARY KEY,
    isim TEXT,
    yonetici_id INTEGER,
    FOREIGN KEY (yonetici_id) REFERENCES calisanlar(calisan_id)
);
```

Bu yapıda, `yonetici_id`, aynı tablodaki başka bir çalışanı (yöneticiyi) referans eder. Böylece, her çalışan kendisine bağlı çalışanlara sahip olabilir.

### İlişki Türlerinin Kullanım Amacı

- **Bir-e-Bir**: Özel durumlarda, aynı tablodaki fazla veri karmaşıklığını azaltmak için kullanılır.
- **Bir-e-Çok**: Hiyerarşik verilerde, bir ana kayıt ile birden fazla alt kayıt arasında ilişki kurmak için idealdir.
- **Çok-e-Çok**: İki tablo arasında karşılıklı bağlantıların gerektiği durumlarda, veriyi normalleştirerek gereksiz tekrarları önler.
- **Self-Referencing**: Hiyerarşik yapılar kurmak için idealdir; örneğin bir şirket içindeki çalışan-yönetici ilişkisi gibi.

Bu ilişki türleri, veritabanını daha verimli bir şekilde modellemenizi sağlar. Her ilişki türü, veriyi tutarlı bir şekilde saklamak, düzenlemek ve sorgulamak için belirli kullanım alanlarına sahiptir.
