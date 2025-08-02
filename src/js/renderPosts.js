export function renderPosts(posts, container) {
  container.innerHTML = posts
  .map(object => `
    <div class="post" data-id="${object.id}">
      <h2>${object.title}</h2>
      <p>Автор: ${object.username}</p>
      <img src="${object.imageUrl}" alt="${object.title}">
      <p>${object.content}</p>
      <button class="edit-btn" data-id="${object.id}">Редагувати</button>
      <button class="delete-btn" data-id="${object.id}">Видалити</button>
    </div>
  `)
  .join('');
}