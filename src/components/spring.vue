<template>
    <div>
        <section class="content scection">
            <div class="main">
                <div class="outer outer-1">
                    <div class="drop-zone list-1"
                        @drop="onDrop($event, 1)"
                        @dragover.prevent  
                        @dragenter.prevent
                        :class="{isAvailable:!load}">
                        <h1>{{title_1}}</h1>
                        <p>{{msg_1}}</p>
                            <div class="drag-el drag-el-1" 
                                v-for="(item, index) in l1" :key="item.id"
                                draggable  @dragstart="startDrag($event, item)"
                                @click.prevent="act(item.id)"
                                :class="{
                                    isActive:item.isActive}"                                
                            >
                            <p>{{item.cost}} {{item.title }}</p>                                
                                <span class="moveBtn">
                                    <button v-if="item.isActive" type="button"
                                        @click.prevent="item.list=2"
                                        >Move
                                    </button>
                                </span>
                        </div>
                    </div>
                    <img class="list_clip list-clip-1" src="/images/list_clip.png" alt="" loading="lazy"/>
                </div>
                <div class="outer outer-2">
                    <div class="drop-zone list-2"
                        @drop="onDrop($event, 2)"
                        @dragover.prevent  
                        @dragenter.prevent>
                        <h2>{{title_2}}</h2>
                        <p>{{msg_2}}</p>
                        <div class="drag-el drag-el-2" 
                            v-for="(item, index) in l2" :key="item.id"
                            draggable  @dragstart="startDrag($event, item)"
                            @click.prevent="act(item.id)"
                            :class="{isActive:item.isActive}"
                        >
                        <p>{{item.cost}} {{item.title }}</p> 
                            <span class="moveBtn">
                                <button v-if="item.isActive" type="button"
                                    @click.prevent="item.list=1"
                                    >Move
                                </button>
                            </span>
                        </div>
                    </div> 
                    <img class="list_clip list-clip-2" src="/images/list_clip.png" alt="" loading="lazy"/>                   
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
    import {ref, computed} from "vue"
    const props = defineProps({
        title_1:String,
        title_2:String,
        msg_1:String,
        msg_2:String,
        backlog_list:Array,
    });
    const arr=ref([...props.backlog_list]);
    const l1= computed(
        ()=>{return arr.value.filter(e=>e.list===1)}
    );
    const l2=computed(
        ()=>{return arr.value.filter(e=>e.list===2)}
    );
    const load=computed(
        ()=>{
            const work=arr.value.filter(e=>e.list===1)
            const time_sum = work.reduce((acc,cur)=>acc+cur.cost,0)
            if (time_sum<20){return true}
            else
            {return false}
        }
    )    
    const startDrag=(evt, item)=> {
        evt.dataTransfer.dropEffect = 'move';
        evt.dataTransfer.effectAllowed = 'move';
        evt.dataTransfer.setData('itemID', item.id) 
    };    
    const onDrop=(evt, list)=> {
        const itemID = evt.dataTransfer.getData('itemID');      
        const item = arr.value.find((item) => item.id == itemID);      
        item.list = list    
    };
    const act = (id)=>{
        arr.value.map(e=>e.isActive=false);
        const item=arr.value.find(e=>e.id===id);
        item.isActive=true;
    };

</script>
<style scoped lang="scss">
    section {
        text-align: center;
        .main  {
            min-height: 17em;
            /* max-height:19em; */
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-template-rows: repeat(12,1fr);
            .outer-1 {
                grid-column: 1/2;
                grid-row: 1/12;
            }
            .outer-2 {
                grid-column: 2/3;
                grid-row: 1/12;
            }

            .outer {
                display: grid;
                grid-template-columns: repeat(3,1fr);
                grid-template-rows: repeat(3,1fr);
            }
            .drop-zone {  
                grid-column: 1/4;
                grid-row: 1/4;
                margin-top: 2em;
                padding:1rem;
                border-radius: 8px;
                font-size: x-small;
                color:black;
            }
            .list_clip {
                width:3em;
                grid-column: 2/3;
                grid-row: 1/2;
            }
            .list-1 {
                border: 0.8em solid #527275;
                border-radius: 15px;
                opacity: 0.7;
            }
            .list-2 {
                border: 0.8em solid #de6e46;
                border-radius: 15px;
                opacity: 0.7;
            }
            .list-clip-1 {

            }   
            .list-clip-2 {
                
            }
            .drag-el {  
                border: 0.3em solid #DE6E46;
                background-color: white;  
                margin-bottom: 1em;  
                padding: 0.5em;
                max-height: 1.5em;
                overflow-y: auto;
                opacity: 1;
            }
            .drag-el-1 {
                border: 0.1em solid black;
                border-radius: 3px;
            }
            .drag-el-2 {
                border: 0.1em dashed gray;
                border-radius: 3px;
            }
            .isActive {
                .moveBtn {
                    button {
                        background-color: aliceblue;
                        border: 1px solid #808080;
                        border-radius: 5px;
                        margin:1px;
                        padding:1px;
                    }               
                }
            }
            .isAvailable {
                border: 0.3em solid gray;
                background-color: gray;
                color: red;
            }
        }
    }
</style>