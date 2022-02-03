
window.addEventListener('load', (event) => {
  const getButton = document.getElementById('get-js')
  const postButton = document.getElementById('post-js')
  const resHtml = document.getElementById('res-js')

  getButton.addEventListener('click', event => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => resHtml.insertAdjacentText('afterbegin', JSON.stringify(res.data)))
    
  });
  postButton.addEventListener('click', event => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      name: 'name',
      email: 'email'
    }).then(res => resHtml.insertAdjacentText('afterbegin', JSON.stringify(res.data)))
    
  });
});
