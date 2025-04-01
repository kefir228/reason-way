import data from '../blocks.json' assert {type: 'json'}

export interface Block {
    width: number
    height: number
    x?:number
    y?:number
}

export interface Container {
    width: number
    height: number
}

interface BlocksData {
    blocks: Block[]
    container: Container
}

export const DataParse = (): BlocksData => data
