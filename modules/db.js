async function saveUpdateDataToDB(model, updatedProducts) {
    try {
      const operations = updatedProducts.map(product => ({
        updateOne: {
            filter: { _id: product._id},
            update: { $set: { lastBuyCount: product.lastBuyCount } }
        }
      }));
  
      await model.bulkWrite(operations)
                      .then(res => {
                        console.log('Count updated files: ', res.nModified);
                        console.log('Answer from DB: ', res)
                      })
                      .catch(() => console.log("Помилка запису в базу"));
    } catch (err) {
      console.log("Error save updated data to DB " + err);
    }
}

async function getDataFromDB(model, provider = "") {
    if (provider == "") {
      return await model.find();
    }
    return  await model.find({ provider: provider });
}

async function getFilterUsersFromDB(model, filter) {
  if (filter == "") {
    return await model.find();
  }
  return await model.find({mode: filter});
}


async function getUserFromDB(model, userId) {
    if (typeof userId !== "number") return console.log("Parametr is not defined");
    
    return await model.findOne({ user: userId });
}

async function getAllUsers(model) {
    return await model.find() || undefined; 
}


async function updateDataInDB(model, findData, updateData) {
  try {
    const result = await model.updateOne(findData, { $set: updateData });

    return result.modifiedCount > 0;
    
  } catch (err) {
    console.log("Помилка оновлення даних: ", err);
  }
}

async function deleteDataFromDB(model, findData) {
  try {
    const result = await model.deleteOne(findData);

    return result.deletedCount > 0;

  } catch (err) {
    console.log("Помилка видалення данних", err);  
  }

} 

module.exports = { saveUpdateDataToDB, getDataFromDB, getUserFromDB, getAllUsers, getFilterUsersFromDB, updateDataInDB, deleteDataFromDB };