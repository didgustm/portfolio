<script>
    import '@scss/about.scss'
    import Title from './Title.svelte'
    import Info from './Info.svelte'
    import Career from './Career.svelte'
    import Skills from './Skills.svelte'
</script>

<section class="about">
    <div class="inner">
        <div class="left">
            <Title />
            <Info />
        </div>
        <div class="right">
            <Career />
            <Skills />
        </div>
        <div class="text_bg text01">CAREER</div>
        <div class="text_bg text02">SKILLS</div>
    </div>
</section>