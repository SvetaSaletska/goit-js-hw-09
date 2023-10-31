const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body')




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


  const onClick = () => {
    const timerId = setTimeout(() => {
      let randClr = getRandomHexColor();
      body.style.backgroundColor = randClr;
      color.textContent = randClr;
    }, 1000);

    console.log(timerId);
  };

  startBtn.addEventListener('click', onClick);


  // function handlerClick(evt) {
  //   let randClr = getRandomHexColor();
  //     body.style.backgroundColor = randClr;
  //     color.textContent = randClr;
  //   }