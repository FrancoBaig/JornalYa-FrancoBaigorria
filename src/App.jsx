import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DocumentsContainer from './pages/Documents/DocumentsContainer';
import DocumentDetailContainer from './pages/Documents/Details/DocumentDetailContainer';
import LogInContainer from './pages/LogIn/LogInContainer';
import NotFound from './pages/NotFound/NotFound';
import MainLayout from './components/Layout/MainLayout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/login" element={<LogInContainer />} />
          <Route
            path="/documents"
            element={
              <PrivateRoute>
                <DocumentsContainer />
              </PrivateRoute>
            }
          >
            <Route path=":id" element={<DocumentDetailContainer />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
