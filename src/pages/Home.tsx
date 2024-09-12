import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { Places } from "../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "@ionic/react/css/ionic-swiper.css";
import {
  chevronForward,
  locationOutline,
  map,
  navigate,
  notifications,
  notificationsOutline,
  paperPlane,
  star,
  trendingUp,
} from "ionicons/icons";
const Home: React.FC = () => {
  const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader mode="md" className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="primary">
            <IonButton color={"primary"}>
              <IonIcon slot="icon-only" icon={notificationsOutline}></IonIcon>
              <div
                className="h-2 w-2 rounded-full absolute top-0 right-0"
                style={{ background: "var(--ion-color-warning)" }}
              ></div>
            </IonButton>
          </IonButtons>
          <IonTitle
            color={"dark"}
            className="f-family-poppins font-bold ion-no-padding ml-4"
          >
            Welcome
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollY={true}>
        <div className="flex items-center justify-start">
          <div className="flex flex-col my-3 mx-5 text-2xl">
            <IonText>Plan your next</IonText>
            <IonText
              color={"warning"}
              className="font-extrabold text-3xl f-family-poppins"
            >
              Vacation!
            </IonText>
          </div>
          <IonIcon className="text-5xl" color="warning" icon={paperPlane} />
        </div>

        <div className="flex items-center justify-between mx-4 mt-3 mb-2">
          <IonText color={"dark"} className="text-xl font-semibold">
            Trending Places <IonIcon icon={trendingUp} color="dark" />
          </IonText>
          <IonText color={"primary"} className="font-semibold text-sm">
            View All
          </IonText>
        </div>
        <Swiper
          slidesPerView={1.5}
          centeredSlides
          centeredSlidesBounds
          slidesOffsetBefore={15}
        >
          {Places.slice(4, 7).map((item) => (
            <SwiperSlide key={item.title}>
              <IonCard
                onClick={() => router.push(`/location-details/${item.id}`)}
                mode="ios"
                className="rounded-3xl ion-no-margin m-1 mb-4"
              >
                <IonCardContent>
                  <img
                    className="rounded-2xl object-cover"
                    style={{ width: "200px", height: "200px" }}
                    alt={item.title}
                    src={item.images[0]}
                  />
                  <div className="mt-3 flex justify-between">
                    <IonText color={"dark"} className="font-bold truncate">
                      {item.title}
                    </IonText>
                    <div>
                      <IonIcon icon={star} color="warning" /> {item.rating} (
                      {item.reviews})
                    </div>
                  </div>
                  <div className="mt-3 flex justify-start gap-1">
                    <IonIcon icon={locationOutline} color="medium" />
                    <IonText color={"dark"} className="text-left truncate">
                      {item.location}
                    </IonText>
                  </div>
                </IonCardContent>
              </IonCard>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-between mx-4 mt-3 mb-2">
          <IonText color={"dark"} className="text-xl font-semibold">
            Other Destinations
          </IonText>
          <IonText color={"primary"} className="font-semibold text-sm">
            View All
          </IonText>
        </div>

        {Places.map((item) => (
          <IonCard mode="ios" className="rounded-2xl p-2" key={item.title}>
            <IonRow className="ion-align-items-center ion-justify-between">
              <IonCol size="4.5">
                <img
                  className="h-24 w-24 object-cover rounded-2xl"
                  src={item.images[0]}
                />
              </IonCol>
              <IonCol>
                <div className="flex flex-col items-start gap-1">
                  <IonText color={"dark"} className="font-semibold text-lg">
                    {item.title}
                  </IonText>
                  <IonText className="text-sm">
                    <IonIcon
                      icon={locationOutline}
                      className="mr-1 truncate text-nowrap"
                    />
                    {item.location}
                  </IonText>
                </div>
                <div className="mt-3 flex justify-start gap-1 items-center">
                  <IonIcon icon={star} color="warning" /> {item.rating} (
                  {item.reviews})
                </div>
              </IonCol>
              <IonCol size="1.5">
                <IonIcon
                  className="text-gray-400"
                  size="large"
                  icon={chevronForward}
                />
              </IonCol>
            </IonRow>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Home;
