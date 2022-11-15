async function postFormHandler(event) {
  console.log('sneding data')
  event.preventDefault();

  // grabe the comment
  const comment = document.querySelector('#commentBox').value;
  // grabe the postId

  // this grabs a post content which we dont have/need
  // const post_content = document
  //   .querySelector('input[name="post-content"]')
  //   .value.trim();

  // creat an obj w/ that data using the correct prop name

  const response = await fetch("/api/comment", {
    method: "POST",
    // send the obj in the body
    body: JSON.stringify({
      title: comment,
      post_content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#submitComment")
  .addEventListener("click", postFormHandler);
