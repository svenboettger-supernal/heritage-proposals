(function () {
  'use strict';

  function open(modal) {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    var closeBtn = modal.querySelector('.jd-modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function close(modal) {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', function (e) {
    var openTrigger = e.target.closest('[data-jd-open]');
    if (openTrigger) {
      e.preventDefault();
      open(document.getElementById(openTrigger.getAttribute('data-jd-open')));
      return;
    }
    var closeTrigger = e.target.closest('[data-jd-close]');
    if (closeTrigger) {
      e.preventDefault();
      close(closeTrigger.closest('.jd-modal'));
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var openModal = document.querySelector('.jd-modal[aria-hidden="false"]');
    if (openModal) close(openModal);
  });
})();
