const colors = ['green', 'red', 'rgba(133,122,300)',
    '#f15025'
]
const button = document.getElementById('btn')
const color = document.querySelector('.color')
button.addEventListener('click', function() {
    //get random number between 0-3
    function randomColor() {
        let random = Math.floor(Math.random() * colors.length)
        return random
    }
    const getRandomColor = randomColor()
    document.body.style.backgroundColor = colors[getRandomColor]
    color.textContent = colors[getRandomColor]
})