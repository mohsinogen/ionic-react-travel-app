import {
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonInputPasswordToggle,
    IonPage,
    IonText,
    IonToolbar,
    useIonRouter,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import React from "react";

function SignUp() {
    const router = useIonRouter();

    return (
        <IonPage>
            <IonHeader className="ion-no-border">
                <IonToolbar>
                    <IonButton
                        color={"tertiary"}
                        className="ion-margin"
                        routerLink="/login"
                        routerDirection="back"
                        shape="round"
                        mode="ios"
                        size="large"
                    >
                        <IonIcon slot="icon-only" icon={chevronBack}></IonIcon>
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="flex flex-col">
                    <div className="flex flex-col text-center ">
                        <IonText className="font-bold text-2xl">Sign in now</IonText>
                        <IonText className="text-sm mt-2" color={"medium"}>
                            Please fill the details and create account
                        </IonText>
                    </div>

                    <div className="ion-margin ion-padding">
                        <div className="input-box">
                            <IonInput
                                type="email"
                                placeholder="Enter your Email"
                                mode="ios"
                            />
                        </div>
                        <div className="input-box mt-7">
                            <IonInput placeholder="Enter your Password" mode="ios">
                                <IonInputPasswordToggle
                                    color={"medium"}
                                    slot="end"
                                ></IonInputPasswordToggle>
                            </IonInput>
                        </div>
                        <div className="input-box mt-7">
                            <IonInput placeholder="Re Enter your Password" mode="ios">
                                <IonInputPasswordToggle
                                    color={"medium"}
                                    slot="end"
                                ></IonInputPasswordToggle>
                            </IonInput>
                        </div>
                        <div className="flex justify-end mt-3">
                            <IonText color={"warning"} className="font-semibold text-sm">
                                Forget Password?
                            </IonText>
                        </div>

                        <IonButton expand="block" mode="ios" className="mt-7">
                            Sign In
                        </IonButton>

                        <div className="mt-5 text-center">
                            <IonText color={"medium"} className="text-sm">
                                Already have an account?{" "}
                                <IonText
                                    onClick={() => router.goBack()}
                                    className="font-semibold"
                                    color={"warning"}
                                >
                                    Sign In
                                </IonText>
                            </IonText>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default SignUp;
