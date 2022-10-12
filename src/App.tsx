import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './theme';
import './scss/app.scss';
import { useSelector } from 'react-redux';
import type { RootState } from './redux/store';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Quiz } from './components/Quiz';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActive } from './redux/slices/quizSlice';
import { Result } from './pages/Result/Result';

function App() {
  const theme = useSelector((state: RootState) => state.theme.value);
  const location = useLocation();
  const dispatch = useDispatch();

  if (location.pathname === '/') {
    dispatch(setActive(false));
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="app">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/card/:id" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
