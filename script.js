'use strict';
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
function closeNavigation() {
  navigation.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
}
toggle.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNavigation));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeNavigation();
    toggle.focus();
  }
});
const form = document.querySelector('.contact-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const subject = `Project inquiry: ${values.get('project') || 'Engineering support'}`;
  const body = `Name: ${values.get('name')}\nEmail: ${values.get('email')}\nCompany: ${values.get('company') || 'Not supplied'}\nProject type: ${values.get('project') || 'Not selected'}\n\n${values.get('message')}`;
  window.location.href = `mailto:rendonwalterunabia@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  form.querySelector('.form-status').textContent = 'Your email app should open with this inquiry. Review it and press Send there. If it does not open, email rendonwalterunabia@gmail.com directly.';
});
