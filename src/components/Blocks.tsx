import { DataParse } from "../utils/dataParse"
import { RandomColor } from "../utils/getRandomColor"
import { placeBlocks } from "../utils/placeBlocks"

export const Blocks = () => {
    
    const data = DataParse()
    const { placedBlocks } = placeBlocks(data.blocks, data.container)

    return (
        <div>
            {placedBlocks.map((block, index) => {
                const bgColor = RandomColor()
                return (
                    <div className="border flex justify-center items-center"
                        key={index}
                        style={{
                            width: `${block.width}px`,
                            height: `${block.height}px`,
                            left:`${block.x}px`,
                            top:`${block.y}px`,
                            backgroundColor: bgColor
                        }}>
                        {index + 1}
                    </div>
                )
            })}
        </div>
    )
}