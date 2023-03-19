import { useState } from 'react';
import Advice from './components/advice';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-dark-blue">
      <Advice />
    </main>
  );
}

export default App;
