import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { useSelector } from 'react-redux';
import { EmptyCard } from '../components/EmptyCard/EmptyCard';
import { emptyCardInfo } from '../assets/EmptyCard';
import { RootState } from '../redux/store';
import { Quiz } from '../components/Quiz';
import i18n from '../i18n';

export const Home = () => {
  const { active } = useSelector((state: RootState) => state.quiz);

  return (
    <div>
      <Header />
      {active ? (
        <Quiz />
      ) : (
        <div className="main">
          {emptyCardInfo
            .filter((obj) => obj.lng === i18n.resolvedLanguage)
            .map((obj, i) => (
              <EmptyCard key={i} {...obj} />
            ))}
        </div>
      )}
      <Footer />
    </div>
  );
};
