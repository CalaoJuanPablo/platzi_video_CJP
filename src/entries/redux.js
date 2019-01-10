import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  store.dispatch({
    type: 'ADD_SONG',
    payload: {
      title
    }
  })
}

const reducer = function(state, action){
  switch(action.type){
    case 'ADD_SONG':
      return [...state, action.payload]
    default:
      return state
  }
}

const initialState = [
  {
    title: 'Despacito'
  },
  {
    title: 'One More Time'
  },
  {
    title: 'Echame la Culpa'
  }
]

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function render(){
const playlist = store.getState();
const $container = document.getElementById('playlist');
$container.innerHTML = '';
playlist.forEach(element => {
  const template = document.createElement('p');
  template.textContent = element.title;
  $container.appendChild(template);
})
}

render();

function handleChange(){
  render()
}

store.subscribe(handleChange)