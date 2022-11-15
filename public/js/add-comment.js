async function postFormHandler(event) {
  console.log('sending data')
  event.preventDefault();

  // grabe the comment
  const comment = document.querySelector('#commentBox').value;
  // grabe the postId
  // const post_id = document.querySelector('#postId').value;
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];

<<<<<<< HEAD
  const response = await fetch('/api/post', {
    method: 'POST',
=======
  // this grabs a post content which we dont have/need
  // const post_content = document
  //   .querySelector('input[name="post-content"]')
  //   .value.trim();

  // creat an obj w/ that data using the correct prop name

  const response = await fetch("/api/comments", {
    method: "POST",
    // send the obj in the body
>>>>>>> d140752638257ed76b314b9a4b76eba5dfa637be
    body: JSON.stringify({
      comment,
      post_id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
<<<<<<< HEAD
    document.location.replace('/dashboard');
=======
    document.location.replace("/");
>>>>>>> d140752638257ed76b314b9a4b76eba5dfa637be
  } else {
    alert(response.statusText);
  }
}

<<<<<<< HEAD
document.querySelector('.new-post').addEventListener('submit', postFormHandler);
=======
document
  .querySelector("#submitComment")
  .addEventListener("click", postFormHandler);
>>>>>>> d140752638257ed76b314b9a4b76eba5dfa637be
