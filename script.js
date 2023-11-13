
const reviewCard = document.getElementById('review-card');
const monogram = document.querySelector('.monogram');
const username = document.getElementById('name');
const profession = document.getElementById('profession');
const quote = document.getElementById('quote');
const prevBtn = document.getElementById('prev-btn');
const randomBtn = document.getElementById('random-btn');
const nextBtn = document.getElementById('next-btn');

let currentReview = 0;



document.addEventListener('DOMContentLoaded', function () {
    displayPersonReview(currentReview);
    console.log('shake and bake');
});


function displayPersonReview(user) {
    const review = REVIEW_DATA[user];
    monogram.src = review.img;
    username.innerHTML = review.name;
    profession.innerHTML = review.profession;
    quote.innerHTML = review.quote;
}


/**
 * Previous review
 */

prevBtn.addEventListener('click', function() {
    currentReview--;
    if (currentReview < 0) {
        currentReview = REVIEW_DATA.length - 1;
    }
    displayPersonReview(currentReview);
});

/**
 * Random next review
 */

randomBtn.addEventListener('click', function() {
    currentReview = Math.floor(Math.random() * REVIEW_DATA.length);
    displayPersonReview(currentReview);
});


/**
 * Next review
 */

nextBtn.addEventListener('click', function() {
    currentReview++;
    if (currentReview > REVIEW_DATA.length - 1) {
        currentReview = 0;
    }
    displayPersonReview(currentReview);
});