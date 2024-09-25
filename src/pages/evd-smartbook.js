import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { FaUserCheck, FaTasks, FaMoneyCheckAlt, FaWallet, FaCube, FaCogs, FaIndustry, FaCloud, FaReact, FaNodeJs, FaDatabase, FaAws, FaHeartbeat, FaShoppingCart, FaGraduationCap, FaUtensils } from 'react-icons/fa'; // Example React Icons

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

const Box = ({ icon: Icon, title, description }) => (
    <div className="box">
        {Icon && <Icon className="box-icon" />}
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
                            <p style={{ textAlign: 'center' }}>EVD Smartbook is a 360 digital solution designed to streamline workforce management for businesses. It offers key features such as attendance tracking, task management, payroll, and inventory management, all in one user-friendly platform. Discover how EVD Smartbook simplifies operations and enhances productivity for both business owners and employees.</p>
                        </Section>

                        <Section title="Key Features">
                            <div className="row-oriented-grid">
                                <Box icon={FaUserCheck} title="Geo-location Attendance" description="Snap selfies to mark attendance, ensuring staff accountability." />
                                <Box icon={FaTasks} title="Task Management" description="Assign and track tasks in real-time." />
                                <Box icon={FaMoneyCheckAlt} title="Payroll Management" description="Automate salary calculations and payouts." />
                                <Box icon={FaWallet} title="Expense Management" description="Keep all your business expenses under control with ease." />
                            </div>
                        </Section>

                        <div className="row-oriented-sections">
                            <div className="section-box">
                                <Section title="Vision">
                                    <p><strong>Vision:</strong> To provide businesses with a unified, smart management platform...</p>
                                </Section>
                            </div>

                            <div className="section-box">
                                <Section title="Goal">
                                    <p><strong>Goal:</strong> EVD Smartbook aims to optimize workforce management...</p>
                                </Section>
                            </div>

                            <div className="section-box">
                                <Section title="Focus Area">
                                    <p>Our focus is to empower businesses by automating routine tasks...</p>
                                </Section>
                            </div>
                        </div>


                        <Section title="Objectives of EVD Smartbook">
                            <ul>
                                <ListItem>Streamlined Workforce Management: Brings together all key workforce management tools under one roof.</ListItem>
                                <ListItem>Centralized Employee Information: Keep track of every employee's data in a single, easy-to-access platform.</ListItem>
                                <ListItem>Efficient Task Tracking: Assign and track tasks...</ListItem>
                                <ListItem>Real-Time Inventory Management: Manage inventory with live updates and stock control.</ListItem>
                                <ListItem>Customizable Permissions: Set different access levels for various roles in your organization.</ListItem>
                            </ul>
                        </Section>

                        <Section title="Major Features of EVD Smartbook">
                            <div className="row-oriented-grid">
                                <Box title="Geo-location Based Attendance" description="Ensure precise tracking of employee location and presence." />
                                <Box title="Task Management" description="Automate task assignments and track progress with ease." />
                                <Box title="Payroll and Leave Management" description="Manage payroll and leave applications seamlessly." />
                                <Box title="Inventory and Expense Management" description="Keep real-time track of inventory levels and monitor expenses." />
                            </div>
                        </Section>

                        <Section title="Technology Stack">
                            <div className="row-oriented-grid">
                                <Box icon={FaReact} title="Frontend" description="React Native for cross-platform mobile applications." />
                                <Box icon={FaNodeJs} title="Backend" description="Node.js for fast, scalable backend services." />
                                <Box icon={FaDatabase} title="Database" description="MongoDB for reliable and secure data storage." />
                                <Box icon={FaAws} title="Cloud" description="AWS for scalable cloud hosting and storage solutions." />
                            </div>
                        </Section>

                        <Section title="Benefits of EVD Smartbook">
                            <h3 style={{ textAlign: 'center' }}>Benefits for Business Owners:</h3>
                            <div className="row-oriented-grid">
                                <Box title="Enhanced Accountability" description="Real-time attendance tracking with geo-location." />
                                <Box title="Streamlined Operations" description="Centralized management of payroll, tasks, and expenses." />
                                <Box title="Better Decision-Making" description="Comprehensive reports and analytics." />
                                <Box title="Improved Productivity" description="Automating routine tasks allows focus on critical business needs." />
                            </div>

                            <h3 style={{ textAlign: 'center' }}>Benefits for Employees:</h3>
                            <div className="row-oriented-grid">
                                <Box title="Easy Attendance" description="Clock in/out using mobile devices with geo-location features." />
                                <Box title="Task Clarity" description="Clear task assignments and deadlines available through the mobile app." />
                                <Box title="On-the-Go Access" description="Access leave applications, payroll slips, and task updates anytime." />
                                <Box title="Transparency" description="Full visibility over tasks, performance, and payroll information." />
                            </div>
                        </Section>

                        <Section title="Applicability Across Multiple Industries">
                            <div className="row-oriented-grid">
                                <Box icon={FaIndustry} title="Manufacturing" />
                                <Box icon={FaCloud} title="IT Services" />
                                <Box icon={FaCogs} title="Construction" />
                                <Box icon={FaCube} title="Logistics" />
                                <Box icon={FaHeartbeat} title="Healthcare" />
                                <Box icon={FaShoppingCart} title="Retail" />
                                <Box icon={FaGraduationCap} title="Education" />
                                <Box icon={FaUtensils} title="Hospitality" />
                            </div>
                        </Section>

                        <Section title="Common Features Demonstrating the Impact of EVD Smartbook">
                            <div className="row-oriented-grid">
                                <Box title="Increased Efficiency" description="Automates processes such as attendance, task management, and payroll." />
                                <Box title="Better Compliance" description="Automatically generates reports to help businesses meet compliance requirements." />
                                <Box title="Centralized Data" description="All key information is stored and managed in one place..." />
                                <Box title="Scalability" description="EVD Smartbook grows with you, adapting to your evolving needs." />
                            </div>
                        </Section>

                        <Section title="Conclusion" className="text-center">
                            <p>EVD Smartbook is more than just a management tool—it’s a transformative solution for businesses across industries. By automating essential processes and providing real-time insights, it improves operational efficiency, empowers employees, and drives business growth. Take control of your workforce management today with EVD Smartbook!.</p>
                            <button className="cta-button">Take Control of Your Workforce Management Today with EVD Smartbook!</button>
                        </Section>
                    </main>
                </div>
            </Layout>
        </>
    );
};

export default EVDSmartbook;
