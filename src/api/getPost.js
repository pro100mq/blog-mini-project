const API_BASE = 'http://localhost:3000';

export async function getPosts() {
  try {
    return await fetch(`${API_BASE}/blog`)
    .then((res) => res.json())
  } catch (error) {
    console.log(error);
  }
}

export async function getPostById(id) {
  try {
    return await fetch(`${API_BASE}/blog/${id}`)
    .then((res) => res.json())
  } catch (error) {
    console.log(error);
  }
}