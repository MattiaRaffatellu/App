
  function togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput');
    const eyeIcon = document.getElementById('eyeIcon');
    if (!passwordInput || !eyeIcon) return;

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.textContent = 'visibility_off';
    } else {
      passwordInput.type = 'password';
      eyeIcon.textContent = 'visibility';
    }
  }

  function showToast(message, icon = 'check_circle') {
    const toast = document.getElementById('toastFeedback');
    const toastMsg = document.getElementById('toastMsg');
    const toastIcon = document.getElementById('toastIcon');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    if (toastIcon) toastIcon.textContent = icon;
    toast.classList.remove('opacity-0', 'pointer-events-none');
    toast.classList.add('opacity-100');

    setTimeout(() => {
      toast.classList.remove('opacity-100');
      toast.classList.add('opacity-0', 'pointer-events-none');
    }, 2800);
  }

  function handleLoginSubmit() {
  window.location.href = "../Principale.html";
}
    
    if (submitBtn) {
      submitBtn.classList.add('opacity-80', 'scale-[0.98]');
      submitBtn.innerHTML = `
        <span class="inline-block animate-spin material-symbols-outlined text-[18px]">progress_activity</span>
        <span>Accesso in corso...</span>
      `;
    }

    setTimeout(() => {
      showToast('Benvenuto di nuovo su SkillPath!', 'task_alt');
      if (submitBtn) {
        submitBtn.classList.remove('opacity-80', 'scale-[0.98]');
        submitBtn.innerHTML = `
          <span>Accedi a SkillPath</span>
          <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
        `;
      }
    }, 900);
  

  function simulateBiometricAuth() {
    showToast('Face ID verificato con successo!', 'fingerprint');
  }


