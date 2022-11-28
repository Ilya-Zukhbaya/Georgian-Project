import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './theme';
import './scss/app.scss';
import { useSelector } from 'react-redux';
import type { RootState } from './redux/store';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Quiz } from './components/MemoQuiz';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  removeIncItems,
  removeItems,
  removeTestItems,
  setActive,
  setStep,
} from './redux/slices/quizSlice';
import { setDisable, setCorrectAns, removeIncorrectAns } from './redux/slices/cardSlice';
import { Result } from './pages/Result/Result';
import { Favorities } from './pages/Header/Favorities/Favorities';
import { Header } from './components/Header/Header';
import { FavoritiesProvider } from './components/FavoritiesProvider';
import { Progress } from './pages/Header/Progress/Progress';
import { Source } from './pages/Header/Source/Source';
import { Info } from './pages/Header/Info/Info';
import { About } from './pages/Footer/About/About';
import { Faq } from './pages/Footer/FAQ/Faq';
import { Support } from './pages/Footer/Support/Support';
import { NotFound } from './pages/NotFound';
import { Footer } from './components/Footer/Footer';
import { Memo } from './pages/Memo';
import { Prepo } from './pages/Prepo';
import { CardVariants } from './components/CardVariants';
import { PrepoQuiz } from './components/PrepoQuiz';
import { Imitation } from './pages/Imitation';
import { ImitQuiz } from './components/ImitQuiz';
import { ContQuiz } from './components/ContQuiz';

function App() {
  const theme = useSelector((state: RootState) => state.theme.value);
  const { favorite, type, progress } = useSelector((state: RootState) => state.card);
  const { active } = useSelector((state: RootState) => state.quiz);
  const location = useLocation();
  const loc = location.pathname;
  const dispatch = useDispatch();

  localStorage.setItem('favorities', JSON.stringify(favorite));
  localStorage.setItem('choosenType', JSON.stringify(type));
  localStorage.setItem('progress', JSON.stringify(progress));

  if (!loc.includes('/card') && !loc.includes('/result') && !loc.includes('/test/st') && active) {
    dispatch(setActive(false));
    dispatch(setCorrectAns(0));
    dispatch(removeIncorrectAns());
    dispatch(setStep(0));
    dispatch(setDisable(false));
    dispatch(removeTestItems([]));
    dispatch(removeItems([]));
    dispatch(removeIncItems([]));
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
          <Route path="/memo" element={<Memo />} />
          <Route path="/prepo" element={<Prepo />} />
          <Route path="/prepo/:title" element={<CardVariants />} />
          <Route path="/prepo/:title/card/:id" element={<PrepoQuiz />} />
          <Route path="/test" element={<Imitation />} />
          <Route path="/test/st" element={<ImitQuiz />} />
          <Route path="/continue/card/act" element={<ContQuiz />} />
        </Routes>
        {location.pathname.length > 1 ? '' : <Footer />}
      </div>
    </ThemeProvider>
  );
}

export default App;
