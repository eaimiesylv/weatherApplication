<template>
    <base-layout page-title="Add Memory">
      <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
         
            <ion-item>
                <ion-label position="floating">Title</ion-label>
                <ion-input type="text" required  v-model="title"/>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Img Url</ion-label>
                <ion-input type="text" required  v-model="image"/>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Description</ion-label>
                <ion-textarea rows="5" v-model="description"></ion-textarea> 
            </ion-item>
           
               
            
          
        </ion-list>
        <ion-button type="submit" expand="full">Save</ion-button> 
      </form>
    </base-layout>
    
</template>
<script>
import { useMemoriesStore } from '@/store/index';
import {IonList, IonItem, IonImg, IonThumbnail,IonLabel,IonInput,IonTextarea,IonButton} from "@ionic/vue";
export default{
    components:{
     
        IonList, 
        IonItem,
        IonImg,
        IonThumbnail,
        IonLabel,
        IonInput,
        IonTextarea,
        IonButton
    

    },
    data(){
        return{
            title:'',
            image:'',
            description:'',
        }
    },
    methods:{
        submitForm(){
          let record= { id:new Date().toISOString(),
                        description:this.description,
                        title:this.title,
                        image:this.image
                     }
            useMemoriesStore().addMemory(record);
            this.$router.replace('/memories')
            
        }
    },
    
    

    
}
</script>