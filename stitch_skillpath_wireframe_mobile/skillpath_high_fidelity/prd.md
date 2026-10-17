# Product Requirements Document (PRD) — SkillPath AI

**Document Version:** 1.0.0  
**Status:** In Review / Baseline Proposal  
**Author:** Senior Product Manager  
**Project:** SkillPath AI (Mobile Learning & Habit Companion)  
**Date:** Maggio 2024  

---

## 1. Sintesi Esecutiva & Panoramica del Prodotto

### 1.1 Nome del Prodotto
**SkillPath AI**

### 1.2 Descrizione & Vision
SkillPath AI è un'applicazione mobile concepita per guidare e strutturare il percorso di auto-apprendimento per chi desidera acquisire competenze moderne (programmazione, intelligenza artificiale, web development, lingue). L'app trasforma l'apprendimento da un processo caotico e frammentato in un percorso progressivo, quantificabile e sostenibile, combinando:
- Piani di studio strutturati in tappe gestibili;
- Micro-obiettivi giornalieri a basso attrito cognitivo;
- Revisioni cicliche basate su ripetizione spaziata (*spaced repetition*);
- Un tutor conversazionale intelligente orientato al metodo socratico e all'analisi dell'errore, non alla semplice fornitura passiva di risposte.

### 1.3 Baseline di Progetto Esistente
Dall'analisi delle schermate e dei design system già presenti nel progetto:
- **Wireframe & UI ad Alta Fedeltà (Dashboard / Home):** Schermata mobile (390×844) che espone il saluto utente, la card di avanzamento aggregato (es. 68% - Settimana 3), la checklist degli obiettivi giornalieri con timer e stato di completamento, e la card contestuale per la prosecuzione rapida dello studio (*"Continua a imparare — Funzioni in JavaScript"* con CTA *"Riprendi lezione"*).
- **Profilo & Statistiche:** Schermata dedicata con metriche di costanza (ore totali, lezioni completate, streak giorni, badge competenze, grafico andamento mensile e traguardi sbloccati).
- **Impostazioni & Account:** Schermata di configurazione preferenze, notifiche, gestione abbonamento e impostazioni AI.
- **Design System attivo:** Palette chiara moderna (Sfondo `#F8FAFC`, Primario `#4F46E5`, Accento/Success `#14B8A6`, Testo principale `#111827`, Testo secondario `#64748B`, font Inter, angoli arrotondati e bordi delicati).

---

## 2. Problema da Risolvere & Proposta di Valore

| Problema Identificato | Impatto sull'Utente | Soluzione SkillPath AI |
|---|---|---|
| **Disorientamento iniziale** | L'utente non sa da quale argomento partire e si disperde tra tutorial disconnessi. | Percorsi di apprendimento sequenziali e progressivi suddivisi in moduli e micro-lezioni. |
| **Cattiva gestione del tempo** | Sessioni irregolari e senso di sopraffazione. | Obiettivi giornalieri mirati e cronometrati (es. 10-20 min/attività) con stima realistica del tempo. |
| **Curva dell'oblio** | Le nozioni apprese evaporano dopo poche settimane. | Algoritmo di ripasso dilazionato (*spaced repetition*) integrato con notifiche mirate e quiz rapidi. |
| **Incapacità di diagnosticare gli errori** | Frustrazione nel debugging o nell'applicazione pratica senza supporto. | Tutor AI dedicato all'analisi dell'errore concettuale, con spiegazioni su misura del livello. |
| **Calo motivazionale** | Mancanza di visibilità sui progressi a lungo termine. | Metriche di continuità (streak), avanzamento percentuale visivo e log delle sessioni nel diario di studio. |

---

## 3. Utenti Target & Personas

### 3.1 Segmenti Principali
1. **Principianti assoluti:** Individui che si avvicinano per la prima volta a materie tecniche (es. JavaScript, Python, Web Design) e necessitano di binari chiari e rassicuranti.
2. **Studenti & Autodidatti:** Persone che hanno già materiale didattico ma necessitano di un framework operativo per organizzare lo studio, verificare la memorizzazione e tenere traccia delle ore.
3. **Professionisti in Upskilling / Reskilling:** Lavoratori con tempo limitato (30-45 minuti al giorno) che richiedono micro-learning efficiente senza dispersioni.

---

## 4. Architettura delle Funzionalità & Requisiti Dettagliati

