# AI Pro Školy - Karlovarský Kraj

Kolekce moderních webových aplikací zaměřených na implementaci AI technologií ve vzdělávání v Karlovarském kraji.

## 📋 Obsah repozitáře

### 🎯 Hlavní projekty

- **[AI pro školy v Karlovarský Kraj](https://prautautomation.github.io/ai-pro-skoly-kv/)** - Interaktivní prezentační aplikace showcasing AI řešení pro školy

## 🚀 Hlavní aplikace: ai-pro-skoly-kv

Moderní prezentační aplikace vytvořená s využitím nejnovějších webových technologií pro prezentaci AI řešení ve školství.

### ✨ Klíčové funkce

- 📊 **Interaktivní prezentace** s 11 specializovanými slidy
- 🎨 **Moderní UI/UX** využívající shadcn/ui komponenty
- ⌨️ **Klávesové zkratky** pro rychlou navigaci
- 📱 **Responzivní design** pro všechna zařízení
- 🎯 **Zaměření na AI ve vzdělávání** - personalizace, VARK styly učení, bezpečnost

### 🛠️ Technologický stack

- **Frontend**: React 18 + TypeScript
- **Build nástroj**: Vite
- **Styling**: Tailwind CSS
- **UI komponenty**: shadcn/ui (Radix UI)
- **Routing**: React Router
- **State management**: React hooks + TanStack Query
- **Linting**: ESLint + TypeScript ESLint

## 🏃‍♂️ Rychlý start

### Předpoklady

- Node.js (doporučeno přes [nvm](https://github.com/nvm-sh/nvm))
- npm nebo yarn

### Instalace a spuštění

```bash
# 1. Klonování repozitáře
git clone https://github.com/PrautAutomation/ai-pro-skoly-kv.git
cd ai-pro-skoly-kv

# 2. Přechod do hlavního projektu
cd ai-pro-skoly-kv

# 3. Instalace závislostí
npm install

# 4. Spuštění vývojového serveru
npm run dev
```

Aplikace bude dostupná na `http://localhost:8080`

## 📜 Dostupné příkazy

```bash
# Vývoj
npm run dev          # Spuštění vývojového serveru
npm install          # Instalace závislostí

# Build
npm run build        # Produkční build
npm run build:dev    # Vývojový build
npm run preview      # Náhled produkčního buildu

# Kvalita kódu
npm run lint         # Spuštění ESLint kontroly
```

## 🏗️ Architektura aplikace

```
ai-pro-skoly-kv/
├── src/
│   ├── components/           # Komponenty aplikace
│   │   ├── slides/          # Individuální slidy prezentace
│   │   ├── ui/              # Reusable UI komponenty (shadcn/ui)
│   │   ├── Presentation.tsx # Hlavní prezentační komponenta
│   │   └── ...
│   ├── pages/               # Stránky aplikace
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility funkce
│   ├── config/              # Konfigurační soubory
│   └── utils/               # Helper funkce
├── public/                  # Statické soubory
└── ...
```

### 🎪 Prezentační slidy

1. **Úvodní slide** - Představení projektu
2. **Problematika** - Aktuální výzvy ve vzdělávání
3. **VARK styly** - Různé styly učení studentů
4. **Personalizace** - Přizpůsobení výuky
5. **AI řešení** - Technologické možnosti
6. **Praktický příklad** - Konkrétní implementace
7. **Partnerství** - Spolupráce s institucemi
8. **Bezpečnost** - Ochrana dat a soukromí
9. **Implementace** - Postup zavedení
10. **Výsledky** - Očekávané přínosy
11. **Výzva k akci** - Další kroky

## 🌐 Nasazení

Aplikace je optimalizována pro nasazení na GitHub Pages:

- Produkční build používá base path `/ai-pro-skoly-kv/`
- Využívá HashRouter pro kompatibilitu s GitHub Pages
- Automatické nasazení při push do main větve

## 🤝 Přispívání

1. Fork repozitáře
2. Vytvoření feature větve (`git checkout -b feature/AmazingFeature`)
3. Commit změn (`git commit -m 'Add some AmazingFeature'`)
4. Push do větve (`git push origin feature/AmazingFeature`)
5. Otevření Pull Request

## 📝 Licence

Tento projekt je licencován pod MIT licencí - viz [LICENSE](LICENSE) soubor pro detaily.

## 👥 Autoři

- **PrautAutomation** - *Iniciální práce* - [PrautAutomation](https://github.com/PrautAutomation)

## 🙏 Poděkování

- Karp za podporu projektu
- Vzdělávací instituce za spolupráci
- Open source komunitě za nástroje a knihovny
