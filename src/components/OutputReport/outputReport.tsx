import "./outputReport.scss"
import { Chart, ArcElement, DoughnutController } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Doughnut } from 'react-chartjs-2'
import React from "react"
Chart.register(ArcElement)
Chart.register(DoughnutController)
Chart.register(ChartDataLabels)
/**
 * 
 * @param arrayHandler Массив с данными из файла JSON
 * @param amountOutput Элемент для возврата
 * @returns Сумма элементов inputValue массива
 */
function sumAmountArr(arrayHandler: any, amountOutput: number) {
    if (arrayHandler !== undefined) {
        arrayHandler.forEach(function amountHandler(elem: any) {
            return amountOutput = amountOutput + +elem.inputValue
        })
    }
    return amountOutput
}
/**
 * 
 * @param params Where: "Income || Expences" Data: {id: , categoryId: , inputValue: , date: }
 * @returns Блок с обработанными данными
 */
export function OutputReport(params: any): JSX.Element {
    const arrayHandler = params.param
    let amountOutput = 0
    amountOutput = sumAmountArr(arrayHandler, amountOutput)
    return <div id={params.where}>
        <p>{params.where}</p>
        <p>{amountOutput}</p>
    </div>
}
/**
 * 
 * @returns Диаграмма "Пончик"
 */
export function DoughnutReport(params: any) {
    const income: any = params.income[0].inputValue
    const expences: any = params.expences
    const labels = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri']
    const data = {
        labels: labels,
        datasets: [{
            data: [0],
            backgroundColor: ["#CE9684", "#54A5BF", "#ACAD62", "#C58D9E", "#7BB1AB", "#825656", "#C4D600", "#635087"], // ?
            borderColor: ["#CE9684", "#54A5BF", "#ACAD62", "#C58D9E", "#7BB1AB", "#825656", "#C4D600", "#635087"], // ?
            borderWidth: 1,
            datalabels: {
                size: 12,
                color: "#FFF",
                font: function (context: any) {
                    const width = context.chart.width
                    const size = Math.round(width / 15)
                    return {
                        size: size,
                        weight: 400
                    }
                },
                formatter: (value: any) => {
                    return value + '%';
                },
            }
        }]
    }
    let amountOutput = 0
    amountOutput = sumAmountArr(expences, amountOutput)
    const diffAmounts = income - amountOutput
    const datasetHandler = data.datasets
    /**
     * Поиск и сложение суммы в группах категорий
     */
    for (let i = 0; i < expences.length; i++) {
        const elemNext = i + 1
        for (let j = elemNext; j < expences.length; j++) {
            if (expences[i].categoryId === expences[j].categoryId) {
                const persentPie = ((parseInt(expences[i].inputValue) + parseInt(expences[j].inputValue)) / amountOutput) * 100
                datasetHandler[0].data.push(parseInt(`${persentPie}`, 10))
                expences.splice(j, 1)
            }
        }
        const persentPie = (expences[i].inputValue / amountOutput) * 100
        datasetHandler[0].data.push(parseInt(`${persentPie}`, 10))
    }
    /**
     * Удаляет [0] - заглушку
     */
    if (data.labels.length >= 1) {
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