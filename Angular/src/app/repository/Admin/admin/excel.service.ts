import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import _ from 'lodash';
import * as fs from 'file-saver';

@Injectable({
    providedIn: 'root'
})
export class ExcelService {


    constructor() {

    }


    async generateExcel(data: any[], xlsConfig) {

        // Excel Title, Header, Data
        let sortedData;
        const header = Object.keys(data[0]);
        // const data = people;
        if (xlsConfig.allowGrouping) {
            sortedData = _.sortBy(data, xlsConfig.groupSettings.columns);
        } else {
            sortedData = data;
        }


        // Create workbook and worksheet
        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet(xlsConfig.sheetName);

        // Add Header Row
        const headerRow = worksheet.addRow(header, '');

        // Cell Style : Fill and Border
        headerRow.eachCell((cell, number) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: xlsConfig.header.style.fgColor },
                bgColor: { argb: xlsConfig.header.style.bgColor }
            };
            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        });

        const grpSettingClmnArray = xlsConfig.groupSettings.columns;
        const dataForExcel = _.groupBy(sortedData, grpSettingClmnArray[0]);
        let groupingLevel = 1;
        let arrKeysLevel2; let arrKeysLevel3; let dataForExcelLvl2; let dataForExcelLvl3;

        if (grpSettingClmnArray.length === 2) {
            groupingLevel = 2;
        } else if (grpSettingClmnArray.length === 3) {
            groupingLevel = 3;
        }


        const arrKeys = Object.keys(dataForExcel);
        // const arrValues = Object.values(dataForExcel);
        for (let i = 0; i < arrKeys.length; i++) {
            const dataKeyArr = dataForExcel[`${arrKeys[i]}`];

            // if second level grouping is required
            if (groupingLevel === 2 || groupingLevel === 3) {
                dataForExcelLvl2 = _.groupBy(dataKeyArr, grpSettingClmnArray[1]);
                arrKeysLevel2 = Object.keys(dataForExcelLvl2);
            }
            if (groupingLevel === 3) {
                dataForExcelLvl3 = _.groupBy(dataKeyArr, grpSettingClmnArray[2]);
                arrKeysLevel3 = Object.keys(dataForExcelLvl3);
            }

            // level 1- header row
            const groupHeaerRow = worksheet.addRow([`${xlsConfig.groupSettings.columns[0]} - ${arrKeys[i]}`], '');
            worksheet.mergeCells(groupHeaerRow.number, 1, groupHeaerRow.number, header.length);
            this.addGrpColumnStyling(groupHeaerRow, xlsConfig, 0);


            // level 1- data row
            if (groupingLevel === 1) {
                for (let j = 0; j < dataKeyArr.length; j++) {
                    const dataRowLevel1 = worksheet.addRow(Object.values(dataKeyArr[j]), '');
                    worksheet.getRow(dataRowLevel1.number).outlineLevel = 1;
                }

            } else if (groupingLevel === 2) {

                for (let j = 0; j < arrKeysLevel2.length; j++) {
                    const dataKeyArr2 = dataForExcelLvl2[`${arrKeysLevel2[j]}`];

                    // level 2- header row
                    if (dataKeyArr2) {
                        const param = xlsConfig.groupSettings.columns[1];
                        const groupHeaerRowLvl2 = worksheet.addRow([`${xlsConfig.groupSettings.columns[1]} - ${dataKeyArr2[0][param]}`], '');
                        worksheet.mergeCells(groupHeaerRowLvl2.number, 1, groupHeaerRowLvl2.number, header.length);
                        this.addGrpColumnStyling(groupHeaerRowLvl2, xlsConfig, 1);
                        worksheet.getRow(groupHeaerRowLvl2.number).outlineLevel = 1;


                        // level 2- data row
                        for (const item of dataKeyArr2) {
                            const dataRowLevel2 = worksheet.addRow(Object.values(item), '');
                            worksheet.getRow(dataRowLevel2.number).outlineLevel = 2;
                        }
                    }

                }

            } else if (groupingLevel === 3) {

                for (let j = 0; j < arrKeysLevel2.length; j++) {
                    const dataKeyArr2 = dataForExcelLvl2[`${arrKeysLevel2[j]}`];

                    // level 2- header row
                    if (dataKeyArr2) {
                        const param = xlsConfig.groupSettings.columns[1];
                        const groupHeaerRowLvl2 = worksheet.addRow([` ${xlsConfig.groupSettings.columns[1]} - ${dataKeyArr2[0][param]}`], '');
                        worksheet.mergeCells(groupHeaerRowLvl2.number, 1, groupHeaerRowLvl2.number, header.length);
                        this.addGrpColumnStyling(groupHeaerRowLvl2, xlsConfig, 1);
                        worksheet.getRow(groupHeaerRowLvl2.number).outlineLevel = 1;

                        // level 2- data row
                        for (let k = 0; k < arrKeysLevel3.length; k++) {
                            const dataKeyArr3 = dataForExcelLvl3[`${arrKeysLevel3[k]}`];

                            // level 3 - header row
                            let rowAdded = false;
                            const param = xlsConfig.groupSettings.columns[2];
                            const rowText = [`  ${xlsConfig.groupSettings.columns[2]} - ${dataKeyArr3[0][param]}`];

                            for (let m = 0; m < dataKeyArr2.length; m++) {
                                for (let l = 0; l < dataKeyArr3.length; l++) {
                                    if (dataKeyArr2[m][`${param}`] === dataKeyArr3[l][`${param}`]) {
                                        if (!rowAdded) {
                                            const groupHeaerRowLvl3 = worksheet.addRow(rowText, '');
                                            worksheet.mergeCells(groupHeaerRowLvl3.number, 1, groupHeaerRowLvl3.number, header.length);
                                            this.addGrpColumnStyling(groupHeaerRowLvl3, xlsConfig, 2);
                                            worksheet.getRow(groupHeaerRowLvl3.number).outlineLevel = 2;
                                            rowAdded = true;
                                        }

                                        const dataRowLevel3 = worksheet.addRow(Object.values(dataKeyArr3[l]), '');
                                        worksheet.getRow(dataRowLevel3.number).outlineLevel = 3;
                                        for (let cell = 1; cell <= header.length; cell++) {
                                            dataRowLevel3.getCell(cell).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                                        }
                                    }
                                }
                            }
                        }
                    }

                }

            }
        }

        for (let i = 0; i < header.length; i++) {
            worksheet.getColumn(i + 1).width = 30;
        }

        // add blank row
        worksheet.addRow([], '');


        // Footer Row
        if (xlsConfig.footer) {
            const footerRow = worksheet.addRow([xlsConfig.footer.text], '');
            footerRow.getCell(1).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: xlsConfig.footer.style.fgColor }
            };
            footerRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            // Merge Cells
            worksheet.mergeCells(footerRow.number, 1, footerRow.number, header.length);
        }

        // Generate Excel File with given name
        workbook.xlsx.writeBuffer().then((data) => {
            const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            fs.saveAs(blob, `${xlsConfig.fileName}.xlsx`);
        });

    }

    private addGrpColumnStyling(colmnObj, xlsConfig, cLevel) {
        if (xlsConfig.groupSettings && xlsConfig.groupSettings.ColumnsHeaderStyle
      && xlsConfig.groupSettings.ColumnsHeaderStyle.fgColor.length > 0) {
            colmnObj.getCell(1).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: xlsConfig.groupSettings.ColumnsHeaderStyle.fgColor[cLevel] }
            };
        }
    }
}
