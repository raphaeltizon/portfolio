const projectsData = {
  chickmate: {
    title: 'ChickMate — AI-Integrated Chick Brooder',
    heroImage: '../assets/project-chickmate.png',
    tags: ['Embedded Systems', 'Artificial Intelligence', 'Mobile App'],
    category: 'Research / Capstone',
    duration: '2025 – 2026',
    role: 'Lead Developer',
    teamSize: '3 Members',
    githubLink: 'https://github.com/kimbewi/ChickMate',
    demoLink: 'https://chickmate-web.vercel.app/',
    hardwareOffline: true,
    pdfLink: '../assets/manuscript.pdf',
    techStack: ['Flutter', 'Vue.js', 'Python', 'Firebase', 'scikit-fuzzy', 'WebRTC'],
    mainContent: `
      <h2>Project Overview</h2>
      <p>ChickMate is a smart poultry brooder management system designed to optimize the climate for chicks during their crucial early weeks. It integrates an intelligent mobile app, a web dashboard, and a custom hardware brooder to monitor and regulate environmental conditions.</p>
      
      <h2>Technical Implementation</h2>
      <p>The core intelligence of ChickMate is a Python backend running a <strong>Fuzzy Logic Engine</strong> (using scikit-fuzzy). It dynamically controls the heater, fans, and dimmable LED lighting based on temperature, ammonia levels (MQ-series sensor), and the chicks' age.</p>
      <p>Additionally, the system incorporates AI-assisted monitoring. It utilizes <strong>Computer Vision (CV)</strong> and bioacoustic analysis to detect chick distress behaviors, such as huddling due to cold or panting from heat stress.</p>

      <h2>Real-Time Infrastructure</h2>
      <p>The entire ecosystem is synchronized using Firebase Realtime Database, allowing instant actuator control and push notifications. A live WebRTC video feed is streamed directly from the brooder to the Flutter mobile app and Vue.js dashboard.</p>
    `,
    metrics: `
      <div class="metric-card">
        <div class="metric-value">100%</div>
        <div class="metric-label">Remote Control</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">Real-time</div>
        <div class="metric-label">Video Streaming</div>
      </div>
    `
  },
  quaketrace: {
    title: 'QuakeTrace — IoT Hazard Assessment',
    heroImage: '../assets/project-quaketrace.jpg',
    tags: ['IoT', 'Embedded Systems', 'Hardware'],
    category: 'Competition Entry',
    duration: '2026',
    role: 'Hardware & Firmware Lead',
    teamSize: '3 Members',
    githubLink: 'https://github.com/ellameaea/iot-dashboard',
    demoLink: 'https://iot-dashboard-jqlf.vercel.app/',
    hardwareOffline: true,
    techStack: ['ESP32', 'C++', 'MQTT', 'Nuxt.js', 'Supabase', 'Chart.js'],
    mainContent: `
      <h2>The Challenge</h2>
      <p>Following an earthquake, secondary hazards such as gas leaks, fires, and structural damage often pose severe risks to trapped occupants and rescue teams. Early detection of these hazards is critical for emergency response.</p>
      
      <h2>The Solution</h2>
      <p>QuakeTrace is an intelligent IoT platform for post-earthquake hazard assessment. The system utilizes ESP32 microcontrollers equipped with DHT11 (temperature/humidity), MQ2 (gas), PIR (motion), and moisture sensors to monitor room conditions in real-time.</p>

      <h2>Architecture</h2>
      <p>As the Hardware/Firmware Lead, I developed the C++ firmware for the ESP32 to transmit sensor data securely over MQTT (HiveMQ) using TLS. A Nuxt.js dashboard visualizes this data with real-time Chart.js graphs, storing historical logs in Supabase. This project won <strong>Champion</strong> at the 9th DOST-MIRDC Metals & Engineering Competition (IoT Category).</p>
    `,
    metrics: `
      <div class="metric-card">
        <div class="metric-value">1st Place</div>
        <div class="metric-label">DOST-MIRDC</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">4+</div>
        <div class="metric-label">Sensors Monitored</div>
      </div>
    `
  },
  f1predictor: {
    title: 'F1 Prediction Championship',
    heroImage: '../assets/project-f1predictor.png',
    tags: ['Web Development', 'Full-Stack'],
    category: 'Personal Project',
    duration: '2026',
    role: 'Sole Developer',
    teamSize: '1 Member',
    githubLink: 'https://github.com/raphaeltizon/f1-predictor',
    demoLink: 'https://f1-predictor-xi-jet.vercel.app/',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Vercel'],
    mainContent: `
      <h2>Project Overview</h2>
      <p>The F1 Prediction Championship is a premium, interactive web application built with Next.js 14 and Tailwind CSS. It allows Formula 1 fans to predict the finishing orders for qualifying, sprint, and race sessions, competing on a global leaderboard.</p>
      
      <h2>Features & Mechanics</h2>
      <p>Users arrange their top 10 driver predictions using an interactive drag-and-drop interface. The app features a live countdown timer that automatically locks submissions the moment a session begins. Points are awarded based on exact matches, off-by-one errors, and top-10 accuracy.</p>

      <h2>Dual-Mode Architecture</h2>
      <p>The application implements a smart Dual Database Mode. It can run in "Mock Mode" using localStorage for offline testing, or in "Production Mode" utilizing Firebase Authentication and Firestore. An Admin Dashboard syncs actual race results from the Jolpica Ergast F1 API to automatically score all user submissions.</p>
    `,
    metrics: `
      <div class="metric-card">
        <div class="metric-value">Next.js 14</div>
        <div class="metric-label">App Router</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">Live</div>
        <div class="metric-label">API Syncing</div>
      </div>
    `
  },
  'itdr-email-sender': {
    title: 'ITDR & Departmental Follow-Up Email Sender',
    heroImage: '../assets/project-itdr-email.png',
    tags: ['Python', 'Tkinter GUI', 'Automation', 'SMTP'],
    category: 'Automation / Desktop Tool',
    duration: '2025',
    role: 'Sole Developer',
    teamSize: '1 Member',
    githubLink: 'https://github.com/raphaeltizon/itdr-email-sender',
    techStack: ['Python 3', 'Tkinter', 'SMTP / smtplib', 'python-dotenv', 'PyInstaller', 'CSV'],
    mainContent: `
      <h2>Project Overview</h2>
      <p>The ITDR & Departmental Follow-Up Email Sender is a standalone desktop GUI application developed in Python with Tkinter. Built to streamline recurring administrative and operational communications, the tool automates email outreach for IT Resiliency (ITDR), Business Continuity Management, compliance verification, and inter-departmental follow-ups.</p>
      
      <h2>Key Features & Functionality</h2>
      <p>Designed for efficiency, security, and ease of use, the application provides a complete workflow for managing recipient lists and dispatching tailored emails:</p>
      <ul>
        <li><strong>🔒 Secure SMTP Authentication:</strong> Authenticates securely via SMTP with out-of-the-box support for Gmail (using 16-character Google App Passwords) as well as custom SMTP hosts and ports.</li>
        <li><strong>⚡ .env Credential Storage:</strong> Optionally stores default sender email addresses and app credentials in a local <code>.env</code> file for quick 1-click login on startup.</li>
        <li><strong>📁 Recipient List CSV Import:</strong> Reads recipient lists directly from standard <code>.csv</code> files, mapping fields such as <em>Name</em>, <em>Email Address</em>, and <em>Department</em>.</li>
        <li><strong>✉️ Dynamic String Templating:</strong> Supports pre-configured email templates with dynamic tokens such as <code>{name}</code> and <code>{department}</code> that personalize messages automatically for each recipient.</li>
        <li><strong>👁️ Live Message Preview:</strong> Renders real-time previews of formatted subject lines and email body text before triggering any dispatches to prevent formatting mistakes.</li>
        <li><strong>🎯 Granular Recipient Selection:</strong> Features an interactive selection box supporting multi-select (Ctrl/Shift-click), "Select All", and targeted recipient filtering.</li>
      </ul>

      <h2>Distribution & Executable Packaging</h2>
      <p>To enable non-technical team members to run the tool without needing a Python runtime environment installed, the project is configured for standalone executable packaging using <strong>PyInstaller</strong>, generating a self-contained Windows <code>.exe</code> file.</p>
    `,
    metrics: `
      <div class="metric-card">
        <div class="metric-value">100%</div>
        <div class="metric-label">Automated Batch Personalization</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">Standalone</div>
        <div class="metric-label">Windows .exe Build</div>
      </div>
    `
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Get project ID from URL query params
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('project');

  // 2. Find project data
  const project = projectsData[projectId];

  if (!project) {
    // Show error if not found
    const mainContainer = document.querySelector('.case-study-grid');
    if (mainContainer) {
      mainContainer.innerHTML = `
        <div style="padding: 100px 0; text-align: center; width: 100%; grid-column: 1 / -1;">
          <h2>Project Not Found</h2>
          <p>The project you're looking for doesn't exist or has been removed.</p>
          <a href="../index.html#projects" class="btn btn-primary" style="margin-top: 20px;">Back to Projects</a>
        </div>
      `;
      document.querySelector('.case-study-hero').style.display = 'none';
      document.getElementById('projectMetrics').style.display = 'none';
    }
    return;
  }

  // 3. Inject data into DOM
  
  // Titles and Breadcrumbs
  const breadcrumbTitle = document.getElementById('breadcrumbTitle');
  if (breadcrumbTitle) breadcrumbTitle.textContent = project.title;
  
  const projectTitle = document.getElementById('projectTitle');
  if (projectTitle) projectTitle.textContent = project.title;
  
  // Hero Image
  const heroImg = document.getElementById('projectHeroImage');
  if (heroImg) {
    heroImg.src = project.heroImage;
    heroImg.alt = project.title;
  }
  
  // Tags
  const tagsContainer = document.getElementById('projectTags');
  if (tagsContainer) {
    tagsContainer.innerHTML = project.tags.map(tag => `<span class="case-study-tag">${tag}</span>`).join('');
  }
  
  // Main Content
  const mainContentContainer = document.getElementById('projectMain');
  if (mainContentContainer) {
    mainContentContainer.innerHTML = project.mainContent;
  }
  
  // Sidebar Details
  const catEl = document.getElementById('projectCategory');
  if (catEl) catEl.textContent = project.category;
  
  const durEl = document.getElementById('projectDuration');
  if (durEl) durEl.textContent = project.duration;
  
  const roleEl = document.getElementById('projectRole');
  if (roleEl) roleEl.textContent = project.role;
  
  const teamEl = document.getElementById('projectTeam');
  if (teamEl) teamEl.textContent = project.teamSize;
  
  // Tech Stack Pills
  const techStackContainer = document.getElementById('projectTechStack');
  if (techStackContainer) {
    techStackContainer.innerHTML = project.techStack.map(tech => `<span class="project-tag">${tech}</span>`).join('');
  }
  
  // Links
  const githubBtn = document.getElementById('projectGithub');
  if (githubBtn) {
    if (project.githubLink) {
      githubBtn.href = project.githubLink;
      githubBtn.target = '_blank';
    } else {
      githubBtn.style.display = 'none';
    }
  }
  
  const demoBtn = document.getElementById('projectDemo');
  const warningEl = document.getElementById('projectDemoWarning');
  if (demoBtn) {
    if (project.demoLink) {
      demoBtn.href = project.demoLink;
      demoBtn.target = '_blank';
      demoBtn.style.display = 'inline-flex';
      if (warningEl) {
        if (project.hardwareOffline) {
          warningEl.style.display = 'block';
        } else {
          warningEl.style.display = 'none';
        }
      }
    } else {
      demoBtn.style.display = 'none';
      if (warningEl) warningEl.style.display = 'none';
    }
  }
  
  const pdfBtn = document.getElementById('projectPdf');
  if (pdfBtn) {
    if (project.pdfLink) {
      pdfBtn.href = project.pdfLink;
      pdfBtn.style.display = 'inline-flex';
    } else {
      pdfBtn.style.display = 'none';
    }
  }
  
  // Metrics
  const metricsContainer = document.getElementById('projectMetrics');
  if (metricsContainer && project.metrics) {
    metricsContainer.innerHTML = project.metrics;
  } else if (metricsContainer) {
    metricsContainer.style.display = 'none';
  }
});
