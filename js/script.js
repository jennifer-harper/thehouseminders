document.addEventListener('DOMContentLoaded', function () {
  // 1. Update year
  const yearEl = document.getElementById('year')
  if (yearEl) yearEl.textContent = new Date().getFullYear()

  // 2. Handle copy email
  const emailLinks = document.querySelectorAll('.email-link')
  emailLinks.forEach((link) => {
    link.addEventListener('copy', (e) => {
      const cleanEmail = link.textContent.trim()
      if (e.clipboardData) {
        e.clipboardData.setData('text/plain', cleanEmail)
        e.preventDefault()
      }
    })

    link.addEventListener('click', function () {
      const cleanEmail = link.textContent.trim()
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(cleanEmail)
      }
      link.classList.add('copied')
      setTimeout(() => link.classList.remove('copied'), 2000)
    })
  })

  //3. Hamburger menu

  const toggle = document.getElementById('menu-toggle')
  const navLinks = document.getElementById('nav-links')
  const hamburger = document.getElementById('hamburger-icon')
  const closeIcon = document.getElementById('close-icon')

  function openMenu() {
    navLinks.classList.remove('opacity-0', 'invisible')
    navLinks.classList.add('opacity-100', 'visible')

    hamburger.classList.add('hidden')
    closeIcon.classList.remove('hidden')

    document.body.style.overflow = 'hidden'
  }

  function closeMenu() {
    navLinks.classList.add('opacity-0', 'invisible')
    navLinks.classList.remove('opacity-100', 'visible')

    hamburger.classList.remove('hidden')
    closeIcon.classList.add('hidden')

    document.body.style.overflow = 'auto'
  }

  // Main Toggle Button Logic
  toggle.addEventListener('click', () => {
    const isCurrentlyOpen = navLinks.classList.contains('visible')
    if (isCurrentlyOpen) {
      closeMenu()
    } else {
      openMenu()
    }
  })

  // Anchor Link Logic
  const anchors = navLinks.querySelectorAll('a')
  anchors.forEach((link) => {
    link.addEventListener('click', () => {
      // Only run this if we are on a screen size where the toggle button is visible
      if (window.getComputedStyle(toggle).display !== 'none') {
        closeMenu()
      }
    })
  })
})
var swiper = new Swiper('.swiper', {
  autoHeight: false,
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
