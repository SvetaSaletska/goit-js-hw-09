import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const inputDelay = form.elements.delay;
const inputStep = form.elements.step;
const inputAmount = form.elements.amount;;
const btnCreatePromise = document.querySelector('button');


btnCreatePromise.addEventListener('click', submit);

function submit(evt) {
  evt.preventDefault();
  let delay = Number(inputDelay.value);
  const step = Number(inputStep.value);
  const amount = Number(inputAmount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay);
    delay += step;
  }

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  let promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay)
});

  promise
    .then(({position, delay}) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
    .catch(({ position, delay }) => {
    Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
}

