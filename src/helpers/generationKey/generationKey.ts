export const generationKey = (): number => {
    return Math.round(Math.random() * 10000000);
}