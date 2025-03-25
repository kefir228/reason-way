import { DataParse } from "../utils/dataParse";
import { Blocks } from "./Blocks";

export const Container = () => {
    const data = DataParse()
    return(
        <div>
            {data.container.width}*{data.container.height}
            <Blocks/>
        </div>
    )   
}