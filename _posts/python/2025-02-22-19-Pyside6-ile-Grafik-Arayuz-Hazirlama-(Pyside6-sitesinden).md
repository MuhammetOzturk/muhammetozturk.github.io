---  
title       : "19- PySide6 ile Grafik Arayüz Hazırlama"
date        : 2025-02-22
description : >
    Python'da pyside6 ile grafik arayüzleri nasıl hazırlanır açıklanmıştır.
slug        : pyside6-kullanimi
tags        : ["pyside6"]
categories  : ["Python"]
weight      : 19
---

### 1. Basit Bir PySide6 Uygulaması

Bir GUI uygulaması oluştururken ilk adım, temel bir pencere oluşturmak ve ona widget'lar eklemektir. Aşağıda basit bir PySide6 uygulamasının nasıl oluşturulacağını adım adım anlatacağız:

```python
import sys
from PySide6.QtWidgets import QApplication, QLabel, QMainWindow

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("PySide6 Uygulaması")
        label = QLabel("Merhaba, PySide6!")
        self.setCentralWidget(label)

app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()
```

#### Açıklama:
- **QApplication**: PySide6 uygulamasının çalışmasını sağlayan ana sınıftır. Her GUI uygulaması bir QApplication örneğine ihtiyaç duyar.
- **QMainWindow**: Ana pencereyi temsil eder. PySide6'da ana pencere oluşturmak için QMainWindow sınıfı kullanılır.
- **QLabel**: Metin görüntülemek için kullanılır. Burada basit bir "Merhaba, PySide6!" mesajı gösteriyoruz.
- **self.setCentralWidget**: Ana pencerenin merkezine bir widget (burada QLabel) yerleştirir.

### 2. Layout (Düzen) Yönetimi

Daha karmaşık uygulamalarda, birden fazla widget kullanmanız gerekebilir. Bu durumda widget'ların düzenlenmesi önemlidir. Qt, layout (düzen) yönetimini sağlar. Örnek olarak, QVBoxLayout ve QHBoxLayout kullanarak widget'ları dikey ve yatay olarak düzenleyebiliriz.

```python
from PySide6.QtWidgets import QApplication, QLabel, QMainWindow, QVBoxLayout, QWidget

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Layout Örneği")

        layout = QVBoxLayout()

        label1 = QLabel("Birinci Etiket")
        label2 = QLabel("İkinci Etiket")
        label3 = QLabel("Üçüncü Etiket")

        layout.addWidget(label1)
        layout.addWidget(label2)
        layout.addWidget(label3)

        container = QWidget()
        container.setLayout(layout)
        self.setCentralWidget(container)

app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()
```

```python
import sys
from PySide6.QtWidgets import (QApplication, 
							   QMainWindow,
                               QWidget, 
                               QVBoxLayout,
                               QHBoxLayout, 
                               QGridLayout)
                               
from PySide6.QtGui import QPalette, QColor
from PySide6.QtCore import QSize

class Color(QWidget):
    def __init__(self, color):
        super().__init__()
        self.setAutoFillBackground(True)

        palette = self.palette()
        palette.setColor(QPalette.Window, QColor(color))
        self.setPalette(palette)

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("My App")

        # Widget'lar
        red_widget = Color('red')
        green_widget = Color("green")
        blue_widget = Color("blue")
        yellow_widget = Color("yellow")

        # Grid layout
        grid_layout = QGridLayout()
        grid_layout.addWidget(Color('red'), 0, 0)
        grid_layout.addWidget(Color('green'), 1, 0)
        grid_layout.addWidget(Color('blue'), 1, 1)
        grid_layout.addWidget(Color('purple'), 2, 1)

        # HBoxLayout
        hboxlayout = QHBoxLayout()
        hboxlayout.setSpacing(5)
        hboxlayout.addWidget(blue_widget)
        hboxlayout.addWidget(yellow_widget)

        # VBoxLayout
        main_vboxlayout = QVBoxLayout()
        vboxlayout = QVBoxLayout()
        vboxlayout.setSpacing(1)
        vboxlayout.addWidget(red_widget)  # red_widget ekleniyor
        vboxlayout.addWidget(green_widget)  # green_widget ekleniyor
        main_vboxlayout.addLayout(vboxlayout,3)
        main_vboxlayout.addLayout(hboxlayout,3)   # HBoxLayout ekleniyor
        main_vboxlayout.addLayout(grid_layout,4)  # GridLayout ekleniyor

        # Ana widget ve layout
        main_widget = QWidget()
        main_widget.setLayout(main_vboxlayout)

        self.setCentralWidget(main_widget)
        self.resize(800, 600)  # Genişlik: 800, Yükseklik: 600
        #self.setGeometry(100, 100, 800, 600)  # (x, y, genişlik, yükseklik)

app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()

```

