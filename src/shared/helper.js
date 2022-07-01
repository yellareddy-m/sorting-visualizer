export async function delay(time) {
    await new Promise(resolve => setTimeout(resolve, time))
}

export function generateRandomArray() {
    const length = 6 + Math.floor(Math.random() * 10);
    const array = [];
    for (let i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random() * 999)
    }
    return array;
}
