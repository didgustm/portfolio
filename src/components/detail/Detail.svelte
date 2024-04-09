<script>
    import '@scss/detail.scss'
    import { onMount } from 'svelte'
    import { fade, fly } from 'svelte/transition'
    import Fa from 'svelte-fa'
    import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
    import Top from '@comp/detail/Top.svelte'
    import View from '@comp/detail/View.svelte'
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
            }, 100);
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
    <button class="btn_top" in:fade out:fade={{ duration:100 }} on:click={goTop}>
        <svelte:component this={ Fa } icon={ faChevronUp } size="2x" />
    </button>
    {/if}
    {#if loading}
    <div class="loading" out:fade={{duration:100}}>
        <svg width="80px" height="80px" viewBox="0 0 80 80">
            <path stroke-width="10" stroke-linecap="round" fill="none" d="M40,10 A30,30 0 1,0 70,40"></path>
        </svg>
    </div>
    {/if}
</div>
