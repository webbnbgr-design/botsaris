import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-noir/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-label">Ανώτατη Νομική Εκπροσώπηση</span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-noir">
            Υπεράσπιση <br />
            <span className="italic font-normal text-ash">με Κύρος &</span><br />
            Ευστοχία.
          </h1>
          <p className="text-lg text-ash mb-10 max-w-lg leading-relaxed font-light">
            Δικηγορικό γραφείο παρ' Αρείω Πάγω με έδρα την Πάτρα. Εξειδικευμένη εμπειρία σε σύνθετες ποινικές και αστικές υποθέσεις σε κάθε βαθμίδα της δικαιοσύνης.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:6945690514"
              className="bg-noir text-white px-8 py-4 rounded-sm font-semibold tracking-wide hover:bg-bronze transition-all flex items-center gap-3 shadow-xl shadow-noir/20"
            >
              ΕΠΕΙΓΟΥΣΑ ΝΟΜΙΚΗ ΒΟΗΘΕΙΑ
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#profile"
              className="border border-noir/20 text-noir px-8 py-4 rounded-sm font-semibold tracking-wide hover:bg-noir/5 transition-all"
            >
              ΤΟ ΠΡΟΦΙΛ ΜΑΣ
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="aspect-[4/5] bg-noir relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-40" />
            <div className="absolute inset-0 border-[20px] border-white/10" />
            
            <div className="absolute bottom-10 left-10 text-white">
              <div className="text-4xl font-serif font-bold mb-1">Πάτρα</div>
              <div className="text-xs uppercase tracking-[0.3em] font-medium opacity-70">Ιωάννου Βλάχου 1</div>
            </div>
          </div>
          
          {/* Experience Badge */}
          <div className="absolute -top-6 -right-6 bg-bronze p-8 text-white shadow-xl rotate-3">
            <div className="text-xs uppercase tracking-widest font-bold mb-1 opacity-80">Representation</div>
            <div className="text-xl font-serif font-bold leading-tight">SUPREME <br />COURT</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
