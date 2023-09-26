// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function emptyHeartClick () {
  let heart = document.querySelector('.like-glyph');
  heart.addEventListener('click', function (e) {
    mimicServerCall()
    .then(() => {
      heart = FULL_HEART
      heart.className = 'activated-heart'
    })

    .catch((error) => {
      let errorModalClass = document.querySelector('.hidden')
      errorModalClass.remove()
      
      alert(document.getElementById(modal).innerText)

      setTimeout (() => document.getElementById(modal).classList = 'hidden', 3000)
    })
  });

  
  
  }



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
