document.addEventListener("DOMContentLoaded", function () {
    // Theme toggle functionality
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function() {
            document.body.dataset.theme = document.body.dataset.theme === "dark" ? "light" : "dark";
            
            // Update the icon based on the current theme
            const icon = document.body.dataset.theme === "dark" ? "sun" : "moon";
            themeToggleBtn.innerHTML = `<i class="fas fa-${icon}"></i>`;
            
            // Save the theme preference in localStorage
            localStorage.setItem("theme", document.body.dataset.theme);
        });
        
        // Check if there's a saved theme preference
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            document.body.dataset.theme = savedTheme;
            const icon = savedTheme === "dark" ? "sun" : "moon";
            themeToggleBtn.innerHTML = `<i class="fas fa-${icon}"></i>`;
        }
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Add active class to current page nav link
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentLocation.includes(linkPath) && linkPath !== '/' && linkPath !== 'index.html') {
            link.classList.add('active');
        } else if ((currentLocation === '/' || currentLocation.endsWith('index.html')) && (linkPath === 'index.html' || linkPath === './')) {
            link.classList.add('active');
        }
    });
    
    // Announcement bar close button functionality
    const announcementBar = document.getElementById('announcement-bar');
    const announcementCloseBtn = document.getElementById('announcement-close');
    
    if (announcementBar && announcementCloseBtn) {
        // Check if announcement was previously closed
        if (localStorage.getItem('announcement_closed')) {
            announcementBar.classList.add('closed');
        }
        
        announcementCloseBtn.addEventListener('click', function() {
            announcementBar.classList.add('closed');
            // Remember that announcement was closed
            localStorage.setItem('announcement_closed', 'true');
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without refreshing the page
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Smooth scroll for the scroll-down arrow
    const scrollDownArrow = document.querySelector('.scroll-down-arrow');
    if (scrollDownArrow) {
        scrollDownArrow.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Add active class to the scroll arrow during animation
                this.classList.add('active');
                setTimeout(() => {
                    this.classList.remove('active');
                }, 1000);
                
                // Update URL without refreshing the page
                history.pushState(null, null, targetId);
            }
        });
    }
    
    // Smooth scroll for the about page scroll-down arrow
    const aboutScrollDownArrow = document.querySelector('.about-scroll-down-arrow');
    if (aboutScrollDownArrow) {
        aboutScrollDownArrow.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Add active class to the scroll arrow during animation
                this.classList.add('active');
                setTimeout(() => {
                    this.classList.remove('active');
                }, 1000);
                
                // Update URL without refreshing the page
                history.pushState(null, null, targetId);
            }
        });
    }
    
    // Hide preloader once page is loaded
    const preloader = document.getElementById("preloader");
    if (preloader) {
        setTimeout(function() {
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
            
            setTimeout(function() {
                preloader.style.display = "none";
            }, 500);
        }, 600);
    }

    // Initialize AOS animation library
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false
        });
    }

    // Initialize particles.js if element exists
    const particlesContainer = document.getElementById("particles-js");
    if (particlesContainer && typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Add typing effect to hero title if it exists
    const typedTextElement = document.querySelector(".typed-text");
    if (typedTextElement && typeof Typed !== "undefined") {
        const typedText = new Typed(".typed-text", {
            strings: [
                "AI-powered crop recommendations",
                "precision agriculture technology",
                "data-driven farming solutions",
                "sustainable farming practices"
            ],
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 500,
            loop: true
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");
    const submitText = document.querySelector(".submit-text");
    const submitSpinner = document.getElementById("submitSpinner");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Show spinner and disable button
            submitBtn.disabled = true;
            submitText.classList.add("d-none");
            submitSpinner.classList.remove("d-none");
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Send to Formspree
            fetch("https://formspree.io/f/mrbpavyg", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                }
            })
            .then(response => {
                if (response.ok) {
                    // Show success toast
                    Toastify({
                        text: "Thank you for your message! We will get back to you soon.",
                        duration: 5000,
                        close: true,
                        gravity: "top",
                        position: "center",
                        backgroundColor: "var(--primary-color)",
                        stopOnFocus: true,
                        onClick: function(){} // Callback after click
                    }).showToast();
                    
                    // Reset form
                    contactForm.reset();
                } else {
                    // Show error toast
                    Toastify({
                        text: "Oops! Something went wrong. Please try again later.",
                        duration: 5000,
                        close: true,
                        gravity: "top",
                        position: "center",
                        backgroundColor: "#e74c3c",
                        stopOnFocus: true,
                    }).showToast();
                }
            })
            .catch(error => {
                // Show error toast
                Toastify({
                    text: "Network error. Please check your connection and try again.",
                    duration: 5000,
                    close: true,
                    gravity: "top",
                    position: "center",
                    backgroundColor: "#e74c3c",
                    stopOnFocus: true,
                }).showToast();
            })
            .finally(() => {
                // Hide spinner and enable button
                submitBtn.disabled = false;
                submitText.classList.remove("d-none");
                submitSpinner.classList.add("d-none");
            });
        });
    }

    // Search Functionality
    window.searchPage = function () {
        let input = document.getElementById("searchInput").value.toLowerCase();
        let sections = document.querySelectorAll("section");

        sections.forEach(section => {
            let text = section.textContent.toLowerCase();
            if (text.includes(input)) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    };
});
