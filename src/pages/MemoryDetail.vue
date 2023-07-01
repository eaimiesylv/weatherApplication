<template>
    <base-layout :page-title="loaded?loaded.title:'loading'" back-link="/memories">
            <ion-img :src="loaded.image"></ion-img>
            <ion-list>
                <ion-item v-if="!loaded">not loaded</ion-item>
                <ion-item v-else>{{ loaded.description }}</ion-item>
                
            </ion-list>
      
    </base-layout>
    
</template>
<script>
import { useMemoriesStore } from '@/store/index';
import {IonList, IonItem, IonImg} from "@ionic/vue";
export default{
    components:{
     
        IonList, 
        IonItem,
        IonImg
     },
     data(){
        return {
            memoryId:this.$route.params.id 
        };
     },
     computed:{
        loaded(){
            console.log(this.memoryId);
            return useMemoriesStore().memory(this.memoryId);
           
        }
     },
     /*watch:{
        $route(currentRoute){
            this.memoryId=currentRoute.params.id
        },
     }*/
}
</script>