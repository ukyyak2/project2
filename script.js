function fetchDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const dogImage = document.getElementById('dogImage');
      dogImage.src = data.message;
      dogImage.alt = 'Random Dog Image';
    })
    .catch(error => {
      console.error('Error fetching dog image:', error);
    });
}
