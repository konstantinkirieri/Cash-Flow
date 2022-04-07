import "./outputReport.scss"
import { Chart, ArcElement, DoughnutController } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
Chart.register(ArcElement)
Chart.register(DoughnutController)
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
 * @param params Where: "income || expences" Data: {id: , categoryId: , amount: , date: }
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
            backgroundColor: ["#CE9684", "#54A5BF", "#ACAD62", "#C58D9E", "#7BB1AB", "#825656", "#C4D600", "#635087"] // ?
        }]
    }
    let amountOutput = 0
    amountOutput = sumAmountArr(expences, amountOutput)
    const diffAmounts = income - amountOutput
    const datasetHandler = data.datasets
    expences.forEach((element: { id: string , amount: number}) => {
        data.labels.push((element.id).toString())
        datasetHandler[0].data.push(element.amount)
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