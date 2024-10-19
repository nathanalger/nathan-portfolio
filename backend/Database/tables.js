const fs = require('fs');

var tablePaths = getTablePaths();

var loadedTables = {

};

const defaultTable = {
    "name": "",
    "layout": [],
    "rows": [

    ],
    "info": {
        "lastUpdate": ""
    }
}

function loadTable(name) {
    var path = tablePaths[name];
    if (loadedTables[name] != undefined) {
        console.log("Table " + name + " already loaded.");
    } else {
        console.log("Loading table " + name);
        let tb = JSON.parse(fs.readFileSync(path));
        loadedTables[name] = tb;
    }
}

function fetchTable(name) {
    var path = tablePaths[name];
    if (loadedTables[name] != undefined) {
        console.log("Table " + name + " already loaded. Returning.");
        return loadedTables[name];
    } else {
        console.log("Loading table " + name);
        let tb = JSON.parse(fs.readFileSync(path));
        loadedTables[name] = tb;
        return loadedTables[name];
    }
}

function getTablePaths()  {
    return JSON.parse(fs.readFileSync("./Database/tables.json"));
}

function replaceTable(tableName, updatedTable) {
    try {
        var tableToReplace = fetchTable(tableName);
        var newTb = structuredClone(tableToReplace);
        newTb.rows = updatedTable.rows;
        const now = new Date();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        newTb.info.lastUpdate = `${now.getMonth() + 1}-${now.getDate()}-${now.getFullYear()} at ${hours}:${minutes} ${-(new Date().getTimezoneOffset() / 60)}`;
        fs.writeFileSync(tablePaths[tableName], JSON.stringify(newTb));
    } catch (e) {
        console.log("Error updating table: " + e);
    }
}

function createTable(name, layout) {
    try {
        var tables = getTablePaths();
        var path = "./Tables/" + name;
        tables[name] = path;

        var newTable = structuredClone(defaultTable);
        newTable.layout = layout;
        newTable.info.lastUpdate = `${now.getMonth() + 1}-${now.getDate()}-${now.getFullYear()} at ${hours}:${minutes} ${-(new Date().getTimezoneOffset() / 60)}`;

        fs.writeFileSync(path, JSON.stringify(newTable));
    } catch (e) {
        console.log("Error creating table: " + e);
    }

}

module.exports = {
    "db": {
        loadTable,
        fetchTable,
        tablePaths,
        createTable,
        replaceTable
    }
}