import logo from './logo.svg';
import './components/Card/Card.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import data from './data';

function App() {
  const cardData = data.map((item) => {
    return <Card 
    // react-jsx-dev-runtime.development.js:89 Warning: Each child in a list should have a unique "key" prop.   
                 key={item.id} 
                 item={item}
             />
  })
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className='cards--list'>
        {cardData}
      </div>
    </div>
  );
}

export default App;
