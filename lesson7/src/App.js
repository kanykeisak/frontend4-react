import './App.css';
import PokemonPage from "./pages/pokemonPage/PokemonPage";
import FormPage from "./pages/formPage/FormPage";
import RegisterformPage from "./pages/registerformPage/RegisterformPage";
import Fetch from "./pages/fetch/Fetch";
import TodoPage from "./pages/todoPage/TodoPage";
import TodoPageDZ from "./pages/todoPageDZ/TodoPageDZ";

function App() {
  return (
    <div className="App">
        {/*<PokemonPage/>*/}
        {/*<FormPage/>*/}
        {/*<RegisterformPage/>*/}
        {/*<Fetch/>*/}
        {/*<TodoPage/>*/}
        <TodoPageDZ/>
    </div>
  );
}


export default App;

// get - получить
// post - отправить
// delete - удалить
// put - отправить полный обьект
// patch - отправить 1 ключ и изменить его
