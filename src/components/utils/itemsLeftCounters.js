export function calcLeftItems(mock) {
  return (
    mock.length  -
    mock.reduce((acc, item) => {
      if (item.status) {
        acc++;
      }
      return acc;
    }, 0)
  );
}
