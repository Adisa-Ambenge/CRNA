const navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
    }
function hideMenu() {
    navLinks.style.right = "-256px";

  }
  document.addEventListener('DOMContentLoaded', function () {
    const commentBtn = document.getElementById('comment-btn');
    const commentInput = document.getElementById('comment-input');
    const commentsSection = document.getElementById('comments-section');
    let savedComments = []; // Array to store the comments

    commentBtn.addEventListener('click', function () {
        const comment = commentInput.value;
        if (comment.trim() !== '') {
            savedComments.push(comment); // Save the comment internally
            commentInput.value = ''; // Clear the input field
        }
    });

    // You can display the saved comments in another section or log them in the console for testing purposes
    function displaySavedComments() {
        savedComments.forEach((comment) => {
            const newComment = document.createElement('p');
            newComment.innerText = comment;
            commentsSection.appendChild(newComment);
        });
    }

    // Call this function to display the saved comments when needed
    displaySavedComments();
});

