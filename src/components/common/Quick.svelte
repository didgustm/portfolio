<script>
    import { fly, fade } from 'svelte/transition'
    import '@scss/common/quick.scss'
    import Fa from 'svelte-fa'
    import { faHouse, faUser, faListUl, faEnvelopeOpen, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

    export let toAnchor;
    let show = false;

    function gnbOepn(){
        show = !show;
    }

</script>

<div class="quick">
    <svg class="line">
        <defs>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
            </filter>
        </defs>
        <circle r="25" cx="25" cy="25" fill="none"  stroke-width="3" />
    </svg>
    <div class="blobs radius">
        <span class="blob blob01 radius"></span>
        {#if show}
        <span class="blob blob02 radius" in:fly={{ x:'100%', y:17, delay:100 }} out:fly={{ x:'100%', y:17 }}></span>
        <span class="blob blob03 radius" in:fly={{ x:'100%', y:-30, delay:200 }} out:fly={{ x:'100%', y:-30 }}></span>
        <span class="blob blob04 radius" in:fly={{ x:'100%', y:-65, delay:300 }} out:fly={{ x:'100%', y:-65 }}></span>
        <span class="blob blob05 radius" in:fly={{ x:'-50%', y:-75, delay:400 }} out:fly={{ x:'-50%', y:-75 }}></span>
        {/if}
    </div>
    <button 
        class="ham blob01 radius"
        on:click={gnbOepn}
    >
        {#if !show}
        <span class="icon-menu" in:fade={{ duration:300 }}>
            <Fa icon={ faBars } size="1.4x" />
        </span>
        {:else}
        <span class="icon-x" in:fade={{ duration:300 }}>
            <Fa icon={ faXmark } size="1.4x" />
        </span>
        {/if}
    </button>
    {#if show}
    <nav>
        <ul>
            <li class="blob02" in:fly={{ x:'100%', y:17, delay:100 }} out:fly={{ x:'100%', y:17 }}>
                <button class="radius" on:click={toAnchor(0)}>
                    <p>Home</p>
                    <Fa icon={ faHouse } size="1.2x" />
                </button>
            </li>
            <li class="blob03" in:fly={{ x:'100%', y:-30, delay:200 }} out:fly={{ x:'100%', y:-30 }}>
                <button class="radius" on:click={toAnchor(1)}>
                    <p>About</p>
                    <Fa icon={ faUser } size="1.2x" />
                </button>
            </li>
            <li class="blob04" in:fly={{ x:'100%', y:-65, delay:300 }} out:fly={{ x:'100%', y:-65 }}>
                <button class="radius" on:click={toAnchor(3)}>
                    <p>Portfolio</p>
                    <Fa icon={ faListUl } size="1.2x" />
                </button>
            </li>
            <li class="blob05" in:fly={{ x:'-50%', y:-75, delay:400 }} out:fly={{ x:'-50%', y:-75 }}>
                <button class="radius" on:click={toAnchor(4)}>
                    <p>Contact</p>
                    <Fa icon={ faEnvelopeOpen } size="1.2x" />
                </button>
            </li>
        </ul>
    </nav>
    {/if}
</div>