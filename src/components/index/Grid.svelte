<script>
    import { thumnails } from '@js/thumnail'

    export let data, onClick;

    let newArr = [];

    for(let i = 0; i < data.lists.length; i += 2){
        newArr.push(data.lists.slice(i, i+2))
    }
    
</script>

<div class="grid fd--d6">
    <swiper-container
        slides-per-view={1}
        slides-per-group={1}
        space-between={20}
        navigation={{
            prevEl: '.btn_prev',
            nextEl: '.btn_next'
        }}
        speed={700}
        touchMoveStopPropagation={true}
        breakpoints={{
            451: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            641: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            901: {
                slidesPerView: 3
            }
        }}
    >
    {#each newArr as list, idx}
    <swiper-slide lazy={true}>
        <button class="box box{idx+1+idx}" on:click={onClick(list[0])}>
            <div class="img">
                <img src="{ thumnails[idx*1+idx] }" alt="{ list[0].meta.title }">
            </div>
            <div class="info">
                <p class="descript">{ list[0].meta.caption }</p>
                <p class="sitename">{ list[0].meta.title }</p>
                <p class="more"><span>+</span></p>
            </div>
        </button>
        <button class="box box{idx+2+idx}" on:click={onClick(list[1])}>
            <div class="img">
                <img src="{ thumnails[idx*1+1+idx] }" alt="{ list[1].meta.title }" loading="lazy">
            </div>
            <div class="info">
                <p class="descript">{ list[1].meta.caption }</p>
                <p class="sitename">{ list[1].meta.title }</p>
                <p class="more"><span>+</span></p>
            </div>
        </button>
    </swiper-slide> 
    {/each}
    </swiper-container>
</div>