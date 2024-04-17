import { Header } from "./components";
import RouteComponent from "./routes/RouteComponent";

function App() {
  return (
    <div className="app">
      <Header />
      <RouteComponent />

      <footer className="container">
        &copy; 2024 | <a href="#">Red 30 Tech</a>
      </footer>
      {/* <Header />

      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 Tech" />} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />} />
        </Route>
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer> */}
    </div>
  );
}

export default App;