```python
import sys

from PySide6.QtCore import Qt
from PySide6.QtGui import QPalette, QColor
from PySide6.QtWidgets import (
    QApplication,
    QHBoxLayout,
    QLabel,
    QMainWindow,
    QPushButton,
    QStackedLayout,
    QVBoxLayout,
    QWidget,
)

class Color(QWidget):
    def __init__(self, color):
        super().__init__()
        self.setAutoFillBackground(True)

        palette = self.palette()
        palette.setColor(QPalette.Window, QColor(color))
        self.setPalette(palette)

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("My App")

        pagelayout = QVBoxLayout()
        button_layout = QHBoxLayout()
        self.stacklayout = QStackedLayout()

        pagelayout.addLayout(button_layout)
        pagelayout.addLayout(self.stacklayout)

        btn = QPushButton("red")
        btn.pressed.connect(self.activate_tab_1)
        button_layout.addWidget(btn)
        self.stacklayout.addWidget(Color("red"))

        btn = QPushButton("green")
        btn.pressed.connect(self.activate_tab_2)
        button_layout.addWidget(btn)
        self.stacklayout.addWidget(Color("green"))

        btn = QPushButton("yellow")
        btn.pressed.connect(self.activate_tab_3)
        button_layout.addWidget(btn)
        self.stacklayout.addWidget(Color("yellow"))

        widget = QWidget()
        widget.setLayout(pagelayout)
        self.setCentralWidget(widget)

    def activate_tab_1(self):
        self.stacklayout.setCurrentIndex(0)

    def activate_tab_2(self):
        self.stacklayout.setCurrentIndex(1)

    def activate_tab_3(self):
        self.stacklayout.setCurrentIndex(2)


app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()

```


### 3. Düğme ve Sinyal-Slot Mekanizması

PySide6'da sinyal-slot mekanizması, bir widget'ın tetiklediği olaylara tepki vermek için kullanılır. Örneğin, bir düğmeye tıklandığında bir işlem yapılmasını sağlayabilirsiniz.

```python
from PySide6.QtWidgets import QApplication, QPushButton, QMainWindow

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Düğme ve Sinyal-Slot Örneği")

        button = QPushButton("Tıkla")
        button.clicked.connect(self.button_clicked)
        self.setCentralWidget(button)

    def button_clicked(self):
        print("Düğmeye tıklandı!")

app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()
```

#### Açıklama:
- **QPushButton**: Bir düğme widget'ıdır. Kullanıcı düğmeye tıkladığında, `clicked` sinyali yayılır.
- **connect()**: Sinyali bir slot'a bağlar. Burada `button.clicked.connect(self.button_clicked)` ifadesi, düğmeye tıklandığında `button_clicked()` metodunu çağırır.
- **button_clicked()**: Düğmeye tıklandığında çalışacak olan metot.

### 4. Menü ve Araç Çubuğu

Daha gelişmiş bir PySide6 uygulaması, menü ve araç çubuğu gibi bileşenler içerebilir. Bu bileşenler uygulamanın işlevlerini hızla erişilebilir hale getirir.

```python
from PySide6.QtWidgets import QApplication, QMainWindow, QAction

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Menü ve Araç Çubuğu Örneği")

        menubar = self.menuBar()
        file_menu = menubar.addMenu("Dosya")

        open_action = QAction("Aç", self)
        open_action.triggered.connect(self.open_file)
        file_menu.addAction(open_action)




    def open_file(self):
        print("Dosya açılıyor...")

app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()
```

#### Açıklama:
- **menuBar()**: Ana pencereye bir menü çubuğu ekler.
- **QAction**: Menüde veya araç çubuğunda yer alacak bir işlemi temsil eder.
- **addAction()**: Menüye veya araç çubuğuna bir eylem ekler. Burada "Aç" adlı bir eylem ekledik.
- **triggered.connect()**: QAction tetiklendiğinde (tıklandığında) bir fonksiyon çalıştırır.

