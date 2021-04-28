import { IonSelect, IonSelectOption, IonModal, IonButton } from "@ionic/react";
import { useState } from "react";

const SelectionAlert = ({ showModal, onSelect, onSetShowModal }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <IonModal isOpen={showModal} onDidDismiss={() => onSetShowModal(false)}>
        <IonSelect
          id="ionSelect"
          placeHolder={"Select One"}
          interface="popover"
          onIonChange={(e) => setValue(e.detail.value)}
        >
          <IonSelectOption value="fixed">Fixed</IonSelectOption>
          <IonSelectOption value="tentative">Tentative</IonSelectOption>
        </IonSelect>

        <IonButton
          onClick={() => {
            onSetShowModal(false);
            onSelect("");
          }}
        >
          Cancel
        </IonButton>
        <IonButton
          onClick={() => {
            onSetShowModal(false);
            onSelect(value);
          }}
        >
          Submit
        </IonButton>
      </IonModal>
    </div>
  );
};

export default SelectionAlert;
