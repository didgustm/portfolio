<script>
    import { register } from 'swiper/element/bundle'
    import { thumnails } from '@js/thumnail'
    import Fa from 'svelte-fa'
    import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

    export let data, onClick;
    let newArr = [];
    for(let i = 0; i < data.lists.length; i ++){
        newArr.push(data.lists[i]);
    }

    register();
</script>

<div class="grid">
    <swiper-container
        slides-per-view={`auto`}
        space-between={20}
        speed={700}
        scrollbar={true}
        grid={{
            rows: 2,
            fill: 'column'
        }}
        breakpoints={{
            501: {
                grid: {
                    fill: 'row',
                    rows: 1
                }
            },
            768: {
                spaceBetween:40,
                grid: {
                    fill: 'row',
                    rows: 1
                }
            }
        }}
    >
        {#each newArr as list, idx}
        <swiper-slide>
            <button class="box box{idx+1}" on:click={onClick(list)}>
                <div class="img">
                    <img src="{ thumnails[idx] }" alt="{ list.meta.title }" loading="lazy">
                </div>
                <div class="site_info">
                    <p class="name">{ list.meta.title }</p>
                    <p class="hide_txt coment">{ list.meta.caption }</p>
                    <p class="hide_txt type">{ list.meta.type }</p>
                    <span class="icon">
                        <svelte:component this={ Fa } icon={ faChevronRight } size="1.5x" />
                    </span>
                </div>
                <div class="bg"></div>
            </button>
        </swiper-slide>
        {/each}
    </swiper-container>
</div>