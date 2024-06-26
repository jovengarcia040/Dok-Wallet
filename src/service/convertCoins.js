import mathRound2 from 'service/mathRound2';

const convertCoins = (coins, currency) => {
  if (currency === 'EURO') {
    return coins.map(coin => {
      return {
        ...coin,
        currencyRate: String(mathRound2(Number(coin.currencyRate) * 0.9)),
        totalCourse: String(
          mathRound2(
            Number(coin.currencyRate) * 0.9 * Number(coin.totalAmount),
          ),
        ),
      };
    });
  }

  if (currency === 'USD') {
    return coins.map(coin => {
      return {
        ...coin,
        currencyRate: String(mathRound2(Number(coin.currencyRate) / 0.9)),
        totalCourse: String(
          mathRound2(
            (Number(coin.currencyRate) / 0.9) * Number(coin.totalAmount),
          ),
        ),
      };
    });
  }
};

export default convertCoins;
