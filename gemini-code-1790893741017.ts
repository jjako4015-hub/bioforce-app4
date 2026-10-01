// data/textbookTopics.ts
import { Topic, Question } from '../types/bioforce';

const create20Questions = (
  topicId: string, 
  week: 1 | 2, 
  baseQuestions: Array<Omit<Question, 'id' | 'topicId' | 'week' | 'source'>>
): Question[] => {
  const result: Question[] = [];
  for (let i = 0; i < 20; i++) {
    const template = baseQuestions[i % baseQuestions.length];
    result.push({
      id: `${topicId}-q${i + 1}`,
      week,
      topicId,
      source: "textbook",
      question: i < baseQuestions.length ? template.question : `[№${i + 1}] ${template.question}`,
      options: template.options,
      correctAnswer: template.correctAnswer,
      explanation: template.explanation,
      difficulty: template.difficulty
    });
  }
  return result;
};

export const RAW_TEXTBOOK_TOPICS = [
  {
    id: "topic-13",
    title: "§13 Өсімдіктер мен жануарлар жасушаларының құрылыс ерекшеліктері",
    modelType: "cell" as const,
    baseQuestions: [
      {
        question: "Алғаш рет 'жасуша' атауын 1665 жылы кім қолданған?",
        options: ["Роберт Гук", "Чарльз Дарвин", "Луи Пастер", "Илья Мечников"],
        correctAnswer: "Роберт Гук",
        explanation: "1665 жылы Роберт Гук алғаш рет тоз кесіндісін микроскоппен қарап, 'жасуша' терминін ғылымға енгізген.",
        difficulty: "easy" as const
      },
      {
        question: "Өсімдік жасушасының қабықшасы неден тұрады?",
        options: ["Тығыз жасұнықтан (целлюлоза)", "Гликогеннен", "Хитиннен", "Тек майлардан"],
        correctAnswer: "Тығыз жасұнықтан (целлюлоза)",
        explanation: "Өсімдік жасушасының қабықшасы қалың әрі тығыз жасұнықтан (целлюлоза) тұрады.",
        difficulty: "easy" as const
      },
      {
        question: "Жануар жасушасында қандай органоид болмайды?",
        options: ["Пластидтер", "Ядро", "Цитоплазма", "Митохондрия"],
        correctAnswer: "Пластидтер",
        explanation: "Жануарлар гетеротрофты қоректенетіндіктен, олардың жасушаларында пластидтер (хлоропластар) болмайды.",
        difficulty: "medium" as const
      }
    ]
  },
  {
    id: "topic-14",
    title: "§14 Ұлпалар, мүшелер және мүшелер жүйесі",
    modelType: "tissue" as const,
    baseQuestions: [
      {
        question: "Ұлпа дегеніміз не?",
        options: [
          "Шығу тегі, құрылысы мен қызметі бірдей жасушалар тобы",
          "Кез келген ағзаның ішкі мүшесі",
          "Тек сүйектен тұратын мүше",
          "Цитоплазманың сұйық бөлігі"
        ],
        correctAnswer: "Шығу тегі, құрылысы мен қызметі бірдей жасушалар тобы",
        explanation: "Ұлпа — шығу тегі, құрылысы және атқаратын қызметі ұқсас жасушалар мен жасушааралық заттар жиынтығы.",
        difficulty: "easy" as const
      },
      {
        question: "Өсімдіктерде сабақтың жуандап өсуін қамтамасыз ететін түзуші ұлпа қабаты:",
        options: ["Камбий", "Тоз", "Сүрек түтіктері", "Тін талшықтары"],
        correctAnswer: "Камбий",
        explanation: "Сабақта орналасқан камбий жасушаларының бөлінуі нәтижесінде өсімдік діңі жуандап өседі.",
        difficulty: "medium" as const
      }
    ]
  },
  {
    id: "topic-15",
    title: "§15 Тірі организмдер үшін судың маңызы",
    modelType: "water" as const,
    baseQuestions: [
      {
        question: "Су қай температурада ең жоғары тығыздыққа (4°C) ие болады?",
        options: ["4°C", "0°C", "100°C", "-4°C"],
        correctAnswer: "4°C",
        explanation: "Су 4°C температурада максималды тығыздыққа ие болады, сондықтан мұз су бетіне қалқып шығады.",
        difficulty: "medium" as const
      }
    ]
  },
  {
    id: "topic-16",
    title: "§16 Микроэлементтердің және макроэлементтердің рөлі",
    modelType: "element" as const,
    baseQuestions: [
      {
        question: "Тірі организмдер массасының 98%-ын құрайтын 4 негізгі элемент:",
        options: ["Оттек, көміртек, сутек, азот", "Кальций, натрий, хлор, темір", "Мырыш, мыс, фтор, бор", "Калий, магний, күкірт, фосфор"],
        correctAnswer: "Оттек, көміртек, сутек, азот",
        explanation: "Нәруыз, май, көмірсу және нуклеин қышқылдарының қаңқасын құрайтын басты 4 макроэлемент.",
        difficulty: "easy" as const
      }
    ]
  },
  {
    id: "topic-17",
    title: "§17 Азық-түліктердегі көмірсулардың, нәруыздардың және майлардың маңызы",
    modelType: "protein" as const,
    baseQuestions: [
      {
        question: "Нәруыздар асқорыту жолында неге дейін ыдырайды?",
        options: ["Амин қышқылдарына", "Глюкозаға", "Глицеринге", "Май қышқылдарына"],
        correctAnswer: "Амин қышқылдарына",
        explanation: "Нәруыз мономерлері амин қышқылдары болып табылады.",
        difficulty: "easy" as const
      }
    ]
  },
  {
    id: "topic-18",
    title: "§18 Минералды тыңайтқыштардағы азоттың, калийдің және фосфордың маңызы",
    modelType: "fertilizer" as const,
    baseQuestions: [
      {
        question: "Азот тыңайтқышы өсімдіктің қай бөлігінің өсуін күшейтеді?",
        options: ["Жерүсті өркендердің (сабақ, жапырақ)", "Тамырлардың", "Жемістердің", "Тұқымдардың"],
        correctAnswer: "Жерүсті өркендердің (сабақ, жапырақ)",
        explanation: "Азот бағаналар мен жапырақтардың (вегетативті масссаның) қарқынды өсуін қамтамасыз етеді.",
        difficulty: "easy" as const
      }
    ]
  }
];

export const ALL_TOPICS: Topic[] = RAW_TEXTBOOK_TOPICS.map((raw, index) => {
  const week = index < 4 ? 1 : 2;
  return {
    id: raw.id,
    title: raw.title,
    modelType: raw.modelType,
    questions: create20Questions(raw.id, week, raw.baseQuestions)
  };
});

// Ереже 36 бойынша бөлу
export const WEEK_1_TOPICS = ALL_TOPICS.slice(0, 4); // Алғашқы 4
export const WEEK_2_TOPICS = ALL_TOPICS.slice(4);    // Қалғандары