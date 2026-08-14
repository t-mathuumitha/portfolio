/**
 * MATHUUMITHA THEVARAJAH - PORTFOLIO WEBSITE SCRIPT
 * Pure Vanilla JavaScript (No Frameworks or External Libraries)
 */

document.addEventListener('DOMContentLoaded', () => {

  // ================= 1. DATA DEFINITIONS ================= //

  const SKILLS_DATA = [
    { name: 'Python (Pandas / NumPy)', cat: 'technical', pct: 85, level: 'Advanced', desc: 'Data cleaning, EDA & statistical scripting' },
    { name: 'SQL & Database Design', cat: 'technical', pct: 88, level: 'Advanced', desc: 'Complex joins, aggregates & schema design' },
    { name: 'Power BI & Dashboards', cat: 'data', pct: 82, level: 'Proficient', desc: 'Interactive visual reports & DAX metrics' },
    { name: 'Microsoft Excel (Advanced)', cat: 'data', pct: 90, level: 'Expert', desc: 'Pivot tables, VLOOKUP & financial modeling' },
    { name: 'Java (OOP)', cat: 'technical', pct: 80, level: 'Proficient', desc: 'Object-oriented software development' },
    { name: 'HTML5 & CSS3', cat: 'web', pct: 88, level: 'Advanced', desc: 'Responsive layouts & modern CSS' },
    { name: 'JavaScript (Vanilla ES6+)', cat: 'web', pct: 78, level: 'Proficient', desc: 'DOM manipulation & async logic' },
    { name: 'Statistical Analysis', cat: 'data', pct: 84, level: 'Advanced', desc: 'Hypothesis testing & predictive modeling' },
    { name: 'Problem Solving & Logic', cat: 'soft', pct: 92, level: 'Expert', desc: 'Algorithmic reasoning & process flow' },
    { name: 'Analytical Thinking', cat: 'soft', pct: 90, level: 'Expert', desc: 'Critical assessment & pattern recognition' },
    { name: 'Communication & Presenting', cat: 'soft', pct: 88, level: 'Advanced', desc: 'Explaining complex insights clearly' },
    { name: 'Teamwork & Leadership', cat: 'soft', pct: 90, level: 'Expert', desc: 'Executive committee leadership in IEEE' }
  ];

  let PROJECTS_DATA = [
    {
      id: 'pet-adoption',
      num: 'PROJECT 01',
      title: 'Pet Adoption Management System',
      subtitle: 'Desktop Application for Animal Welfare Management',
      cat: 'software',
      tags: ['Java', 'OOP', 'Swing UI', 'File I/O', 'MySQL'],
      badge: 'Java & OOP',
      desc: 'A comprehensive desktop application designed to streamline pet adoption workflows, maintain pet medical profiles, manage adopter applications, and record adoption statuses efficiently using object-oriented principles.',
      highlights: [
        'Built with Java Swing UI adhering to strict OOP principles (Inheritance, Encapsulation, Polymorphism).',
        'Features pet profile registration, status tracking (Available, Pending, Adopted), and adopter matching.',
        'Integrated file persistence and relational database connections for audit logs.',
        'Reduces administrative response time by 40% for adoption coordinators.'
      ],
      image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/Mathuumitha/Pet-Adoption-System',
      linkedin: 'https://www.linkedin.com/in/mathuumitha-thevarajah',
      demo: '#'
    },
    {
      id: 'calculator',
      num: 'PROJECT 02',
      title: 'Interactive Web Calculator',
      subtitle: 'Modern Clean Frontend Web Utility',
      cat: 'web',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation'],
      badge: 'Frontend Web',
      desc: 'An elegant, responsive web calculator built with clean semantic HTML5, modern CSS flex/grid layout, and vanilla JavaScript handling mathematical expressions, memory operations, and keyboard inputs.',
      highlights: [
        'Supports standard arithmetic operations (+, -, ×, ÷, %, √) and exponent calculations.',
        'Full keyboard event binding for instant desktop accessibility.',
        'Calculates real-time expression history with memory recall capabilities.',
        '100% pure vanilla JavaScript implementation with modular architecture.'
      ],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/Mathuumitha/Web-Calculator',
      linkedin: 'https://www.linkedin.com/in/mathuumitha-thevarajah',
      demo: '#'
    },
    {
      id: 'data-analysis',
      num: 'PROJECT 03',
      title: 'Exploratory Data Analysis Project',
      subtitle: 'Statistical Data Analytics & Insight Extraction',
      cat: 'data',
      tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA'],
      badge: 'Data Science',
      desc: 'An end-to-end exploratory data analysis project examining complex multi-variable datasets to identify hidden trends, missing data patterns, correlations, and business performance metrics.',
      highlights: [
        'Data cleaning, missing value imputation, and outlier detection using Pandas and NumPy.',
        'Statistical distribution analysis and correlation heatmaps generated with Matplotlib and Seaborn.',
        'Formulated actionable recommendations based on data findings.',
        'Documented reproducible analysis workflow with summary statistical reports.'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/Mathuumitha/EDA-Python-Analytics',
      linkedin: 'https://www.linkedin.com/in/mathuumitha-thevarajah',
      demo: '#'
    },
    {
      id: 'data-visualization',
      num: 'PROJECT 04',
      title: 'Business Intelligence Dashboard',
      subtitle: 'Interactive Power BI & Excel Visual Reporting',
      cat: 'visualization',
      tags: ['Power BI', 'Excel', 'DAX', 'Data Modeling', 'Business Intelligence'],
      badge: 'Power BI & BI',
      desc: 'An executive-level interactive business intelligence dashboard summarizing key performance indicators (KPIs), regional performance, revenue distributions, and predictive trend lines.',
      highlights: [
        'Designed custom DAX measures for YTD growth, moving averages, and dynamic variance analysis.',
        'Created interactive cross-filtering visuals (slicers, heat maps, funnel charts, line graphs).',
        'Transformed raw unstructured CSV datasets into a optimized star-schema relational model.',
        'Empowers decision-makers with instant visual summaries and drill-down details.'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/Mathuumitha/BI-Executive-Dashboard',
      linkedin: 'https://www.linkedin.com/in/mathuumitha-thevarajah',
      demo: '#'
    }
  ];

  let CERTIFICATIONS_DATA = [];

  const ACHIEVEMENTS_DATA = [
    {
      title: 'HERO Volunteer — Zero Plastic Initiative',
      org: 'University of Vavuniya',
      date: '2025',
      desc: 'Active volunteer in the Zero Plastic Initiative at University of Vavuniya, advocating for sustainability and campus plastic reduction drives.'
    },
    {
      title: 'Best Presenter of the Year — Finalist',
      org: 'Zero Plastic Volunteer Awards',
      date: '2025',
      desc: 'Recognized as a finalist for outstanding presentation skills, sustainability advocacy, and impactful public speaking.'
    },
    {
      title: 'IEEE Leadership & Organizational Achievements',
      org: 'IEEE Computer Society Student Branch Chapter, University of Vavuniya',
      date: '2024 - Present',
      desc: 'Serving as Secretary & Executive Committee Member, leading chapter administrative functions, student outreach, and technical workshops.'
    }
  ];

  // ================= 2. NAVIGATION & SIDEBAR LOGIC ================= //

  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollLinks = document.querySelectorAll('.scroll-link');
  const sections = document.querySelectorAll('main > section');

  // Toggle Mobile Menu
  function openMobileMenu() {
    if (sidebar) sidebar.classList.add('mobile-open');
    if (sidebarOverlay) sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (sidebar) sidebar.classList.remove('mobile-open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuToggleBtn) {
    menuToggleBtn.addEventListener('click', () => {
      if (sidebar.classList.contains('mobile-open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeMobileMenu);
  }

  // Smooth Scroll to Section
  function scrollToSection(sectionId) {
    let targetSection = document.getElementById(sectionId);

    // Smart aliases for Education and Experience sub-sections
    if (sectionId === 'education') {
      const edCol = document.getElementById('col-education');
      targetSection = edCol || document.getElementById('resume');
      const edBtn = document.querySelector('[data-filter-resume="education"]');
      if (edBtn) edBtn.click();
    } else if (sectionId === 'experience') {
      const expCol = document.getElementById('col-experience');
      targetSection = expCol || document.getElementById('resume');
      const expBtn = document.querySelector('[data-filter-resume="experience"]');
      if (expBtn) expBtn.click();
    }

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMobileMenu();
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('data-section');
      scrollToSection(sectionId);
    });
  });

  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('data-section');
      scrollToSection(sectionId);
    });
  });

  // Active Link Highlighting on Scroll
  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        const secAttr = link.getAttribute('data-section');
        if (
          secAttr === currentSectionId ||
          (currentSectionId === 'resume' && (secAttr === 'education' || secAttr === 'experience'))
        ) {
          if (currentSectionId === 'resume' && (secAttr === 'education' || secAttr === 'experience')) {
            const edCol = document.getElementById('col-education');
            const expCol = document.getElementById('col-experience');
            if (edCol && expCol) {
              const edTop = edCol.getBoundingClientRect().top;
              const expTop = expCol.getBoundingClientRect().top;
              if (secAttr === 'education' && edTop < 300) {
                link.classList.add('active');
              } else if (secAttr === 'experience' && expTop < 300) {
                link.classList.add('active');
              } else if (secAttr === 'education' && expTop >= 300) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
              return;
            }
          }
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });

  // Back to top button
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ================= 3. RESUME FILTER LOGIC ================= //

  const resumeFilterBtns = document.querySelectorAll('[data-filter-resume]');
  const colEducation = document.getElementById('col-education');
  const colExperience = document.getElementById('col-experience');

  resumeFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      resumeFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter-resume');

      if (filter === 'all') {
        if (colEducation) colEducation.style.display = 'block';
        if (colExperience) colExperience.style.display = 'block';
        document.querySelectorAll('[data-exp-type]').forEach(el => el.style.display = 'block');
      } else if (filter === 'education') {
        if (colEducation) colEducation.style.display = 'block';
        if (colExperience) colExperience.style.display = 'none';
      } else if (filter === 'experience') {
        if (colEducation) colEducation.style.display = 'none';
        if (colExperience) colExperience.style.display = 'block';
        document.querySelectorAll('[data-exp-type]').forEach(el => {
          if (el.getAttribute('data-exp-type') === 'experience') {
            el.style.display = 'block';
          } else {
            el.style.display = 'none';
          }
        });
      } else if (filter === 'leadership') {
        if (colEducation) colEducation.style.display = 'none';
        if (colExperience) colExperience.style.display = 'block';
        document.querySelectorAll('[data-exp-type]').forEach(el => {
          if (el.getAttribute('data-exp-type') === 'leadership') {
            el.style.display = 'block';
          } else {
            el.style.display = 'none';
          }
        });
      }
    });
  });

  // ================= 4. SKILLS RENDER & FILTER ================= //

  const skillsGrid = document.getElementById('skills-grid');
  const skillsFilterBtns = document.querySelectorAll('[data-filter-skills]');

  function renderSkills(filterCategory = 'all') {
    if (!skillsGrid) return;

    skillsGrid.innerHTML = '';

    const filtered = SKILLS_DATA.filter(skill => {
      if (filterCategory === 'all') return true;
      return skill.cat === filterCategory;
    });

    filtered.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'portfolio-card skill-card';
      card.innerHTML = `
        <div class="skill-header">
          <div>
            <h4 class="skill-name">${skill.name}</h4>
            <p class="skill-desc">${skill.desc}</p>
          </div>
          <span class="skill-pct">${skill.pct}%</span>
        </div>
        <div class="skill-bar-bg">
          <div class="skill-bar-fill" style="width: ${skill.pct}%;"></div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem; font-size: 0.65rem; font-family: var(--font-mono); color: var(--text-muted);">
          <span>Level: <strong style="color: #fff;">${skill.level}</strong></span>
          <span style="text-transform: uppercase;">${skill.cat}</span>
        </div>
      `;
      skillsGrid.appendChild(card);
    });
  }

  skillsFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillsFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter-skills');
      renderSkills(cat);
    });
  });

  // Initial render
  renderSkills('all');

  // ================= 5. PROJECTS RENDER, FILTER & ADMIN SYSTEM ================= //

  let activeProjectFilter = 'all';
  let isAdminLoggedIn = false;
  let adminToken = sessionStorage.getItem('admin_token') || '';

  const projectsGrid = document.getElementById('projects-grid');
  const projectFilterBtns = document.querySelectorAll('[data-filter-projects]');

  // Admin UI Elements
  const adminAccessBtn = document.getElementById('admin-access-btn');
  const adminStatusBar = document.getElementById('admin-status-bar');
  const adminAddProjectBtn = document.getElementById('admin-add-project-btn');
  const adminLogoutBtn = document.getElementById('admin-logout-btn');

  const adminLoginModal = document.getElementById('admin-login-modal');
  const closeAdminLoginModalBtn = document.getElementById('close-admin-login-modal');
  const cancelAdminLoginBtn = document.getElementById('cancel-admin-login-btn');
  const adminLoginForm = document.getElementById('admin-login-form');
  const adminPasswordInput = document.getElementById('admin-password-input');
  const adminLoginError = document.getElementById('admin-login-error');

  const adminProjectModal = document.getElementById('admin-project-modal');
  const closeAdminProjectModalBtn = document.getElementById('close-admin-project-modal');
  const cancelAdminProjectBtn = document.getElementById('cancel-admin-project-btn');
  const adminProjectForm = document.getElementById('admin-project-form');
  const adminProjectModalTitle = document.getElementById('admin-project-modal-title');

  const projFormFile = document.getElementById('proj-form-file');
  const projFormImage = document.getElementById('proj-form-image');
  const projImgPreview = document.getElementById('proj-img-preview');
  const projImgPlaceholder = document.getElementById('proj-img-placeholder');
  const projImgStatus = document.getElementById('proj-img-status');

  // Helper for Uploading Image File to Server API
  async function uploadImageFile(file, type = 'upload') {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64Data = e.target.result;
        try {
          const authKey = adminToken || sessionStorage.getItem('admin_token') || '';
          const res = await fetch('/api/upload', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authKey}`
            },
            body: JSON.stringify({ data: base64Data, name: file.name, type })
          });
          const json = await res.json().catch(() => ({}));
          if (res.ok && json.url) {
            resolve(json.url);
          } else {
            resolve(base64Data);
          }
        } catch (err) {
          console.warn('Image upload network issue, saving as base64 string:', err);
          resolve(base64Data);
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // Check admin session with backend authority
  async function checkAdminSession() {
    if (!adminToken) {
      isAdminLoggedIn = false;
      updateAdminUIState();
      return;
    }
    try {
      const res = await fetch('/api/admin/session', {
        headers: { 'Authorization': `Bearer ${adminToken}` }
      });
      if (res.ok) {
        const data = await res.json();
        isAdminLoggedIn = !!data.authenticated;
      } else {
        isAdminLoggedIn = false;
        sessionStorage.removeItem('admin_token');
        adminToken = '';
      }
    } catch (e) {
      console.warn('Session verification note:', e);
      isAdminLoggedIn = false;
    }
    updateAdminUIState();
  }

  // Load projects from backend server API
  async function loadProjects() {
    try {
      const authHeader = adminToken ? { 'Authorization': `Bearer ${adminToken}` } : {};
      const res = await fetch(`/api/projects?t=${Date.now()}`, {
        headers: authHeader,
        cache: 'no-store'
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          PROJECTS_DATA = data;
        }
      }
    } catch (err) {
      console.warn('Backend API connection offline, using cached projects:', err);
    }
    renderProjects(activeProjectFilter);
  }

  function renderProjects(filterCat = 'all') {
    if (!projectsGrid) return;

    activeProjectFilter = filterCat;
    projectsGrid.innerHTML = '';

    // Filter by category and respect visibility in public mode
    const filtered = PROJECTS_DATA.filter(proj => {
      if (!isAdminLoggedIn && proj.visible === false) return false;
      if (filterCat === 'all') return true;
      return proj.cat === filterCat;
    });

    // Sort projects by order if provided
    filtered.sort((a, b) => {
      const orderA = (typeof a.order === 'number') ? a.order : 999;
      const orderB = (typeof b.order === 'number') ? b.order : 999;
      return orderA - orderB;
    });

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 16px;">
          <p style="color: var(--text-muted); font-family: var(--font-mono); font-size: 0.9rem;">No projects found in category "${filterCat.toUpperCase()}".</p>
          ${isAdminLoggedIn ? '<button id="empty-add-proj-btn" class="btn btn-gold" style="margin-top: 1rem; font-size: 0.75rem; padding: 0.45rem 1rem;">+ Add New Project</button>' : ''}
        </div>
      `;
      const emptyAddProjBtn = document.getElementById('empty-add-proj-btn');
      if (emptyAddProjBtn) {
        emptyAddProjBtn.addEventListener('click', openAdminAddProjectModal);
      }
      return;
    }

    filtered.forEach((proj, idx) => {
      const card = document.createElement('div');
      card.className = 'portfolio-card project-card';
      
      // Apply layout modifier classes for asymmetric grid structure
      if (filtered.length >= 3) {
        if (idx % 4 === 0) {
          card.classList.add('card-wide');
        } else if (idx % 4 === 3) {
          card.classList.add('card-featured');
        }
      } else if (filtered.length === 1) {
        card.classList.add('card-wide');
      }
      
      const tags = Array.isArray(proj.tags) ? proj.tags : [];
      const tagsHTML = tags.map(t => `<span class="tag-pill">${t}</span>`).join('');

      const fallbackImg = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';
      const imgSrc = (proj.image && proj.image.trim() !== '') ? proj.image : fallbackImg;

      const imgHTML = `
        <div class="project-img-wrapper">
          <span class="project-number-badge">${proj.num || `PROJECT ${String(idx + 1).padStart(2, '0')}`}</span>
          <img src="${imgSrc}" alt="${proj.title}" class="project-img" onerror="this.onerror=null; this.src='${fallbackImg}';" />
        </div>
      `;

      const adminActionsHTML = isAdminLoggedIn ? `
        <div class="admin-card-actions">
          <button class="admin-action-btn admin-edit-btn" data-edit-id="${proj.id}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            Edit
          </button>
          <button class="admin-action-btn admin-delete-btn" data-delete-id="${proj.id}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            Delete
          </button>
        </div>
      ` : '';

      // LinkedIn button replacing View Details button
      const linkedinUrl = (proj.linkedin && proj.linkedin.trim() !== '') ? proj.linkedin : 'https://www.linkedin.com/in/mathuumitha-thevarajah';
      const linkedinBtnHTML = `
        <a href="${linkedinUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-gold" title="View on LinkedIn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          <span>LINKEDIN</span>
        </a>
      `;

      const githubBtnHTML = (proj.github && proj.github !== '#') ? `
        <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" title="GitHub Repository">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          <span>GITHUB</span>
        </a>
      ` : '';

      const demoBtnHTML = (proj.demo && proj.demo !== '#' && proj.demo !== '') ? `
        <a href="${proj.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" title="Live Demo">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          <span>LIVE DEMO</span>
        </a>
      ` : '';

      card.innerHTML = `
        ${adminActionsHTML}
        ${imgHTML}
        <div class="project-body">
          <div class="project-header">
            <div class="project-header-top">
              <span class="badge-gold">${proj.badge || 'Featured'}</span>
              ${(isAdminLoggedIn && proj.visible === false) ? '<span style="font-size: 0.65rem; color: #f59e0b; background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3); padding: 0.15rem 0.4rem; border-radius: 4px; font-family: var(--font-mono);">Hidden from Public</span>' : ''}
            </div>
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-sub">${proj.subtitle || ''}</p>
          </div>

          <p class="project-desc">${proj.desc}</p>

          <div class="project-tags">
            ${tagsHTML}
          </div>

          <div class="project-footer">
            ${linkedinBtnHTML}
            ${githubBtnHTML}
            ${demoBtnHTML}
          </div>
        </div>
      `;

      projectsGrid.appendChild(card);
    });

    // Attach click listeners to Edit project buttons
    document.querySelectorAll('.admin-edit-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-edit-id');
        openAdminEditProjectModal(id);
      });
    });

    // Attach click listeners to Delete project buttons
    document.querySelectorAll('.admin-delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-delete-id');
        handleDeleteProject(id);
      });
    });
  }

  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter-projects');
      renderProjects(cat);
    });
  });

  // ================= ADMIN MANAGEMENT UI LOGIC ================= //

  function updateAdminUIState() {
    if (adminStatusBar) {
      adminStatusBar.style.display = isAdminLoggedIn ? 'flex' : 'none';
    }
    const adminCertStatusBar = document.getElementById('admin-cert-status-bar');
    if (adminCertStatusBar) {
      adminCertStatusBar.style.display = isAdminLoggedIn ? 'flex' : 'none';
    }
    if (adminAccessBtn) {
      adminAccessBtn.innerHTML = isAdminLoggedIn ? `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        <span style="color: #22c55e;">ADMIN ACTIVE</span>
      ` : `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        <span>ADMIN ACCESS</span>
      `;
    }
    renderProjects(activeProjectFilter);
    renderCertifications();
  }

  if (adminAccessBtn) {
    adminAccessBtn.addEventListener('click', () => {
      if (isAdminLoggedIn) {
        if (adminStatusBar) adminStatusBar.scrollIntoView({ behavior: 'smooth', block: 'center' });
        showToast('Admin Mode is active.');
      } else {
        if (adminLoginError) adminLoginError.style.display = 'none';
        if (adminPasswordInput) adminPasswordInput.value = '';
        if (adminLoginModal) {
          adminLoginModal.classList.add('active');
          document.body.style.overflow = 'hidden';
          if (adminPasswordInput) setTimeout(() => adminPasswordInput.focus(), 150);
        }
      }
    });
  }

  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const pwd = adminPasswordInput ? adminPasswordInput.value.trim() : '';
      if (!pwd) return;

      const submitBtn = adminLoginForm.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.textContent = 'VERIFYING...';

      try {
        const res = await fetch('/api/admin/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password: pwd })
        });

        const data = await res.json();
        if (res.ok && data.success) {
          isAdminLoggedIn = true;
          adminToken = data.token;
          sessionStorage.setItem('admin_token', adminToken);

          if (adminLoginModal) adminLoginModal.classList.remove('active');
          document.body.style.overflow = '';
          showToast('Welcome, Admin! Management mode unlocked.');
          updateAdminUIState();
          await loadProjects();
          await loadCertifications();
        } else {
          if (adminLoginError) {
            adminLoginError.textContent = data.message || 'Invalid administrator password. Access denied.';
            adminLoginError.style.display = 'block';
          }
        }
      } catch (err) {
        console.error('Login error:', err);
        if (adminLoginError) {
          adminLoginError.textContent = 'Server communication error during login.';
          adminLoginError.style.display = 'block';
        }
      } finally {
        if (submitBtn) submitBtn.textContent = 'UNLOCK ADMIN';
      }
    });
  }

  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener('click', async () => {
      try {
        if (adminToken) {
          await fetch('/api/admin/logout', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${adminToken}` }
          }).catch(() => {});
        }
      } catch (e) {
        console.warn('Logout notice:', e);
      }
      isAdminLoggedIn = false;
      adminToken = '';
      sessionStorage.removeItem('admin_token');
      showToast('Admin mode deactivated.');
      updateAdminUIState();
    });
  }

  if (adminAddProjectBtn) {
    adminAddProjectBtn.addEventListener('click', () => {
      openAdminAddProjectModal();
    });
  }

  // Modal Cancel & Close Handlers
  if (closeAdminLoginModalBtn) closeAdminLoginModalBtn.addEventListener('click', closeAdminLoginModal);
  if (cancelAdminLoginBtn) cancelAdminLoginBtn.addEventListener('click', closeAdminLoginModal);

  function closeAdminLoginModal() {
    if (adminLoginModal) adminLoginModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeAdminProjectModalBtn) closeAdminProjectModalBtn.addEventListener('click', closeAdminProjectModal);
  if (cancelAdminProjectBtn) cancelAdminProjectBtn.addEventListener('click', closeAdminProjectModal);

  function closeAdminProjectModal() {
    if (adminProjectModal) adminProjectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Live Project Image Preview Handler
  function updateImagePreview(url) {
    if (!projImgPreview || !projImgPlaceholder || !projImgStatus) return;
    const trimmed = (url || '').trim();
    if (!trimmed) {
      projImgPreview.style.display = 'none';
      projImgPreview.src = '';
      projImgPlaceholder.style.display = 'block';
      projImgStatus.textContent = 'No Image Provided';
      projImgStatus.style.color = 'var(--text-muted)';
      return;
    }

    projImgStatus.textContent = 'Verifying image...';
    projImgStatus.style.color = 'var(--gold-primary)';

    projImgPreview.onload = () => {
      projImgPreview.style.display = 'block';
      projImgPlaceholder.style.display = 'none';
      projImgStatus.textContent = 'Image Ready ✓';
      projImgStatus.style.color = '#22c55e';
    };

    projImgPreview.onerror = () => {
      projImgPreview.style.display = 'none';
      projImgPlaceholder.style.display = 'block';
      projImgStatus.textContent = 'Invalid / Broken Image URL';
      projImgStatus.style.color = '#ef4444';
    };

    projImgPreview.src = trimmed;
  }

  if (projFormImage) {
    projFormImage.addEventListener('input', (e) => {
      updateImagePreview(e.target.value);
    });
  }

  if (projFormFile) {
    projFormFile.addEventListener('change', async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      if (!validTypes.includes(file.type.toLowerCase())) {
        alert('Invalid file format! Please select a valid JPG, JPEG, PNG, or WebP image file.');
        projFormFile.value = '';
        return;
      }

      if (projImgStatus) {
        projImgStatus.textContent = 'Uploading image to server...';
        projImgStatus.style.color = 'var(--gold-primary)';
      }

      try {
        const uploadedUrl = await uploadImageFile(file, 'project');
        if (projFormImage) projFormImage.value = uploadedUrl;
        updateImagePreview(uploadedUrl);
      } catch (err) {
        console.error('Project image upload failed:', err);
        alert('Could not upload image. You can paste an image URL instead.');
      }
    });
  }

  function openAdminAddProjectModal() {
    if (!adminProjectModal) return;
    document.getElementById('proj-form-id').value = '';
    document.getElementById('proj-form-title').value = '';
    document.getElementById('proj-form-cat').value = 'data';
    document.getElementById('proj-form-subtitle').value = '';
    document.getElementById('proj-form-badge').value = '';
    document.getElementById('proj-form-tags').value = '';
    if (projFormFile) projFormFile.value = '';
    document.getElementById('proj-form-image').value = '';
    document.getElementById('proj-form-desc').value = '';
    document.getElementById('proj-form-highlights').value = '';
    document.getElementById('proj-form-github').value = '';
    const linkedinInput = document.getElementById('proj-form-linkedin');
    if (linkedinInput) linkedinInput.value = 'https://www.linkedin.com/in/mathuumitha-thevarajah';
    document.getElementById('proj-form-demo').value = '#';
    const orderInput = document.getElementById('proj-form-order');
    if (orderInput) orderInput.value = (PROJECTS_DATA.length + 1).toString();
    const visibleCheck = document.getElementById('proj-form-visible');
    if (visibleCheck) visibleCheck.checked = true;

    if (adminProjectModalTitle) adminProjectModalTitle.textContent = 'Add New Project';
    updateImagePreview('');
    adminProjectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function openAdminEditProjectModal(projectId) {
    const proj = PROJECTS_DATA.find(p => String(p.id) === String(projectId));
    if (!proj || !adminProjectModal) return;

    document.getElementById('proj-form-id').value = proj.id;
    document.getElementById('proj-form-title').value = proj.title || '';
    document.getElementById('proj-form-cat').value = proj.cat || 'data';
    document.getElementById('proj-form-subtitle').value = proj.subtitle || '';
    document.getElementById('proj-form-badge').value = proj.badge || '';
    document.getElementById('proj-form-tags').value = Array.isArray(proj.tags) ? proj.tags.join(', ') : (proj.tags || '');
    if (projFormFile) projFormFile.value = '';
    document.getElementById('proj-form-image').value = proj.image || '';
    document.getElementById('proj-form-desc').value = proj.desc || '';
    document.getElementById('proj-form-highlights').value = Array.isArray(proj.highlights) ? proj.highlights.join('\n') : (proj.highlights || '');
    document.getElementById('proj-form-github').value = proj.github || '';
    const linkedinInput = document.getElementById('proj-form-linkedin');
    if (linkedinInput) linkedinInput.value = proj.linkedin || 'https://www.linkedin.com/in/mathuumitha-thevarajah';
    document.getElementById('proj-form-demo').value = proj.demo || '#';
    const orderInput = document.getElementById('proj-form-order');
    if (orderInput) orderInput.value = (typeof proj.order === 'number' ? proj.order : '').toString();
    const visibleCheck = document.getElementById('proj-form-visible');
    if (visibleCheck) visibleCheck.checked = proj.visible !== false;

    if (adminProjectModalTitle) adminProjectModalTitle.textContent = `Edit Project: ${proj.title}`;
    updateImagePreview(proj.image || '');
    adminProjectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  if (adminProjectForm) {
    adminProjectForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const id = document.getElementById('proj-form-id').value.trim();
      const title = document.getElementById('proj-form-title').value.trim();
      const cat = document.getElementById('proj-form-cat').value;
      const subtitle = document.getElementById('proj-form-subtitle').value.trim();
      const badge = document.getElementById('proj-form-badge').value.trim();
      const tagsRaw = document.getElementById('proj-form-tags').value;
      const image = document.getElementById('proj-form-image').value.trim();
      const desc = document.getElementById('proj-form-desc').value.trim();
      const highlightsRaw = document.getElementById('proj-form-highlights').value;
      const github = document.getElementById('proj-form-github').value.trim();
      const linkedin = (document.getElementById('proj-form-linkedin') ? document.getElementById('proj-form-linkedin').value.trim() : '') || 'https://www.linkedin.com/in/mathuumitha-thevarajah';
      const demo = document.getElementById('proj-form-demo').value.trim();
      const orderRaw = document.getElementById('proj-form-order') ? document.getElementById('proj-form-order').value.trim() : '';
      const visibleCheck = document.getElementById('proj-form-visible');
      const visible = visibleCheck ? visibleCheck.checked : true;

      const tags = tagsRaw.split(',').map(t => t.trim()).filter(Boolean);
      const highlights = highlightsRaw.split('\n').map(h => h.trim().replace(/^[-•*]\s*/, '')).filter(Boolean);

      const projectPayload = {
        title,
        subtitle,
        cat,
        badge: badge || (cat === 'data' ? 'Data Analytics' : cat === 'visualization' ? 'Power BI' : cat === 'software' ? 'Java & OOP' : 'Web Dev'),
        tags,
        image,
        desc,
        highlights,
        github,
        linkedin,
        demo: demo || '#',
        order: orderRaw ? parseInt(orderRaw, 10) : undefined,
        visible
      };

      const saveBtn = document.getElementById('save-project-btn');
      if (saveBtn) saveBtn.textContent = 'SAVING TO SERVER...';

      try {
        const url = id ? `/api/projects/${encodeURIComponent(id)}` : '/api/projects';
        const method = id ? 'PUT' : 'POST';
        const authKey = adminToken || sessionStorage.getItem('admin_token') || '';

        const res = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authKey}`
          },
          body: JSON.stringify(projectPayload)
        });

        const result = await res.json().catch(() => ({}));
        if (res.ok) {
          closeAdminProjectModal();
          showToast(id ? 'Project updated and saved persistently!' : 'New project saved successfully!');
          await loadProjects();
        } else {
          alert(result.error || result.message || 'Failed to save project to persistent storage.');
        }
      } catch (err) {
        console.error('Save project error:', err);
        alert('Server error while saving project. Please try again.');
      } finally {
        if (saveBtn) saveBtn.textContent = 'SAVE PROJECT';
      }
    });
  }

  async function handleDeleteProject(projectId) {
    if (!projectId) {
      alert('Invalid project ID provided.');
      return;
    }

    const proj = PROJECTS_DATA.find(p => String(p.id) === String(projectId));
    const projTitle = proj ? proj.title : 'Selected project';

    if (!confirm(`Are you sure you want to delete "${projTitle}"?\n\nThis will remove the project permanently from data storage.`)) {
      return;
    }

    const authKey = adminToken || sessionStorage.getItem('admin_token') || '';

    try {
      const res = await fetch(`/api/projects/${encodeURIComponent(projectId)}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authKey}`
        }
      });

      const result = await res.json().catch(() => ({}));

      if (res.ok && result.success) {
        if (result.projects && Array.isArray(result.projects)) {
          PROJECTS_DATA = result.projects;
        } else {
          PROJECTS_DATA = PROJECTS_DATA.filter(p => String(p.id) !== String(projectId));
        }
        showToast(`Project "${projTitle}" removed permanently!`);
        renderProjects(activeProjectFilter);
      } else {
        const errorMsg = result.error || result.message || 'Failed to delete project from server.';
        alert(`Deletion Error: ${errorMsg}`);
        await loadProjects();
      }
    } catch (err) {
      console.error('Delete project error:', err);
      alert('Network or server error deleting project.');
      await loadProjects();
    }
  }

  // ================= 6. CERTIFICATIONS MANAGEMENT & RENDER ================= //

  const adminAddCertBtn = document.getElementById('admin-add-cert-btn');
  const adminManageCertsBtn = document.getElementById('admin-manage-certs-btn');
  const adminListAddCertBtn = document.getElementById('admin-list-add-cert-btn');

  // Lightbox Modal Elements
  const certLightboxModal = document.getElementById('cert-lightbox-modal');
  const closeCertLightboxBtn = document.getElementById('close-cert-lightbox-btn');
  const certViewTitle = document.getElementById('cert-view-title');
  const certViewBadge = document.getElementById('cert-view-badge');
  const certViewIssuer = document.getElementById('cert-view-issuer');
  const certViewIssuerInline = document.getElementById('cert-view-issuer-inline');
  const certViewYearInline = document.getElementById('cert-view-year-inline');
  const certViewImg = document.getElementById('cert-view-img');
  const certViewPlaceholder = document.getElementById('cert-view-placeholder');
  const certViewDesc = document.getElementById('cert-view-desc');
  const certViewCredId = document.getElementById('cert-view-cred-id');
  const certViewLinkWrapper = document.getElementById('cert-view-link-wrapper');
  const certViewLink = document.getElementById('cert-view-link');

  // Admin Cert Table Modal Elements
  const adminCertListModal = document.getElementById('admin-cert-list-modal');
  const closeAdminCertListModalBtn = document.getElementById('close-admin-cert-list-modal');
  const adminCertTableBody = document.getElementById('admin-cert-table-body');

  // Admin Cert Form Modal Elements
  const adminCertModal = document.getElementById('admin-cert-modal');
  const closeAdminCertModalBtn = document.getElementById('close-admin-cert-modal');
  const cancelAdminCertBtn = document.getElementById('cancel-admin-cert-btn');
  const adminCertForm = document.getElementById('admin-cert-form');
  const adminCertModalTitle = document.getElementById('admin-cert-modal-title');
  const certFormId = document.getElementById('cert-form-id');
  const certFormTitle = document.getElementById('cert-form-title');
  const certFormBadge = document.getElementById('cert-form-badge');
  const certFormIssuer = document.getElementById('cert-form-issuer');
  const certFormDate = document.getElementById('cert-form-date');
  const certFormDesc = document.getElementById('cert-form-desc');
  const certFormLink = document.getElementById('cert-form-link');
  const certFormCredId = document.getElementById('cert-form-cred-id');
  const certFormOrder = document.getElementById('cert-form-order');
  const certFormVisible = document.getElementById('cert-form-visible');
  const certFormFile = document.getElementById('cert-form-file');
  const certFormImage = document.getElementById('cert-form-image');
  const certImgPreview = document.getElementById('cert-img-preview');
  const certImgPlaceholder = document.getElementById('cert-img-placeholder');
  const certImgStatus = document.getElementById('cert-img-status');
  const saveCertBtn = document.getElementById('save-cert-btn');

  // Load certifications from backend API
  async function loadCertifications() {
    try {
      const authHeader = adminToken ? { 'Authorization': `Bearer ${adminToken}` } : {};
      const res = await fetch(`/api/certifications?t=${Date.now()}`, {
        headers: authHeader,
        cache: 'no-store'
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          CERTIFICATIONS_DATA = data;
        }
      }
    } catch (err) {
      console.error('Error fetching certifications:', err);
    }
    renderCertifications();
    if (adminCertListModal && adminCertListModal.classList.contains('active')) {
      renderAdminCertTable();
    }
  }

  // Render public certifications grid
  function renderCertifications() {
    const certsGrid = document.getElementById('certifications-grid');
    if (!certsGrid) return;

    certsGrid.innerHTML = '';

    const visibleCerts = CERTIFICATIONS_DATA.filter(cert => {
      if (!isAdminLoggedIn && cert.visible === false) return false;
      return true;
    });

    // Sort by order if provided
    visibleCerts.sort((a, b) => {
      const orderA = (typeof a.order === 'number') ? a.order : 999;
      const orderB = (typeof b.order === 'number') ? b.order : 999;
      return orderA - orderB;
    });

    if (visibleCerts.length === 0) {
      certsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem; background: var(--bg-card); border: 1px dashed var(--border-color); border-radius: 16px;">
          <svg width="40" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" stroke-width="1.5" style="margin: 0 auto 0.75rem auto; opacity: 0.8;"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
          <p style="color: var(--text-gray); font-size: 0.9rem;">No certifications available yet.</p>
          ${isAdminLoggedIn ? '<button id="empty-add-cert-btn" class="btn btn-gold" style="margin-top: 1rem; font-size: 0.75rem; padding: 0.45rem 1rem;">+ Add First Certificate</button>' : ''}
        </div>
      `;
      const emptyAddBtn = document.getElementById('empty-add-cert-btn');
      if (emptyAddBtn) {
        emptyAddBtn.addEventListener('click', openAdminAddCertModal);
      }
      return;
    }

    visibleCerts.forEach(cert => {
      const card = document.createElement('div');
      card.className = 'portfolio-card cert-card';

      const hasImage = cert.image && cert.image.trim().length > 0;
      
      let thumbHTML = '';
      if (hasImage) {
        thumbHTML = `
          <div class="cert-img-thumb btn-view-cert" data-cert-id="${cert.id}" title="Click to view full certificate">
            <img src="${cert.image}" alt="${cert.title}" loading="lazy" />
          </div>
        `;
      } else {
        thumbHTML = `
          <div class="cert-img-thumb btn-view-cert" data-cert-id="${cert.id}" title="Click to view details">
            <div class="cert-placeholder-thumb">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              <span style="font-size: 0.78rem; font-weight: 800; font-family: var(--font-mono); margin-top: 0.35rem;">VERIFIED CREDENTIAL</span>
            </div>
          </div>
        `;
      }

      let adminControlsHTML = '';
      if (isAdminLoggedIn) {
        adminControlsHTML = `
          <button class="btn btn-gold btn-edit-cert" data-cert-id="${cert.id}" style="padding: 0.45rem 0.65rem; font-size: 0.7rem;" title="Edit Certificate">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            <span>EDIT</span>
          </button>
          <button class="btn btn-danger btn-delete-cert" data-cert-id="${cert.id}" style="padding: 0.45rem 0.65rem; font-size: 0.7rem;" title="Delete Certificate">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            <span>DELETE</span>
          </button>
        `;
      }

      card.innerHTML = `
        ${thumbHTML}
        <div style="display: flex; flex-direction: column; gap: 0.5rem; flex: 1;">
          <div class="cert-header">
            <span class="cert-category">${cert.badge || 'Certificate'}</span>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              ${(isAdminLoggedIn && cert.visible === false) ? '<span style="font-size: 0.65rem; color: #f59e0b; font-family: var(--font-mono);">[Hidden]</span>' : ''}
              <span style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--gold-primary); font-weight: 700;">${cert.date}</span>
            </div>
          </div>
          <h3 class="cert-title">${cert.title}</h3>
          <p class="cert-org">${cert.issuer}</p>
          <p style="font-size: 0.78rem; color: var(--text-gray); line-height: 1.5; margin-top: 0.2rem;">${cert.desc || ''}</p>
        </div>
        <div class="cert-footer-actions">
          <button class="btn btn-outline btn-view-cert" data-cert-id="${cert.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            <span>View Certificate</span>
          </button>
          ${adminControlsHTML}
        </div>
      `;

      certsGrid.appendChild(card);
    });

    document.querySelectorAll('.btn-view-cert').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const certId = e.currentTarget.getAttribute('data-cert-id');
        openCertLightbox(certId);
      });
    });

    if (isAdminLoggedIn) {
      document.querySelectorAll('.btn-edit-cert').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const certId = e.currentTarget.getAttribute('data-cert-id');
          openAdminEditCertModal(certId);
        });
      });

      document.querySelectorAll('.btn-delete-cert').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const certId = e.currentTarget.getAttribute('data-cert-id');
          handleDeleteCert(certId);
        });
      });
    }
  }

  // Open Lightbox Modal for a certificate
  function openCertLightbox(certId) {
    const cert = CERTIFICATIONS_DATA.find(c => String(c.id) === String(certId));
    if (!cert || !certLightboxModal) return;

    if (certViewTitle) certViewTitle.textContent = cert.title;
    if (certViewBadge) certViewBadge.textContent = cert.badge || 'CREDENTIAL';
    if (certViewIssuer) certViewIssuer.textContent = cert.issuer;
    if (certViewIssuerInline) certViewIssuerInline.textContent = cert.issuer;
    if (certViewYearInline) certViewYearInline.textContent = cert.date;
    if (certViewDesc) certViewDesc.textContent = cert.desc || 'Official verified certificate of completion and achievement.';

    if (certViewCredId) {
      if (cert.credentialId && cert.credentialId.trim().length > 0) {
        certViewCredId.textContent = `ID: ${cert.credentialId.trim()}`;
        certViewCredId.style.display = 'inline-block';
      } else {
        certViewCredId.style.display = 'none';
      }
    }

    const hasImg = cert.image && cert.image.trim().length > 0;
    if (hasImg && certViewImg && certViewPlaceholder) {
      certViewImg.src = cert.image;
      certViewImg.style.display = 'block';
      certViewPlaceholder.style.display = 'none';
    } else if (certViewImg && certViewPlaceholder) {
      certViewImg.src = '';
      certViewImg.style.display = 'none';
      certViewPlaceholder.style.display = 'flex';
    }

    if (certViewLinkWrapper && certViewLink) {
      if (cert.link && cert.link.trim().length > 0) {
        certViewLink.href = cert.link.trim();
        certViewLinkWrapper.style.display = 'block';
      } else {
        certViewLinkWrapper.style.display = 'none';
      }
    }

    certLightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCertLightbox() {
    if (certLightboxModal) certLightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeCertLightboxBtn) {
    closeCertLightboxBtn.addEventListener('click', closeCertLightbox);
  }

  if (certLightboxModal) {
    certLightboxModal.addEventListener('click', (e) => {
      if (e.target === certLightboxModal) closeCertLightbox();
    });
  }

  // Render Admin Manage Certificates Table
  function renderAdminCertTable() {
    if (!adminCertTableBody) return;
    adminCertTableBody.innerHTML = '';

    if (!CERTIFICATIONS_DATA || CERTIFICATIONS_DATA.length === 0) {
      adminCertTableBody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align: center; padding: 2rem; color: var(--text-muted);">
            No certificates found. Click "+ ADD NEW CERTIFICATE" to create one.
          </td>
        </tr>
      `;
      return;
    }

    CERTIFICATIONS_DATA.forEach(cert => {
      const tr = document.createElement('tr');
      const hasImg = cert.image && cert.image.trim().length > 0;
      const imgHTML = hasImg
        ? `<img src="${cert.image}" class="admin-table-thumb" alt="Thumb" />`
        : `<div class="admin-table-thumb" style="display: flex; align-items: center; justify-content: center; background: var(--bg-card-inner); color: var(--gold-primary); font-size: 0.65rem; font-weight: 800;">N/A</div>`;

      tr.innerHTML = `
        <td>${imgHTML}</td>
        <td>
          <div style="font-weight: 700; color: #fff;">${cert.title}</div>
          <span class="cert-category" style="margin-top: 0.2rem; display: inline-block;">${cert.badge}</span>
          ${cert.visible === false ? '<span style="color: #f59e0b; font-size: 0.65rem; font-family: var(--font-mono); margin-left: 0.4rem;">[Hidden]</span>' : ''}
        </td>
        <td style="font-family: var(--font-mono); color: var(--gold-primary);">${cert.issuer}</td>
        <td style="font-family: var(--font-mono);">${cert.date}</td>
        <td style="text-align: right;">
          <div style="display: flex; justify-content: flex-end; gap: 0.4rem;">
            <button class="btn btn-gold btn-table-edit" data-cert-id="${cert.id}" style="padding: 0.35rem 0.65rem; font-size: 0.7rem;">
              Edit
            </button>
            <button class="btn btn-danger btn-table-delete" data-cert-id="${cert.id}" style="padding: 0.35rem 0.65rem; font-size: 0.7rem;">
              Delete
            </button>
          </div>
        </td>
      `;
      adminCertTableBody.appendChild(tr);
    });

    document.querySelectorAll('.btn-table-edit').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-cert-id');
        openAdminEditCertModal(id);
      });
    });

    document.querySelectorAll('.btn-table-delete').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-cert-id');
        handleDeleteCert(id);
      });
    });
  }

  // Update live preview for certificate image
  function updateCertImagePreview(url) {
    if (!certImgPreview || !certImgPlaceholder || !certImgStatus) return;
    const trimmed = (url || '').trim();

    if (!trimmed) {
      certImgPreview.style.display = 'none';
      certImgPreview.src = '';
      certImgPlaceholder.style.display = 'block';
      certImgStatus.textContent = 'No Image Selected';
      certImgStatus.style.color = 'var(--text-muted)';
      return;
    }

    certImgStatus.textContent = 'Verifying image preview...';
    certImgStatus.style.color = 'var(--gold-primary)';

    certImgPreview.onload = () => {
      certImgPreview.style.display = 'block';
      certImgPlaceholder.style.display = 'none';
      certImgStatus.textContent = 'Preview Ready ✓';
      certImgStatus.style.color = '#22c55e';
    };

    certImgPreview.onerror = () => {
      certImgPreview.style.display = 'none';
      certImgPlaceholder.style.display = 'block';
      certImgStatus.textContent = 'Invalid / Broken Image';
      certImgStatus.style.color = '#ef4444';
    };

    certImgPreview.src = trimmed;
  }

  if (certFormFile) {
    certFormFile.addEventListener('change', async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      if (!validTypes.includes(file.type.toLowerCase())) {
        alert('Invalid file format! Please select a valid JPG, JPEG, PNG, or WebP image file.');
        certFormFile.value = '';
        return;
      }

      if (certImgStatus) {
        certImgStatus.textContent = 'Uploading certificate image to server...';
        certImgStatus.style.color = 'var(--gold-primary)';
      }

      try {
        const uploadedUrl = await uploadImageFile(file, 'cert');
        if (certFormImage) certFormImage.value = uploadedUrl;
        updateCertImagePreview(uploadedUrl);
      } catch (err) {
        console.error('Certificate upload failed:', err);
        alert('Failed to upload image. You can enter an image URL instead.');
      }
    });
  }

  if (certFormImage) {
    certFormImage.addEventListener('input', (e) => {
      updateCertImagePreview(e.target.value);
    });
  }

  // Open Add Certificate Modal
  function openAdminAddCertModal() {
    if (!adminCertModal) return;
    if (certFormId) certFormId.value = '';
    if (certFormTitle) certFormTitle.value = '';
    if (certFormBadge) certFormBadge.value = '';
    if (certFormIssuer) certFormIssuer.value = '';
    if (certFormDate) certFormDate.value = new Date().getFullYear().toString();
    if (certFormDesc) certFormDesc.value = '';
    if (certFormLink) certFormLink.value = '';
    if (certFormCredId) certFormCredId.value = '';
    if (certFormOrder) certFormOrder.value = (CERTIFICATIONS_DATA.length + 1).toString();
    if (certFormVisible) certFormVisible.checked = true;
    if (certFormFile) certFormFile.value = '';
    if (certFormImage) certFormImage.value = '';

    if (adminCertModalTitle) adminCertModalTitle.textContent = 'Add New Certificate';
    updateCertImagePreview('');
    adminCertModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Open Edit Certificate Modal
  function openAdminEditCertModal(certId) {
    const cert = CERTIFICATIONS_DATA.find(c => String(c.id) === String(certId));
    if (!cert || !adminCertModal) return;

    if (certFormId) certFormId.value = cert.id;
    if (certFormTitle) certFormTitle.value = cert.title || '';
    if (certFormBadge) certFormBadge.value = cert.badge || '';
    if (certFormIssuer) certFormIssuer.value = cert.issuer || '';
    if (certFormDate) certFormDate.value = cert.date || '';
    if (certFormDesc) certFormDesc.value = cert.desc || '';
    if (certFormLink) certFormLink.value = cert.link || '';
    if (certFormCredId) certFormCredId.value = cert.credentialId || '';
    if (certFormOrder) certFormOrder.value = (typeof cert.order === 'number' ? cert.order : '').toString();
    if (certFormVisible) certFormVisible.checked = cert.visible !== false;
    if (certFormFile) certFormFile.value = '';
    if (certFormImage) certFormImage.value = cert.image || '';

    if (adminCertModalTitle) adminCertModalTitle.textContent = `Edit Certificate: ${cert.title}`;
    updateCertImagePreview(cert.image || '');
    adminCertModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeAdminCertModal() {
    if (adminCertModal) adminCertModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openAdminManageCertsModal() {
    if (!adminCertListModal) return;
    renderAdminCertTable();
    adminCertListModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeAdminCertListModal() {
    if (adminCertListModal) adminCertListModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (adminAddCertBtn) adminAddCertBtn.addEventListener('click', openAdminAddCertModal);
  if (adminManageCertsBtn) adminManageCertsBtn.addEventListener('click', openAdminManageCertsModal);
  if (adminListAddCertBtn) adminListAddCertBtn.addEventListener('click', openAdminAddCertModal);

  if (closeAdminCertModalBtn) closeAdminCertModalBtn.addEventListener('click', closeAdminCertModal);
  if (cancelAdminCertBtn) cancelAdminCertBtn.addEventListener('click', closeAdminCertModal);
  if (closeAdminCertListModalBtn) closeAdminCertListModalBtn.addEventListener('click', closeAdminCertListModal);

  if (adminCertModal) {
    adminCertModal.addEventListener('click', (e) => {
      if (e.target === adminCertModal) closeAdminCertModal();
    });
  }

  if (adminCertListModal) {
    adminCertListModal.addEventListener('click', (e) => {
      if (e.target === adminCertListModal) closeAdminCertListModal();
    });
  }

  // Submit Add / Edit Certificate
  if (adminCertForm) {
    adminCertForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const id = certFormId ? certFormId.value.trim() : '';
      const title = certFormTitle ? certFormTitle.value.trim() : '';
      const badge = certFormBadge ? certFormBadge.value.trim() : '';
      const issuer = certFormIssuer ? certFormIssuer.value.trim() : '';
      const date = certFormDate ? certFormDate.value.trim() : '';
      const desc = certFormDesc ? certFormDesc.value.trim() : '';
      const link = certFormLink ? certFormLink.value.trim() : '';
      const credentialId = certFormCredId ? certFormCredId.value.trim() : '';
      const orderRaw = certFormOrder ? certFormOrder.value.trim() : '';
      const visible = certFormVisible ? certFormVisible.checked : true;
      const image = certFormImage ? certFormImage.value.trim() : '';

      if (!title || !badge || !issuer || !date) {
        alert('Please fill out all required fields: Title, Category/Badge, Issuing Organization, and Year.');
        return;
      }

      const certPayload = {
        title,
        badge,
        issuer,
        date,
        desc,
        link,
        credentialId,
        order: orderRaw ? parseInt(orderRaw, 10) : undefined,
        visible,
        image
      };

      if (saveCertBtn) saveCertBtn.textContent = 'SAVING TO SERVER...';

      try {
        const url = id ? `/api/certifications/${encodeURIComponent(id)}` : '/api/certifications';
        const method = id ? 'PUT' : 'POST';
        const authKey = adminToken || sessionStorage.getItem('admin_token') || '';

        const res = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authKey}`
          },
          body: JSON.stringify(certPayload)
        });

        const result = await res.json().catch(() => ({}));

        if (res.ok) {
          closeAdminCertModal();
          showToast(id ? 'Certificate updated and saved persistently!' : 'New certificate added successfully!');
          await loadCertifications();
        } else {
          alert(result.error || result.message || 'Failed to save certificate to server.');
        }
      } catch (err) {
        console.error('Save cert error:', err);
        alert('Server communication error saving certificate.');
      } finally {
        if (saveCertBtn) saveCertBtn.textContent = 'SAVE CERTIFICATE';
      }
    });
  }

  // Delete certificate
  async function handleDeleteCert(certId) {
    if (!certId) return;

    const cert = CERTIFICATIONS_DATA.find(c => String(c.id) === String(certId));
    const title = cert ? cert.title : 'Selected certificate';

    if (!confirm(`Are you sure you want to delete this certificate?\n\n"${title}"\n\nThis will remove the certificate permanently from persistent storage.`)) {
      return;
    }

    const authKey = adminToken || sessionStorage.getItem('admin_token') || '';

    try {
      const res = await fetch(`/api/certifications/${encodeURIComponent(certId)}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authKey}`
        }
      });

      const result = await res.json().catch(() => ({}));

      if (res.ok && result.success) {
        showToast(`Certificate "${title}" removed successfully!`);
        await loadCertifications();
      } else {
        const errorMsg = result.error || result.message || 'Failed to delete certificate from server.';
        alert(`Deletion Error: ${errorMsg}`);
        await loadCertifications();
      }
    } catch (err) {
      console.error('Delete cert error:', err);
      alert('Network or server error deleting certificate.');
      await loadCertifications();
    }
  }

  // Check initial admin session and load persistent records
  checkAdminSession();
  loadProjects();
  loadCertifications();

  const achieveList = document.getElementById('achievements-list');
  if (achieveList) {
    ACHIEVEMENTS_DATA.forEach((ach, idx) => {
      const card = document.createElement('div');
      card.className = 'portfolio-card achievement-card';
      card.innerHTML = `
        <div class="achieve-num">0${idx + 1}</div>
        <div>
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.5rem; align-items: baseline;">
            <h3 class="achieve-title">${ach.title}</h3>
            <span style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--gold-primary); font-weight: 700;">${ach.date}</span>
          </div>
          <p class="achieve-org">${ach.org}</p>
          <p class="achieve-desc">${ach.desc}</p>
        </div>
      `;
      achieveList.appendChild(card);
    });
  }

  // ================= 7. INTERACTIVE PROJECT DEMO MODAL ================= //

  const projectModal = document.getElementById('project-modal');
  const closeProjectModalBtn = document.getElementById('close-project-modal');
  const pmNum = document.getElementById('pm-num');
  const pmTitle = document.getElementById('pm-title');
  const pmBody = document.getElementById('pm-body');

  function openProjectModal(projectId) {
    const project = PROJECTS_DATA.find(p => String(p.id) === String(projectId));
    if (!project || !projectModal) return;

    if (pmNum) pmNum.textContent = project.num || 'PROJECT';
    if (pmTitle) pmTitle.textContent = project.title;

    // Generate interactive demo component inside modal body depending on project type
    let demoHTML = '';

    if (projectId === 'pet-adoption') {
      demoHTML = getPetAdoptionDemoHTML(project);
    } else if (projectId === 'calculator') {
      demoHTML = getCalculatorDemoHTML(project);
    } else if (projectId === 'data-analysis') {
      demoHTML = getDataAnalysisDemoHTML(project);
    } else if (projectId === 'data-visualization') {
      demoHTML = getDataVisualizationDemoHTML(project);
    } else {
      demoHTML = getGenericProjectDemoHTML(project);
    }

    if (pmBody) {
      pmBody.innerHTML = demoHTML;
    }

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Initialize interactive logic after injection
    if (projectId === 'pet-adoption') initPetAdoptionLogic();
    if (projectId === 'calculator') initCalculatorLogic();
    if (projectId === 'data-analysis') initDataAnalysisLogic();
    if (projectId === 'data-visualization') initDataVisualizationLogic();
  }

  function closeProjectModal() {
    if (projectModal) {
      projectModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (closeProjectModalBtn) {
    closeProjectModalBtn.addEventListener('click', closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  // --- GENERIC PROJECT MODAL VIEW --- //
  function getGenericProjectDemoHTML(project) {
    const tags = Array.isArray(project.tags) ? project.tags : [];
    const tagsHTML = tags.map(t => `<span class="tag-pill">${t}</span>`).join('');

    const highlights = Array.isArray(project.highlights) ? project.highlights : [];
    const highlightsHTML = highlights.length > 0
      ? `
        <div style="padding: 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; margin-bottom: 1.5rem;">
          <h4 style="font-size: 0.85rem; font-weight: 800; color: #fff; margin-bottom: 0.5rem;">Key Architecture Highlights</h4>
          <ul class="timeline-bullet-list">
            ${highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>
      `
      : '';

    const imageHTML = project.image ? `
      <div style="width: 100%; max-height: 280px; border-radius: 12px; overflow: hidden; margin-bottom: 1.25rem; border: 1px solid var(--border-gold); background: var(--bg-card-inner);">
        <img src="${project.image}" alt="${project.title}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>
    ` : '';

    const githubBtn = (project.github && project.github !== '#') ? `
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding: 0.6rem 1.2rem; font-size: 0.8rem; text-decoration: none;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        <span>GITHUB REPOSITORY</span>
      </a>
    ` : '';

    const demoBtn = (project.demo && project.demo !== '#') ? `
      <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-gold" style="padding: 0.6rem 1.2rem; font-size: 0.8rem; text-decoration: none;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        <span>LIVE DEMO LINK</span>
      </a>
    ` : '';

    return `
      <div>
        ${imageHTML}
        <p style="font-size: 0.85rem; color: #d1d5db; line-height: 1.6; margin-bottom: 1rem;">
          ${project.desc}
        </p>

        ${highlightsHTML}

        <div style="margin-bottom: 1.5rem;">
          <h4 style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--gold-primary); font-weight: 700; margin-bottom: 0.5rem;">TECHNOLOGIES & TOOLS</h4>
          <div class="project-tags">
            ${tagsHTML}
          </div>
        </div>

        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 1rem;">
          ${githubBtn}
          ${demoBtn}
        </div>
      </div>
    `;
  }

  // --- DEMO 1: PET ADOPTION SYSTEM INTERACTIVE DEMO --- //
  function getPetAdoptionDemoHTML(project) {
    return `
      <div>
        <p style="font-size: 0.85rem; color: #d1d5db; line-height: 1.6; margin-bottom: 1rem;">
          ${project.desc}
        </p>

        <div style="padding: 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; margin-bottom: 1.5rem;">
          <h4 style="font-size: 0.85rem; font-weight: 800; color: #fff; margin-bottom: 0.5rem;">Key Architecture Highlights</h4>
          <ul class="timeline-bullet-list">
            ${project.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>

        <div style="border-top: 1px solid var(--border-color); padding-top: 1.25rem;">
          <div style="display: flex; justify-between; align-items: center; margin-bottom: 1rem;">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: #fff;">Interactive Java GUI Simulator</h3>
            <span style="font-size: 0.65rem; font-family: var(--font-mono); color: var(--gold-primary); background: rgba(234,179,8,0.1); padding: 0.2rem 0.5rem; border-radius: 4px;">LIVE DEMO</span>
          </div>

          <!-- Pet Filters -->
          <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem; flex-wrap: wrap;">
            <button class="filter-btn active pet-filter-btn" data-type="all">All Pets (4)</button>
            <button class="filter-btn pet-filter-btn" data-type="Dog">Dogs</button>
            <button class="filter-btn pet-filter-btn" data-type="Cat">Cats</button>
            <button class="filter-btn pet-filter-btn" data-type="Rabbit">Rabbits</button>
          </div>

          <!-- Pet Cards Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.85rem;" id="pet-cards-container">
            <!-- Injected by initPetAdoptionLogic -->
          </div>

          <!-- Adoption Application Form Simulator -->
          <div style="margin-top: 1.5rem; padding: 1.25rem; background: #161616; border: 1px dashed var(--border-gold); border-radius: 12px;">
            <h4 style="font-size: 0.9rem; font-weight: 800; color: #fff; margin-bottom: 0.5rem;">Submit Adoption Request (Simulated OOP Service)</h4>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <select id="adopt-pet-select" class="form-input" style="flex: 1; min-width: 160px; font-size: 0.8rem;">
                <option value="Buddy (Golden Retriever)">Buddy (Golden Retriever - Dog)</option>
                <option value="Milo (Persian Cat)">Milo (Persian Cat - Cat)</option>
                <option value="Luna (Himalayan Rabbit)">Luna (Himalayan Rabbit - Rabbit)</option>
                <option value="Rocky (German Shepherd)">Rocky (German Shepherd - Dog)</option>
              </select>
              <input type="text" id="adopt-applicant-name" class="form-input" placeholder="Your Name" style="flex: 1; min-width: 140px; font-size: 0.8rem;" />
              <button class="btn btn-gold" id="submit-adopt-btn" style="padding: 0.5rem 1rem; font-size: 0.8rem;">Submit Application</button>
            </div>
            <div id="adopt-status-msg" style="margin-top: 0.75rem; font-size: 0.75rem; font-family: var(--font-mono); color: var(--gold-primary); display: none;"></div>
          </div>
        </div>
      </div>
    `;
  }

  function initPetAdoptionLogic() {
    const pets = [
      { name: 'Buddy', breed: 'Golden Retriever', age: '2 Yrs', type: 'Dog', status: 'Available' },
      { name: 'Milo', breed: 'Persian Cat', age: '1 Yr', type: 'Cat', status: 'Available' },
      { name: 'Luna', breed: 'Himalayan Rabbit', age: '8 Mos', type: 'Rabbit', status: 'Available' },
      { name: 'Rocky', breed: 'German Shepherd', age: '3 Yrs', type: 'Dog', status: 'Pending' }
    ];

    const container = document.getElementById('pet-cards-container');
    
    function renderPetCards(filter = 'all') {
      if (!container) return;
      container.innerHTML = '';
      pets.filter(p => filter === 'all' || p.type === filter).forEach(p => {
        const div = document.createElement('div');
        div.style.cssText = 'padding: 0.85rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 10px;';
        div.innerHTML = `
          <div style="display: flex; justify-between; align-items: center; margin-bottom: 0.4rem;">
            <strong style="font-size: 0.9rem; color: #fff;">${p.name}</strong>
            <span style="font-size: 0.65rem; font-family: var(--font-mono); color: ${p.status === 'Available' ? 'var(--gold-primary)' : '#9ca3af'}; background: rgba(255,255,255,0.05); padding: 0.15rem 0.4rem; border-radius: 4px;">${p.status}</span>
          </div>
          <div style="font-size: 0.75rem; color: var(--text-gray);">${p.breed} • ${p.age}</div>
        `;
        container.appendChild(div);
      });
    }

    renderPetCards('all');

    document.querySelectorAll('.pet-filter-btn').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('.pet-filter-btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        renderPetCards(b.getAttribute('data-type'));
      });
    });

    const submitBtn = document.getElementById('submit-adopt-btn');
    const msg = document.getElementById('adopt-status-msg');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        const petSelect = document.getElementById('adopt-pet-select').value;
        const applicant = document.getElementById('adopt-applicant-name').value;
        if (!applicant.trim()) {
          showToast('Please enter your applicant name');
          return;
        }
        msg.style.display = 'block';
        msg.textContent = `SUCCESS: Adoption record generated for ${applicant} requesting ${petSelect}. Status set to UNDER_REVIEW in Java memory ledger.`;
        showToast('Application Submitted!');
      });
    }
  }

  // --- DEMO 2: CALCULATOR DEMO --- //
  function getCalculatorDemoHTML(project) {
    return `
      <div>
        <p style="font-size: 0.85rem; color: #d1d5db; line-height: 1.6; margin-bottom: 1rem;">
          ${project.desc}
        </p>

        <!-- Live Working Calculator -->
        <div style="max-width: 320px; margin: 0 auto; background: #0f0f0f; border: 1px solid var(--border-gold); border-radius: 16px; padding: 1.25rem; box-shadow: 0 10px 30px rgba(0,0,0,0.8);">
          
          <div style="background: #181818; border: 1px solid var(--border-color); border-radius: 10px; padding: 0.85rem; margin-bottom: 1rem; text-align: right;">
            <div id="calc-history" style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); min-height: 1rem;">&nbsp;</div>
            <div id="calc-display" style="font-size: 1.75rem; font-family: var(--font-mono); font-weight: 800; color: var(--gold-primary); overflow-x: auto; white-space: nowrap;">0</div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem;">
            <button class="calc-btn op" data-val="C">C</button>
            <button class="calc-btn op" data-val="DEL">⌫</button>
            <button class="calc-btn op" data-val="%">%</button>
            <button class="calc-btn op" data-val="/">÷</button>

            <button class="calc-btn num" data-val="7">7</button>
            <button class="calc-btn num" data-val="8">8</button>
            <button class="calc-btn num" data-val="9">9</button>
            <button class="calc-btn op" data-val="*">×</button>

            <button class="calc-btn num" data-val="4">4</button>
            <button class="calc-btn num" data-val="5">5</button>
            <button class="calc-btn num" data-val="6">6</button>
            <button class="calc-btn op" data-val="-">-</button>

            <button class="calc-btn num" data-val="1">1</button>
            <button class="calc-btn num" data-val="2">2</button>
            <button class="calc-btn num" data-val="3">3</button>
            <button class="calc-btn op" data-val="+">+</button>

            <button class="calc-btn num" data-val="0" style="grid-column: span 2;">0</button>
            <button class="calc-btn num" data-val=".">.</button>
            <button class="calc-btn eq" data-val="=">=</button>
          </div>

        </div>
        <p style="text-align: center; font-size: 0.7rem; font-family: var(--font-mono); color: var(--text-muted); margin-top: 1rem;">
          Try clicking buttons above to test live calculation logic!
        </p>
      </div>
    `;
  }

  function initCalculatorLogic() {
    let currentInput = '0';
    let previousExpression = '';

    const display = document.getElementById('calc-display');
    const history = document.getElementById('calc-history');

    function updateDisplay() {
      if (display) display.textContent = currentInput;
      if (history) history.textContent = previousExpression;
    }

    document.querySelectorAll('.calc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-val');

        if (val === 'C') {
          currentInput = '0';
          previousExpression = '';
        } else if (val === 'DEL') {
          if (currentInput.length > 1) {
            currentInput = currentInput.slice(0, -1);
          } else {
            currentInput = '0';
          }
        } else if (val === '=') {
          try {
            const expr = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
            previousExpression = currentInput + ' =';
            const result = eval(expr);
            currentInput = String(result);
          } catch (e) {
            currentInput = 'Error';
          }
        } else if (['+', '-', '*', '/', '%'].includes(val)) {
          previousExpression = currentInput + ' ' + val;
          currentInput += ' ' + val + ' ';
        } else {
          if (currentInput === '0' || currentInput === 'Error') {
            currentInput = val;
          } else {
            currentInput += val;
          }
        }

        updateDisplay();
      });
    });
  }

  // --- DEMO 3: DATA ANALYSIS DEMO --- //
  function getDataAnalysisDemoHTML(project) {
    return `
      <div>
        <p style="font-size: 0.85rem; color: var(--text-gray); line-height: 1.6; margin-bottom: 1rem;">
          ${project.desc}
        </p>

        <div style="padding: 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; margin-bottom: 1.5rem;">
          <h4 style="font-size: 0.85rem; font-weight: 800; color: var(--text-white); margin-bottom: 0.5rem;">Python EDA Workflow Highlights</h4>
          <ul class="timeline-bullet-list">
            ${project.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>

        <div style="border-top: 1px solid var(--border-color); padding-top: 1.25rem;">
          <h3 style="font-size: 1rem; font-weight: 800; color: var(--text-white); margin-bottom: 1rem;">Exploratory Data Table & Summary Statistics</h3>

          <div style="overflow-x: auto; background: var(--bg-card-inner); border: 1px solid var(--border-color); border-radius: 10px;">
            <table style="width: 100%; text-align: left; border-collapse: collapse; font-size: 0.75rem; font-family: var(--font-mono);">
              <thead>
                <tr style="background: var(--bg-card-hover); color: var(--gold-primary); border-bottom: 1px solid var(--border-color);">
                  <th style="padding: 0.6rem 0.8rem;">Metric Column</th>
                  <th style="padding: 0.6rem 0.8rem;">Mean (μ)</th>
                  <th style="padding: 0.6rem 0.8rem;">Std Dev (σ)</th>
                  <th style="padding: 0.6rem 0.8rem;">Min</th>
                  <th style="padding: 0.6rem 0.8rem;">Median (Q2)</th>
                  <th style="padding: 0.6rem 0.8rem;">Max</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.6rem 0.8rem; color: var(--text-white);">Dataset Revenue ($)</td>
                  <td style="padding: 0.6rem 0.8rem;">$45,210</td>
                  <td style="padding: 0.6rem 0.8rem;">$8,420</td>
                  <td style="padding: 0.6rem 0.8rem;">$28,100</td>
                  <td style="padding: 0.6rem 0.8rem;">$44,800</td>
                  <td style="padding: 0.6rem 0.8rem;">$68,900</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.6rem 0.8rem; color: var(--text-white);">User Retention (%)</td>
                  <td style="padding: 0.6rem 0.8rem;">78.4%</td>
                  <td style="padding: 0.6rem 0.8rem;">5.2%</td>
                  <td style="padding: 0.6rem 0.8rem;">65.0%</td>
                  <td style="padding: 0.6rem 0.8rem;">79.1%</td>
                  <td style="padding: 0.6rem 0.8rem;">88.5%</td>
                </tr>
                <tr>
                  <td style="padding: 0.6rem 0.8rem; color: var(--text-white);">Satisfaction Score</td>
                  <td style="padding: 0.6rem 0.8rem;">4.62 / 5.0</td>
                  <td style="padding: 0.6rem 0.8rem;">0.31</td>
                  <td style="padding: 0.6rem 0.8rem;">3.80</td>
                  <td style="padding: 0.6rem 0.8rem;">4.70</td>
                  <td style="padding: 0.6rem 0.8rem;">5.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  function initDataAnalysisLogic() {}

  // --- DEMO 4: DATA VISUALIZATION DEMO --- //
  function getDataVisualizationDemoHTML(project) {
    return `
      <div>
        <p style="font-size: 0.85rem; color: var(--text-gray); line-height: 1.6; margin-bottom: 1rem;">
          ${project.desc}
        </p>

        <!-- Simulated Power BI KPI Dashboard -->
        <div style="padding: 1.25rem; background: var(--bg-card-inner); border: 1px solid var(--border-gold); border-radius: 14px;">
          <div style="display: flex; justify-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
            <div>
              <h3 style="font-size: 1rem; font-weight: 800; color: var(--text-white);">Power BI Executive Dashboard View</h3>
              <p style="font-size: 0.7rem; color: var(--gold-primary); font-family: var(--font-mono);">University Analytics & Business Intelligence</p>
            </div>
            <span style="font-size: 0.65rem; font-family: var(--font-mono); color: var(--text-white); background: var(--bg-card); padding: 0.3rem 0.6rem; border-radius: 4px; border: 1px solid var(--border-color);">LIVE STAR SCHEMA</span>
          </div>

          <!-- KPI Cards -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.75rem; margin-bottom: 1rem;">
            <div style="padding: 0.75rem; background: var(--bg-card); border-radius: 8px; border-left: 3px solid var(--gold-primary);">
              <div style="font-size: 0.65rem; color: var(--text-muted); font-family: var(--font-mono);">TOTAL REVENUE</div>
              <div style="font-size: 1.2rem; font-weight: 800; color: var(--text-white); margin-top: 0.2rem;">$142,500</div>
              <div style="font-size: 0.65rem; color: var(--gold-primary); font-family: var(--font-mono);">+14.2% YTD</div>
            </div>

            <div style="padding: 0.75rem; background: var(--bg-card); border-radius: 8px; border-left: 3px solid var(--gold-primary);">
              <div style="font-size: 0.65rem; color: var(--text-muted); font-family: var(--font-mono);">ACTIVE USERS</div>
              <div style="font-size: 1.2rem; font-weight: 800; color: var(--text-white); margin-top: 0.2rem;">8,420</div>
              <div style="font-size: 0.65rem; color: var(--gold-primary); font-family: var(--font-mono);">+8.5% Growth</div>
            </div>

            <div style="padding: 0.75rem; background: var(--bg-card); border-radius: 8px; border-left: 3px solid var(--gold-primary);">
              <div style="font-size: 0.65rem; color: var(--text-muted); font-family: var(--font-mono);">AVG SATISFACTION</div>
              <div style="font-size: 1.2rem; font-weight: 800; color: var(--text-white); margin-top: 0.2rem;">94.8%</div>
              <div style="font-size: 0.65rem; color: var(--gold-primary); font-family: var(--font-mono);">Top Tier</div>
            </div>
          </div>

          <!-- Bar Visual Representation -->
          <div>
            <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-white); margin-bottom: 0.5rem;">Regional Performance Breakdown (DAX Measure)</div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <div>
                <div style="display: flex; justify-between; font-size: 0.7rem; color: var(--text-gray); margin-bottom: 0.2rem;">
                  <span>Northern Province</span>
                  <span style="color: var(--gold-primary); font-weight: 700;">88%</span>
                </div>
                <div style="height: 8px; background: var(--bg-card); border-radius: 4px; overflow: hidden;">
                  <div style="height: 100%; width: 88%; background: var(--gold-primary);"></div>
                </div>
              </div>

              <div>
                <div style="display: flex; justify-between; font-size: 0.7rem; color: var(--text-gray); margin-bottom: 0.2rem;">
                  <span>Western Province</span>
                  <span style="color: var(--gold-primary); font-weight: 700;">94%</span>
                </div>
                <div style="height: 8px; background: var(--bg-card); border-radius: 4px; overflow: hidden;">
                  <div style="height: 100%; width: 94%; background: var(--gold-primary);"></div>
                </div>
              </div>

              <div>
                <div style="display: flex; justify-between; font-size: 0.7rem; color: var(--text-gray); margin-bottom: 0.2rem;">
                  <span>Central Province</span>
                  <span style="color: var(--gold-primary); font-weight: 700;">76%</span>
                </div>
                <div style="height: 8px; background: var(--bg-card); border-radius: 4px; overflow: hidden;">
                  <div style="height: 100%; width: 76%; background: var(--gold-primary);"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  function initDataVisualizationLogic() {}

  // ================= 8. CONTACT FORM & EMAIL COPY ================= //

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameEl = document.getElementById('contact-name');
      const emailEl = document.getElementById('contact-email');
      const subjectEl = document.getElementById('contact-subject');
      const messageEl = document.getElementById('contact-message');

      const name = nameEl ? nameEl.value.trim() : '';
      const email = emailEl ? emailEl.value.trim() : '';
      const subject = subjectEl ? subjectEl.value.trim() : '';
      const message = messageEl ? messageEl.value.trim() : '';

      if (!name) {
        showToast('Please enter your name.');
        if (nameEl) nameEl.focus();
        return;
      }

      if (!email) {
        showToast('Please enter your email address.');
        if (emailEl) emailEl.focus();
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address.');
        if (emailEl) emailEl.focus();
        return;
      }

      if (!subject) {
        showToast('Please enter a message subject.');
        if (subjectEl) subjectEl.focus();
        return;
      }

      if (!message) {
        showToast('Please write your message.');
        if (messageEl) messageEl.focus();
        return;
      }

      const rawMessage = `Hello Mathuumitha,

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`;

      const whatsappPhone = '94755357344';
      const encodedMsg = encodeURIComponent(rawMessage);
      const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodedMsg}`;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      showToast(`Opening WhatsApp to send your message...`);
      contactForm.reset();
    });
  }

  // Copy Email Buttons
  document.querySelectorAll('.btn-copy-email').forEach(btn => {
    btn.addEventListener('click', () => {
      const email = btn.getAttribute('data-email');
      if (email) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Copied to clipboard: ${email}`);
        }).catch(() => {
          showToast(`Email: ${email}`);
        });
      }
    });
  });

  // ================= 9. CV MODAL & PRINTING ================= //

  const cvModal = document.getElementById('cv-modal');
  const openCvBtns = document.querySelectorAll('#open-cv-btn, .modal-trigger-cv');
  const closeCvModalBtn = document.getElementById('close-cv-modal');
  const printCvBtn = document.getElementById('print-cv-btn');

  openCvBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (cvModal) {
        cvModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (closeCvModalBtn) {
    closeCvModalBtn.addEventListener('click', () => {
      if (cvModal) {
        cvModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) {
        cvModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  if (printCvBtn) {
    printCvBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // ================= 10. TOAST NOTIFICATION UTILITY ================= //

  function showToast(text) {
    const toast = document.getElementById('toast-message');
    const toastText = document.getElementById('toast-text');
    if (!toast || !toastText) return;

    toastText.textContent = text;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  // ================= 11. DARK / LIGHT THEME TOGGLE ================= //

  const THEME_STORAGE_KEY = 'mathuumitha_portfolio_theme';
  const navThemeToggleBtn = document.getElementById('nav-theme-toggle-btn');
  const navThemeTooltip = document.getElementById('nav-theme-tooltip');

  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme, isUserAction = false) {
    document.documentElement.setAttribute('data-theme', theme);

    if (navThemeTooltip) {
      navThemeTooltip.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }

    if (navThemeToggleBtn) {
      navThemeToggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`);
      navThemeToggleBtn.setAttribute('title', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`);
    }

    if (isUserAction) {
      showToast(`Switched to ${theme === 'dark' ? 'Dark Mode 🌙' : 'Light Mode ☀️'}`);
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme, true);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch (e) {
      console.warn('Unable to save theme preference to localStorage', e);
    }
  }

  // Sync initial button UI with current data-theme
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme, false);

  if (navThemeToggleBtn) {
    navThemeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Listen for system theme changes if no explicit user preference is stored
  try {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light', false);
      }
    });
  } catch (err) {
    // Legacy fallback for older browsers
  }

  // ================= 12. HERO ANIMATED ROLE TYPEWRITER ================= //
  function initTypewriter() {
    const typedRoleText = document.getElementById('typed-role-text');
    if (!typedRoleText) return;

    const roles = [
      "Data Analyst",
      "Web Developer",
      "Python Developer"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      typedRoleText.textContent = currentRole.substring(0, charIndex);

      let typingSpeed = isDeleting ? 45 : 95;

      if (!isDeleting && charIndex === currentRole.length) {
        // Pause at end of completed role
        typingSpeed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        // Brief delay before starting next role
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 400;
      }

      setTimeout(type, typingSpeed);
    }

    type();
  }

  initTypewriter();

  // ================= 13. HERO PORTRAIT TOUCH TOGGLE (FOR MOBILE) ================= //
  const portraitCard = document.querySelector('.portrait-card');
  const avatarCircle = document.querySelector('.portrait-avatar-circle');
  if (portraitCard && avatarCircle) {
    portraitCard.addEventListener('touchstart', () => {
      avatarCircle.classList.toggle('active-color');
      portraitCard.classList.toggle('active-color');
    }, { passive: true });
  }

});
