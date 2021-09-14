export function pad2(number: number): string {
    if (number < 10) return `0${number}`;
    return `${number}`
}