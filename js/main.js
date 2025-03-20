
document.addEventListener("DOMContentLoaded", (event) => {


    // gsap.to(".hero__text", {
    //     duration: 1,
    //     ease: "none",
    //     x: -200,
    //     opacity: 1,
    //     // repeat: -1,
    //     // rotation: 360,
    // })




    const text = document.querySelector('.header__logo');

    const splitText = (el) => {
        el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
            return `<div class="word">` +
                m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
                `</div>`;
        });
        return el;
    };

    const split = splitText(text);

    function random(min, max) {
        return (Math.random() * (max - min)) + min;
    }

    // Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
    //     TweenMax.from(el, 1.5, {
    //         opacity: 0,
    //         scale: .1,
    //         x: random(-500, 500),
    //         y: random(-500, 500),
    //         z: random(-500, 500),
    //         delay: idx * 0.02,
    //         repeat: 0,
    //     })
    // });

       gsap.from(".header__logo .letter", {
            duration: 2,
            y: -100,
            scale: 0,
            ease: "bounce.out",
            stagger: {
                each: 0.1,
                from: "center"
            }
        })

       gsap.from(".header__btn span", {
            y: -100,
            duration: .5,
            delay: 1.5,
            scaleX: 0,
            ease: "bounce.in",
            stagger: {
                each: .3,
                from: "center"
            }
        })

      

});


