import "./outputReport.scss"
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

