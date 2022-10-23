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
import { Favorities } from './pages/Header/Favorities/Favorities';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { FavoritiesProvider } from './components/FavoritiesProvider';
import { Progress } from './pages/Header/Progress/Progress';
import { Source } from './pages/Header/Source/Source';
import { Info } from './pages/Header/Info/Info';
import { About } from './pages/Footer/About/About';
import { Faq } from './pages/Footer/FAQ/Faq';
import { Support } from './pages/Footer/Support/Support';
import { NotFound } from './pages/NotFound';

function App() {
  const theme = useSelector((state: RootState) => state.theme.value);
  const { favorite, type, progress } = useSelector((state: RootState) => state.card);
  const location = useLocation();
  const dispatch = useDispatch();

  localStorage.setItem('favorities', JSON.stringify(favorite));
  localStorage.setItem('choosenType', JSON.stringify(type));
  localStorage.setItem('progress', JSON.stringify(progress));

  if (location.pathname === '/') {
    dispatch(setActive(false));
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card/:id" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/info" element={<Info />} />
          <Route path="/saved" element={<Favorities />} />
          <Route path="/source" element={<Source />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/saved/:id" element={<FavoritiesProvider />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
