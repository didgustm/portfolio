<script>
    import { fly } from 'svelte/transition'
    import { faHouse, faUser, faListUl, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

    export let toAnchor, Fa
</script>

<nav>
    <ul>
        <li class="blob02" in:fly={{ x:'100%', y:'20%', delay:100 }} out:fly={{ x:'100%', y:'20%' }}>
            <button class="radius" on:click={toAnchor(0)}>
                <p>Home</p>
                <svelte:component this={ Fa } icon={ faHouse } size="1.2x" />
            </button>
        </li>
        <li class="blob03" in:fly={{ x:'100%', y:'-20%', delay:200 }} out:fly={{ x:'100%', y:'-20%' }}>
            <button class="radius" on:click={toAnchor(1)}>
                <p>About</p>
                <svelte:component this={ Fa } icon={ faUser } size="1.2x" />
            </button>
        </li>
        <li class="blob04" in:fly={{ x:'50%', y:'-100%', delay:300 }} out:fly={{ x:'50%', y:'-100%' }}>
            <button class="radius" on:click={toAnchor(3.5)}>
                <p>Portfolio</p>
                <svelte:component this={ Fa } icon={ faListUl } size="1.2x" />
            </button>
        </li>
        <li class="blob05" in:fly={{ x:'-50%', y:'-100%', delay:400 }} out:fly={{ x:'-50%', y:'-100%' }}>
            <button class="radius" on:click={toAnchor(4)}>
                <p>Contact</p>
                <svelte:component this={ Fa } icon={ faEnvelopeOpen } size="1.2x" />
            </button>
        </li>
    </ul>
</nav>