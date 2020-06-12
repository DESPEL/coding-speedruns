const reviews = [{
            name: "Lorem ipsum 1",
            photo: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1",
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, et similique odio error excepturi laboriosam ipsam non placeat nostrum porro illo id asperiores sint doloribus, expedita molestias atque quae repellendus labore nisi nulla? Architecto, illo! Unde, sapiente? Ducimus at, quo soluta autem neque, voluptates omnis iusto nobis maiores veritatis magni?`
        },
        {
            name: "Lorem ipsum 2",
            photo: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621",
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, et similique odio error excepturi laboriosam ipsam non placeat nostrum porro illo id asperiores sint doloribus, expedita molestias atque quae repellendus labore nisi nulla? Architecto, illo! Unde, sapiente? Ducimus at, quo soluta autem neque, voluptates omnis iusto nobis maiores veritatis magni?`
        },
        {
            name: "Lorem ipsum 3",
            photo: "https://i.pinimg.com/originals/19/43/18/19431859261e12c5ba63da8f57b776ee.jpg",
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, et similique odio error excepturi laboriosam ipsam non placeat nostrum porro illo id asperiores sint doloribus, expedita molestias atque quae repellendus labore nisi nulla? Architecto, illo! Unde, sapiente? Ducimus at, quo soluta autem neque, voluptates omnis iusto nobis maiores veritatis magni?`
        }
    ]
    // oh no, global variables
let index = 0

console.log('uh')

function updateReview() {
    let idx = index >= 0 ? index % reviews.length : reviews.length - Math.abs(index % reviews.length) - 1
    document.getElementById('title').innerHTML = reviews[idx].name
    document.getElementById('photo').src = reviews[idx].photo
    document.getElementById('content').innerHTML = reviews[idx].content
}


document.getElementById('prev').addEventListener('click', () => {
    index--;
    updateReview()
})

document.getElementById('next').addEventListener('click', () => {
    index++;
    updateReview()
})

document.getElementById('random').addEventListener('click', () => {
    index = Math.floor(Math.random() * reviews.length)
    updateReview()
})

updateReview()