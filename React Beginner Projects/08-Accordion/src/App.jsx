import React from 'react';
import Accordion from './components/Accordion';
import {accordionData} from './utils/accordionData';

const App = () => {
  return (
   <div className="accordion">
    {accordionData.map(({title,content}) => (
        <Accordion title={title} content={content} />
    ))}
   </div>
  )
}

export default App;