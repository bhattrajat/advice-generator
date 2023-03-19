import { useState } from 'react';
import Advice from './components/advice';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-dark-grayish-blue">
      <Advice />
    </div>
  );
}

export default App;
