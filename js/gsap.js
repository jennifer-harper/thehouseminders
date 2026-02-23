document.addEventListener('DOMContentLoaded', (event) => {
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)

    let mm = gsap.matchMedia()
    console.log('GSAP Version:', gsap.version)
    mm.add('(min-width: 1366px) and (any-pointer: fine)', () => {
      // Final Cleanup update

      const catTL = gsap.timeline({
        repeat: -1, // -1 means loop forever
        yoyo: true, // Play forward then backward
        defaults: { ease: 'sine.inOut' }, // Smoother movement for animals
      })

      // 1. The Tail Animation (Faster cycle)
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

      //   // Cloud 1: Large & Slower
      //   gsap.fromTo(
      //     '#cloud',
      //     { x: '0vw' }, // Start off-screen left
      //     {
      //       x: '120vw', // End off-screen right
      //       duration: 160, // Long duration for slow movement
      //       repeat: -1, // Loop forever
      //       ease: 'none', // Crucial: Use "none" for a constant speed carousel
      //       delay: 3,
      //     },
      //   )

      //   // Cloud 2: Small & Faster (creates depth)
      //   gsap.fromTo(
      //     '#cloud-sm',
      //     { x: '-3vw' },
      //     {
      //       x: '120vw',
      //       duration: 140,
      //       repeat: -1,
      //       ease: 'none',
      //     },
      //   )

      const headTL = gsap.timeline({
        repeat: -1, // Loop the whole sequence forever
        repeatDelay: 5, // Wait 10 seconds before starting the next loop
        yoyo: true, // Move there and back
        defaults: {
          ease: 'sine.inOut',
          duration: 5,
        },
      })

      // Animate both head and eye at the same time
      headTL.to(
        ['#head-group', '#left-eye-group'],
        {
          rotate: -7,
          transformOrigin: '50% 50%',
        },
        0,
      )

      return () => {
        catTL.kill()
      }
    }) // End mm.add
  } // End ScrollTrigger check
}) // End DOMContentLoaded
