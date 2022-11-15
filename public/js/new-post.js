async function newPostHandler(event) {
  event.preventDefault();
  const title = document.querySelector('input[name="name-input"]').value;
  const text = document.querySelector('input[name="comment-input"]').value;

  const response = await fetch('/api/new-post', {
    method: 'POST',
    body: JSON.stringify({
      title,
      text,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/new-post');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post').addEventListener('click', newPostHandler);
