<script>
    import '@scss/portfolio.scss'
    import Grid from './Grid.svelte'
    import navi from '@img/navi.png';

    export let data, onClick;
    
</script>

<section class="portfolio aos">
    <div class="inner">
        <div class="top">
            <div>
                <div class="caption linear fd--d2">
                    <span class="line scx--d4"></span>
                    <p>Portfolio</p>
                </div>
                <div class="title">
                    <div>
                        <p class="ts--d4">My Work List</p>
                    </div>
                </div>
            </div>
            <div class="navi fd--d4">
                <button class="btn_prev"><img src="{navi}" alt="prev"></button>
                <button class="btn_next"><img src="{navi}" alt="next"></button>
            </div>
        </div>
        <div class="contents">
            <Grid { data } { onClick } />
        </div>
    </div>
</section>