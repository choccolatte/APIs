const dogg = document.querySelector('#dog-target')
const dogURL = 'https://dog.ceo/api/breeds/image/random'

function getNewDoggos(){
    const promise = fetch(dogURL)
    
    promise.then(function(response){
        const processingPromise = response.text()
        return processingPromise
    })
    .then(function(processedPromise){
        const dogObject = JSON.parse(processedPromise)
        const img = document.createElement('img')
        img.src = dogObject.message
        img.alt = 'Good boys'
        img.style="width:400px;height:400px;"
        dogg.appendChild(img)
    })
    .catch(function(error){
        //handling the error
        window.alert('🤫Shhhh! Doggos are asleep right now. Try again later!🐶')
    })
}

document.getElementById('dog-btn').addEventListener('click', getNewDoggos)
