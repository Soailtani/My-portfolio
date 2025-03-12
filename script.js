// JavaScript pour l'animation de défilement des sections

document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form');

    

    // Animation de défilement lors du clic sur les liens de navigation

    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {

        link.addEventListener('click', function(e) {

            e.preventDefault();

            const targetId = e.target.getAttribute('href').substring(1);

            const targetSection = document.getElementById(targetId);

            

            window.scrollTo({

                top: targetSection.offsetTop - 80, // Défilement avec un léger espace en haut

                behavior: 'smooth'

            });

        });

    });

    

    // Validation simple du formulaire de contact

    form.addEventListener('submit', function(e) {

        const name = form.querySelector('[name="nom"]').value;

        const email = form.querySelector('[name="email"]').value;
