import {
  IonAvatar,
  IonBadge,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { checkmark, ellipsisVertical, search } from "ionicons/icons";
import React from "react";

function Message() {
  const chats = [
    {
      name: "Addison Harrison",
      lastMessage: "Let's meet at 10 pm today!",
      profileImage: "./assets/avatars/Avatar-1.png",
      isOnline: false,
      time: "03:22",
      bg: "#88bcf7",
    },
    {
      name: "Gavin Riley",
      lastMessage: "I'll call you in 5 minutes.",
      profileImage: "./assets/avatars/Avatar-2.png",
      isOnline: true,
      time: "10:15",
      bg: "#c7c7c7",
    },
    {
      name: "Floyd Gibson",
      lastMessage: "The mission is complete.",
      profileImage: "./assets/avatars/Avatar-3.png",
      isOnline: false,
      time: "09:20",
      bg: "#fba893",
    },
    {
      name: "Heidi Castro",
      lastMessage: "Be careful out there!",
      profileImage: "./assets/avatars/Avatar-4.png",
      isOnline: true,
      time: "11:05",
      bg: "#c7c7c7",
    },
    {
      name: "Hector Fletcher",
      lastMessage: "Can we reschedule the meeting?",
      profileImage: "./assets/avatars/Avatar-5.png",
      isOnline: false,
      time: "Yesterday",
      bg: "#9af4b2",
    },
    {
      name: "Melinda Wells",
      lastMessage: "See you at the training ground!",
      profileImage: "./assets/avatars/Avatar-6.png",
      isOnline: false,
      time: "Yesterday",
      bg: "#ea8188",
    },
  ];

  return (
    <IonPage>
      <IonHeader mode="md" className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="primary">
            <IonButton color={"primary"}>
              <IonIcon slot="icon-only" icon={ellipsisVertical}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Messages</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="ion-margin">
          <div className="input-box">
            <IonInput
              mode="ios"
              className="ml-2"
              placeholder="Search for chats & messages"
            >
              <IonIcon
                color="medium"
                size="large"
                slot="start"
                icon={search}
                aria-hidden="true"
              ></IonIcon>
            </IonInput>
          </div>
        </div>

        {chats.map((item) => (
          <IonRow className="ion-align-items-center" key={item.name}>
            <IonCol size="3" className="flex justify-center items-center">
              <IonAvatar style={{ background: item.bg }}>
                <img alt={item.name} src={item.profileImage} />
                <div className="h-3 w-3 rounded-full absolute bottom-2 right-4" style={{background:item.isOnline?'var(--ion-color-success)':'var(--ion-color-warning)'}}>
                  
                </div>
              </IonAvatar>
            </IonCol>

            <IonCol size="9">
              <div className="flex mr-3">
                <IonText className="font-semibold flex-1" color={"dark"}>{item.name}</IonText>
                <IonText color={"dark"}>{item.time}</IonText>
              </div>
              <div className="flex flex-col gap-2">
                <IonText color={"dark"}>{item.lastMessage}</IonText>
              </div>
            </IonCol>
          </IonRow>
        ))}
      </IonContent>
    </IonPage>
  );
}

export default Message;
