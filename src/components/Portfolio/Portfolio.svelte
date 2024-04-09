<script>
    import '@scss/portfolio.scss'
    import Title from './Title.svelte'
    import List from './List.svelte';

    export let data, onClick
</script>

<section class="portfolio">
    <div class="inner">
        <Title />
        <List { data } { onClick } />
    </div>
</section>