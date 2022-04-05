import "./outputReport.scss"
import { Chart, ArcElement, DoughnutController } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
Chart.register(ArcElement)
Chart.register(DoughnutController)
/**
 * 
 * @param params Where: "income || expences" Data: {id: , categoryId: , amount: , date: }
 * @returns Block with sum
 */
export function OutputReport(params: any) {
    const arrayHandler = params.param
    let amountOutput = 0
    if(arrayHandler !== undefined) {
        arrayHandler.forEach(function amountHandler(elem: any) {
            return amountOutput = amountOutput + elem.amount
        })
    }
    return <div id={params.where}>
        <div>{params.where}</div>
        {/* <div>{params.summ}</div> */}
        <div>{amountOutput}</div>
        </div>
}
/**
 * 
 * @returns Doughnut diagram
 */
export function DoughnutReport(param: any) {
    const test = param.param
    const data = {
        labels: [""],
        datasets: [{
            data: [0],
            backgroundColor: ["#CE9684", "#54A5BF", "#ACAD62", "#C58D9E", "#7BB1AB", "#825656", "#C4D600", "#635087"] // ?
        }]
    }
    const test3 = data.datasets
    test.forEach((element: { id: string , amount: number}) => {
        data.labels.push((element.id).toString())
        test3[0].data.push(element.amount)
    });
    if(data.labels.length >= 1) {
        data.labels.shift()
        test3[0].data.shift()
    }
    return <div id="doughnutReport">
            <Doughnut data={data} />
            <div id="doughbutHoleReport">
                <span>Total balance</span>
                <p>25</p>
            </div>
        </div>
}