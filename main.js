const tipElement = document.getElementById('tip')
const logo = document.getElementById('logo')
const starBackground = document.getElementById('starts-background')
const starElArr = [];
animateBackground()
animate()




function animateBackground() {
  let count = 0;

  const random = (min, max) => {
    return Math.floor(Math.random() * max) + min;
  }

  const generateStar = () => {
    const randomStarType = random(1, 3);
    const starEl = document.createElement('div');

    if (randomStarType === 1) {
      starEl.classList.add('stars');
      starEl.style.bottom = random(-3000,3000)+ 'px'
      starEl.style.left = `${random(0, 100)}%`
    }

    if (randomStarType === 2) {
      starEl.classList.add('stars2');
      starEl.style.bottom = random(-3000,3000)+ 'px'
      starEl.style.left = `${random(0, 100)}%`
    }

    if (randomStarType === 3) {
      starEl.classList.add('stars3');
      starEl.style.bottom = random(-3000,3000) + 'px'
      starEl.style.left = `${random(0, 100)}%`
    }
    starElArr.push(starEl);
    document.body.appendChild(starEl);
  }

  console.log(random(1, 5));

  // setInterval(() => {

  let n = 400
  while (--n) {
    generateStar();
  }


  // }, 2000)

  // setInterval(() => {
  //   for (let i = 0; i < starElArr.length; i++) {
  //     if (starElArr[i].getBoundingClientRect().top < 0) {
  //       console.log('reset');
  //       starElArr[i].style.bottom = random(-3000,3000)+ 'px'
  //       starElArr[i].style.left = `${random(0, 100)}%`;
  //     }
  //   }
  // }, 200000)

}




function animate() {
  tipElement.style.display = "none"
  setTimeout(() => {
    logo?.classList.remove('fade-in')
    logo?.offsetWidth
    logo?.classList.add('heart')
    setTimeout(() => {
      logo?.classList.remove('heart')
      logo?.offsetWidth
      logo?.classList.add('fade-out')
      setTimeout(() => {
        logo.style.display = "none"
        logo.src = "./finallogo.png"
        setTimeout(() => {
          logo.style.display = "block"
          logo?.classList.remove('fade-out')
          logo.style.width = "29%"
          logo?.offsetWidth
          logo?.classList.add('fade-in')
          animateTip()
          setTimeout(() => {
            logo?.classList.remove('fade-in')
            logo?.offsetWidth
            logo?.classList.add('heart-endless')

          }, 1000)
        }, 0)
      }, 1000)
    }, 6000)
  }, 1000)


}
function animateTip() {
  let index = 0
  tipElement.style.display = "block"
  tipElement.querySelector('h1').textContent = tips[index].text
  tipElement.classList.remove('typewriter')
  tipElement.offsetWidth
  tipElement.classList.add('typewriter')
  index = (index + 1) % tips.length
  setInterval(() => {
    tipElement.style.display = "block"
    tipElement.querySelector('h1').textContent = tips[index].text
    tipElement.classList.remove('typewriter')
    tipElement.offsetWidth
    tipElement.classList.add('typewriter')
    index = (index + 1) % tips.length
  }, 4000)

}

const tips = [
  {
    text: "Get Big Bonus from refering your friends",
    title: "AFFILIATE SYSTEM",
    img: "../star.png"
  },
  {
    text: "Come to us and get bonuses everyday!",
    title: "DAILY BOUNS",
    img: "../gift.png"
  },
  {
    text: "The higher rank you are, the more surprising the rewards will be",
    title: "XP REWARDS",
    img: "../xp.png"
  },
  {
    text: "Players in the chat randomly get rewards",
    title: "CHAT RAIN",
    img: "../lightning.png"
  },

]

// function changeTip() {
//   let randomIndex
//   do {
//     randomIndex = Math.floor(Math.random() * tips.length)
//   } while (tips[randomIndex].title === tipTitle)

//   tipElement.textContent = tips[randomIndex].text
//   tipTitle = tips[randomIndex].text
// }

