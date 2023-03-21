const Excel = require('exceljs');

async function ReadCell(filename) {
    let workBook = new Excel.Workbook();
    await workBook.xlsx.readFile(filename);

    let sheet = workBook.getWorkSheet('Sheet1');
    let cellValue = sheet.getRow(2).getCell(1).value;
    
    return cellValue;
}