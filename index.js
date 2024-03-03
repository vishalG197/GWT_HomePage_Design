// Array of image sources
const svgArray = [
   './imges/footer_2/Banner Slide (State 1).svg',
   './imges/footer_2/Banner Slide (State 2).svg',
   './imges/footer_2/Banner Slide (State 3).svg',
   './imges/footer_2/Banner Slide (State 4).svg'
];

// Function to create and render the slider dynamically
function renderSlider() {
   const sliderSection = document.querySelector('.slider');

   // Function to show a specific slide with a smooth transition
   function showSlide(index) {
       // Create a new div for the slide
       const slideDiv = document.createElement('div');
       slideDiv.className = 'slide';

       // Fetch the SVG content from the array
       fetch(svgArray[index])
           .then(response => response.text())
           .then(svgContent => {
               // Set the inner HTML of the slide div to the SVG content
               slideDiv.innerHTML = svgContent;
               // Append the slide div to the slider section
               sliderSection.innerHTML = '';
               sliderSection.appendChild(slideDiv);
           });
   }

   let currentIndex = 0;

   // Render the initial slide
   showSlide(currentIndex);

   // Automated sliding every 1 second
   setInterval(() => {
       currentIndex = (currentIndex + 1) % svgArray.length;
       showSlide(currentIndex);
   }, 2000);
}

// Call the renderSlider function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderSlider);

// Array of image sources
const imageArray = [
   './imges/footer_2/Artboard -1.svg',
   './imges/footer_2/Artboard 30 copy.svg',
   './imges/footer_2/Artboard 30 copy 2.svg',
   './imges/footer_2/Artboard 30 copy 4.svg',
   './imges/footer_2/Artboard 30 copy 5.svg',
   './imges/footer_2/Artboard 30 copy 8.svg',
   './imges/footer_2/Artboard 30 copy 7.svg',
   './imges/footer_2/Artboard 30 copy 9.svg',
   './imges/footer_2/Artboard 30 copy.svg',
   './imges/footer_2/Artboard 30.svg',
];


// Function to create and render the slider dynamically
function renderSlider_2() {
   const sliderContainer = document.getElementById('slider_2');

   // Function to show a set of cards with a smooth transition
   function showCards(startIndex) {
       // Clear the slider container
       sliderContainer.innerHTML = '';

       // Create a new div for the card set
       const cardSetDiv = document.createElement('div');
       cardSetDiv.className = 'card-set';

       // Show three cards at a time
       for (let i = startIndex; i < startIndex + 3; i++) {
           const cardDiv = document.createElement('div');
           cardDiv.className = 'card';
          
           // Create an image element and set its source from the array
           const img = document.createElement('img');
           img.src = imageArray[i % imageArray.length];
           img.alt = 'Card Image';

           // Append the image to the card div
           cardDiv.appendChild(img);

           // Append the card div to the card set div
           cardSetDiv.appendChild(cardDiv);
           
// Add event listener for hover effect
cardDiv.addEventListener('mouseover', function () {
    cardDiv.style.backgroundColor = 'lightgray';
  });
  
  // Remove background color on mouseout (hover out)
  cardDiv.addEventListener('mouseout', function () {
    cardDiv.style.backgroundColor = ''; // Set to an empty string to remove the background color
  });
       }

       // Append the card set div to the slider container
       sliderContainer.appendChild(cardSetDiv);
   }

   let currentIndex = 0;

   // Render the initial set of cards
   showCards(currentIndex);

   

   // Automated sliding every 4 seconds (adjust timing as needed)
   setInterval(() => {
       currentIndex = (currentIndex + 3) % imageArray.length;
       showCards(currentIndex);

       // Reset hover effect after the transition
       setTimeout(() => {
           const cards = document.querySelectorAll('.card');
           cards.forEach(card => {
               card.style.transform = 'scale(1)';
               card.style.transition = 'none';
           });
       }, 100);
   }, 4000); // Adjust the interval to control the timing of the transition
}

// Call the renderSlider_2 function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderSlider_2);



