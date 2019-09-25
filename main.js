/**
 * Call the API to fetch dog images
 * @param {numDogs} number of Dog Images 
 */
function getDogPics(numDogs) {
    fetch(`https://dog.ceo/api/breeds/image/random/${numDogs}`)
    .then(response=>response.json())
    .then(responseJson=>displayImage(responseJson))
    .catch(error=>alert("Oops! something went wrong"));

}


/**
 * Extract Image URI from response and display the image to the DOM
 * @param {responseJson} API response 
 */
function displayImage(responseJson) {
    for(let item of responseJson.message){
        $(".dog-images").append(`<img class='dog-pic' src='${item}'>`)
    }
}

/**
 * Add a listener for form submission
 */
function addSubmitListener() {
    $('form').submit(event=> {
        event.preventDefault();
        let numDogs = $('#num-dogs').val();
        if(!numDogs) {
            alert("Enter a valid number for dog images");
            return;
        } 
        $(".dog-images").empty();
        getDogPics(numDogs);
    });
}


$(function(){
    addSubmitListener();
});