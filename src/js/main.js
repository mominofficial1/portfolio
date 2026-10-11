import { projects } from '../data/projects.js';
import { certificates } from '../data/certificates.js';

// Default is always light mode unless explicitly toggled to dark by the user
(function() {
  const savedTheme = localStorage.getItem('momin-theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
  } else {
    document.documentElement.classList.remove('dark-theme');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavbar();
  initMobileDrawer();
  initScrollReveals();
  initLightbox();
  initProjectModals();
  initCopyActions();
  initFilterTabs();
  initAutoProjectStacker();
  initCategoryPills();
});

/* --------------------------------------------------------------------------
   0. DARK / LIGHT THEME TOGGLE
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  if (!toggleBtns.length) return;

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark-theme');
      localStorage.setItem('momin-theme', isDark ? 'dark' : 'light');
    });
  });
}

/* --------------------------------------------------------------------------
   1. NAVBAR SCROLL EFFECT
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   2. MOBILE DRAWER
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    toggleBtn.classList.toggle('active');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* --------------------------------------------------------------------------
   3. SCROLL REVEAL (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.fade-in-up');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   4. CERTIFICATE LIGHTBOX
   -------------------------------------------------------------------------- */
function initLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxClose = document.getElementById('lightbox-close');

  if (!lightbox || !lightboxImg) return;

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-cert-id]').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't hijack if user clicked an explicit external link
      if (e.target.closest('a[target="_blank"]')) return;

      const certId = card.getAttribute('data-cert-id');
      const cert = (certificates || []).find(c => c.id === certId);
      if (cert) {
        lightboxImg.src = cert.image;
        lightboxImg.alt = cert.title || 'Certificate';
        if (lightboxCaption) {
          lightboxCaption.textContent = `${cert.title} — ${cert.issuer} (${cert.date || ''})`;
        }
        if (lightboxDesc) {
          lightboxDesc.textContent = cert.description || '';
        }
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/* --------------------------------------------------------------------------
   5. PROJECT CASE STUDY & DETAILS MODAL
   -------------------------------------------------------------------------- */
function initProjectModals() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalTagline = document.getElementById('modal-tagline');
  const modalCategory = document.getElementById('modal-category');
  const modalPwdWrap = document.getElementById('modal-pwd-wrap');
  const modalPwdVal = document.getElementById('modal-pwd-val');
  const modalDesc = document.getElementById('modal-desc');
  const modalDeliverablesSection = document.getElementById('modal-deliverables-section');
  const modalDeliverables = document.getElementById('modal-deliverables');
  const modalCaseSection = document.getElementById('modal-case-section');
  const modalCaseHeading = document.getElementById('modal-case-heading');
  const modalCompliance = document.getElementById('modal-compliance');
  const modalLiveBtn = document.getElementById('modal-live-btn');
  const modalGithubBtn = document.getElementById('modal-github-btn');
  const modalClose = document.getElementById('modal-close');

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const openProjectModal = (projId) => {
    const proj = (projects || []).find(p => p.id === projId);
    if (!proj) return;

    if (modalImg) {
      modalImg.src = proj.image || '';
      modalImg.alt = proj.title || 'Project Preview';
    }
    const isSquare = proj.category === 'branding' || proj.aspectRatio === 'square';
    modal.classList.toggle('modal-square-project', isSquare);
    if (modalTitle) modalTitle.textContent = proj.title || '';
    if (modalTagline) {
      if (proj.tagline) {
        modalTagline.textContent = proj.tagline;
        modalTagline.style.display = 'block';
      } else {
        modalTagline.style.display = 'none';
      }
    }
    if (modalCategory) {
      modalCategory.textContent = proj.categoryLabel || 'Case Study';
    }

    // Password Indicator
    if (modalPwdWrap && modalPwdVal) {
      if (proj.password) {
        modalPwdVal.textContent = proj.password;
        modalPwdWrap.style.display = 'inline-flex';
      } else {
        modalPwdWrap.style.display = 'none';
      }
    }

    if (modalDesc) {
      modalDesc.textContent = proj.description || '';
    }

    // Deliverables list
    if (modalDeliverables) {
      modalDeliverables.innerHTML = '';
      if (proj.deliverables && proj.deliverables.length) {
        proj.deliverables.forEach(d => {
          const li = document.createElement('li');
          li.textContent = d;
          modalDeliverables.appendChild(li);
        });
        if (modalDeliverablesSection) {
          const secTitle = modalDeliverablesSection.querySelector('.modal-section-title');
          if (secTitle) {
            secTitle.textContent = proj.category === 'branding' ? 'Services Provided' : 'Key Deliverables & Stack';
          }
          modalDeliverablesSection.style.display = 'block';
        }
      } else {
        if (modalDeliverablesSection) modalDeliverablesSection.style.display = 'none';
      }
    }

    // Case metrics / Problem-Strategy-Result / Creative Breakdown / SMM Research
    if (modalCompliance && modalCaseSection) {
      if (proj.researchStrategy) {
        let html = `
          <div class="modal-smm-meta">
            <div class="modal-smm-item"><strong>Client / Project</strong><span>${proj.clientName || proj.title}</span></div>
            <div class="modal-smm-item"><strong>Platform</strong><span>${proj.platform || 'Social Media'}</span></div>
            <div class="modal-smm-item"><strong>My Role</strong><span>${proj.role || 'Social Media Manager'}</span></div>
            <div class="modal-smm-item"><strong>Project Type</strong><span>${proj.projectType || 'Page Management'}</span></div>
          </div>
          ${proj.objective ? `<div class="case-item"><strong class="case-label">Project Objective:</strong><p>${proj.objective}</p></div>` : ''}
          ${proj.responsibilities && proj.responsibilities.length ? `
            <div class="case-item">
              <strong class="case-label">Main Responsibilities:</strong>
              <ul style="margin: 0.5rem 0 0 1.2rem; line-height: 1.6; color: var(--text-dark-muted); font-size: 0.9rem;">
                ${proj.responsibilities.map(r => `<li>${r}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
          <div class="case-item">
            <strong class="case-label">Research &amp; Content Strategy:</strong>
            <div class="modal-smm-tags">
              <span class="modal-smm-tag">Content Research</span>
              <span class="modal-smm-tag">Title Research</span>
              <span class="modal-smm-tag">Description Research</span>
              ${(proj.serviceTags || []).filter(t => !['Content Research', 'Title Research', 'Description Research'].includes(t)).map(t => `<span class="smm-tag-chip">${t}</span>`).join('')}
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 0.75rem; font-size: 0.92rem; line-height: 1.6; color: var(--text-dark-muted);">
              <div><strong style="color: var(--text-dark);">• Content Research:</strong> ${proj.researchStrategy.contentResearch}</div>
              <div><strong style="color: var(--text-dark);">• Title Research:</strong> ${proj.researchStrategy.titleResearch}</div>
              <div><strong style="color: var(--text-dark);">• Description Research:</strong> ${proj.researchStrategy.descriptionResearch}</div>
              ${proj.researchStrategy.keywordHashtagResearch ? `<div><strong style="color: var(--text-dark);">• Keyword &amp; Hashtag Research:</strong> ${proj.researchStrategy.keywordHashtagResearch}</div>` : ''}
              ${proj.researchStrategy.competitorResearch ? `<div><strong style="color: var(--text-dark);">• Competitor &amp; Market Research:</strong> ${proj.researchStrategy.competitorResearch}</div>` : ''}
            </div>
          </div>
          ${proj.workflow ? `
            <div class="case-item">
              <strong class="case-label">Project Workflow:</strong>
              <div class="modal-workflow-steps">
                <div class="modal-workflow-step"><strong>1. Research</strong><p>${proj.workflow.research}</p></div>
                <div class="modal-workflow-step"><strong>2. Plan</strong><p>${proj.workflow.plan}</p></div>
                <div class="modal-workflow-step"><strong>3. Design</strong><p>${proj.workflow.design}</p></div>
                <div class="modal-workflow-step"><strong>4. Produce</strong><p>${proj.workflow.produce}</p></div>
                <div class="modal-workflow-step"><strong>5. Publish</strong><p>${proj.workflow.publish}</p></div>
                <div class="modal-workflow-step"><strong>6. Manage</strong><p>${proj.workflow.manage}</p></div>
              </div>
            </div>
          ` : ''}
          ${proj.caseStudySummary ? `
            <div class="case-item">
              <strong class="case-label">Case Study Summary:</strong>
              <p>${proj.caseStudySummary}</p>
            </div>
          ` : ''}
        `;
        modalCompliance.innerHTML = html;
        if (modalCaseHeading) modalCaseHeading.textContent = 'Social Media Management — In-Depth Case Study';
        modalCaseSection.style.display = 'block';
      } else if (proj.role || proj.creativeWork || (proj.overview && proj.overview !== proj.description) || proj.problem || proj.strategy || proj.result) {
        let html = '';
        if (proj.overview && proj.overview !== proj.description) {
          html += `<div class="case-item"><strong class="case-label">Project Overview:</strong><p>${proj.overview}</p></div>`;
        }
        if (proj.role) {
          html += `<div class="case-item"><strong class="case-label">My Role:</strong><p>${proj.role}</p></div>`;
        }
        if (proj.creativeWork) {
          html += `<div class="case-item"><strong class="case-label">Creative &amp; Technical Execution:</strong><p>${proj.creativeWork}</p></div>`;
        }
        if (proj.problem) {
          html += `<div class="case-item"><strong class="case-label">Challenge &amp; Context:</strong><p>${proj.problem}</p></div>`;
        }
        if (proj.strategy) {
          html += `<div class="case-item"><strong class="case-label">Editing, Motion &amp; Research Strategy:</strong><p>${proj.strategy}</p></div>`;
        }
        if (proj.result) {
          html += `<div class="case-item"><strong class="case-label">Recognition &amp; Impact:</strong><p>${proj.result}</p></div>`;
        }
        modalCompliance.innerHTML = html;
        if (modalCaseHeading) {
          modalCaseHeading.textContent = proj.id === 'terra-farm-nasa'
            ? 'NASA Space Apps 2025 — In-Depth Case Study'
            : (proj.category === 'branding' ? 'Creative Overview & Case Study' : 'Case Study Breakdown');
        }
        modalCaseSection.style.display = 'block';
      } else if (proj.gmcCompliance) {
        modalCompliance.innerHTML = `<div class="case-item"><p>${proj.gmcCompliance}</p></div>`;
        if (modalCaseHeading) modalCaseHeading.textContent = 'GMC / Merchant Compliance';
        modalCaseSection.style.display = 'block';
      } else {
        modalCaseSection.style.display = 'none';
      }
    }

    // Action buttons
    if (modalLiveBtn) {
      if (proj.url) {
        modalLiveBtn.href = proj.url;
        modalLiveBtn.style.display = 'inline-flex';
        modalLiveBtn.target = '_blank';
        modalLiveBtn.rel = 'noopener noreferrer';
        const spanText = modalLiveBtn.querySelector('span:first-child');
        if (spanText) {
          if (proj.linkLabel) {
            spanText.textContent = proj.linkLabel;
          } else if (proj.url.includes('youtu.be') || proj.url.includes('youtube.com') || proj.platform === 'YouTube') {
            spanText.textContent = 'Watch Video on YouTube';
          } else if (proj.platform === 'Facebook' || proj.url.includes('facebook.com')) {
            spanText.textContent = 'View Live Facebook Page';
          } else if (proj.platform === 'Instagram' || proj.url.includes('instagram.com')) {
            spanText.textContent = 'View Live Instagram Profile';
          } else if (proj.category === 'app' || proj.id === 'fair-prices') {
            spanText.textContent = 'Download APK (Android)';
          } else if (proj.url.includes('drive.google.com')) {
            spanText.textContent = 'View in Google Drive';
          } else {
            spanText.textContent = 'Open Live Website';
          }
        }
      } else {
        modalLiveBtn.style.display = 'none';
      }
    }

    if (modalGithubBtn) {
      if (proj.githubUrl) {
        modalGithubBtn.href = proj.githubUrl;
        modalGithubBtn.style.display = 'inline-flex';
        modalGithubBtn.target = '_blank';
        modalGithubBtn.rel = 'noopener noreferrer';
      } else {
        modalGithubBtn.style.display = 'none';
      }
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  // Attach event listener with delegation / data-project-id check
  document.addEventListener('click', (e) => {
    // If clicking a direct link with an actual destination page, let it navigate normally
    const link = e.target.closest('a');
    if (link) {
      const href = link.getAttribute('href');
      if (link.target === '_blank' || (href && !href.startsWith('#') && !href.startsWith('javascript:'))) {
        return;
      }
    }

    const trigger = e.target.closest('[data-project-id]');
    if (trigger) {
      // Don't trigger if clicking inside the open modal itself
      if (trigger.closest('#project-modal') && !e.target.closest('[data-project-id]')) return;
      
      const projId = trigger.getAttribute('data-project-id');
      if (projId) {
        e.preventDefault();
        openProjectModal(projId);
      }
    }
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   6. COPY ACTION WITH TOAST
   -------------------------------------------------------------------------- */
function initCopyActions() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied: ${textToCopy}`);
      }).catch(() => {
        showToast(`Selected: ${textToCopy}`);
      });
    });
  });
}

export function showToast(message) {
  let toast = document.querySelector('.toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* --------------------------------------------------------------------------
   7. FILTER TABS (ON WORKS PAGE)
   -------------------------------------------------------------------------- */
function initFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-category]');
  const smmSection = document.getElementById('social-media-management');

  function applyFilter(filter) {
    projectCards.forEach(card => {
      const cats = (card.getAttribute('data-category') || '').trim().split(/\s+/);
      if (filter === 'all' || cats.includes(filter)) {
        card.style.display = 'flex';
        card.classList.add('fade-in-up', 'visible');
      } else {
        card.style.display = 'none';
      }
    });

    // Social Media Management section MUST ONLY be visible in 'all' or 'social' filter
    if (smmSection) {
      if (filter === 'all' || filter === 'social') {
        smmSection.style.display = 'block';
      } else {
        smmSection.style.display = 'none';
      }
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      applyFilter(filter);

      if (filter === 'social') {
        const smmSection = document.getElementById('social-media-management');
        if (smmSection) {
          setTimeout(() => {
            smmSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 80);
        }
      }
    });
  });

  // Auto-select filter if URL parameter is present (e.g. ?filter=social or ?filter=branding)
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter');
  if (filterParam) {
    const matchingBtn = Array.from(filterBtns).find(b => b.getAttribute('data-filter') === filterParam);
    if (matchingBtn) {
      filterBtns.forEach(b => b.classList.remove('active'));
      matchingBtn.classList.add('active');
      applyFilter(filterParam);
    }
  }

  // If directly navigating to #social-media-management or ?filter=social, scroll smoothly
  if (window.location.hash === '#social-media-management' || filterParam === 'social') {
    const smmSection = document.getElementById('social-media-management');
    if (smmSection) {
      setTimeout(() => {
        smmSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }
}

/* --------------------------------------------------------------------------
   7B. HOMEPAGE CATEGORY PILLS INTERACTION
   -------------------------------------------------------------------------- */
function initCategoryPills() {
  const pillContainer = document.getElementById('category-pills');
  if (!pillContainer) return;

  const pillBtns = pillContainer.querySelectorAll('.category-pill-btn');
  const categoryCards = document.querySelectorAll('.category-card[data-category]');
  if (!pillBtns.length || !categoryCards.length) return;

  pillBtns.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const targetCat = pill.getAttribute('data-category');

      // Update active pill
      pillBtns.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');

      // Highlight and scroll to matching card
      categoryCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (cat === targetCat) {
          card.classList.add('highlighted');
          card.classList.remove('dimmed');
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          card.classList.remove('highlighted');
          card.classList.add('dimmed');
        }
      });

      // Clear dimmed after 3 seconds
      setTimeout(() => {
        categoryCards.forEach(c => c.classList.remove('dimmed'));
      }, 3000);
    });
  });
}

/* --------------------------------------------------------------------------
   8. COMPACT AUTO-STACKING PROJECT DECK (MULTI-DIRECTIONAL PHYSICS)
   -------------------------------------------------------------------------- */
function initAutoProjectStacker() {
  const deck = document.getElementById('auto-stack-deck');
  if (!deck) return;

  const items = Array.from(deck.querySelectorAll('.auto-stack-item'));
  const dotsContainer = document.getElementById('auto-stack-dots');
  const prevBtn = document.getElementById('auto-stack-prev');
  const nextBtn = document.getElementById('auto-stack-next');
  if (!items.length) return;

  const total = items.length;
  let currentIndex = 0;
  let timer = null;
  const intervalMs = 2800;

  // Multi-directional trajectory classes (charidik theke asbe)
  const directions = ['dir-tl', 'dir-tr', 'dir-r', 'dir-br', 'dir-b', 'dir-bl', 'dir-l', 'dir-t', 'dir-tr', 'dir-bl'];

  // Build dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    items.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `auto-stack-dot ${idx === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => {
        currentIndex = idx;
        updateDeck();
        resetTimer();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateDeck() {
    items.forEach((item, idx) => {
      // Remove previous position and direction classes
      item.classList.remove('card-pos-0', 'card-pos-1', 'card-pos-2', 'card-pos-3', 'dir-tl', 'dir-tr', 'dir-r', 'dir-br', 'dir-b', 'dir-bl', 'dir-l', 'dir-t', 'card-hidden');

      const relativeIndex = (idx - currentIndex + total) % total;
      const dirClass = directions[idx % directions.length];

      if (relativeIndex === 0) {
        item.classList.add('card-pos-0');
      } else if (relativeIndex === 1) {
        item.classList.add('card-pos-1');
      } else if (relativeIndex === 2) {
        item.classList.add('card-pos-2');
      } else if (relativeIndex === 3) {
        item.classList.add('card-pos-3');
      } else {
        item.classList.add(dirClass);
      }
    });

    // Update dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.auto-stack-dot');
      dots.forEach((d, i) => {
        d.classList.toggle('active', i === currentIndex);
      });
    }
  }

  function nextCard() {
    currentIndex = (currentIndex + 1) % total;
    updateDeck();
  }

  function prevCard() {
    currentIndex = (currentIndex - 1 + total) % total;
    updateDeck();
  }

  function startTimer() {
    stopTimer();
    timer = setInterval(nextCard, intervalMs);
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function resetTimer() {
    startTimer();
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextCard();
      resetTimer();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevCard();
      resetTimer();
    });
  }

  // Click on active card to advance
  deck.addEventListener('click', (e) => {
    const card = e.target.closest('.auto-stack-item');
    if (card && card.classList.contains('card-pos-0')) {
      nextCard();
      resetTimer();
    }
  });

  // Pause auto-stacking on hover
  deck.addEventListener('mouseenter', stopTimer);
  deck.addEventListener('mouseleave', startTimer);

  // Initialize
  updateDeck();
  startTimer();
}




/* --------------------------------------------------------------------------
   8. CLIENT INQUIRY FORM & PACKAGE SELECTORS
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('project-inquiry-form');
  if (!form) return;

  const servicePills = form.querySelectorAll('.service-pill');
  const budgetPills = form.querySelectorAll('.budget-pill');
  const nameInput = document.getElementById('client-name');
  const emailInput = document.getElementById('client-email');
  const phoneInput = document.getElementById('client-phone');
  const timelineSelect = document.getElementById('client-timeline');
  const detailsInput = document.getElementById('client-details');
  const btnSubmit = document.getElementById('btn-submit-inquiry');
  const btnWhatsApp = document.getElementById('btn-whatsapp-inquiry');

  // Service Pills Toggle
  servicePills.forEach(pill => {
    pill.addEventListener('click', () => {
      servicePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // Budget Pills Toggle
  budgetPills.forEach(pill => {
    pill.addEventListener('click', () => {
      budgetPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  function getSelectedService() {
    const active = form.querySelector('.service-pill.active');
    return active ? (active.getAttribute('data-service') || active.innerText.trim()) : 'Custom Project';
  }

  function getSelectedBudget() {
    const active = form.querySelector('.budget-pill.active');
    return active ? (active.getAttribute('data-budget') || active.innerText.trim()) : '$250 - $500';
  }

  // Submit via Mailto / Email & Toast
  if (btnSubmit) {
    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const timeline = timelineSelect ? timelineSelect.value : '1 - 2 weeks';
      const details = detailsInput ? detailsInput.value.trim() : '';
      const service = getSelectedService();
      const budget = getSelectedBudget();

      if (!name || !email || !details) {
        showToast('Please enter your name, email, and project details.');
        if (!name && nameInput) nameInput.focus();
        else if (!email && emailInput) emailInput.focus();
        else if (!details && detailsInput) detailsInput.focus();
        return;
      }

      btnSubmit.disabled = true;
      btnSubmit.innerHTML = '<span>Preparing Inquiry...</span> <span class="spinner">⏳</span>';

      setTimeout(() => {
        showToast('Thank you! Opening email client with your project details...');
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = '<span>Inquiry Prepared ✓</span> <span>→</span>';

        const subject = encodeURIComponent(`Project Inquiry: ${service} (${name})`);
        const body = encodeURIComponent(
          `Hi Momin,\n\nI would like to inquire about a project:\n\n` +
          `• Client / Brand: ${name}\n` +
          `• Email: ${email}\n` +
          `• Phone / WhatsApp: ${phone || 'Not provided'}\n` +
          `• Required Service: ${service}\n` +
          `• Estimated Budget: ${budget}\n` +
          `• Desired Timeline: ${timeline}\n\n` +
          `Project Details:\n${details}\n\nBest regards,\n${name}`
        );

        window.location.href = `mailto:232311005@vu.edu.bd?subject=${subject}&body=${body}`;
      }, 600);
    });
  }

  // Instant WhatsApp Message
  if (btnWhatsApp) {
    btnWhatsApp.addEventListener('click', () => {
      const name = nameInput ? nameInput.value.trim() : 'Prospective Client';
      const email = emailInput ? emailInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const timeline = timelineSelect ? timelineSelect.value : '1 - 2 weeks';
      const details = detailsInput ? detailsInput.value.trim() : 'Project inquiry from portfolio';
      const service = getSelectedService();
      const budget = getSelectedBudget();

      const text = encodeURIComponent(
        `Hello Momin, I would like to discuss a project:\n\n` +
        `• Name: ${name}\n` +
        `• Service: ${service}\n` +
        `• Budget: ${budget}\n` +
        `• Timeline: ${timeline}\n` +
        (email ? `• Email: ${email}\n` : '') +
        (phone ? `• Phone: ${phone}\n` : '') +
        `• Brief: ${details}`
      );

      showToast('Opening WhatsApp with your project summary...');
      window.open(`https://wa.me/8801792872188?text=${text}`, '_blank');
    });
  }
}

function initPackageSelectors() {
  document.querySelectorAll('.btn-card-inquire').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const packageName = btn.getAttribute('data-package') || '';
      const packageBudget = btn.getAttribute('data-budget') || '';
      const packageService = btn.getAttribute('data-service') || '';
      const formSection = document.getElementById('contact-form');

      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });

        // Highlight matching budget
        if (packageBudget) {
          const budgetPills = formSection.querySelectorAll('.budget-pill');
          budgetPills.forEach(p => {
            if (p.getAttribute('data-budget') === packageBudget) {
              p.click();
            }
          });
        }

        // Highlight matching service
        if (packageService) {
          const servicePills = formSection.querySelectorAll('.service-pill');
          servicePills.forEach(p => {
            if (p.getAttribute('data-service') === packageService) {
              p.click();
            }
          });
        }

        // Pre-fill message
        const detailsInput = document.getElementById('client-details');
        if (detailsInput) {
          detailsInput.value = `I am interested in your ${packageName} package. Here are my project requirements and goals:\n`;
        }

        const nameInput = document.getElementById('client-name');
        if (nameInput) {
          setTimeout(() => nameInput.focus(), 600);
        }

        showToast(`Selected ${packageName} package! Please complete your details.`);
      } else {
        window.location.href = 'index.html#contact-form';
      }
    });
  });
}
