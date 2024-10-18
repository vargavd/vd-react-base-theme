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

const ImportLocationsPopup = () => {
  const [importStarted, setImportStarted] = useState(false);
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
    let allSuccess = true;

    for (const locationInfo of locationInfos) {
      const result = await importLocation(locationInfo);

      if (!result) {
        allSuccess = false;
        break;
      }
    }

    if (allSuccess) {
      setMessages((messages) => [
        ...messages,
        { text: `${locationInfos.length} number of locations are imported successfully..`, state: 'SUCCESS' },
        { text: 'Map reload in .... 3', state: 'WARNING' },
      ]);

      let count = 3;
      let reloadIntervalId = setInterval(() => {
        count -= 1;

        if (count === 0) {
          clearInterval(reloadIntervalId);
          location.reload();
        }

        setMessages((messages) => [
          ...messages.slice(0, messages.length - 1),
          { text: `Map reload in .... ${count}`, state: 'WARNING' },
        ]);
      }, 1000);
    }
  };

  useEffect(() => {
    if (importStarted) {
      importLocations();
    }
  }, [importStarted]);

  return (
    <div className="overlay">
      <div className="popup">
        <div className="popup-inner">
          {importStarted && (
            <div className="message-list">
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
          )}
          {!importStarted && (
            <>
              <p>There are no locations in WordPress.</p>
              <p>
                <button
                  className="import-button"
                  onClick={() => setImportStarted(true)}
                >
                  Import Sample Data
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImportLocationsPopup;
