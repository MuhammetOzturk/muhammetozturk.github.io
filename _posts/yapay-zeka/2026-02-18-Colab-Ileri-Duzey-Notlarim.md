---
title : Gelişmiş Colab Kullanımı
description : >
    Colab'da etkileşimli form kullanım nasıl tasarlanır?
slug: gelismis-colab-kullanımı
tags: ["colab"]
categories: ["Colab"]
date: 2025-02-18
weight: 1
---

Bu Colab notlarını düzenli bir şekilde yapılandırılmış, açıklamalı bir Markdown formatına dönüştürüyorum. Notlar SQL entegrasyonu, interaktif formlar, widget'lar, layout yönetimi ve animasyonları kapsıyor.

---

# Google Colab Gelişmiş Özellikler Rehberi

Bu rehber Google Colab'in ileri düzey özelliklerini kapsar: SQL entegrasyonu, interaktif formlar, widget yönetimi, layout sistemleri ve animasyonlar.

---

## 1. SQL Entegrasyonu (JupySQL)

Colab üzerinde SQL sorguları çalıştırmak için `jupysql` kütüphanesi kullanılabilir.

### Kurulum ve Yapılandırma

```python
# %pip install -q jupysql
import pandas as pd

# Veri setini yükleme
url = 'https://gist.githubusercontent.com/MuhammetOzturk/caf476e7b51c2be4aca2e60d53007b2a/raw/15ed8c1dd2215bba1b2ff3fc0655b9ea206d75b6/Titanic.csv'
titanic = pd.read_csv(url)
```

### SQL Magic Komutları

```python
# SQL uzantısını yükleme
# %load_ext sql

# SQLite bağlantısı oluşturma ve takma ad (alias) atama
# %sql sqlite:///titanic.db --alias TitanicDBConnection

# DataFrame'i SQL tablosu olarak kaydetme (varsa değiştirme)
# %sql --persist-replace titanic
```

### Yapılandırma Ayarları

```python
# Yapılandırma dosyası oluşturma (~/.jupysql/config)
"""
[tool.jupysql.SqlMagic]
feedback = 0              # Geri bildirim mesajlarını kapatma
autopandas = true         # Sonuçları otomatik DataFrame'e dönüştürme
autocommit = true         # Otomatik commit
short_errors = false      # Kısa hata mesajları
style = "MARKDOWN"        # Markdown formatında çıktı
displaylimit = 5          # Gösterilecek satır limiti
column_local_vars = true  # Sütunları yerel değişken olarak erişilebilir kılma
"""
```

### SQL Sorguları ve Değişken Erişimi

```python
# Temel sorgu
# %sql select * from titanic limit 3

# column_local_vars=true ile sütunlara doğrudan erişim
# Name, Age gibi sütunlar otomatik olarak Python değişkeni olur
print(Name)                    # Tüm isimler dizisi
print(f'İlk isim: {Name[0]}')  # İlk elemana erişim
```

### Saklı Sorgular (Snippets)

```python
# %%sql --save TABLO
# /* 1. sınıf yolcuların tablosu */
# select * from titanic where Pclass = 1

# %%sql --save YENI_TABLO
# /* 1. sınıf yolcularda yaşı 20-30 arası olanlar */
# select * from TABLO where Age > 20 and Age < 30

# Saklı sorguyu DataFrame'e atama
# yeni_tablo = %sql select * from YENI_TABLO
# yeni_tablo.head()

# Saklı sorguları listeleme
# %sqlcmd snippets TABLO
```

---

## 2. Veri Tabloları ve Formatlama

```python
from google.colab import data_table

# DataFrame'in interaktif tablo olarak gösterilmesini etkinleştirme
data_table.enable_dataframe_formatter()

# Devre dışı bırakma
# data_table.disable_dataframe_formatter()

titanic  # Artık interaktif bir tablo olarak görüntülenir
```

---

## 3. İnteraktif Formlar

Colab'de `@param` dekoratörü ile hücre içi interaktif formlar oluşturulabilir.

### Temel Input Türleri

#### Metin Girişi
```python
#@title Forms
text = 'value1' #@param {type:'string'}
print(f"Girilen değer: {text}")

# Placeholder ile
text_with_placeholder = '' #@param {type:'string', placeholder:"Bir değer giriniz"}
```

#### Açılır Liste (Dropdown)
```python
dropdown = '3. option' #@param ['1. option', '2. option', '3. option']
print(f"Seçilen: {dropdown}")

# Hem seçim hem metin girişi (allow-input)
text_and_dropdown = 'value' #@param ['val1', 'val2'] {allow-input:true}
```

