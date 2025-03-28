const dogg = document.querySelector('#dog-target')
const dogURL = 'https://dog.ceo/api/breeds/image/random'

async function getNewDoggos(){
    const promise = await fetch(dogURL)

    const processedPromise = await promise.json()

    const img = document.createElement('img')
    img.src = processedPromise.message
    img.alt = 'Good boys'
    img.style="width:400px;height:400px;"
    dogg.appendChild(img)
}

    // .catch(function(error){
    //     //handling the error
    //     window.alert('🤫Shhhh! Doggos are asleep right now. Try again later!🐶')
    // })

document.getElementById('dog-btn').addEventListener('click', getNewDoggos)