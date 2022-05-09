import logo from './logo.svg';
import './App.css';

const AvatarJSX = (props) => {
  const src = `http://placekitten.com/200/${props.id}200/`

  // La libreria uno tiene la funcion  de pasar 3 parametros, imagen, atributos de la imagen, y por 3er parametro todos los elementos hijos y al final el nombre

  console.log(props)
  return (
    <picture>
      <img src={src} alt='Usuario' />
      {props.name}

    </picture>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AvatarJSX id={2} name="gato" />
        <AvatarJSX id={5} name="alejandro" />
      </header>
    </div>
  );
}

export default App;
