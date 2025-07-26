export function render(blog) {
    const objectChange = blog
    .map((object) => {
    const newObject = `
    <li class="post-card" data-id="${object.id}">
    <img class="photo-post" src="${object.imageUrl}" alt="photo" />
        <div class="stats">
            <p id="comment" class="stats-item">
                <button class="comment-button"><i class="material-icons">comment</i></button>
                ${object.comments}
            </p>
        </div>
        <button type="click" class="edit">Edit</button>
        <button type="click" class="delete">Delete</button>
    </li>
    `;
    return newObject;
    })

    .join("");
    return objectChange;
}