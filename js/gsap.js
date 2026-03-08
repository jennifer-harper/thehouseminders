document.addEventListener('DOMContentLoaded', (event) => {
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.set('#contact-inner', { yPercent: -50 })
    const uncover = gsap.timeline({ paused: true })
    uncover.to('#contact-inner', {
      yPercent: 0,
      ease: 'none',
      onUpdate: function () {
        console.log('update', this.progress())
      },
    })
    ScrollTrigger.create({
      trigger: '.trigger-footer',
      start: 'bottom bottom',
      end: '+=100%',
      animation: uncover,
      scrub: true,
      markers: false,
    })

    gsap.from('#light', {
      scrollTrigger: {
        trigger: '#services',
        id: 'Light-Animation',
        start: 'top -40',
        toggleActions: 'play none none reset',
        // markers: true,
      },
      autoAlpha: 0,
      duration: 1,
      ease: 'power2.out',
    })

    // 1. hero tail
    gsap.to('#tail', {
      duration: 4,
      rotate: 5,
      skewY: 10,
      scale: 0.95,
      x: 5,
      transformOrigin: '0% 0%',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    gsap.to(['#head-group', '#left-eye-group'], {
      rotate: -7,
      transformOrigin: '50% 50%',
      duration: 5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      repeatDelay: 5,
    })

    // all clouds - Cloud
    gsap.fromTo(
      '.cloud',
      { y: '0vw' },
      {
        y: '5',
        x: '30',
        duration: 5,
        repeat: -1,
        ease: 'none',
        yoyo: true,
      },
    )

    //all clouds - cloud sm
    gsap.fromTo(
      '.cloud-sm',
      { y: '0vw' },
      {
        y: '-5',
        x: '-30',
        duration: 5,
        repeat: -1,
        ease: 'none',
        yoyo: true,
      },
    )

    // about us grey cat
    gsap.from('#grey-tail', {
      transformOrigin: '100% 0%',
      rotate: 45,
      yoyo: true,
      repeat: -1,
      duration: 5,
      ease: 'sine.inOut',
    })

    //pricing, stars
    gsap.to('.star', {
      opacity: 0,
      duration: 0.5, // Fast "off"
      ease: 'none', // No smoothing, just a sharp change
      stagger: {
        each: 0.8, // Time between each star starting its blink
        from: 'random', // This creates the random sequence you asked for
        repeat: -1, // Loop forever
        yoyo: true, // Fade back in to opacity 1
      },
    })
  } // End ScrollTrigger check
}) // End DOMContentLoaded
