<script>
    export let items = [];
    export const treeChild = false;
</script>

<!-- <li>
    <a>{name}</a>
    <ul>
        <slot />
    </ul>
</li> -->

<ul class={$$props.class}>
    {#each items as item}
        <li>
            <slot {item}>No slot</slot>
            {#if item.children}
                <svelte:self items={item.children} let:item>
                    <slot {item}>No slot</slot>
                </svelte:self>
            {/if}
        </li>
    {/each}
</ul>

<style>

    :root {
        --connectorOffset: 2rem;
    }

    li {
        position: relative;
        padding-inline: .1rem;
        padding-top: var(--connectorOffset);
        display: inline-block;
    }

    /*We will use ::before and ::after to draw the connectors*/

    li::before,
    li::after {
        content: "";
        position: absolute;
        top: 0;
        right: 50%;
        border-top: 1px solid #ccc;
        width: 50%;
        height: var(--connectorOffset);
        /* background-color: var(--color-bg); */
    }

    li::after {
        right: auto;
        left: 50%;
        border-left: 1px solid #ccc;
    }

    /*We need to remove left-right connectors from elements without 
any siblings*/
    li:only-child::after,
    li:only-child::before {
        display: none;
    }

    /*Remove space from the top of single children*/
    li:only-child {
        padding-top: 0;
    }

    /*Remove left connector from first child and 
right connector from last child*/
    li:first-child::before,
    li:last-child::after {
        border: 0 none;
        /* background: transparent; */
    }
    /*Adding back the vertical connector to the last nodes*/
    li:last-child::before {
        border-right: 1px solid #ccc;
        border-radius: 0 5px 0 0;
        -webkit-border-radius: 0 5px 0 0;
        -moz-border-radius: 0 5px 0 0;
    }
    li:first-child::after {
        border-radius: 5px 0 0 0;
        -webkit-border-radius: 5px 0 0 0;
        -moz-border-radius: 5px 0 0 0;
    }

    ul:not(.treeRoot):has(> *):before {
        content: "";
        /* background-color: red; */

        border-left: 1px solid #ccc;
        position: absolute;
        bottom: 100%;
        /* top: 0; */
        left: 50%;
        /* width: 1px; */
        width: 0;
        height: var(--connectorOffset);
    }

    ul:not(.treeRoot) {
        /* margin-top: 12px; */
        margin-top: var(--connectorOffset);
        padding: 0 0 0 1px;
        display: flex;
        position: relative;
    }
</style>
