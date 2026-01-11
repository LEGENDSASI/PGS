import { useLocation } from 'react-router-dom';
import icon from '../assets/icon2.png';

const WhatsAppButton = () => {
  const location = useLocation();
  
  const getPhoneNumber = () => {
    if (location.pathname === '/pgs-stays' || location.pathname.includes('/pgs-stays')) {
      return "916374786705";
    } else if (location.pathname === '/pgs-holidays' || location.pathname.includes('/pgs-holidays')) {
      return "918072008376";
    } else if (location.pathname === '/pgs-events' || location.pathname.includes('/pgs-events')) {
      return "918072008376";
    }
    return "918072008376";
  };

  const getMessage = () => {
    if (location.pathname === '/pgs-stays' || location.pathname.includes('/pgs-stays')) {
      return "Hi, I want to know more about PGS Stays accommodation in Pondicherry.";
    } else if (location.pathname === '/pgs-holidays' || location.pathname.includes('/pgs-holidays')) {
      return "Hi, I want to know more about PGS Holidays travel packages.";
    } else if (location.pathname === '/pgs-events' || location.pathname.includes('/pgs-events')) {
      return "Hi, I want to know more about PGS Events planning services.";
    }
    return "Hi, I want to know more about your services.";
  };

  const phoneNumber = getPhoneNumber();
  const message = getMessage();
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <img src={icon} alt="" className='w-20' />
    </a>
  );
};

export default WhatsAppButton;