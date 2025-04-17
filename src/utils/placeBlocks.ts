import { Container, Block } from "./dataParse";
import { fillRemainingGaps } from "./fillRemainingGaps";

export interface PlacementResult {
    placedBlocks: Block[]
    fullness: number
}

export const placeBlocks = (blocks: Block[], container: Container): PlacementResult => {
    const sortedBlocks = [...blocks].sort((a, b) => (b.width * b.height) - (a.width * a.height))

    const placedBlocks: Block[] = []
    const columnHeights = new Array(container.width).fill(0)
    const unplacedBlocks: Block[] = []

    for (let block of sortedBlocks) {
        let width = block.width
        let height = block.height

        let bestX = 0
        let minY = container.height

        for (let x = 0; x <= container.width - width; x++) {
            const maxColumnHeight = Math.max(...columnHeights.slice(x, x + width))
            if (maxColumnHeight < minY) {
                minY = maxColumnHeight
                bestX = x
            }
        }

        const rotatedWidth = block.height
        const rotatedHeight = block.width

        if (rotatedWidth <= container.width) {
            for (let x = 0; x <= container.width - rotatedWidth; x++) {
                const maxColumnHeight = Math.max(...columnHeights.slice(x, x + rotatedWidth))
                const newY = maxColumnHeight
                if (newY < minY) {
                    minY = newY
                    bestX = x
                    width = rotatedWidth
                    height = rotatedHeight
                }
            }
        }

        if (minY + height <= container.height) {
            placedBlocks.push({ width, height, x: bestX, y: minY })

            for (let x = bestX; x < bestX + width; x++) {
                columnHeights[x] = minY + height
            }
        } else {
            unplacedBlocks.push(block)
        }
    }

    const additionalyPlaced = fillRemainingGaps(unplacedBlocks, placedBlocks, container)

    const totalBlockArea = [...placedBlocks, ...additionalyPlaced].reduce((sum, b) => sum + (b.width * b.height), 0)
    const totalContainerArea = container.height * container.width
    const fullness = totalBlockArea / totalContainerArea

    return { placedBlocks: [...placedBlocks, ...additionalyPlaced], fullness }
}






