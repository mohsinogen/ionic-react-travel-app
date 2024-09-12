import {
  IonButton,
  IonContent,
  IonFooter,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import classes from "./Intro.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import "swiper/css";
import "@ionic/react/css/ionic-swiper.css";
import "swiper/css/pagination";

function Intro() {
  const router = useIonRouter();
  const [swiper, setSwiper] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideTo = (index: number) => {
    swiper.slideTo(index);
  };

  const slides = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661962542692-4fe7a4ad6b54?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Discover Your Next Adventure",
      caption:
        "Explore breathtaking destinations and create unforgettable memories. Your journey begins here!",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1697730334419-fba83fe143b7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Unwind and Relax",
      caption:
        "Find the perfect getaway tailored just for you. Escape the ordinary and embrace the extraordinary.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Experience the World Like Never Before",
      caption:
        "Dive into diverse cultures and hidden gems. Let us guide you to your dream destination.",
    },
  ];

  const handleNext = () => {
    if (currentSlide === slides.length - 1) {
      router.push("/login");
    } else {
      slideTo(currentSlide + 1);
    }
  };

  return (
    <IonPage>
      <IonContent>
        <div>
          <Swiper
            onSlideChange={(event) => {
              setCurrentSlide(event.activeIndex);
            }}
            onSwiper={setSwiper}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              type: "bullets",
              modifierClass:'intro-swiper-pagination-',
              bulletClass:'intro-swiper-bullet',
              bulletActiveClass: "intro-swiper-bullet-active",
            }}
          >
            {slides.map((item, index) => (
              <SwiperSlide
                style={{ height: "85vh" }}
                key={index}
                className="flex flex-col"
              >
                <img className={classes.sliderImage} src={item.image} />
                <div
                  style={{ flex: 1 }}
                  className="text-center flex justify-center flex-col ion-margin-horizontal"
                >
                  <IonText className="f-family-poppins font-bold text-3xl">
                    {item.heading}
                  </IonText>
                  <IonText color={"medium"}>{item.caption}</IonText>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar className="ion-no-padding">
          <IonButton
            onClick={handleNext}
            className="ion-margin"
            color={"primary"}
            expand="block"
            mode="ios"
          >
            {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
}

export default Intro;
