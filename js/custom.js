
// console.log(screenHeight)
// get current year
(function () {
  var year = new Date().getFullYear();
  document.querySelector("#currentYear").innerHTML = year;
})();


const videoContainerOne = document.getElementById('All_video_container');
const videoContainerTwo = document.getElementById('promation_reel_video_container');
const videoContainerThree = document.getElementById('talking_head_reel_video_container');
const videoContainerFour = document.getElementById('prodcast_trailer_video_container');
const videoContainerFive = document.getElementById('prodcast_edit_video_container');


const videoContainerOneNav = document.getElementById('bubble1').addEventListener("click",()=>{
  videoContainerOne.style.display="grid"
  videoContainerTwo.style.display="none"
  videoContainerThree.style.display="none"
  videoContainerFour.style.display="none"
  videoContainerFive.style.display="none"
})
const videoContainerTwoNav = document.getElementById('bubble2').addEventListener("click",()=>{
  videoContainerOne.style.display="none"
  videoContainerTwo.style.display="grid"
  videoContainerThree.style.display="none"
  videoContainerFour.style.display="none"
  videoContainerFive.style.display="none"
})
const videoContainerThreeNav = document.getElementById('bubble3').addEventListener("click",()=>{
  videoContainerOne.style.display="none"
  videoContainerTwo.style.display="none"
  videoContainerThree.style.display="grid"
  videoContainerFour.style.display="none"
  videoContainerFive.style.display="none"
})
const videoContainerFourNav = document.getElementById('bubble4').addEventListener("click",()=>{
  videoContainerOne.style.display="none"
  videoContainerTwo.style.display="none"
  videoContainerThree.style.display="none"
  videoContainerFour.style.display="grid"
  videoContainerFive.style.display="none"
})
const videoContainerFiveNav = document.getElementById('bubble5').addEventListener("click",()=>{
  videoContainerOne.style.display="none"
  videoContainerTwo.style.display="none"
  videoContainerThree.style.display="none"
  videoContainerFour.style.display="none"
  videoContainerFive.style.display="grid"
})


