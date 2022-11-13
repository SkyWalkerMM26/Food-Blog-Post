async function editFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const title = document.querySelector('input[name="post-title"]').value;
    const postText = document.querySelector('textarea[name="post-text"]').value;

    const response = await fetch(`api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            postText
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/newpost');
    } else {
        alert(response.statusText);
    }
}