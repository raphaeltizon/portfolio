/* ============================================================
   RAPHAEL TIZON — PORTFOLIO INTERACTIONS
   Smooth scroll, animations, filters, mobile nav, stats counter
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileNav();
  initScrollReveal();
  initStatsCounter();
  initProjectFilters();
  initContactForm();
  initSmoothScroll();
  initActiveNavHighlight();
  initCertModal();
});

/* ============================================================
   1. NAVBAR — Background on scroll
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run on load
}

/* ============================================================
   2. MOBILE NAVIGATION — Hamburger menu
   ============================================================ */
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');
  if (!toggle || !links) return;

  const closeMenu = () => {
    toggle.classList.remove('active');
    links.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    toggle.classList.add('active');
    links.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  toggle.addEventListener('click', () => {
    if (links.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  // Close on link click
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

/* ============================================================
   3. SCROLL REVEAL — Intersection Observer
   ============================================================ */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  elements.forEach(el => observer.observe(el));
}

/* ============================================================
   4. STATS COUNTER — Animate numbers on hero entry
   ============================================================ */
function initStatsCounter() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  let hasAnimated = false;

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 1500;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          counters.forEach(animateCounter);
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) observer.observe(heroStats);
}

/* ============================================================
   5. PROJECT FILTERS — Category filter with animations
   ============================================================ */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';

        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('hidden');
          card.classList.remove('fading-out');
          card.classList.add('fading-in');

          // Remove animation class after it completes
          card.addEventListener('animationend', () => {
            card.classList.remove('fading-in');
          }, { once: true });
        } else {
          card.classList.add('fading-out');

          // Hide after fade out
          setTimeout(() => {
            card.classList.add('hidden');
            card.classList.remove('fading-out');
          }, 300);
        }
      });
    });
  });
}

/* ============================================================
   6. CONTACT FORM — Basic validation & submit feedback
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      showFormFeedback(form, 'Please fill in all required fields.', 'error');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormFeedback(form, 'Please enter a valid email address.', 'error');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalContent = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();

      if (response.status === 200) {
        submitBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          Message Sent!
        `;
        showFormFeedback(form, 'Thank you! Your message has been sent successfully.', 'success');
        
        setTimeout(() => {
          form.reset();
          submitBtn.innerHTML = originalContent;
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
          removeFeedback(form);
        }, 3000);
      } else {
        throw new Error(data.message || 'Something went wrong.');
      }
    } catch (error) {
      submitBtn.innerHTML = originalContent;
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
      showFormFeedback(form, error.message || 'Something went wrong. Please try again.', 'error');
    }
  });
}

function showFormFeedback(form, message, type) {
  removeFeedback(form);

  const feedback = document.createElement('div');
  feedback.className = `form-feedback form-feedback-${type}`;
  feedback.style.cssText = `
    padding: 0.75rem 1rem;
    border-radius: 8px;
    font-size: 0.88rem;
    font-weight: 500;
    margin-top: 0.5rem;
    animation: fadeInCard 0.3s ease forwards;
    ${type === 'success'
      ? 'background: rgba(34, 197, 94, 0.12); color: #22c55e; border: 1px solid rgba(34, 197, 94, 0.25);'
      : 'background: rgba(239, 68, 68, 0.12); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.25);'
    }
  `;
  feedback.textContent = message;
  form.appendChild(feedback);
}

function removeFeedback(form) {
  const existing = form.querySelector('.form-feedback');
  if (existing) existing.remove();
}

/* ============================================================
   7. SMOOTH SCROLL — For anchor links
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const navHeight = document.getElementById('navbar')?.offsetHeight || 72;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    });
  });
}

/* ============================================================
   8. ACTIVE NAV HIGHLIGHT — Highlight current section
   ============================================================ */
function initActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '-80px 0px -50% 0px',
    }
  );

  sections.forEach(section => observer.observe(section));
}

/* ============================================================
   9. CERTIFICATION MODAL
   ============================================================ */
function initCertModal() {
  const modal = document.getElementById('certModal');
  const modalBody = document.getElementById('certModalBody');
  const closeBtn = document.querySelector('.cert-modal-close');
  const triggers = document.querySelectorAll('.cert-modal-trigger');

  if (!modal || !modalBody || !closeBtn) return;

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const href = trigger.getAttribute('href');
      
      if (href.endsWith('.pdf')) {
        modalBody.innerHTML = `<iframe src="${href}#toolbar=0" title="Certificate"></iframe>`;
      } else {
        modalBody.innerHTML = `<img src="${href}" alt="Certificate">`;
      }
      
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    setTimeout(() => { modalBody.innerHTML = ''; }, 500);
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