### 5. Pencereyi Özelleştirme

Qt for Python'da pencerenin görünümünü ve davranışını özelleştirmek oldukça kolaydır. Örneğin, pencereyi yeniden boyutlandırmayı veya taşımayı kısıtlayabilirsiniz.

```python
class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Özelleştirilmiş Pencere")
        self.setFixedSize(400, 300)  # Sabit pencere boyutu

app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()
```

#### Açıklama:
- **setFixedSize()**: Pencereyi sabit bir boyutta ayarlamak için kullanılır. Burada pencere boyutu 400x300 piksel olarak sabitlenmiştir.

### 6. Grafikler ve Çizim

PySide6 ile grafiksel çizimler de yapabilirsiniz. Bunun için `QPainter` sınıfını kullanarak bir pencereye çeşitli şekiller çizebilirsiniz.

```python
from PySide6.QtWidgets import QApplication, QMainWindow
from PySide6.QtGui import QPainter, QPen
from PySide6.QtCore import Qt

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Çizim Örneği")

    def paintEvent(self, event):
        painter = QPainter(self)
        pen = QPen(Qt.black, 5)
        painter.setPen(pen)
        painter.drawLine(10, 10, 100, 100)  # Basit bir çizgi çizer

app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()
```

#### Açıklama:
- **QPainter**: Grafiksel çizimler yapmak için kullanılır.
- **drawLine()**: İki nokta arasında bir çizgi çizer. Yukarıdaki örnekte (10, 10) ile (100, 100) arasında bir çizgi çizilmektedir.

### 7. Dialog (Diyalog) Pencereleri

PySide6, kullanıcıyla etkileşim sağlamak için çeşitli diyalog pencereleri sunar. Diyalog pencereleri, kullanıcıdan veri almak ya da bilgi vermek için kullanılır. Örneğin, dosya seçme penceresi, uyarı mesajları ve kullanıcıdan giriş alınan diyaloglar en sık kullanılanlardandır.

#### 7.1. Mesaj Kutusu (Message Box)
Mesaj kutuları, uyarı veya bilgi vermek için kullanılan diyalog pencereleridir.

```python
from PySide6.QtWidgets import QApplication, QMainWindow, QMessageBox

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Mesaj Kutusu Örneği")

    def closeEvent(self, event):
        reply = QMessageBox.question(self, "Çıkış", "Çıkmak istediğinize emin misiniz?",
                                     QMessageBox.Yes | QMessageBox.No, QMessageBox.No)

        if reply == QMessageBox.Yes:
            event.accept()
        else:
            event.ignore()

app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()
```

#### Açıklama:
- **QMessageBox**: Basit mesaj kutuları oluşturmak için kullanılır. Yukarıdaki örnekte, uygulamadan çıkmak isteyip istemediğinizi soran bir onay kutusu gösterilmektedir.
- **closeEvent()**: Pencere kapatılmadan önce tetiklenen olaydır. Burada pencere kapanmadan önce onay kutusu gösterilmektedir.

#### 7.2. Dosya Seçme Penceresi
Dosya seçme pencereleri, kullanıcıların dosya sisteminden bir dosya seçmesine olanak tanır.

```python
from PySide6.QtWidgets import QApplication, QMainWindow, QFileDialog

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Dosya Seçme Penceresi Örneği")

        file_dialog = QFileDialog(self)
        file_path, _ = file_dialog.getOpenFileName(self, "Dosya Seç", "", "Tüm Dosyalar (*);;Metin Dosyaları (*.txt)")

        if file_path:
            print(f"Seçilen dosya: {file_path}")

app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()
```

#### Açıklama:
- **QFileDialog**: Kullanıcıların dosya sistemi üzerinde bir dosya seçmesini sağlar.
- **getOpenFileName()**: Kullanıcıdan dosya seçmesini isteyen diyalog penceresini açar. Burada kullanıcı bir dosya seçtikten sonra, dosyanın yolu `file_path` değişkenine kaydedilir.

### 8. Zamanlayıcı (Timer) Kullanımı

Zamanlayıcılar (timers), belirli aralıklarla bir işlem yapmamız gerektiğinde kullanılır. Örneğin, bir sayacı her saniye güncellemek için kullanılabilir.

