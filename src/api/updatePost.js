const API_BASE = 'http://localhost:3000';

export async function updatePost(id, postData) {
  try {
    return await fetch(`${API_BASE}/blog/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...postData,
        updatedAt: new Date().toISOString()
      })
    }).then((res) => res.json())
  } catch (error) {
    console.log(error);
  }
}