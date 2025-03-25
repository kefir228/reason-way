import data from '../blocks.json' assert {type: 'json'}

interface Block {
    width: number
    height: number
}

interface Container {
    width: number
    height: number
}

interface BlocksData {
    blocks: Block[]
    container: Container
}

export const DataParse = (): BlocksData => data
