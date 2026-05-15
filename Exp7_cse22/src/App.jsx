// import './index.css'
// function App(){
//   return(
//     <div className = "App_Class">
//       <h1>hello cse22</h1>
//       <p>Welcome to React</p>
//     </div>
//   );
// }
// export default App;

// import './index.css'
// import
// function App(){
//   return(
//     <div className = "App_Class">
//       <h1>Student Card App</h1>
//       <StudentCard name = "Rahul" course = "CSE" marks = "90"></StudentCard>
//       <StudentCard name = "Rohit" course = "CSE" marks = "90"></StudentCard>
//       <StudentCard name = "Rocky" course = "CSE" marks = "90"></StudentCard>
//       <p>Welcome to React</p>
//     </div>
//   );
// }
// export default App;

// function GameScore() {
//   const [score, setScore] = useState(0);
//   return (
//     <div>
//       <h1>Current Score: {score}</h1>
//       <button onClick={() =>
//         setScore(score + 1)}
//       }
//     </div>
//   )
// }

function App() {
  return (
    <div>
      <h1>👨‍🎓 Student Info</h1>
      <User name="Aman" age={20} city="Delhi" />
      <User name="Priya" age={21} city="Mumbai" />
      <User name="Rahul" age={19} city="Kolkata" />
    </div>
  );
}
// ✅ Props Destructuring used here
function User({ name, age, city }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <hr />
    </div>
  );
}
export default App;