import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function fetchPosts(): Promise<Post[]> {
  return axios.get<Post[]>(API_URL).then((response) => {
    return response.data;
  });
}

fetchPosts()
  .then((posts) => {
    if (posts.length > 0) {
      console.table({
        'Кількість постів': posts.length,
        'Заголовок першого поста': posts[0].title,
        'Тіло першого поста': posts[0].body,
      });
    }
  })
  .catch((error) => {
    console.error('Post error: ', error);
  });