### 4.1 Dashboard Personale (Schermata Principale)
- **Obiettivo:** Fornire una vista istantanea su ciò che conta fare oggi, riducendo ogni frizione di avvio sessione.
- **Elementi & Comportamento:**
  - *Header:* Wordmark SkillPath, claim *"Il tuo percorso di crescita"*, avatar utente con tap target verso Profilo/Impostazioni.
  - *Sezione Saluto & Progresso:* Saluto personalizzato (*"Ciao, [Nome]!"*), card sintetica con percentuale di completamento del ciclo settimanale/modulo e barra di progresso visuale.
  - *Checklist Obiettivi di Oggi:* Lista a righe con checkbox, titolo dell'attività, durata stimata in minuti e tag di stato (es. *"COMPLETATO"*). Il tap su una riga non completata avvia l'attività o la spunta manualmente previa conferma.
  - *Card "Continua a imparare":* Focus prioritario sull'unità didattica successiva (titolo modulo, durata residua, pulsante *"Riprendi lezione"*).
  - *Azione secondaria:* Link/Pulsante *"Visualizza il mio percorso"* per accedere alla roadmap completa.

### 4.2 Percorsi di Apprendimento Personalizzati
- **Obiettivo:** Strutturare le competenze desiderate in alberi didattici chiari e navigabili.
- **Requisiti Funzionali:**
  - Creazione percorso indicando: competenza target, livello di partenza (Principiante / Intermedio / Avanzato) e impegno settimanale stimato.
  - Generazione o selezione dell'albero di moduli: ciascun modulo contiene 3–8 lezioni (teoria, quiz, esercizio).
  - Tracciamento dello stato di ciascuna unità: *Non iniziata*, *In corso*, *Completata*, *Da ripassare*.
  - Ripresa automatica dal punto esatto in cui lo studio è stato interrotto.

### 4.3 Obiettivi Giornalieri & Gestione del Tempo
- **Obiettivo:** Fissare micro-traguardi quotidiani raggiungibili per costruire l'abitudine allo studio.
- **Requisiti Funzionali:**
  - Definizione dell'impegno giornaliero (default: 15, 30 o 45 minuti).
  - Generazione automatica di 2–3 micro-task quotidiani composti da: 1 ripasso/quiz rapido + 1 nuova lezione + 1 esercizio pratico.
  - Calcolo del contatore *"N di X completati"* e aggiornamento in tempo reale del progresso giornaliero.

### 4.4 Diario di Studio (Learning Journal)
- **Obiettivo:** Favorire la metacognizione e l'autovalutazione dopo ogni sessione.
- **Requisiti Funzionali:**
  - Form di fine sessione (opzionale ma consigliato): tempo effettivo impiegato, concetti chiave appresi, ostacoli incontrati, argomenti da approfondire.
  - Storico consultabile per data o per competenza/percorso.
  - Tag automatici generati dal sistema in base alle lezioni associate.

### 4.5 Ripasso Intelligente (Spaced Repetition System)
- **Obiettivo:** Contrastare la curva dell'oblio riproponendo i concetti chiave a intervalli scientificamente calibrati (1 giorno, 3 giorni, 7 giorni, 14 giorni, 30 giorni).
- **Requisiti Funzionali:**
  - Memorizzazione automatica delle flashcard/concetti associati a ciascuna lezione completata.
  - Assegnazione di un punteggio di ritenzione (*Facile*, *Buono*, *Difficile*).
  - Se un concetto riceve esito *Difficile*, l'intervallo viene azzerato e l'argomento riappare tra i compiti del giorno successivo.
  - Coda di ripasso prioritario visibile nella sezione studio.

### 4.6 Tutor AI (Conversational Learning Assistant)
- **Obiettivo:** Fornire un assistente didattico attivo e paziente che supporti la comprensione profonda.
- **Requisiti Funzionali:**
  - *Modalità Socratica:* L'assistente non fornisce la soluzione diretta di codice o esercizi, ma pone domande guida per stimolare la deduzione.
  - *Semplificazione concettuale:* Funzione *"Spiega come se avessi 10 anni"* o con analogie del mondo reale.
  - *Generatore di esempi:* Creazione di casi pratici alternativi quando la spiegazione standard non è chiara.
  - *Analisi dell'errore:* L'utente può incollare un frammento di codice errato o spiegare un proprio dubbio; l'AI identifica il misconception sottostante.
  - *Tone of Voice:* Motivante, conciso, privo di gergo non spiegato, orientato alla pratica.

