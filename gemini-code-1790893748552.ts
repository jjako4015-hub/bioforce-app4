// App.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROFILES } from './constants/profiles';
import { WEEK_1_TOPICS, WEEK_2_TOPICS } from './data/textbookTopics';
import { ProfileId, Section, Question, Topic } from './types/bioforce';
import { CharacterCanvas } from './components/3d/CharacterCanvas';

export default function App() {
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [selectedProfile, setSelectedProfile] = useState<ProfileId>('marvel');

  const [profileData, setProfileData] = useState<Record<string, { xp: number; completedTopics: string[]; completedFinals: string[] }>>({
    'marvel': { xp: 0, completedTopics: [], completedFinals: [] },
    'demon-slayer': { xp: 0, completedTopics: [], completedFinals: [] },
    'one-piece': { xp: 0, completedTopics: [], completedFinals: [] },
    'mha': { xp: 0, completedTopics: [], completedFinals: [] },
    'dr-stone': { xp: 0, completedTopics: [], completedFinals: [] },
    'harry-potter': { xp: 0, completedTopics: [], completedFinals: [] }
  });

  const [activeSection, setActiveSection] = useState<Section>('modules');
  const [selectedWeek, setSelectedWeek] = useState<1 | 2 | null>(null);
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [wrongAnswers, setWrongAnswers] = useState<Question[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const currentProfileConfig = PROFILES[selectedProfile];
  const currentXP = profileData[selectedProfile].xp;
  const currentRankInfo = [...currentProfileConfig.ranks].reverse().find(r => currentXP >= r.requiredXp) || currentProfileConfig.ranks[0];

  const completedTopicsList = profileData[selectedProfile].completedTopics;
  const completedFinalsList = profileData[selectedProfile].completedFinals;

  const allWeek1TopicsCompleted = WEEK_1_TOPICS.every(t => completedTopicsList.includes(t.id));
  const week1FinalCompleted = completedFinalsList.includes('week1_final');
  const isWeek2Unlocked = allWeek1TopicsCompleted && week1FinalCompleted;

  const allWeek2TopicsCompleted = WEEK_2_TOPICS.every(t => completedTopicsList.includes(t.id));
  const week2FinalCompleted = completedFinalsList.includes('week2_final');
  const isMonthlyUnlocked = isWeek2Unlocked && allWeek2TopicsCompleted && week2FinalCompleted && wrongAnswers.length === 0;

  const handleAnswer = (option: string) => {
    if (!activeTopic) return;
    const currentQ = activeTopic.questions[currentQuestionIndex];
    setSelectedOption(option);

    if (option === currentQ.correctAnswer) {
      setProfileData(prev => ({
        ...prev,
        [selectedProfile]: {
          ...prev[selectedProfile],
          xp: prev[selectedProfile].xp + 10
        }
      }));
      
      setTimeout(() => {
        if (currentQuestionIndex + 1 < activeTopic.questions.length) {
          setCurrentQuestionIndex(prev => prev + 1);
          setSelectedOption(null);
        } else {
          setProfileData(prev => ({
            ...prev,
            [selectedProfile]: {
              ...prev[selectedProfile],
              completedTopics: [...prev[selectedProfile].completedTopics, activeTopic.id],
              xp: prev[selectedProfile].xp + 50
            }
          }));
          alert("🎉 ТАҚЫРЫП ТОЛЫҚ АЯҚТАЛДЫ! +50 XP");
          setActiveTopic(null);
          setCurrentQuestionIndex(0);
          setSelectedOption(null);
        }
      }, 1000);
    } else {
      if (!wrongAnswers.some(q => q.id === currentQ.id)) {
        setWrongAnswers(prev => [...prev, currentQ]);
      }
      setShowExplanation(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#E8FFF1] to-[#B8FFD6] text-[#10251A] p-4 md:p-8">
      {!hasStarted ? (
        <div className="max-w-4xl mx-auto text-center space-y-8 pt-10">
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-6xl md:text-8xl font-black text-[#0B3D24] drop-shadow-[0_0_35px_rgba(57,255,136,0.6)]"
          >
            BIOFORCE
          </motion.h1>

          <h2 className="text-2xl font-bold text-[#18C875]">ӨЗ ПРОФИЛІҢДІ ТАҢДА</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {Object.values(PROFILES).map((prof) => (
              <div
                key={prof.id}
                onClick={() => setSelectedProfile(prof.id)}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                  selectedProfile === prof.id 
                    ? 'bg-[#39FF88] text-[#0B3D24] border-[#18C875] shadow-[0_0_30px_rgba(57,255,136,0.5)] scale-105' 
                    : 'bg-white/80 border-transparent hover:bg-[#E8FFF1] hover:border-[#39FF88]'
                }`}
              >
                <div className="text-3xl mb-2">{prof.icon}</div>
                <div className="font-extrabold text-lg">{prof.name}</div>
                <div className="text-xs opacity-80 mt-1">1-деңгей: {prof.ranks[0].character}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setHasStarted(true)}
            className="px-12 py-4 bg-[#39FF88] hover:bg-[#52FF9A] text-[#0B3D24] font-black text-2xl rounded-2xl border-2 border-[#18C875] shadow-[0_0_35px_rgba(57,255,136,0.6)] transition-all transform hover:scale-105"
          >
            БАСТАУ
          </button>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex justify-between items-center bg-white/80 p-4 rounded-2xl border border-[#39FF88]">
            <h1 className="text-3xl font-black text-[#0B3D24]">BIOFORCE</h1>
            <div className="text-right">
              <span className="text-xs text-[#18C875] font-bold block">{currentProfileConfig.name.toUpperCase()}</span>
              <span className="text-sm font-extrabold text-[#0B3D24]">{currentRankInfo.rank} ({currentRankInfo.character})</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4 bg-white/60 p-2 rounded-2xl border border-[#B8FFD6]">
            {[
              { id: 'modules', label: 'МОДУЛЬ' },
              { id: 'character', label: 'КЕЙІПКЕР' },
              { id: 'mistakes', label: `ҚАТЕМЕН ЖҰМЫС (${wrongAnswers.length})` },
              { id: 'monthly', label: `АЙЛЫҚ ТЕСТ ${!isMonthlyUnlocked ? '🔒' : ''}` }
            ].map(nav => (
              <button
                key={nav.id}
                onClick={() => {
                  if (nav.id === 'monthly' && !isMonthlyUnlocked) {
                    alert("🔒 Ашу үшін 1-апта, 2-апта және Қатемен жұмыс аяқталуы керек!");
                    return;
                  }
                  setActiveSection(nav.id as Section);
                  setActiveTopic(null);
                }}
                className={`nav-item px-5 py-3 rounded-xl font-extrabold text-sm md:text-base flex-1 text-center ${
                  activeSection === nav.id ? 'active' : 'bg-white text-[#10251A]'
                }`}
              >
                {nav.label}
              </button>
            ))}
          </div>

          <div className="bg-white/90 p-6 rounded-3xl border-2 border-[#39FF88] shadow-lg backdrop-blur-md">
            {activeSection === 'modules' && !activeTopic && (
              <div className="space-y-6">
                <h2 className="text-xl font-black text-[#0B3D24]">ОҚУ МОДУЛЬДЕРІ</h2>
                {!selectedWeek ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div 
                      onClick={() => setSelectedWeek(1)}
                      className="p-6 rounded-2xl bg-[#E8FFF1] border-2 border-[#39FF88] cursor-pointer hover:shadow-lg"
                    >
                      <h3 className="text-2xl font-black text-[#0B3D24]">1-АПТА</h3>
                      <p className="text-xs font-bold text-[#18C875] mt-1">Оқулықтың алғашқы 4 тақырыбы</p>
                    </div>

                    <div 
                      onClick={() => {
                        if (!isWeek2Unlocked) {
                          alert("🔒 1-апта толық аяқталмаған!");
                          return;
                        }
                        setSelectedWeek(2);
                      }}
                      className={`p-6 rounded-2xl border-2 ${
                        isWeek2Unlocked ? 'bg-[#E8FFF1] border-[#39FF88] cursor-pointer' : 'bg-gray-100 border-gray-300 opacity-60'
                      }`}
                    >
                      <h3 className="text-2xl font-black text-[#0B3D24]">2-АПТА {!isWeek2Unlocked && '🔒'}</h3>
                      <p className="text-xs font-bold text-[#18C875] mt-1">Оқулықтың 5-тақырыбынан бастап қалғандары</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <button onClick={() => setSelectedWeek(null)} className="text-xs font-bold text-[#18C875] underline">&larr; Артқа</button>
                    {(selectedWeek === 1 ? WEEK_1_TOPICS : WEEK_2_TOPICS).map((topic, idx, arr) => {
                      const isCompleted = completedTopicsList.includes(topic.id);
                      const isUnlocked = idx === 0 || completedTopicsList.includes(arr[idx - 1].id);

                      return (
                        <div
                          key={topic.id}
                          onClick={() => {
                            if (!isUnlocked) return;
                            setActiveTopic(topic);
                            setCurrentQuestionIndex(0);
                          }}
                          className={`p-4 rounded-xl border-2 flex justify-between items-center ${
                            isUnlocked ? 'bg-white border-[#39FF88] cursor-pointer' : 'bg-gray-50 border-gray-200 text-gray-400'
                          }`}
                        >
                          <div>
                            <span className="font-extrabold text-sm block text-[#0B3D24]">{topic.title}</span>
                            <span className="text-xs font-bold text-[#18C875]">20 СҰРАҚ</span>
                          </div>
                          <div className="font-black text-sm">{isCompleted ? '✓' : isUnlocked ? '🔓' : '🔒'}</div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {activeTopic && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="font-black text-lg text-[#0B3D24]">{activeTopic.title}</h3>
                  <span className="font-black text-[#18C875] text-sm">{currentQuestionIndex + 1} / 20</span>
                </div>

                <div className="py-4">
                  <p className="text-lg font-bold">{activeTopic.questions[currentQuestionIndex].question}</p>
                  <div className="grid gap-3 mt-4">
                    {activeTopic.questions[currentQuestionIndex].options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleAnswer(opt)}
                        className="p-4 rounded-xl font-bold text-left text-sm border-2 border-gray-200 hover:border-[#39FF88]"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {showExplanation && (
                  <div className="p-4 bg-red-50 border border-red-300 rounded-xl text-xs space-y-2 text-red-900">
                    <div className="font-black text-sm text-red-600">🔴 ҚАШЫҚТЫҚТАН ҚАТЕ ЖАУАП!</div>
                    <div><strong>Дұрыс жауап:</strong> {activeTopic.questions[currentQuestionIndex].correctAnswer}</div>
                    <div><strong>Түсіндірме:</strong> {activeTopic.questions[currentQuestionIndex].explanation}</div>
                    <button 
                      onClick={() => {
                        setShowExplanation(false);
                        setSelectedOption(null);
                        if (currentQuestionIndex + 1 < activeTopic.questions.length) {
                          setCurrentQuestionIndex(prev => prev + 1);
                        } else {
                          setActiveTopic(null);
                        }
                      }}
                      className="px-4 py-2 bg-red-600 text-white font-bold rounded-lg"
                    >
                      КЕЛЕСІ СҰРАҚ
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeSection === 'character' && (
              <div className="space-y-6 text-center">
                <h2 className="text-2xl font-black text-[#0B3D24]">ҚАЗІРГІ КЕЙІПКЕРІҢІЗ</h2>
                <CharacterCanvas characterName={currentRankInfo.character} rankTitle={currentRankInfo.rank} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}