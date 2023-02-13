function currency (nominal: number, currency = 'dolar'): string {
  if (currency === 'rupiah') {
    return nominal.toString();
  }

  return `$${nominal}`;
}

export default currency;
