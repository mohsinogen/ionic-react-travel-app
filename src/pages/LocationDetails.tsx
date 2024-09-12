import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { bookmarkOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Places } from "../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "./LocationDetails.css";
function LocationDetails() {
  let params = useParams<{ id?: any }>();

  const [location, setLocation] = useState<any>(null);

  useEffect(() => {
    if (params.id !== null) {
      const result = Places.filter((item) => item.id === Number(params.id));
      setLocation(result[0]);
    }
  }, []);

  return (
    <IonPage>
      <IonHeader mode="md" className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/app/tab1"></IonBackButton>
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton color={"primary"}>
              <IonIcon slot="icon-only" icon={bookmarkOutline}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Details</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <Swiper
          className="w-[90%] rounded-xl bg-gray-300"
          modules={[Pagination]}
          pagination
          slidesPerView={1}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <SwiperSlide key={item}>
              <img
                className="object-cover"
                style={{ width: "100%", height: "350px" }}
                alt={location?.title}
                src={location?.images[0]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar className="ion-no-padding">
          <IonButton
            color={"primary"}
            expand="block"
            mode="ios" className="ion-margin"
          >
            Book Now
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
}

export default LocationDetails;
