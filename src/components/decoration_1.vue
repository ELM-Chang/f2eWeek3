<template>
    <div>
        <section class="deco-grid">
            <div class="deco-1">
                <img class="deco-1-img" src="/images/cat-all.png" alt="" loading="lazy"/>
            </div>
            <div class="deco-2">
                <img class="deco-2-img" src="/images/plant-1.png" alt="" loading="lazy"/>
            </div>
            <div class="deco-3">
                <img class="deco-3-img" src="/images/plant-2.png" alt="" loading="lazy"/>
            </div>
        </section>
    </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
    * {
        width: 100%;
        height: 100%;
    }
    .deco-1-img {
        width: 100%;
    }
    .deco-2-img {
        width: 100%;
    }
    .deco-3-img {
        width: 100%;
    }
    .deco-grid {
        display: grid;
        grid-template-columns: repeat(12,1fr);
        grid-template-rows: repeat(12,1fr);
    }
    .deco-1 {
        grid-column: 4/11;
        grid-row: 7/12;
    }
    .deco-2 {
        grid-column: 2/4;
        grid-row: 7/12;
    }
    .deco-3 {
        grid-column: 11/12;
        grid-row: 6/10;
    }
</style>