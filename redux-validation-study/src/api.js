export const getPostsById = id => fetch(`https://jsonplaceholder.typicode.com/Posts/${id}`);
 
export const getPostsBulk = () => fetch("https://jsonplaceholder.typicode.com/posts");

export const postUserCall = (data) => {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    method: 'POST',
    body: JSON.stringify({
      name: data.name,
      email: data.email
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
};
