import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { bookmarkOutline, informationCircleOutline, informationOutline, listCircle, pencilOutline, personOutline, settingsOutline } from "ionicons/icons";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader mode="md" className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="primary">
            <IonButton color={'primary'}>
              <IonIcon slot="icon-only" icon={pencilOutline}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="flex flex-col items-center">
          <img
            className="w-36 rounded-full bg-gray-300"
            alt="profile image"
            src={"./assets/avatars/me.png"}
          />
          <IonText className="font-bold text-xl mt-3">
            Jonathan Gutierrez
          </IonText>
          <IonText color={'medium'} className="stext-md mt-1">
            jonathan.gutierrez@example.com
          </IonText>
        </div>

        <IonList inset={true}>
          <IonItem button={true}>
            <IonIcon color="medium" slot="start" icon={personOutline} size="large"></IonIcon>
            <IonLabel>Profile</IonLabel>
          </IonItem>
          <IonItem button={true}>
            <IonIcon color="medium" slot="start" icon={bookmarkOutline} size="large"></IonIcon>
            <IonLabel>Bookmarked</IonLabel>
          </IonItem>
          <IonItem button={true}>
            <IonIcon color="medium" slot="start" icon={settingsOutline} size="large"></IonIcon>
            <IonLabel>Settings</IonLabel>
          </IonItem>
          <IonItem button={true}>
            <IonIcon color="medium" slot="start" icon={informationCircleOutline} size="large"></IonIcon>
            <IonLabel>Version</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
