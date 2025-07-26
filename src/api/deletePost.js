export async function deletePost(id){
  try {
    return await fetch(`http://localhost:3000/blog/${id}`, {
        method: "DELETE",
    });
  } catch (error) {
    console.log(error)
  }
};