import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ThemeConfigProvider from "./components/Providers";
import BasicLayout from "./components/layout";
import Home from "./pages/home";
import Tags from "./pages/tags";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
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
