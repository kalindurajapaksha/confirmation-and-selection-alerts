import React, { useState } from "react";
import { IonButton } from "@ionic/react";

import SelectionAlert from "./components/SelectionAlert";
import ConfirmationAlert from "./components/ConfirmationAlert";

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <div>
      <div>
        <IonButton onClick={() => setShowModal(true)}>Select One</IonButton>

        <SelectionAlert
          showModal={showModal}
          onSetShowModal={setShowModal}
          onSelect={setSelectedOption}
        />
      </div>
      {selectedOption}

      <div>
        <IonButton onClick={() => setShowAlert(true)}>Confirm</IonButton>
        <ConfirmationAlert
          showAlert={showAlert}
          onShow={setShowAlert}
          onConfirm={setIsConfirmed}
        />
      </div>
      {String(isConfirmed)}
    </div>
  );
};

export default App;
