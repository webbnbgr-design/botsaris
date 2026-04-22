import { motion } from 'motion/react';
import { ShieldCheck, Users, Home, Scale } from 'lucide-react';

const specialties = [
  {
    title: 'Ποινικό Δίκαιο',
    icon: ShieldCheck,
    description: 'Εξειδίκευση σε απάτη, ψευδή κατάθεση, απειλές/εξύβριση και επικίνδυνη σωματική βλάβη.',
    focus: 'Eνδοοικογενειακή Βία & Σοβαρά Αδικήματα',
    anchor: 'criminal'
  },
  {
    title: 'Αστικό Δίκαιο',
    icon: Users,
    description: 'Οικογενειακό (Διαζύγια, Διατροφή, Επικοινωνία) και Μισθωτικές Διαφορές.',
    focus: 'Απόδοση Μισθίου & Οικογενειακές Λύσεις',
    anchor: 'civil'
  },
  {
    title: 'Εμπράγματο Δίκαιο',
    icon: Home,
    description: 'Προστασία πρώτης κατοικίας και αναστολές πλειστηριασμών.',
    focus: 'Αναστολές Εκτέλεσης & Αγώγες Αποζημίωσης',
    anchor: 'property'
  },
  {
    title: 'Υποθέσεις Αρείου Πάγου',
    icon: Scale,
    description: 'Νομική εκπροσώπηση στο ανώτατο ακυρωτικό δικαστήριο της χώρας.',
    focus: 'Αναιρέσεις & Σύνθετες Νομικές Προκλήσεις',
    anchor: 'supreme'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white" id="specialties">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="section-label">Τομείς Εξειδίκευσης</span>
            <h2 className="text-4xl md:text-5xl font-bold text-noir">
              Ολοκληρωμένη Νομική <br />
              <span className="italic font-normal text-ash">Προστασία & Εκπροσώπηση.</span>
            </h2>
          </div>
          <p className="text-ash max-w-sm font-light leading-relaxed">
            Στρατηγική προσέγγιση σε κάθε υπόθεση με στόχο την αποτελεσματική και έγκριτη επίλυση των νομικών σας ζητημάτων.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              id={item.anchor}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-noir/10 hover:border-bronze transition-colors group bg-bone"
            >
              <item.icon className="w-10 h-10 text-noir mb-6 group-hover:text-bronze transition-colors" />
              <h3 className="text-xl font-bold mb-4 text-noir">{item.title}</h3>
              <p className="text-sm text-ash mb-6 leading-relaxed">
                {item.description}
              </p>
              <div className="text-[10px] uppercase tracking-widest font-bold text-bronze pt-6 border-t border-noir/5">
                {item.focus}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
