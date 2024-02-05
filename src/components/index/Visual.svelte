<script>
    import '@scss/visual.scss'
    import { onMount } from 'svelte'
    import { visualBall } from '@js/visual';

    onMount(() => {
        visualBall();
    });
</script>

<section class="visual aos">
    <div class="inner">
        <div class="caption linear fd--d2">
            <p>Web Publishing</p>
            <span class="line scx--d4"></span>
        </div>
        <div class="title">
            <div>
                <p class="ts--d4">Desktop, Mobile and</p>
            </div>
            <div>
                <p class="ts--d4">Responsive web</p>
            </div>
        </div>
    </div>
</section>