import React, { useState, useEffect, useRef } from 'react';
import { AlertCircle, CheckCircle2, Zap, Shield, TrendingUp, Loader, History, Trash2, LogOut, RefreshCw, Mail, Lock, User, ArrowRight, Copy, Trash } from 'lucide-react';

// ==================== LOGIN PAGE COMPONENT ====================
const LoginPage = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('demo@jobshield.ai');
  const [password, setPassword] = useState('demo123');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (!email || !password || (!isLogin && !name)) {
        setError('Please fill in all fields');
        setLoading(false);
        return;
      }

      if (!email.includes('@')) {
        setError('Please enter a valid email');
        setLoading(false);
        return;
      }

      if (password.length < 6) {
        setError('Password must be at least 6 characters');
        setLoading(false);
        return;
      }

      const userData = {
        id: Math.random().toString(36).substr(2, 9),
        name: name || email.split('@')[0],
        email,
        loginTime: new Date().toISOString(),
      };

      localStorage.setItem('jobshield_user', JSON.stringify(userData));
      localStorage.setItem('jobshield_history', JSON.stringify([]));
      setLoading(false);
      onLoginSuccess(userData);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden flex items-center justify-center">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50">
              <Shield className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-4xl font-black tracking-tighter bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            JobShield AI
          </h1>
          <p className="text-sm text-blue-200 font-medium">Protect Yourself from Fake Job Offers</p>
        </div>

        <div className="rounded-3xl bg-slate-800/30 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => {
                setIsLogin(true);
                setError('');
                setName('');
              }}
              className={`flex-1 py-3 rounded-xl font-bold transition-all duration-300 ${
                isLogin
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50'
                  : 'bg-slate-700/50 text-gray-400 hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => {
                setIsLogin(false);
                setError('');
              }}
              className={`flex-1 py-3 rounded-xl font-bold transition-all duration-300 ${
                !isLogin
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50'
                  : 'bg-slate-700/50 text-gray-400 hover:text-white'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-blue-200 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-700/50 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-500 transition-all duration-300 outline-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-blue-200 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-700/50 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-500 transition-all duration-300 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-blue-200 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-700/50 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-500 transition-all duration-300 outline-none"
                />
              </div>
              {!isLogin && (
                <p className="text-xs text-gray-400 mt-2">Must be at least 6 characters</p>
              )}
            </div>

            {error && (
              <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-200 text-sm font-medium">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-6 rounded-xl font-bold text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <span>{isLogin ? 'Login' : 'Create Account'}</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
            <p className="text-xs text-blue-200 font-medium mb-2">Demo Credentials:</p>
            <p className="text-xs text-blue-300">Email: demo@jobshield.ai</p>
            <p className="text-xs text-blue-300">Password: demo123</p>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          Your job posting safety is our priority
        </p>
      </div>
    </div>
  );
};

// ==================== MAIN DETECTOR COMPONENT ====================
const JobDetector = ({ user, onLogout }) => {
  const [jobText, setJobText] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [animationKey, setAnimationKey] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const savedHistory = localStorage.getItem('jobshield_history');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('jobshield_history', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const riskIndicators = [
    { text: 'Vague job title or description', color: 'from-red-500' },
    { text: 'Unrealistic salary promises', color: 'from-red-500' },
    { text: 'Spelling and grammar errors', color: 'from-orange-500' },
    { text: 'Missing company details', color: 'from-orange-500' },
    { text: 'Immediate high pay for entry-level', color: 'from-red-500' },
    { text: 'Work from home with no experience needed', color: 'from-orange-500' },
    { text: 'Urgent hiring pressure', color: 'from-red-500' },
    { text: 'Payment required upfront', color: 'from-red-600' },
  ];

 const analyzeJob = async () => {
  if (!jobText.trim()) return;

  setLoading(true);
  setAnimationKey(prev => prev + 1);

  try {
    const text = jobText.toLowerCase();
    let riskScore = 0;
    let redFlags = [];
    let greenFlags = [];

    if (text.includes('urgent hiring')) {
      riskScore += 20;
      redFlags.push('Urgent hiring pressure');
    }

    if (text.includes('work from home') && text.includes('no experience')) {
      riskScore += 20;
      redFlags.push('Unrealistic work-from-home offer');
    }

    if (text.includes('registration fee') || text.includes('payment')) {
      riskScore += 30;
      redFlags.push('Payment required upfront');
    }

    if (text.includes('whatsapp only')) {
      riskScore += 15;
      redFlags.push('Only WhatsApp contact');
    }

    if (text.includes('₹') || text.includes('salary')) {
      if (text.includes('75000') || text.includes('100000')) {
        riskScore += 20;
        redFlags.push('Unrealistic salary promise');
      }
    }

    if (text.includes('company website')) {
      greenFlags.push('Company details mentioned');
    }

    let verdict = 'LEGITIMATE';
    let confidence = 85;

    if (riskScore >= 40) {
      verdict = 'LIKELY SCAM';
      confidence = 95;
    } else if (riskScore >= 20) {
      verdict = 'SUSPICIOUS';
      confidence = 80;
    }

    const result = {
      riskScore,
      verdict,
      analysis:
        verdict === 'LIKELY SCAM'
          ? 'Multiple scam warning signs detected.'
          : verdict === 'SUSPICIOUS'
          ? 'Some suspicious indicators found.'
          : 'This looks relatively safe.',
      redFlags,
      greenFlags,
      confidence
    };

    setAnalysis(result);

    const historyEntry = {
      id: Date.now().toString(),
      jobPreview: jobText.substring(0, 100),
      fullJob: jobText,
      verdict: result.verdict,
      riskScore: result.riskScore,
      analysis: result,
      timestamp: new Date(),
      date: new Date().toLocaleDateString()
    };

    setSearchHistory(prev => [historyEntry, ...prev].slice(0, 50));

  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  const handleRefresh = () => {
    setJobText('');
    setAnalysis(null);
    setAnimationKey(prev => prev + 1);
    inputRef.current?.focus();
  };

  const loadHistoryItem = (item) => {
    setJobText(item.fullJob);
    setAnalysis(item.analysis);
    setShowHistory(false);
    setAnimationKey(prev => prev + 1);
  };

  const deleteHistoryItem = (id) => {
    setSearchHistory(prev => prev.filter(item => item.id !== id));
  };

  const clearAllHistory = () => {
    if (window.confirm('Are you sure you want to clear all history?')) {
      setSearchHistory([]);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const getVerdictColor = (verdict) => {
    switch (verdict) {
      case 'LEGITIMATE':
        return 'from-green-500 to-emerald-600';
      case 'SUSPICIOUS':
        return 'from-yellow-500 to-orange-500';
      case 'LIKELY_SCAM':
        return 'from-red-500 to-red-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getRiskText = (score) => {
    if (score < 20) return 'Very Low Risk';
    if (score < 40) return 'Low Risk';
    if (score < 60) return 'Medium Risk';
    if (score < 80) return 'High Risk';
    return 'Critical Risk';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/10 backdrop-blur-xl bg-slate-900/30 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-black tracking-tighter bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    JobShield AI
                  </h1>
                  <p className="text-xs text-blue-200 font-medium">Welcome, {user.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="p-3 rounded-xl bg-slate-700/50 border border-white/10 hover:border-blue-500/50 hover:bg-slate-700 transition-all duration-300 relative group"
                >
                  <History className="w-5 h-5 text-blue-400" />
                  {searchHistory.length > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-xs font-bold flex items-center justify-center text-white">
                      {searchHistory.length > 9 ? '9+' : searchHistory.length}
                    </span>
                  )}
                </button>

                <button
                  onClick={handleRefresh}
                  className="p-3 rounded-xl bg-slate-700/50 border border-white/10 hover:border-blue-500/50 hover:bg-slate-700 transition-all duration-300 hover:rotate-180 hover:scale-110"
                >
                  <RefreshCw className="w-5 h-5 text-green-400" />
                </button>

                <button
                  onClick={onLogout}
                  className="p-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 border border-white/10 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* History Sidebar */}
        {showHistory && (
          <div className="fixed inset-0 z-40">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowHistory(false)} />
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-slate-800 border-l border-white/10 shadow-2xl flex flex-col animate-in slide-in-from-right">
              <div className="border-b border-white/10 p-6 bg-slate-900/50">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <History className="w-5 h-5 text-blue-400" />
                    Search History
                  </h2>
                  <button
                    onClick={() => setShowHistory(false)}
                    className="text-gray-400 hover:text-white transition-colors text-lg"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-xs text-gray-400">{searchHistory.length} searches found</p>
              </div>

              <div className="flex-1 overflow-y-auto">
                {searchHistory.length > 0 ? (
                  <div className="p-4 space-y-3">
                    {searchHistory.map((item) => (
                      <div
                        key={item.id}
                        className="group p-4 rounded-xl bg-slate-700/30 border border-white/10 hover:border-white/20 transition-all hover:bg-slate-700/50"
                      >
                        <div
                          onClick={() => loadHistoryItem(item)}
                          className="space-y-2 cursor-pointer"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                              item.verdict === 'LEGITIMATE' ? 'bg-green-500/20 text-green-300' :
                              item.verdict === 'SUSPICIOUS' ? 'bg-yellow-500/20 text-yellow-300' :
                              'bg-red-500/20 text-red-300'
                            }`}>
                              {item.verdict === 'LEGITIMATE' ? 'LEGIT' : 
                               item.verdict === 'SUSPICIOUS' ? 'SUSPICIOUS' : 
                               'SCAM'}
                            </span>
                            <span className="text-xs text-gray-500 font-medium">
                              {item.riskScore}% risk
                            </span>
                          </div>

                          <p className="text-xs text-gray-300 line-clamp-2">
                            {item.jobPreview}
                          </p>

                          <p className="text-xs text-gray-500">
                            {item.date}
                          </p>
                        </div>

                        <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => copyToClipboard(item.fullJob)}
                            className="flex-1 p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 transition-colors text-xs font-medium flex items-center justify-center gap-1"
                          >
                            <Copy className="w-3 h-3" />
                            Copy
                          </button>
                          <button
                            onClick={() => deleteHistoryItem(item.id)}
                            className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 transition-colors"
                          >
                            <Trash className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <p className="text-sm text-center px-4">No search history yet. Start analyzing!</p>
                  </div>
                )}
              </div>

              {searchHistory.length > 0 && (
                <div className="border-t border-white/10 p-4 bg-slate-900/50">
                  <button
                    onClick={clearAllHistory}
                    className="w-full py-2 px-4 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 transition-all duration-300 text-sm font-bold flex items-center justify-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Clear All History
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-blue-200 mb-3">
                    Paste the job posting here
                  </label>
                  <textarea
                    ref={inputRef}
                    value={jobText}
                    onChange={(e) => setJobText(e.target.value)}
                    placeholder="Paste the complete job posting text here... The AI will analyze it for red flags, suspicious patterns, and potential scams."
                    className="w-full h-64 p-6 rounded-2xl bg-slate-800/50 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300 backdrop-blur-xl"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={analyzeJob}
                    disabled={!jobText.trim() || loading}
                    className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${
                      loading
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 shadow-lg'
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5" />
                        Analyze with AI
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleRefresh}
                    disabled={!jobText && !analysis}
                    className="py-4 px-6 rounded-xl font-bold bg-slate-700/50 border border-white/10 hover:border-green-500/50 hover:bg-slate-700 transition-all duration-300 hover:rotate-180 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Risk indicators */}
              <div className="rounded-2xl bg-slate-800/30 border border-white/10 p-6 backdrop-blur-xl">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-orange-400" />
                  Common Red Flags We Detect
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {riskIndicators.map((indicator, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-all group cursor-pointer">
                      <div className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${indicator.color} flex-shrink-0`} />
                      <p className="text-xs text-gray-300 group-hover:text-white transition-colors">{indicator.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Results section */}
            <div className="lg:col-span-1">
              {analysis ? (
                <div key={animationKey} className="space-y-4 animate-in fade-in slide-in-from-right duration-500">
                  <div className={`rounded-2xl bg-gradient-to-br ${getVerdictColor(analysis.verdict)} p-6 shadow-xl overflow-hidden relative`}>
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%)',
                    }} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        {analysis.verdict === 'LEGITIMATE' ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          <AlertCircle className="w-6 h-6" />
                        )}
                        <span className="text-sm font-bold opacity-90">VERDICT</span>
                      </div>
                      <p className="text-2xl font-black tracking-tight mb-3">
                        {analysis.verdict === 'LEGITIMATE' ? 'LIKELY LEGIT' : analysis.verdict === 'SUSPICIOUS' ? 'SUSPICIOUS' : 'LIKELY SCAM'}
                      </p>
                      <p className="text-sm opacity-90 font-medium">Confidence: {analysis.confidence}%</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6 backdrop-blur-xl">
                    <p className="text-xs font-semibold text-gray-400 mb-3">RISK SCORE</p>
                    <div className="mb-3">
                      <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 transition-all duration-500"
                          style={{ width: `${analysis.riskScore}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-black">{analysis.riskScore}</p>
                      <p className={`text-xs font-bold px-3 py-1 rounded-full ${
                        analysis.riskScore < 20 ? 'bg-green-500/20 text-green-300' :
                        analysis.riskScore < 60 ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {getRiskText(analysis.riskScore)}
                      </p>
                    </div>
                  </div>

                  {analysis.redFlags && analysis.redFlags.length > 0 && (
                    <div className="rounded-2xl bg-red-950/20 border border-red-500/30 p-5 backdrop-blur-xl">
                      <p className="text-xs font-bold text-red-300 mb-3 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        RED FLAGS ({analysis.redFlags.length})
                      </p>
                      <ul className="space-y-2">
                        {analysis.redFlags.slice(0, 4).map((flag, idx) => (
                          <li key={idx} className="flex gap-2 text-xs text-red-200">
                            <span className="text-red-400 font-bold">→</span>
                            {flag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {analysis.greenFlags && analysis.greenFlags.length > 0 && (
                    <div className="rounded-2xl bg-green-950/20 border border-green-500/30 p-5 backdrop-blur-xl">
                      <p className="text-xs font-bold text-green-300 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        POSITIVE SIGNS ({analysis.greenFlags.length})
                      </p>
                      <ul className="space-y-2">
                        {analysis.greenFlags.slice(0, 3).map((flag, idx) => (
                          <li key={idx} className="flex gap-2 text-xs text-green-200">
                            <span className="text-green-400 font-bold">✓</span>
                            {flag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="rounded-2xl bg-blue-950/20 border border-blue-500/30 p-5 backdrop-blur-xl">
                    <p className="text-xs font-bold text-blue-300 mb-3">DETAILED ANALYSIS</p>
                    <p className="text-sm text-blue-100 leading-relaxed">{analysis.analysis}</p>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-white/10 p-8 backdrop-blur-xl flex flex-col items-center justify-center h-full min-h-96">
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4 opacity-50" />
                    <p className="text-gray-400 font-medium">Paste a job posting to get started</p>
                    <p className="text-xs text-gray-500 mt-2">Our AI will analyze it instantly using</p>
                    <p className="text-xs text-gray-500">advanced NLP & pattern detection</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Features section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Advanced AI Detection', desc: 'Machine learning models trained on thousands of job postings' },
              { icon: Zap, title: 'Instant Analysis', desc: 'Get results in seconds with real-time NLP processing' },
              { icon: TrendingUp, title: 'Risk Scoring', desc: 'Comprehensive scoring system for accurate threat assessment' },
            ].map((feature, idx) => (
              <div key={idx} className="rounded-2xl bg-slate-800/30 border border-white/10 p-6 backdrop-blur-xl hover:border-white/20 transition-all group">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 w-fit mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 backdrop-blur-xl bg-slate-900/30 mt-16">
          <div className="max-w-7xl mx-auto px-6 py-8 text-center">
            <p className="text-sm text-gray-400">
              JobShield AI • Protecting job seekers with AI-powered analysis • <span className="text-blue-400 font-medium">Never pay upfront for a job</span>
            </p>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes slide-in-from-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-in {
          animation: fade-in 0.5s ease-out, slide-in-from-right 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

// ==================== MAIN APP ====================
const App = () => {
  const [user, setUser] = useState(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('jobshield_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('jobshield_user');
      }
    }
    setIsChecking(false);
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('jobshield_user');
      setUser(null);
    }
  };

  if (isChecking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-blue-200 font-medium">Loading JobShield AI...</p>
        </div>
      </div>
    );
  }

  return user ? (
    <JobDetector user={user} onLogout={handleLogout} />
  ) : (
    <LoginPage onLoginSuccess={handleLoginSuccess} />
  );
};

export default App;