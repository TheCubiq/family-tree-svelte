import PocketBase from "pocketbase";

const pb = new PocketBase("https://db.cubiq.dev/");

export const loadTree = async (name) => {
  const list = await pb
    .collection(name)
    .getFullList()
    .catch((e) => {
      console.error(e);
      throw e;
    });

  const processedList = list.map((item) => {
    const {
      id,
      parent,
      UID,
      collectionId,
      collectionName,
      created,
      updated,
      expand,
      ...rest
    } = item;

    // get parent UID
    const parentUID = list.find((item) => item.id === parent)?.UID;

    return { id: UID, parent: parentUID, ...rest };
  });

  console.log("Processed list", processedList);

  return processedList;

  // return list;
};

export const createData = async (dataRaw, db_name = "tree_lajsek") => {
  const uploadData = confirm("Are you sure you want to upload data?");
  if (!uploadData) {
    console.log("Data not uploaded");
    return;
  }

  pb.autoCancellation(false);

  const collection = pb.collection(db_name);
  // remove all records in the collection

  const recordsToDelete = await collection.getFullList();

  recordsToDelete.forEach(async (record) => {
    await pb.collection(db_name).delete(record.id);
  });

  // get just 10 records from dataRaw
  // const dataSliced = dataRaw.slice(0, 5);
  const dataSliced = dataRaw;

  const dataPrepared = dataSliced.map((data) => {
    const { id, parent, ...rest } = data;
    return { UID: id, ...rest };
  });

  const promises = dataPrepared.map(async (data) => {
    await collection.create(data);
  });

  // await dataPrepared.forEach(async (data) => {
  //   await collection.create(data);
  // });

  // wait for all records to be created
  await Promise.all(promises);

  // update created records: add parent field
  const records = await collection.getFullList();

  // console.log("Records", records)

  const dataWithParent = records.map((record, i) => {
    // const parent = dataSliced[i].parent;
    const parent = dataSliced.find((data) => data.id === record.UID).parent;

    // get parent id from records
    const parentRecord = records.find((record) => record.UID === parent)?.id;

    const { collectionId, collectionName, created, updated, expand, ...rest } =
      record;
    return { ...rest, parent: parentRecord };
  });

  // console.log("Data with parent", dataWithParent);

  const promisesUpdate = dataWithParent.map(async (data) => {
    const { id, ...rest } = data;
    console.log("Update", id, rest);
    await collection.update(id, rest);
  });

  await Promise.all(promisesUpdate);

  console.log("Data created");
};
