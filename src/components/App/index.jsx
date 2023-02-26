import AddMan from "../AddMan";
import ManList from "../ManList";
import WomanList from "../WomanList";
import s from './style.module.css'

function App() {

  

  return (
    <div className={s.bg}>
      <AddMan />
      <ManList />
      <WomanList />
    </div>
  );
}

export default App;