### 4.7 Quiz & Verifica delle Competenze
- **Obiettivo:** Validare la reale comprensione prima di considerare un'unità conclusa.
- **Requisiti Funzionali:**
  - Tipologie supportate: Scelta multipla, Vero/Falso, Riordinamento blocchi, Riconoscimento errore di sintassi.
  - Feedback immediato: spiegazione dettagliata sia in caso di risposta corretta che errata.
  - Le risposte errate alimentano automaticamente la coda del Ripasso Intelligente.

---

## 5. Requisiti Funzionali & Criteri di Accettazione

| ID | Funzionalità | Fase | Criteri di Accettazione (DoD) |
|---|---|---|---|
| **RF-01** | Visualizzazione Dashboard | MVP (Must have) | La dashboard mostra saluto, progresso aggregato (%), lista obiettivi del giorno (con stati interattivi) e card della prossima lezione. Tempo di caricamento iniziale < 1.5s. |
| **RF-02** | Completamento Obiettivo Giornaliero | MVP (Must have) | Il tap sulla checkbox di un obiettivo aggiorna immediatamente l'indicatore (es. "2 di 3 completati") e applica lo stile completato con feedback visivo. |
| **RF-03** | Fruizione Lezione & Avanzamento | MVP (Must have) | La pressione di *"Riprendi lezione"* apre la lezione in corso; al completamento l'avanzamento totale del percorso si aggiorna percentualmente. |
| **RF-04** | Registro Diario di Studio | Should have | L'utente può salvare note testuali, durata sessione e difficoltà percepita; i dati persistono localmente/in cloud. |
| **RF-05** | Motore Spaced Repetition | Should have | Gli item inseriti nella coda di ripasso ricompaiono secondo l'intervallo calcolato (1, 3, 7 giorni). |
| **RF-06** | Chat Tutor AI | MVP (Must have - Scopo Base) | L'utente può inviare domande contestuali sulla lezione corrente e ricevere una risposta strutturata in < 3s in streaming. |
| **RF-07** | Quiz di Fine Lezione | MVP (Must have) | Minimo 3 domande a scelta multipla; punteggio finale mostrato con spiegazione dell'errore. |

---

## 6. Architettura dell'Informazione & Mappa delle Schermate

```
App SkillPath AI (Mobile Navigation Map)
│
├── [1.0] Dashboard / Home (Schermata attiva confermata)
│     ├── Saluto & Percentuale Progresso
│     ├── Checklist Obiettivi Giornalieri (interattiva)
│     ├── Card Prossima Lezione ("Continua a imparare")
│     └── Link "Visualizza il mio percorso" ──────► [2.0]
│
├── [2.0] I Miei Percorsi (Roadmap View)
│     ├── Lista percorsi attivi e archiviati
│     └── Creazione nuovo percorso ──────────────► [2.1] Setup Nuovo Percorso
│
├── [3.0] Dettaglio Percorso & Moduli
│     └── Elenco lezioni con stati (Completata / In Corso / Bloccata) ──► [4.0]
│
├── [4.0] Player Lezione (Theory & Interactive Blocks)
│     ├── Contenuto didattico a schede
│     ├── Bottone fluttuante "Chiedi al Tutor AI" ─► [5.0]
│     └── CTA Fine Lezione ───────────────────────► [6.0] Quiz di Verifica
│
├── [5.0] Chat con Tutor AI
│     ├── Thread conversazionale contestuale
│     └── Prompt rapidi ("Fammi un esempio", "Semplifica", "Perché è sbagliato?")
│
├── [6.0] Quiz & Valutazione
│     └── Domande, feedback immediato e calcolo punteggio
│
├── [7.0] Revisioni & Spaced Repetition (Deck Ripassi)
│     └── Flashcard / Domande lampo con autovalutazione (Facile/Medio/Difficile)
│
├── [8.0] Diario di Studio (Learning Log)
│     └── Note personali, cronologia sessioni ed errori ricorrenti
│
└── [9.0] Profilo, Statistiche & Impostazioni (Schermate attive confermate)
      ├── Metriche di streak, ore totali e badge
      └── Impostazioni account, notifiche e preferenze AI
```

### Note sugli Stati UI di Schermata
- **Empty State (Nessun percorso attivo):** Invito all'azione visivo *"Crea il tuo primo percorso di studio"* con 3 template suggeriti (es. *JavaScript da Zero*, *Basi di Python*, *Prompt Engineering*).
- **Offline / Loading State:** Skeleton loaders coordinati sulle card della dashboard durante il fetch asincrono dei dati.
- **Error State:** Banner non bloccante con pulsante *"Riprova"* e mantenimento dei dati memorizzati in cache locale.

---

## 7. Design System & User Experience Guidelines

