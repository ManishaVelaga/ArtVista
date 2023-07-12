var zoomableImages = document.querySelectorAll('.item');
zoomableImages.forEach(function (image) {
  image.addEventListener('click', toggleZoom);
});

// Toggle zoom state of the clicked image
function toggleZoom(event) {
  var image = event.target;
  image.classList.toggle('zoomed');
}

function loadComments(index) {
    var comments = localStorage.getItem('comments_' + index);
    if (comments) {
      comments = JSON.parse(comments);
      var commentsContainer = document.querySelectorAll('.comments')[index];

      // Clear existing comments
      commentsContainer.innerHTML = '';

      comments.forEach(function (comment) {
        var commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.textContent = comment;
        commentsContainer.appendChild(commentElement);
      });
    }
  }

  // Save comments to local storage
  function saveComment(index, comment) {
    var comments = localStorage.getItem('comments_' + index);
    if (comments) {
      comments = JSON.parse(comments);
    } else {
      comments = [];
    }
    comments.push(comment);
    localStorage.setItem('comments_' + index, JSON.stringify(comments));
  }

  // Handle comment input field keydown event
  function handleCommentInput(event) {
    if (event.key === 'Enter') {
      var commentInput = event.target;
      var comment = commentInput.value;
      var commentsContainer = commentInput.parentNode.previousElementSibling;

      // Save the comment locally
      var index = Array.from(commentsContainer.parentNode.parentNode.children).indexOf(commentsContainer.parentNode);
      saveComment(index, comment);

      // Append the new comment to the comments container
      var commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.textContent = comment;
      commentsContainer.appendChild(commentElement);

      // Clear the comment input field
      commentInput.value = '';

      // Prevent the Enter key from adding a new line in the input field
      event.preventDefault();
    }
  }

  // Load comments for each individual image when the page is loaded
  window.addEventListener('load', function () {
    var zoomableImages = document.querySelectorAll('.item');
    zoomableImages.forEach(function (image, index) {
      image.addEventListener('click', function () {
        // Load comments for the clicked image
        loadComments(index);
      });
    });
  });





$(document).ready(function(){
    $('.carousel').carousel();
    indicators: true;
  });

  function opnn(){
    var instance = M.Carousel.getInstance(elem);
    instance.next(1);
    instance.next(2);
}

  $(document).ready(function(){
    $('.parallax').parallax();
  });

  function para()
  {
    var instance = M.Parallax.getInstance(elem);
instance.open();
  }
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $(document).ready(function(){
    $('.tap-target').tapTarget();
  });

  $(document).ready(function(){
    $('.slider').slider();

  });

  function slide(){
    var instance = M.Slider.getInstance(elem);
    instance.start();
    
    instance.interval(5000);
 
  }
  