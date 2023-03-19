import { useEffect, useState } from 'react';
import diceLogo from '../assets/icon-dice.svg';
import AdviceSkeleton from './advice-skeleton';

type SlipType = {
  slip: {
    id: number;
    advice: string;
  };
};
const Advice = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [advice, setAdvice] = useState<SlipType>();
  const fetchAdvice = async () => {
    setIsLoading(true);
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <div className="after:content[] relative rounded-lg bg-dark-grayish-blue p-8 text-center text-light-cyan lg:w-1/3">
      {isLoading && <AdviceSkeleton />}
      {!isLoading && (
        <>
          <h1 className="mb-4 uppercase text-neon-green">{`Advice #${advice?.slip.id}`}</h1>
          <h2 className="text-[28px] before:content-['“'] after:content-['”']">
            {advice?.slip.advice}
          </h2>
        </>
      )}
      <div className="my-8 flex items-center">
        <hr className="flex-grow" />
        <div className="mx-2 h-4 rounded-sm border-x-4 border-light-cyan p-1" />
        <hr className="flex-grow" />
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={fetchAdvice}
          className="absolute -bottom-6 flex h-12 w-12 items-center justify-center rounded-full bg-neon-green hover:shadow-[0_0_40px_5px] hover:shadow-neon-green"
        >
          <span className="sr-only">Generate</span>
          <img alt="" src={diceLogo} />
        </button>
      </div>
    </div>
  );
};

export default Advice;
