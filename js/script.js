//navbar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

// carousel
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//gallery

const images = [
    'https://i.pinimg.com/564x/05/47/5a/05475afde5317b3dd78e1d4e2c68f7b2.jpg',
    'https://i.pinimg.com/564x/2a/11/90/2a1190f6438575aa72cbd3a8878dac8b.jpg',
    'https://i.pinimg.com/564x/0d/4f/f2/0d4ff241899d98ad342bb493ea9180ed.jpg',
    'https://i.pinimg.com/564x/06/ea/13/06ea1333eff6ee22469902d6cfac1a0b.jpg',
    'https://i.pinimg.com/564x/0f/b3/55/0fb355d0bcd81d6069033997250ffd00.jpg',
    'https://i.pinimg.com/564x/03/f3/ff/03f3ffad36efbd3af12721f42a769f9e.jpg',
    'https://i.pinimg.com/564x/f7/ba/51/f7ba518d57307c4c4af781a5c7ff625d.jpg',
    'https://i.pinimg.com/564x/f2/d3/55/f2d355004c8a1ccd9a61f2f1a50e0fea.jpg',
    'https://i.pinimg.com/564x/f4/76/9c/f4769c8b94f64c4b6be0ddf607da1dce.jpg',
    'https://i.pinimg.com/736x/f6/32/91/f63291850aeba46e0d1e513da8231e5c.jpg',
    'https://i.pinimg.com/736x/d6/67/46/d667462e685582cc22604d9a05ebcac3.jpg',
    'https://i.pinimg.com/564x/21/c0/c1/21c0c1add7293e8bfcdaebcc2b07c4fd.jpg'
];

const hoverImages = [
    'https://i.pinimg.com/564x/4b/5a/66/4b5a664c21bdca3b4781d1f5ab5010e6.jpg',
    'https://i.pinimg.com/564x/59/ef/7c/59ef7cc6a8f0d8b7f51ba078b1d77846.jpg',
    'https://i.pinimg.com/564x/8b/17/23/8b1723d69e1bc82056e0818a0d3a7ba5.jpg',
    'https://i.pinimg.com/564x/f3/67/28/f36728beff3d24f3c1fbfb8c4f401abf.jpg',
    'https://i.pinimg.com/564x/7e/75/70/7e7570a08aa8e534d3a020353f10738c.jpg',
    'https://i.pinimg.com/564x/a2/5f/0c/a25f0c551dbdb42a8cbe5143eb1c82e2.jpg',
    'https://i.pinimg.com/564x/27/db/c8/27dbc8b9e2f89320504f6eb1b97881b9.jpg',
    'https://i.pinimg.com/736x/e8/a6/66/e8a66672b646dc1d374b58b087f2dda7.jpg',
    'https://i.pinimg.com/564x/76/41/66/764166dc488e8a03f89b9a795939d7e5.jpg',
    'https://i.pinimg.com/564x/c3/2d/58/c32d58e7c5090bccd509eebb107d9549.jpg',
    'https://i.pinimg.com/736x/ed/aa/90/edaa9000228b382512fa3518bfb04a8c.jpg',
    'https://i.pinimg.com/564x/6f/cc/18/6fcc18e32fcb5e42936246935bc2928c.jpg'
];

const gallery = document.getElementById('gallery');

images.forEach((src, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = src;
    img.dataset.hoverSrc = hoverImages[index];
    img.dataset.originalSrc = src;

    img.addEventListener('mouseover', () => {
        img.src = img.dataset.hoverSrc;
    });

    img.addEventListener('mouseout', () => {
        img.src = img.dataset.originalSrc;
    });

    galleryItem.appendChild(img);
    gallery.appendChild(galleryItem);
});

