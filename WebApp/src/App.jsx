import LearnComponent from "./Components/learnComponent";
import HeaderComponent from "./Components/HeaderComponent";
import Student from "./Components/student";

function App() {
  return (
    <>
      {/* <div>React Course</div>
      <LearnComponent /> */}
      {/* <HeaderComponent /> */}
      <Student name="Fareedh" age = {20} isMarried={false}/>
      <Student name="Ahamed" age = {21} isMarried={false}/>
    </>
  );
}

export default App;
