
const showImageBtn = document.getElementById('showImageBtn');
const imageContainer = document.getElementById('imageContainer');
const placeholderContainer = document.getElementById('placeholderContainer');

let currentImageElement; // Reference to the current image element

// Replace with your actual image URLs
const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    // Add more image URLs here
];
showImageBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const newImageURL = images[randomIndex];

    if (currentImageElement) { // Check if there's a current image
        currentImageElement.src = newImageURL; // Replace the source of the current image
    } else { // If no current image, create a new one
        const imageElement = document.createElement('img');
        imageElement.src = newImageURL;
        imageElement.id = 'randomImage';
        imageElement.classList.add('image-container-hidden');

        imageContainer.appendChild(imageElement);
        showImageBtn.classList.add('image-container-hidden');
        placeholderContainer.style.display = 'none'; // Hide placeholder after click

        setTimeout(() => {
            imageElement.classList.remove('image-container-hidden');
            showImageBtn.classList.remove('image-container-hidden');
            currentImageElement = imageElement; // Set currentImageElement reference
        }, 1000);
    }
});