Basato sulle decisioni grafiche già consolidate nel progetto (`{{DATA:DESIGN_SYSTEM:DESIGN_SYSTEM_1}}` e schermate ad alta fedeltà `{{DATA:SCREEN:SCREEN_30}}`):

- **Palette Cromatica:**
  - Background generale: `#F8FAFC` (Slate ultra-light riposante).
  - Superficie Card: `#FFFFFF` con bordo sottile `1px solid rgba(226, 232, 240, 0.8)` e raggio `16px` (`rounded-2xl`).
  - Brand Primary: `#4F46E5` (Indigo moderno, impiegato per CTA cardine e progress bar).
  - Accento & Feedback Positivo: `#14B8A6` (Teal vibrante per badge di successo e check completati).
  - Testo Primario: `#111827` (Gray-900 ad alto contrasto tipografico).
  - Testo Secondario: `#64748B` (Slate-500 per minutaggi, metadati e descrizioni subordinate).
- **Tipografia:** Famiglia **Inter**, scala tipografica gerarchica (H1: 24px bold, H2: 18px semibold, Body: 14px regular/medium, Caption: 12px medium).
- **Principi UX:**
  - *No pressure, high consistency:* Enfasi sui traguardi raggiunti anziché sul senso di colpa per giorni saltati.
  - *One-tap access:* Azioni primarie sempre visibili above-the-fold o con ancoraggio ergonomico per l'uso a una mano su mobile.

---

## 8. User Flows Fondamentali

### Flow 1: Routine Quotidiana di Studio (Dashboard ➔ Lezione ➔ Check)
1. **Trigger:** L'utente apre l'app (o tocca la notifica promemoria).
2. **Dashboard:** Visualizza lo stato di avanzamento e nota la prima attività non spuntata (*"Studia le funzioni — 20 min"*).
3. **Azione:** Tocca *"Riprendi lezione"* nella card in evidenza.
4. **Fruizione:** Legge la teoria, consulta un esempio e tocca l'icona del Tutor per un chiarimento rapido.
5. **Verifica:** Completa il mini-quiz di fine lezione (3 domande).
6. **Esito:** La lezione viene registrata come completata; tornando alla Dashboard, la relativa riga degli obiettivi si spunta automaticamente e l'avanzamento sale al 72%.

### Flow 2: Revisione Spaziata di Concetti Critici
1. **Trigger:** L'indicatore ripassi segnala 3 concetti in scadenza per oggi.
2. **Azione:** L'utente avvia la sessione di ripasso.
3. **Interazione:** Viene mostrata una domanda di richiamo attivo. L'utente risponde mentalmente e gira la card per verificare.
4. **Valutazione:** L'utente seleziona *"Difficile"*.
5. **Algoritmo:** Il sistema rischedula la riproposizione del concetto per il giorno successivo, evitando la cancellazione dalla memoria a lungo termine.

---

## 9. Requisiti Non Funzionali

1. **Usabilità & Ergonomia:** Ottimizzato specificamente per viewport mobile 390×844 (iPhone standard) con touch target minimi di 44×44 pt.
2. **Prestazioni:**
   - Cold start app: < 2.0 secondi.
   - Latenza risposta interfaccia (spunta checkbox, cambio tab): < 100ms.
   - Streaming risposta Tutor AI: First Token Time < 1.2 secondi.
3. **Accessibilità (WCAG 2.1 AA):**
   - Rapporto di contrasto testo/sfondo ≥ 4.5:1 per testi standard e 3:1 per elementi grafici attivi.
   - Supporto a screen reader (etichette semantiche ARIA su icone e pulsanti iconici).
4. **Privacy & Sicurezza:**
   - Dati personali e note del diario cifrati at-rest e in-transit (HTTPS/TLS 1.3).
   - Nessun dato sensibile dell'utente inviato ai modelli LLM per training pubblico senza esplicito consenso.
5. **Affidabilità Offline-First:**
   - Funzionalità core di lettura lezioni già scaricate e spunta obiettivi consultabili anche senza connessione internet, con sincronizzazione automatica al ripristino della rete.

---

## 10. Architettura Tecnica Proposta (Scalabile per Sviluppatore Principiante)

