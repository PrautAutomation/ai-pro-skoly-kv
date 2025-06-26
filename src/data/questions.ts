import { Question } from '../types/learningStyle';

export const questionBank: Question[] = [
  // Element Discovery Quest - Scenario 1: Zapomenutá knihovna
  {
    id: 'quest1',
    type: 'scenario',
    weight: 0.35,
    category: 'visual',
    question: '📚 Našel jsi starou knihu s magickými vzorci, ale text je rozmazaný! Jak zjistíš, co znamenají?',
    options: [
      {
        id: 'q1fire',
        text: '🔥 Zkusím vzorec nanačisto a uvidím, co se stane!',
        emoji: '🔥',
        scores: { kinesthetic: 30, analytical: -5 }
      },
      {
        id: 'q1water',
        text: '💧 Zeptám se knihovnice, aby mi to vysvětlila',
        emoji: '💧',
        scores: { auditory: 30, social: 10 }
      },
      {
        id: 'q1earth',
        text: '🌱 Přepíšu si text čistě a udělám si poznámky',
        emoji: '🌱',
        scores: { readWrite: 30, sequential: 10 }
      },
      {
        id: 'q1air',
        text: '💨 Nakreslím si diagram a obrázky toho, co vidím',
        emoji: '💨',
        scores: { visual: 30, analytical: 5 }
      }
    ]
  },
  // Element Discovery Quest - Scenario 2: Týmový projekt
  {
    id: 'quest2',
    type: 'scenario',
    weight: 0.35,
    category: 'social',
    question: '🏰 Máš postavit model hradu se třemi kamarády. Jak se do toho pustíš?',
    options: [
      {
        id: 'q2fire',
        text: '🔥 Vezmu si kostky a začnu stavět!',
        emoji: '🔥',
        scores: { kinesthetic: 25, social: -10 }
      },
      {
        id: 'q2water',
        text: '💧 Nejdřív se poradím s týmem, co kdo bude dělat',
        emoji: '💧',
        scores: { auditory: 20, social: 25 }
      },
      {
        id: 'q2earth',
        text: '🌱 Napíšu si plán a seznam materiálů',
        emoji: '🌱',
        scores: { readWrite: 25, sequential: 15 }
      },
      {
        id: 'q2air',
        text: '💨 Nakreslím náčrt hradu a ukážu ho ostatním',
        emoji: '💨',
        scores: { visual: 30, social: 5 }
      }
    ]
  },
  // Element Discovery Quest - Scenario 3: Nový jazyk
  {
    id: 'quest3',
    type: 'scenario',
    weight: 0.35,
    category: 'kinesthetic',
    question: '🌍 Chceš se naučit základní slova v novém jazyce. Co zkusíš jako první?',
    options: [
      {
        id: 'q3fire',
        text: '🔥 Začnu hned mluvit s někým, kdo ten jazyk umí',
        emoji: '🔥',
        scores: { kinesthetic: 20, social: 20, auditory: 15 }
      },
      {
        id: 'q3water',
        text: '💧 Poslouchám písničky a říkanky v tom jazyce',
        emoji: '💧',
        scores: { auditory: 35, kinesthetic: 5 }
      },
      {
        id: 'q3earth',
        text: '🌱 Přečtu si slovníček a napíšu si slovíčka',
        emoji: '🌱',
        scores: { readWrite: 35, sequential: 10 }
      },
      {
        id: 'q3air',
        text: '💨 Podívám se na obrázky s popisky',
        emoji: '💨',
        scores: { visual: 35, readWrite: 5 }
      }
    ]
  },
  {
    id: 'b4',
    type: 'behavioral',
    weight: 0.4,
    category: 'analytical',
    question: 'Jak dítě řeší složité úkoly?',
    options: [
      {
        id: 'b4a',
        text: 'Rozdělí si je na menší kroky',
        emoji: '🧩',
        scores: { analytical: 20, sequential: 15 }
      },
      {
        id: 'b4b',
        text: 'Spoléhá na první nápad nebo cit',
        emoji: '💡',
        scores: { analytical: -20, visual: 10 }
      },
      {
        id: 'b4c',
        text: 'Radí se s ostatními dětmi nebo dospělými',
        emoji: '💬',
        scores: { social: 15, auditory: 10 }
      },
      {
        id: 'b4d',
        text: 'Hledá podobné příklady, které už zná',
        emoji: '🔍',
        scores: { analytical: 10, readWrite: 10 }
      }
    ]
  },

  // Scenario-Based Questions (35% weight)
  {
    id: 's1',
    type: 'scenario',
    weight: 0.35,
    category: 'sequential',
    question: 'Představ si, že se učíš programování. Který přístup by ti nejvíc vyhovoval?',
    options: [
      {
        id: 's1a',
        text: 'Krok-za-krokem tutorial s jasnou strukturou',
        emoji: '📋',
        scores: { sequential: 25, readWrite: 10 }
      },
      {
        id: 's1b',
        text: 'Velký projekt, kde si postupně objevuješ koncepy',
        emoji: '🚀',
        scores: { sequential: -20, analytical: -15, kinesthetic: 15 }
      },
      {
        id: 's1c',
        text: 'Práce ve skupině s mentorem',
        emoji: '👨‍🏫',
        scores: { social: 25, auditory: 15 }
      },
      {
        id: 's1d',
        text: 'Experimentování s kódem a učení z chyb',
        emoji: '⚡',
        scores: { kinesthetic: 20, analytical: -10 }
      }
    ]
  },
  {
    id: 's2',
    type: 'scenario',
    weight: 0.35,
    category: 'visual',
    question: 'Učíš se o historické události. Co ti pomůže nejvíc?',
    options: [
      {
        id: 's2a',
        text: 'Časová osa s obrázky a mapami',
        emoji: '🗺️',
        scores: { visual: 25, sequential: 10 }
      },
      {
        id: 's2b',
        text: 'Dokumentární film s komentářem',
        emoji: '🎬',
        scores: { visual: 15, auditory: 15 }
      },
      {
        id: 's2c',
        text: 'Čtení původních dokumentů',
        emoji: '📜',
        scores: { readWrite: 25, analytical: 10 }
      },
      {
        id: 's2d',
        text: 'Hraní historické simulace',
        emoji: '🎮',
        scores: { kinesthetic: 25, visual: 10 }
      }
    ]
  },
  {
    id: 's3',
    type: 'scenario',
    weight: 0.35,
    category: 'auditory',
    question: 'Když se má dítě připravit na referát, jak postupuje nejlépe?',
    options: [
      {
        id: 's3a',
        text: 'Napíše si podrobné poznámky',
        emoji: '📝',
        scores: { readWrite: 20, sequential: 10 }
      },
      {
        id: 's3b',
        text: 'Vytvoří si obrázky a schémata',
        emoji: '📊',
        scores: { visual: 25, analytical: 5 }
      },
      {
        id: 's3c',
        text: 'Procvičuje si to nahlas',
        emoji: '🎤',
        scores: { auditory: 25, kinesthetic: 10 }
      },
      {
        id: 's3d',
        text: 'Přednáší to nejdřív rodičům nebo kamarádům',
        emoji: '👫',
        scores: { social: 20, auditory: 15 }
      }
    ]
  },

  // Interactive Tasks (25% weight)
  {
    id: 'i1',
    type: 'interactive',
    weight: 0.25,
    category: 'kinesthetic',
    question: 'Která aktivita by tě nejvíc bavila při učení kvadratických rovnic?',
    options: [
      {
        id: 'i1a',
        text: 'Sledování grafu, jak se mění při změně koeficientů',
        emoji: '📈',
        scores: { visual: 20, analytical: 10 }
      },
      {
        id: 'i1b',
        text: 'Poslouchání vysvětlení krok za krokem',
        emoji: '🎧',
        scores: { auditory: 25, sequential: 15 }
      },
      {
        id: 'i1c',
        text: 'Experimentování s kalkulátorem a různými hodnotami',
        emoji: '🧮',
        scores: { kinesthetic: 25, analytical: 5 }
      },
      {
        id: 'i1d',
        text: 'Psaní a řešení mnoha příkladů',
        emoji: '✏️',
        scores: { readWrite: 20, sequential: 10 }
      }
    ]
  },
  {
    id: 'i2',
    type: 'interactive',
    weight: 0.25,
    category: 'visual',
    question: 'Jak by sis nejlépe zapamatoval/a sekvenci čísel: 7, 3, 9, 1, 5?',
    options: [
      {
        id: 'i2a',
        text: 'Představím si je jako barevné kostky',
        emoji: '🔴',
        scores: { visual: 25, analytical: -5 }
      },
      {
        id: 'i2b',
        text: 'Opakuji si je nahlas v rytmu',
        emoji: '🥁',
        scores: { auditory: 25, kinesthetic: 5 }
      },
      {
        id: 'i2c',
        text: 'Napíšu si je několikrát za sebou',
        emoji: '📝',
        scores: { readWrite: 20, kinesthetic: 10 }
      },
      {
        id: 'i2d',
        text: 'Pokusím se najít v nich vzorec',
        emoji: '🔍',
        scores: { analytical: 20, sequential: 10 }
      }
    ]
  },
  {
    id: 'i3',
    type: 'interactive',
    weight: 0.25,
    category: 'readWrite',
    question: 'Při čtení složitého textu co ti nejvíc pomůže?',
    options: [
      {
        id: 'i3a',
        text: 'Dělám si barevné zvýraznění a poznámky na okraj',
        emoji: '🖍️',
        scores: { visual: 15, readWrite: 20 }
      },
      {
        id: 'i3b',
        text: 'Čtu nahlas nebo si pustím audio verzi',
        emoji: '📢',
        scores: { auditory: 25, readWrite: 5 }
      },
      {
        id: 'i3c',
        text: 'Přepisuji klíčové myšlenky vlastními slovy',
        emoji: '📋',
        scores: { readWrite: 25, analytical: 10 }
      },
      {
        id: 'i3d',
        text: 'Chodím si při čtení nebo si fidlám s předměty',
        emoji: '🚶',
        scores: { kinesthetic: 25, auditory: 5 }
      }
    ]
  }
];

export const getAdaptiveQuestion = (responses: { questionId: string }[], currentProfile: Record<string, unknown>): Question | null => {
  // Simple adaptive logic - in real implementation this would be more sophisticated
  const answeredIds = responses.map(r => r.questionId);
  const unanswered = questionBank.filter(q => !answeredIds.includes(q.id));
  
  if (unanswered.length === 0) return null;
  
  // Prioritize questions that help distinguish between close scores
  return unanswered[0];
};