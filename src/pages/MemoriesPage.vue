<template>
    <base-layout page-title="List all memories">
            <template v-slot:action-end>
                <ion-button router-link="/memory/add">
                    <ion-icon slot="icon-only" :icon="add"></ion-icon>
                </ion-button>
            </template>
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
import { add } from 'ionicons/icons'
import {IonList, IonItem, IonImg, IonThumbnail,IonLabel,IonButton,IonIcon} from "@ionic/vue";
export default{
    components:{
     
        IonList, 
        IonItem,
        IonImg,
        IonThumbnail,
        IonLabel,
        IonButton,
        IonIcon
    

    },
    computed:{
        memories(){
            //return this.$store.getters.memories
            return useMemoriesStore().memories;
        }
    },
    data(){
        return{
            add
        }
    }

    
}
</script>