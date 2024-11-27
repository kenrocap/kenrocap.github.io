// header

ScrollTrigger.create({
  start: 'top -70',
  end: 99999,
  toggleClass: {className: 'header--scrolled', targets: '.navbar'}
});


//gSap animation


let reveal = document.querySelectorAll(".reveal") 

reveal.forEach( (el) => {
  let headings = el.querySelectorAll("h1, h2, h3, h4, h5, p, .icon,	.box")
  let btn = el.querySelectorAll(".btn")
  
  let tl = gsap.timeline ()
  .from(headings, {y:80, stagger:0.05, opacity:0, duration:1, stagger:0.1, ease:"power3.out"})
  .from(btn, {y:80, opacity:0, duration:1, stagger:0.1, ease:"power3.out"},'-=0.6')
  
  ScrollTrigger.create ({
		  trigger: el,
			start: "top 50%", 
			markers: false,
			toggleActions: "play none none reverse",
      animation:tl
      })
});


//////////// revealUp //////////// 
