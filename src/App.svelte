<script>
    import InfoTab from "./lib/InfoTab.svelte";
    import Tree from "./lib/Tree.svelte";
    import { infoData, treeData } from "./lib/stores";

    import { treeDataRaw } from "./lib/treeData.js";
    import { toTreeData } from "./lib/utils";

    treeData.set(toTreeData(treeDataRaw));

    let tab;
    
    infoData.subscribe(value => {
        tab = value;
    });

</script>

<main>
    
    <!-- <h1>Rodokmen rodu Lajsků</h1> -->
    
    <Tree treeData={$treeData} />
    <InfoTab {...tab}/>

    <footer>
        <a href="https://cubiq.dev">
            coded with 🤍 by Jakub Lajsek
            <!-- coded with 🤍 by Cubiq -->
        </a>
        <a href="https://github.com/TheCubiq/family-tree-svelte">
            zdrojový kód zde
        </a>
    </footer>
</main>

<style>
    main {
        position: relative;
    }

    footer {
        /* position: absolute; */
        /* bottom: 0; */
        /* right: 0; */
        padding: 1em;
        margin-bottom: 2em;
        /* font-size: 0.8em; */
        color: var(--color-text);
        display: flex;
        flex-direction: column;
    }
</style>
