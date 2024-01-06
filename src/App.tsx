import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import BasicLayout from "./components/layout";
import Results from "./pages/results";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Tags from "./pages/tags";
import ThemeConfigProvider from "./components/Providers";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="results" element={<Results />} />
      <Route path="tagList" element={<Tags />} />
    </Route>
  )
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeConfigProvider>
        <BasicLayout>
          <RouterProvider router={router} />
        </BasicLayout>
      </ThemeConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
