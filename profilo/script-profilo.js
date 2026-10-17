/* ==========================================================================
   SKILLPATH - JAVASCRIPT DELLA PAGINA PROFILO (script.js)
   Architettura Vanilla JS pura con commenti didattici completi.
   ========================================================================== */

/* === 1. DATI DEI MESI E DEL GRAFICO (DATABASE LOCALE) === */
// Memorizziamo le informazioni di studio per ogni mese mostrato nel grafico a barre
const monthlyChartData = {
  gen: {
    title: 'Gennaio',
    detail: '16 ore di studio sulle basi web e la semantica HTML5.'
  },
  feb: {
    title: 'Febbraio',
    detail: '19 ore: layout CSS moderni, Flexbox e wireframing.'
  },
  mar: {
    title: 'Marzo',
    detail: '22 ore: logica di programmazione e primi script JavaScript.'
  },
  apr: {
    title: 'Aprile',
    detail: '17 ore: esercizi guidati, debug e test di codice.'
  },
  mag: {
    title: 'Maggio',
    detail: '24 ore: manipolazione avanzata del DOM e gestione eventi.'
  },
  giu: {
    title: 'Giugno (Record personale)',
    detail: '36 ore completate con il modulo JavaScript avanzato!'
  },
  lug: {
    title: 'Luglio (In corso)',
    detail: '28 ore registrate finora: percorso React e progetti finali.'
  }
};


/* === 2. SELEZIONE DEGLI ELEMENTI DEL DOM === */
// Elementi del grafico a barre
const barColumns = document.querySelectorAll('.bar-col');
const chartNotePill = document.querySelector('#chart-milestone-pill');
const chartNoteText = document.querySelector('#chart-note-text');

// Elementi dei traguardi sbloccati (Badges)
const btnViewAllBadges = document.querySelector('#btn-view-all-badges');
const extraBadges = document.querySelectorAll('.badge-item-extra');
let isBadgesExpanded = false;

// Elementi del piano di studio
const btnEditStudyPlan = document.querySelector('#btn-edit-study-plan');
const studyPlanDesc = document.querySelector('#study-plan-desc');

// Toast per notifiche visive rapide
const profileToast = document.querySelector('#profile-toast');
const toastMessage = document.querySelector('#toast-message');


/* === 3. FUNZIONE PER MOSTRARE UN MESSAGGIO TOAST === */
// Questa funzione mostra un avviso a comparsa temporaneo in basso allo schermo
function showToast(message) {
  toastMessage.textContent = message;
  profileToast.classList.add('is-show');

  // Nasconde automaticamente il toast dopo 2.8 secondi
  setTimeout(function() {
    profileToast.classList.remove('is-show');
  }, 2800);
}


/* === 4. GESTIONE DELL'INTERAZIONE CON IL GRAFICO A BARRE === */
// Questa funzione aggiorna il box testuale sotto il grafico quando l'utente clicca una barra
function updateChartNote(monthKey) {
  const data = monthlyChartData[monthKey];
  if (!data) return;

  // Aggiorna lo stato visivo attivo sulle colonne delle barre
  barColumns.forEach(function(col) {
    if (col.getAttribute('data-month') === monthKey) {
      col.classList.add('is-active');
    } else {
      col.classList.remove('is-active');
    }
  });

  // Aggiorna il testo con una leggera animazione di transizione
  chartNotePill.style.transform = 'scale(0.98)';
  setTimeout(function() {
    chartNoteText.innerHTML = '<strong style="color: var(--color-text-main); font-weight: 700;">' + 
      data.title + ':</strong> ' + data.detail;
    chartNotePill.style.transform = 'scale(1)';
  }, 100);
}

// Collega l'evento click a ogni colonna del grafico
barColumns.forEach(function(col) {
  col.addEventListener('click', function() {
    const monthKey = col.getAttribute('data-month');
    updateChartNote(monthKey);
  });
});


/* === 5. GESTIONE ESPANSIONE DEI TRAGUARDI (VEDI TUTTI) === */
// Consente di mostrare o nascondere gli altri 4 badge della lista
function toggleBadgesList() {
  isBadgesExpanded = !isBadgesExpanded;

  extraBadges.forEach(function(badge) {
    if (isBadgesExpanded) {
      badge.classList.add('is-expanded');
    } else {
      badge.classList.remove('is-expanded');
    }
  });

  if (isBadgesExpanded) {
    btnViewAllBadges.innerHTML = 'Mostra meno <span class="material-symbols-rounded" style="font-size: 16px;">expand_less</span>';
  } else {
    btnViewAllBadges.innerHTML = 'Vedi tutti (7) <span class="material-symbols-rounded" style="font-size: 16px;">chevron_right</span>';
  }
}

if (btnViewAllBadges) {
  btnViewAllBadges.addEventListener('click', toggleBadgesList);
}


/* === 6. MODIFICA DELL'OBIETTIVO DEL PIANO DI STUDIO === */
// Simula la modifica dell'obiettivo settimanale di ore di studio
function editStudyGoal() {
  const currentGoalText = studyPlanDesc.textContent;
  const newHours = prompt('Inserisci il nuovo obiettivo di studio settimanale (in ore):', '6');

  if (newHours !== null && newHours.trim() !== '') {
    const validHours = parseInt(newHours, 10);
    if (!isNaN(validHours) && validHours > 0) {
      studyPlanDesc.textContent = 'Obiettivo corrente: ' + validHours + 'h / settimana';
      showToast('Obiettivo aggiornato con successo a ' + validHours + ' ore!');
    } else {
      showToast('Per favore, inserisci un numero valido di ore.');
    }
  }
}

if (btnEditStudyPlan) {
  btnEditStudyPlan.addEventListener('click', editStudyGoal);
}


/* === 7. LOG DI INIZIALIZZAZIONE === */
console.log('Modulo Profilo SkillPath caricato correttamente. Collegamenti attivi.');
