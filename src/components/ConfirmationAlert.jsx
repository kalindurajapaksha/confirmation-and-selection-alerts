import { IonAlert } from "@ionic/react";

const ConfirmationAlert = ({ showAlert, onShow, onConfirm }) => {
  return (
    <div>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => onShow(false)}
        cssClass="my-custom-class"
        header={"Confirm!"}
        message={"Message <strong>text</strong>!!!"}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              onConfirm(false);
            },
          },
          {
            text: "Okay",
            handler: () => {
              onConfirm(true);
            },
          },
        ]}
      />
    </div>
  );
};

export default ConfirmationAlert;
