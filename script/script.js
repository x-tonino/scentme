gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);


let refresh = () => {
    
    gsap.fromTo('.overlay1',  { y: "0%", opacity: 1},{ y: "100%", duration: 1, delay: .5, opacity: 0});
    gsap.fromTo('.overlay2',  { y: "0%", opacity: 1},{ y: "100%", duration: 1,  delay: .7, opacity: 0});
    gsap.fromTo('.overlay3',  { y: "0%", opacity: 1},{ y: "100%", duration: 1,  delay: .9, opacity: 0});

        gsap.fromTo('.big-circle',
        { x: "100%", }, 
        { x: "0%", opacity: 1, duration: 1,  delay: 1.2}
    );

    gsap.fromTo('.small-circle', 
        { x: "100%", }, 
        { x: "0%", opacity: 1, duration: .8, delay: 1.7 }
    );

    gsap.fromTo('.big-letters', 
        { x: "-150%", opacity: 0 }, 
        { x: "0%", duration: .8, opacity: 1, delay: 2.2 }
    );

    gsap.fromTo('.small-letters',
        { x: "-150%", opacity: 0 }, 
        {x: "0%", opacity: 1, duration: .8, delay: 2.7 }
    );

    gsap.fromTo('.perfumes',
        { x: "150%", opacity: 0 },
        {x: "0%",  opacity: 1, duration: 1,  delay:3.2}
    );

    /* gsap.fromTo('.profile-img',
        { y: "-250%", rotateY: 360, opacity: 0 },
        {y: "0%", rotateY: 0,  opacity: 1, duration: 1,  delay:3.7, ease: 'bounce'}
    ); */

    let perfumeA = $('.perfume-wrapper').eq(0);
    let perfumeB = $('.perfume-wrapper').eq(1);
    let perfumeC = $('.perfume-wrapper').eq(2);
    gsap.fromTo(perfumeA,
        { y: "-250%", rotate: 180, opacity: 0 },
        {y: "0%", rotate: 0,  opacity: 1, duration: 1,  delay:3.7}
    );
    gsap.fromTo(perfumeB,
        { y: "-250%", rotate: 180, opacity: 0 },
        {y: "0%", rotate: 0,  opacity: 1, duration: 1,  delay:4}
    );
    gsap.fromTo(perfumeC,
        { y: "-250%", rotate: 180, opacity: 0 },
        {y: "0%", rotate: 0,  opacity: 1, duration: 1,  delay:4.4}
    );


}
refresh()

let menu = () => {
    $(".menu").click(() => {
    gsap.to('nav ul', { x: '-100%', y: 0, duration: 1})

});

$(".exit").click(() => {
    gsap.to('nav ul', { x: '100%', y: 0, duration: 2})
});

$(".exit").hover(() => {
    gsap.to('.exit', {rotate: 180})

}, () => {
    gsap.to('.exit', {rotate: -180})
}

);



}
menu();

let b2 = () => {



    gsap.to($('.perfume-cover').eq(1), {y: -30,
        scrollTrigger: {
            trigger: '.b2',
            start: 'top 50%',
            scrub: 1,
            end: 'bottom 60%'
                }
    })
    gsap.to($('.perfume-cover').eq(0), {rotate: -20 , y: -30,
        scrollTrigger: {
            trigger: '.b2',
            start: 'top 50%',
            scrub: 1,
            end: 'bottom 60%'
                }
    })
    gsap.to($('.perfume-cover').eq(2), {rotate: 20 , y: -30,
        scrollTrigger: {
            trigger: '.b2',
            start: 'top 50%',
            scrub: 1,
            end: 'bottom 60%'
                }
    })


}
b2();

let b3 = () => {

}
b3();

let profile = () => {
    gsap.fromTo('.profile', 
    {height: 0},
    {height: 500, duration: 4,
        scrollTrigger: {
            trigger: '.profile',
            start: 'top 80%',
            scrub: true

        }}
    )
}
profile()

/* 
let profile = () => {
    gsap.fromTo('.profile-img',
    {rotateY: 360},
    {rotateY: 0, duration: 1, 
        scrollTrigger: {
            trigger: '.profile',
            start: 'top center',
            scrub: 1,
            end: 'bottom 80%',
        }
    }
    )
};
profile();
 */