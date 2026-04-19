/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Brain, Layers, Zap, Code, Sparkles, ChevronLeft } from "lucide-react";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: "تفكير منطقي عميق",
      desc: "قدرات غير مسبوقة في حل المشكلات المعقدة والتحليل الرياضي بفضل نماذج أحدث وأكثر ذكاءً."
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-400" />,
      title: "متعدد الوسائط",
      desc: "يفهم ويتفاعل مع النصوص، الصور، الصوت، والفيديو في نفس الوقت بصورة طبيعية وسلسة."
    },
    {
      icon: <Zap className="w-8 h-8 text-pink-400" />,
      title: "استجابة فائقة السرعة",
      desc: "زمن انتقال شبه معدوم، مما يجعله مثالياً للاستخدامات المباشرة وتطبيقات الوقت الفعلي."
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-400" />,
      title: "مساعد برمجي خبير",
      desc: "كتابة، مراجعة، وتصحيح الأكواد البرمجية بكفاءة عالية وبدعم لغات برمجة متعددة."
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 text-white mesh-gradient relative font-segoe selection:bg-indigo-500/30">
      {/* Floating Orbs */}
      <div className="floating-orb w-64 h-64 md:w-[400px] md:h-[400px] bg-indigo-600 top-[-100px] left-[-50px]"></div>
      <div className="floating-orb w-80 h-80 md:w-[500px] md:h-[500px] bg-blue-600 bottom-[-100px] right-[-50px]"></div>

      {/* Navigation */}
      <nav className="relative z-10 p-8 flex justify-between items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 font-bold text-2xl tracking-tighter"
        >
          <Sparkles className="text-pink-400 w-6 h-6" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Gemini 3.1</span>
        </motion.div>
        
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
        >
          اكتشف المزيد <ChevronLeft className="w-4 h-4" />
        </motion.a>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 lg:pt-32 pb-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block px-4 py-1.5 mb-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-wide uppercase"
          >
            الإصدار الأقوى والأحدث متاح الآن
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tight glow-text leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-500 py-2"
          >
            المستقبل يبدأ مع <br className="md:hidden" />
            Gemini 3.1
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed pt-2"
          >
            اكتشف الجيل الجديد من الذكاء الاصطناعي متعدد الوسائط. تفكير أعمق، أداء أسرع، وإمكانيات لا حدود لها للإبداع والإنتاجية.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
          >
            <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-colors shadow-xl shadow-white/10">
              ابدأ الاستخدام مجاناً
            </button>
            <button className="px-10 py-4 glass-card text-white font-bold rounded-full hover:bg-white/5 transition-colors">
              قراءة التوثيق
            </button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 rounded-2xl text-right transition-transform cursor-default"
            >
              <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