#### Ham (Raw) Veri Tipleri
Python nesneleri olarak doğrudan kullanım:
```python
#@title RAW Fields
liste = [1,2,3] #@param {type:'raw'}
print(f"Girilen değer: {liste}")  # Çıktı: [1, 2, 3]

# Sözlük örneği
#@title {run:"auto"}
info = {"name":"Muhammet","lastname":"Ozturk","Age":34} #@param {type:'raw'}

# Raw dropdown (boolean, int, string karışık)
raw_dropdown = True #@param [1,"True","False"] {type:'raw'}
# type(raw_dropdown) -> bool
```

### Tarih ve Sayı Girişleri

```python
#@title Date Fields
date_input = '2026-02-14' #@param {type:'date'}

#@title Number Fields
number = 1 #@param {type:'number'}

# Slider ile sayı seçimi
number_slider = 0 #@param {type:'slider', min:0, max:10, step:0.3}

# Tam sayı
integer_input = 0 #@param {type:'integer'}
integer_slider = 6 #@param {type:'slider', min:0, max:10, step:1}
```

### Boolean (Mantıksal) Değerler

```python
boolean_checkbox = False #@param {type:"boolean"}

# Dropdown olarak boolean
boolean_dropdown = True #@param ["True","False"] {type:"raw"}
```

### Markdown Desteği

```python
#@title ## Markdown
#@markdown ### Markdown örnekleri
#@markdown ---
#@markdown Örnek denklem: $\sum_{i \to 0}^{10} i +1$ </br>
#@markdown ```print("deneme")```
#@markdown ### **Dosya İsmini Giriniz:**
filename = "temp.txt" #@param {type:"string", placeholder:"Dosya ismi"}
```

### Form Görünüm Ayarları

```python
#@title Hide Code {display-mode:"form"}
# display-mode:"form" kodu gizler, sadece form gözükür
option = 'B' #@param ["A","B","C"]

#@title Otomatik yürütme {run:"auto"}
# run:"auto" ile seçim değiştiğinde hücre otomatik çalışır
option = 'A' #@param ["A","B","C"]

#@title {single-column:true, run:"auto"}
# single-column:true ile tek sütun düzeni
checkbox1 = True #@param {type:"boolean"}
checkbox2 = False #@param {type:"boolean"}
checkbox3 = False #@param {type:"boolean"}
```

---

## 4. Widget'lar ile Etkileşim

### IPyWidgets Kullanımı

```python
import ipywidgets as widgets
from IPython.display import display

# Buton oluşturma
button1 = widgets.Button(description="Tıkla")
button2 = widgets.Button(description="Tıkla")

output1 = widgets.Output()
output2 = widgets.Output()
counter = 0

def on_button_clicked(b):
    global counter
    counter += 1
    # b parametresi tıklanan butonu temsil eder
    if b == button1:
        with output1:
            output1.clear_output()
            print(f"1. buton tıklandı. {counter}")
    elif b == button2:
        with output2:
            output2.clear_output()
            print(f"2. buton tıklandı. {counter}")

button1.on_click(on_button_clicked)
button2.on_click(on_button_clicked)

display(button1, output1)
display(button2, output2)
```

---

## 5. Grid ve Layout Yönetimi

### Temel Grid Kullanımı

```python
from google.colab import widgets

# 2x2 grid, başlık satırı ve sütunu ile
grid = widgets.Grid(2, 2, header_row=True, header_column=True)

# Belirli hücreye çıktı yönlendirme
with grid.output_to(1, 1):
    print('Merhaba')

with grid.output_to(0, 0):
    print('Dünya')

with grid.output_to(0, 1):
    print('(0,1)')

with grid.output_to(1, 0):
    print('(1,0)')
```

### Grid ile TabBar Kombinasyonu

```python
import numpy as np
from google.colab import widgets, output
import matplotlib.pyplot as plt

x = np.linspace(1, 10, 100)
sin = np.sin(x)
cos = np.cos(x)

grid = widgets.Grid(1, 2)

with grid.output_to(0, 0):
    # TabBar oluşturma
    tab_bar = widgets.TabBar(['a', 'b'])
    with tab_bar.output_to('a'):
        plt.plot(x, sin, label='sinüs', color='red')
        plt.legend()
        plt.show()
    
    with tab_bar.output_to('b'):
        plt.plot(x, cos, label='kosinüs', color='#FF00FF')
        plt.legend()
        plt.show()

with grid.output_to(0, 1):
    plt.plot(x, cos, label='kosinüs', color='green')
    plt.legend()
    plt.show()
```

### Iterable Grid

