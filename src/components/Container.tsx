import { DataParse } from "../utils/dataParse";
import { Blocks } from "./Blocks";
import { placeBlocks } from "../utils/placeBlocks";

export const Container = () => {

    const data = DataParse()
    const { fullness } = placeBlocks(data.blocks, data.container)

    return (
        <>
            <p>
                Fullness: {(fullness * 100).toFixed(2)}%
            </p>
            <div className="relative border box-content"
                style={{
                    width: `${data.container.width}px`,
                    height: `${data.container.height}px`
                }}
            >
                <Blocks />
            </div>
        </>
    )
}