```python
from PySide6.QtCore import QTimer
from PySide6.QtWidgets import QApplication, QLabel, QMainWindow

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Zamanlayıcı Örneği")

        self.label = QLabel("0")
        self.setCentralWidget(self.label)

        self.counter = 0

        self.timer = QTimer()
        self.timer.setInterval(1000)  # 1 saniye (1000 milisaniye)
        self.timer.timeout.connect(self.update_label)
        self.timer.start()

    def update_label(self):
        self.counter += 1
        self.label.setText(str(self.counter))

app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()
```

#### Açıklama:
- **QTimer**: Zamanlayıcı işlevi görür ve belirli aralıklarla sinyal yayar.
- **timeout.connect()**: Zamanlayıcı her "timeout" olduğunda (yani belirlenen süre dolduğunda), `update_label` fonksiyonu çalışır ve sayaç bir artırılarak ekrana yazdırılır.

### 9. QTableWidget ile Tablo Gösterimi

Tablo, verileri satır ve sütunlar halinde görüntülemek için kullanılır. PySide6, tablo yapıları için `QTableWidget` sınıfını sağlar.

```python
from PySide6.QtWidgets import QApplication, QMainWindow, QTableWidget, QTableWidgetItem

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Tablo Örneği")

        table = QTableWidget(3, 3)
        table.setHorizontalHeaderLabels(["Sütun 1", "Sütun 2", "Sütun 3"])

        for i in range(3):
            for j in range(3):
                item = QTableWidgetItem(f"Veri {i+1},{j+1}")
                table.setItem(i, j, item)

        self.setCentralWidget(table)

app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()
```

#### Açıklama:
- **QTableWidget**: Tabloları oluşturmak ve veri göstermek için kullanılır. Burada 3x3'lük bir tablo oluşturulmuştur.
- **setHorizontalHeaderLabels()**: Tablo sütunlarına başlıklar ekler.
- **setItem()**: Belirtilen hücreye bir veri ekler.

### 10. Form ve Kullanıcıdan Giriş Alma

Formlar, kullanıcının çeşitli bilgileri girmesi için kullanılan arayüzlerdir. `QLineEdit`, `QComboBox`, `QRadioButton` ve `QCheckBox` gibi widget'lar form elemanları olarak kullanılır.

```python
import sys
from PySide6.QtWidgets import QApplication, QFormLayout, QLabel, QLineEdit, QMainWindow, QWidget,QPushButton

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Form Örneği")

        layout = QFormLayout()

        self.name_input = QLineEdit()
        self.age_input = QLineEdit()
        self.button = QPushButton("Kaydet")
        self.button.clicked.connect(self.save)

        layout.addRow("İsim:", self.name_input)
        layout.addRow("Yaş:", self.age_input)
        layout.addRow(self.button)

        container = QWidget()
        container.setLayout(layout)
        self.setCentralWidget(container)

    def save(self):
        print(self.name_input.text())
        print(self.age_input.text())

app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()

```

#### Açıklama:
- **QFormLayout**: Form düzenini sağlayan layout sınıfıdır. Kullanıcının belirli alanlara giriş yapması gereken uygulamalarda yaygın olarak kullanılır.
- **QLineEdit**: Tek satırlık metin girişi sağlar. Burada isim ve yaş için iki adet giriş alanı eklenmiştir.

### 11. Grafik Çizim ve QPainter ile Daha Karmaşık Çizimler

PySide6 ile grafiksel olarak daha karmaşık çizimler yapmak da mümkündür. `QPainter` sınıfı, sadece basit şekiller değil, aynı zamanda poligonlar, yaylar ve karmaşık desenler çizebilir.

```python
from PySide6.QtWidgets import QApplication, QMainWindow
from PySide6.QtGui import QPainter, QPen
from PySide6.QtCore import Qt

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Karmaşık Çizim Örneği")

    def paintEvent(self, event):
        painter = QPainter(self)
        pen = QPen(Qt.black, 3)
        painter.setPen(pen)

        # Bir dikdörtgen çiz
        painter.drawRect(50, 50, 200, 100)

        # Bir elips çiz
        painter.drawEllipse(300, 50, 200, 100)

        # Bir yay çiz
        painter.drawArc(100, 200, 200, 200, 0, 180 * 16)  # 0-180 derece arası bir yay

app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()
```

