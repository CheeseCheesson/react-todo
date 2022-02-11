export function calcLeftItems(mock) {
  return (
    mock.length -
    1 -
    mock.reduce((acc, item) => {
      if (item.status) {
        console.log(item.status);
        acc++;
      }
      return acc;
    }, 0)
  );
}
