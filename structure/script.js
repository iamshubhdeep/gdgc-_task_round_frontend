// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    console.log("Anime.js Ready!");
  
    // Animate the hero text on load
    anime({
      targets: '.hero h1',
      translateY: [-50, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: 500
    });
  
    // Animate avatar images with a bounce effect
    anime({
      targets: '.avatars img',
      scale: [0, 1],
      opacity: [0, 1],
      easing: 'easeOutBounce',
      delay: anime.stagger(200) // Delay increases for each element
    });
  
    // Animate the "Book Demo Call" button with a loop
    anime({
      targets: '.demo-button',
      scale: [1, 1.1],
      duration: 800,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true
    });
  
    // Scroll-based animation for solutions section
    const solutions = document.querySelector('.solutions');
    window.addEventListener('scroll', () => {
      const rect = solutions.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        anime({
          targets: '.solutions .solution-item',
          translateX: [-100, 0],
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 1000
        });
      }
    });
  
    // Animate the statistics section numbers
    anime({
      targets: '.statistics strong',
      innerHTML: [0, 700],
      easing: 'linear',
      duration: 2000,
      round: 1 // Ensures only whole numbers are displayed
    });
  
    // Scroll-to-top button animation
    const scrollTopButton = document.querySelector('button');
    scrollTopButton.addEventListener('mouseenter', () => {
      anime({
        targets: scrollTopButton,
        scale: 1.2,
        duration: 300,
        easing: 'easeOutQuad'
      });
    });
    scrollTopButton.addEventListener('mouseleave', () => {
      anime({
        targets: scrollTopButton,
        scale: 1,
        duration: 300,
        easing: 'easeOutQuad'
      });
    });
  
    // Button interactions for navigation
    document.getElementById('services-btn').addEventListener('click', () => {
      alert('Navigating to Services Page...');
      window.location.href = '/structure/services.html'; // Replace with actual URL or relative path
    });
  
    document.getElementById('about-us-btn').addEventListener('click', () => {
      alert('Navigating to About Us Page...');
      window.location.href = 'about.html'; // Replace with actual URL or relative path
    });
  
    document.getElementById('signup-btn').addEventListener('click', () => {
      alert('Navigating to Sign-Up Page...');
      window.location.href = 'signup.html'; // Replace with actual URL or relative path
    });
  
    // Demo button interaction
    document.getElementById('demo-btn').addEventListener('click', () => {
      alert('Demo Call Booked! We will contact you shortly.');
    });

    document.getElementById("demo-btn").addEventListener("click", function () {
      window.location.href = "book-demo.html";
    });
    
  
    // Hover Interaction: Rotate the Avatar
    document.querySelectorAll('.avatars img').forEach((avatar) => {
      avatar.addEventListener('mouseenter', () => {
        anime({
          targets: avatar,
          rotate: '1turn',
          duration: 800,
          easing: 'easeOutExpo'
        });
      });
    });
  });
  