export const toTreeData = (data, parentId = undefined) => {
    // based on same id, find parent and add to children array

    const result = [];

    data.forEach((item) => {
        if (item.parent === parentId) {
            const children = toTreeData(data, item.id);
            // const node = { name: item.name, id: item.id };
            // get all but item.parent
            const { parent, ...node } = item;

            if (children.length > 0) {
                node.children = children;
            }

            result.push(node);
        }
    });

    return result;
};