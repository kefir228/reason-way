import { DataParse } from "../utils/dataParse";
import { Blocks } from "./Blocks";

export const Container = () => {
    const data = DataParse()
    return (
        <div className="border"
            style={{
                width: `${data.container.width}px`,
                height: `${data.container.height}px`
            }}
        >
            <Blocks />
        </div>
    )
}