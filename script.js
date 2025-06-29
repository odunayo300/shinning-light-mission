function showFormResponse(success, message) {
  const responseDiv = document.getElementById('form-response');
  if (success) {
    responseDiv.className = 'form-response-success';
    responseDiv.innerHTML = '<i class="bi bi-check-circle-fill"></i> ' + message;
  } else {
    responseDiv.className = 'form-response-error';
    responseDiv.innerHTML = '<i class="bi bi-x-circle-fill"></i> ' + message;
  }
  responseDiv.style.display = 'flex';
}
// showcase section animation

const tl = gsap.timeline()

tl.from("#showcaseH1",{
    opacity:0,
    delay:1,
    duration:2,
    y:"50"
})
tl.from("#showcaseP",{
    opacity:0,
    y:"50",
    duration:2
})
tl.from("#showcaseButton",{
    scale:0,
    duration:2,
    y:"100"
})


//card section animation

const tl2 = gsap.timeline()
tl2.from("#card1",{
    opacity:0,
    delay:1,
    duration:2,
    y:"50"
})
tl2.from("#card2",{
    opacity:0,
    y:"50",
    duration:2
})
tl2.from("#card3",{
    opacity:0,
    duration:2,
    y:"50"
})

ScrollTrigger.create({
    animation:tl2,
    trigger:"#card",
    start:"top 80%"
})

//About section animation

gsap.from("#about #aboutImage",{
    x:"-1000",
    delay:1,
    duration:1,
    scrollTrigger:{
        scroll:"body",
        trigger:"#about",
        start:"top 80%"
        
    }

})

gsap.from("#about #aboutText",{
    opacity:0,
    duration:2,
    y:"50",
    scrollTrigger:{
        scroller:"body",
        trigger:"#about",
        start:"top 80%"
    }
})

// donatiom sectiom annimation

gsap.from("#donation #donationText",{
    opacity:0,
    duration:2,
    y:"50",
    scrollTrigger:{
        scroller:"body",
        trigger:"#donation",
        start:"top 80%"
    }
})

//event and programs section animation

gsap.from("#events #programsImage",{
    x:"1000",
    delay:1,
    duration:1,
    scrollTrigger:{
        scroll:"body",
        trigger:"#events",
        start:"top 80%"
    }

})

gsap.from("#events #programs",{
    opacity:0,
    duration:2,
    y:"50",
    scrollTrigger:{
        scroller:"body",
        trigger:"#events",
        start:"top 80%"
    }
})

//about page animation
const tl3 = gsap.timeline()
tl3.from("#aboutUsText",{
    opacity:0,
    delay:1,
    duration:2,
    y:"50"
})
tl3.from("#visionText",{
    opacity:0,
    y:"50",
    duration:2
})
tl3.from("#missionText",{
    opacity:0,
    duration:2,
    y:"50"
})

ScrollTrigger.create({
    animation:tl3,
    trigger:"#aboutUs",
    start:"top 80%"
})

//donation page animation

gsap.from("#donationPage #donationWriteUp",{
    opacity:0,
    duration:2,
    y:"50",
    scrollTrigger:{
        scroller:"body",
        trigger:"#donationPage",
        start:"top 80%"
    }
})

//CONTACT PAGE ANIMATION

gsap.from("#contact-form ",{
    opacity:0,
    duration:2,
    y:"50",
    scrollTrigger:{
        scroller:"body",
        trigger:"#form",
        start:"top 80%"
    }
})



