import { DataParse } from "../utils/dataParse"
import { RandomColor } from "../utils/getRandomColor"

export const Blocks = () => {
    const data = DataParse()

    return (
        <div>
            {data.blocks.map((block, index) => {
                const bgColor = RandomColor()
                return (
                    <div key={index}
                        style={{
                            width: `${block.width}px`,
                            height: `${block.height}px`,
                            backgroundColor: bgColor
                        }}>
                        {index+1}
                    </div>
                )
            })}
        </div>
    )
}