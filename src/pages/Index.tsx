import React, { useState } from 'react';
import { DirectoryHeader } from '@/components/directory/DirectoryHeader';
import { DirectoryGrid } from '@/components/directory/DirectoryGrid';
import { Pagination } from '@/components/Pagination';
import { mockBusinesses } from '@/components/directory/DirectoryData';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(mockBusinesses.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return mockBusinesses.slice(startIndex, endIndex);
  };

  return (
    <div className="container py-8">
      <DirectoryHeader />
      <DirectoryGrid businesses={getCurrentPageItems()} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Index;