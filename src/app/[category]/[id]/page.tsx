export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string; category: string }>;
}) {
  const id = (await params).id;
  const category = (await params).category;
  return (
    <>
      <h1>
        {category}/{id}
      </h1>
    </>
  );
}
