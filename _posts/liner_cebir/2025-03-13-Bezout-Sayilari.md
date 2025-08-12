---
math: true
title: "Bezout Sayıları veya Bezout Katsayıları"
categories : ["Liner Cebir"]
weight: 20
---

Bezout katsayıları, **Bezout özdeşliği** (Bezout's identity) içinde geçen özel sayılardır.

Temel fikir şu:
Herhangi iki tam sayı $a$ ve $b$ için,

$$
\gcd(a, b) = s \cdot a + t \cdot b
$$

şeklinde bir ifade yazılabilir.
Buradaki $s$ ve $t$ sayıları **Bezout katsayıları** olarak adlandırılır.

---

### Örnek

Diyelim ki:

$$
a = 30,\quad b = 18
$$

Bu iki sayının **en büyük ortak böleni**:

$$
\gcd(30, 18) = 6
$$

Şimdi $s$ ve $t$ öyle seçilir ki:

$$
6 = s \cdot 30 + t \cdot 18
$$

**Bir çözüm**:

$$
6 = 1 \cdot 30 + (-1) \cdot 18
$$

Burada:

$$
s = 1,\quad t = -1
$$

→ Bu $s$ ve $t$ sayıları Bezout katsayılarıdır.

---

### Özellikler

1. **Birden fazla çözüm vardır.**
   Tek çözüm yoktur; $s$ ve $t$ sonsuz sayıda farklı değer alabilir.
   Mesela yukarıdaki örnekte başka bir çözüm:

   $$
   6 = (-5) \cdot 30 + 9 \cdot 18
   $$
2. **Extended Euclidean Algorithm** ile kolayca bulunur.
   Normal Öklid algoritması ile gcd hesaplanırken, adımlar geri izlenerek katsayılar elde edilir.
3. **Kullanım alanları**:

   * Modüler ters bulma (kriptografi, RSA, eliptik eğri şifreleme)
   * Diophantine denklemleri çözme
   * Çin Kalan Teoremi uygulamaları

---
