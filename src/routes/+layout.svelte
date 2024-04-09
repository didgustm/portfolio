<script>
    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte'
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    import ScrollToPlugin from 'gsap/ScrollToPlugin'
    import Lenis from '@studio-freight/lenis'
    import '@scss/common/common.scss'
    import Quick from '@comp/quick/Quick.svelte';

    let app, isMobile = window.matchMedia('(pointer:coarse)').matches, w = window.innerWidth;

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Lenis
    const lenis = new Lenis({
        syncTouch: true
    });
	lenis.on('scroll', () => {
        ScrollTrigger.update
    });
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    });
    gsap.ticker.lagSmoothing(0);

    const toAnchor = (idx) => {
        gsap.to(window, { scrollTo: innerHeight * idx, duration:1 })
    }

    const svgTextAlign = () => {
        const dy = document.querySelector('.main_tit tspan').getBoundingClientRect().height;
        document.querySelectorAll('.sketch tspan').forEach((z, j) => {
            if(j % 3 > 0){
                z.setAttribute('dy', dy - 10)
            } else{
                z.setAttribute('dy', -dy - 10)
            }
        })
    }
    
    const onResize = () => {
        svgTextAlign();
        if(isMobile){
            lenis.destroy()
        }
    }

    onMount(() => {
        svgTextAlign();
        if(isMobile){
            lenis.destroy()
        }
    });
</script>

<svelte:head>
    <title>MyWorklist</title>
</svelte:head>
<svelte:window 
    on:resize={onResize}
    bind:innerWidth={ w }
/>

<div id="app" bind:this={ app }>
    <Quick { w } { toAnchor } />
    <main in:fade={{duration:200, delay:150}}>
        <slot />
    </main>
</div>