```
[ Client Mobile ]
  ├── Framework: React Native (Expo) o Flutter / PWA moderna HTML5+Tailwind
  ├── State Management: Zustand o Redux Toolkit (semplice e reattivo)
  └── Local Storage: SQLite / AsyncStorage (per funzionamento offline e cache)
          │
          ▼ (REST / JSON API sicura)
[ Backend & BaaS ]
  ├── Piattaforma: Supabase o Firebase (Autenticazione, Database PostgreSQL, Storage)
  ├── Edge Functions: Gestione logica Spaced Repetition e streak giornalieri
  └── Database Tables:
        ├── users (id, name, email, level, daily_goal_minutes)
        ├── tracks (id, title, category, total_modules)
        ├── lessons (id, track_id, title, content, est_minutes)
        ├── user_progress (user_id, lesson_id, status, last_reviewed_at)
        └── study_logs (id, user_id, notes, difficulty_rating, duration)
          │
          ▼
[ AI Service Gateway ]
  ├── Provider: OpenAI API (gpt-4o-mini per latenza e costi ridotti) / Anthropic Claude Haiku
  └── Prompt Engine: System prompts specializzati in tutoring socratico e correzione di codice
```

---

## 11. Piano di Rilascio MVP (Minimum Viable Product)

| Componente | Priorità | Razionale PM | Dipendenze | Criteri di Rilascio MVP |
|---|---|---|---|---|
| **Dashboard Funzionante** | **Must have** | È l'epicentro dell'esperienza quotidiana dell'utente. | Schema dati utente | Checkbox funzionanti, avanzamento progressivo dinamico. |
| **Percorso Base Pre-caricato (es. JS Basi)** | **Must have** | Permette di testare l'app senza dover creare da subito un motore complesso di autogenerazione. | Contenuti lezioni | Minimo 1 percorso completo con 10 lezioni e quiz. |
| **Tutor AI Contestuale** | **Must have** | Rappresenta il principale fattore differenziante ("AI") rispetto a un comune to-do tracker. | API LLM con token streaming | Chat contestuale attiva dentro la lezione con limitazione rate-limit. |
| **Spaced Repetition Engine** | **Should have** | Chiave per la fidelizzazione e l'apprendimento a lungo termine. | Log dei quiz | Algoritmo base a intervalli fissi (1, 3, 7 giorni). |
| **Diario di Studio Strutturato** | **Should have** | Rafforza la consapevolezza dell'utente. | Database note | Form di annotazione e visualizzazione cronologica. |
| **Creazione Percorsi da Prompt AI Libero** | **Could have** | Alta complessità algoritmica e di costo. | Validatore percorsi AI | Rimandato alla v1.1 successiva alla validazione MVP. |

---

## 12. Metriche di Successo (KPI di Prodotto)

1. **Activation Rate:** % di utenti registrati che completano la prima lezione entro 24 ore dal download (Target: ≥ 65%).
2. **Daily Habit Loop (Costanza):** % di utenti attivi che completano almeno 1 obiettivo giornaliero per 3 o più giorni consecutivi nella prima settimana (Target: ≥ 40%).
3. **Lesson Completion Rate:** % di lezioni avviate che vengono portate a termine con il superamento del quiz finale (Target: ≥ 75%).
4. **Retention D7 e D30:** Percentuale di utenti che ritornano ad aprire l'app a 7 e 30 giorni (Target D7: ≥ 35%, Target D30: ≥ 20%).
5. **AI Helpfulness Ratio:** Rapporto di valutazioni positive (pollice su/giù) sulle spiegazioni fornite dal Tutor AI (Target: ≥ 85% positive).

---

## 13. Criteri di Accettazione Complessivi & Questioni da Definire (Open Questions)

### Criteri di Accettazione Generali del Prodotto
- Il prodotto finale rispetta rigorosamente i canoni visivi mostrati nei prototipi e nel design system del workspace.
- Nessuna funzionalità dell'MVP richiede più di 2 tap dalla Home per essere raggiunta.
- I progressi dell'utente non vengono mai persi in caso di caduta della connessione.

### Questioni Ancora da Definire (Open Questions)
1. *[Da definire]* **Modello di Monetizzazione:** L'accesso al Tutor AI sarà limitato a un numero fisso di messaggi al giorno nella versione gratuita (Freemium) o richiederà un piano in abbonamento SkillPath Pro fin dal primo giorno?
2. *[Da definire]* **Contenuti Proprietari vs Generati:** Nella prima versione i percorsi didattici saranno redatti manualmente da docenti/curatori per garantire il 100% di accuratezza o generati sinteticamente tramite LLM con validazione umana?
3. *[Da definire]* **Push Notifications Policy:** Orario e frequenza ottimale dei promemoria giornalieri per massimizzare la riapertura senza risultare invasivi (es. default alle 19:00 locali con opzione di personalizzazione).
