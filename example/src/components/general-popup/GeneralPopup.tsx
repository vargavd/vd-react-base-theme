// react imports
import * as React from "react";

// style import
import "./GeneralPopup.scss";


const GeneralPopup: React.FC<{
  children: React.ReactNode,
  popupClassName?: string,
  width?: string,
  height?: string,
  onClose?: () => void
}> = ({
  children,
  popupClassName,
  width,
  height,
  onClose }) => {

    // HELPER FUNCS
    const getPopupStyles = () => {
      const popupStyles = [];

      if (width) {
        popupStyles.push({ width: width });
      }

      if (height) {
        popupStyles.push({ height: height });
      }

      return popupStyles.length ? Object.assign({}, ...popupStyles) : {};
    }

    return (
      <div
        className="overlay"
        onClick={(e) => (e.target === e.currentTarget && onClose) && onClose()}
      >
        <div
          className={"popup" + (popupClassName ? ` ${popupClassName}` : '')}
          style={getPopupStyles()}
        >
          <div className="popup-inner">
            <>
              {onClose && <button className="close-button" onClick={onClose}>X</button>}
              {children}
            </>
          </div>
        </div>
      </div>
    );
  };

export default GeneralPopup;
