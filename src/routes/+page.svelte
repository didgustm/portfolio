<script>
    import { onMount } from 'svelte'
    import Quick from '@comp/common/Quick.svelte'
    import Visual from '@comp/visual/Visual.svelte'
    import About from '@comp/about/About.svelte'
    import Portfolio from '@comp/portfolio/Portfolio.svelte'
    import Contact from '@comp/contact/Contact.svelte'
    import Detail from '@comp/detail/Detail.svelte'
    import { scroll } from '@js/scroll.js';

    export let data

    let detailItem = data.lists[0], show = false;

    if(location.hash != ''){
        show = true
    }

    const onClick = (list) => {
        show = true;
        detailItem = list;
        document.documentElement.classList.add('forbid_scroll');
        location.hash = detailItem.path.substr(6);
    }
    const onClose = () => {
        show = false;
        document.documentElement.classList.remove('forbid_scroll');
        history.replaceState("", "", location.pathname)
    }
    const back = () => {
		if(location.hash != '') onClick(detailItem);
		else onClose();
	}

    onMount(() => scroll())
</script>

<svelte:window
    on:hashchange={back(detailItem)}
/>

<div class="pin">
    <Visual />
    <About />
    <Portfolio { data } { onClick } />
    <Contact />
</div>

{#if show}
<Detail { detailItem } { onClose } />
{/if}

