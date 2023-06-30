<template>
    <base-layout page-title="List all memories">
       
            <ion-list>
                <ion-item v-for="memory in memories" 
                                :router-link="`/memories/${memory.id}`" 
                                :key="memory.id"
                                >
                    <ion-thumbnail slot="start"><ion-img :src="memory.image"></ion-img> </ion-thumbnail>
                    <ion-label>{{ memory.title }}</ion-label>           
                                
                </ion-item>
               
            </ion-list>
      
    </base-layout>
    
</template>
<script>
import { useMemoriesStore } from '@/store/index';
import {IonList, IonItem, IonImg, IonThumbnail,IonLabel} from "@ionic/vue";
export default{
    components:{
     
        IonList, 
        IonItem,
        IonImg,
        IonThumbnail,
        IonLabel
    

    },
    computed:{
        memories(){
            //return this.$store.getters.memories
            return useMemoriesStore().memories;
        }
    }

    
}
</script>