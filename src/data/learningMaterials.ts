import { PersonalizedContent } from '../types/learningStyle';

export const quadraticEquationMaterials: Record<string, PersonalizedContent> = {
  visual: {
    style: 'visual',
    title: '📈 Vizuální učení: Kvadratické rovnice',
    description: 'Naučte se kvadratické rovnice prostřednictvím grafů, animací a vizuálních pomůcek.',
    methods: [
      'Interaktivní grafy paraboly',
      'Barevné kódování koeficientů',
      'Animace změn funkcí',
      'Geometrické reprezentace'
    ],
    example: {
      topic: 'Řešení rovnice ax² + bx + c = 0',
      approach: 'Vizualizace pomocí grafu paraboly a jejích průsečíků s osou x',
      activities: [
        'Sledování grafu funkce y = ax² + bx + c',
        'Pozorování vlivu koeficientů a, b, c na tvar paraboly',
        'Nalezení kořenů jako průsečíků s osou x',
        'Barevné rozlišení jednotlivých částí vzorce'
      ]
    }
  },
  auditory: {
    style: 'auditory',
    title: '🎧 Sluchové učení: Kvadratické rovnice',
    description: 'Naučte se kvadratické rovnice prostřednictvím hlasového výkladu a diskuze.',
    methods: [
      'Hlasové vysvětlení krok za krokem',
      'Rytmické načítání vzorců',
      'Diskuze s AI asistentem',
      'Audio poznámky a shrnutí'
    ],
    example: {
      topic: 'Řešení rovnice ax² + bx + c = 0',
      approach: 'Postupné hlasové vysvětlení jednotlivých kroků řešení',
      activities: [
        'Poslech podrobného výkladu kvadratického vzorce',
        'Opakování vzorce nahlas v rytmu',
        'Diskuze o jednotlivých krocích s AI',
        'Řešení příkladů s hlasovým komentářem'
      ]
    }
  },
  kinesthetic: {
    style: 'kinesthetic',
    title: '🤝 Praktické učení: Kvadratické rovnice',
    description: 'Naučte se kvadratické rovnice prostřednictvím experimentů a praktických aktivit.',
    methods: [
      'Simulace házení míčku',
      'Experimentální kalkulátor',
      'Praktické projekty a úlohy',
      'Manipulace s reálnými objekty'
    ],
    example: {
      topic: 'Řešení rovnice ax² + bx + c = 0',
      approach: 'Praktické experimenty s pohybem projektilů a optimalizací',
      activities: [
        'Simulace trajektorie míčku (parabola)',
        'Experimentování s různými úhly vrhu',
        'Hledání optimálního úhlu pro maximální vzdálenost',
        'Stavba fyzického modelu paraboly'
      ]
    }
  }
};

export const getPersonalizedMaterial = (style: string): PersonalizedContent => {
  return quadraticEquationMaterials[style] || quadraticEquationMaterials.visual;
};