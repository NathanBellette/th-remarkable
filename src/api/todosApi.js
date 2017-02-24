import "isomorphic-fetch";
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export const getTodos = () =>{
  return get('todos');
};

export const deleteTodo = (id) => {
  return del(`todos/${id}`);
};

const onSuccess = (response) => {
  return response.json();
};

const onError = (error) => {
  console.log(error); // eslint-disable-line no-console
};

const get = (url) => {
  return fetch(baseUrl + url).then(onSuccess, onError);
};

const del = (url) => {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
};

