<script>
    import '@scss/detail.scss'
    import { onMount } from 'svelte'
    import { fade, fly } from 'svelte/transition';
    import Top from '@comp/detail/Top.svelte'
    import View from '@comp/detail/View.svelte'
    import arrow from '@img/up.png'
    import { views } from '@js/view';


    export let detailItem, onClose

    let detail, loading = false, scrollY = 0;
    const arr = [...views].reverse(),
                src = arr[detailItem.meta.id - 1]

    const goTop = () => {
        detail.scrollTo(0, {behavior: 'smooth'})
    }

    onMount(() => {
        detail.addEventListener('scroll', e => {
            scrollY = detail.scrollTop;
        });

        const viewImg = new Image();
        viewImg.src = src;
        loading = true;

        viewImg.onload = () => {
            setTimeout(() => {
                loading = false;
            }, 400);
        };
    })
</script>

<div
    bind:this={detail}
    class="detail"
    data-lenis-prevent
    out:fly={{ y:window.innerHeight, duration:600 }}
>
    <Top { detailItem } { onClose } />
    <View { detailItem } { src } />
    {#if scrollY > 300}
    <button class="btn_top buttons" in:fade out:fade={{ duration:100 }} on:click={goTop}>
        <img src="{ arrow }" alt="상단 바로가기">
    </button>
    {/if}
</div>
{#if loading}
<div class="loading" out:fade={{duration:200, delay:150}}>
    <svg width="80px" height="80px" viewBox="0 0 80 80">
        <path stroke-width="10" stroke-linecap="round" fill="none" d="M40,10 A30,30 0 1,0 70,40"></path>
    </svg>
</div>
{/if}