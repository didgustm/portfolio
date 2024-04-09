<script>
    import '@scss/common/quick.scss'
    import Fa from 'svelte-fa'
    import Blobs from './Blobs.svelte'
    import Btn from './Btn.svelte'
    import Navigation from './Navigation.svelte';

    export let toAnchor, w;
    
    let show = false;
    function gnbOpen(){
        show = !show
    }
</script>

<div class="quick">
    <Blobs { show } { w } />
    <Btn { show } { gnbOpen } { Fa } />
    {#if show}
    <Navigation { toAnchor } { Fa } />
    {/if}
</div>