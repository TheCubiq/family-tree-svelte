

<script>
    import { infoData } from "./stores.js";

    let tab;

    infoData.subscribe(value => {
        tab = value;
    });

</script>

<div>
    <h1>{tab.name}</h1>
    {tab.id}
    <!-- {tab.test} -->
</div>


<style>
    div {
        z-index: 99;
        position: fixed;
        inset: 1em;
        top: inherit;

        padding: 1em;
        
        border-radius: .6em;

        /* max-width: 80vw; */
        /* height: 50svh; */
        background-color: color-mix(in oklab, var(--color-bg), var(--color-text) 5%);
    }

    h1 {
        margin: 0;
        padding: 0;
        font-size: 2em;
    }
</style>