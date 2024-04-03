<script>
  import { onMount } from "svelte";
  import InfoTab from "./lib/InfoTab.svelte";
  import Tree from "./lib/Tree.svelte";
  import { infoData, treeData } from "./lib/stores";

//   import { treeDataRaw } from "./lib/treeData.js";
  import { toTreeData } from "./lib/utils";
  import { createData, loadTree } from "./lib/pocketbase";


  let tab;

  infoData.subscribe((value) => {
    tab = value;
  });

//   const importTree = () => {
//     createData(treeDataRaw);
//   };

  onMount(async () => {
    const tree = await loadTree("tree_lajsek");
    const treeDataRaw = toTreeData(tree);

    treeData.set(treeDataRaw);
  });
</script>

<main>
  <!-- <h1>Rodokmen rodu Lajsků</h1> -->

  <!-- <button class="import" on:click={importTree}>import Data</button> -->
  <Tree treeData={$treeData} />
  <InfoTab {...tab} />

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

  .import {
    position: fixed;
    top: 1em;
    right: 1em;
    z-index: 99;
    padding: 1em;
    background-color: var(--color-bg);
    color: var(--color-text);
    border: 1px solid var(--color-text);
    border-radius: 0.5em;
    cursor: pointer;
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
