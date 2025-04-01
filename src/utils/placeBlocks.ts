import { Container, Block } from "./dataParse";

export interface PlacementResult {
    placedBlocks: Block[]
    fullness: number
}

export const placeBlocks = (blocks: Block[], container: Container): PlacementResult => {
    const sortedBlocks = [...blocks].sort((a, b) => (b.width * b.height) - (a.width * a.height))

    const placedBlocks: Block[] = []
    let currentX = 0
    let currentY = 0
    let maxRowHeight = 0

    for (let block of sortedBlocks) {
        if (currentX + block.width > container.width) {
            currentX = 0
            currentY += maxRowHeight
            maxRowHeight = 0
        }

        if (currentY + block.height > container.height) {
            break
        }

        placedBlocks.push({ ...block, x: currentX, y: currentY })

        currentX += block.width
        maxRowHeight = Math.max(maxRowHeight, block.height)
    }

    const totalBlockArea = placedBlocks.reduce((sum, b) => sum + (b.width * b.height), 0)
    const totalContainerArea = container.height * container.width
    const fullness = totalBlockArea / totalContainerArea

    return{ placedBlocks, fullness }
}