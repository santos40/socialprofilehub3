import React, { useState } from 'react';
import { BusinessCard } from '@/components/BusinessCard';
import { Pagination } from '@/components/Pagination';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Business } from '@/types/business';

// Temporary mock data
const mockBusinesses: Business[] = [
  {
    id: '1',
    name: 'Tech Solutions Inc',
    description: 'Leading technology solutions provider specializing in web development and cloud services.',
    logo: 'https://via.placeholder.com/150',
    category: 'Technology',
    website: 'https://example.com',
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    whatsapp: '5551234567890',
    address: '123 Tech Street, Silicon Valley, CA',
    latitude: 37.7749,
    longitude: -122.4194,
    rating: 4,
    photos: ['https://via.placeholder.com/300'],
    createdAt: new Date(),
  },
  // Add more mock businesses here
];

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
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Business Directory</h1>
        <Link to="/register">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Business
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {getCurrentPageItems().map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Index;