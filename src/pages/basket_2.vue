<template>
    <div class="basket">
        <div class="box-img bg-img">
            <img class="bg-img-in" src="/images/bg.jpg" alt="" loading="lazy"/>
        </div>
        <div class="box-img corner-img">
            <img class="corner-img-in" src="/images/title.svg" alt="" loading="lazy"/>
        </div>
        <div class="decoration">
            <component :is="deco" ></component>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
    // import decoration_4 from "@c/decoration_4.vue"
    import {ref, defineAsyncComponent, onMounted} from 'vue'
    const props = defineProps({
    decoration:String
    });
    onMounted(()=>{
        deco.value=decoList[props.decoration]
    })
    const deco=ref({})
    const decoList={
        d1:defineAsyncComponent(()=>import("@/components/decoration_1.vue")),
        d2:defineAsyncComponent(()=>import("@/components/decoration_2.vue")),
        d3:defineAsyncComponent(()=>import("@/components/decoration_3.vue")),
        d4:defineAsyncComponent(()=>import("@/components/decoration_4.vue")),
    }
    // const getDeco=computed(()=>
    //     props.decoration
    // )

    // const deco=ref(defineAsyncComponent(()=>import("@/pages/`$(decoName)`.vue")))
</script>
<style scoped lang="scss">
    .basket {
        .box-img {
            .bg-img-in {
                width:100%;
            }
            .corner-img-in {
                width:100%;
            }
        }
        .content {
            overflow: auto;
        }
    }
    .basket {
        display: grid;
        grid-template-columns: repeat(12,1fr);
        grid-template-rows: repeat(12,1fr);
    }
    .bg-img {
        grid-column: 1/13;
        grid-row: 1/13;
    }
    .corner-img {
        grid-column: 2/4;
        grid-row: 2/4;
    }
    .decoration {
        grid-column: 1/13;
        grid-row: 1/13;
    }
    .content {
        grid-column: 4/10;
        grid-row: 3/13;
    }
</style>