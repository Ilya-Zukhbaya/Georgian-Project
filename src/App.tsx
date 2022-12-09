import React from 'react';
import './scss/app.scss';

import * as Page from './pages/index';
import * as Comp from './components/index';
import * as Quiz from './redux/slices/quizSlice';
import * as Card from './redux/slices/cardSlice';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './theme';

import { Route, Routes, useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { selectCard, selectQuiz, selectTheme, useAppDispatch } from './redux/store';

const App: React.FC = () => {
  const { theme } = useSelector(selectTheme);
  const { favorite, type, progress } = useSelector(selectCard);
  const { active } = useSelector(selectQuiz);

  const dispatch = useAppDispatch();
  const location = useLocation();

  const loc = location.pathname;

  localStorage.setItem('favorities', JSON.stringify(favorite));
  localStorage.setItem('choosenType', JSON.stringify(type));
  localStorage.setItem('progress', JSON.stringify(progress));

  if (!loc.includes('/card') && !loc.includes('/result') && !loc.includes('/test/st') && active) {
    dispatch(Quiz.setActive(false));

    dispatch(Quiz.removeTestItems([]));
    dispatch(Quiz.removeItems([]));
    dispatch(Quiz.removeIncItems([]));

    dispatch(Quiz.setStep(0));

    dispatch(Card.setDisable(false));
    dispatch(Card.setCorrectAns(0));
    dispatch(Card.removeIncorrectAns());
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="app">
        <Comp.Header />
        <Routes>
          <Route path="/" element={<Page.Home />} />
          <Route path="/card/:id" element={<Comp.MemoQuiz />} />
          <Route path="/result" element={<Page.Result />} />
          <Route path="/progress" element={<Page.Progress />} />
          <Route path="/info" element={<Page.Info />} />
          <Route path="/saved" element={<Page.Favorities />} />
          <Route path="/source" element={<Page.Source />} />
          <Route path="/faq" element={<Page.Faq />} />
          <Route path="/about" element={<Page.About />} />
          <Route path="/support" element={<Page.Support />} />
          <Route path="/saved/:id" element={<Comp.FavoritiesProvider />} />
          <Route path="*" element={<Page.NotFound />} />
          <Route path="/memo" element={<Page.Memo />} />
          <Route path="/prepo" element={<Page.Prepo />} />
          <Route path="/prepo/:title" element={<Comp.CardVariants />} />
          <Route path="/prepo/:title/card/:id" element={<Comp.PrepoQuiz />} />
          <Route path="/test" element={<Page.Imitation />} />
          <Route path="/test/st" element={<Comp.ImitQuiz />} />
          <Route path="/continue/card/act" element={<Comp.ContQuiz />} />
        </Routes>
        {loc.length > 1 ? '' : <Comp.Footer />}
      </div>
    </ThemeProvider>
  );
};

export default App;
