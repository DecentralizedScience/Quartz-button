import icon from './img/button1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="ACE4B48W7PW2N" />
        <input type="image" src={icon} style={{width:'150px'}} />
        <img alt="" border="0" src="https://www.paypal.com/en_ES/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </div>
  );
}

export default App;
