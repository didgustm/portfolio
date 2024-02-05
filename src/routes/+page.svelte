<script>
    import Visual from "@comp/index/Visual.svelte"
    import About from "@comp/index/About.svelte"
    import Portfolio from "@comp/index/Portfolio.svelte"
    import Contact from "@comp/index/Contact.svelte"
    import Detail from "@comp/detail/Detail.svelte"
    import { register } from 'swiper/element/bundle';

    export let data;

    register();
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
</script>

<svelte:window
    on:hashchange={back(detailItem)}
/>

<Visual />
<About />
<Portfolio { data } { onClick }  />
<Contact />

{#if show}
<Detail { detailItem } { onClose } />
{/if}

