import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import Container from "./layouts/Container";

function App() {
  return (
    <Routes>
      {routes?.map((route, routeIndex) => (
        <Route
          key={routeIndex}
          path={route.path}
          element={<Container route={route} />}
        />
      ))}
    </Routes>
  );
}

export default App;
