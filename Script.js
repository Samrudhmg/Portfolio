

gsap.from("#contactbutton",{
  y:50,
  duration:0.8,
  opacity:0
})
gsap.from(".heading h5",{
  y:-10,
  duration:0.8,

})
gsap.from(".heading h3",{
  y:10,
  duration:0.8,

})
gsap.from(".heading p",{
  y:-10,
  duration:0.8

})
gsap.from(".heading img",{
  y:40,
  duration:0.5,
  repeat:2,
  yoyo:true

})
var cursor = document.querySelector("#cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
  cursor.style.opacity = "1";
  cursor.style.left = dets.x + 5 + "px";
  cursor.style.top = dets.y + 5 + "px";
});

var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".heading h5",
      scroller: "body",
      // markers:true,
      start: "top 39%",
      end: "top 0",
      scrub: 3,
    },
  });
  var tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".heading h5",
      scroller: "body",
      // markers:true,
      start: "top 28%",
      end: "top 0",
      scrub: 3,
    },
  });

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".heading h5",
      scroller: "body",
      // markers:true,
      start: "top -14%",
      end: "top -100%",
      scrub: 1,
    },
  });
  var tl25 = gsap.timeline({
    scrollTrigger: {
      trigger: ".heading h5",
      scroller: "body",
      // markers:true,
      start: "top -17%",
      end: "top -100%",
      scrub: 3,
    },
  });

  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".heading h5",
      scroller: "body",
      // markers:true,
      start: "top -324%",
      end: "top -200%",
      scrub: 2,
    },
  });
  var tl33 = gsap.timeline({
    scrollTrigger: {
      trigger: ".heading h5",
      scroller: "body",
      // markers:true,
      start: "top -290%",
      end: "top -200%",
      scrub: 2,
    },
  });

  var tl35 = gsap.timeline({
    scrollTrigger: {
      trigger: ".heading h5",
      scroller: "body",
      // markers:true,
      start: "top -290%",
      end: "top -200%",
      scrub: 2,
    },
  });
  
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".heading h5",
      scroller: "body",
      // markers:true,
      start: "top -380%",
      end: "top -200%",
      scrub: 3,
    },
  });
//   var tl4 = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".heading h5",
//       scroller: "body",
//       markers:true,
//       start: "top -295%",
//       end: "top -200%",
//       scrub: 3,
//     },
//   });
  var tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".heading h5",
      scroller: "body",
      // markers:true,
      start: "top -440%",
      end: "top -200%",
      scrub: 3,
    },
  });
  var tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".heading h5",
      scroller: "body",
      // markers:true,
      start: "top -450%",
      end: "top -200%",
      scrub: 3,
    },
  });
  var tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: ".heading h5",
      scroller: "body",
      // markers:true,
      start: "top -520%",
      end: "top -400%",
      scrub: 5,
    },
  });

  var tl8 = gsap.timeline({
    scrollTrigger: {
      trigger: ".heading h5",
      scroller: "body",
      // markers:true, 
      start: "top -520%",
      end: "top -400%",
      scrub: 5,
    },
  });
  tl.from("#logo",{
    x:170
  })


  tl.from(
    ".heading h5",
    {
      x: 80,
      duration: 1,
      color:"white"
    },
    "same"
  );
  tl.from(
    ".heading h3",
    {
      x: 80,
      duration: 1,
      color:"white"
    },
    "same"
  );
  tl.to(".heading img",{
    x:20,
    duration:0.6,
    opacity:0
  },"same")
  tl.from(
    ".heading p",
    {
      x:80,
      duration: 1,
      color:"white",
      
    },
    "same"
  );
  tl1.to(
    ".heading a",
    {
      y: 60,
      duration: 1,
      color:"white",
      
    },
    "same"
  );
  tl1.to(".main",{
    backgroundColor:"white"
  });
 tl2.from(".projects #h11",{
    x:100,
    opacity:0,
    duration:0.4
 });
 tl2.from(".projects #card1",{
    y:50,
    duration:0.2,
    
 })
 tl2.from(".projects #card2",{
    y:50,
    duration:0.2,
    
 })
 tl25.from(".projects #card3",{
    y:50,
    duration:0.5,
  
 },"abcd")
 tl25.from(".projects #card4",{
  y:50,
  duration:0.5,
  
},"abcd")
 tl3.to(".main", {
    backgroundColor: "black",
  });
  tl33.from(".gitconnect #con",{
      x:200,
      duration:1,
      stagger:1,
      opacity:0
  })
  tl33.from(".gitconnect a",{
    y:200,
    duration:1,
    stagger:1,
    opacity:0
})
  tl35.to(".gitconnect",{
    backgroundColor:"black"
    
  })
  tl35.to(".gitconnect #con",{
    color:"white",
    // backgroundColor:"skyblue",
    duration:1,
    stagger:0.5
  })
  tl35.to(".gitconnect a",{
    color:"white",
    backgroundColor:"#91C8E4",
    duration:1,
    stagger:0.5
  })
tl4.to("#page3text h1",{
    color:"white",
    stagger:0.4
})
tl4.from(".skills h1",{
    y:-100,
    duration:1,
    opacity:0
},"itsone")  

tl4.from(".hexagon1 .hexa1",{
    y:-500,
    opacity:0,
    stagger:0.4,
    duration:2

},"itsone")

tl4.from(".hexagon .hexa",{
    y:500,
    opacity:0,
    stagger:0.5,
    duration:2
},"itsone")

tl5.from("#hireme h2",{
    y:300,
    opacity:0,
    duration:1.3
})
tl5.from("#hireme p",{
    stagger:0.5,
    opacity:0,

})
tl6.to(".main",{
    backgroundColor:"white"
})
tl7.from(".footer #connect",{
    y:150,
    opacity:0,
    duration:5,
    delay:2,
    stagger:1
})
tl7.from(".footer hr",{
    opacity:0,
    delay:2,
    duration:1
})
tl7.from(".footer #ele",{
    opacity:0,
    // delay:1,
    duration:10.5,
 
})
tl8.from(".footer #links",{
    opacity:0,
    delay:16,
    duration:5,
    stagger:5,  
})
// tl7.from(".footer #footeremail",{
//     opacity:0,
//     delay:0.4,
//     duration:1,
// })

function scrollToTop(){
    window.scroll(0,0);
}

  
