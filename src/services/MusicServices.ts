import api from './api';

export async function findBy() {
  return api.get('/search', {
    // params: {
    //   q:
    // },
  });
}
