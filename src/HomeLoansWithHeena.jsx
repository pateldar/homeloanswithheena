import React from 'react';
import { useEffect, useRef, useState } from "react";

export default function HomeLoansWithHeena() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Only trigger once
          }
        },
        { threshold: 0.3 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }, []);
    return (
    <div style={{ backgroundColor: 'white', color: 'black', animation: 'fadeIn 1.25s ease-in-out', animationFillMode: 'both' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#ebf4ff', padding: '1rem 1rem', textAlign: 'center' }}>
        
        <h1 style={{ fontSize: '56px', fontWeight: '700', marginBottom: '0.5rem' }}>
          Home Loans with Heena
        </h1>
        <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
          Your trusted mortgage advisor
        </p>
        <a
          href="https://1881674.my1003app.com/2528625/register"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#2563eb',
            color: 'white',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            display: 'inline-block',
            animation: 'pulse 5s infinite',
            transition: 'all 0.3s ease',
            fontWeight: 550
          }}
        >
          Apply Now
        </a>
      </section>

      {/* About Heena Section */}
      <section style={{ padding: '3rem 1rem 1rem', backgroundColor: '#ffffff' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            maxWidth: '1000px',
            margin: '0 auto',
            gap: '2rem'
          }}
        >
          {/* Headshot */}
          <img
            src={`${process.env.PUBLIC_URL}/headshot.jpg`}
            alt="Heena Patel Headshot"
            width={272}
            height={325}
            style={{
              borderRadius: '9999px',
              objectFit: 'cover',
              flexShrink: 0
            }}
          />
          {/* Bio Content */}
          <div style={{ flex: '1 1 300px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1rem' }}>
              Meet Heena Patel
            </h2>
            <p style={{ fontSize: '0.75rem', marginBottom: '0.75rem' }}>
              My path into the mortgage world wasn’t traditional, and that’s one of my biggest strengths. Before becoming a Senior Mortgage Loan Officer, I spent years as a Registered Nurse and a Property & Casualty Insurance Agent. These two careers that sharpened my ability to listen carefully, communicate clearly, and guide others through complex, emotional decisions. It’s that same mindset I bring to every client and partner I work with today. Together, it shapes how I approach lending: with precision, empathy, and a focus on the full picture.
            </p>
            <p style={{ fontSize: '0.75rem', marginBottom: '0.75rem' }}>
              These skills translate directly into helping borrowers confidently navigate the mortgage process—especially during pivotal moments like buying a first home, refinancing during financial change, or making housing decisions. Whether you’re working with a first-time buyer or a client with a more complex financial profile, I’m here to help make the process seamless, strategic, and tailored to their goals.
            </p>
            <p style={{ fontSize: '0.75rem', marginBottom: '0.75rem' }}>
              I work closely with a trusted network of realtors, financial advisors, attorneys, and other professionals who wants more than just a loan officer. They want a true partner for their clients. If you're looking for a mortgage partner who blends deep financial knowledge with genuine care for your clients’ well-being, communicates clearly, and moves quickly, then let’s connect and see how we can help more people move forward with confidence.
            </p>
            <p style={{ marginBottom: '0.5rem' }}> Phone: <a href="tel:5867448186" style={{ color: '#2563eb' }}>586.744.8186</a> </p>
            <p style={{ marginBottom: '0.5rem' }}> Fax: <a href="tel:3133121818" style={{ color: '#2563eb' }}>313.312.1818</a></p>
            <p style={{ marginBottom: '0.5rem' }}>Personal NMLS: 2528625</p>
          </div>
        </div>
      </section>

      {/* Zillow Reviews Section */}
      <section style={{ padding: '1rem 1rem 3rem', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>What Clients Say</h2>
        <a href="https://www.zillow.com/lender-profile/mortageswithheena/" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/zillow-badge.svg`} alt="Zillow Reviews" width={150} height={60} />
        </a>
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#4b5563' }}>Click above to view real client reviews on Zillow.</p>
      </section>

      {/* Process Overview Section */}
      <section ref={containerRef} style={{ backgroundColor: '#f9fafb', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '600', marginBottom: '2rem' }}>
            Our Simple Home Loan Process
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {[
              {
                step: 1,
                title: 'Pre-Approval',
                desc: 'Share your financials to see how much you can borrow and at what rate.'
              },
              {
                step: 2,
                title: 'Loan Application',
                desc: 'Find a home within your budget and formally apply for a mortgage.'
              },
              {
                step: 3,
                title: 'Lock Rate',
                desc: 'Secure a fixed interest rate for your mortgage during the lock-in period.'
              },
              {
                step: 4,
                title: 'Loan Processing',
                desc: 'The lender verifies your details and appraises the property.'
              },
              {
                step: 5,
                title: 'Underwriting',
                desc: 'The underwriter reviews your application to decide loan approval.'
              },
              {
                step: 6,
                title: 'Closing',
                desc: 'Sign final documents, pay closing costs & officially own your new home.'
              }
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ animation: isVisible ? `bounceIn 0.6s ease-out ${step * 0.45}s forwards` : 'none', backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#2563eb', marginBottom: '0.25rem' }}>Step {step}</div>
                <div style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>{title}</div>
                <p style={{ fontSize: '0.95rem', color: '#4b5563' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing Info Section */}
      <section style={{ padding: '3rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '600', marginBottom: '2rem' }}>Licensed Mortgage Providers</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            <a href="https://www.nextstep-lending.com/heenapatel" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                style={{ flex: '1 1 300px', border: '1px solid #e5e7eb', borderRadius: '0.5rem',  padding: '1rem', textAlign: 'center', transition: 'box-shadow 0.3s ease', cursor: 'pointer'}}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <img src={`${process.env.PUBLIC_URL}/next-step-logo.png`} alt="Next Step Lending" width={200} height={50} />
                <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', color: '#4b5563' }}>
                  Company NMLS: 28364396
                </p>
                <ul style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#374151', textAlign: 'left' }}>
                  <li>Licensed in: Michigan, Florida, Colorado</li>
                  <li style={{ color: '#d97706' }}>South Carolina coming soon</li>
                  <li style={{ color: '#d97706' }}>Montana coming soon</li>
                </ul>
              </div>
            </a>
            <a href="https://trademarkfinancing.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>   
              <div style={{ flex: '1 1 600px', maxWidth: '600px', border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '0.4rem 4.2rem 0.9rem', textAlign: 'center', transition: 'box-shadow 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <img src={`${process.env.PUBLIC_URL}/trademark-logo.png`} alt="Next Step Lending" width={175} height={90} style={{ display: 'block', margin: '0 auto 0.5rem' }}/>
                <p style={{ fontSize: '0.875rem', marginTop: '0.1rem', color: '#4b5563' }}>
                  Company NMLS: 2280853
                </p>
                <ul style={{ marginTop: '0.3rem', fontSize: '0.875rem', color: '#374151', textAlign: 'left'  }}>
                  <li>Licensed in: Texas</li>
                  <li style={{ color: '#d97706' }}>Coming Soon: California</li>
                </ul>
              </div>
            </a>
          </div>
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Coverage Map</h3>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>Explore where our lenders are licensed to serve you.</p>
            <img src={`${process.env.PUBLIC_URL}/availmap.png`} alt="Licensed States Map" style={{ maxWidth: '100%', borderRadius: '0.5rem' }} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '3rem 1rem', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Get In Touch</h2>
          <form style={{ display: 'grid', gap: '1rem' }}>
            <input type="text" placeholder="Your Name" required style={{ padding: '0.75rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }} />
            <input type="email" placeholder="Your Email" required style={{ padding: '0.75rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }} />
            <textarea placeholder="Your Message" rows={4} required style={{ padding: '0.75rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }}></textarea>
            <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#2563eb', color: 'white', borderRadius: '0.375rem', border: 'none' }}>Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
