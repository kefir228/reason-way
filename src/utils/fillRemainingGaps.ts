import { Block, Container } from "./dataParse";

export const fillRemainingGaps = (
    unplacedBlocks: Block[],
    placedBlocks: Block[],
    container: Container,
    gridStep: number = 10
): Block[] => {
    const newPlaced: Block[] = [];

    for (const block of unplacedBlocks) {
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
                        newPlaced.push({ width, height, x, y });
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

    return newPlaced;
};
