import React from 'react';
import { useParams } from 'react-router-dom';
import { BusinessMap } from '@/components/BusinessMap';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Globe, Instagram, Facebook, Linkedin, Phone, MapPin } from 'lucide-react';
import { Business } from '@/types/business';

// Temporary mock data (replace with actual data fetching)
const mockBusiness: Business = {
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
};

const BusinessProfile = () => {
  const { id } = useParams();
  const business = mockBusiness; // Replace with actual data fetching

  return (
    <div className="container py-8">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img
                src={business.logo}
                alt={`${business.name} logo`}
                className="w-full rounded-lg object-cover"
              />
              <div className="mt-4 flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-5 h-5 ${
                      index < business.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-3xl font-bold">{business.name}</h1>
                <Badge variant="secondary" className="text-lg">
                  {business.category}
                </Badge>
              </div>

              <p className="text-lg text-muted-foreground mb-6">{business.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Contact & Social</h2>
                  <div className="space-y-3">
                    {business.website && (
                      <a
                        href={business.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-primary/80"
                      >
                        <Globe className="w-5 h-5" />
                        Website
                      </a>
                    )}
                    {business.instagram && (
                      <a
                        href={business.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-pink-500 hover:text-pink-600"
                      >
                        <Instagram className="w-5 h-5" />
                        Instagram
                      </a>
                    )}
                    {business.facebook && (
                      <a
                        href={business.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                      >
                        <Facebook className="w-5 h-5" />
                        Facebook
                      </a>
                    )}
                    {business.linkedin && (
                      <a
                        href={business.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
                      >
                        <Linkedin className="w-5 h-5" />
                        LinkedIn
                      </a>
                    )}
                    {business.whatsapp && (
                      <a
                        href={`https://wa.me/${business.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-500 hover:text-green-600"
                      >
                        <Phone className="w-5 h-5" />
                        WhatsApp
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Location</h2>
                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="w-5 h-5 mt-1 text-primary" />
                    <p>{business.address}</p>
                  </div>
                  <BusinessMap latitude={business.latitude} longitude={business.longitude} />
                </div>
              </div>

              {business.photos.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4">Photos</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {business.photos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`${business.name} photo ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessProfile;