/* ==========================================================================
   JAVASCRIPT DIDATTICO (VANILLA JS)
   ========================================================================== */

/* === 1. SELEZIONE DEGLI ELEMENTI DEL DOM === */
// Elementi di navigazione (Lezione, Roadmap)
// NOTA DIDATTICA: Il pulsante profilo (#btn-open-profile) ora naviga direttamente
// tramite standard link HTML <a href="profilo/index.html">, quindi non richiede
// più la gestione manuale di apertura modale in JavaScript.

const btnResumeLesson = document.querySelector('#btn-resume-lesson');
const btnCloseLesson = document.querySelector('#btn-close-lesson');
const btnCompleteLesson = document.querySelector('#btn-complete-lesson');
const lessonScreen = document.querySelector('#lesson-screen');

const btnViewRoadmap = document.querySelector('#btn-view-roadmap');
const btnCloseRoadmap = document.querySelector('#btn-close-roadmap');
const btnCloseRoadmapAlt = document.querySelector('#btn-close-roadmap-alt');
const roadmapScreen = document.querySelector('#roadmap-screen');

// Elementi degli obiettivi e della barra di avanzamento
const taskCheckboxes = document.querySelectorAll('.task-checkbox');
const progressFill = document.querySelector('#progress-fill');
const progressPercent = document.querySelector('#progress-percent');
const progressSummary = document.querySelector('#progress-summary');
const completedCounter = document.querySelector('#completed-counter');
const goalAchievedBanner = document.querySelector('#goal-achieved-banner');

// Elementi dinamici della lezione memorizzata
const currentLessonTitle = document.querySelector('#current-lesson-title');
const currentLessonDesc = document.querySelector('#current-lesson-desc');
const currentLessonDuration = document.querySelector('#current-lesson-duration');
const playerLessonTitle = document.querySelector('#player-lesson-title');
const playerLessonDesc = document.querySelector('#player-lesson-desc');
const playerLessonDuration = document.querySelector('#player-lesson-duration');


// Elementi del player video simulato
const btnTogglePlay = document.querySelector('#btn-toggle-play');
const playIcon = document.querySelector('#play-icon');
let isVideoPlaying = false;


/* === 2. GESTIONE DELLA BARRA DI AVANZAMENTO E DEGLI OBIETTIVI === */
// Questa funzione ricalcola la percentuale ogni volta che un obiettivo viene spuntato o deselezionato
function updateProgress() {
  // Calcoliamo quanti task sono completati
  let completedCount = 0;
  taskCheckboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      completedCount = completedCount + 1;
    }
  });

  const totalTasks = taskCheckboxes.length;

  // Aggiorniamo la scritta del contatore "X di 3 completati"
  completedCounter.textContent = completedCount + ' di ' + totalTasks + ' completati';

  // Obiettivi generali della settimana: base di 13 già svolti + quelli di oggi
  const totalGeneralTasks = 20;
  const currentGeneralTasks = 13 + completedCount;
  const calculatedPercentage = Math.round((currentGeneralTasks / totalGeneralTasks) * 100);

  // Aggiorniamo l'interfaccia: testo e ampiezza della barra
  progressPercent.textContent = calculatedPercentage + '%';
  progressFill.style.width = calculatedPercentage + '%';
  progressSummary.textContent = currentGeneralTasks + '/' + totalGeneralTasks + ' Obiettivi raggiunti';

  // Mostriamo il messaggio 'Obiettivo raggiunto!' se tutti i 3 obiettivi di oggi sono spuntati
  if (completedCount === totalTasks) {
    goalAchievedBanner.classList.add('is-visible');
  } else {
    goalAchievedBanner.classList.remove('is-visible');
  }
}

// Aggiungiamo l'ascoltatore di eventi per ogni checkbox degli obiettivi
taskCheckboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', updateProgress);
});


