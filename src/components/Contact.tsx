import { MapPin, Phone, Clock, Gavel } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="bg-noir text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 mb-24">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Gavel className="w-8 h-8 text-bronze" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl leading-tight tracking-tight">Δ. Γ. ΜΠΟΤΣΑΡΗΣ</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold">Δικηγόρος παρ' Αρείω Πάγω</span>
              </div>
            </div>
            <p className="text-white/60 font-light leading-relaxed mb-8 max-w-sm">
              Παρέχουμε υψηλού επιπέδου νομικές υπηρεσίες με απόλυτη εχεμύθεια, επαγγελματισμό και προσήλωση στο συμφέρον του εντολέα μας.
            </p>
            <div className="flex gap-4">
              <a href="tel:6945690514" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-bronze uppercase tracking-[0.2em] text-xs font-bold mb-8">Στοιχεία Επικοινωνίας</h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <MapPin className="w-5 h-5 text-bronze flex-shrink-0" />
                  <div>
                    <div className="font-bold mb-1">Διεύθυνση</div>
                    <div className="text-white/60 text-sm">Ιωάννου Βλάχου 1, 262 21<br />Πάτρα (Κέντρο)</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="w-5 h-5 text-bronze flex-shrink-0" />
                  <div>
                    <div className="font-bold mb-1">Τηλέφωνο</div>
                    <div className="text-white/60 text-sm">6945690514</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="w-5 h-5 text-bronze flex-shrink-0" />
                  <div>
                    <div className="font-bold mb-1">Ωράριο Λειτουργίας</div>
                    <div className="text-white/60 text-sm">Δευτέρα - Παρασκευή: 09:00 - 21:00<br />(Κατόπιν Ραντεβού)</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 p-8 border border-white/10">
              <h4 className="text-bronze uppercase tracking-[0.2em] text-xs font-bold mb-6">Άμεση Βοήθεια</h4>
              <p className="text-sm text-white/60 mb-8 leading-relaxed">
                Σε περίπτωση επείγουσας νομικής ανάγκης, παρακαλούμε καλέστε απευθείας στο κινητό τηλέφωνο για άμεση υποστήριξη.
              </p>
              <a 
                href="tel:6945690514" 
                className="block text-center bg-bronze text-noir py-4 font-bold tracking-widest text-xs uppercase hover:bg-[#D4B68D] transition-colors"
              >
                ΚΛΗΣΗ ΤΩΡΑ: 6945690514
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/40 font-medium">
          <div>© 2024 ΔΗΜΗΤΡΙΟΣ Γ. ΜΠΟΤΣΑΡΗΣ. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
