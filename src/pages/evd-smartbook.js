import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';

const Header = () => (
    <header className="header">
        <h1>EVD Smart Book</h1>
        <p>Complete Solution for Modern Business Management</p>
    </header>
);

const Section = ({ title, children, className = '' }) => (
    <section className={`section ${className}`}>
        <h2>{title}</h2>
        {children}
    </section>
);

const Feature = ({ title, description }) => (
    <div className="feature">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const ListItem = ({ children }) => (
    <li className="list-item">{children}</li>
);

const EVDSmartbook = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            <Layout>
                <div className={`evd-smartbook ${isVisible ? 'visible' : ''}`}>
                    <Header />

                    <main className="container">
                        <Section title="Introduction">
                            <p>EVD Smartbook is a 360 digital solution designed to streamline workforce management for businesses. It offers key features such as attendance tracking, task management, payroll, and inventory management, all in one user-friendly platform. Discover how EVD Smartbook simplifies operations and enhances productivity for both business owners and employees.</p>
                        </Section>

                        <Section title="Key Features">
                            <div className="features-grid">
                                <Feature title="Geo-location Attendance" description="Snap selfies to mark attendance, ensuring staff accountability." />
                                <Feature title="Task Management" description="Assign and track tasks in real-time." />
                                <Feature title="Payroll Management" description="Automate salary calculations and payouts." />
                                <Feature title="Expense Management" description="Keep all your business expenses under control with ease." />
                            </div>
                        </Section>

                        <Section title="Vision and Goal">
                            <p><strong>Vision:</strong> To provide businesses with a unified, smart management platform that streamlines operations, improves accountability, and enhances staff productivity.</p>
                            <p><strong>Goal:</strong> EVD Smartbook aims to optimize workforce management by offering real-time data insights and automated processes, making it easier for business owners to manage their teams and resources effectively.</p>
                        </Section>

                        <Section title="Focus Area">
                            <p>Our focus is to empower businesses by automating routine tasks, ensuring employee satisfaction, and delivering seamless performance tracking, all while reducing administrative burdens.</p>
                        </Section>

                        <Section title="Objectives of EVD Smartbook">
                            <ul>
                                <ListItem>Streamlined Workforce Management: Brings together all key workforce management tools under one roof.</ListItem>
                                <ListItem>Centralized Employee Information: Keep track of every employee's data in a single, easy-to-access platform.</ListItem>
                                <ListItem>Efficient Task Tracking: Assign and track tasks, ensuring timely completion of projects.</ListItem>
                                <ListItem>Real-Time Inventory Management: Manage inventory with live updates and stock control.</ListItem>
                                <ListItem>Customizable Permissions: Set different access levels for various roles in your organization.</ListItem>
                            </ul>
                        </Section>

                        <Section title="Major Features of EVD Smartbook">
                            <ul>
                                <ListItem>Geo-location Based Attendance: Ensure precise tracking of employee location and presence.</ListItem>
                                <ListItem>Task Management: Automate task assignments and track progress with ease.</ListItem>
                                <ListItem>Payroll and Leave Management: Manage payroll and leave applications seamlessly.</ListItem>
                                <ListItem>Inventory and Expense Management: Keep real-time track of inventory levels and monitor expenses.</ListItem>
                            </ul>
                        </Section>

                        <Section title="Technology Stack">
                            <ul>
                                <ListItem>Frontend: React Native for cross-platform mobile applications.</ListItem>
                                <ListItem>Backend: Node.js for fast, scalable backend services.</ListItem>
                                <ListItem>Database: MongoDB for reliable and secure data storage.</ListItem>
                                <ListItem>Cloud: AWS for scalable cloud hosting and storage solutions.</ListItem>
                            </ul>
                        </Section>

                        <Section title="Benefits of EVD Smartbook">
                            <h3>Benefits for Business Owners:</h3>
                            <ul>
                                <ListItem>Enhanced Accountability: Real-time attendance tracking with geo-location.</ListItem>
                                <ListItem>Streamlined Operations: Centralized management of payroll, tasks, and expenses.</ListItem>
                                <ListItem>Better Decision-Making: Comprehensive reports and analytics.</ListItem>
                                <ListItem>Improved Productivity: Automating routine tasks allows focus on critical business needs.</ListItem>
                                <ListItem>Cost Savings: Efficient task and expense management minimize waste.</ListItem>
                                <ListItem>Compliance Ready: Automatic generation of payroll and tax reports.</ListItem>
                                <ListItem>Adaptability: Fully customizable to suit specific industry needs.</ListItem>
                                <ListItem>Real-Time Insights: Monitor team performance through intuitive dashboards.</ListItem>
                            </ul>

                            <h3>Benefits for Employees:</h3>
                            <ul>
                                <ListItem>Easy Attendance: Clock in/out using mobile devices with geo-location features.</ListItem>
                                <ListItem>Task Clarity: Clear task assignments and deadlines available through the mobile app.</ListItem>
                                <ListItem>On-the-Go Access: Access leave applications, payroll slips, and task updates anytime.</ListItem>
                                <ListItem>Transparency: Full visibility over tasks, performance, and payroll information.</ListItem>
                                <ListItem>Leave Management: Simplified leave application and tracking process.</ListItem>
                                <ListItem>Expense Tracking: Submit expenses and monitor reimbursement status in real time.</ListItem>
                                <ListItem>Work Flexibility: More control over managing day-to-day responsibilities.</ListItem>
                                <ListItem>Improved Engagement: Better transparency increases overall employee satisfaction.</ListItem>
                            </ul>
                        </Section>

                        <Section title="Applicability Across Multiple Industries">
                            <p>EVD Smartbook fits seamlessly into a variety of industries, such as:</p>
                            <ul className="industries-grid">
                                <ListItem>Manufacturing</ListItem>
                                <ListItem>Retail</ListItem>
                                <ListItem>Healthcare</ListItem>
                                <ListItem>Education</ListItem>
                                <ListItem>Hospitality</ListItem>
                                <ListItem>Construction</ListItem>
                                <ListItem>Logistics</ListItem>
                                <ListItem>IT Services</ListItem>
                                <ListItem>Real Estate</ListItem>
                                <ListItem>Financial Services</ListItem>
                            </ul>
                        </Section>

                        <Section title="Common Features Demonstrating the Impact of EVD Smartbook">
                            <ul>
                                <ListItem>Increased Efficiency: Automates processes such as attendance, task management, and payroll.</ListItem>
                                <ListItem>Better Compliance: Automatically generates reports to help businesses meet compliance requirements.</ListItem>
                                <ListItem>Centralized Data: All key information is stored and managed in one place, improving data access and decision-making.</ListItem>
                                <ListItem>Scalability: Whether you're a small business or a large corporation, EVD Smartbook grows with you, adapting to your evolving needs.</ListItem>
                            </ul>
                        </Section>

                        <Section title="Conclusion" className="text-center">
                            <p>EVD Smartbook is more than just a management tool—it's a transformative solution for businesses across industries. By automating essential processes and providing real-time insights, it improves operational efficiency, empowers employees, and drives business growth.</p>
                            <button className="cta-button">
                                Take Control of Your Workforce Management Today with EVD Smartbook!
                            </button>
                        </Section>
                    </main>
                </div>
            </Layout>
        </>
    );
};

export default EVDSmartbook;