/* === 3. GESTIONE DELLA NAVIGAZIONE PROFILO (OMINO) === */
// SPIEGAZIONE DEL CAMBIAMENTO:
// In precedenza il tasto omino apriva una schermata fittizia sovrapposta (#profile-screen) via JS.
// Ora la schermata profilo è diventata una pagina web autonoma e completa, situata nella
// cartella "profilo/index.html" con i propri file separati (HTML, CSS e JS).
// Di conseguenza, la navigazione avviene in modo nativo e pulito tramite il tag <a> in index.html.


/* === 4. GESTIONE DELLA LEZIONE CORRENTE (MEMORIZZAZIONE & PLAYER) === */
// Database locale di lezioni per simulare l'avanzamento continuo
const lessonsList = [
  {
    title: 'Funzioni in JavaScript',
    desc: 'Scopri come riutilizzare il codice con argomenti e return',
    duration: '12 min'
  },
  {
    title: 'Array e Metodi di Iterazione',
    desc: 'Impara a manipolare collezioni di dati con map e filter',
    duration: '16 min'
  },
  {
    title: 'Manipolazione del DOM',
    desc: 'Collega il codice JavaScript con gli elementi della pagina HTML',
    duration: '18 min'
  }
];

// Indice della lezione attualmente impressa
let currentLessonIndex = 0;

// Carica l'ultima lezione dal localStorage (se presente) per mantenerla impressa
function loadSavedLesson() {
  const savedIndex = localStorage.getItem('skillpath_lesson_index');
  if (savedIndex !== null) {
    currentLessonIndex = parseInt(savedIndex, 10);
  }
  renderLessonDetails();
}

// Aggiorna i testi nella card della dashboard e nella schermata video
function renderLessonDetails() {
  const lesson = lessonsList[currentLessonIndex];
  currentLessonTitle.textContent = lesson.title;
  currentLessonDesc.textContent = lesson.desc;
  currentLessonDuration.textContent = lesson.duration;

  playerLessonTitle.textContent = lesson.title;
  playerLessonDesc.textContent = lesson.desc;
  playerLessonDuration.textContent = lesson.duration + ' • Video interattivo';
}

// Apertura e chiusura della schermata lezione/video
function openLesson() {
  lessonScreen.classList.add('is-open');
}

function closeLesson() {
  lessonScreen.classList.remove('is-open');
  // Ripristiniamo lo stato del player
  isVideoPlaying = false;
  playIcon.textContent = 'play_arrow';
}

btnResumeLesson.addEventListener('click', openLesson);
btnCloseLesson.addEventListener('click', closeLesson);

// Gestione del tasto Play/Pause nel video player
btnTogglePlay.addEventListener('click', function() {
  isVideoPlaying = !isVideoPlaying;
  if (isVideoPlaying) {
    playIcon.textContent = 'pause';
  } else {
    playIcon.textContent = 'play_arrow';
  }
});

// Quando l'utente completa la lezione, passiamo alla successiva e la memorizziamo
btnCompleteLesson.addEventListener('click', function() {
  currentLessonIndex = (currentLessonIndex + 1) % lessonsList.length;
  localStorage.setItem('skillpath_lesson_index', currentLessonIndex);
  renderLessonDetails();
  closeLesson();
});


/* === 5. GESTIONE DELLA SCHERMATA STORICO / ROADMAP === */
function openRoadmap() {
  roadmapScreen.classList.add('is-open');
}

function closeRoadmap() {
  roadmapScreen.classList.remove('is-open');
}

btnViewRoadmap.addEventListener('click', openRoadmap);
btnCloseRoadmap.addEventListener('click', closeRoadmap);
btnCloseRoadmapAlt.addEventListener('click', closeRoadmap);


/* === 6. INIZIALIZZAZIONE ALL'AVVIO DELL'APP === */
// Calcoliamo lo stato iniziale al caricamento della pagina
updateProgress();
loadSavedLesson();
