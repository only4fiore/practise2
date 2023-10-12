summ1 = 200000;
percent = 10;
term = 2;
summ2 = summ1 * Math.pow(((percent / 100) + 1), term);
overpay = summ2-summ1;
console.log(`${summ2} - Общая сумма выплаты\n${overpay} - Переплата`);