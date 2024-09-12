import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonHeader,
  IonIcon,
  IonModal,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Places } from "../utils/data";
import { calendarOutline, chevronForward, locationOutline } from "ionicons/icons";
import { getFormattedDate } from "../utils/helper";

function Calendar() {
  return (
    <IonPage>
      <IonHeader mode="md" className="ion-no-border">
        <IonToolbar>
          <IonTitle color={"dark"}>My Schedules</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="flex items-center justify-between mx-4">
        <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
        <IonText className="font-semibold text-sm" color={'primary'}>View All</IonText>
        </div>

        <IonModal keepContentsMounted={true}>
          <IonDatetime presentation="date" id="datetime" onIonChange={(date:any)=> console.log(date)
          }></IonDatetime>
        </IonModal>

        {Places.map((item)=>(
            <IonCard mode='ios' className="rounded-2xl p-2" key={item.title}>
                <IonRow className="ion-align-items-center ion-justify-between">
                    <IonCol size='4.5'>
                        <img className="h-24 w-24 object-cover rounded-2xl" src={item.images[0]} />
                    </IonCol>
                    <IonCol>
                        <div className="flex flex-col items-start gap-1">
                            <IonText className="text-sm"><IonIcon icon={calendarOutline} className="mr-1" />{getFormattedDate()}</IonText>
                            <IonText color={'dark'} className="font-semibold text-lg">{item.title}</IonText>
                            <IonText className="text-sm"><IonIcon icon={locationOutline} className="mr-1" />{item.location}</IonText>
                        </div>
                    </IonCol>
                    <IonCol size='1.5'>
                        <IonIcon className="text-gray-400" size='large' icon={chevronForward} />
                    </IonCol>
                </IonRow>
            </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
}

export default Calendar;
