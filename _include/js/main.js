const checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};

const items = document.querySelectorAll('.checklist-item');
const buttons = document.querySelectorAll('.checklist-item__expand');
const labels = document.querySelectorAll('.checklist-item__title');

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkboxesLength = checkboxes.length;

const progress = document.querySelector('.progress__bar');
const counter = document.querySelector('.progress__count');

const reset = document.querySelector('.progress__reset');


// Give descriptive ids & labels to all the checkboxes
function loadIds() {
  for (let i = 0; i < checkboxesLength; i += 1) {
    const compress = s => s.replace(/[ ,.!?;:'-]/g, '');

    // Take the title of each checklist-item and remove punctuation/spaces
    checkboxes[i].id = `${compress(checkboxes[i].nextSibling.nextSibling.innerText).toLowerCase()}`;
    checkboxes[i].nextSibling.setAttribute('for', `${compress(checkboxes[i].nextSibling.nextSibling.innerText).toLowerCase()}`);
  }
}

// Update localstorage with checkbox checked boolean
function updateStorage(el) {
  checkboxValues[el.id] = el.checked;
  localStorage.setItem('checkboxValues', JSON.stringify(checkboxValues));
}


// Update the global counter and scale style of global & section percentage bars
function countChecked() {
  // If the click is from checkbox then only the section percentage bars will be updated, else the
  // click came from window load or reset button and all section percentage bars have to update

  if (this.type === 'checkbox') {
    const thisSection = this.parentNode.parentNode.parentNode;
    const sectionCheckedPercentage = thisSection.querySelectorAll('input:checked').length / thisSection.querySelectorAll('.checklist-item').length;
    thisSection.querySelector('.checklist__percentage-border').style.transform = `scaleX(${sectionCheckedPercentage})`;
  } else {
    document.querySelectorAll('.checklist').forEach((checklist) => {
      const checklistCheckedPercentage = checklist.querySelectorAll('input:checked').length / checklist.querySelectorAll('.checklist-item').length;
      checklist.querySelector('.checklist__percentage-border').style.transform = `scaleX(${checklistCheckedPercentage})`;
    });
  }

  let globalCheckedCounter = 0;
  document.querySelectorAll('input:checked').forEach(() => {
    globalCheckedCounter += 1;
  });

  counter.innerText = `${globalCheckedCounter}/${checkboxesLength}`;
  progress.style.transform = `scaleX(${globalCheckedCounter / checkboxesLength})`;
  checkboxValues.globalCounter = globalCheckedCounter;

  updateStorage(this);
}

// Initialize the global counter and update checkbox checked boolean from localstorage
function loadValues() {

  const initialCounterValue = checkboxValues.globalCounter || 0;
  counter.innerText = `${initialCounterValue}/${checkboxesLength}`;

  Object.keys(checkboxValues).forEach((key) => {
    if (key !== 'globalCounter') document.getElementById(key).checked = checkboxValues[key];
  });

  countChecked();
}


// Toggle the checklist-item__info expansion and checklist-item__expand animation
function toggleExpand() {
  const thisItem = this.parentNode;
  items.forEach((item) => {
    if (thisItem === item) {
      thisItem.querySelector('.line').classList.toggle('closed');
      thisItem.classList.toggle('open');
    }
  });
}

// Uncheck all boxes and reset localstorage
function resetCheckboxes() {
  // Add the wiggle animation class on the reset button
  this.classList.add('progress__reset--pressed');

  checkboxes.forEach(checkbox => checkbox.checked = false);
  Object.keys(checkboxValues).forEach(key => delete checkboxValues[key]);
  countChecked();
}


window.onload = function () {
  loadIds();
  loadValues();

  checkboxes.forEach(checkbox => checkbox.addEventListener('click', countChecked));
  buttons.forEach(button => button.addEventListener('click', toggleExpand));
  labels.forEach(label => label.addEventListener('click', toggleExpand));

  reset.addEventListener('click', resetCheckboxes);

  // On animationend remove the wiggle animation class on the reset button
  reset.addEventListener('animationend', function () {
    this.classList.remove('progress__reset--pressed');
  }, false);

  console.info('Designed and Developed by Harris J. Thompson\nTwitter - www.twitter.com/HarrisJT_\nGitHub - www.github.com/HarrisJT');
};
