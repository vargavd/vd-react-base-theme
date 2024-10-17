// react imports
import { useState, useEffect } from "react";

// misc imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

// style import
import "./ImportLocationsPopup.scss";

// data import
import { LocationInfo, locationInfos } from "../../data";

type MessageType = 'SUCCESS' | 'PENDING' | 'WARNING' | 'ERROR';

type Message = {
  text: string,
  state: MessageType
};

const ImportLocationsPopup = ({ onClose }: { onClose: () => void }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  // helper funcs
  const addToLastMessage = (state: MessageType, text?: string | string[]) => {
    setMessages(messages => {
      const newMessages = [...messages];

      newMessages[newMessages.length - 1].state = state;
      newMessages[newMessages.length - 1].text += ` - ${state}` + (text ? `: ${text}` : '');

      return newMessages;
    });
  };
  const importLocation = async (locationInfo: LocationInfo) => {
    setMessages((messages) => [
      ...messages,
      { text: `Importing ${locationInfo.title}...`, state: 'PENDING' },
    ]);

    const res = await fetch(`${location.origin}/wp-json/vd-react-base-theme/v1/import-location`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ location: locationInfo }),
    });

    const data = await res.json();

    if (!res.ok) {
      addToLastMessage('ERROR', data.message || res.statusText);
      console.error('result:', res);
      console.error('data:', data);
      return false;
    }

    if (data.message) {
      addToLastMessage('WARNING', (`: ${data.message}`));

      return data;
    }

    addToLastMessage('SUCCESS');
    return data;
  };
  const importLocations = async () => {
    for (const locationInfo of locationInfos) {
      const result = await importLocation(locationInfo);

      if (!result) {
        break;
      }
    }
  };

  useEffect(() => {
    importLocations();
  }, []);

  return (
    <div className="overlay">
      <div className="popup">
        <button
          className="close-button"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="popup-inner">
          {messages.map((message, index) => (
            <div
              className={`message ${message.state.toLowerCase()}`}
              key={index}
            >
              {message.text}

              {message.state === 'PENDING' && (
                <FontAwesomeIcon
                  style={{ position: 'relative', top: '4px', marginLeft: '5px' }}
                  icon={faSpinner}
                  spin
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportLocationsPopup;
