async function getData() {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve('recommendations ' + new Date().toISOString()),
      5000
    );
  });
}

export default async function Offers() {
  const data = await getData();

  return <div>{data}</div>;
}
