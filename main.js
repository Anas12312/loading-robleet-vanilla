import './style.css'

const tipElement = document.getElementById('tip')
const logo = document.getElementById('logo')
animate()
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

