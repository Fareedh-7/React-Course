import LearnComponent from "./Components/learnComponent";
import HeaderComponent from "./Components/HeaderComponent";
import Student from "./Components/Student";
import Apple from "./Components/Apple"

function App() {
  return (
    <>
      {/* <div>React Course</div>
      <LearnComponent /> */}
      {/* <HeaderComponent /> */}
      {/* <Student name="Fareedh" age = {20} isMarried={false}/> */}
      {/* <Student name="Ahamed" age = {21} isMarried={false}/> */}
      <Apple type = {'Fuji'} color = {'Red'}/>
      <Apple type = {'Kashmir'} color = {'Green'}/>
    </>
  );
}

export default App;
