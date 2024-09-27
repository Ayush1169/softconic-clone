import React from 'react';
import { ArrowRight, BarChart2, Users, Package, FileText, Shield, Zap, Briefcase, Layers, PieChart, CheckCircle, TrendingUp, DollarSign, Award, ThumbsUp, Database, Cloud, Clock, Eye, ThumbsUpIcon, ShieldAlert } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { ShoppingBag, Factory, School, Heart, Truck, Building, Home, Server, Car, Coffee } from 'lucide-react';


const industryIcons = {
  Retail: <ShoppingBag />,
  Manufacturing: <Factory />,
  Education: <School />,
  Healthcare: <Heart />,
  Logistics: <Truck />,
  Construction: <Building />,
  'Real Estate': <Home />,
  'IT Services': <Server />,
  Automotive: <Car />,
  Hospitality: <Coffee />
};

const EVDERPLandingPage = () => {
  return (
    <Layout>
      <div className="evd-erp-landing">
        <header>
          <h1>EVD ERP</h1>
          <p className="tagline">Transform Your Business: Simplify, Automate and Succeed</p>
        </header>

        <section className="intro">
          <h2>Comprehensive Enterprise Resource Planning Solution</h2>
          <p>EVD ERP is designed to simplify and enhance business processes across various sectors. With features such as inventory and team management, invoicing, and lead tracking, EVD ERP empowers businesses to stay organized, improve productivity, and drive efficiency in day-to-day operations.</p>
          <img
            src="/assets/img/Contact.jpg"
            alt="EVD Smartbook in Action"
            style={{
              width: '100%',
              maxWidth: '800px',
              height: 'auto',
              margin: '20px auto',
              display: 'block',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          />
        </section>

        <section className="highlights">
          <h2>Highlights of EVD ERP</h2>
          <ul>
            <li><CheckCircle size={24} /> <strong>Comprehensive Management:</strong> Integrates multiple management functions in one platform.</li>
            <li><Users size={24} /> <strong>User-Friendly Interface:</strong> Easy to navigate and understand for all users.</li>
            <li><Layers size={24} /> <strong>Customizable Features:</strong> Tailors to specific business needs for maximum efficiency.</li>
            <li><TrendingUp size={24} /> <strong>Real-Time Insights:</strong> Provides up-to-date information for better decision-making.</li>
            <li><Briefcase size={24} /> <strong>Scalable Solution:</strong> Grows with your business, adapting to changing needs.</li>
          </ul>
        </section>

        <section className="vision-goal">
          <div className="vision">
            <h3><PieChart size={24} /> Vision</h3>
            <p>To provide a smart, scalable, and customizable ERP solution that adapts to the unique needs of each business, driving productivity and operational success.</p>
          </div>
          <div className="goal">
            <h3><Award size={24} /> Goal</h3>
            <p>EVD ERP aims to centralize and automate core business functions, reducing manual work and improving decision-making for business leaders.</p>
          </div>
        </section>

        <section className="focus-areas">
          <h2>Focus Areas</h2>
          <ul>
            <li><TrendingUp size={24} /> Enhancing business productivity</li>
            <li><Zap size={24} /> Streamlining daily operations</li>
            <li><BarChart2 size={24} /> Enabling informed decision-making</li>
            <li><Users size={24} /> Improving team collaboration and efficiency</li>
            <li><Briefcase size={24} /> Supporting growth through scalable solutions</li>
          </ul>
        </section>

        <section className="objectives">
          <h2>Objectives of EVD ERP</h2>
          <div className="objective-grid">
            <div className="objective-card">
              <h3><Layers size={24} /> 1. Custom Design and Development</h3>
              <p>EVD ERP offers a customizable interface, allowing businesses to tailor the system to meet their specific operational requirements.</p>
            </div>
            <div className="objective-card">
              <h3><BarChart2 size={24} /> 2. Super Admin Dashboard</h3>
              <p>A centralized dashboard that provides a bird's-eye view of all business activities, from inventory to sales, enabling strategic decision-making.</p>
            </div>
            <div className="objective-card">
              <h3><Shield size={24} /> 3. Role and Permission-Based Users</h3>
              <p>Grant specific access levels to different user roles, ensuring security and control over sensitive information while empowering teams to work efficiently.</p>
            </div>
            <div className="objective-card">
              <h3><PieChart size={24} /> 4. MIS (Management Information Systems)</h3>
              <p>EVD ERP provides detailed reports and insights into business performance, helping organizations to analyze trends, forecast sales, and optimize operations.</p>
            </div>
            <div className="objective-card">
              <h3><Zap size={24} /> 5. Automation of Business Processes</h3>
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
          <img
            src="/assets/img/Contact.jpg"
            alt="EVD Smartbook in Action"
            style={{
              width: '100%',
              maxWidth: '800px',
              height: 'auto',
              margin: '20px auto',
              display: 'block',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          />
        </section>

        <section className="tech-stack">
          <h2>Technology Stack</h2>
          <p>EVD ERP is built using the latest technologies for a robust and scalable platform:</p>
          <ul>
            <li><Server size={24} /> <strong>Backend:</strong> Node.js</li>
            <li><Layers size={24} /> <strong>Frontend:</strong> React.js</li>
            <li><Database size={24} /> <strong>Database:</strong> MongoDB</li>
            <li><Cloud size={24} /> <strong>Cloud:</strong> AWS</li>
          </ul>
        </section>

        <section className="benefits">
          <h2>Benefits of EVD ERP</h2>
          <div className="benefits-grid">
            <div className="benefit-column">
              <h3><Briefcase size={24} /> For Decision Makers</h3>
              <ul>
                <li><CheckCircle size={16} /> Better Visibility</li>
                <li><TrendingUp size={16} /> Improved Forecasting</li>
                <li><DollarSign size={16} /> Cost Savings</li>
                <li><Briefcase size={16} /> Scalability</li>
                <li><Shield size={16} /> Data Security</li>
                <li><FileText size={16} /> Compliance</li>
                <li><Zap size={16} /> Streamlined Operations</li>
                <li><BarChart2 size={16} /> Increased Productivity</li>
              </ul>
            </div>
            <div className="benefit-column">
              <h3><Users size={24} /> For Employees</h3>
              <ul>
                <li><Layers size={16} /> Simplified Processes</li>
                <li><FileText size={16} /> Job Clarity</li>
                <li><Users size={16} /> Collaborative Tools</li>
                <li><Zap size={16} /> Efficient Workflows</li>
                <li><Layers size={16} /> Accessibility</li>
                <li><Shield size={16} /> Error Reduction</li>
                <li><Award size={16} /> Skill Development</li>
                <li><ThumbsUp size={16} /> Motivation</li>
              </ul>
            </div>
            <div className="benefit-column">
              <h3><Heart size={24} /> For Customers</h3>
              <ul>
                <li><Zap size={16} /> Faster Service</li>
                <li><FileText size={16} /> Accurate Invoicing</li>
                <li><Users size={16} /> Improved Communication</li>
                <li><Heart size={16} /> Personalized Experiences</li>
                <li><Clock size={16} /> Reduced Delays</li>
                <li><Eye size={16} /> Better Transparency</li>
                <li><ThumbsUpIcon size={16} /> Higher Satisfaction</li>
                <li><ShieldAlert size={16} /> Trust</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="industries">
          <h2>Applicability Across Multiple Industries</h2>
          <p>EVD ERP is a versatile solution suitable for businesses in various sectors, including:</p>
          <div className="industry-grid">
            {Object.entries(industryIcons).map(([industry, icon], index) => (
              <div key={index} className="industry-card">
                {icon}
                <span>{industry}</span>
              </div>
            ))}
          </div>
          <img
            src="/assets/img/Contact.jpg"
            alt="EVD Smartbook in Action"
            style={{
              width: '100%',
              maxWidth: '800px',
              height: 'auto',
              margin: '20px auto',
              display: 'block',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          />
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

        <section className="conclusion">
          <h2>Conclusion</h2>
          <p>EVD ERP is an essential tool for businesses looking to enhance operational efficiency, improve team management, and provide better customer service. With its customizable features, role-based access, and real-time insights, EVD ERP is designed to support decision-makers, employees, and customers alike. By implementing EVD ERP, businesses across industries can streamline their processes, save time, and focus on growth.</p>
        </section>
      </div>
    </Layout>
  );
};

export default EVDERPLandingPage;