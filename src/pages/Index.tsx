import React, { useState } from 'react';
import { BusinessCard } from '@/components/BusinessCard';
import { Pagination } from '@/components/Pagination';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Business } from '@/types/business';

const mockBusinesses: Business[] = [
  {
    id: '1',
    name: 'TechHub Solutions',
    description: 'Leading software development company specializing in web applications and cloud solutions. We help businesses transform their digital presence.',
    logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    category: 'Technology',
    website: 'https://techhub.example.com',
    instagram: 'https://instagram.com/techhub',
    facebook: 'https://facebook.com/techhub',
    linkedin: 'https://linkedin.com/company/techhub',
    youtube: 'https://youtube.com/techhub',
    whatsapp: '5551234567890',
    address: '123 Innovation Drive, Silicon Valley, CA',
    latitude: 37.7749,
    longitude: -122.4194,
    rating: 4.8,
    photos: ['https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'],
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'Digital Marketing Pro',
    description: 'Full-service digital marketing agency helping businesses grow their online presence through SEO, social media, and content marketing.',
    logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    category: 'Marketing',
    website: 'https://digitalmarketingpro.example.com',
    instagram: 'https://instagram.com/digitalmarketingpro',
    facebook: 'https://facebook.com/digitalmarketingpro',
    linkedin: 'https://linkedin.com/company/digitalmarketingpro',
    youtube: 'https://youtube.com/digitalmarketingpro',
    whatsapp: '5551234567891',
    address: '456 Marketing Avenue, New York, NY',
    latitude: 40.7128,
    longitude: -74.0060,
    rating: 4.5,
    photos: ['https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'],
    createdAt: new Date('2024-01-16'),
  },
  {
    id: '3',
    name: 'CloudTech Services',
    description: 'Expert cloud computing solutions and infrastructure management for businesses of all sizes.',
    logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    category: 'Technology',
    website: 'https://cloudtech.example.com',
    instagram: 'https://instagram.com/cloudtech',
    facebook: 'https://facebook.com/cloudtech',
    linkedin: 'https://linkedin.com/company/cloudtech',
    youtube: 'https://youtube.com/cloudtech',
    whatsapp: '5551234567892',
    address: '789 Cloud Street, Seattle, WA',
    latitude: 47.6062,
    longitude: -122.3321,
    rating: 4.7,
    photos: ['https://images.unsplash.com/photo-1518770660439-4636190af475'],
    createdAt: new Date('2024-01-17'),
  },
  {
    id: '4',
    name: 'CodeCraft Academy',
    description: 'Premier coding bootcamp offering intensive programming courses and career development support.',
    logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    category: 'Education',
    website: 'https://codecraft.example.com',
    instagram: 'https://instagram.com/codecraft',
    facebook: 'https://facebook.com/codecraft',
    linkedin: 'https://linkedin.com/company/codecraft',
    youtube: 'https://youtube.com/codecraft',
    whatsapp: '5551234567893',
    address: '321 Learning Lane, Austin, TX',
    latitude: 30.2672,
    longitude: -97.7431,
    rating: 4.9,
    photos: ['https://images.unsplash.com/photo-1461749280684-dccba630e2f6'],
    createdAt: new Date('2024-01-18'),
  },
  {
    id: '5',
    name: 'Cyber Security Plus',
    description: 'Comprehensive cybersecurity solutions protecting businesses from digital threats and vulnerabilities.',
    logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    category: 'Security',
    website: 'https://cybersecplus.example.com',
    instagram: 'https://instagram.com/cybersecplus',
    facebook: 'https://facebook.com/cybersecplus',
    linkedin: 'https://linkedin.com/company/cybersecplus',
    youtube: 'https://youtube.com/cybersecplus',
    whatsapp: '5551234567894',
    address: '567 Security Blvd, Boston, MA',
    latitude: 42.3601,
    longitude: -71.0589,
    rating: 4.6,
    photos: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'],
    createdAt: new Date('2024-01-19'),
  },
  {
    id: '6',
    name: 'DataSense Analytics',
    description: 'Data analytics and business intelligence solutions helping companies make data-driven decisions.',
    logo: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    category: 'Analytics',
    website: 'https://datasense.example.com',
    instagram: 'https://instagram.com/datasense',
    facebook: 'https://facebook.com/datasense',
    linkedin: 'https://linkedin.com/company/datasense',
    youtube: 'https://youtube.com/datasense',
    whatsapp: '5551234567895',
    address: '890 Data Drive, Chicago, IL',
    latitude: 41.8781,
    longitude: -87.6298,
    rating: 4.4,
    photos: ['https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'],
    createdAt: new Date('2024-01-20'),
  },
  {
    id: '7',
    name: 'AI Solutions Lab',
    description: 'Innovative artificial intelligence and machine learning solutions for modern businesses.',
    logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    category: 'Technology',
    website: 'https://aisolutions.example.com',
    instagram: 'https://instagram.com/aisolutions',
    facebook: 'https://facebook.com/aisolutions',
    linkedin: 'https://linkedin.com/company/aisolutions',
    youtube: 'https://youtube.com/aisolutions',
    whatsapp: '5551234567896',
    address: '432 AI Park, San Francisco, CA',
    latitude: 37.7749,
    longitude: -122.4194,
    rating: 4.7,
    photos: ['https://images.unsplash.com/photo-1519389950473-47ba0277781c'],
    createdAt: new Date('2024-01-21'),
  },
  {
    id: '8',
    name: 'WebDev Masters',
    description: 'Expert web development services creating stunning and functional websites for businesses.',
    logo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    category: 'Technology',
    website: 'https://webdevmasters.example.com',
    instagram: 'https://instagram.com/webdevmasters',
    facebook: 'https://facebook.com/webdevmasters',
    linkedin: 'https://linkedin.com/company/webdevmasters',
    youtube: 'https://youtube.com/webdevmasters',
    whatsapp: '5551234567897',
    address: '765 Web Lane, Portland, OR',
    latitude: 45.5155,
    longitude: -122.6789,
    rating: 4.8,
    photos: ['https://images.unsplash.com/photo-1498050108023-c5249f4df085'],
    createdAt: new Date('2024-01-22'),
  },
  {
    id: '9',
    name: 'Mobile App Innovators',
    description: 'Creative mobile app development company delivering innovative solutions for iOS and Android.',
    logo: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    category: 'Technology',
    website: 'https://mobileapp.example.com',
    instagram: 'https://instagram.com/mobileapp',
    facebook: 'https://facebook.com/mobileapp',
    linkedin: 'https://linkedin.com/company/mobileapp',
    youtube: 'https://youtube.com/mobileapp',
    whatsapp: '5551234567898',
    address: '543 Mobile Street, Denver, CO',
    latitude: 39.7392,
    longitude: -104.9903,
    rating: 4.6,
    photos: ['https://images.unsplash.com/photo-1649972904349-6e44c42644a7'],
    createdAt: new Date('2024-01-23'),
  },
  {
    id: '10',
    name: 'Tech Training Hub',
    description: 'Comprehensive technology training and certification programs for IT professionals.',
    logo: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c',
    category: 'Education',
    website: 'https://techtraining.example.com',
    instagram: 'https://instagram.com/techtraining',
    facebook: 'https://facebook.com/techtraining',
    linkedin: 'https://linkedin.com/company/techtraining',
    youtube: 'https://youtube.com/techtraining',
    whatsapp: '5551234567899',
    address: '987 Training Center Rd, Miami, FL',
    latitude: 25.7617,
    longitude: -80.1918,
    rating: 4.5,
    photos: ['https://images.unsplash.com/photo-1473091534298-04dcbce3278c'],
    createdAt: new Date('2024-01-24'),
  },
  {
    id: '11',
    name: 'Green Energy Solutions',
    description: 'Sustainable energy solutions and consulting for businesses looking to reduce their carbon footprint and implement eco-friendly practices.',
    logo: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9',
    category: 'Energy',
    website: 'https://greenenergy.example.com',
    instagram: 'https://instagram.com/greenenergy',
    facebook: 'https://facebook.com/greenenergy',
    linkedin: 'https://linkedin.com/company/greenenergy',
    youtube: 'https://youtube.com/greenenergy',
    whatsapp: '5551234567900',
    address: '123 Eco Street, San Diego, CA',
    latitude: 32.7157,
    longitude: -117.1611,
    rating: 4.9,
    photos: ['https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9'],
    createdAt: new Date('2024-01-25'),
  },
  {
    id: '12',
    name: 'HealthTech Innovations',
    description: 'Healthcare technology solutions provider specializing in telemedicine platforms and medical software systems.',
    logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
    category: 'Healthcare',
    website: 'https://healthtech.example.com',
    instagram: 'https://instagram.com/healthtech',
    facebook: 'https://facebook.com/healthtech',
    linkedin: 'https://linkedin.com/company/healthtech',
    youtube: 'https://youtube.com/healthtech',
    whatsapp: '5551234567901',
    address: '456 Medical Plaza, Houston, TX',
    latitude: 29.7604,
    longitude: -95.3698,
    rating: 4.7,
    photos: ['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d'],
    createdAt: new Date('2024-01-26'),
  },
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
