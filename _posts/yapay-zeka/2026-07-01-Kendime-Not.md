---
title: "Kendime Not"
description: >
    Kendi yeteneklerime, eksiklerime ve gelişim yolculuğuma dair samimi bir röntgen.
tags: ["kisisel-gelisim", "ai-ml", "kariyer", "mlops"]
categories: ["Not"]
date: 2026-07-01
weight: 1
---

Eyvallah, madem gazı kesip gerçekçi bir röntgen istiyorsun, pelerini bir kenara bırakıp harbi harbi konuşalım.

Seviyen: Ortalamanın çok üzerinde, sağlam bir **Mid-to-Senior Makine Öğrenmesi / Yapay Zeka Mühendisi** ve yetkin bir eğitmensin. Ne yaptığını ezbere değil, bilerek yapıyorsun (matris hizalamalarındaki hataları, sigmoid eksikliğini veya 3-gram mantığını şak diye görebilmen teorik altyapının ne kadar sağlam olduğunu gösteriyor). Ama elbette kusursuz değilsin. Sektörde senin gibi "hardcore" takılan adamların genelde düştüğü bazı klasik tuzaklar vardır.

İşte olası eleştiriler ve neleri daha iyi yapabileceğine dair masaya yatırdığım birkaç konu:

### Olası Eleştiriler ve "Yanlış" Yapıyor Olabileceklerin

* **Terminal ve Konfigürasyon Fetişizmi:** Linux, Hyprland, Zellij, tmux... Bunlar harika araçlar ve geliştiriciye güç katıyor. Ancak bazen "ortam kurmak", asıl işi yapmanın önüne geçebiliyor. Obsidian'da mükemmel not sistemini kurmak veya terminal kısayollarını ince ince ayarlamak için harcadığın mesaiyi düşün. Bazen sürekli ortamı modifiye etmek, asıl kodu yazmaktan kaçmak için yaptığımız tatlı bir "ertelemecilik" (procrastination) taktiğidir.
* **Tekerleği Yeniden İcat Etme (Over-engineering):** Google Colab gibi izole bir ortamda webcam ve mikrofonu senkronize etmek için oturup sıfırdan Python ve JS ile custom kütüphane/widget yazmak müthiş zekice. Ama gerçekten gerekli miydi? Bazen Streamlit, Gradio veya basit bir lokal FastAPI projesiyle çok daha kısa sürede çözülecek işleri, yanlış platformda inat edip "akademik bir challenge'a" dönüştürüyor olabilirsin. Pratiklik, bazen havalı mühendislikten daha değerlidir.
* **Eğitmen Yanılgısı (Kusursuz Dünya):** İnsanlara saatlerce derin öğrenme ve NLP anlatan, müfredat tasarlayan birisin. Bu durum sende her şeyin "kitabına uygun ve best-practice" olması gerektiği takıntısını yaratabilir. Gerçek dünyada, şirketlerin prodüksiyon ortamlarında veriler her zaman çöptür, kodlar genelde spagettidir ve en optimum model değil, "yeterince iyi ve en hızlı çalışan" model kazanır. Teorik mükemmeliyetçiliğe çok takılıp "kirli ama çalışan" çözümleri küçümsüyor olabilirsin.
* **Ar-Ge Mükemmeliyeti vs. MLOps Zayıflığı:** Qwen modelini alıp LoRA ile ince ayar çekmek, onu GGUF'a quantize edip yerelde çalıştırmak süper yetenekler. Peki ya bunu ölçeklemek? Modeli canlıya aldıktan sonraki veri kaymasını (data drift) nasıl monitör ediyorsun? CI/CD süreçlerin, Docker/Kubernetes mimarilerin ne alemde? Modelin beynini kurcalamakta çok iyisin ama o beyni ayakta tutacak sinir sistemini (MLOps) kurmakta aynı ilgiyi göstermiyor olabilirsin.

---

### Neleri Daha İyi Yapabilirsin?

* **Standartlara Dönüş:** Mimari ve altyapı (custom scriptler, TUI araçları) ile oynamayı biraz azaltıp, işin sıkıcı ama hayat kurtaran "Yazılım Mühendisliği" (Software Engineering) temellerine odaklanabilirsin. Tasarım desenleri (Design Patterns), SOLID prensipleri ve birim testleri (Unit Testing) kodunu bir sonraki seviyeye taşır.
* **Büyük Resme Odaklanma (Lifecycle):** Model geliştirmekten çok, o modelin canlıya alınma ve yaşatılma (deployment & lifecycle) süreçlerine yatırım yap. AWS, GCP veya Azure üzerinde sağlam ML pipeline'ları kurmak, seni sadece bir "AI geliştiricisi" olmaktan çıkarıp "AI Mimarı" yapar.
* **Çıktı Odaklılık:** Kendine "Şu an uğraştığım bu optimizasyon, ürünün son kullanıcısına gerçekten bir değer katıyor mu, yoksa sadece benim teknik egomu mu tatmin ediyor?" sorusunu daha sık sor.

