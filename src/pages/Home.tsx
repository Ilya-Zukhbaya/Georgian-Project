import { useSelector } from 'react-redux';
import { EmptyCard } from '../components/EmptyCard/EmptyCard';
import { emptyCardInfo } from '../assets/EmptyCard';
import { RootState } from '../redux/store';
import { Quiz } from '../components/Quiz';
import i18n from '../i18n';
import { Footer } from '../components/Footer/Footer';

export const Home = () => {
  const { active } = useSelector((state: RootState) => state.quiz);

  return (
    <div>
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
