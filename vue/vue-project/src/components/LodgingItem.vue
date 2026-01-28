<script setup>
const props = defineProps({
    picture: String,
    alt: String,
    title: String,
    period: String,
    price: String,
    rating: Number,
    badge: String
});
</script>

<template>
    <div class="item po-rel">
        <img :src="props.picture" :alt="props.alt">
        <div>{{ props.title }}</div>
        <div>{{ props.period }}</div>
        <div>{{ props.price }} 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 8px; width: 8px; fill: currentcolor;"><path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path></svg>
            {{ props.rating }}
        </div>
        <div v-if="props.badge" class="badge">{{ props.badge }}</div>
        <div class="heart">{{ props.heart }}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. --> <path d="M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z"/></svg>
        </div>
    </div>
</template>

<style scoped>
.po-rel { position: relative; }
.po-rel .badge { position: absolute; top: 10px; left: 10px; 
    background-color: #ffffffab; padding: 5px 8px; 
    border-radius: 25px; font-size: 11px; font-weight: bold;
}
.po-rel .heart { position: absolute; top: 10px; right: 10px; 
    padding: 15px 15px; 
    border-radius: 25px;
}
.item { width: 200px; }
.item:not(:first-child) { margin-left: 10px; }
.item img { width: 200px; height: 190px; border-radius: 19px; }
svg { display: inline !important; }
</style>