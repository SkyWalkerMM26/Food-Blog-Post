async function postFormHandler(event) {
  console.log('sending data');
  event.preventDefault();

  // grabe the comment
  const comment = document.querySelector('#commentBox').value;
  // grabe the postId
  // const post_id = document.querySelector('#postId').value;
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  // this grabs a post content which we dont have/need
  // const post_content = document
  //   .querySelector('input[name="post-content"]')
  //   .value.trim();

  // creat an obj w/ that data using the correct prop name

  const response = await fetch('/api/comments', {
    method: 'POST',
    // send the obj in the body
    body: JSON.stringify({
      comment,
      post_id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#submitComment')
  .addEventListener('click', postFormHandler);
