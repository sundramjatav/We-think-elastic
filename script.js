
function sundram(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

};

var loader= gsap.timeline()
loader.from("#a",{
  delay:0.1,
  opacity:0,
  duration:0.1
})
loader.from("#b",{
  delay:0.1,
  duration:0.1,
  opacity:0
})
loader.from("#c",{
  delay:0.1,
  duration:0.1,
  opacity:0
})
loader.from("#d",{
  delay:0.1,
  duration:0.1,
  opacity:0
})
loader.from("#e",{
  delay:0.1,
  duration:0.1,
  opacity:0
})
loader.from("#f",{
  delay:0.1,
  duration:0.1,
  opacity:0
})
loader.from("#g",{
  delay:0.1,
  duration:0.1,
  opacity:0
})
loader.from("#h",{
  delay:0.1,
  duration:0.1,
  opacity:0
})
loader.from("#i",{
  delay:0.1,
  duration:0.1,
  opacity:0
})
loader.from("#j",{
  delay:0.1,
  duration:0.1,
  opacity:0
})
loader.from("#k",{
  delay:0.1,
  duration:0.1,
  opacity:0
})


var page3=document.querySelector(".page5")
var circle = document.querySelector(".cursor");
document.addEventListener("mousemove",function(dets){
    var y = circle.offsetHeight;
    var x = circle.offsetWidth;
    circle.style.top = `${dets.pageY - y}px`;
    circle.style.left = `${dets.pageX - x}px`;

    // circle.style.top=`${dets.y + 2}px`
    // circle.style.left=`${dets.x + 2}px`
})


// var video=document.querySelector(".page5 video")
// video.addEventListener("mouseenter",function(){
//   video.style.scale = 0.9
// })
//  video.addEventListener("mouseleave",function(){
//   video.style.scale = 1
// })

var tl= gsap.timeline()
tl.to(".loader",{
  top: "-100%",
  duration:1,
  delay:2.5
})
tl.from(".page1 h1 ",{
    y:100,
    opacity:0,
    duration:0.8,
    stagger:0.4
})
gsap.from(".page2 h3",{
  y:50,
  stagger:1.2,
  opacity:0,
  duration:4,
  scrollTrigger:{
    scroll:".main",
    trigger:".page2",
    // markers:true,
    start:"top 80%",
        end: "top 50%",
        scrub: true,
  }
})
gsap.to(".page3 video",{
    width: "100%",
    scrollTrigger: {
        trigger: ".page3",
        scroll: ".main",
        // markers: true,
        start:"top 80%",
        end: "top 50%",
        scrub: true,
        // pin: true
        
    }
})
gsap.from(".page4 h1",{
  y:50,
  stagger:1.2,
  opacity:0,
  duration:4,
  scrollTrigger:{
    scroll:".main",
    trigger:".page4",
    // markers:true,
    start:"top 50%",
        end: "top 10%",
        scrub: true,
  }
})
gsap.to(".page9 h1 ",{
  transform:"translateX(-100%)",
  scrollTrigger:{
    scroll:".main",
    trigger:".page9",
    // markers:true,
    start:"top -70%",
    end: "top -120%",
    scrub: true,
    // pin:true
  }
})

gsap.from(".page12 h2",{
  y:150,
  opacity:0.5,
  stagger:1.2,
  duration:4,
  scrollTrigger:{
    scroll:".main",
    trigger:".page12",
    // markers:true,
    start:"top 50%",
        end: "top 10%",
        scrub: true,
  }
})
gsap.from(".page12 img",{
  y:150,
  stagger:1.2,
  duration:4,
  scrollTrigger:{
    scroll:".main",
    trigger:".page12",
    // markers:true,
    start:"top 40%",
        end: "top 10%",
        scrub: true,
  }
})

