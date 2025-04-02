const colorMap = new Map<string, string>()

export const RandomColor = (width: number, height: number) => {
    const key = `${width}*${height}`

    if (!colorMap.has(key)) {
        const ltr = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += ltr[Math.floor(Math.random() * 16)]
        }
        colorMap.set(key, color)
    }

    return colorMap.get(key)
}