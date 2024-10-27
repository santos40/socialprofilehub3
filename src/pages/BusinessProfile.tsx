import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BusinessMap } from '@/components/BusinessMap';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Globe, Instagram, Facebook, Linkedin, Phone, MapPin, Youtube } from 'lucide-react';
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
  youtube: 'https://youtube.com',
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
  const business = mockBusiness;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    description: business.description,
    image: business.logo,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address,
      addressLocality: 'Silicon Valley',
      addressRegion: 'CA',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.latitude,
      longitude: business.longitude
    },
    url: business.website,
    telephone: business.whatsapp,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.rating,
      bestRating: '5',
      worstRating: '1',
      ratingCount: '1'
    },
    sameAs: [
      business.facebook,
      business.instagram,
      business.linkedin,
      business.youtube
    ]
  };

  return (
    <>
      <Helmet>
        <title>{`${business.name} - Business Directory`}</title>
        <meta name="description" content={business.description} />
        <meta property="og:title" content={business.name} />
        <meta property="og:description" content={business.description} />
        <meta property="og:image" content={business.logo} />
        <meta property="og:type" content="business.business" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={business.name} />
        <meta name="twitter:description" content={business.description} />
        <meta name="twitter:image" content={business.logo} />
        <link rel="canonical" href={`https://yourdomain.com/business/${id}`} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <article className="container py-8" itemScope itemType="https://schema.org/LocalBusiness">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src={business.logo}
                  alt={`${business.name} logo`}
                  className="w-full rounded-lg object-cover"
                  itemProp="image"
                />
                <div className="mt-4 flex items-center gap-1" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                  <meta itemProp="ratingValue" content={business.rating.toString()} />
                  <meta itemProp="bestRating" content="5" />
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
                  <h1 className="text-3xl font-bold" itemProp="name">{business.name}</h1>
                  <Badge variant="secondary" className="text-lg">
                    <span itemProp="category">{business.category}</span>
                  </Badge>
                </div>

                <p className="text-lg text-muted-foreground mb-6" itemProp="description">
                  {business.description}
                </p>

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
                          itemProp="url"
                        >
                          <Globe className="w-5 h-5" />
                          Website
                        </a>
                      )}
                      {business.youtube && (
                        <a
                          href={business.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-red-600 hover:text-red-700"
                        >
                          <Youtube className="w-5 h-5" />
                          YouTube
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
                      <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                        <span itemProp="streetAddress">{business.address}</span>
                      </p>
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
                          itemProp="image"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </article>
    </>
  );
};

export default BusinessProfile;
