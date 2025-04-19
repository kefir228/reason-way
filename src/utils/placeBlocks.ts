import { Container, Block } from "./dataParse";

export interface PlacementResult {
    placedBlocks: Block[]
    fullness: number
}

export const placeBlocks = (blocks: Block[], container: Container): PlacementResult => {
    const placedBlocks: Block[] = [];
    const gridStep = 10;

    for (const block of blocks) {
        const rotations = [
            { width: block.width, height: block.height },
            { width: block.height, height: block.width }
        ];

        let placed = false;

        for (const { width, height } of rotations) {
            for (let y = 0; y <= container.height - height; y += gridStep) {
                for (let x = 0; x <= container.width - width; x += gridStep) {
                    const overlaps = placedBlocks.some(pb =>
                        !(x + width <= pb.x! || x >= pb.x! + pb.width || y + height <= pb.y! || y >= pb.y! + pb.height)
                    );

                    if (!overlaps) {
                        placedBlocks.push({ width, height, x, y });
                        placed = true;
                        break;
                    }
                }
                if (placed) break;
            }
            if (placed) break;
        }
    }

    const totalBlockArea = placedBlocks.reduce((sum, b) => sum + (b.width * b.height), 0);
    const totalContainerArea = container.width * container.height;
    const fullness = totalBlockArea / totalContainerArea;

    return { placedBlocks, fullness };
};






