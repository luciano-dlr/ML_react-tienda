import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

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
        <NavBar />
        {/* <img src={logo} className="App-logo" alt="logo" />  */}
        <h1 style={{ color: 'yellow', marginBottom: '3%' }} onClick={() => console.log('hice click')}>MERCADO LIBRE</h1>
        {/* <AvatarJSX id={2} name="gato" />
        <AvatarJSX id={5} name="pepe" /> */}
      </header>
    </div>
  );
}

export default App;
