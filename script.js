document.addEventListener('DOMContentLoaded', () => {
    console.log("Anime.js Ready!");
  
    anime({
      targets: '.hero h1',
      translateY: [-50, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: 500
    });

    anime({
      targets: '.avatars img',
      scale: [0, 1],
      opacity: [0, 1],
      easing: 'easeOutBounce',
      delay: anime.stagger(200) 
    });
  
    anime({
      targets: '.demo-button',
      scale: [1, 1.1],
      duration: 800,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true
    });
  
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
  
    anime({
      targets: '.statistics strong',
      innerHTML: [0, 700],
      easing: 'linear',
      duration: 2000,
      round: 1 
    });
  
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
  
    document.getElementById('services-btn').addEventListener('click', () => {
      alert('Navigating to Services Page...');
      window.location.href = '/structure/services.html';
    });
  
    document.getElementById('about-us-btn').addEventListener('click', () => {
      alert('Navigating to About Us Page...');
      window.location.href = '/structure/about.html'; 
    });
  
    document.getElementById('signup-btn').addEventListener('click', () => {
      alert('Navigating to Sign-Up Page...');
      window.location.href = '/structure/signup.html'; 
    });
  
    document.getElementById('demo-btn').addEventListener('click', () => {
      alert('Demo Call Booked! We will contact you shortly.');
    });

    document.getElementById("demo-btn").addEventListener("click", function () {
      window.location.href = "/structure/book-demo.html";
    });
    
  
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
  
