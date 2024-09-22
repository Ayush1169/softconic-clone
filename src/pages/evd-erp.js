import React from 'react';
import { ArrowRight, BarChart2, Users, Package, FileText, Shield, Zap, Briefcase, Layers, PieChart } from 'lucide-react';
import Layout from '../components/layout/Layout';

const EVDERPLandingPage = () => {
  return (
   <>
   <Layout>
   <div className="evd-erp-landing">
      <header>
        <h1>EVD ERP</h1>
        <p className="tagline">Transform Your Business: Simplify, Automate and Succeed</p>
      </header>
      
      <section className="intro">
        <h2>Comprehensive Enterprise Resource Planning Solution</h2>
        <p>EVD ERP is designed to simplify and enhance business processes across various sectors. With features such as inventory and team management, invoicing, and lead tracking, EVD ERP empowers businesses to stay organized, improve productivity, and drive efficiency in day-to-day operations.</p>
        <button className="cta-button">Get Started <ArrowRight size={20} /></button>
      </section>

      <section className="highlights">
        <h2>Highlights of EVD ERP</h2>
        <ul>
          <li><strong>Comprehensive Management:</strong> Integrates multiple management functions in one platform.</li>
          <li><strong>User-Friendly Interface:</strong> Easy to navigate and understand for all users.</li>
          <li><strong>Customizable Features:</strong> Tailors to specific business needs for maximum efficiency.</li>
          <li><strong>Real-Time Insights:</strong> Provides up-to-date information for better decision-making.</li>
          <li><strong>Scalable Solution:</strong> Grows with your business, adapting to changing needs.</li>
        </ul>
      </section>

      <section className="vision-goal">
        <div className="vision">
          <h3>Vision</h3>
          <p>To provide a smart, scalable, and customizable ERP solution that adapts to the unique needs of each business, driving productivity and operational success.</p>
        </div>
        <div className="goal">
          <h3>Goal</h3>
          <p>EVD ERP aims to centralize and automate core business functions, reducing manual work and improving decision-making for business leaders.</p>
        </div>
      </section>

      <section className="focus-areas">
        <h2>Focus Areas</h2>
        <ul>
          <li>Enhancing business productivity</li>
          <li>Streamlining daily operations</li>
          <li>Enabling informed decision-making</li>
          <li>Improving team collaboration and efficiency</li>
          <li>Supporting growth through scalable solutions</li>
        </ul>
      </section>

      <section className="objectives">
        <h2>Objectives of EVD ERP</h2>
        <div className="objective-grid">
          <div className="objective-card">
            <h3>1. Custom Design and Development</h3>
            <p>EVD ERP offers a customizable interface, allowing businesses to tailor the system to meet their specific operational requirements.</p>
          </div>
          <div className="objective-card">
            <h3>2. Super Admin Dashboard</h3>
            <p>A centralized dashboard that provides a bird's-eye view of all business activities, from inventory to sales, enabling strategic decision-making.</p>
          </div>
          <div className="objective-card">
            <h3>3. Role and Permission-Based Users</h3>
            <p>Grant specific access levels to different user roles, ensuring security and control over sensitive information while empowering teams to work efficiently.</p>
          </div>
          <div className="objective-card">
            <h3>4. MIS (Management Information Systems)</h3>
            <p>EVD ERP provides detailed reports and insights into business performance, helping organizations to analyze trends, forecast sales, and optimize operations.</p>
          </div>
          <div className="objective-card">
            <h3>5. Automation of Business Processes</h3>
            <p>Automate repetitive tasks like invoice generation, report creation, and inventory updates, reducing errors and saving valuable time.</p>
          </div>
        </div>
      </section>

      <section className="major-features">
        <h2>Major Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <Package size={48} />
            <h3>Inventory Management</h3>
            <p>Real-time tracking of stock, low stock alerts, and automatic reordering.</p>
          </div>
          <div className="feature-card">
            <Users size={48} />
            <h3>Team Management</h3>
            <p>Efficient scheduling, task assignments, and attendance tracking.</p>
          </div>
          <div className="feature-card">
            <FileText size={48} />
            <h3>Quotation Management</h3>
            <p>Easy generation, tracking, and conversion of quotes into orders.</p>
          </div>
          <div className="feature-card">
            <BarChart2 size={48} />
            <h3>Lead Management</h3>
            <p>Manage leads from capture to conversion, ensuring no opportunity is missed.</p>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <h2>Technology Stack</h2>
        <p>EVD ERP is built using the latest technologies for a robust and scalable platform:</p>
        <ul>
          <li><strong>Backend:</strong> Node.js</li>
          <li><strong>Frontend:</strong> React.js</li>
          <li><strong>Database:</strong> MongoDB</li>
          <li><strong>Cloud:</strong> AWS</li>
        </ul>
      </section>

      <section className="benefits">
        <h2>Benefits of EVD ERP</h2>
        <div className="benefits-grid">
          <div className="benefit-column">
            <h3>For Decision Makers</h3>
            <ul>
              <li>Better Visibility</li>
              <li>Improved Forecasting</li>
              <li>Cost Savings</li>
              <li>Scalability</li>
              <li>Data Security</li>
              <li>Compliance</li>
              <li>Streamlined Operations</li>
              <li>Increased Productivity</li>
            </ul>
          </div>
          <div className="benefit-column">
            <h3>For Employees</h3>
            <ul>
              <li>Simplified Processes</li>
              <li>Job Clarity</li>
              <li>Collaborative Tools</li>
              <li>Efficient Workflows</li>
              <li>Accessibility</li>
              <li>Error Reduction</li>
              <li>Skill Development</li>
              <li>Motivation</li>
            </ul>
          </div>
          <div className="benefit-column">
            <h3>For Customers</h3>
            <ul>
              <li>Faster Service</li>
              <li>Accurate Invoicing</li>
              <li>Improved Communication</li>
              <li>Personalized Experiences</li>
              <li>Reduced Delays</li>
              <li>Better Transparency</li>
              <li>Higher Satisfaction</li>
              <li>Trust</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="industries">
        <h2>Applicability Across Multiple Industries</h2>
        <p>EVD ERP is a versatile solution suitable for businesses in various sectors, including:</p>
        <div className="industry-grid">
          {['Retail', 'Manufacturing', 'Education', 'Healthcare', 'Logistics', 'Construction', 'Real Estate', 'IT Services', 'Automotive', 'Hospitality'].map((industry, index) => (
            <div key={index} className="industry-card">{industry}</div>
          ))}
        </div>
      </section>

      <section className="common-features">
        <h2>Common Features Demonstrating Impact</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <Zap size={48} />
            <h3>Automation</h3>
            <p>Reduces manual labor, minimizing errors and speeding up operations.</p>
          </div>
          <div className="feature-card">
            <Layers size={48} />
            <h3>Centralized System</h3>
            <p>Consolidates all business processes into one platform for ease of use.</p>
          </div>
          <div className="feature-card">
            <PieChart size={48} />
            <h3>Data Analytics</h3>
            <p>Provides actionable insights that drive informed decisions.</p>
          </div>
          <div className="feature-card">
            <Briefcase size={48} />
            <h3>Scalability</h3>
            <p>Grows alongside your business, offering flexible solutions at every stage.</p>
          </div>
        </div>
      </section>

      <section className="conclusion" style={{backgroundcolor: "#000"}}>
        <h2>Conclusion</h2>
        <p>EVD ERP is an essential tool for businesses looking to enhance operational efficiency, improve team management, and provide better customer service. With its customizable features, role-based access, and real-time insights, EVD ERP is designed to support decision-makers, employees, and customers alike. By implementing EVD ERP, businesses across industries can streamline their processes, save time, and focus on growth.</p>
        <button className="cta-button">Get Started with EVD ERP <ArrowRight size={20} /></button>
      </section>
    </div>
   </Layout>
   </>
  );
};

export default EVDERPLandingPage;