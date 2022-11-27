<template>
    <div class="nav_btn" @click="press">
        <button>
            {{title_1}}
        </button>
    </div>
</template>
<script setup>
    import {ref} from 'vue'
    const emits = defineEmits(["press"])
    const props = defineProps({
        title_1:String,
    })
    const pid=ref(0)
    const press=()=>{
        emits("press")
    }
</script>
<style scoped lang="scss">
    .nav_btn {
        display: grid;
        grid-template-columns: repeat(6,1fr);
        grid-template-rows: repeat(1,1fr);
        button {
            font-size: x-small;
            background-color: #ACD271;
            border: 0.1em solid #ACD271;
            border-radius: 20px;
            padding:0.1em;
            grid-column: 1/7;
            max-height: 2.5em;
            overflow-y: auto;
        }
        button:hover {
            background-color:  #FFB464;
        }
    }
</style>