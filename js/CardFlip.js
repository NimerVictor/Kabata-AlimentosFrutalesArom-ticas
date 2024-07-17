/********************************** */
/*             Flip Card            */
/********************************** */
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('is-flipped');
    });
});