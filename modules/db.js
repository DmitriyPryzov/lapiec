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

async function getUserFromDB(model, userId) {
    if (typeof userId !== "number") return console.log("Parametr is not defined");
    
    return await model.findOne({ user: userId });
}

async function getRequestAuth(model) {
    return await model.find() || undefined; 
}


module.exports = { saveUpdateDataToDB, getDataFromDB, getUserFromDB, getRequestAuth };