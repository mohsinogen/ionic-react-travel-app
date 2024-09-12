import { IonBackButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonPage, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

function Search() {

    const places = [
        {
            image: 'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=1328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Some Place In India',
            rating: '4.3'
        }
    ]

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home/tab1"></IonBackButton>
                    </IonButtons>
                    <IonSearchbar style={{ '--box-shadow': 'none' }} mode="md" autoFocus placeholder='Search Place, Hotel'></IonSearchbar>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                
            </IonContent>
        </IonPage>
    )
}

export default Search
