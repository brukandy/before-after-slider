# 🎯 Testimonial Slider - Leone Master School

Slider testimonial stile Mindvalley per WordPress Elementor con 4 storie di successo.

## 🚀 Live Demo

**GitHub Pages URL:** `https://brukandy.github.io/testimonial-slider/`

## 📦 Caratteristiche

- ✨ **Design Mindvalley:** Gradiente blu navy (#1e3a8a → #0f172a)
- 📱 **Responsive:** Ottimizzato per desktop, tablet e mobile
- 🎨 **Layout Professionale:** Card con sezione media + info strutturata
- 🔄 **Navigazione Multipla:** Frecce, dots, keyboard, swipe touch
- 🎯 **CTA Integrato:** "Scopri tutte le storie di successo"
- ⚡ **Performance:** Animazioni smooth e transizioni fluide

## 📋 Contenuti

### 4 Testimonianze:

1. **Fabio** - Imprenditore e Franchise Owner
   - Da 250K a DECINE di milioni €
   - 3 anni di mentoring

2. **Gilberto Vespignani** - Imprenditore settore servizi
   - +150% fatturato in 12 mesi
   - Da 600K a 1.5M €
   - Team da 20 a 55 persone

3. **Sandra N.** - Primo investimento immobiliare
   - ROI 30,64% prima del completamento
   - €64.000 guadagno netto
   - REM (Real Estate Master)

4. **Alice Grandcolas** - Interior Designer
   - Da 1.100€/mese a Hilton London
   - 12 mesi di trasformazione
   - Master Evoluzione Personale

## 🔧 Installazione WordPress Elementor

### Metodo 1: Iframe Embed (Consigliato)

1. Crea una nuova sezione in Elementor
2. Aggiungi widget **HTML**
3. Incolla questo codice:

```html
<iframe 
    src="https://brukandy.github.io/testimonial-slider/" 
    width="100%" 
    height="900" 
    frameborder="0"
    style="border: none; overflow: hidden;">
</iframe>
```

### Metodo 2: Codice Diretto

1. Aggiungi widget **HTML** in Elementor
2. Copia tutto il contenuto di `index.html`
3. Modifica i path CSS/JS:
   - Cambia `href="style.css"` in `href="https://brukandy.github.io/testimonial-slider/style.css"`
   - Cambia `src="script.js"` in `src="https://brukandy.github.io/testimonial-slider/script.js"`

## 🎨 Personalizzazione

### Cambiare CTA Link

Nel file `index.html`, cerca:

```html
<a href="#" class="cta-button" id="ctaButton">
```

Sostituisci `#` con il tuo URL.

### Aggiungere Video/Immagini Reali

Sostituisci i placeholder con:

```html
<!-- Per video -->
<div class="testimonial-media">
    <video controls width="100%">
        <source src="URL_VIDEO.mp4" type="video/mp4">
    </video>
</div>

<!-- Per immagini -->
<div class="testimonial-media">
    <img src="URL_IMMAGINE.jpg" alt="Nome" style="width: 100%; border-radius: 16px;">
</div>
```

### Modificare Colori

Nel file `style.css`, cerca:

```css
background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
```

Cambia i codici colore hex.

## 📱 Responsive Breakpoints

- **Desktop:** > 1024px - Layout 2 colonne (media + info)
- **Tablet:** 768px - 1024px - Layout 2 colonne ridotto
- **Mobile:** < 768px - Layout 1 colonna stacked
- **Mobile Small:** < 480px - Font e padding ridotti

## ⌨️ Controlli

- **Frecce Laterali:** Navigazione prev/next
- **Dots:** Click per slide specifico
- **Keyboard:** Arrow Left/Right
- **Touch:** Swipe left/right su mobile

## 📁 Struttura File

```
testimonial-slider/
├── index.html          # Struttura HTML
├── style.css           # Stili Mindvalley
├── script.js           # Logica slider
└── README.md           # Questa documentazione
```

## 🚀 Deploy su GitHub Pages

```bash
# 1. Crea repository su GitHub
# Nome: testimonial-slider

# 2. Inizializza Git
cd /Users/brunolorenzon/CascadeProjects/testimonial-slider
git init
git add .
git commit -m "Initial commit: Testimonial slider"

# 3. Collega a GitHub
git remote add origin https://github.com/brukandy/testimonial-slider.git
git branch -M main
git push -u origin main

# 4. Abilita GitHub Pages
# Settings → Pages → Source: main branch → Save
```

## 🎯 Design System

### Colori
- **Gradiente Principale:** `#1e3a8a → #0f172a`
- **Testo Primario:** `#ffffff`
- **Testo Secondario:** `rgba(255, 255, 255, 0.7)`
- **Background Card:** `rgba(255, 255, 255, 0.05)`

### Tipografia
- **Font:** Inter (Google Fonts)
- **Title:** 48px / 800 weight
- **Name:** 32px / 700 weight
- **Body:** 16px / 400 weight

### Spacing
- **Card Padding:** 48px
- **Section Gap:** 24px
- **Border Radius:** 12-24px

## 🔄 Auto-Play (Opzionale)

Per abilitare lo scorrimento automatico, nel file `script.js` decommenta:

```javascript
// Auto-play (optional - commented out by default)
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000);
}
// ... resto del codice
```

## 📝 Note

- **Disclaimer incluso:** Trasparenza sui risultati
- **Accessibilità:** ARIA labels per screen readers
- **Performance:** Lazy loading ready
- **SEO Friendly:** Semantic HTML

## 🐛 Troubleshooting

### Slider non funziona
- Verifica che `script.js` sia caricato
- Controlla console browser per errori
- Assicurati che jQuery non interferisca

### Layout rotto su mobile
- Verifica viewport meta tag
- Testa con DevTools mobile mode
- Controlla media queries CSS

### Iframe non si vede
- Aumenta `height` dell'iframe
- Verifica che GitHub Pages sia attivo
- Controlla CORS policy

## 📅 Versione

**v1.0** - 24 Novembre 2025

## 📧 Supporto

Per modifiche o supporto, contatta il team Leone Master School.

---

**Made with ❤️ for Leone Master School**
