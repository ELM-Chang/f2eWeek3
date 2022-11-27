<template>
    <div>
        <article class="background">
            <component 
            :is="getPage.basket" 
            :decoration="getPage.decoration"
            class="basket">
                <div class="content">
                    <component 
                        v-for="(comp, index) in getPage.comp"
                        :key="index"
                        v-bind="comp"
                        :is="comp.id" 
                        :title_1="comp.title_1" 
                        :title_2="comp.title_2" 
                        :msg_1="comp.msg_1"
                        :msg_2="comp.msg_2"
                        :backlog_list="comp.backlog_list"
                        @click.prevent="goToPage(0)"
                        >
                    </component>
                </div>
            </component>
        </article>
    </div>
</template>
<script setup>
// import basket_1 from "@/pages/basket_1.vue"
// import basket_2 from "@/pages/basket_2.vue"
import spring from "@c/spring.vue"
import content from "@c/content.vue"
import nav_btn from "@c/nav_btn.vue"
import {ref, defineAsyncComponent, computed, onMounted} from 'vue'
const getPage=computed(()=>{
    return pages[page.value]
})
const goToPage=(id)=>{
    page.value++
    if (page.value>6) page.value=0
    return page
}
const page=ref(0)
// const pid=ref(0)
// onMounted(() => {
//     pid.value=localStorage.getItem("pageNum")
//     return pid
// })
const pages =[
    {
        id:1,
        basket:defineAsyncComponent(()=>import("@/pages/basket_1.vue")),
        decoration:"d1",
        comp:[{
            id:nav_btn,
            title_1:"進入村莊",
            title_2:"",
            msg_1:"",
            msg_2:"",
            backlog_list:[]
        }
        ],
    },
    {
        id:2,
        basket:defineAsyncComponent(()=>import("@/pages/basket_2.vue")),
        decoration:"d2",
        comp:[{
            id:content,
            title_1:"哈囉~歡迎進入「SCRUM 新手村」",
            title_2:"接受挑戰",
            msg_1:"在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！ 請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧～～",
            msg_2:"",
            backlog_list:[]
        },
        ],
    },
    {
        id:3,
        basket:defineAsyncComponent(()=>import("@/pages/basket_2.vue")),
        decoration:"d3",
        comp:[{
            id:content,
            title_1:"我是喵喵村的 PO。",
            title_2:"我想先往前走！",
            msg_1:"PO 也就是產品負責人（Product Owner），產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單（Product Backlog）唷！",
            msg_2:"",
            backlog_list:[]
        },
        {
            id:content,
            title_1:"",
            title_2:"準備好了!",
            msg_1:"剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。 既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！",
            msg_2:"",
            backlog_list:[]
        },
        ]
    },
    {
        id:4,
        basket:defineAsyncComponent(()=>import("@/pages/basket_2.vue")),
        decoration:"d4",
        comp:[{
            id:content,
            title_1:"PO: 換你試看看吧!",
            title_2:"我完成了！",
            msg_1:"請把需求放到產品待辦清單，並調整待辦的優先度順序。 我們喵喵也推薦使用 來做任務的管理呢！",
            msg_2:"",
            backlog_list:[]
            },
            {
                id:spring,
                title_1:"產品待辦清單",
                title_2:"請拖拉至清單中並調整順序",
                msg_1:"Product Backlog",
                msg_2:"",
                backlog_list:[
                    {
                        id:0,
                        title:"後台職缺管理功能（資訊上架、下架、顯示應徵者資料）",
                        list:2,
                        cost:8
                    },
                    {
                        id:1,
                        title:"會員系統（登入、註冊、權限管理）",
                        list:2,
                        cost:5
                    },
                    {
                        id:2,
                        title:"應徵者的線上履歷編輯器",
                        list:2,
                        cost:13
                    },
                    {
                        id:3,
                        title:"前台職缺列表、應徵",
                        list:2,
                        cost:8
                    },
                ]
            },
        ]
    },
    {
        id:5,
        basket:defineAsyncComponent(()=>import("@/pages/basket_2.vue")),
        decoration:"d3",
        comp:[{
            id:content,
            title_1:"PO。",
            title_2:"我想先往前走！",
            msg_1:"產品待辦清單好了之後，我們來召集 Scrum Master 和開發團隊共同召開短衝規劃會議（Sprint Planning）。短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出短衝待辦清單（Sprint Backlog），並由開發團隊在接下來的產品開發週期裡執行。",
            msg_2:"",
            backlog_list:[]
        },
        {
            id:content,
            title_1:"小花",
            title_2:"準備好了!",
            msg_1:"嗨嗨 你是新來的前端吧！我是這次的 Scrum Master 小花，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對 Scrum 瞭解。",
            msg_2:"",
            backlog_list:[]
        },
        ]
    },
    {
        id:6,
        basket:defineAsyncComponent(()=>import("@/pages/basket_2.vue")),
        decoration:"d4",
        comp:[{
            id:content,
            title_1:"賓士：換你試看看吧!",
            title_2:"我完成了！",
            msg_1:"把 「 產品待辦清單 」 的項目拖進 「 開發Ａ組的短衝待辦清單 」 裡吧 ！ 提示 ： 置入兩項以上的 Story ， 點數總和不能超過團隊負擔上限 20 點唷 ！",
            msg_2:"",
            backlog_list:[]
        },
        {
            id:spring,
            title_1:"產品待辦清單",
            title_2:"開發Ａ組的短衝待辦清單",
            msg_1:"Product Backlog",
            msg_2:"Sprint Backlog",
            backlog_list:[
                {
                    id:0,
                    title:"後台職缺管理功能（資訊上架、下架、顯示應徵者資料）",
                    list:2,
                    cost:8
                },
                {
                    id:1,
                    title:"會員系統（登入、註冊、權限管理）",
                    list:2,
                    cost:5
                },
                {
                    id:2,
                    title:"應徵者的線上履歷編輯器",
                    list:2,
                    cost:13
                },
                {
                    id:3,
                    title:"前台職缺列表、應徵",
                    list:2,
                    cost:8
                },
            ]
        },
        ]
    },
];
</script>
<style scoped lang="scss">
    .background {
        /* 背景圖片長寬比 */
        width:100vw;
        height: 56.3vw; 
        position: relative;
        z-index: auto;
        .basket {
            width: 100%;
            height: 100%;
            padding:5em;
            background-color: gainsboro;
            .content {
            }
        }
    }
</style>