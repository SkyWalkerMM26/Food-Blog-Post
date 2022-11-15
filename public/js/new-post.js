// async function newPostHandler(event) {
//     event.preventDefault();
//     const title = document.querySelector('input[name="name-input"]').value;
//     const text = document.querySelector('input[name="comment-input"]').value;
const newPost = async () => {
    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ title, category, content_box, image }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/new-post');
    } else {
        alert (response.statusText);
    }
}

document.querySelector("#newPost").addEventListener("click", newPost);