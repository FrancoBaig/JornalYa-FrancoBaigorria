import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DocumentsContainer from './pages/Documents/DocumentsContainer';
import LogInContainer from './pages/LogIn/LogInContainer';
import NotFound from './pages/NotFound/NotFound';
import MainLayout from './components/Layout/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/login" element={<LogInContainer />} />
          <Route path="/documents" element={<DocumentsContainer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
