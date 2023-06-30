<template>
    <ion-page>
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button :default-href="backLink"></ion-back-button>
            </ion-buttons>
            
            <ion-title>{{pageTitle }}</ion-title>
          </ion-toolbar>
            
        </ion-header>
        <ion-content>
           <slot/>
        </ion-content>
    </ion-page>
    
</template>
<script>
import {IonPage, IonHeader, 
        IonTitle, IonContent,
        IonToolbar, IonBackButton,IonButtons
     } from "@ionic/vue";
export default{
    components:{
        IonPage, 
        IonHeader,
        IonTitle, 
        IonBackButton,
        IonButtons
     
    

    },
    props:['pageTitle','backLink']
}
</script>