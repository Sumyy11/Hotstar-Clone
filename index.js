let movies = [
    {
      name: "Frozen",
      des:
      "Fearless Anna teams up with Kristoff and a snowman named Olaf to find her sister Elsa, whose icy powers have trapped the kingdom in eternal winter",

      image: "images/slider 2.PNG"
    },
    {
      name: "The Night Manager",
      des:
      "A hotel's night manager is the only weapon against a dangerous arms dealer. With innocent lives at stake, Shaan is out to destroy Shelly's demonic world",
      image: "images/slider 1.PNG"
    },
    {
      name: "Wakanda Forever",
      des:
        "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers after the death of beloved King T'Challa",
      image: "images/slider 3.PNG"
    },
    {
      name: "Billions",
      des:
        "Hedge fund titan Bobby Axelrod and District Attorney Chuck Rhoades play a high stakes game of cat and mouse which has them questioning - what is power worth?",
      image: "images/slider 4.PNG"
    },
    {
      name: "Captain America Civil War",
      des:
        "The government's decision to push a Hero Registration Act to regulate heroes creates a rift among the Avengers and other heroes.",
      image: "images/slider 5.PNG"
    }
    
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; // to track current slide index.
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    // creating DOM element
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    // setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  //Video Cards
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  //card sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });
  