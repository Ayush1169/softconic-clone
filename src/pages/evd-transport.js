import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { 
    FaUserCheck, FaTasks, FaMoneyCheckAlt, FaWallet, FaCube, 
    FaCogs, FaIndustry, FaCloud, FaReact, FaNodeJs, FaDatabase, 
    FaAws, FaHeartbeat, FaShoppingCart, FaGraduationCap, FaUtensils,
    FaChartLine, FaLock, FaMobile, FaClipboardCheck, FaCalendarAlt,
    FaChartBar, FaUserCog, FaFileInvoiceDollar, FaTruck, FaUsers,
    FaDesktop, FaShieldAlt, FaClock, FaComments,
    FaRocket
} from 'react-icons/fa';
import Link from 'next/link';

const Header = () => (
    <header className="header">
        <h1> EVD Transport</h1>
        <p> Smarter Fleet Operations with Advanced Transport Management Software</p>
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

const ListItem = ({ icon: Icon, children }) => (
    <li className="list-item">
        {Icon && <Icon className="list-icon" />} {children}
    </li>
);

const EVDSmartbook = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <Layout>
            <div className={`evd-smartbook ${isVisible ? 'visible' : ''}`}>
                <Header />
                <main className="container">
                    <Section title="Introduction">
                        <p style={{ textAlign: 'center' }}>
                        EVD Transport is a complete transport management system available on web and mobile. It helps manage dispatches, track fuel and tyre usage, monitor driver expenses, and generate reports—all from one easy-to-use platform.
                        </p>
                    
                       
                    </Section>


                    <div className="row-oriented-sections">
                        <div className="section-box">
                            <Section title="Vision">
                                <p><FaChartLine /> <strong>Vision:</strong> To create a smarter, transparent, and data-driven ecosystem for transport businesses by combining automation, real-time tracking, and advanced reporting.</p>
                            </Section>
                        </div>

                        <div className="section-box">
                            <Section title="Goal">
                                <p><FaUserCog /> <strong>Goal:</strong> To reduce manual work, control operational costs, and improve decision-making through real-time data and automation.</p>
                            </Section>
                        </div>

                        <div className="section-box">
                            <Section title="Focus Area">
                                <p><FaClipboardCheck /> Our focus is to empower businesses by automating routine tasks...</p>
                            </Section>
                        </div>
                    </div>

                    <Section title="Highlights">
                        <ul>
                            <ListItem >Dispatch Management for smooth trip planning and tracking</ListItem>
                            <ListItem >Driver Voucher Management for expense tracking and approvals
                            </ListItem>
                            <ListItem >Tyre Management to monitor usage, replacement, and costs</ListItem>
                            <ListItem >Diesel Pump Management to control and track fuel usage</ListItem>
                            <ListItem >Detailed Reporting on a daily, weekly, and monthly basis, exportable in Excel or PDF</ListItem>
                        </ul>
                    </Section>

                    <Section title="Focus Areas">
                        <ul>
                            <ListItem >Automate routine transport operations</ListItem>
                            <ListItem >Track and manage all expenses in one place
                            </ListItem>
                            <ListItem >Improve visibility with real-time data</ListItem>
                            <ListItem >Enable better decision-making with accurate reports</ListItem>
                            <ListItem >Provide easy access through mobile and web</ListItem>
                        </ul>
                    </Section>
                    <Section title="Objectives">
                        <ul>
                           1.  <bold>&nbsp;  Streamline Transport Activities </bold>
                            <p> Bring dispatch, driver expenses, tyre tracking, and fuel records together in one system.</p>
                            2.     <bold> &nbsp; Control Operational Costs</bold>
                            <p> Record and monitor every rupee spent on fuel, maintenance, and driver allowances..</p>
                            3.     <bold> &nbsp; Improve Planning and Schedulings</bold>
                            <p>  Use reports and data to plan future trips and manage resources better.</p>
                            4.     <bold> &nbsp; Ensure Transparency</bold>
                            <p>  Maintain clear records for all driver payments and diesel usage.</p>
                            5.     <bold> &nbsp; Simplify Reporting and Auditing</bold>
                            <p>  Export reports in Excel or PDF for easy sharing, accounting, or compliance.</p>
                        </ul>
                    </Section>

                    <Section title="Major Features">
                        <ul>
                           1.  <bold>&nbsp;  Dispatch Management </bold>
                            <p>  Easily assign, track, and update trips with complete dispatch details</p>
                            2.     <bold> &nbsp; Driver Voucher and Fuel Logs</bold>
                            <p> Monitor driver expenses and diesel usage in real time</p>
                            3.     <bold> &nbsp; Improve Planning and Schedulings</bold>
                            <p>  Use reports and data to plan future trips and manage resources better.</p>
                            4.     <bold> &nbsp; Tyre Tracking</bold>
                            <p>   Keep records of tyre installation, usage duration, and replacement schedules.</p>
                            5.     <bold> &nbsp; Report Export Options</bold>
                            <p>   Generate transport performance reports and download them in Excel or PDF format.</p>
                        </ul>
                    </Section>

                    <Section title="Technology Stack">
                        <ul>
                            <ListItem >Frontend: ReactJS for Web, Flutter for Mobil</ListItem>
                            <ListItem >Backend: Node.js with Express

                            </ListItem>
                            <ListItem >Improve visibility with real-time data</ListItem>
                            <ListItem >Database: PostgreSQL</ListItem>
                            <ListItem >Reporting: JasperReports or Custom Excel Export</ListItem>
                            <ListItem >Hosting: AWS or Azure</ListItem>
                        </ul>
                    </Section>
                    <Section title="Benefits for Owners">
                        <ul>
                            <ListItem >Better control over daily transport operations</ListItem>
                            <ListItem >Access to real-time data for better decisions

                            </ListItem>
                            <ListItem >Easy monitoring of expenses and savings</ListItem>
                            <ListItem >Database: PostgreSQL</ListItem>
                            <ListItem >Reduced risk of fuel misuse and expense fraud</ListItem>
                            <ListItem >Time-saving reports and automated workflows</ListItem>
                        </ul>
                    </Section>
                    <Section title="Benefits for Transporters">
                        <ul>
                            <ListItem >Benefits for Transporters</ListItem>
                            <ListItem >Easy submission of driver vouchers

                            </ListItem>
                            <ListItem >Clear tracking of fuel usage and reimbursements</ListItem>
                            <ListItem >Better communication with dispatch team</ListItem>
                            <ListItem >Less paperwork and faster processing</ListItem>
                            
                        </ul>
                    </Section>
                    <Section title="Applicability Across Multiple Industries">
                        <ul>
                            <ListItem >Logistics and Freight Companies</ListItem>
                            <ListItem >Manufacturing and Industrial Transport

                            </ListItem>
                            <ListItem >Construction and Infrastructure Projects</ListItem>
                            <ListItem >FMCG Distribution</ListItem>
                            <ListItem >Temperature-Sensitive and Cold Chain Logistics</ListItem>
                          
                        </ul>
                    </Section>
                    <Section title="Common Features Showing Real Impact">
                        <ul>
                            <ListItem >Trip status and cost tracking in real-time</ListItem>
                            <ListItem >Alerts for tyre change and diesel refill

                            </ListItem>
                            <ListItem >Easy route planning and scheduling</ListItem>
                            <ListItem >Driver-wise performance insights</ListItem>
                            <ListItem >Multi-location and multi-user access</ListItem>
                          
                        </ul>
                    </Section>


                    <Section title="Conclusion" className="text-center">
                        <p><FaComments /> EVD Transport helps you manage your fleet efficiently by reducing manual work and improving visibility across all transport activities.</p>
                    
                       
                    </Section>
                </main>
            </div>
        </Layout>
    );
};

export default EVDSmartbook;