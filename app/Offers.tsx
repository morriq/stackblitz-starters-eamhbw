async function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('offers ' + new Date().toISOString()), 2000);
  });
}

export default async function Offers() {
  const data = await getData();

  return <div>{data}</div>;
}
