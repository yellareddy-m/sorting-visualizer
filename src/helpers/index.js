export async function delay(time) {
    await new Promise(resolve => setTimeout(resolve, time))
}
