const API_ADDRESS = "https://warsawjs-21-api.herokuapp.com";

const transformJsonResponse = response => {
  if (!response.ok) {
    return Promise.reject(response);
  }

  return response.json();
};

export const login = ({ username, password }) =>
  fetch(`${API_ADDRESS}/auth`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ username, password })
  }).then(transformJsonResponse);

export const readPostList = () =>
  fetch(`${API_ADDRESS}/posts`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  }).then(transformJsonResponse);

export const createPost = ({ username, title, image }) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("title", title);
  formData.append("image", image);
  return fetch(`${API_ADDRESS}/posts`, {
    method: "POST",
    body: formData
  }).then(transformJsonResponse);
};

export const readPost = postId =>
  fetch(`${API_ADDRESS}/posts/${postId}`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  }).then(transformJsonResponse);

export function createComment({ postId, username, body, position: { x, y } }) {
  return fetch(`${API_ADDRESS}/posts/${postId}/comments`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ postId, username, body, position: { x, y } }),
  }).then(transformJsonResponse);
}