function generateImage() {
  const query = document.querySelector('.searchInput').value;
  const clientId = 'Your client_Id';
  const url = `Your API_URL`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
      const images = document.querySelectorAll('.image-gallery img');
      data.forEach((item, index) => {
          images[index].src = item.urls.regular;
          images[index].alt = item.alt_description;
      });
  })
  .catch(error => console.error('Error fetching images:', error));
}
