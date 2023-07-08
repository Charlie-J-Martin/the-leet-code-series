export const calculateLeftSum = (leftElements: number[]) => leftElements.reduce(((acc, curr) => acc + curr), 0)
export const calculateRightSum = (rightElements: number[]) => rightElements.reduce(((acc, curr) => acc + curr), 0)

export const pivotIndex = (nums: number[]): number => {
    for(let pivotIndex = 0; pivotIndex < nums.length; pivotIndex++){
        const leftElements = nums.slice(0, pivotIndex)
        const rightElements = nums.slice(pivotIndex + 1, nums.length)
        const leftSum = calculateLeftSum(leftElements)
        const rightSum = calculateRightSum(rightElements)
        if(leftSum === rightSum) {
            return pivotIndex
        }
    }
    return -1
};
