---
math: true
title: Uygulamalı Makine Öğrenmesi için Doğrusal Cebir Girişi
categories: ["Liner Cebir"]
---

---

**Orijinal:** [Introduction to Linear Algebra for Applied Machine Learning with Python](https://pabloinsente.github.io/intro-linear-algebra)  
**Yazar:** Pablo Caceres  
**Tarih:** 26 Mayıs 2020  
**Çeviri:** Türkçe  

---

## Giriş

Lineer cebir, makine öğrenmesine unun fırıncılığa olan ilişkisi gibidir: **Her makine öğrenmesi modeli lineer cebire dayanır, tıpkı her pastanın una dayanması gibi.** Elbette tek malzeme değildir. Makine öğrenmesi modelleri vektör hesabı, olasılık ve optimizasyon gerektirir; tıpkı pastaların şeker, yumurta ve tereyağı gerektirmesi gibi.

Bu notlar, **uygulamalı makine öğrenmesi için giriş düzeyinde lineer cebir notlarıdır.** Kapsamlı bir kaynak olmaktan çok, bir referans olarak tasarlanmıştır. Matris çarpımı konusunda kafa karışıklığı yaşadığınızda, $L_2$ normunu hatırlamak istediğinizde veya lineer bağımsızlık koşullarını gözden geçirmek istediğinizde bu notlara başvurabilirsiniz.

Matematikçi olmayan biri tarafından (büyük ölçüde) matematikçi olmayanlar için yazılmıştır. Python kod örnekleri `NumPy` kullanmaktadır.

**Ücretsiz Kaynaklar:**
- *Mathematics for Machine Learning* — Deisenroth, Faisal, Ong
- *Introduction to Applied Linear Algebra* — Boyd & Vandenberghe
- *Linear Algebra Ch. in Deep Learning* — Goodfellow, Bengio, Courville
- Prof. Pavel Grinfeld Dersleri (Lemma)
- Prof. Gilbert Strang Dersleri (MIT OpenCourseWare)
- Salman Khan Dersleri (Khan Academy)
- 3blue1brown Serisi (YouTube)

---

## Bölüm 1: Temel Kavramlar

Lineer cebire girmeden önce birkaç temel kavramı anlamak önemlidir. Bu bölüm, notasyonu kavramayı kolaylaştırmak amacıyla küme teorisi ve fonksiyonlara kısa bir giriş sunar.

### Kümeler

Kümeler, matematiğin en temel kavramlarından biridir. Başka kavramlarla tanımlanmazlar; aksine diğer matematik dalları kümeler cinsinden tanımlanır. Kısaca ifade etmek gerekirse, **kümeler iyi tanımlı nesne koleksiyonlarıdır.** Bu nesnelere kümenin **elemanları** ya da **üyeleri** denir.

Bir kümeyi italik büyük harf ile gösteririz: $\textit{A}$. Lineer cebir bağlamında bir doğru, noktaların bir kümesidir; vektörler ise nokta kümeleridir; matrisler de vektör kümeleridir.

### Üyelik ve Kapsama

**Üyelik:** $a$ elemanının $A$ kümesine ait olduğunu şu şekilde gösteririz:

$$a \in \textit{A}$$

**Kapsama:** $A$'nın her elemanı $B$'nin de elemanıysa, $A$, $B$'nin bir alt kümesidir:

$$A \subset B \quad \text{veya} \quad B \supset A$$

Üyelik ve kapsama, **genişleme aksiyomuna** dayanır: *İki küme, aynı ve yalnızca aynı elemanlara sahipse eşittir.*

### Küme Belirtimi

Bir kümenin elemanları hakkında bir şeyler öne sürmek, **alt küme üretir.** Tüm köpekler kümesini $D$ ile gösterelim. "$d$ siyahtır" önermesi bazı elemanlar için doğru, bazıları için yanlıştır. Bu önerme değerlendirildiğinde şu alt kümeyi üretir:

$$B = \{d \in D : d \text{ siyahtır}\}$$

İki nokta üst üste ($:$) veya dikey çizgi ($\|$) "öyle ki" anlamına gelir.

### Sıralı Çiftler

Sıralı çift $(x, y)$, $x$ birinci koordinat, $y$ ikinci koordinat olmak üzere, sıralamanın önemli olduğu çiftleri ifade eder: $(x,y) \neq (y,x)$.

Makine öğrenmesinde sıralama çoğunlukla önemlidir.

### İlişkiler

Sıralı çiftlerden **ilişki** kavramına ulaşırız. İkili ilişki, sıralı çiftler kümesi olan $R$ ile gösterilir:

$$x \, R \, y$$

İlişkinin **tanım kümesi (domain):**

$$\text{dom}\, R = \{x : \exists y \text{ öyle ki } (x \, R \, y)\}$$

**Değer kümesi (range):**

$$\text{ran}\, R = \{y : \exists x \text{ öyle ki } (x \, R \, y)\}$$

### Fonksiyonlar

$X$ ve $Y$ kümeleri verildiğinde, $X$'ten $Y$'ye bir **fonksiyon** şu özelliklere sahip bir ilişkidir:
- $\text{dom}\, f = X$
- Her $x \in X$ için, $(x,y) \in f$ olacak şekilde benzersiz bir $y \in Y$ vardır.

Notasyon:

$$f: X \to Y \quad \text{veya} \quad f(x) = y$$

**Şekil 1: Fonksiyonlar**

![](assets/liner-cebir/b-function.svg)

**Makine öğrenmesinin nihai amacı, veriden fonksiyon öğrenmektir;** yani giriş değişkenlerinden (domain) hedef değişkenlere (range) olan dönüşümleri öğrenmektir.

---

## Bölüm 2: Vektörler

Lineer cebir, vektörlerin incelenmesidir. En genel biçimiyle, vektörler **sayıların sıralı sonlu listeleridir.** Makine öğrenmesinin en temel matematiksel nesnesidir. Vektörler **birbirleriyle toplanabilir** ve **bir sayıyla çarpılabilir**, sonuçta yine aynı türde bir nesne elde edilir.

### Vektör Türleri

Vektörler üç türde gelir:

**1. Geometrik Vektörler:** Yönlü parçalardır. Fizik ve geometri derslerinden tanıdık olan vektörler bunlardır.

**Şekil 2: Geometrik Vektörler**

![](assets/liner-cebir/b-geometric-vectors.svg)

**2. Polinomlar:** $f(x) = x^2 + y + 1$ gibi ifadeler. Birbiriyle toplanabilir ve skalerle çarpılabilir olduklarından vektör olarak kabul edilirler.

**Şekil 3: Polinomlar**

![](assets/liner-cebir/b-polynomials-vectors.svg)

**3. $\mathbb{R}^n$ elemanları:** Gerçek sayı kümeleridir. Uygulamalı makine öğrenmesi için en önemli türdür. Örneğin $\mathbb{R}^3$'teki bir vektör:

$$x = \begin{bmatrix} x_1 \\\\ x_2 \\\\ x_3 \end{bmatrix} \in \mathbb{R}^3$$

NumPy'da:
```python
x = np.array([[1], [2], [3]])
x.shape  # (3, 1)
```

### Sıfır Vektörü, Birim Vektörü ve Seyrek Vektör

**Sıfır vektörü:** Tüm elemanları sıfırdan oluşan vektör, boyutundan bağımsız olarak $\mathbf{0}$ ile gösterilir.

$$\mathbf{0} = \begin{bmatrix} 0 \\\\ 0 \\\\ 0 \end{bmatrix}$$

**Birim vektörü:** Yalnızca bir elemanı $1$, diğerleri $0$ olan vektörler. Normlar gibi uygulamalarda önemlidir:

$$x_1 = \begin{bmatrix} 1 \\\\ 0 \\\\ 0 \end{bmatrix}, \quad x_2 = \begin{bmatrix} 0 \\\\ 1 \\\\ 0 \end{bmatrix}, \quad x_3 = \begin{bmatrix} 0 \\\\ 0 \\\\ 1 \end{bmatrix}$$

**Seyrek vektörler:** Elemanlarının büyük çoğunluğu sıfır olan vektörler. Sıfır olmayan eleman sayısı $nnz(x)$ ile gösterilir.

### Vektör Boyutları ve Koordinat Sistemi

$n$ boyutlu vektör gösterimi:

$$x = \begin{bmatrix} x_1 \\\\ x_2 \\\\ \vdots \\\\ x_n \end{bmatrix} \in \mathbb{R}^n$$

Koordinat sistemlerinin orijini $(0,0,0)$'dadır. $x = [3, 2, 1]^T \in \mathbb{R}^3$ ifadesi şu anlama gelir: orijinden başlayarak 1. eksende 3 birim, 2. eksende 2 birim, 3. eksende 1 birim ilerle.

**Şekil 4: Koordinat Sistemleri**

![](assets/liner-cebir/b-coordinate-system.svg)

### Temel Vektör İşlemleri

#### Vektör-Vektör Toplama

Eleman bazında bir işlemdir; yalnızca aynı boyuttaki vektörler için tanımlıdır:

$$x + y = \begin{bmatrix} x_1 \\\\ \vdots \\\\ x_n \end{bmatrix} + \begin{bmatrix} y_1 \\\\ \vdots \\\\ y_n \end{bmatrix} = \begin{bmatrix} x_1 + y_1 \\\\ \vdots \\\\ x_n + y_n \end{bmatrix}$$

**Temel özellikler:**
1. Değişme: $x + y = y + x$
2. Birleşme: $(x+y)+z = x+(y+z)$
3. Sıfır vektörü etkisizdir: $x + \mathbf{0} = x$
4. Kendinden çıkarma sıfır verir: $x - x = \mathbf{0}$

```python
x = y = np.array([[1], [2], [3]])
x + y  # array([[2], [4], [6]])
```

#### Vektör-Skaler Çarpımı

$$\alpha x = \begin{bmatrix} \alpha x_1 \\\\ \vdots \\\\ \alpha x_n \end{bmatrix}$$

```python
alpha = 2
alpha * x  # Her elemanı 2 ile çarpar
```

#### Vektörlerin Lineer Kombinasyonu

Lineer cebirdeki yalnızca iki yasal işlem **toplama** ve **sayıyla çarpmadır.** Bunlar birleştirildiğinde **lineer kombinasyon** elde edilir:

$$\alpha x + \beta y = \alpha \begin{bmatrix} x_1 \\\\ x_2 \end{bmatrix} + \beta \begin{bmatrix} y_1 \\\\ y_2 \end{bmatrix}$$

Toplamsal notasyonla:

$$\sum_{i=1}^{k} \beta_i x_i := \beta_1 x_1 + \ldots + \beta_k x_k$$

Lineer kombinasyonlar lineer cebirin en temel işlemidir; lineer regresyon da bir vektörlerin lineer kombinasyonudur.

#### Vektör-Vektör Çarpımı: Nokta Çarpım (Dot Product)

**Nokta çarpım** veya **iç çarpım** olarak bilinir:

$$x \cdot y := x^T y = x_1 y_1 + x_2 y_2 + \ldots + x_n y_n$$

```python
x, y = np.array([[-2],[2]]), np.array([[4],[-3]])
x.T @ y  # array([[-14]])
```

### Vektör Uzayı, Span ve Alt Uzay

#### Vektör Uzayı

**Vektör uzayı** (doğrusal uzay), vektörler için tanımlanan kurallara uyan nesnelerin koleksiyonudur. Vektör toplamı ve çarpımı şu sekiz kuralı sağlamalıdır:

1. Değişme: $x + y = y + x$
2. Birleşme: $x + (y + z) = (y + z) + x$
3. Benzersiz sıfır vektörü: $x + \mathbf{0} = x$
4. Her $x$ için $x + (-x) = \mathbf{0}$
5. Skaler çarpımda birim: $1 \cdot x = x$
6. Dağılma: $x(y+z) = xz + zy$
7. $x(yz) = (xy)z$
8. $(y+z)x = yx + zx$

#### Vektör Span'ı

$\alpha x + \beta y$ biçimindeki *tüm olası* lineer kombinasyonlar, bu vektörlerin **span'ını** oluşturur.

- Farklı yönlere bakan iki vektörün span'ı: 2 boyutlu düzlemin tamamı
- Aynı yöne bakan iki vektörün span'ı: yalnızca bir doğru
- Farklı yönlere bakan üç vektörün span'ı: 3 boyutlu uzayın tamamı

**Şekil 5: Vektör Span'ı**

![](assets/liner-cebir/b-vector-span.svg)

#### Vektör Alt Uzayları

Bir $S$ kümesi geçerli bir alt uzay olmak için üç koşulu sağlamalıdır:

1. Sıfır vektörünü içerir: $\mathbf{0} \in S$
2. Çarpıma göre kapalı: $\forall \alpha \in \mathbb{R} \Rightarrow \alpha \cdot s_i \in S$
3. Toplamaya göre kapalı: $\forall s_i \in S \Rightarrow s_1 + s_2 \in S$

**Şekil 6: Vektör Alt Uzayları**

![](assets/liner-cebir/b-vector-subspace.svg)

### Lineer Bağımlılık ve Bağımsızlık

**Şekil 7: Lineer Bağımlılık ve Bağımsızlık**

![](assets/liner-cebir/b-linear-independence.svg)

**Lineer bağımlı:** Kümede en az bir vektör, diğerlerinin lineer kombinasyonu olarak elde edilebiliyorsa. Formül olarak: $\mathbf{0} = \sum_{i=1}^k \beta_i x_i$ denkleminin en az bir $\beta \neq 0$ ile çözümü varsa.

**Lineer bağımsız:** Hiçbir vektör diğerlerinin lineer kombinasyonu değilse. $\mathbf{0} = \sum_{i=1}^k \beta_i x_i$ denkleminin tek çözümü $\beta_1 = \ldots = \beta_k = 0$ ise.

Lineer bağımlı vektörler **fazlalık bilgi** içerir; lineer bağımsız vektörler içermez.

### Vektör Sıfır Uzayı (Null Space)

Sıfır uzayı, sıfır vektörüyle eşleşen tüm lineer kombinasyonlardır. $w, x, y, z$ gibi geometrik vektörler düşünüldüğünde, bazı kombinasyonlar koordinat sisteminin orijinine (sıfır vektörüne) düşebilir.

**Şekil 8: Vektör Sıfır Uzayı**

![](assets/liner-cebir/b-vector-null-space.svg)

### Vektör Normları

**Norm** ya da **uzunluk**, bir vektörün "başlangıcı" ile "sonu" arasındaki mesafeyi ölçer. Normlar vektörleri negatif olmayan değerlere eşler: $\|x\| \in \mathbb{R}^n$. Geçerli bir norm şu özellikleri sağlamalıdır:

1. **Mutlak homojenlik:** $\|\alpha x\| = \|\alpha\| \|x\|$
2. **Üçgen eşitsizliği:** $\|x + y\| \leq \|x\| + \|y\|$
3. **Pozitif belirlilik:** $\|x\| \geq 0$ ve $\|x\| = 0 \Leftrightarrow x = \mathbf{0}$

**Şekil 9: Vektör Normları**

![](assets/liner-cebir/b-l2-norm.svg)

#### Öklid Normu ($L_2$)

$$\|x\|_2 := \sqrt{\sum_{i=1}^n x_i^2} = \sqrt{x^T x}$$

```python
x = np.array([[3],[4]])
np.linalg.norm(x, 2)  # 5.0
```

#### Manhattan Normu ($L_1$)

Adını Manhattan, NYC'deki ızgara biçimli yollardan alır. Diyagonal değil, yatay ve dikey mesafeleri ölçer:

$$\|x\|_1 := \sum_{i=1}^n |x_i|$$

```python
x = np.array([[3],[-4]])
np.linalg.norm(x, 1)  # 7.0
```

#### Maksimum Normu ($L_\infty$)

Vektördeki en büyük elemanın mutlak değeridir:

$$\|x\|_\infty := \max_i |x_i|$$

```python
np.linalg.norm(x, np.inf)  # 4.0
```

### İç Çarpım, Uzunluk ve Mesafe

**İç çarpım**, nokta çarpımdan daha genel bir kavramdır. $\langle \cdot, \cdot \rangle$ ile gösterilir. $\mathbb{R}^n$'de:

$$\left\langle \begin{bmatrix} x_1 \\\\ \vdots \\\\ x_n \end{bmatrix}, \begin{bmatrix} y_1 \\\\ \vdots \\\\ y_n \end{bmatrix} \right\rangle := \sum_{i=1}^n x_i y_i$$

**Mesafe**, iki vektör arasındaki farkın normu (uzunluğu) olarak tanımlanır:

$$d(x, y) := \|x - y\| = \sqrt{\langle x-y, x-y \rangle}$$

```python
distance = np.linalg.norm(x-y, 2)
```

### Vektör Açıları ve Ortogonallik

Makine öğrenmesinde iki vektör arasındaki **açı**, **benzerlik ölçüsü** olarak kullanılır.

**Cauchy–Schwarz eşitsizliği:**

$$|\langle x, y \rangle| \leq \|x\| \|y\|$$

**Kosinüs açı tanımı** (kosinüs yasasından türetilir):

**Şekil 10: Kosinüs Yasası ve Vektörler Arası Açı**

![](assets/liner-cebir/b-vector-angle.svg)

$$\cos\theta = \frac{\langle x, y \rangle}{\|x\| \|y\|}$$

Ve $-1 \leq \cos\theta \leq 1$ olması gerekir.

```python
x, y = np.array([[1],[2]]), np.array([[5],[7]])
cos_theta = (x.T @ y) / (np.linalg.norm(x,2) * np.linalg.norm(y,2))
# cos(theta) ≈ 0.988
theta_radians = np.arccos(cos_theta)  # ≈ 0.157 rad ≈ 8.97°
```

**Ortogonallik:** İki vektörün iç çarpımı sıfırsa ortogonaldir: $\langle x, y \rangle = 0$, gösterim: $x \perp y$. 2 boyutlu uzayda bu, $90°$ açı anlamına gelir.

**Şekil 11: Ortogonal Vektörler**

![](assets/liner-cebir/b-orthogonal-vectors.svg)

### Lineer Denklem Sistemleri

Lineer cebirin amacı **lineer denklem sistemlerini çözmektir:**

$$x + 2y = 8$$

$$5x - 3y = 1$$

Geometrik olarak her denklem bir doğru üretir. İki doğrunun kesişme noktası sistemin çözümüdür. (Bu örnekte: $x=2$, $y=3$)

---

## Bölüm 3: Matrisler

Matrisler, makine öğrenmesinde vektörler kadar temeldir. Vektörlerle tek değişkeni temsil ederken, matrislerle değişken kümelerini temsil ederiz. Bir matris, **vektörlerin sıralı koleksiyonudur.**

Resmi tanım: $A \in \mathbb{R}^{m \times n}$ matrisi, $m$ satır ve $n$ sütundan oluşur. Her giriş $a_{ij}$ ile gösterilir:

$$A := \begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\\\ a_{21} & a_{22} & \cdots & a_{2n} \\\\ \vdots & \vdots & \ddots & \vdots \\\\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{bmatrix}$$

```python
A = np.array([[0,2],[1,4]])
```

### Temel Matris İşlemleri

#### Matris-Matris Toplama

Eleman bazında yapılır; aynı boyutlardaki matrisler için tanımlıdır:

$$A + B := \begin{bmatrix} a_{11}+b_{11} & \cdots \\\\ \vdots & \ddots \end{bmatrix}$$

```python
A + B  # veya np.add(A, B)
```

#### Matris-Skaler Çarpımı

Her eleman skaler $\alpha$ ile çarpılır:

$$\alpha A: \quad (\alpha A)_{ij} = \alpha \cdot A_{ij}$$

```python
alpha * A  # veya np.multiply(alpha, A)
```

#### Matris-Vektör Çarpımı (Nokta Çarpım)

$$A \cdot x = x_1 \begin{bmatrix} a_{11} \\\\ \vdots \\\\ a_{m1} \end{bmatrix} + x_2 \begin{bmatrix} a_{12} \\\\ \vdots \\\\ a_{m2} \end{bmatrix} + \ldots = \begin{bmatrix} y_1 \\\\ \vdots \\\\ y_m \end{bmatrix}$$

```python
A @ x  # veya np.dot(A, x)
```

#### Matris-Matris Çarpımı

$A \in \mathbb{R}^{m \times n}$ ile $B \in \mathbb{R}^{n \times p}$ çarpımı:

$$c_{ij} := \sum_{l=1}^n a_{il} b_{lj}$$

**Önemli:** Matris çarpımı **değişmeli değildir**: $AB \neq BA$ (genel olarak).

Özellikleri:
- Birleşme: $(AB)C = A(BC)$
- Skaler ile birleşme: $\alpha(AB) = (\alpha A)B$
- Dağılma: $A(B+C) = AB + AC$
- Transpozun çarpımı: $(AB)^T = B^T A^T$

```python
A @ B  # veya np.dot(A, B)
```

#### Matris Birim Elemanı (Identity)

Ana diyagonali $1$, diğer girişleri $0$ olan kare matristir, $I_n$ ile gösterilir:

$$I_3 = \begin{bmatrix} 1&0&0 \\\\ 0&1&0 \\\\ 0&0&1 \end{bmatrix}$$

#### Matris Tersi (Inverse)

Kare matris $A \in \mathbb{R}^{n \times n}$ için $A^{-1}$ şu özelliği sağlar:

$$A^{-1}A = I_n = AA^{-1}$$

Tersini bilmek, lineer denklem sistemlerini çözmeye yarar: $Ax = y \Rightarrow x = A^{-1}y$.

$A^{-1}$ varsa $A$, **tekil olmayan (invertible)**; yoksa **tekil (singular)** denir.

```python
A_i = np.linalg.inv(A)
np.round(A_i @ A)  # Birim matris vermeli
```

#### Matris Transpozu

$A^T_{ij} = A_{ji}$: satırlar ve sütunlar yer değiştirir.

```python
A.T
```

#### Hadamard Çarpımı

Eleman bazında çarpım ($\odot$ ile gösterilir):

$$a_{ij} \cdot b_{ij} := c_{ij}$$

```python
A * B  # veya np.multiply(A, B)
```

### Özel Matrisler

| Matris | Tanım |
|--------|-------|
| **Dikdörtgen** | $m \neq n$ |
| **Kare** | $m = n$ |
| **Diyagonal** | Diyagonal dışı elemanlar sıfır |
| **Üst üçgen** | Diyagonalin altı sıfır |
| **Alt üçgen** | Diyagonalin üstü sıfır |
| **Simetrik** | $A = A^T$ |
| **Birim (Identity)** | Diyagonali $1$, diğerleri $0$ |
| **Skaler** | $D = \alpha I$ |
| **Sıfır** | Tüm elemanlar sıfır |
| **Eşelon** | Gauss eliminasyonundan geçmiş form |
| **Antiçapraz** | Yalnızca antiçapraz elemanlar sıfır değil |
| **Tasarım matrisi** | İstatistik/ML'de açıklayıcı değişkenler matrisi |

### Matrisler Olarak Lineer Denklem Sistemleri

Matrisler, lineer denklem sistemlerini temsil etmek için idealdir. $Mw = y$ sistemi:

$$\begin{bmatrix} m_{11} & m_{12} & m_{13} \\\\ m_{21} & m_{22} & m_{23} \\\\ m_{31} & m_{32} & m_{33} \end{bmatrix} \begin{bmatrix} w_1 \\\\ w_2 \\\\ w_3 \end{bmatrix} = \begin{bmatrix} y_1 \\\\ y_2 \\\\ y_3 \end{bmatrix}$$

**Şekil 12: Denklem Sisteminin Düzlemler Olarak Görselleştirilmesi**

![](assets/liner-cebir/b-planes-intersection.svg)

**Alternatif görünüm** (sütun kombinasyonu olarak):

$$w_1 \begin{bmatrix} m_{11} \\\\ m_{21} \\\\ m_{31} \end{bmatrix} + w_2 \begin{bmatrix} m_{12} \\\\ m_{22} \\\\ m_{32} \end{bmatrix} + w_3 \begin{bmatrix} m_{13} \\\\ m_{23} \\\\ m_{33} \end{bmatrix} = \begin{bmatrix} y_1 \\\\ y_2 \\\\ y_3 \end{bmatrix}$$

**Şekil 13: Vektörlerin Lineer Kombinasyonu Olarak Denklem Sistemi**

![](assets/liner-cebir/b-vectors-combination.svg)

### Dört Temel Matris Alt Uzayı

Bir $A$ matrisi için dört temel alt uzay vardır:

**1. Sütun uzayı** $C(A)$: $A$'nın sütunlarının tüm lineer kombinasyonları.

$$C(A) := \{w \in \mathbb{R}^n \mid w = Av \text{ için bazı } v \in \mathbb{R}^m\}$$

**2. Satır uzayı** $R(A)$: $A$'nın satırlarının tüm lineer kombinasyonları. $R(A) = C(A^T)$ olarak da ifade edilir.

**3. Sıfır uzayı** $N(A)$: $A$ ile çarpıldığında sıfır vektörüne dönüşen tüm vektörler.

$$N(A) := \{v \in \mathbb{R}^m \mid Av = \mathbf{0}\}$$

**4. Sol sıfır uzayı** $N(A^T)$: Soldan çarpıldığında sıfır vektörüne dönüşen tüm vektörler.

$$N(A^T) := \{w \in \mathbb{R}^n \mid v^T A = \mathbf{0}^T\}$$

### Gauss Eliminasyonu ile Lineer Denklem Sistemi Çözümü

#### Gauss Eliminasyonu

Üç temel satır işlemi kullanarak matrisi **satır eşelon formuna** indirgeme algoritmasıdır:

1. İki satırın toplanması veya çıkarılması
2. Bir satırın bir sayıyla çarpılması
3. İki satırın yer değiştirilmesi

Satır eşelon formunda pivotlar (temel değişkenler) diyagonal boyunca yer alır:

$$\begin{bmatrix} p_1 & a & b \\\\ 0 & p_2 & c \\\\ 0 & 0 & p_3 \end{bmatrix}$$

Ardından **geri yerine koyma** ile sistem çözülür.

```python
A = np.array([[1,3,5],[2,2,-1],[1,3,2]])
y = np.array([[-1],[1],[2]])
np.linalg.solve(A, y)
# array([[-2.], [2.], [-1.]])
```

#### Gauss-Jordan Eliminasyonu

Gauss eliminasyonuna ek olarak **indirgenmiş satır eşelon formu** elde etmeye devam edilir. Ek koşullar:
1. Pivotlar $1$ olmalı
2. Pivotların üstündeki giriş $0$ olmalı

Sonuç doğrudan $x = A^{-1}y$'yi verir.

### Matris Bazı ve Rank

$n$ elemanlı $n$ lineer bağımsız sütun vektörü bir **baz** oluşturur. Herhangi bir $y \in \mathbb{R}^n$ vektörü, baz vektörlerinin benzersiz bir lineer kombinasyonu olarak ifade edilebilir.

Baz bulmak için Gauss veya Gauss-Jordan eliminasyonu uygulanır; pivotlar lineer bağımsız vektörleri gösterir.

```python
from sympy import Matrix
A = Matrix([[1,0,1],[0,1,1]])
A_rref, A_pivots = A.rref()  # İndirgenmiş satır eşelon formu
```

**Rank:** $A$ matrisinin lineer bağımsız sütun vektörlerinin oluşturduğu vektör uzayının boyutsallığıdır, $\text{rk}(A)$ ya da $\text{rank}(A)$ ile gösterilir.

- Kare matris ($m=n$): Her sütun/satır bağımsızsa **tam rank**
- $m > n$: Her satır bağımsızsa tam rank
- $m < n$: Her sütun bağımsızsa tam rank

### Matris Normları

Vektörlere benzer şekilde matrislerin büyüklüğü de norm ile ölçülür.

#### Frobenius Normu

Matrisi uzun bir vektöre düzleştirmiş gibi hesaplanır:

$$\|A\|_F := \sqrt{\sum_{i=1}^m \sum_{j=1}^n a_{ij}^2}$$

```python
np.linalg.norm(A, 'fro')  # 16.88...
```

#### Maksimum Norm

En büyük satır toplamı (mutlak değer):

$$\|A\|_{\max} := \max_i \sum_{j=1}^n |a_{ij}|$$

```python
np.linalg.norm(A, np.inf)
```

#### Spektral Norm

En büyük tekil değer $\sigma_1$'e eşittir:

$$\|A\|_2 := \max_x \frac{\|Ax\|_2}{\|x\|_2}$$

```python
np.linalg.norm(A, 2)
```

---

## Bölüm 4: Doğrusal ve Afin Dönüşümler

### Doğrusal Dönüşümler

**Doğrusal dönüşümler** (lineer dönüşümler veya lineer fonksiyonlar olarak da bilinir), $V$ vektör uzayındaki vektörlerle $W$ vektör uzayındaki vektörler arasındaki eşleşmeyi belirtir.

Geçerli bir doğrusal dönüşüm $T$ için iki kural gereklidir:

$$T(x + y) = T(x) + T(y)$$

$$T(\alpha x) = \alpha T(x), \quad \forall \alpha$$

Bu iki kural **süperpozisyon özelliği** olarak da ifade edilir:

$$T(\alpha x + \beta y) = \alpha T(x) + \beta T(y)$$

Lineer dönüşümler **orijinal vektör uzayının yapısını korur**: Koordinat uzayının orijini sabit kalır ve doğrular doğru ve birbirine paralel olarak kalır.

Lineer cebirdeki dönüşümler matris çarpımıyla ifade edilir:

$$T(x) = Ax$$

### Doğrusal Dönüşüm Örnekleri

#### Olumsuzlama (Negation) Matrisi

Her elemanın işaretini tersine çevirir:

$$T := A := -I$$

#### Ters Çevirme (Reversal) Matrisi

Vektör elemanlarının sırasını tersine çevirir ($\mathbb{R}^{3\times3}$ için):

$$T := \begin{bmatrix} 0&0&1 \\\\ 0&1&0 \\\\ 1&0&0 \end{bmatrix}$$

### Doğrusal Olmayan Dönüşüm Örnekleri

#### Normlar

Normlar doğrusal dönüşüm değildir. Üçgen eşitsizliği ($\|x+y\| \leq \|x\| + \|y\|$) doğrusal dönüşümün gerektirdiği eşitliği sağlamaz.

#### Öteleme (Translation)

Bir vektör uzayındaki her vektörü belirli bir yönde aynı mesafe kadar hareket ettirir. **Afin dönüşüm** olarak sınıflandırılır çünkü $T(x+y) = T(x) + T(y)$ sağlanamaz.

Öteleme matrisi **homojen koordinatlarla** ifade edilir (vektöre $1$ eklenir):

$$T_v = \begin{bmatrix} 1 & 0 & v_1 \\\\ 0 & 1 & v_2 \\\\ 0 & 0 & 1 \end{bmatrix}$$

### Afin Dönüşümler

En basit tanımıyla: **afin dönüşüm = doğrusal dönüşüm + öteleme:**

$$M(x) = Ax + b$$

$b = 0$ olduğunda $Ax + b$ bir doğrusal dönüşümdür. Geometrik açıdan afin dönüşümler, uzayları (doğrular veya hiper-düzlemler) koordinat uzayının orijininden uzaklaştırır.

**Şekil 14: Afin Dönüşüm**

![](assets/liner-cebir/b-affine-mapping.svg)

#### Afin Kombinasyonu

Doğrusal kombinasyon gibi, ancak ek kısıtlama: ağırlıkların toplamı $1$'e eşit olmalıdır:

$$\sum_{j=1}^k \beta_j = 1$$

Bu, vektörlerin **ağırlıklı ortalamasını** tanımlar. Tüm afin kombinasyonlar aynı doğru (veya hiper-düzlem) üzerinde kalır.

**Şekil 15: Afin Kombinasyonlar**

![](assets/liner-cebir/b-affine-combination.svg)

#### Afin Span

Afin span, ağırlıkları $1$'e toplanan tüm lineer kombinasyonlar kümesidir.

#### Afin Uzay ve Alt Uzay

Afin uzaylar, vektör uzaylarının ötelenmiş halleridir. $V$ vektör uzayı, $x_0 \in V$ ve $U \subseteq V$ için:

$$L = x_0 + U := \{x_0 + u : u \in U\}$$

Orijinden geçmeyen her nokta, doğru, düzlem veya hiper-düzlem, bir afin alt uzaydır.

### Özel Doğrusal Dönüşümler

#### Ölçekleme (Scaling)

$y = Ax$, $A = \alpha I$ biçimindedir. $\|\alpha\| > 1$'de büyütür, $\|\alpha\| < 1$'de küçültür, $\alpha < 0$'da yönü tersine çevirir:

$$\begin{bmatrix} s_1 & 0 \\\\ 0 & s_2 \end{bmatrix}$$

#### Yansıma (Reflection)

Bir doğru veya düzlem etrafında yansıma dönüşümü. $\mathbb{R}^2$'deki özel durumlar:
- Yatay eksen etrafında ($0°$): $\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \end{bmatrix}$
- Dikey eksen etrafında ($90°$): $\begin{bmatrix} -1 & 0 \\\\ 0 & 1 \end{bmatrix}$
- $45°$ doğrusu etrafında: $\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \end{bmatrix}$
- $-45°$ doğrusu etrafında: $\begin{bmatrix} 0 & -1 \\\\ -1 & 0 \end{bmatrix}$

#### Makaslama (Shear)

Bir eksenle olan dik uzaklığıyla orantılı biçimde noktaları kaydırır. Yatay makaslama:

$$\begin{bmatrix} 1 & m \\\\ 0 & 1 \end{bmatrix}$$

Dikey makaslama:

$$\begin{bmatrix} 1 & 0 \\\\ m & 1 \end{bmatrix}$$

#### Döndürme (Rotation)

Vektörleri saat yönünün tersine döndürür. $\mathbb{R}^2$'de $\theta$ radyan döndürme:

$$\begin{bmatrix} \cos\theta & -\sin\theta \\\\ \sin\theta & \cos\theta \end{bmatrix}$$

Özel durumlar:
- $90°$: $\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \end{bmatrix}$
- $180°$: $\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \end{bmatrix}$
- $270°$: $\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \end{bmatrix}$

### Projeksiyonlar

Projeksiyonlar makine öğrenmesi için temel bir dönüşüm türüdür. "Gömme (embeddings)", "düşük boyutlu temsil" ve "boyut indirgeme" kavramları birer projeksiyon örneğidir. Lineer regresyon ve PCA da birer projeksiyondur.

Projeksiyon, bir uzaydan bir alt uzaya eşlemedir. **İdempotent** özelliktedir: $\phi(\phi(x)) = \phi(x)$.

Projeksiyon matrisi $P_\phi$ ile gösterilir ve şu özelliği sağlar:

$$P_\phi^2 = P_\phi \circ P_\phi = P_\phi$$

#### Doğrulara Projeksiyon

$x$'in $y$ baz vektörüne ortogonal projeksiyonu:

$$\phi_U(x) = \frac{\langle x, y \rangle}{\|y\|^2} y = \frac{y^T \cdot x}{\|y\|^2} y$$

Projeksiyon matrisi:

$$P_\phi = \frac{y \cdot y^T}{\|y\|^2}$$

```python
y = np.array([[3],[2]])
x = np.array([[1],[3]])
P = (y @ y.T) / (y.T @ y)
z = P @ x  # x'in y üzerine projeksiyonu
```

#### Genel Alt Uzaylara Projeksiyon

$Y$ baz vektörleri matrisi için projeksiyon:

$$\phi_U(x) = Y\alpha, \quad \alpha = (Y^T Y)^{-1} Y^T x$$

Bu ifade **Moore-Penrose sözde tersi** olarak bilinir ve doğrusal regresyon problemlerinin çözümünde kullanılır: $\alpha = (X^T X)^{-1} X^T y$.

#### Lineer Denklem Sistemlerinin Yaklaşık Çözümleri

Makine öğrenmesinde çoğunlukla $y$, $A$'nın sütun uzayında bulunmaz. Ortogonal projeksiyonlar **yaklaşık çözümler** bulmak için kullanılır.

$A$'nın sütunlarına ortogonal projeksiyon: **$\hat{y}$, $y$'nin $A$'ya ortogonal projeksiyonudur ve gerçek $y$'ye en yakın çözümdür.**

---

## Bölüm 5: Matris Ayrıştırmaları

Matris ayrıştırması (factorization), bir matrisi daha basit matrislere bölmek anlamına gelir; böylece matrisin temel yapısı daha iyi anlaşılır. Makine öğrenmesinde kümeleme, öneri sistemleri, boyut indirgeme ve konu modellemesi gibi uygulamalarda önemlidir.

### LU Ayrıştırması

Bir matrisi **alt üçgen matris** $L$ ve **üst üçgen matris** $U$'nun çarpımı olarak ifade eder:

$$A = LU$$

LU ayrıştırması, Gauss Eliminasyonu'nun sayısal lineer cebirde temsilidir. Tekil veya kare olmayan matrisler için de uygulanabilir.

#### Temel Matrisler

**Temel matrisler**, birim matris üzerinde temel satır veya sütun işlemleri uygulanarak elde edilen matrislerdir. Gauss Eliminasyonundaki adımları kodlar.

Örneğin $I_3$:

$$I_3 = \begin{bmatrix} 1&0&0 \\\\ 2&1&0 \\\\ 0&0&1 \end{bmatrix}$$

Tersinin hesabı basittir: işlemin tam tersidir.

#### LU Ayrıştırması = Gauss Eliminasyonu

Gauss Eliminasyonunun her adımı, bir temel matrisle temsil edilebilir. Tüm adımlar birleştirildiğinde:

$$lA = U$$

$l$'nin tersi $L$ olarak tanımlanırsa:

$$A = LU$$

```python
L = np.array([[1,0,0],[2,1,0],[1,0,1]])
U = np.array([[1,3,5],[0,-4,-11],[0,0,-3]])
L @ U  # A'yı geri verir
```

#### Pivotlamalı LU Ayrıştırması

Satır değişimi gerektiğinde permütasyon matrisi $P$ kullanılır:

$$PA = LU \quad \text{veya} \quad A = LUP$$

```python
from scipy.linalg import lu
P, L, U = lu(A)
```

### QR Ayrıştırması

$A$'yı bir **ortogonal matris** $Q$ ve **üst üçgen matris** $R$'nin çarpımı olarak ifade eder:

$$A = QR$$

Sistemi en küçük kareler problemlerini çözmek ve genel matrislerin özdeğerlerini bulmak için kullanılır.

#### Ortonormal Baz

$x_1, \ldots, x_n$ vektörleri ortonormal ise:

$$x_i^T x_j = \begin{cases} 0 & i \neq j \quad \text{(ortogonal vektörler)} \\\\ 1 & i = j \quad \text{(birim vektörler)} \end{cases}$$

Vektörü normalleştirmek için normuna bölünür: $\hat{x} = x / \|x\|$

#### Ortonormal Baz Transpozu

Ortogonal matris $Q$'nun güzel bir özelliği:

$$Q^T Q = I$$

Bu özellik Fourier serisi ve En Küçük Kareler gibi çeşitli uygulamalarda kullanılır.

#### Gram-Schmidt Ortogonalizasyonu

Ortogonal olmayan vektörleri ortogonal vektörlere dönüştürür. Algoritma adım adım çalışır:

**Adım 1:** $q_1 = a_1$ (ilk sütun aynen alınır)

**Adım 2:** $q_2 = a_2 - \frac{q_1^T a_2}{q_1^T q_1} q_1$ ($a_2$'den $q_1$'e olan projeksiyon çıkarılır)

**Şekil 16: Ortogonalizasyon**

![](assets/liner-cebir/b-gram-schmidt.svg)

**Adım 3:** $q_3 = a_3 - \frac{q_1^T a_3}{q_1^T q_1} q_1 - \frac{q_2^T a_3}{q_2^T q_2} q_2$

Vektörler normalize edildikten sonra $Q$ oluşturulur. NumPy'da:

```python
Q, R = np.linalg.qr(A)
```

### Determinant

**Determinant**, bir kare matrisin **tersi alınabilir mi (invertible) alınamaz mı (singular)** sorusunu yanıtlayan tek bir sayıdır.

- $\det(A) \neq 0$: Matris tersi alınabilir (sütunlar lineer bağımsız)
- $\det(A) = 0$: Matris tekil (sütunlar lineer bağımlı)

#### Geometrik Yorum: Hacim Ölçüsü

Determinant, bir dönüşüm altında **alanların ölçeklendiği faktörü** gösterir:
- Paralel kenar alanı (2D)
- Paralel yüzlü şekil hacmi (3D)

**İşaret:** Vektörler saat yönünün tersine (counterclockwise) yönlendirilmişse pozitif; saat yönünde ise negatif.

**Şekil 17: Vektör Yönelimi**

![](assets/liner-cebir/b-determinant-orientation.svg)

#### 2×2 Determinant

$$\det(A) = \begin{vmatrix} a & b \\\\ c & d \end{vmatrix} = ad - bc$$

$ad - bc = 0$ sütunların lineer bağımlı olduğu anlamına gelir.

#### N×N Determinant (Leibniz Formülü)

$$|A| = \sum_\sigma \text{sign}(\sigma) \prod_{i=1}^n a_{\sigma(i),i}$$

$n \times n$ matris için $n!$ terim hesaplanması gerekir. Büyük matrisler için hesaplanamaz; ancak kavramsal önemi büyüktür.

#### Determinantların Ölçekleme Faktörü Olarak Yorumu

Bir dönüşüm uygulandığında alan $k$ kat büyürse determinant $k$'ya eşittir.

**Şekil 18: Determinantlar**

![](assets/liner-cebir/b-determinant-scaling.svg)

### Özşeyler (Eigenthings)

PCA, Spektral Kümeleme, Google PageRank, Markov süreçleri gibi makine öğrenmesi uygulamalarında kullanılır.

#### Baz Değişimi

Koordinat sistemini değiştirmek mümkündür. Standart $x, y$ koordinatları yerine alternatif koordinatlar $x', y'$ kullanılabilir. Baz değiştirme için doğrusal dönüşümler kullanılır:

**Şekil 19: Baz Değişimi**

![](assets/liner-cebir/b-change-basis.svg)

```python
T_inv = np.linalg.inv(T)
T_inv @ a  # a'yı yeni koordinatlarda ifade eder
```

#### Özvektörler, Özdeğerler ve Özuzaylar

*Eigen* Almanca'da "kendine özgü" veya "karakteristik" anlamına gelir.

**Özvektör:** Bir $A$ dönüşüm matrisiyle çarpıldığında yalnızca ölçeklenen (döndürülmeyen, yön değiştirmeyen) sıfır olmayan vektör.

**Özdeğer:** Özvektörün ölçeklendiği faktör.

**Şekil 20: 3 Boyutlu Döndürmede Özvektör**

![](assets/liner-cebir/b-eigenvector.svg)

$$Ax := \lambda x$$

Yeniden düzenlendiğinde:

$$(A - \lambda I)x = 0$$

Bu sistemin sıfır olmayan çözümü için:

$$\det(A - \lambda I) = 0$$

Bu denklem **karakteristik denklem** olarak adlandırılır. Kökleri **özdeğerleri** verir.

**Örnek:** $A = \begin{bmatrix} 4 & 2 \\\\ 1 & 3 \end{bmatrix}$ için:

Karakteristik denklem: $(4-\lambda)(3-\lambda) - 2 = 10 - 7\lambda + \lambda^2 = (2-\lambda)(5-\lambda) = 0$

**Özdeğerler: $\lambda_1 = 2$, $\lambda_2 = 5$**

```python
A = np.array([[4,2],[1,3]])
values, vectors = np.linalg.eig(A)
# Özdeğerler: [5. 2.], Özvektörler: ...
```

#### İz (Trace) ve Determinant ile Özdeğerler

**İz:** Köşegen elemanların toplamı: $\text{tr}(A) = \sum_{i=1}^n a_{ii}$

- Özdeğerlerin toplamı = matrisin izi
- Özdeğerlerin çarpımı = matrisin determinantı

#### Özdönüşüm (Eigendecomposition)

$AX = X\Lambda$ kimliğinden:

$$A = X\Lambda X^{-1}$$

Burada $X$ özvektörler matrisi, $\Lambda$ özdeğerler köşegen matrisi.

```python
X = eigenvectors
I = np.identity(3)
L = I * eigenvalues
X @ L @ np.linalg.inv(X)  # A'yı geri verir
```

#### Özbaz İyi Bir Bazdır

Özbaz, matrisin üs hesaplamalarını basitleştirir:

$$A^n = X\Lambda^n X^{-1} \quad \text{ve} \quad A^{-1} = X\Lambda^{-1}X^{-1}$$

#### Özdönüşümün Geometrik Yorumu

$A = X\Lambda X^{-1}$ üç adımla yorumlanır:
1. $X^{-1}$: Standart bazdan özbaza geçiş (döndürme)
2. $\Lambda$: Özvektörleri ölçekleme (büyütme/küçültme/ters çevirme)
3. $X$: Özbazdan standart baza geri dönüş (döndürme)

**Şekil 21: Özdönüşüm**

![](assets/liner-cebir/b-eigendecomposition.svg)

#### Özdönüşümün Sorunu

**Özdönüşüm yalnızca kare matrisler için geçerlidir ve bazen dahi mevcut değildir.** Bu, uygulamalı açıdan çok kısıtlayıcıdır; çünkü çoğu pratik problem kare olmayan matrisler içerir.

### Tekil Değer Ayrıştırması (SVD)

SVD, Özdönüşümün sınırlamalarının ötesine geçer. **Kare olmayan matrisler ve tekil matrisler için de uygulanabilir.**

**SVD Teoremi:** Herhangi bir $A \in \mathbb{R}^{m \times n}$ matrisi şu şekilde ayrıştırılabilir:

$$A := U\Sigma V^T$$

- $U \in \mathbb{R}^{m \times m}$: Sol ortogonal matris
- $\Sigma \in \mathbb{R}^{m \times n}$: Tekil değerlerin bulunduğu köşegen matris
- $V^T \in \mathbb{R}^{n \times n}$: Sağ ortogonal matris

$\Sigma$'nın diyagonalindeki negatif olmayan değerler **tekil değerler** ($\sigma_i$) olarak adlandırılır.

**Şekil 22: Tekil Değer Ayrıştırması**

![](assets/liner-cebir/b-svd.svg)

```python
U, S, V_T = np.linalg.svd(A)
```

#### SVD vs Özdönüşüm

| Özellik | Özdönüşüm | SVD |
|---------|-----------|-----|
| Matris türü | Yalnızca kare | Tüm matrisler |
| Var olmama durumu | Mümkün | Her zaman var |
| Uygulamalar | Sınırlı | Geniş kapsamlı |

### Matris Yaklaşımı (Low-Rank Approximation)

SVD aynı zamanda matrisleri kompakt şekilde temsil etmek için kullanılır.

**En iyi rank-k yaklaşımı SVD ile:**

$A$'nın SVD'si kullanılarak yalnızca en büyük $k$ tekil değer tutulursa, $A$'nın en iyi rank-$k$ yaklaşımı elde edilir:

$$\hat{A}_k = \sum_{i=1}^k \sigma_i u_i v_i^T$$

Bu, $\|A - \hat{A}_k\|_F$ farkını minimize eder. Boyut indirgeme, görüntü sıkıştırma ve gürültü giderme gibi uygulamalarda kullanılır.

---

## Son Söz (Epilogue)

Lineer cebir devasa ve büyüleyici bir konudur. Bu notlar yalnızca makine öğrenmesi amaçlı bir giriş niteliğindedir. Matematikçi olmayan biri olarak bu belgeyi yazmak büyük bir keyif oldu. Bu süreci kendi kendine yeni bir beceri kazanma yolculuğuna çıkanlara yardımcı olacağını umuyorum.

---
*Özgün çalışma: Pablo Insente, pcaceres@wisc.edu*
