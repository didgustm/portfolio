<script>
    import Fa from 'svelte-fa'
    import { faXmark } from '@fortawesome/free-solid-svg-icons'

    export let detailItem, onClose;
</script>

<section class="subTop">
    <button class="buttons close" on:click={onClose}>
        <svelte:component this={ Fa } icon={ faXmark } size="3x" />
    </button>
    <div class="inner">
        <p class="descript">{detailItem.meta.caption}</p>
        <h2 class="title">
            <div>
                <p>{detailItem.meta.title}</p>
            </div>
        </h2>
        <a href="{detailItem.meta.url}" class="url" target="_blank">{detailItem.meta.url}</a>
        <div class="category">
            <p>{detailItem.meta.role}</p>
            <span>&#8901;</span>
            <p>{detailItem.meta.device}</p>
        </div>
    </div>
</section>