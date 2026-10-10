// ================================================================
// PORTFOLIO V2 | INTERACTIVE SCRIPTS
// ================================================================

// 1. LIVE REAL-TIME CLOCK (IST / Local 12-hour format for header)
function updateLiveClock() {
  const clockEl = document.getElementById('liveTime');
  if (!clockEl) return;

  const now = new Date();
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata' // IST Indian Standard Time
  };

  try {
    const timeStr = new Intl.DateTimeFormat('en-US', options).format(now).toLowerCase();
    clockEl.textContent = timeStr;
  } catch (e) {
    const hours = String(now.getHours() % 12 || 12).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'pm' : 'am';
    clockEl.textContent = `${hours}:${mins}:${secs} ${ampm}`;
  }
}
updateLiveClock();
setInterval(updateLiveClock, 1000);

// 2. FOOTER CLOCK & YEAR (Matching Manish's 24-hr IST footer format)
function updateFooterClock() {
  const footerTimeEl = document.getElementById('footerLiveTime');
  const footerYearEl = document.getElementById('footerYear');
  const now = new Date();

  if (footerYearEl) {
    footerYearEl.textContent = now.getFullYear();
  }

  if (footerTimeEl) {
    try {
      const formatted = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
      footerTimeEl.textContent = `${formatted} IST`;
    } catch (e) {
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      footerTimeEl.textContent = `${hh}:${mm}:${ss} IST`;
    }
  }
}
updateFooterClock();
setInterval(updateFooterClock, 1000);

// 3. WORK EXPERIENCE ACCORDION TOGGLE
window.toggleTimeline = function(element) {
  const entry = element.closest('.timeline-entry');
  if (!entry) return;

  const isExpanded = entry.classList.contains('expanded');
  const details = entry.querySelector('.timeline-details');

  if (isExpanded) {
    entry.classList.remove('expanded');
    if (details) details.classList.remove('open');
  } else {
    document.querySelectorAll('.timeline-entry').forEach(e => {
      e.classList.remove('expanded');
      const d = e.querySelector('.timeline-details');
      if (d) d.classList.remove('open');
    });
    entry.classList.add('expanded');
    if (details) details.classList.add('open');
  }
};

// 5. /USES DRAWER TOGGLE
window.toggleUsesSetup = function() {
  const drawer = document.getElementById('usesDrawer');
  const btnText = document.getElementById('usesBtnText');
  if (!drawer) return;

  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    drawer.classList.remove('open');
    if (btnText) btnText.textContent = 'See my setup';
  } else {
    drawer.classList.add('open');
    if (btnText) btnText.textContent = 'Hide setup';
  }
};

// 6. NAVBAR SCROLL HIGHLIGHTING & SMOOTH SCROLLING
const navItems = document.querySelectorAll('.nav-links .nav-item');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let currentSection = '';
  const scrollPosition = window.scrollY + 120;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href && href.startsWith('#')) {
      if (href === `#${currentSection}`) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    }
  });
});

console.log('%cUday Pratap Singh Portfolio', 'color:#3b82f6;font-size:16px;font-weight:bold;');
console.log('%cBuild, measure, and continuously iterate.', 'color:#a1a1aa;font-size:12px;font-style:italic;');
