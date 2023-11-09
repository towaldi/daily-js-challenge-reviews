





const reviews = REVIEW_DATA.forEach((review) => {
    return /* html */ ` <div class="review-card">
                            <img class="monogram" src="${review.img}" alt="profile picture">
                            <h1>${review.name}</h1>
                            <h2>${review.profession}</h2>
                            <p>${review.quote}</p>
                            <div class="row-1rem">
                                <button class="btn last"><img src="./assets/icons/chevron_left_24px.svg"></button>
                                <button class="btn next"><img src="./assets/icons/chevron_right_24px.svg"></button>
                            </div>
                        </div>`;

    console.log(review);
});