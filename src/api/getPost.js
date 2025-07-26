export default async function getPosts () {
  try {
    return await fetch("http://localhost:3000/blog")
    .then((res) => res.json())
  } catch (error) {
    console.log(error)
  }
};