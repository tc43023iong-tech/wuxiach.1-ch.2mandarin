
import React, { useState, useMemo, useEffect } from 'react';
import { GameSection, GameState, Question } from './types';
import { PART_ONE_QUESTIONS, PART_TWO_QUESTIONS } from './constants';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentSection: GameSection.INTRO,
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
  });

  const [feedback, setFeedback] = useState<{ isCorrect: boolean; show: boolean } | null>(null);

  // 音效合成器
  const playSound = (type: 'correct' | 'incorrect') => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      if (type === 'correct') {
        // 歡快的向上雙音
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        oscillator.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1); // A5
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.3);
      } else {
        // 呆萌的下降滑音
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(220, audioCtx.currentTime); // A3
        oscillator.frequency.exponentialRampToValueAtTime(110, audioCtx.currentTime + 0.2); // A2
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.4);
      }
    } catch (e) {
      console.error("Audio context error:", e);
    }
  };

  const currentQuestions = useMemo(() => 
    gameState.currentSection === GameSection.PART_ONE ? PART_ONE_QUESTIONS : PART_TWO_QUESTIONS
  , [gameState.currentSection]);

  const currentQuestion: Question | undefined = currentQuestions[gameState.currentQuestionIndex];

  const startGame = () => {
    setGameState({
      currentSection: GameSection.PART_ONE,
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
    });
  };

  const switchSection = (section: GameSection) => {
    if (section === gameState.currentSection) return;
    setGameState(prev => ({
      ...prev,
      currentSection: section,
      currentQuestionIndex: 0,
      score: 0, 
    }));
  };

  const handleAnswer = (answer: string) => {
    if (feedback?.show) return;

    const isCorrect = answer === currentQuestion?.answer;
    setFeedback({ isCorrect, show: true });
    
    // 播放音效
    playSound(isCorrect ? 'correct' : 'incorrect');

    setTimeout(() => {
      setFeedback(null);
      const nextIndex = gameState.currentQuestionIndex + 1;
      
      if (nextIndex < currentQuestions.length) {
        setGameState(prev => ({
          ...prev,
          currentQuestionIndex: nextIndex,
          score: isCorrect ? prev.score + 1 : prev.score,
        }));
      } else {
        setGameState(prev => ({
          ...prev,
          currentSection: GameSection.SUMMARY,
          score: isCorrect ? prev.score + 1 : prev.score,
        }));
      }
    }, 1000);
  };

  const renderIntro = () => (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-10 animate-fade-in relative">
      <div className="absolute top-10 left-10 text-6xl opacity-20 rotate-12 animate-float">🥕</div>
      <div className="absolute top-40 right-10 text-7xl opacity-10 animate-wiggle">⭐</div>
      
      <div className="relative">
        <div className="absolute -inset-8 bg-orange-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Bunny&backgroundColor=ffdfbf" alt="Cute Bunny" className="relative w-64 h-64 rounded-full border-[12px] border-white shadow-2xl animate-float" />
        <div className="absolute -top-6 -right-6 bg-red-500 text-white px-6 py-3 rounded-full font-bold shadow-xl animate-bounce font-kids text-2xl border-4 border-white">
          挖蘿蔔囉！
        </div>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-7xl font-kids text-orange-600 drop-shadow-lg tracking-widest">小兔挖蘿蔔</h1>
        <div className="flex justify-center items-center space-x-2">
           <div className="h-2 w-16 bg-orange-300 rounded-full"></div>
           <h2 className="text-4xl font-kids text-green-600">✨ 韻母大冒險 ✨</h2>
           <div className="h-2 w-16 bg-orange-300 rounded-full"></div>
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur-md p-8 rounded-[3rem] border-4 border-green-200 shadow-xl max-w-md relative overflow-hidden group">
        <p className="text-2xl text-green-800 leading-relaxed font-kids relative z-10">
          歡迎來到拼音森林！🥕<br/>
          只要選對韻母，<br/>
          小兔子就能挖到肥美的胡蘿蔔！
        </p>
      </div>

      <button 
        onClick={startGame}
        className="group relative px-20 py-8 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-4xl font-kids transition-all transform hover:scale-110 active:scale-95 shadow-[0_12px_0_rgb(194,65,12)]"
      >
        開始挑戰！
        <span className="absolute -right-8 -top-8 text-6xl group-hover:rotate-12 transition-transform">🥕</span>
      </button>
    </div>
  );

  const renderGame = () => {
    const progressPercent = ((gameState.currentQuestionIndex + 1) / currentQuestions.length) * 100;

    return (
      <div className="flex flex-col h-full p-4 md:p-8 space-y-4">
        {/* 進度條：兔子跳躍 */}
        <div className="relative h-20 w-full flex items-center px-12 mt-4">
          <div className="absolute left-12 right-12 h-5 bg-stone-200/50 rounded-full border-b-4 border-white shadow-inner"></div>
          <div 
            className="absolute left-0 transition-all duration-1000 cubic-bezier(0.34, 1.56, 0.64, 1)"
            style={{ left: `calc(${progressPercent}% - 60px)` }}
          >
            <div className="flex flex-col items-center">
              <span className="text-6xl animate-hop block drop-shadow-sm">🐰</span>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/5 rounded-full blur-[2px]"></div>
            </div>
          </div>
          <div className="absolute right-8 text-5xl">🥕</div>
        </div>

        {/* 遊戲核心區 */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white/95 rounded-[4rem] p-8 shadow-[0_30px_80px_rgba(180,83,9,0.15)] border-[12px] border-white relative overflow-hidden bg-farm">
          {/* 兔子耳朵裝飾 */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex space-x-12 pointer-events-none opacity-80">
            <div className="w-20 h-40 bg-white border-8 border-orange-50 rounded-full rotate-[-15deg] shadow-md flex justify-center pt-8">
              <div className="w-8 h-20 bg-orange-100 rounded-full"></div>
            </div>
            <div className="w-20 h-40 bg-white border-8 border-orange-50 rounded-full rotate-[15deg] shadow-md flex justify-center pt-8">
              <div className="w-8 h-20 bg-orange-100 rounded-full"></div>
            </div>
          </div>

          <div className="mb-6 flex flex-col items-center space-y-3 relative z-10">
            <div className={`px-6 py-2 rounded-full font-kids text-xl shadow-sm border-2 ${gameState.currentSection === GameSection.PART_ONE ? 'bg-green-100 text-green-700 border-green-200' : 'bg-blue-100 text-blue-700 border-blue-200'}`}>
              {gameState.currentSection === GameSection.PART_ONE ? '📍 漢字森林' : '📍 拼音田野'}
            </div>
            <h2 className="text-4xl font-kids text-stone-700 text-center">
              {gameState.currentSection === GameSection.PART_ONE ? '選出對應的字：' : '選出正確的韻母：'}
            </h2>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center w-full relative z-10">
            <div className={`text-center transition-all ${gameState.currentSection === GameSection.PART_ONE ? 'text-9xl' : 'text-7xl md:text-8xl'} font-bold text-orange-600 bg-orange-50/50 px-16 py-10 rounded-[3rem] border-4 border-dashed border-orange-200 shadow-inner relative font-kids`}>
              {gameState.currentSection === GameSection.PART_ONE ? currentQuestion?.target : currentQuestion?.displayWord}
              <div className="absolute -top-6 -right-6 text-4xl animate-wiggle">💡</div>
            </div>

            {/* 按鈕區域 */}
            <div className={`mt-10 grid gap-6 w-full max-w-2xl ${gameState.currentSection === GameSection.PART_ONE ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-4'}`}>
              {currentQuestion?.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(opt)}
                  disabled={!!feedback}
                  className={`group relative py-8 text-5xl font-kids rounded-3xl shadow-xl border-b-[10px] transition-all active:scale-90 active:border-b-0 active:translate-y-[10px] ${
                    feedback?.show && opt === currentQuestion.answer ? 'bg-green-400 border-green-600 text-white scale-105' : 
                    feedback?.show && opt !== currentQuestion.answer ? 'bg-stone-100 border-stone-200 text-stone-300 scale-95 opacity-50' :
                    'bg-white border-orange-100 hover:bg-orange-50 text-stone-700 hover:-translate-y-2'
                  }`}
                >
                  {opt}
                  {feedback?.show && opt === currentQuestion.answer && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-6xl animate-bounce">🥕</div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 視覺反饋 */}
          {feedback?.show && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-[2px] z-50 pointer-events-none">
              <div className="flex flex-col items-center">
                 <div className={`text-[12rem] transition-all duration-300 transform ${feedback.isCorrect ? 'scale-125 rotate-0' : 'scale-100 rotate-12'} animate-bounce`}>
                    {feedback.isCorrect ? '✨🥕✨' : '🐰💨'}
                 </div>
                 <div className="text-4xl font-kids text-orange-600 bg-white/90 px-8 py-3 rounded-full shadow-2xl border-4 border-orange-100 -mt-8">
                    {feedback.isCorrect ? '好厲害！挖到了！' : '哎呀，再試一次！'}
                 </div>
              </div>
            </div>
          )}
        </div>

        {/* 底部目錄與分數 */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => switchSection(GameSection.PART_ONE)}
              className={`py-5 rounded-2xl font-kids text-2xl transition-all border-4 flex flex-col items-center justify-center shadow-lg ${gameState.currentSection === GameSection.PART_ONE ? 'bg-orange-500 text-white border-orange-400 scale-95 shadow-inner' : 'bg-white text-orange-600 border-orange-50 hover:bg-orange-50'}`}
            >
              <span className="text-3xl mb-1">🌲</span>
              漢字森林
            </button>
            <button 
              onClick={() => switchSection(GameSection.PART_TWO)}
              className={`py-5 rounded-2xl font-kids text-2xl transition-all border-4 flex flex-col items-center justify-center shadow-lg ${gameState.currentSection === GameSection.PART_TWO ? 'bg-orange-500 text-white border-orange-400 scale-95 shadow-inner' : 'bg-white text-orange-600 border-orange-50 hover:bg-orange-50'}`}
            >
              <span className="text-3xl mb-1">🌽</span>
              拼音田野
            </button>
          </div>

          <div className="flex justify-center">
              <div className="bg-white/90 px-10 py-3 rounded-full border-4 border-orange-50 shadow-md flex items-center space-x-6">
                 <span className="text-4xl">🧺</span>
                 <span className="text-2xl font-kids text-stone-600">小兔籃子已裝：<span className="text-4xl font-bold text-orange-500">{gameState.score}</span> 根</span>
              </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSummary = () => (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-12 animate-fade-in">
      <h2 className="text-8xl font-kids text-orange-600 drop-shadow-xl animate-bounce">太棒啦！🎉</h2>
      
      <div className="relative">
         <div className="absolute -inset-6 bg-white rounded-[4rem] border-8 border-orange-50 shadow-2xl animate-pulse"></div>
         <div className="relative z-10 p-10 flex flex-col items-center">
           <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Lucky&backgroundColor=b6e3f4" alt="Happy Bunny" className="w-72 h-72 rounded-[3.5rem] shadow-lg border-8 border-white animate-wiggle" />
           <div className="mt-8 bg-orange-600 text-white px-16 py-6 rounded-full shadow-2xl flex items-center space-x-6 border-4 border-white">
              <span className="text-6xl">🥕</span>
              <span className="text-7xl font-kids">x {gameState.score}</span>
           </div>
         </div>
      </div>

      <p className="text-3xl text-stone-600 leading-relaxed font-kids bg-white/60 p-10 rounded-[3rem] shadow-sm max-w-xl">
        有了你的幫忙，小兔挖到了好多胡蘿蔔！<br/>
        他是森林裡最幸福的小兔子！🥕✨
      </p>

      <div className="flex space-x-8">
        <button 
          onClick={startGame}
          className="px-16 py-8 bg-green-500 hover:bg-green-600 text-white rounded-full text-4xl font-kids transition-all shadow-[0_12px_0_rgb(22,101,52)] active:translate-y-2 active:shadow-none"
        >
          重新開始
        </button>
        <button 
          onClick={() => switchSection(gameState.currentSection === GameSection.PART_ONE ? GameSection.PART_TWO : GameSection.PART_ONE)}
          className="px-16 py-8 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-4xl font-kids transition-all shadow-[0_12px_0_rgb(194,65,12)] active:translate-y-2 active:shadow-none"
        >
          挑戰另一關
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen max-w-5xl mx-auto flex flex-col bg-farm relative selection:bg-orange-100">
      {/* 背景裝飾 */}
      <div className="fixed top-20 left-10 text-8xl opacity-10 animate-float pointer-events-none">☁️</div>
      <div className="fixed top-60 right-20 text-9xl opacity-10 animate-float pointer-events-none" style={{animationDelay: '2s'}}>☁️</div>
      <div className="fixed bottom-40 left-20 text-7xl opacity-5 animate-wiggle pointer-events-none">🌼</div>

      <header className="py-8 px-12 flex justify-between items-center relative z-20">
        <div className="flex items-center space-x-5 group cursor-default">
          <div className="bg-white p-3 rounded-[2rem] shadow-xl border-4 border-orange-50 rotate-[-10deg] group-hover:rotate-0 transition-transform duration-500">
            <span className="text-6xl block group-hover:scale-110 transition-transform">🐰</span>
          </div>
          <span className="text-5xl font-kids text-orange-600 tracking-wider drop-shadow-sm">小兔挖蘿蔔</span>
        </div>
        <div className="bg-white/80 px-8 py-3 rounded-full text-stone-500 font-kids shadow-lg text-xl border-2 border-orange-100 font-bold">
           ✨ 五下ch.1-ch.2
        </div>
      </header>

      <main className="flex-1 overflow-hidden relative z-10">
        {gameState.currentSection === GameSection.INTRO && renderIntro()}
        {(gameState.currentSection === GameSection.PART_ONE || gameState.currentSection === GameSection.PART_TWO) && renderGame()}
        {gameState.currentSection === GameSection.SUMMARY && renderSummary()}
      </main>

      {/* 底部草地 */}
      <div className="fixed bottom-0 left-0 w-full h-40 bg-gradient-to-t from-green-200/40 to-transparent -z-10 flex items-end justify-around pointer-events-none px-12 overflow-hidden">
         {[...Array(12)].map((_, i) => (
           <div key={i} className={`text-7xl mb-${i % 3 === 0 ? '10' : i % 3 === 1 ? '5' : '2'} opacity-30 animate-float`} style={{ animationDelay: `${i * 0.4}s` }}>
             {i % 4 === 0 ? '🌿' : i % 4 === 1 ? '🌼' : i % 4 === 2 ? '🥕' : '🍀'}
           </div>
         ))}
      </div>
    </div>
  );
};

export default App;
