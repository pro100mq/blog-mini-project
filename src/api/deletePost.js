const API_BASE = 'http://localhost:3000';

export async function deletePost(id) {
  try {
    return await fetch(`${API_BASE}/blog/${id}`, {
      method: 'DELETE'
    });
  } catch (error) {
    console.log(error);
  }
}