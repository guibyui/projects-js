

function generateNotes() {

    var image = document.createElement('img');
    var containerResponse = document.getElementById('response-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=git&size=small";
    containerResponse.appendChild(image);
}