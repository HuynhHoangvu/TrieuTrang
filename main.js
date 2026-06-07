// 1. Header Scroll Transition
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// 2. Mobile Drawer Toggle Logic
const menuToggle = document.getElementById('menu-toggle');
const drawerClose = document.getElementById('drawer-close');
const mobileDrawer = document.getElementById('mobile-drawer');
const drawerOverlay = document.getElementById('drawer-overlay');
const drawerLinks = document.querySelectorAll('.drawer-link');

function openDrawer() {
  mobileDrawer.classList.add('open');
  drawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden'; // Stop scrolling behind drawer
}

function closeDrawer() {
  mobileDrawer.classList.remove('open');
  drawerOverlay.classList.remove('open');
  document.body.style.overflow = ''; // Restore scroll
}

if (menuToggle) menuToggle.addEventListener('click', openDrawer);
if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

// Close drawer automatically when clicking any menu anchor links
drawerLinks.forEach(link => {
  link.addEventListener('click', closeDrawer);
});

// 3. Cinematic SplitText Animation Helper
const splitElements = document.querySelectorAll('.split-text');

splitElements.forEach(element => {
  const originalText = element.textContent.trim();
  element.textContent = ''; // Clear text
  
  const words = originalText.split(' ');
  let charCount = 0;

  words.forEach((word, wordIndex) => {
    const wordSpan = document.createElement('span');
    wordSpan.className = 'split-word';

    const chars = word.split('');
    chars.forEach(char => {
      const charSpan = document.createElement('span');
      charSpan.className = 'split-char';
      charSpan.textContent = char;
      // Stagger delays based on overall character index
      charSpan.style.animationDelay = `${charCount * 0.04}s`;
      wordSpan.appendChild(charSpan);
      charCount++;
    });

    element.appendChild(wordSpan);
    
    // Add spaces between words
    if (wordIndex < words.length - 1) {
      const space = document.createTextNode(' ');
      element.appendChild(space);
    }
  });
});

// 4. Restaurant Menu Tab Switcher
const menuTabs = document.querySelectorAll('.menu-tab-item');
const menuPanes = document.querySelectorAll('.menu-pane');

menuTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Clear active classes from tabs
    menuTabs.forEach(item => item.classList.remove('active'));
    tab.classList.add('active');

    // Clear active classes from panes
    menuPanes.forEach(pane => pane.classList.remove('active'));
    
    // Set target active
    const targetId = tab.getAttribute('data-target');
    const targetPane = document.getElementById(targetId);
    if (targetPane) {
      targetPane.classList.add('active');
    }
  });
});

// 5. Gallery Lightbox Modal
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    if (img && lightbox && lightboxImg) {
      lightboxImg.src = img.src;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });
});

function closeLightbox() {
  if (lightbox) {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
}

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightboxClose) {
      closeLightbox();
    }
  });
}

// 6. Testimonials Auto-Slider
const testimonialTrack = document.getElementById('testimonial-track');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let slideInterval;

function showSlide(index) {
  if (!testimonialTrack) return;
  currentIndex = index;
  
  // Slide the track
  testimonialTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  
  // Update indicators
  dots.forEach(dot => dot.classList.remove('active'));
  const activeDot = document.querySelector(`.dot[data-index="${currentIndex}"]`);
  if (activeDot) {
    activeDot.classList.add('active');
  }
}

function nextSlide() {
  if (dots.length === 0) return;
  let nextIndex = currentIndex + 1;
  if (nextIndex >= dots.length) {
    nextIndex = 0;
  }
  showSlide(nextIndex);
}

function startSlider() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000); // Transitions every 5 seconds
}

// Initialize dots click listeners
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const targetIdx = parseInt(dot.getAttribute('data-index'), 10);
    showSlide(targetIdx);
    startSlider(); // Reset automatic interval timer
  });
});

// Start slider automatically on page load
if (testimonialTrack) {
  startSlider();
}
