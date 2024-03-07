
import './PopupMessage.css'
const PopupMessage = ({ message, visible,name}) => {
  
  return (
    <div className={`popup-message ${visible ? 'visible' : 'hidden'} ${name}`}>
      <p>{message}</p>
    </div>
  );
};

export default PopupMessage;