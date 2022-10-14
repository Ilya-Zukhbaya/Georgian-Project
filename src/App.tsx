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
import { Favorities } from './pages/Favorities/Favorities';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { FavoritiesProvider } from './components/FavoritiesProvider';

function App() {
  const theme = useSelector((state: RootState) => state.theme.value);
  const { favorite, type } = useSelector((state: RootState) => state.card);
  const location = useLocation();
  const dispatch = useDispatch();

  localStorage.setItem('favorities', JSON.stringify(favorite));
  localStorage.setItem('choosenType', JSON.stringify(type));

  if (location.pathname === '/') {
    dispatch(setActive(false));
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="app">
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/card/:id" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/saved" element={<Favorities />} />
          <Route path="/saved/:id" element={<FavoritiesProvider />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
