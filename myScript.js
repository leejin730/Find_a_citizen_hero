document.addEventListener("DOMContentLoaded", function() {
    const specialHeroes = [1, 5, 13, 18, 27, 29];

    const heroBoxes = document.querySelectorAll(".hero-box");

    heroBoxes.forEach(box => {
        const hero = box.querySelector(".hero");
        if (hero) {
            hero.addEventListener('click', function(event) {
                event.preventDefault(); // 기본 동작을 막음

                const dataHero = parseInt(hero.getAttribute('data-hero'));
                if (specialHeroes.includes(dataHero)) {
                    // 특정 페이지로 이동
                    window.location.href = `citizen${dataHero}.html`;
                } else {
                    // 그 외의 경우 not_a_hero.html 페이지로 이동
                    window.location.href = 'not_a_hero.html';
                }
            });

            hero.querySelector('img').addEventListener('load', () => {
                const boxHeight = box.clientHeight;
                const boxWidth = box.clientWidth;
                const heroImg = hero.querySelector('img');
                const heroHeight = heroImg.clientHeight;
                const heroWidth = heroImg.clientWidth;
                const randomTop = Math.random() * (boxHeight - heroHeight);
                const randomLeft = Math.random() * (boxWidth - heroWidth);
                hero.style.top = `${randomTop}px`;
                hero.style.left = `${randomLeft}px`;
            });
        }
    });
});

