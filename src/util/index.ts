export const formatNumber = (text: string) => {
  try {
    if (!text) {
      return 0;
    }
    return Number.parseFloat(text);
  } catch {
    return 0;
  }
};
