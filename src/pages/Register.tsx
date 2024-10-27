import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BusinessRegistrationForm } from '@/components/BusinessRegistrationForm';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Register Your Business - Business Directory</title>
        <meta name="description" content="Register your business in our directory to increase your online presence and reach more customers." />
      </Helmet>

      <div className="container max-w-3xl py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Register Your Business</CardTitle>
            <CardDescription>
              Fill out the form below to add your business to our directory.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BusinessRegistrationForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Register;