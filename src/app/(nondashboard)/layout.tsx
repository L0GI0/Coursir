import NonDashboardNavbar from '@/components/NonDashboardNavbar';
import Footer from '@/components/Footer';
import { ClerkProvider } from '@clerk/nextjs';

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider>
      <div className="nondashboard-layout">
        <NonDashboardNavbar />
        <main className="nondashboard-layout__main">
          {children}
        </main>
        <Footer/>
      </div>
    </ClerkProvider>
  );
}
