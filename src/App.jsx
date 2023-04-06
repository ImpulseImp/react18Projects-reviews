import { useState } from 'react';
import people from './data';
import {
  FaAffiliatetheme,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from 'react-icons/fa';
const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  console.log(name);

  const nextPerson = () => {
    setIndex((current) => {
      const newIndex = (current + 1) % people.length;
      console.log(newIndex);

      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((current) => {
      const newIndex = (current - 1 + people.length) % people.length;
      console.log(newIndex);

      return newIndex;
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber += 1;
    }
    setIndex(randomNumber % people.length);
  };
  return (
    <main>
      <h2>Reviews Starter</h2>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>

        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='btn btn-hip' onClick={randomPerson}>
          random person
        </button>
      </article>
    </main>
  );
};
export default App;
