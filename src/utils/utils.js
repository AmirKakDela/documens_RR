// в идеале использовать Lodash или рекурсивную функцию копирования
export const getCopy = (item) => JSON.parse(JSON.stringify(item));

