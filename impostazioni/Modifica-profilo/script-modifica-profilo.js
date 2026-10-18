/* ==========================================================================
   SKILLPATH - JAVASCRIPT DELLA PAGINA MODIFICA PROFILO (script-modifica-profilo.js)
   Architettura Vanilla JS pura con gestione stato, storage locale e interattività.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  /* === 1. SELEZIONE DEGLI ELEMENTI DEL DOM === */
  const avatarInput = document.getElementById('avatar-input');
  const avatarPreview = document.getElementById('avatar-preview');
  const btnRemoveAvatar = document.getElementById('btn-remove-avatar');

  const inputFullName = document.getElementById('full-name');
  const inputEmail = document.getElementById('email-address');
  const inputStudyTitle = document.getElementById('study-title');

  const levelButtons = document.querySelectorAll('.btn-level');
  const goalPills = document.querySelectorAll('.goal-pill');
  const goalBadge = document.getElementById('goal-badge-val');

  const skillChips = document.querySelectorAll('.skill-chip');
  const skillsCount = document.getElementById('skills-count');

  const btnSaveBottom = document.getElementById('btn-save-bottom');
  const btnSaveTop = document.getElementById('btn-save-top');

  const toastElement = document.getElementById('profile-toast');
  const toastMessage = document.getElementById('toast-message');

  const DEFAULT_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuBwtsUxyMZmSkw3qsItxNxUM0MELkvT--NgSHA5kKvG6YFsUN5Yd-LTAzPcsqalif-ggiTMYHslbjjfTVKXEfIa2K4UvqxyxNcbPzLrH65X_5vC70oIqhN52AbBAyMpjdc6pK5hrdWyBdzezt0jJf1PXZQXn0vXNoARi5rcLwiFIbLQLoDzJM76NzjN_LWA-ZZMiJYDk7BUXD1ZVUwB9i_A4qBRm8meeeFzk1Rwp54Xe-WCEdKGDMUm";

  let toastTimer = null;

  /* === 2. FUNZIONE NOTIFICA TOAST === */
  function showToast(message) {
    if (!toastElement) return;
    toastMessage.textContent = message;
    toastElement.classList.add('is-show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastElement.classList.remove('is-show');
    }, 2800);
  }

  /* === 3. GESTIONE UPLOAD E ANTEPRIMA AVATAR === */
  if (avatarInput) {
    avatarInput.addEventListener('change', function (event) {
      const file = event.target.files && event.target.files[0];
      if (file) {
        // Controllo dimensione file (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          showToast('Attenzione: Il file supera la dimensione massima di 5MB.');
          return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
          if (avatarPreview) {
            avatarPreview.src = e.target.result;
          }
          showToast('Nuova foto profilo caricata con successo!');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Rimozione avatar con ripristino placeholder predefinito
  if (btnRemoveAvatar) {
    btnRemoveAvatar.addEventListener('click', function () {
      if (avatarPreview) {
        avatarPreview.src = DEFAULT_AVATAR;
      }
      if (avatarInput) {
        avatarInput.value = '';
      }
      showToast('Foto profilo ripristinata al valore predefinito.');
    });
  }

  /* === 4. SELETTORE LIVELLO ATTUALE === */
  levelButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      levelButtons.forEach(btn => btn.classList.remove('is-active'));
      button.classList.add('is-active');
      const levelName = button.getAttribute('data-level');
      showToast(`Livello impostato su: ${levelName}`);
    });
  });

  /* === 5. SELETTORE OBIETTIVO GIORNALIERO === */
  goalPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      goalPills.forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');

      const minutes = pill.getAttribute('data-minutes');
      if (goalBadge) {
        goalBadge.textContent = `${minutes} minuti / giorno`;
      }
      showToast(`Obiettivo giornaliero: ${minutes} minuti`);
    });
  });

  /* === 6. CHIP ARGOMENTI PRIORITARI === */
  function updateSkillsCounter() {
    const activeSkills = document.querySelectorAll('.skill-chip.is-active');
    if (skillsCount) {
      skillsCount.textContent = activeSkills.length;
    }
  }

  skillChips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chip.classList.toggle('is-active');
      updateSkillsCounter();
    });
  });

  /* === 7. SALVATAGGIO DEI DATI DEL PROFILO === */
  function saveProfileData() {
    const fullName = inputFullName ? inputFullName.value.trim() : '';
    const email = inputEmail ? inputEmail.value.trim() : '';
    const studyTitle = inputStudyTitle ? inputStudyTitle.value.trim() : '';

    if (!fullName) {
      showToast('Inserisci un nome e cognome valido.');
      inputFullName && inputFullName.focus();
      return;
    }

    const activeLevelBtn = document.querySelector('.btn-level.is-active');
    const selectedLevel = activeLevelBtn ? activeLevelBtn.getAttribute('data-level') : 'Intermedio';

    const activeGoalPill = document.querySelector('.goal-pill.is-active');
    const selectedGoal = activeGoalPill ? activeGoalPill.getAttribute('data-minutes') : '30';

    const selectedSkills = [];
    document.querySelectorAll('.skill-chip.is-active').forEach(function (chip) {
      selectedSkills.push(chip.textContent.trim());
    });

    // Salvataggio nel localStorage per sincronizzazione
    const profileData = {
      fullName: fullName,
      email: email,
      studyTitle: studyTitle,
      level: selectedLevel,
      dailyGoalMinutes: selectedGoal,
      skills: selectedSkills,
      avatarSrc: avatarPreview ? avatarPreview.src : DEFAULT_AVATAR,
      lastUpdated: new Date().toISOString()
    };

    try {
      localStorage.setItem('skillpath_profile_data', JSON.stringify(profileData));
    } catch (e) {
      console.warn('Impossibile salvare in localStorage:', e);
    }

    showToast('Modifiche al profilo salvate con successo!');

    // Breve reindirizzamento opzionale o conferma visiva
    setTimeout(function () {
      if (window.history.length > 1) {
        // Notifica permanente se l'utente rimane sulla schermata
      }
    }, 1500);
  }

  if (btnSaveBottom) {
    btnSaveBottom.addEventListener('click', saveProfileData);
  }

  if (btnSaveTop) {
    btnSaveTop.addEventListener('click', saveProfileData);
  }

  /* === 8. CARICAMENTO DATI ESISTENTI (INIZIALIZZAZIONE) === */
  function loadSavedProfile() {
    try {
      const saved = localStorage.getItem('skillpath_profile_data');
      if (saved) {
        const data = JSON.parse(saved);
        if (data.fullName && inputFullName) inputFullName.value = data.fullName;
        if (data.email && inputEmail) inputEmail.value = data.email;
        if (data.studyTitle && inputStudyTitle) inputStudyTitle.value = data.studyTitle;
        if (data.avatarSrc && avatarPreview) avatarPreview.src = data.avatarSrc;

        if (data.level) {
          levelButtons.forEach(btn => {
            if (btn.getAttribute('data-level') === data.level) {
              levelButtons.forEach(b => b.classList.remove('is-active'));
              btn.classList.add('is-active');
            }
          });
        }

        if (data.dailyGoalMinutes) {
          goalPills.forEach(pill => {
            if (pill.getAttribute('data-minutes') === String(data.dailyGoalMinutes)) {
              goalPills.forEach(p => p.classList.remove('is-active'));
              pill.classList.add('is-active');
              if (goalBadge) goalBadge.textContent = `${data.dailyGoalMinutes} minuti / giorno`;
            }
          });
        }

        if (Array.isArray(data.skills)) {
          skillChips.forEach(chip => {
            if (data.skills.includes(chip.textContent.trim())) {
              chip.classList.add('is-active');
            } else {
              chip.classList.remove('is-active');
            }
          });
        }
      }
    } catch (e) {
      console.error('Errore nel caricamento del profilo salvato:', e);
    }

    updateSkillsCounter();
  }

  loadSavedProfile();
  console.log('Modulo Modifica Profilo SkillPath inizializzato con successo.');
});
