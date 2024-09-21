import './App.css';
import Calendar from "./components/Calendar"

const App = () => {

  return (
    <div className="App">
      <h1>Class Schedule</h1>
      <h2>Hey student, Here is a schedule for all of your classes!</h2>
      <Calendar />
    </div>
  )
}

export default App