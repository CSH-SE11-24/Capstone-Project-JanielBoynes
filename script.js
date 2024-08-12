let title=document.querySelector(".card-title")
title.addEventListener('click',function(event){
  
title.textContent="Steve Jobs"
})
// here i added an event listener,that way the computer reacts to when the button is pressed and outputs code.

let img1 = document.querySelector(".img1")

let img2 = document.querySelector(".img2")

let img3 = document.querySelector(".img3")

let cardimage1 = document.querySelector(".cardimage")

let cardimage2 = document.querySelector(".cardimage2")

let cardimage3 = document.querySelector(".cardimage3")
console.log(cardimage3)
let button1 = document.querySelector(".button1")

let button2 = document.querySelector(".button2")
let body= document.querySelector("body")
let alltitle = document.querySelectorAll(".titletextChange")
let bodytext = document.querySelectorAll(".textChange")

console.log(bodytext.length)

for(let i = 0; i <bodytext.length;i++){
button1.addEventListener("click",function(event) {
  img1.src = "https://tidbits.com/uploads/2023/09/iPhone-15-lineup.jpg"
  img2.src = "https://m-cdn.phonearena.com/images/articles/393973-image/apple-watch-2022-lineup-TN.jpg"
  img3.src = "https://applemagazine.com/wp-content/uploads/2024/01/iPad-Family-2022.jpg"
  // body.style.backgroundColor =here is the colors i used as background whenever the button is clicked to switch
  bodytext[i].style.color = "blue" 
  alltitle[i].style.color = "blue" 
  bodytext[0].textContent = "Apple Event 2024" 
  alltitle[0].textContent = "The Apple Event 2024 showcases new products, software updates, and technological advancements. It introduces new devices, updates operating systems, and generates excitement while informing consumers and developers about Apple's latest innovations and future direction." 
  bodytext[1].textContent = "Apple Wacthes" 
  alltitle[1].textContent = "The Apple Watch enhances daily life with health and fitness tracking, connectivity for calls and notifications, and conveniences like Apple Pay and navigation. It offers safety features like fall detection and Emergency SOS, and is customizable with various watch faces and bands, making it a practical and stylish companion."
  bodytext[2].textContent = "Vision Pro" 
  alltitle[2].textContent = "The Apple Vision Pro is an advanced AR headset that overlays digital content onto the real world, providing immersive experiences for gaming, entertainment, productivity, and communication. It features high-resolution displays, advanced sensors, and spatial audio to blend the physical and digital worlds seamlessly."
  cardimage1.src = "https://cdn.mos.cms.futurecdn.net/vUAZkHNEvowq2DX4xnqTwd.jpg"
  cardimage2.src = "https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple_announces-watch-se_09152020_big.jpg.large.jpg"
  cardimage3.src = "https://media.wired.com/photos/647e2a2040f1b0ff578445a2/2:3/w_596,h_894,c_limit/Apple-Vision-Pro-Gear.jpg"
})
 }

for(let i = 0; i <bodytext.length;i++){
button2.addEventListener("click",function(event) {
  img1.src = "https://i.insider.com/650219bc1afe8f0019e9ec80?width=1066&format=jpeg"
  img2.src = "https://sm.mashable.com/t/mashable_me/photo/default/apple-watch-ultra-2023_km8a.1248.jpg"
  img3.src = "https://www.recordere.dk/wp-content/uploads/2024/05/ipad-pro-2024.jpg"
  body.style.backgroundColor = "white"

  bodytext[i].style.color = "black" 
  alltitle[i].style.color = "blac" 
  cardimage1.src = "https://www.apple.com/newsroom/images/live-action/new-store-opening/Apple-Saket-Delhi-India-media-preview-hero_Full-Bleed-Image.jpg.slideshow-xlarge.jpg"
  cardimage2.src = "https://www.cnet.com/a/img/resize/b8e1b8cee27ee1fce2edd10321a479bb0f4e7c77/hub/2023/09/18/faee0366-a837-41be-a084-b359bcbf3f93/iphone15-pro-88.jpg?auto=webp&fit=crop&height=900&width=1200"
  cardimage3.src = "https://miro.medium.com/v2/resize:fit:700/1*l3KT0fjsiCMWcgZkAuRljw.jpeg"
  
})
 }