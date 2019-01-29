'use strict';

function getDogImage(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(data =>
            renderResults(data, breed))
        .catch(error => alert('An error occurred, please try again later'));
}

function renderResults(data, breed) {
    console.log(data.message);
    if (data.message === "Breed not found") {
        $('.results').append(`<h2>Breed not found. Please try another breed.`);
    }
    else {
        $('.results').append(`<h2>Here is a ${breed}: </h2>
        <img src="${data.message}" class="img-results">`);
    }
    $('.results').removeClass('hidden');
}

function watchSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        let breed = $('input[name="breed"]').val();
        $('.results').empty();
        $('.dog-breed').val('');
        getDogImage(breed);
    });
}

$(function() {
    console.log('App Loaded! Waiting on submission');
    watchSubmit();
});