import { NewData } from "../Report/Report";

export function EnteredDataHandler(props: NewData) {
    const idTrans: number = props.idTrans;
    const categoryId: number = props.categoryId;
    const enteredData: number = props.enteredData;
    const dateTrans: Date = props.dateTrans;
    console.log(idTrans, categoryId, enteredData, dateTrans);
    
}