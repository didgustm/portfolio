<script>
    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte'
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    import Lenis from '@studio-freight/lenis'
    import '@scss/common/common.scss'
    import Header from '@comp/common/Header.svelte'
    import Footer from '@comp/common/Footer.svelte';

    let app, isMobile = window.matchMedia('(pointer:coarse)').matches;

    gsap.registerPlugin(ScrollTrigger);

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

    const toAnchor = (target, margin) => {
        !isMobile?
        lenis.scrollTo(`.${target}`, { offset: -document.querySelector('.header').offsetHeight }):
        window.scrollTo({
            top: document.querySelector(`.${target}`).offsetTop - document.querySelector('.header').offsetHeight, 
            behavior: 'smooth'
        })
    }
    
    const onResize = () => {
        if(isMobile){
            lenis.destroy()
        }
    }

    onMount(() => {
        const header = document.querySelector('.header'),
                    aos = document.querySelectorAll('.aos');
        ScrollTrigger.create({
            trigger: app,
            onUpdate () {
                lenis.actualScroll > 10? header.classList.add('active'): header.classList.remove('active');
            }
        });
        if(isMobile){
            lenis.destroy()
        }
        if(typeof IntersectionObserver !== undefined){
            const rootMargin = `${-50}px`;
            const io = new IntersectionObserver((entries, ob) => {
                entries.forEach(entry => {
                    if(!entry.isIntersecting && entry.boundingClientRect.y > 0) return;
                    const { target } = entry;
                    target.classList.add('active');
                    ob.unobserve(target)
                })
            }, { rootMargin });
            aos.forEach(x => io.observe(x));
        }
    });
</script>

<svelte:head>
    <title>MyWorklist</title>
</svelte:head>
<svelte:window 
    on:resize={onResize}
/>

<div id="app" bind:this={ app }>
    <Header { toAnchor } />
    <main in:fade={{duration:200, delay:150}}>
        <slot />
    </main>
    <Footer />
</div>