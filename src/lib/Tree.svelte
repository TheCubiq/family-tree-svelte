
<Cell class="treeRoot" items={treeData} let:item>
    <!-- <a href="./">{item.name}</a> -->
    <a href="./" on:click|preventDefault={() => infoData.set(item)} >{item.name}</a>
</Cell>

<script>
    import Cell from "./Cell.svelte";

    import { infoData } from "./stores.js";

    export let treeData = [];

</script>


<style>
    :global(.treeRoot) {
        position: relative;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
        padding: 2rem;
    }
</style>
