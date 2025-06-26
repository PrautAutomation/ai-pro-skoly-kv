import { LearningProfile, TestResponse, LearningStyleType } from '../types/learningStyle';
import { questionBank } from '../data/questions';

export class LearningStyleAnalyzer {
  
  static calculateProfile(responses: TestResponse[]): LearningProfile {
    const profile: LearningProfile = {
      visual: 0,
      auditory: 0,
      kinesthetic: 0,
      readWrite: 0,
      social: 0,
      sequential: 0,
      analytical: 0
    };

    responses.forEach(response => {
      const question = questionBank.find(q => q.id === response.questionId);
      const option = question?.options.find(o => o.id === response.optionId);
      
      if (question && option) {
        // Apply question weight to scores
        Object.entries(option.scores).forEach(([key, value]) => {
          if (key in profile && value !== undefined) {
            profile[key as keyof LearningProfile] += value * question.weight;
          }
        });
      }
    });

    // Normalize VARK scores to 0-100 range
    const varkTotal = profile.visual + profile.auditory + profile.kinesthetic + profile.readWrite;
    if (varkTotal > 0) {
      profile.visual = Math.round((profile.visual / varkTotal) * 100);
      profile.auditory = Math.round((profile.auditory / varkTotal) * 100);
      profile.kinesthetic = Math.round((profile.kinesthetic / varkTotal) * 100);
      profile.readWrite = Math.round((profile.readWrite / varkTotal) * 100);
    }

    // Ensure secondary dimensions stay in -50 to +50 range
    profile.social = Math.max(-50, Math.min(50, profile.social));
    profile.sequential = Math.max(-50, Math.min(50, profile.sequential));
    profile.analytical = Math.max(-50, Math.min(50, profile.analytical));

    return profile;
  }

  static getDominantStyle(profile: LearningProfile): LearningStyleType {
    const varkScores = {
      visual: profile.visual,
      auditory: profile.auditory,
      kinesthetic: profile.kinesthetic,
      readWrite: profile.readWrite
    };

    const maxScore = Math.max(...Object.values(varkScores));
    const dominantStyles = Object.entries(varkScores)
      .filter(([_, score]) => score === maxScore)
      .map(([style, _]) => style);

    // If multiple styles are equally dominant or close, return balanced
    if (dominantStyles.length > 1 || maxScore < 35) {
      return 'balanced';
    }

    return dominantStyles[0] as LearningStyleType;
  }

  static calculateConfidence(profile: LearningProfile, responses: TestResponse[]): number {
    // Calculate confidence based on:
    // 1. Consistency of responses
    // 2. Dominance of primary style
    // 3. Number of questions answered
    
    const varkScores = [profile.visual, profile.auditory, profile.kinesthetic, profile.readWrite];
    const maxScore = Math.max(...varkScores);
    const secondMaxScore = varkScores.sort((a, b) => b - a)[1];
    
    // Higher confidence when there's clear dominance
    const dominanceConfidence = maxScore > 0 ? (maxScore - secondMaxScore) / maxScore : 0;
    
    // Higher confidence with more responses
    const responseConfidence = Math.min(responses.length / 12, 1); // Normalize to max 12 questions
    
    // Response time consistency (quick decisions often indicate clear preferences)
    const avgResponseTime = responses.reduce((sum, r) => sum + r.responseTime, 0) / responses.length;
    const timeConsistency = avgResponseTime < 5000 ? 0.8 : 0.6; // 5 seconds threshold
    
    const overallConfidence = (dominanceConfidence * 0.5 + responseConfidence * 0.3 + timeConsistency * 0.2);
    
    return Math.round(overallConfidence * 100);
  }

