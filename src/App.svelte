<script>
    import InfoTab from "./lib/InfoTab.svelte";
    import Tree from "./lib/Tree.svelte";
    import { treeData } from "./lib/stores";

    import { treeDataRaw } from "./lib/treeData.js";
    import { toTreeData } from "./lib/utils";

    treeData.set(toTreeData(treeDataRaw));

</script>

<main>
    <InfoTab/>

    <h1>spreading eepy vibes</h1>

    <Tree treeData={$treeData} />
</main>

<style>
    main {
        position: relative;
        
        width: 100svw;
    }
</style>
