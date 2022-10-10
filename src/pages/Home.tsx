import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { useSelector } from 'react-redux';
import { EmptyCard } from '../components/EmptyCard/EmptyCard';
import { emptyCardInfo } from '../assets/EmptyCard';
import { RootState } from '../redux/store';
import { Quiz } from '../components/Quiz';

export const Home = () => {
  const { active } = useSelector((state: RootState) => state.quiz);

  return (
    <div>
      <Header />
      {active ? (
        <Quiz />
      ) : (
        <div className="main">
          {emptyCardInfo.map((_, i) => (
            <EmptyCard
              key={i}
              id={i}
              title={emptyCardInfo[i].title}
              subtitle={emptyCardInfo[i].subtitle}
              time={emptyCardInfo[i].time}
              numberOfQ={emptyCardInfo[i].numberOfQ}
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};
