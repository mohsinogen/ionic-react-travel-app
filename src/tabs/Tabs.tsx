import { IonButton, IonFabButton, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import React from 'react'
import { Redirect, Route } from 'react-router'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Message from '../pages/Message'
import { calendarOutline, chatbubbleEllipsesOutline, homeOutline, personOutline, searchOutline } from 'ionicons/icons'
import Calendar from '../pages/Calendar'

function Tabs() {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Redirect exact path="/app" to="/app/tab1" />
                <Route exact path="/app/tab1">
                    <Home />
                </Route>
                <Route exact path="/app/tab2">
                    <Calendar />
                </Route>
                <Route path="/app/tab3">
                    <Message />
                </Route>
                <Route path="/app/tab4">
                    <Profile />
                </Route>
                <Route exact path="/tabs">
                    <Redirect to="/tabs/tab1" />
                </Route>

            </IonRouterOutlet>

            <IonTabBar mode='ios' slot="bottom">
                <IonTabButton tab="tab1" href="/app/tab1">
                    <IonIcon icon={homeOutline} />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/app/tab2">
                    <IonIcon icon={calendarOutline} />
                    <IonLabel>Calendar</IonLabel>
                </IonTabButton>

                <IonTabButton className='ion-no-padding'>
                    <IonFabButton mode='ios'>
                        <IonIcon icon={searchOutline} />
                    </IonFabButton>
                </IonTabButton>

                <IonTabButton tab="tab3" href="/app/tab3">
                    <IonIcon icon={chatbubbleEllipsesOutline} />
                    <IonLabel>Messages</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab4" href="/app/tab4">
                    <IonIcon icon={personOutline} />
                    <IonLabel>Profile</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

export default Tabs
