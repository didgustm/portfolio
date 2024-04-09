import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export const scroll = () => {
    let pin = gsap.timeline({
        scrollTrigger: {
            trigger:'.pin',
            scrub:2,
            pin:!0,
            onUpdate ({ progress }){
                innerWidth > 500?
                gsap.to('.tail', { strokeDashoffset:160 - progress*160 }):
                gsap.to('.tail', { strokeDashoffset:130 - progress*130 });
            },
            end: () => `+=${document.querySelector('.pin').offsetHeight * 4}`
        }
    });
    
    pin.to('.visualBall', { r:600, duration:6, ease:'none' })
    .to('.barba', { scale:6, }, '<')
    .to('.barba', { scale:10, opacity:1, duration:3 })
    .to('.about', { opacity:1, duration:3, 
        onComplete: () => zIndex('about', 1),
        onReverseComplete: () => zIndex('about', -1)
    }, '<')
    .to('.visual', { opacity:0 })
    .to('.barbaB', { scale:1, opacity:0, background:'#f3f7fb', duration:4 })
    .to('.career01', { y:0, opacity:1, duration:4, delay:4 })
    .to('.career .line', { scaleY:1, duration:4 })
    .to('.career02', { y:0, opacity:1, duration:4, delay:4 }, '<')
    .to('.career', { opacity:0, yPercent:-100, delay:2, duration:2 })
    .to('.about', { background:'#f3f7fb', color:'#464646', duration:5 })
    .to('.skills .box01, .skills .box02', { opacity:1, rotateY:0, duration:6, delay:3 })
    .to('.skills .box01', { opacity:0, rotateY:-90, duration:6, delay:3 })
    .to('.skills .box02', { opacity:0, rotateY:90, duration:6 }, '<')
    .to('.skills .box03, .skills .box04', { opacity:1, rotateY:0, duration:6,delay:3 })
    .to('.about .inner', { rotateX:45, delay:4, duration:5 })
    .to('.about', { opacity:0, 
        onComplete: () => zIndex('portfolio', 1),
        onReverseComplete: () => zIndex('portfolio', -1)
    }, '-=2')
    .to('.portfolio', { opacity:1 }, '-=1')
    .to('.portfolio .inner', { rotateX:0, opacity:1, duration:6 }, '<')
    .to('.contact', { y:0, delay:10, duration:6,
        onStart: () => zIndex('contact', 1),
        onReverseComplete: () => zIndex('contact', -1)
    })
    .to('.portfolio', { filter:'blur(10px)' }, '-=3')

    window.addEventListener('resize', ScrollTrigger.update)
}

function zIndex(target, value){
    document.querySelector(`.${target}`).style.zIndex = value
}