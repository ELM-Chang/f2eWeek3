<template>
    <div>
        <section class="set-grid">
            <div class="content">
                <div>
                    <h1>{{title_1}}</h1>
                    <p>{{msg_1}}</p>
                </div>
            </div>
            <div class="nav_btn">
                <nav_btn :title_1="title_2" @press="connect"></nav_btn>
            </div>
        </section>
    </div>
</template>
<script setup>
import nav_btn from "@c/nav_btn.vue"
const props = defineProps({
    title_1:String,
    title_2:String,
    msg_1:String,
    });
const emits = defineEmits(["press"])
const connect=()=>{
    emits("press")
}
</script>
<style scoped lang="scss">
    section {
        border-radius: 20px;
        background-color: white;
        .content {
            max-height: 5em;
            overflow-y: auto;
        }
    }
    .set-grid {
        display:grid;
        grid-template-columns: repeat(6,1fr);
        grid-template-rows: repeat(6,1fr);
    }
    .content {
        font-size: x-small;
        grid-column: 2/6;
        grid-row: 2/6;
    }
    .nav_btn {
        grid-column: 5/7;
        grid-row: 6/7;
    }

</style>