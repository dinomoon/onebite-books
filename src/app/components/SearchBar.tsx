'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClick = () => {
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <input value={search} onChange={onChangeSearch} />
      <button onClick={onClick}>검색</button>
    </div>
  );
}