#### Açıklama:
- **drawRect()**: Belirtilen koordinatlarda ve boyutlarda bir dikdörtgen çizer.
- **drawEllipse()**: Elips çizer.
- **drawArc()**: Yay çizer. Yayın başlangıç ve bitiş açıları, Qt'deki 16 birimlik derece sistemine göre verilir (örneğin 180 derece = 180 * 16).

---

### PySide6 ile Resim Görüntüleme ve Video Oynatma

PySide6, grafiksel kullanıcı arayüzlerinde resim görüntülemek için uygun araçlar sağlar. Ayrıca, video oynatma işlemi için de `QMediaPlayer` sınıfı gibi güçlü medya oynatıcı bileşenlerini içerir. Aşağıda, resim görüntüleme ve basit bir video oynatıcı örneklerini inceleyeceğiz.

---

## 1. Resim Görüntüleme (QLabel Kullanarak)

Resim görüntüleme işlemi için en basit yöntem, bir QLabel widget'ını kullanarak resim dosyasını bu widget üzerinde göstermekten geçer. `QPixmap` sınıfı, resimlerin gösterimi için kullanılır.

### Örnek Kod: Resim Görüntüleme

```python
import PySide6
from PySide6.QtWidgets import QApplication, QLabel, QMainWindow, QFileDialog
from PySide6.QtGui import QPixmap
import sys

class ImageViewer(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Resim Görüntüleyici")
        self.label = QLabel("Bir resim seçin", self)
        self.label.setAlignment(PySide6.QtCore.Qt.AlignCenter)
        self.setCentralWidget(self.label)
        self.resize(800, 600)

        self.open_image()

    def open_image(self):
        # Dosya seçme penceresi açılır ve bir resim dosyası seçilir
        file_name, _ = QFileDialog.getOpenFileName(self, "Bir resim dosyası seçin", "", "Resim Dosyaları (*.png *.jpg *.bmp)")
        if file_name:
            pixmap = QPixmap(file_name)
            self.label.setPixmap(pixmap)

app = QApplication(sys.argv)
window = ImageViewer()
window.show()
app.exec()

```

### Açıklama:
- **QPixmap**: Resimleri yüklemek ve görüntülemek için kullanılır.
- **QFileDialog**: Kullanıcıdan bir resim dosyasını seçmek için kullanılır.
- **scaled()**: Resmin, QLabel boyutuna uyacak şekilde yeniden boyutlandırılmasını sağlar.
- **QLabel**: Resmi bu widget üzerinde göstermek için kullanılır.

Bu örnekle basit bir resim görüntüleyici oluşturulmuş oluyor. Kullanıcı bir resim dosyası seçtiğinde bu resim `QLabel` üzerinde görüntülenir.

---

## 2. Video Oynatma (QMediaPlayer Kullanarak)

PySide6, video oynatma işlemi için `QMediaPlayer` ve `QVideoWidget` sınıflarını sağlar. Bu bileşenler bir araya getirilerek basit bir video oynatıcı oluşturulabilir.

### Gerekli Paketler
PySide6, video oynatma yeteneklerini sağlayan `QtMultimedia` modülünü içerir. Bu nedenle, video oynatma işlemi için `PySide6.QtMultimedia` paketinin yüklü olduğundan emin olun.

```bash
pip install PySide6[multimedia]
```

### Örnek Kod: Video Oynatıcı

```python
from PySide6.QtWidgets import QApplication, QMainWindow, QPushButton, QVBoxLayout, QWidget, QFileDialog
from PySide6.QtMultimedia import QMediaPlayer, QAudioOutput
from PySide6.QtMultimediaWidgets import QVideoWidget
from PySide6.QtCore import Qt
import sys

class VideoPlayer(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Video Oynatıcı")
        self.resize(800, 600)

        # Media Player ve Video Widget oluştur
        self.media_player = QMediaPlayer(self)
        self.video_widget = QVideoWidget()

        # Ses için QAudioOutput
        self.audio_output = QAudioOutput(self)
        self.media_player.setAudioOutput(self.audio_output)

        # Aç ve Oynat düğmeleri
        self.open_button = QPushButton("Video Aç")
        self.open_button.clicked.connect(self.open_file)

        self.play_button = QPushButton("Oynat")
        self.play_button.clicked.connect(self.play_video)

        # Layout oluştur
        layout = QVBoxLayout()
        layout.addWidget(self.video_widget)
        layout.addWidget(self.open_button)
        layout.addWidget(self.play_button)

        # Widget'i layout'a ekle ve merkez widget olarak ayarla
        widget = QWidget(self)
        widget.setLayout(layout)
        self.setCentralWidget(widget)

        # MediaPlayer'ı VideoWidget'a bağla
        self.media_player.setVideoOutput(self.video_widget)

    def open_file(self):
        file_name, _ = QFileDialog.getOpenFileName(self, "Bir video dosyası seçin", "", "Video Dosyaları (*.mp4 *.avi *.mkv)")
        if file_name:
            self.media_player.setSource(file_name)

    def play_video(self):
        if self.media_player.playbackState() == QMediaPlayer.PlayingState:
            self.media_player.pause()
        else:
            self.media_player.play()

app = QApplication(sys.argv)
window = VideoPlayer()
window.show()
app.exec()
```

