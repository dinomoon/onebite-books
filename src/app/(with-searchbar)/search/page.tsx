import ClientComponent from '@/app/components/Client';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  console.log(q);

  return (
    <div>
      Search Page : {q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
