import PersonCard from "./componentes/PersonCard";
import PersonCardFuncional from "./componentes/PersonCardFuncional";

const App = () => {
  return (
    <div className="App">
      <PersonCard firstName="Elena"
      lastName="De Troya" age={18}
      hairColor="Black"/>

      <PersonCard firstName="Juana"
      lastName="De Arco" age={20}
      hairColor="Brown"/>

      <PersonCard firstName="Pedro"
      lastName="Paramo" age={32}
      hairColor="Blonde"/>

      <PersonCard firstName="Pablo"
      lastName="Picasso" age={50}
      hairColor="White"/>

      <PersonCardFuncional firstName="Elena" lastName="De Troya" age={18} hairColor="Black"/>
    </div>
  );
}

export default App;
