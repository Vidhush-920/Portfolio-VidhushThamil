//Get all the hyperlink elements
var links = document.getElementsByTagName("a");
//Browse the previously created array
Array.prototype.forEach.call(links, function(elem, index) {
  //Get the hyperlink target and if it refers to an id go inside condition
  var elemAttr = elem.getAttribute("href");
  if(elemAttr && elemAttr.includes("#")) {
    //Replace the regular action with a scrolling to target on click
    elem.addEventListener("click", function(ev) {
      ev.preventDefault();
      //Scroll to the target element using replace() and regex to find the href's target id
      document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    });
  }
});


let navbar = document.getElementsByClassName("navbar")
let viewportHeight = window.innerHeight;
let navHeight = document.getElementsByClassName("navbar").offsetHeight;

let navbarLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", e => {
  scrollpos = window.scrollY;
  navbarLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (section.offsetTop <= scrollpos + 400 &&
        section.offsetTop + section.offsetHeight > scrollpos + 400) {
      link.parentElement.classList.add("current");
    } else {
      link.parentElement.classList.remove("current");
    }
  });
});


const skillElements = document.querySelectorAll('.skill-tag');
skillElements.forEach(element => {
  const pbValue = parseInt(getComputedStyle(element).getPropertyValue('--pb'));
  const pieElement = element.querySelector('.pie');
  const icElement = element.querySelector('i');
  if(element.classList.contains('tech')) {
    var pbCent = (pbValue > 0 & pbValue < 40) ? "Beginner ("+pbValue+"%)" : ((pbValue >= 75 & pbValue <= 100) ? "Experienced ("+pbValue+"%)" : "Intermediate ("+pbValue+"%)");
  }
  else if(element.classList.contains('soft')) {
    var pbCent = (pbValue > 0 & pbValue < 40) ? pbValue+"%" : ((pbValue >= 75 & pbValue < 100) ? pbValue+"%" : pbValue+"%");
  }
  pieElement.setAttribute('data-text', pbCent);
  // icElement.setAttribute('data-text', pbCent);
  if (pbValue === 0) {
    element.style.display = 'none';
  } 
  else if (pbValue === 100) {
    if (pieElement) {
      pieElement.remove();
    }
  } 
  else {
    if (icElement) {
      icElement.remove();
    }
  }
});