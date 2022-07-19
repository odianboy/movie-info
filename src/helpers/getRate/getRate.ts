export const getRate = (rate: number): number => {
    const fivePoints = [10, 9];
    const fourPoints = [8, 7, 6];
    const threePoints = [5, 4];
    const twoPoints = [3, 2];

    return fivePoints.includes(rate) ? 5 :
        fourPoints.includes(rate) ? 4 :
        threePoints.includes(rate) ? 3 : 
        twoPoints.includes(rate) ? 2 :
        1
}