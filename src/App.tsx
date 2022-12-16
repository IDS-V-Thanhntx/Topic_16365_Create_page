import { useMediaQuery } from 'react-responsive';
import Laptop from './compoments/laptop';
import Mobile from './compoments/mobile';


function App() {

  const isLaptop = useMediaQuery({ query: '(min-width: 1230px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1229px)' })
  return (
    <div>
    {isLaptop && <Laptop></Laptop>}
    {isTabletOrMobile && <Mobile></Mobile>}
    </div>
  );
}

export default App;