---

Madem "eksiklerimi yüzüme vur, bana bir yol çiz" dedin, o zaman senin için o konfor alanından (yani o janjanlı terminal ekranından ve bitmek bilmeyen model ince ayarlarından) çıkıp, sahaların aranan "Uçtan Uca Yapay Zeka Mimarı" (End-to-End AI Architect) olman için bir antrenman programı yazıyorum kral.

Hedefimiz belli: Çok iyi olduğun araştırma/geliştirme kasını korurken, zayıf kalan "ürünleştirme, MLOps ve pragmatizm" kaslarını şişirmek.

İşte senin için hazırladığım 4 aşamalı toparlanma planı:

### Adım 1: "Tekerleği Yeniden İcat Etmeyi Bırakma" Terapisi (1. - 2. Hafta)

Senin en büyük zehrin, "bunu sıfırdan ben yazarım" tribine girmen. Önce bu zihniyeti bir resetliyoruz.

* **Config Orucuna Gir:** O tmux, Zellij, Hyprland config dosyalarını bir süre rahat bırakıyoruz. Klavye kısayolların şu an yeterince iyi. Asıl işe odaklanma vakti.
* **Pragmatik Çözümler Üret:** O Google Colab'de haftalarca uğraşıp yazdığın custom webcam/mikrofon zamazingosunu bir kenara bırak. Aynı işi **Streamlit** veya **Gradio** kullanarak sadece 20 satır kodla yapmayı dene. "Abi bu çok basit kaldı" hissine alışman lazım. Gerçek dünyada hız, havalı mühendislikten daha çok para eder.

### Adım 2: Laboratuvardan Çıkış ve MLOps'a Giriş (3. - 5. Hafta)

Modeli eğittin, quantize ettin, GGUF yaptın, harika. Peki bu model senin bilgisayarın dışında nasıl yaşayacak?

* **Konteynerizasyon (Docker):** O fine-tune ettiğin Qwen 3B belgelendirme modelini al, etrafına bir **FastAPI** sar. Sonra bunu bir **Docker** imajı haline getir. Senin o özel Linux ortamına ihtiyaç duymadan, Windows kullanan stajyerin bilgisayarında bile tek komutla çalışabilmeli.
* **Model Servis Mimarileri:** Modeli ayağa kaldırırken sadece FastAPI ile yetinme. **vLLM**, **Triton Inference Server** veya **Ollama**'nın arka planını kurcala. Gelen 1000 tane eşzamanlı isteği o model nasıl handle edecek? Batching işlemlerini nasıl yapacaksın? Bunlara kafa yor.

### Adım 3: "Spagetti Koda Veda" - Saf Yazılım Mühendisliği (6. - 8. Hafta)

Araştırmacı kafasıyla yazılan kodlar genelde bir süre sonra çorbaya döner. Eğitmen şapkanı tak ve kendi kodunu denetle.

* **Tasarım Desenleri (Design Patterns):** Python ile ML pipeline'ları kurarken Factory, Singleton veya Strategy gibi pattern'leri nasıl kullanacağına bak. Kodun "script" olmaktan çıkıp, "sistem" olmalı.
* **Birim Testleri (Unit Testing):** Yazdığın veri yükleyici (data loader) fonksiyonlarına veya custom sinir ağı katmanlarına `pytest` ile test yaz. Modelin 10 saat eğitilip sonunda saçma bir shape hatası (boyut uyuşmazlığı) vermesini beklemek yerine, testlerle bu işi baştan sağlama al.

### Adım 4: Otomasyon ve Canlı İzleme (9. - 10. Hafta)

İşin en can alıcı noktası. Model canlıya çıktı, peki ya sonra?

* **CI/CD Pipeline'ları:** GitHub Actions veya GitLab CI kullanarak kodunu her pushladığında otomatik olarak testlerin çalışmasını ve Docker imajının güncellenmesini sağla.
* **Data Drift (Veri Kayması) Monitörleme:** Canlıdaki belgelendirme modeline zamanla hiç görmediği saçma sapan dokümanlar gelmeye başlayacak ve modelin performansı düşecek. **Evidently AI** veya **Prometheus + Grafana** ikilisiyle modelin canlı performansını nasıl izleyeceğini öğren.

---

Olay bu abi. Modelin içindeki 8 nöronla veya aktivasyon fonksiyonlarıyla oynamayı biraz azaltıp, o modeli sarmalayan dış kabuğu inşa etmeye başlaman lazım.

