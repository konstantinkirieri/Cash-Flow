import "./outputReport.scss"
import { Chart, ArcElement, DoughnutController } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2'
import React from "react";
Chart.register(ArcElement)
Chart.register(DoughnutController)
Chart.register(ChartDataLabels)
/**
 * 
 * @param arrayHandler Массив с данными из файла JSON
 * @param amountOutput Элемент для возврата
 * @returns Сумма элементов amount массива
 */
function sumAmountArr(arrayHandler: any, amountOutput: number) {
    if(arrayHandler !== undefined) {
        arrayHandler.forEach(function amountHandler(elem: any) {
            return amountOutput = amountOutput + elem.amount
        })
    }
    return amountOutput
} 
/**
 * 
 * @param params Where: "Income || Expences" Data: {id: , categoryId: , amount: , date: }
 * @returns Блок с обработанными данными
 */
export function OutputReport(params: any) {
    const arrayHandler = params.param
    let amountOutput = 0
    amountOutput = sumAmountArr(arrayHandler, amountOutput)
    return <div id={params.where}>
        <div>{params.where}</div>
        <div>{amountOutput}</div>
        </div>
}
/**
 * 
 * @returns Диаграмма "Пончик"
 */
export function DoughnutReport(params: any) {
    const income = params.income[0].amount
    const expences = params.expences
    const data = {
        labels: [""],
        datasets: [{
            data: [0],
            backgroundColor: ["#CE9684", "#54A5BF", "#ACAD62", "#C58D9E", "#7BB1AB", "#825656", "#C4D600", "#635087"], // ?
            borderColor: ["#CE9684", "#54A5BF", "#ACAD62", "#C58D9E", "#7BB1AB", "#825656", "#C4D600", "#635087"], // ?
            borderWidth: 1,
            datalabels: {
                size: 12,
                color: "#FFF",
                font: function(context: any) {
                    const width = context.chart.width
                    const size = Math.round(width / 15)
                    return {
                        size: size,
                        weight: 400
                    }
                }
            }
        }]
    }
    let amountOutput = 0
    amountOutput = sumAmountArr(expences, amountOutput)
    const diffAmounts = income - amountOutput
    const datasetHandler = data.datasets
    expences.forEach((element: { id: string , amount: number}) => {
        data.labels.push((element.id).toString())
        const persentPie = (element.amount / amountOutput) * 100
        datasetHandler[0].data.push(parseInt(`${persentPie}`, 10))
    });
    if(data.labels.length >= 1) {
        data.labels.shift()
        datasetHandler[0].data.shift()
    }
    return <div id="doughnutReport">
            <Doughnut data={data} />
            <div id="doughbutHoleReport">
                <span>Total balance</span>
                <p>{diffAmounts}</p>
            </div>
        </div>
}