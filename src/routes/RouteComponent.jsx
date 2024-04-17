import { Route, Routes } from "react-router-dom";
import {
  About,
  Categories,
  Category,
  Confirmation,
  Home,
  NotFound,
  Register,
  Session,
} from "../components/index";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home title="Welcome to Red 30 Tech " />} />
      <Route path="/about" element={<About />} />
      <Route path="categories" element={<Categories />}>
        <Route path=":catId" element={<Category />}>
          <Route path=":sessionId" element={<Session />} />
        </Route>
        <Route index element={<h5>select a category from above</h5>} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/confirmed" element={<Confirmation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouteComponent;
