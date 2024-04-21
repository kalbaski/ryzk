        // JavaScript to show/hide the contact form
        document.getElementById('contact-link').addEventListener('click', function() {
            document.getElementById('overlay').style.display = 'flex';
        });

                // JavaScript to show/hide the contact form
                document.getElementById('contact-link1').addEventListener('click', function() {
                    document.getElementById('overlay').style.display = 'flex';
                });

        // Add event listener to close button
        document.getElementById('close-btn').addEventListener('click', function() {
            document.getElementById('overlay').style.display = 'none';
        });

        // Close the overlay if clicked outside of the menu
        window.addEventListener('click', function(event) {
            var overlay = document.getElementById('overlay');
            if (event.target == overlay) {
                overlay.style.display = 'none';
            }
        });

        document.addEventListener('DOMContentLoaded', function () {
            const burgerMenu = document.querySelector('.burger-menu');
            const navLinks = document.querySelector('.nav-links');
        
            burgerMenu.addEventListener('click', function () {
                navLinks.classList.toggle('active');
            });
        });