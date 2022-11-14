async function commentFormHandler(event) {
  event.preventDefault();

  const commentText = document
    .querySelector('textarea[name="content"]')
    .value.trim();

  const postId = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  // to prevent user submitting empty comments
  if (commentText) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        commentText,
      }),
      headers: {
        'content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);
