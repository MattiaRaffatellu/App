/* ==========================================================================
   SKILLPATH - JAVASCRIPT DELLA PAGINA IMPOSTAZIONI (script.js)
   Architettura Vanilla JS pura con commenti didattici completi.
   ========================================================================== */

/* === 1. SELEZIONE DEGLI ELEMENTI DEL DOM === */
// Interruttore per le notifiche
const notificationToggle = document.querySelector('#notification-toggle');

// Elementi cliccabili delle impostazioni
const itemPreferences = document.querySelector('#item-preferences');
const itemAiSettings = document.querySelector('#item-ai-settings');
const itemCourses = document.querySelector('#item-courses');
const itemSocial = document.querySelector('#item-social');
const itemPrivacy = document.querySelector('#item-privacy');
const btnManageSubscription = document.querySelector('#btn-manage-sub');
const itemHelpCenter = document.querySelector('#item-help-center');
const itemFeedback = document.querySelector('#item-feedback');

// Tasto di disconnessione
const btnLogout = document.querySelector('#btn-logout');

// Toast per notifiche visive all'utente
const settingsToast = document.querySelector('#settings-toast');
const toastMessage = document.querySelector('#toast-message');


/* === 2. FUNZIONE PER MOSTRARE NOTIFICHE TOAST === */
// Mostra un piccolo avviso flottante in basso che scompare in automatico
function showToast(message) {
  toastMessage.textContent = message;
  settingsToast.classList.add('is-show');

  setTimeout(function() {
    settingsToast.classList.remove('is-show');
  }, 2800);
}


/* === 3. GESTIONE DELL'INTERRUTTORE NOTIFICHE === */
// Controlla se l'utente aveva salvato una preferenza in precedenza nel localStorage
function loadNotificationPreference() {
  const savedPreference = localStorage.getItem('skillpath_notifications_enabled');
  if (savedPreference !== null) {
    notificationToggle.checked = (savedPreference === 'true');
  }
}

// Salva lo stato delle notifiche ogni volta che l'interruttore viene premuto
function handleNotificationChange(event) {
  const isEnabled = event.target.checked;
  localStorage.setItem('skillpath_notifications_enabled', isEnabled);

  // Simulazione vibrazione aptica (se supportata dal browser del dispositivo)
  if (window.navigator && window.navigator.vibrate) {
    window.navigator.vibrate(15);
  }

  if (isEnabled) {
    showToast('Notifiche push ed email abilitate.');
  } else {
    showToast('Notifiche disattivate.');
  }
}

if (notificationToggle) {
  notificationToggle.addEventListener('change', handleNotificationChange);
}


/* === 4. GESTIONE DELLE AZIONI ACCOUNT E IMPOSTAZIONI === */
// Preferenze tema e lingua
if (itemPreferences) {
  itemPreferences.addEventListener('click', function() {
    showToast('Lingua attuale: Italiano • Tema: Sistema');
  });
}

// Funzioni AI
if (itemAiSettings) {
  itemAiSettings.addEventListener('click', function() {
    showToast('Assistente AI attivo per suggerimenti e correzione codice.');
  });
}

// Corsi
if (itemCourses) {
  itemCourses.addEventListener('click', function() {
    showToast('Hai 4 percorsi formativi attivi su SkillPath.');
  });
}

// Privacy
if (itemPrivacy) {
  itemPrivacy.addEventListener('click', function() {
    showToast('Profilo pubblico visibile agli altri studenti.');
  });
}

// Gestione Abbonamento
if (btnManageSubscription) {
  btnManageSubscription.addEventListener('click', function(e) {
    e.stopPropagation();
    showToast('Piano SkillPath Pro valido fino al 14 Aprile 2027.');
  });
}

// Invia Feedback
if (itemFeedback) {
  itemFeedback.addEventListener('click', function() {
    const feedback = prompt('Cosa possiamo migliorare in SkillPath?', '');
    if (feedback !== null && feedback.trim() !== '') {
      showToast('Grazie per il tuo feedback! Lo abbiamo inviato al team.');
    }
  });
}

// Centro Assistenza
if (itemHelpCenter) {
  itemHelpCenter.addEventListener('click', function() {
    showToast('Apertura guida rapida e FAQ...');
  });
}


/* === 5. GESTIONE DELLA DISCONNESSIONE (LOGOUT) === */
// Chiede conferma all'utente prima di effettuare il logout
function handleLogout() {
  const confirmed = confirm('Sei sicuro di voler effettuare la disconnessione dal tuo account?');
  if (confirmed) {
    showToast('Disconnessione effettuata con successo.');
    setTimeout(function() {
      // Reindirizza alla schermata iniziale
      window.location.href = '../index.html';
    }, 1000);
  }
}

if (btnLogout) {
  btnLogout.addEventListener('click', handleLogout);
}


/* === 6. INIZIALIZZAZIONE ALL'AVVIO === */
loadNotificationPreference();
console.log('Modulo Impostazioni SkillPath caricato correttamente. Collegamenti attivi.');