### Açıklama:
- **QMediaPlayer**: Medya dosyalarını (video ve ses) oynatmak için kullanılır.
- **QVideoWidget**: Video'nun oynatılacağı alanı temsil eder.
- **QAudioOutput**: Video'nun sesini oynatmak için ses çıkışını kontrol eder.
- **QFileDialog**: Kullanıcıdan bir video dosyasını seçmek için kullanılır.

Bu örnekte, bir video oynatıcı oluşturduk. Kullanıcı bir video dosyasını seçip oynatabilir. Oynatma işlemi sırasında `play()` ve `pause()` işlemleri yönetilir.

---
### Genel Örnek:
```python 
import sys

from PySide6.QtWidgets import (
    QApplication,
    QCheckBox,
    QComboBox,
    QDateEdit,
    QDateTimeEdit,
    QDial,
    QDoubleSpinBox,
    QFontComboBox,
    QLabel,
    QLCDNumber,
    QLineEdit,
    QMainWindow,
    QProgressBar,
    QPushButton,
    QRadioButton,
    QSlider,
    QSpinBox,
    QTimeEdit,
    QVBoxLayout,
    QWidget,
)

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("Widgets App")

        layout = QVBoxLayout()
        widgets = [
            QCheckBox,
            QComboBox,
            QDateEdit,
            QDateTimeEdit,
            QDial,
            QDoubleSpinBox,
            QFontComboBox,
            QLCDNumber,
            QLabel,
            QLineEdit,
            QProgressBar,
            QPushButton,
            QRadioButton,
            QSlider,
            QSpinBox,
            QTimeEdit,
        ]

        for widget in widgets:
            layout.addWidget(widget())

        central_widget = QWidget()
        central_widget.setLayout(layout)

        self.setCentralWidget(central_widget)

app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()
```

---

```python
import sys
from PySide6.QtWidgets import QMainWindow, QApplication, QSlider 
class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("My App")

        widget = QSlider()
        #widget = QSlider(Qt.Orientation.Vertical)
		#widget = QSlider(Qt.Orientation.Horizontal)
        widget.setMinimum(-10)
        widget.setMaximum(3)
        # Or: widget.setRange(-10,3)

        widget.setSingleStep(3)

        widget.valueChanged.connect(self.value_changed)
        widget.sliderMoved.connect(self.slider_position)
        widget.sliderPressed.connect(self.slider_pressed)
        widget.sliderReleased.connect(self.slider_released)

        self.setCentralWidget(widget)

    def value_changed(self, i):
        print(i)

    def slider_position(self, p):
        print("Position", p)

    def slider_pressed(self):
        print("Pressed!")

    def slider_released(self):
        print("Released")

app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()

```

---

```python
import sys
from PySide6.QtWidgets import QMainWindow, QApplication, QDial
class MainWindow(QMainWindow): 
		def __init__(self): 
			super().__init__() 
			self.setWindowTitle("My App") 
			widget = QDial() 
			widget.setRange(-10, 100) 
			widget.setSingleStep(1) 
			widget.valueChanged.connect(self.value_changed)
			widget.sliderMoved.connect(self.slider_position)
			widget.sliderPressed.connect(self.slider_pressed)
			widget.sliderReleased.connect(self.slider_released)
			self.setCentralWidget(widget)
			
		def value_changed(self, i): 
			print(i) 
		
		def slider_position(self, p): 
			print("position", p) 
		
		def slider_pressed(self): 
			print("Pressed!") 
		
		def slider_released(self): 
			print("Released")

app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()
```

