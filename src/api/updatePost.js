export default async function updatePost(postData, id) {
  try {
    return await fetch(`http://localhost:3000/blog/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    }).then((res) => res.json())
  } catch (error) {
    console.log(error);
}
}