import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, Play, CheckCircle2, Loader2, Image as ImageIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface InteractiveDemoProps {
  language: 'ko' | 'en';
}

export default function InteractiveDemo({ language }: InteractiveDemoProps) {
  const [selectedSample, setSelectedSample] = useState<'image' | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const content = {
    ko: {
      title: '실시간 AI 데모',
      subtitle: 'Purple AI의 강력한 성능을 직접 체험해보세요',
      selectSample: '샘플 선택',
      imageAnalysis: '이미지 분석',
      runAnalysis: 'AI 분석 실행',
      analyzing: '분석 중...',
      results: '분석 결과',
      before: '원본',
      after: '분석본',
      detected: '검출된 객체',
      confidence: '신뢰도',
      brain: '뇌',
      hemorrhage: '뇌출혈 영역',
      accuracy: '정확도',
    },
    en: {
      title: 'Real-time AI Demo',
      subtitle: 'Experience the power of Purple AI firsthand',
      selectSample: 'Select Sample',
      imageAnalysis: 'Image Analysis',
      runAnalysis: 'Run AI Analysis',
      analyzing: 'Analyzing...',
      results: 'Analysis Results',
      before: 'Original',
      after: 'Analyzed',
      detected: 'Detected Objects',
      confidence: 'Confidence',
      brain: 'Brain',
      hemorrhage: 'Hemorrhage Area',
      accuracy: 'Accuracy',
    },
  };

  const t = content[language];

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  const handleReset = () => {
    setSelectedSample(null);
    setShowResults(false);
    setIsAnalyzing(false);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-xl text-white/60">{t.subtitle}</p>
        </motion.div>

        {/* Demo Interface */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left: Demo Execution */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-[#1a1a2e]/40 backdrop-blur-xl border-purple-500/20 shadow-2xl">
              <h3 className="text-2xl mb-6 text-white">{t.selectSample}</h3>
              
              {/* Sample Selection */}
              <div className="flex justify-center mb-8">
                <button
                  onClick={() => {
                    setSelectedSample('image');
                    setShowResults(false);
                  }}
                  className={`p-6 rounded-2xl border-2 transition-all max-w-xs w-full ${
                    selectedSample === 'image'
                      ? 'border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/50'
                      : 'border-white/10 bg-white/5 hover:border-purple-500/50'
                  }`}
                >
                  <ImageIcon className="w-12 h-12 mx-auto mb-3 text-purple-400" />
                  <div className="text-white">{t.imageAnalysis}</div>
                  <div className="text-sm text-white/50 mt-1">Brain CT</div>
                </button>
              </div>

              {/* Sample Preview */}
              {selectedSample && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-8"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full bg-gray-900 flex items-center justify-center">
                      <div className="text-white/30">Brain CT Sample DICOM</div>
                      {/* Simulated brain scan */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-gray-500 to-gray-700" />
                        <div className="absolute top-1/2 left-1/3 w-12 h-12 rounded-full bg-red-500/60 blur-sm" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Run Analysis Button */}
              <Button
                onClick={handleAnalyze}
                disabled={!selectedSample || isAnalyzing}
                className="w-full py-6 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white shadow-lg transition-all"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    {t.analyzing}
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    {t.runAnalysis}
                  </>
                )}
              </Button>
            </Card>
          </motion.div>

          {/* Right: Results Viewer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-[#1a1a2e]/40 backdrop-blur-xl border-cyan-500/20 shadow-2xl min-h-full">
              <h3 className="text-2xl mb-6 text-white">{t.results}</h3>
              
              <AnimatePresence mode="wait">
                {isAnalyzing ? (
                  <motion.div
                    key="analyzing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center h-96"
                  >
                    <div className="text-center">
                      <Loader2 className="w-16 h-16 animate-spin text-purple-500 mx-auto mb-4" />
                      <p className="text-white/60">{t.analyzing}</p>
                      <div className="mt-8 space-y-2">
                        {['Preprocessing...', 'Running AI Model...', 'Analyzing Results...'].map((step, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.8 }}
                            className="text-sm text-purple-400"
                          >
                            {step}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : showResults ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-6"
                  >
                    {/* Before/After Comparison */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-white/60 mb-2">{t.before}</div>
                        <div className="aspect-square bg-gray-900 rounded-xl border border-white/10 flex items-center justify-center">
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-500 to-gray-700" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-white/60 mb-2">{t.after}</div>
                        <div className="aspect-square bg-gray-900 rounded-xl border border-cyan-500/30 flex items-center justify-center overflow-hidden">
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-500 to-gray-700" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/4 w-12 h-12 rounded-full bg-red-500/80 border-2 border-cyan-400 shadow-lg shadow-cyan-500/50" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Detection Results */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                        <span className="text-white">{t.hemorrhage}</span>
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      </div>
                      
                      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/80">{t.confidence}</span>
                          <span className="text-cyan-400">94.7%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '94.7%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
                          />
                        </div>
                      </div>

                      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/80">{t.accuracy}</span>
                          <span className="text-purple-400">98.2%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '98.2%' }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                          />
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="w-full border-white/20 hover:bg-white/5"
                    >
                      Try Another Sample
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center h-96"
                  >
                    <div className="text-center text-white/40">
                      <Upload className="w-16 h-16 mx-auto mb-4" />
                      <p>샘플을 선택하고 분석을 실행해주세요</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
