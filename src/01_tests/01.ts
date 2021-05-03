export function sum (a: number, b: number) {
    return a + b;
}

export function mult (a: number, b: number) {
    return a * b;
}

export function splitIntoWords (sentence: string) {
    const word = sentence.toLowerCase().split(" "); //Разделение предложения на слова с приведением к нижнему регистру
    return word.filter(w => w !== "").map(w => w.replace("!", "")) //фильтрация пробелов и замена восклицательного знака на пустую строку
}