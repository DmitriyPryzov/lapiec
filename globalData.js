
const globalData = {};


function setData(key, data) {
    globalData[key] = data;
}

function getData(key) {
    return globalData[key] || undefined;
}


module.exports = { setData, getData };