export const formatMoney = (value: number | bigint | string): string => {
  const num = Number(value);
  const formatter = new Intl.NumberFormat("id", {
    style: "currency",
    currency: "IDR",
    currencyDisplay: "code",
    maximumFractionDigits: 0,
  });
  const money = formatter.format(num);
  return money;
};
