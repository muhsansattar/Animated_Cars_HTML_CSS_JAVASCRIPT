const images = [
    { src: "./images/car-2rr.png", title: 'Mclearen P1', description: 'The Best or Nothing', bgColor: 'radial-gradient(88.98% 88.98% at 56.35% 71.24%, #F9DC2C 0%, #A97A00 100%)' },
    { src: "./images/car-3rr.png", title: 'Zindago r51', description: 'Give the best', bgColor: 'radial-gradient(88.98% 88.98% at 56.35% 71.24%, #474747 0%, #0F0F0F 100%)' },
    { src: "./images/car-4rr.png", title: 'Leonardo x', description: 'Do the things you.', bgColor: 'radial-gradient(85.82% 85.82% at 56.35% 71.24%, #D14438 0%, #370100 100%)' },
    { src: "./images/car-5rr.png", title: 'Xanziro oo7', description: 'Anything anywhere!', bgColor: 'radial-gradient(85.82% 85.82% at 56.35% 71.24%, #A1EE61 0%, #015600 100%)' },
    { src: "./images/car-1rr.png", title: 'Ferrari z1 x3', description: 'Speed Up the destiny', bgColor: 'radial-gradient(88.98% 88.98% at 56.35% 71.24%, #B22DE8 0%, #470064 100%)' }
];

  let currentIndex = 0;
function updateContent(index) {
  const carImage = document.getElementById('image');
  const title = document.getElementById('title');
  const description = document.getElementById('description');

  // Step 1: Apply the pop-in animation to the current image and scroll out animation to text
  carImage.classList.add('popIn');
  title.classList.add('scrollOut');
  description.classList.add('scrollOut');

  // Step 2: After the animations, update the content and apply the pop-out and scroll in animations
  setTimeout(() => {
      // Update the image content
      carImage.src = images[index].src;
      title.textContent = images[index].title;
      description.textContent = images[index].description;
      document.body.style.background = images[index].bgColor;

      // Remove the pop-in and scroll out classes, and add the pop-out and scroll in classes
      carImage.classList.remove('popIn');
      carImage.classList.add('popOut');
      title.classList.remove('scrollOut');
      description.classList.remove('scrollOut');
      title.classList.add('scrollIn');
      description.classList.add('scrollIn');

      // Remove the scroll in classes after the animation completes
      setTimeout(() => {
          carImage.classList.remove('popOut');
          title.classList.remove('scrollIn');
          description.classList.remove('scrollIn');
      }, 500); // Match this duration with the scroll in animation duration (0.5s)
  }, 500); // Match this duration with the pop-in and scroll out animations (0.5s)
}

document.getElementById('left-button').addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  updateContent(currentIndex);
});

document.getElementById('right-button').addEventListener('click', () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  updateContent(currentIndex);
});




const mobileNav = document.querySelector("nav.mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");



menuIcon.addEventListener("click", () => {
   
  mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  
  mobileMenuContainer.classList.remove("active");
});