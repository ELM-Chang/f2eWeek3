<template>
    <div>
        <section class="deco-grid">
            <div class="deco-1">
                <img class="deco-img deco-1-img" src="/images/cat-benz.png" alt="" loading="lazy"/>
            </div>
            <div class="deco-2">
                <img class="deco-img deco-2-img" src="/images/cat-po-2.png" alt="" loading="lazy"/>
            </div>
            <div class="deco-3">
                <img class="deco-img deco-3-img" src="/images/cat-gray.png" alt="" loading="lazy"/>
            </div>
            <div class="deco-4">
                <img class="deco-img deco-4-img" src="/images/cat-flower.png" alt="" loading="lazy"/>
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
    .deco-img {
        width: 100%;
    }
    .deco-grid {
        display: grid;
        grid-template-columns: repeat(12,1fr);
        grid-template-rows: repeat(12,1fr);
    }
    .deco-1 {
        grid-column: 2/4;
        grid-row: 9/13;
    }
    .deco-2 {
        grid-column: 2/4;
        grid-row: 4/8;
    }
    .deco-3 {
        grid-column: 10/12;
        grid-row: 9/13;
    }
    .deco-4 {
        grid-column: 10/12;
        grid-row: 4/8;
    }
</style>