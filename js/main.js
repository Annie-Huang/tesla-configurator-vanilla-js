const topBar = document.querySelector('#top-bar');
const exteriorColorSection = document.querySelector('#exterior-buttons');
const interiorColorSection = document.querySelector('#interior-buttons');
const exteriorImage = document.querySelector('#exterior-image');
const interiorImage = document.querySelector('#interior-image');

// Handle Top Bar On Scroll
const handleScroll = () => {
  const atTop = window.scrollY === 0;
  topBar.classList.toggle('visible-bar', atTop);
  topBar.classList.toggle('hidden-bar', !atTop);
};

// Handle Color Selection
const handleColorButtonClick = (event) => {
  let button;

  // exact element the mouse is clicked.
  // console.log(event.target);
  // The parent element of the current element, If mouse is cilcked on one element (img within a button) in the list of element (buttons), then the parent (parent div to wrap the buttons) of the will be return.
  // console.log(event.currentTarget);

  console.log(event.target.tagName); // it can print IMG, BUTTON, DIV, depend on where you click

  if (event.target.tagName === 'IMG') {
    button = event.target.closest('button');
  } else if (event.target.tagName === 'BUTTON') {
    button = event.target;
  }

  if (button) {
    const buttons = event.currentTarget.querySelectorAll('button');
    buttons.forEach((btn) => btn.classList.remove('btn-selected'));
    button.classList.add('btn-selected');
  }
};

// Event Listeners
// requestAnimationFrame will increase performance. It's used to schedule the function to run at an optimal time for smooth visual updates
// Without this, handlescroll would just be called hundreds of times or could be called hundreds of times per second and could potentially lead to Performance issues
window.addEventListener('scroll', () => requestAnimationFrame(handleScroll));
exteriorColorSection.addEventListener('click', handleColorButtonClick);
interiorColorSection.addEventListener('click', handleColorButtonClick);
