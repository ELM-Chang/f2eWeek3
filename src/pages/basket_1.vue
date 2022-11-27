<template>
    <div class="basket">
        <div class="box-img bg-img">
            <img class="bg-img-in" src="/images/index.jpg" alt="" loading="lazy"/>
        </div>
        <div class="box-img corner-img">
            <img class="corner-img-in" src="/images/title.svg" alt="" loading="lazy"/>
        </div>
        <div class="content">
            <div class="slot">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped lang="scss">
    .basket {
        .box-img {
            .bg-img-in {
                width:100%;
            }
            .corner-img-in {
                width: 100%;
            }
        }
        .content {
            opacity: 0.8;
            .slot {
            }
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
        grid-column: 4/10;
        grid-row: 2/4;
    }
    .content {
        grid-column: 5/9;
        grid-row: 6/7;
    }
</style>