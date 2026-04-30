import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const DoctorSearch = React.lazy(() => import('./pages/DoctorSearch'));
const SymptomChecker = React.lazy(() => import('./pages/SymptomChecker'));
const TravelerMode = React.lazy(() => import('./pages/TravelerMode'));
const DoctorDetail = React.lazy(() => import('./pages/DoctorDetail'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));

// Loader component for suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-surface-dim">
    <div className="flex flex-col items-center gap-4">
      <span className="material-symbols-outlined text-primary text-4xl animate-spin">progress_activity</span>
      <p className="text-on-surface-variant font-medium">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      {/* Global toast notification container */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '500',
          },
          success: {
            iconTheme: { primary: '#22c55e', secondary: '#fff' },
          },
          error: {
            iconTheme: { primary: '#ef4444', secondary: '#fff' },
          },
        }}
      />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<DoctorSearch />} />
          <Route path="/symptom-checker" element={<SymptomChecker />} />
          <Route path="/traveler-mode" element={<TravelerMode />} />
          <Route path="/doctor/:id" element={<DoctorDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

