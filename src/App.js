

import './App.css';
import Heading from './Heading';
import Card from './Card';
import Btn from './Cart'
import PromoHeading from './PromoHeading';
import RegisterForm from './Input';

function App() {
  const data ={
    heading:"90% off for all sale" ,
    callToAction:"grab yours now!!!!"
  }
  return (
<div className="App"> 
      
      <Heading firstName="Bob" secondName="Ayobami says Hello" listName="michael akande"  /> 
    <Card h2="first's card h2" h3="first's card h3" />
    <Card h2="second's card h2" h3="second's card h3" />
    <Card h2="third's card h2" h3="third's card h3" />
   < Btn />
 <PromoHeading heading={data.heading} calltoAction={data.callToAction} />
 <RegisterForm />
 <Card  
      msg="I passed through the Header and the Wrapper and I reached the Button component"  
    /> 
    </div> 
  );
}

export default App;