const data = [
   { imgSrc: './imges/footer_2/kushuma 35ml Paint.svg', title: 'khshuma', rating: 5,price:1999 },
   { imgSrc: './imges/footer_2/kumkumadi 35ml Paint.svg', title: 'kumkumdi ', rating: 4 ,price:999},
   { imgSrc: './imges/footer_2/Morrocan Argan Paint.svg', title: 'Morrocan Argan Paint', rating: 4 ,price:999},
   { imgSrc: './imges/footer_2/Mahodaya Rose Paint.svg', title: 'Mahodaya Rose Paint', rating: 4 ,price:999},
   { imgSrc: './imges/footer_2/kushuma 35ml Paint.svg', title: 'khshuma 35ml Paint', rating: 5,price:1999 },
   { imgSrc: './imges/footer_2/kumkumadi 35ml Paint.svg', title: 'kumkumdi 35ml Paint', rating: 4 ,price:999},
   { imgSrc: './imges/footer_2/Morrocan Argan Paint.svg', title: 'Mahodaya Rose Paint', rating: 4 ,price:999},
   { imgSrc: './imges/footer_2/Mahodaya Rose Paint.svg', title: 'Morrocan Argan Paint', rating: 4 ,price:999},
   { imgSrc: './imges/footer_2/kushuma 35ml Paint.svg', title: 'khshuma 35ml Paint', rating: 5,price:1999 },
   { imgSrc: './imges/footer_2/kumkumadi 35ml Paint.svg', title: 'kumkumdi 35ml Paint', rating: 4 ,price:999},
   { imgSrc: './imges/footer_2/Morrocan Argan Paint.svg', title: 'Morrocan Argan Paint', rating: 4 ,price:999},
   { imgSrc: './imges/footer_2/Mahodaya Rose Paint.svg', title: 'Mahodaya Rose Paint', rating: 4 ,price:999},
   // Add more data as needed
];

const cardContainer = document.getElementById('cardContainer');
const viewMoreBtn = document.getElementById('viewMoreBtn');
const viewLessBtn = document.getElementById('viewLessBtn');

let isExpanded = false;

function createCard(cardData) {
   const card = document.createElement('div');
   card.className = 'cart';
   card.innerHTML = `
       <img src="${cardData.imgSrc}" alt="${cardData.title}" style="width:100%">
       <h6 style="margin:0px;">${cardData.title}</h6>
       <div style="margin:0px;" class="blue-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
       <p style="margin:0px;">Rating: ${cardData.rating}</p>
       <p style="margin:0px;">Rating: ${cardData.price}</p>
   `;
   return card;
}

function renderCards(cards) {
   cardContainer.innerHTML = '';
   cards.forEach(cardData => {
       const card = createCard(cardData);
       cardContainer.appendChild(card);
   });
}

function toggleView() {
   if (isExpanded) {
       renderCards(data.slice(0, 4));
       viewMoreBtn.style.display = 'block';
       viewLessBtn.style.display = 'none';
   } else {
       renderCards(data);
       viewMoreBtn.style.display = 'none';
       viewLessBtn.style.display = 'block';
   }
   isExpanded = !isExpanded;
}

viewMoreBtn.addEventListener('click', toggleView);
viewLessBtn.addEventListener('click', toggleView);

// Initial rendering
renderCards(data.slice(0, 4));
viewMoreBtn.style.display = 'block';

const cardData = [
    { imgSrc: './imges/footer_2/kushuma 35ml Paint.svg',category:"face", title: 'khshuma', rating: 5,price:1999 },
    { imgSrc: './imges/footer_2/kumkumadi 35ml Paint.svg',category:"face", title: 'kumkumdi ', rating: 4 ,price:999},
    { imgSrc: './imges/footer_2/Morrocan Argan Paint.svg',category:"face", title: 'Morrocan Argan Paint', rating: 4 ,price:999},
    { imgSrc: './imges/footer_2/kushuma 35ml Paint.svg',category:"face", title: 'khshuma 35ml Paint', rating: 5,price:1999 },
    { imgSrc: './imges/footer_2/Morrocan Argan Paint.svg',category:"hair", title: 'Morrocan Argan Paint', rating: 4 ,price:999},
    { imgSrc: './imges/footer_2/Mahodaya Rose Paint.svg',category:"hair", title: 'Mahodaya Rose Paint', rating: 4 ,price:999},
    { imgSrc: './imges/footer_2/Mahodaya Rose Paint.svg',category:"hair", title: 'Mahodaya Rose Paint', rating: 4 ,price:999},
    { imgSrc: './imges/footer_2/kushuma 35ml Paint.svg',category:"hair", title: 'khshuma 35ml Paint', rating: 5,price:1999 },
    { imgSrc: './imges/footer_2/kumkumadi 35ml Paint.svg',category:"body", title: 'kumkumdi 35ml Paint', rating: 4 ,price:999},
    { imgSrc: './imges/footer_2/Morrocan Argan Paint.svg',category:"body", title: 'Mahodaya Rose Paint', rating: 4 ,price:999},
    { imgSrc: './imges/footer_2/Mahodaya Rose Paint.svg',category:"body", title: 'Morrocan Argan Paint', rating: 4 ,price:999},
    { imgSrc: './imges/footer_2/kushuma 35ml Paint.svg',category:"body", title: 'khshuma 35ml Paint', rating: 5,price:1999 },
];

