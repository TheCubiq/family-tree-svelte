
<Cell class="treeRoot" items={treeData} let:item>
    <!-- <a href="./">{item.name}</a> -->
    <a href={"#"+item.id} on:click={() => infoData.set(item)} >{item.name}</a>
</Cell>

<script>
    import Cell from "./Cell.svelte";

    import { infoData } from "./stores.js";

    export let treeData = [];

</script>


<style>
    :global(.treeRoot) {
        position: relative;
        overflow-y: hidden;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        padding: 2rem;
    }
</style>
