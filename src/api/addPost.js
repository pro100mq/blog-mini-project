const API_BASE = 'http://localhost:3000';

export async function addPost(postData) {
  try {
    return await fetch(`${API_BASE}/blog`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...postData
      })
    }).then((res) => res.json())
  } catch (error) {
    console.log(error);
  }
}