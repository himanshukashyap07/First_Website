const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
// breaking the text

const siteName = document.getElementById('mean-site-name');
let clutter ='';
(function breakWords(){
  const textAlpahabets = siteName.textContent.split('');
  textAlpahabets.forEach(function(e){
    clutter += `<span class="mean-site-name-txt">${e}</span>`
    
  })
  siteName.innerHTML=clutter;
})()

// const tl = gsap.timeline();
//  gsap.from('.contact_link2', {
//   opacity:0,
//   x:40,
//   delay:1.5,
//   duration:1,
//  })
//  gsap.from('.contact_link3', {
//   opacity:0,
//   x:40,
//   delay:2.5,
//   duration:1,
// })


// tl.from('#LOGO',{
//   delay:1,
//   opacity:0,
//   y:50,
//   duration:1.5,
// })

// tl.from('.nav-item',{
//   opacity:0,
//   y:35,
//   stagger:0.25,
//   duration:0.8,
// })

// tl.from('.mean-site-name-txt',{
//   opacity:0,
//   y:70,
//   duration:1,
//   stagger:{
//     each:0.15,
//     from:"center",
//   },
// })

//video animation
function LaptopVideoAnimation(){
    gsap.from('.client_video1',{
        delay:1,
        opacity:0,
        duration:2,
        x:-80,
        scrollTrigger:{
            trigger:".client_video1",
            scroller:"body",
            start:"top 60%",
            end:"top 0%",
        }        
    })
    gsap.from('.client_video2',{
        opacity:0,
        duration:2,
        y:-80,
        scrollTrigger:{
          trigger:".client_video2",
          scroller:"body",
          start:"top 60%",
          end:"top 0%",
      } 
    })
    gsap.from('.client_video3',{
        opacity:0,
        duration:2,
        x:80,
        scrollTrigger:{
          trigger:".client_video3",
          scroller:"body",
          start:"top 60%",
          end:"top 0%",
      } 
    })
    gsap.from('.client_video4',{
        opacity:0,
        duration:2,
        x:80,
        scrollTrigger:{
          trigger:".client_video4",
          scroller:"body",
          start:"top 60%",
          end:"top 0%",
      } 
    })
    gsap.from('.client_video5',{
        opacity:0,
        duration:2,
        y:80,
        scrollTrigger:{
          trigger:".client_video5",
          scroller:"body",
          start:"top 60%",
          end:"top 0%",
      } 
    })
    gsap.from('.client_video6',{
        opacity:0,
        duration:2,
        x:-80,
        scrollTrigger:{
          trigger:".client_video6",
          scroller:"body",
          start:"top 60%",
          end:"top 0%",
      } 
    })
}

// mobile video animation
const mobileVideoAnimation =()=>{
  gsap.from('.client_video1',{
    delay:1,
    opacity:0,
    duration:2,
    x:-50,
    scrollTrigger:{
        trigger:".client_video1",
        scroller:"body",
        start:"top 60%",
        end:"top 0%",
    }        
})
gsap.from('.client_video2',{
    opacity:0,
    duration:2,
    y:50,
    scrollTrigger:{
      trigger:".client_video2",
      scroller:"body",
      start:"top 60%",
      end:"top 0%",
  } 
})
gsap.from('.client_video3',{
    opacity:0,
    duration:2,
    x:-50,
    scrollTrigger:{
      trigger:".client_video3",
      scroller:"body",
      start:"top 60%",
      end:"top 0%",
  } 
})
gsap.from('.client_video4',{
    opacity:0,
    duration:2,
    x:50,
    scrollTrigger:{
      trigger:".client_video4",
      scroller:"body",
      start:"top 60%",
      end:"top 0%",
  } 
})
gsap.from('.client_video5',{
    opacity:0,
    duration:2,
    x:-50,
    scrollTrigger:{
      trigger:".client_video5",
      scroller:"body",
      start:"top 60%",
      end:"top 0%",
  } 
})
gsap.from('.client_video6',{
    opacity:0,
    duration:2,
    x:50,
    scrollTrigger:{
      trigger:".client_video6",
      scroller:"body",
      start:"top 60%",
      end:"top 0%",
  } 
})
}
if(screenWidth>1024){
  LaptopVideoAnimation();
}else{
  mobileVideoAnimation();
}



