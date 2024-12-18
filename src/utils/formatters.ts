export const formatCurrency = (value: string, compact = false): string => {
  const numValue = parseFloat(value);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: compact ? 'compact' : 'standard',
    minimumFractionDigits: compact ? 0 : 2,
    maximumFractionDigits: compact ? 2 : 6
  }).format(numValue);
};

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    notation: value > 999999 ? 'compact' : 'standard',
    maximumFractionDigits: 2
  }).format(value);
};

export const formatPercentage = (value: string): string => {
  const numValue = parseFloat(value);
  const sign = numValue >= 0 ? '+' : '';
  return `${sign}${numValue.toFixed(2)}%`;
};