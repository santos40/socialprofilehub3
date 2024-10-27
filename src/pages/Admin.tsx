import { Helmet } from 'react-helmet-async';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Admin = () => {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard - SocialProfileHub</title>
      </Helmet>

      <div className="container py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Admin Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <AdminDashboard />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Admin;