```python
# Grid alanlarına indeks üzerinden erişim veya iterasyon
grid = widgets.Grid(3, 3)
for i, (row, col) in enumerate(grid):
    print('Plot!')
    fig, ax = plt.subplots(figsize=(2, 2))
    print(i, row, col)
    ax.plot([i, row, col])
    plt.show()

# Tekrar hücrelere giriş yapılabilir
for i, (row, col) in enumerate(grid):
    print('data at cell %d (%d, %d)\n' % (i, row, col))
```

### Koşullu Tab Seçimi

```python
tb = widgets.TabBar(list('abcde'))
for i in tb.tab_names:
    # select=i=='c' ile 'c' sekmesi varsayılan olarak seçili gelir
    with tb.output_to(i, select=i == 'c'):
        plt.annotate(
            f'{i}. alan',
            xy=(0.5, 0.5),                # merkez (axes koordinatında)
            xycoords='axes fraction',     # 0-1 arası eksen oranı
            ha='center',                  # yatay hizalama
            va='center',                  # dikey hizalama
            fontsize=14
        )
```

---

## 6. Animasyonlar ve Dinamik Güncellemeler

### Matplotlib Animasyonu

```python
import numpy as np
import matplotlib.pyplot as plt
from IPython.display import display, HTML
from matplotlib.animation import FuncAnimation

fig, ax = plt.subplots()
xdata, ydata = [], []
ln, = ax.plot([], [], 'ro')

def init():
    ax.set_xlim(0, 2*np.pi)
    ax.set_ylim(-1, 1)
    return ln,

def update(frame):
    xdata.append(frame)
    ydata.append(np.sin(frame))
    ln.set_data(xdata, ydata)
    return ln,

ani = FuncAnimation(fig, update, frames=np.linspace(0, 2*np.pi, 128),
                    init_func=init, blit=True)

# HTML5 video olarak göster
display(HTML(ani.to_html5_video()))
plt.close(fig)
```

### Dinamik Display Güncelleme

`update_display` ile yeniden render etmeden güncelleme:

```python
import numpy as np
import matplotlib.pyplot as plt
from IPython.display import display, update_display, clear_output
from io import BytesIO
import time

# İlk figürü oluştur
fig, ax = plt.subplots(figsize=(8, 4))
x = np.linspace(0, 4*np.pi, 200)
line, = ax.plot(x, np.sin(x))
ax.set_ylim(-1.5, 1.5)

# İlk gösterim (display_id önemli!)
display_handle = display(fig, display_id=True)

# Animasyon döngüsü
for frame in range(300):
    # Veriyi güncelle
    y = np.sin(x + frame * 0.2) * np.exp(-frame * 0.01)
    line.set_ydata(y)
    ax.set_title(f"Damping: {np.exp(-frame * 0.01):.3f}")
    
    # Figure'u buffer'a kaydet
    buf = BytesIO()
    fig.savefig(buf, format='png', dpi=100, bbox_inches='tight')
    buf.seek(0)
    
    # update_display ile güncelle (clear_output kullanmadan!)
    from IPython.display import Image
    update_display(Image(data=buf.getvalue()), display_id=display_handle.display_id)
    
    # time.sleep(0.05)

plt.close(fig)  # Belleği temizle
```

---

## Özet Tablo: Form Parametreleri

| Parametre | Açıklama | Örnek |
|-----------|----------|-------|
| `type:'string'` | Metin girişi | `#@param {type:'string'}` |
| `type:'number'` | Ondalıklı sayı | `#@param {type:'number'}` |
| `type:'integer'` | Tam sayı | `#@param {type:'integer'}` |
| `type:'slider'` | Kaydırıcı | `{type:'slider', min:0, max:10}` |
| `type:'boolean'` | Onay kutusu | `#@param {type:"boolean"}` |
| `type:'raw'` | Python nesnesi | `#@param {type:'raw'}` |
| `type:'date'` | Tarih seçici | `#@param {type:'date'}` |
| `allow-input:true` | Özel girişe izin ver | `#@param ['a','b'] {allow-input:true}` |
| `placeholder` | Yer tutucu metin | `{placeholder:"Metin girin"}` |
| `run:"auto"` | Otomatik çalıştırma | `#@title {run:"auto"}` |
| `display-mode:"form"` | Kodu gizle | `#@title {display-mode:"form"}` |
| `single-column:true` | Tek sütun düzeni | `#@title {single-column:true}` |

---

Bu notlar Google Colab'de veri analizi, interaktif dashboard oluşturma ve görselleştirme çalışmalarınızda kullanabileceğiniz ileri düzey özellikleri kapsamaktadır.
