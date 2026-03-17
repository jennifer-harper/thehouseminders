document.addEventListener('DOMContentLoaded', (event) => {
  if (typeof ScrollTrigger !== 'undefined') {
    let mm = gsap.matchMedia()

    // mm.add('(min-width: 768px)', () => {
    //   // --- EVERYTHING IN HERE ONLY RUNS ABOVE 768px ---

    //   // 1. Initial States
    //   gsap.set('main', { y: '110vh' })
    //   gsap.set('#contact-inner', { yPercent: -50 })

    //   // 2. Create the Timeline
    //   const masterUncover = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: '.trigger-footer',
    //       start: 'bottom bottom',
    //       end: '+=100%',
    //       scrub: true,
    //     },
    //   })

    //   masterUncover.to('main', { y: 0, ease: 'none' }, 0).to('#contact-inner', { yPercent: 0, ease: 'none' }, 0)

    //   // Optional: Cleanup function if needed
    //   return () => {
    //     gsap.set(['main', '#contact-inner'], { clearProps: 'all' })
    //   }
    // })

    // marquee testimonials
    const marqueeA = document.querySelector('.marquee-content-a .test-div')
    const itemA = document.querySelector('.marquee-content-a .test-div span')

    // 1. Loop to create the clones
    for (let i = 0; i < 12; i++) {
      const clone = itemA.cloneNode(true)
      marqueeA.appendChild(clone)
    }
    // 3. The Infinite Loop
    gsap.to(marqueeA, {
      xPercent: -50, // This is the 'Golden Rule' for seamless loops
      ease: 'linear',
      duration: 40,
      repeat: -1,
      // Force GSAP to use 3D transforms for smoother sub-pixel rendering
    })

    // marquee testimonials
    const marquee = document.querySelector('.marquee-content .test-div')
    const item = document.querySelector('.marquee-content .test-div span')

    // 1. Loop to create the clones
    for (let i = 0; i < 12; i++) {
      const clone = item.cloneNode(true)
      marquee.appendChild(clone)
    }
    // 3. The Infinite Loop
    gsap.to(marquee, {
      xPercent: -50, // This is the 'Golden Rule' for seamless loops
      ease: 'linear',
      duration: 20,
      repeat: -1,
      // Force GSAP to use 3D transforms for smoother sub-pixel rendering
    })

    //marquee police checks
    const marqueeReverse = document.querySelector('.marquee-reverse .test-div')
    const itemR = document.querySelector('.marquee-reverse .test-div span')
    for (let i = 0; i < 7; i++) {
      const clone = itemR.cloneNode(true)
      marqueeReverse.appendChild(clone)
    }

    gsap.set(marqueeReverse, { xPercent: -50 })

    // 2. Animate back to 0

    // 3. The Infinite Loop
    gsap.to(marqueeReverse, {
      xPercent: 0, // This is the 'Golden Rule' for seamless loops
      ease: 'linear',
      duration: 20,
      repeat: -1,
      // Force GSAP to use 3D transforms for smoother sub-pixel rendering
    })

    //marquee end

    gsap.from('#light', {
      scrollTrigger: {
        trigger: '#services',
        id: 'Light-Animation',
        start: 'top top',
        toggleActions: 'play none none reset',
        //markers: true,
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
