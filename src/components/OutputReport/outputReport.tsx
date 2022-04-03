import "./outputReport.scss"
import { Chart, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
Chart.register(ArcElement)
/**
 * 
 * @param params Data {id: , categoryId: , amount: , date: }
 * @returns Block with sum
 */
export function OutputReport(params:any) {
    const arrayHandler = params.param
    let amountOutput = 0

    if(arrayHandler !== undefined) {
        arrayHandler.forEach(function amountHandler(elem :any) {
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
const data = {
    labels: ["Red", "Blue", "Yellow", "Purple"],
    datasets: [{
        data: [12, 19, 32, 45],
        backgroundColor: ["red", "blue", "yellow", "purple"]
    }]
}
export function DoughnutReport() {
    return <div id="doughnutReport">
            <Doughnut data={data} />
        </div>
}

