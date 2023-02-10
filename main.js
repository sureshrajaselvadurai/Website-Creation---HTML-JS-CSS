//Navbar 
//Get the elements
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

/*Set a click event on the menu button*/
menuBtn.addEventListener('click', () => {
  /*Toggle the 'menu-open' 
  class on button press*/
  menu.classList.toggle('menu-open');
});


//Testimonials Slider
/*Set data for the testimonials slider*/
const userData = [
  [
    "./img/user1.jpg",
    "./img/user2.jpg",
    "./img/user3.jpg",
    "./img/user4.jpg"
  ],
  [
    "Really good. I couldn't have asked for more than this. I would like to personally thank you for your outstanding product.",
    "Needless to say we are extremely satisfied with the results. Carlos has completely surpassed our expectations. Really good. Thank you for making it painless, pleasant and most of all hassle free!",
    "Carlos has really helped our business. You won't regret it. It's incredible. This is simply unbelievable!",
    "Carlos is the real deal! Thanks mate, keep up the good work! You've saved our business! I made back the purchase price in just 48 hours!"
  ],
  [
    "Jared Warner", 
    "Naomi Smith",  
    "Sarah Johnson",
    "Fred Goldberg" 
  ],
  [
    "CEO of BeServer",
    "Developer at BeServer",
    "Content Creator", 
    "CEO of Seone"
  ]
];

//Get the elements
const pag = document.querySelectorAll(".pagination li");
const userImg = document.querySelector(".user-img");
const userText = document.querySelector(".user-text");
const userName = document.querySelector(".user-name");
const userTitle = document.querySelector(".user-title");

//Loop through all pagination buttons (li)
for(let i = 0; i < pag.length; i++) {
  //Set a click event to each
  pag[i].addEventListener('click', () => {
    //Loop through all again
    for(let i = 0; i < pag.length; i++) {
      //Remove active class from all 
      pag[i].classList.remove('pag-active');
    }
    //Re-assign active class to clicked button
    pag[i].classList.add('pag-active');
    
    /*Outputing the data depending 
    on which button is clicked*/
    //Set image
    userImg.src = userData[0][i];
    //Set user text
    userText.innerText = userData[1][i];
    //Set user name
    userName.innerText = userData[2][i];
    //Set user title
    userTitle.innerText = userData[3][i];
  });
}
