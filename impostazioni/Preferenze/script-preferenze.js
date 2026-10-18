/* ==========================================================================
   SKILLPATH - JAVASCRIPT DELLA PAGINA PREFERENZE (script-preferenze.js)
   Architettura Vanilla JS pura con gestione temi, lingua e accessibilità.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  /* === 1. SELEZIONE DEGLI ELEMENTI DEL DOM === */
  const themeTabs = document.querySelectorAll('.theme-tab-btn');
  const themeStatusText = document.getElementById('theme-status-text');

  const langRows = document.querySelectorAll('.lang-item-row');

  const toggleReducedMotion = document.getElementById('toggle-reduced-motion');
  const toggleHighContrast = document.getElementById('toggle-high-contrast');

  const btnSavePreferences = document.getElementById('btn-save-preferences');
  const btnResetDefaults = document.getElementById('btn-reset-defaults');

  const toastElement = document.getElementById('pref-toast');
  const toastMessage = document.getElementById('toast-message');
  const btnCloseToast = document.getElementById('btn-close-toast');

  let toastTimer = null;

  /* === 2. FUNZIONE MOSTRA NOTIFICA TOAST === */
  function showToast(message) {
    if (!toastElement) return;
    toastMessage.textContent = message;
    toastElement.classList.add('is-show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      dismissToast();
    }, 3000);
  }

  function dismissToast() {
    if (toastElement) {
      toastElement.classList.remove('is-show');
    }
  }

  if (btnCloseToast) {
    btnCloseToast.addEventListener('click', dismissToast);
  }

  /* === 3. GESTIONE SELEZIONE TEMA === */
  const themeDescriptions = {
    light: "Interfaccia impostata sulla modalità chiara standard ad alta luminosità.",
    dark: "Modalità scura attiva per ridurre l'affaticamento visivo serale.",
    system: "Attualmente segue le impostazioni di sistema del dispositivo in uso."
  };

  function applyThemeVisuals(theme) {
    if (theme === 'dark') {
      document.body.classList.add('theme-dark');
    } else if (theme === 'light') {
      document.body.classList.remove('theme-dark');
    } else {
      // Sistema: controlla prefers-color-scheme
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.body.classList.add('theme-dark');
      } else {
        document.body.classList.remove('theme-dark');
      }
    }
  }

  function selectTheme(selectedTheme) {
    themeTabs.forEach(function (tab) {
      const tabTheme = tab.getAttribute('data-theme');
      if (tabTheme === selectedTheme) {
        tab.classList.add('is-active');
        tab.setAttribute('aria-checked', 'true');
      } else {
        tab.classList.remove('is-active');
        tab.setAttribute('aria-checked', 'false');
      }
    });

    if (themeStatusText && themeDescriptions[selectedTheme]) {
      themeStatusText.textContent = themeDescriptions[selectedTheme];
    }

    applyThemeVisuals(selectedTheme);
  }

  themeTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const chosenTheme = tab.getAttribute('data-theme');
      selectTheme(chosenTheme);
      showToast(`Tema impostato: ${tab.textContent.trim()}`);
    });
  });

  /* === 4. GESTIONE SELEZIONE LINGUA === */
  function selectLanguage(langCode) {
    langRows.forEach(function (row) {
      const code = row.getAttribute('data-lang');
      const radio = row.querySelector('input[type="radio"]');

      if (code === langCode) {
        row.classList.add('is-selected');
        if (radio) radio.checked = true;
      } else {
        row.classList.remove('is-selected');
        if (radio) radio.checked = false;
      }
    });
  }

  langRows.forEach(function (row) {
    row.addEventListener('click', function () {
      const code = row.getAttribute('data-lang');
      const langName = row.querySelector('.lang-name').textContent;
      selectLanguage(code);
      showToast(`Lingua app impostata su: ${langName}`);
    });
  });

  /* === 5. GESTIONE INTERRUTTORI ACCESSIBILITÀ === */
  function toggleSwitch(button) {
    if (!button) return;
    const isCurrentlyChecked = button.getAttribute('aria-checked') === 'true';
    const newState = !isCurrentlyChecked;
    button.setAttribute('aria-checked', String(newState));
    return newState;
  }

  if (toggleReducedMotion) {
    toggleReducedMotion.addEventListener('click', function () {
      const enabled = toggleSwitch(toggleReducedMotion);
      if (enabled) {
        document.body.classList.add('reduced-motion');
        showToast('Animazioni complesse ridotte per massima fluidità.');
      } else {
        document.body.classList.remove('reduced-motion');
        showToast('Animazioni standard ripristinate.');
      }
    });
  }

  if (toggleHighContrast) {
    toggleHighContrast.addEventListener('click', function () {
      const enabled = toggleSwitch(toggleHighContrast);
      if (enabled) {
        document.body.classList.add('high-legibility');
        showToast('Caratteri ad alta leggibilità attivati.');
      } else {
        document.body.classList.remove('high-legibility');
        showToast('Caratteri standard ripristinati.');
      }
    });
  }

  /* === 6. SALVATAGGIO PREFERENZE GLOBALI === */
  function saveAllPreferences() {
    const activeTab = document.querySelector('.theme-tab-btn.is-active');
    const selectedTheme = activeTab ? activeTab.getAttribute('data-theme') : 'system';

    const selectedRow = document.querySelector('.lang-item-row.is-selected');
    const selectedLang = selectedRow ? selectedRow.getAttribute('data-lang') : 'it';

    const isReducedMotion = toggleReducedMotion ? toggleReducedMotion.getAttribute('aria-checked') === 'true' : false;
    const isHighContrast = toggleHighContrast ? toggleHighContrast.getAttribute('aria-checked') === 'true' : true;

    const userPreferences = {
      theme: selectedTheme,
      language: selectedLang,
      reducedMotion: isReducedMotion,
      highContrast: isHighContrast,
      lastSaved: new Date().toISOString()
    };

    try {
      localStorage.setItem('skillpath_preferences', JSON.stringify(userPreferences));
    } catch (e) {
      console.warn('Impossibile salvare le preferenze in localStorage:', e);
    }

    showToast('Preferenze salvate con successo!');
  }

  if (btnSavePreferences) {
    btnSavePreferences.addEventListener('click', saveAllPreferences);
  }

  /* === 7. RIPRISTINO VALORI PREDEFINITI === */
  function resetDefaults() {
    selectTheme('system');
    selectLanguage('it');

    if (toggleReducedMotion) {
      toggleReducedMotion.setAttribute('aria-checked', 'false');
      document.body.classList.remove('reduced-motion');
    }

    if (toggleHighContrast) {
      toggleHighContrast.setAttribute('aria-checked', 'true');
      document.body.classList.add('high-legibility');
    }

    try {
      localStorage.removeItem('skillpath_preferences');
    } catch (e) {
      // Ignora
    }

    showToast('Preferenze ripristinate ai valori predefiniti.');
  }

  if (btnResetDefaults) {
    btnResetDefaults.addEventListener('click', resetDefaults);
  }

  /* === 8. CARICAMENTO STATO INIZIALE DA LOCALSTORAGE === */
  function loadSavedPreferences() {
    try {
      const saved = localStorage.getItem('skillpath_preferences');
      if (saved) {
        const prefs = JSON.parse(saved);
        if (prefs.theme) {
          selectTheme(prefs.theme);
        }
        if (prefs.language) {
          selectLanguage(prefs.language);
        }
        if (typeof prefs.reducedMotion === 'boolean' && toggleReducedMotion) {
          toggleReducedMotion.setAttribute('aria-checked', String(prefs.reducedMotion));
          if (prefs.reducedMotion) document.body.classList.add('reduced-motion');
        }
        if (typeof prefs.highContrast === 'boolean' && toggleHighContrast) {
          toggleHighContrast.setAttribute('aria-checked', String(prefs.highContrast));
          if (prefs.highContrast) {
            document.body.classList.add('high-legibility');
          } else {
            document.body.classList.remove('high-legibility');
          }
        }
      } else {
        // Default: alta leggibilità attiva
        document.body.classList.add('high-legibility');
      }
    } catch (e) {
      console.error('Errore nel caricamento delle preferenze:', e);
    }
  }

  loadSavedPreferences();
  console.log('Modulo Preferenze SkillPath inizializzato con successo.');
});
