import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DocumentsContainer from './pages/Documents/DocumentsContainer';
import LogInContainer from './pages/LogIn/LogInContainer';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogInContainer />} />
        <Route path="/documents" element={<DocumentsContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
