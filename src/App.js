import "./App.css";
import MainContent from "./components/MainContent";
import Header from "./components/Header";

// Approach for Solving the Problem
// 1. Created a new React app named it as Machine-Test
// 2. Created a Header component(for navbar) stored it inside the components folder
// 3. Created a MainContent component(for main page content) stored it inside the components folder
// 4. Fetched the data from the API(using nested data function)
// 5. Displayed the data in the MainContent component
// 6. exported the components and imported them in the App.js file
// 7. Style the Header and MainContent components
// 8. Deployed the app to vercel to showcase on the live server

function App() {
  return (
    <div className="App">
      {/* these are the components that i am using */}
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
