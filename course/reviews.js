document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const service = document.getElementById('service').value;
    const master = document.getElementById('master').value;
    const review = document.getElementById('review').value;

    const reviewBox = document.createElement('div');
    reviewBox.classList.add('review-box'); 

    const serviceTitle = document.createElement('h3');
    serviceTitle.textContent = service;
    reviewBox.appendChild(serviceTitle);

    const ratingText = document.createElement('p');
    ratingText.innerHTML = `<strong>Rating: ${rating}/10</strong>`;
    reviewBox.appendChild(ratingText);

    const serviceText = document.createElement('p');
    serviceText.innerHTML = `<strong>Service:</strong> ${service}`;
    reviewBox.appendChild(serviceText);

    const masterText = document.createElement('p');
    masterText.innerHTML = `<strong>Master:</strong> ${master}`;
    reviewBox.appendChild(masterText);

    
    const reviewText = document.createElement('p');
    reviewText.innerHTML = `<em>"${review}"</em>`;
    reviewBox.appendChild(reviewText);

    
    document.getElementById('reviews').appendChild(reviewBox);


    document.getElementById('review-form').reset();
});
