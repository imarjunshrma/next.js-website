async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}

const FetchBlogsWithId = async ({ params }) => {
  const id = params.id;
  //   console.log(typeof id);
  const data = await getData(id);
  console.log(data);
  return <div className="section">{data.description}</div>;
};

export default FetchBlogsWithId;
