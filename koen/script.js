// Attach click events to each card
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const videoSrc = card.getAttribute('data-video');
      const videoElement = document.getElementById('videoElement');
      videoElement.querySelector('source').src = videoSrc;
      videoElement.load();
      document.getElementById('videoPlayer').style.display = 'block';
      document.getElementById('overlay').style.display = 'block';
    });
  });
  
  // Function to close the modal and pause the video
  function closeModal() {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoElement = document.getElementById('videoElement');
    videoElement.pause();
    videoPlayer.style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }
  
  // Close modal when the close button or overlay is clicked
  document.getElementById('closeButton').addEventListener('click', closeModal);
  document.getElementById('overlay').addEventListener('click', closeModal);