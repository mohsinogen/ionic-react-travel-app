import React, { useEffect } from 'react';
import { IonContent, IonPage, IonText, useIonRouter } from '@ionic/react';
import classes from "./Splash.module.css";

function Splash() {

    const router = useIonRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/intro','forward','replace')
        }, 1000)
    },[])

  return (
    <IonPage>
        <IonContent>
            <div className={classes.main}>
                <img className={classes.scale} alt='logo' src='./assets/images/logo.svg' />
                <br />
                <br />
                <br />
                <IonText color={'light'} className={`text-3xl f-family-poppins font-extrabold ${classes.scale}`}>
                    Travel Mate
                </IonText>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Splash