let showAllCards = false;
// Initial setup - show cards for the default category
// changeCategory('face');
function changeCategory(category="hair") {
    // Handle category change logic here
   
    const filteredCards = cardData.filter(card => card.category === category);

    // Update carousel with the filtered cards
    updateCarousel(filteredCards);

    // Update the selected button background
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.classList.remove('selected');
    });
    let cls="h";
    if(category == "face"){
        cls="f"
    }
    if(category == "body"){
        cls="b"

    }
    const selectedButton = document.querySelector(`.${cls}`);
    selectedButton.classList.add('selected');
}

function toggleCards() {
    // Toggle between showing all cards and a limited number of cards in the carousel
    showAllCards = !showAllCards;

    const button = document.querySelector('.show-more');
    const carouselContainer = document.querySelector('.carousel-container');

    if (showAllCards) {
        button.textContent = 'Show Less';
        // Show all cards directly
        updateCarousel(cardData);
        carouselContainer.style.overflow = 'auto';
    } else {
        button.textContent = 'Show More';
        // Show a limited number of cards in the carousel
        const limitedCards = cardData.slice(0, 4);
        updateCarousel(limitedCards);
        carouselContainer.style.overflow = 'hidden';
    }
}

function updateCarousel(cards) {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = '';

    cards.forEach(cardData => {
        const card = createCard(cardData);
        carousel.appendChild(card);
    });
}

function createCard(cardData) {
    const card = document.createElement('div');
    card.className = 'cart';
    card.innerHTML = `
        <img src="${cardData.imgSrc}" alt="${cardData.title}" style="width:100%">
        <h6 style="margin:0px;">${cardData.title}</h6>
        <div style="margin:0px;" class="blue-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p style="margin:0px;">Rating: ${cardData.rating}</p>
        <p style="margin:0px;">Price: ${cardData.price}</p>
    `;
    return card;
}

// Carousel navigation
let currentIndex = 0;

function nextSlide() {
    const carousel = document.querySelector('.carousel');
    const cardWidth = document.querySelector('.cart').offsetWidth;

    if (currentIndex < cardData.length - 4) {
        currentIndex++;
        carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    }
}

function prevSlide() {
    const carousel = document.querySelector('.carousel');
    const cardWidth = document.querySelector('.cart').offsetWidth;

    if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    }
}



document.addEventListener('DOMContentLoaded', changeCategory('hair'));
const testimonials = [
    "The frizz reduction and    smoothening are fantastic for    your cream. Sometimes I blow    dry my hair and straighten them, but they look scorched    and frizzy. SoI tried your    cream. It was really smooth    and Less frizzy.",
    "Highly recommended organic    product because of it's natural    ingredients which perfectly    suits all lips.","The frizz reduction and    smoothening are fantastic for    your cream. Sometimes I blow    dry my hair and straighten them, but they look scorched    and frizzy. SoI tried your    cream. It was really smooth    and Less frizzy.",
    "Highly recommended organic    product because of it's natural    ingredients which perfectly    suits all lips.",
    "This sunscreen is very good for    summer and u can use this    winter also i have dry skin    and i use this cream its    very good for my skin. and its not sticky.",
    "Can be used daily and i am    loving how its easy to apply    people likeme who are not a    fan of foundation can for this    it gives a really good finish    and perfect flawless    appearance.",
    "This sunscreen is very good for    summer and u can use this    winter also i have dry skin    and i use this cream its    very good for my skin. and its not sticky.",
    "Can be used daily and i am    loving how its easy to apply    people likeme who are not a    fan of foundation can for this    it gives a really good finish    and perfect flawless    appearance."
];

let Index = 0;

function showTestimonials() {
    const testimonialList = document.getElementById('testimonialList');
    testimonialList.innerHTML = '';

    for (let i = Index; i < Index+4; i++) {
        if (i < testimonials.length) {
            const testimonial = createTestimonial(testimonials[i]);
            testimonialList.appendChild(testimonial);
        }
    }
}

function createTestimonial(content) {
    const testimonial = document.createElement('div');
    testimonial.className = 'testimonial';
    testimonial.innerHTML = `<div style="text-align: center;display:block;align-items: center;justify-content: center;">
    <img src="./imges/testmonialIcon.svg" alt="">
    <p>${content}</p>
    <div style="margin-bottom:10px;" class="white-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
    <p style="margin-bottom:10px;">Vani Ravi</p>
 </div>`;
    return testimonial;
}

function nextTestimonials() {
    const testimonialList = document.getElementById('testimonialList');
    const testimonialWidth = document.querySelector('.testimonial').offsetWidth;

    if (Index < testimonials.length) {
        Index++;
        testimonialList.style.transform = `translateX(${-Index * testimonialWidth}px)`;
    }
}

function prevTestimonials() {
    const testimonialList = document.getElementById('testimonialList');
    const testimonialWidth = document.querySelector('.testimonial').offsetWidth;

    if (Index > 0) {
        Index--;
        testimonialList.style.transform = `translateX(${-Index * testimonialWidth}px)`;
    }
}

// Initial setup - show testimonials on screen load
showTestimonials();
