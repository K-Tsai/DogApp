function getDogImage() {
    const userNum = $('input').val();
    fetch(`https://dog.ceo/api/breeds/image/random/` + userNum)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => ('Something went wrong, please try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    $(".results").empty()
    for (let i = 0; i < responseJson.message.length; i++) {
        $(".results").append(`<img src= "${responseJson.message[i]}" alt= "random dog image">`)
    };

    $('.results').removeClass('hidden');
      
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    });
}

function logResponse() {
    watchForm();
}

$(logResponse);