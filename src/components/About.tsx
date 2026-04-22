import { motion } from 'motion/react';
import { Award, Landmark, Building2 } from 'lucide-react';

export default function About() {
  return (
    <section id="profile" className="py-24 bg-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="section-label">Ο Δικηγόρος</span>
            <h2 className="text-4xl md:text-5xl font-bold text-noir mb-8">
              Δημήτριος Γ. Μπότσαρης
            </h2>
            
            <div className="space-y-8">
              <p className="text-lg text-ash leading-relaxed font-light italic">
                "Η δικαιοσύνη απαιτεί βαθιά γνώση, μαχητικότητα και απόλυτη προσήλωση στην αλήθεια."
              </p>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-noir/5 flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-noir" />
                </div>
                <div>
                  <h4 className="font-bold text-noir mb-2">Δικηγόρος παρ' Αρείω Πάγω</h4>
                  <p className="text-sm text-ash leading-relaxed">
                    Δυνατότητα εκπροσώπησης στο ανώτατο δικαστήριο, διασφαλίζοντας την αρτιότερη νομική αντιμετώπιση ακόμα και των πιο απαιτητικών υποθέσεων.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-noir/5 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-noir" />
                </div>
                <div>
                  <h4 className="font-bold text-noir mb-2">Νομικός Σύμβουλος Δήμου Πατρέων</h4>
                  <p className="text-sm text-ash leading-relaxed">
                    Πολυετής εμπειρία στη δημόσια διοίκηση, γεγονός που προσδίδει επιπλέον αξιοπιστία και γνώση στον χειρισμό υποθέσεων δημόσιου ενδιαφέροντος και διοικητικού δικαίου.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-noir/5 flex items-center justify-center">
                  <Award className="w-6 h-6 text-noir" />
                </div>
                <div>
                  <h4 className="font-bold text-noir mb-2">Εξειδίκευση σε Δύσκολες Υποθέσεις</h4>
                  <p className="text-sm text-ash leading-relaxed">
                    Αποδεδειγμένη εμπειρία σε υποθέσεις υψηλής δυσκολίας, από ποινικά αδικήματα έως περίπλοκες αστικές και οικογενειακές διαφορές.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-square bg-noir overflow-hidden rounded-sm shadow-2xl skew-y-3">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale opacity-60" />
                <div className="absolute inset-0 bg-noir/20" />
              </div>
              
              {/* Stats/Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl border-l-4 border-bronze"
              >
                <div className="text-4xl font-serif font-bold text-noir mb-1">Πάτρα</div>
                <p className="text-xs uppercase tracking-widest font-bold text-ash">ΚΕΝΤΡΟ & ΠΕΡΙΦΕΡΕΙΑ</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
