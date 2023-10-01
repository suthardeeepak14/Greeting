import "./styles.css";

export default function App() {
  const date = new Date();
  const currentTime = date.getHours();

  const customColor = {
    color: ""
  };
  let greeting;

  if (currentTime < 12) {
    greeting = "Good Morning";
    customColor.color = "orange";
  } else if (currentTime < 16) {
    greeting = "Good Afternoon";
    customColor.color = "blue";
  } else if (currentTime < 20) {
    greeting = "Good Evening";
    customColor.color = "green";
  } else {
    greeting = "Good Night";
    customColor.color = "red";
  }

  return (
    <div className="App">
      <h1 className="heading" style={customColor}>
        {greeting}
      </h1>
    </div>
  );
}
