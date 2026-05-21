gsap.registerPlugin(ScrollTrigger);


/* LENIS */

const lenis = new Lenis({
    duration:1.2,
    smoothWheel:true,
    smoothTouch:false
});


lenis.on('scroll', ScrollTrigger.update);


gsap.ticker.add((time)=>{
    lenis.raf(time * 1000);
});


gsap.ticker.lagSmoothing(0);


/* SPLIT TYPE */

const splitElements = document.querySelectorAll('.split');

splitElements.forEach((element)=>{

    new SplitType(element,{
        types:'lines'
    });

});


/* INTRO TIMELINE */

const introTimeline = gsap.timeline();

introTimeline.from('.small-line',{

    opacity:0,
    y:30,

    duration:1.4,

    ease:'power2.out'

});

introTimeline.from('.main-title .line',{

    opacity:0,
    y:140,
    rotateX:15,

    stagger:0.18,

    duration:2,

    ease:'power4.out'

}, '-=0.8');


/* SCENE TAGS */

gsap.utils.toArray('.reveal-tag').forEach((tag)=>{

    gsap.fromTo(

        tag,

        {
            opacity:0,
            y:30
        },

        {
            opacity:1,
            y:0,

            duration:1.5,

            ease:'power2.out',

            scrollTrigger:{
                trigger:tag,
                start:'top 90%'
            }
        }

    );

});


/* SCENE HEADINGS */

gsap.utils.toArray('.scene-heading').forEach((heading)=>{

    const lines = heading.querySelectorAll('.line');

    gsap.fromTo(

        lines,

        {
            opacity:0,
            y:160,
            rotateX:18
        },

        {
            opacity:1,
            y:0,
            rotateX:0,

            stagger:0.18,

            duration:2.2,

            ease:'power4.out',

            scrollTrigger:{
                trigger:heading,
                start:'top 82%'
            }
        }

    );

});


/* PARAGRAPH REVEALS */

gsap.utils.toArray('.reveal-text').forEach((text)=>{

    gsap.fromTo(

        text,

        {
            opacity:0,
            y:80
        },

        {
            opacity:1,
            y:0,

            duration:2,

            delay:0.3,

            ease:'power3.out',

            scrollTrigger:{
                trigger:text,
                start:'top 85%'
            }
        }

    );

});


/* FINAL LINE */

const finalLines = document.querySelectorAll('.final-line .line');

gsap.fromTo(

    finalLines,

    {
        opacity:0,
        y:140
    },

    {
        opacity:1,
        y:0,

        stagger:0.2,

        duration:2.2,

        ease:'power4.out',

        scrollTrigger:{
            trigger:'.final-scene',
            start:'top 70%'
        }
    }

);


/* CINEMATIC PARALLAX */

gsap.to('.intro-content',{

    y:120,

    ease:'none',

    scrollTrigger:{
        trigger:'.intro',
        start:'top top',
        end:'bottom top',
        scrub:true
    }

});


gsap.utils.toArray('.scene').forEach((scene)=>{

    gsap.to(scene,{

        backgroundPosition:'50% 60%',

        ease:'none',

        scrollTrigger:{
            trigger:scene,
            start:'top bottom',
            end:'bottom top',
            scrub:true
        }

    });

});


/* AUDIO SYSTEM */

const rainAudio = new Howl({

    src:['assets/audio/rain.mp3'],

    loop:true,

    volume:0.82,

    html5:true,

    preload:true

});


let audioStarted = false;


function startAudio(){

    if(audioStarted) return;

    rainAudio.play();

    audioStarted = true;

    document.removeEventListener('click', startAudio);
    document.removeEventListener('scroll', startAudio);

}


/* USER INTERACTION */

document.addEventListener('click', startAudio);

document.addEventListener('scroll', startAudio);