  static getStyleDescription(style: LearningStyleType): {
    name: string;
    description: string;
    strengths: string[];
    tips: string[];
    element: string;
    teachingStrategies: string[];
  } {
    const descriptions = {
      visual: {
        name: 'Vzdušný element (Vizuální typ)',
        element: '💨 Dítě ovládá element VZDUCHU',
        description: 'Toto dítě se učí nejlépe prostřednictvím obrázků, diagramů a vizuálních pomůcek. Miluje barvy, mapy a vše, co může vidět.',
        strengths: [
          'Rychle si zapamatuje to, co vidí',
          'Skvěle pracuje s mapami a diagramy',
          'Barevné materiály ho motivují k učení',
          'Dokáže si představit věci v hlavě'
        ],
        tips: [
          'Používejte myšlenkové mapy a diagramy',
          'Zvýrazňujte důležité informace různými barvami',
          'Vytvářejte vizuální poznámky a schémata',
          'Využívайte obrázky a infografiky'
        ],
        teachingStrategies: [
          'Připravte materiály s mnoha obrázky a ilustracemi',
          'Používejte interaktivní tabule a projektory',
          'Nechte dítě kreslí a vytvářet vlastní diagramy',
          'Využívejte vzdělávací videa a animace',
          'Vytvořte barevný a vizuálně atraktivní učební prostor'
        ]
      },
      auditory: {
        name: 'Vodní element (Sluchový typ)',
        element: '💧 Dítě ovládá element VODY',
        description: 'Toto dítě se učí nejlépe prostřednictvím poslechu, diskuze a zvuků. Miluje písničky, příběhy a rozhovory.',
        strengths: [
          'Skvěle si pamatuje to, co slyší',
          'Rád diskutuje a vykládá ostatním',
          'Rychle pochopí mluvené pokyny',
          'Baví ho písničky a rytmické aktivity'
        ],
        tips: [
          'Nechte dítě si nahlas opakovat důležité informace',
          'Používejte audionahrávky a vzdělávací podcasty',
          'Povzbuzujte diskuze o probírané látce',
          'Vytvářejte písničky a rýmy pro zapamatování'
        ],
        teachingStrategies: [
          'Vyplídejte věci nahlas a nechte dítě opakovat',
          'Používejte hudbu a rytmus při učení',
          'Organizujte skupinové diskuze a prezentace',
          'Nahrávejte důležité informace na audio',
          'Vytvořte tiché prostředí pro poslechové aktivity'
        ]
      },
      kinesthetic: {
        name: 'Ohněný element (Pohybový typ)',
        element: '🔥 Dítě ovládá element OHNĚ',
        description: 'Toto dítě se učí nejlépe prostřednictvím pohybu, praktických aktivit a experimentování. Potřebuje "sahat si" na věci.',
        strengths: [
          'Učí se děláním a zkoušením',
          'Skvěle si pamatuje praktické zkušenosti',
          'Má rád experimenty a výzkum',
          'Potřebuje pohyb během učení'
        ],
        tips: [
          'Používejte praktické cvičení a experimenty',
          'Dovolte dítěti prostát si a pohybovat se při učení',
          'Vytvářejte fyzické modely a manipulativní pomůcky',
          'Využívejte venkovní prostory pro učení'
        ],
        teachingStrategies: [
          'Připravte ruce-na aktivity a experimenty',
          'Využívejte stavebnice, kostky a manipulativní materiály',
          'Dovolte časté přestávky na protažení',
          'Vytvořte učební stanice s různými aktivitami',
          'Nechte dítě stavět, formát a tvořit'
        ]
      },
      readWrite: {
        name: 'Zemní element (Čtecí/písací typ)',
        element: '🌱 Dítě ovládá element ZEMĚ',
        description: 'Toto dítě se učí nejlépe prostřednictvím čtení a psaní. Miluje knihy, poznámky a vše, co může přečíst nebo napsat.',
        strengths: [
          'Rychle si přečte a pochopí texty',
          'Rád si dělá poznámky a seznamy',
          'Skvěle formuluje myšlenky písemně',
          'Má rád knihy a časopisy'
        ],
        tips: [
          'Nechte dítě si přepisovat důležité informace vlastními slovy',
          'Poskytujte různé textové zdroje k tématu',
          'Povzbuzujte tvorbu podrobných poznámek',
          'Využívejte worksheety a písemné úkoly'
        ],
        teachingStrategies: [
          'Poskytujte kvalitní čtecí materiály a knihy',
          'Nechte dítě vytvářet vlastní texty a příběhy',
          'Používejte worksheety a písemné cvičení',
          'Vytvořte čtecí rohík v učebně',
          'Povzbuzujte vedení deníčků a poznámek'
        ]
      },
      balanced: {
        name: 'Master všech elementů (Vyvážený typ)',
        element: '✨ Dítě ovládá VŠECHNY ELEMENTY',
        description: 'Toto dítě je jako malý čaroděj! Umí kombinovat různé styly učení podle situace a je velmi flexibilní.',
        strengths: [
          'Flexibilně se přizpůsobuje různým metodám učení',
          'Dokáže využít různé zdroje informací',
          'Je adaptabilní a otevřený novým přístupům',
          'Baví ho rozmanitost a změny'
        ],
        tips: [
          'Kombinujte různé metody učení v jedné lekci',
          'Experimentujte s novými přístupy',
          'Využívejte multimodální materiály',
          'Nechte dítě vybrat si preferovaný přístup'
        ],
        teachingStrategies: [
          'Střídejte různé druhy aktivit během lekce',
          'Nabídněte víc možností, jak se učit',
          'Využívejte mix technologií, knih, diskuzí i praktických aktivit',
          'Sledujte, co dítě v daný moment nejvíc baví',
          'Vytvořte bohaté učební prostředí s různými možnostmi'
        ]
      }
    };

    return descriptions[style];
  }
}