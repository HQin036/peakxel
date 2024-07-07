import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './FAQ.css';

const FAQ = () => {
  const [expandedSection, setExpandedSection] = useState('');
  const [selectedSubSection, setSelectedSubSection] = useState('');

  const handleExpandSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection('');
      setSelectedSubSection('');
    } else {
      setExpandedSection(section);
      setSelectedSubSection('');
    }
  };

  const handleSelectSubSection = (subSection) => {
    setSelectedSubSection(subSection);
  };

  return (
    <Container className="mt-5 faq-container">
      <h2>FAQ - Wiki & Guides</h2>
      <Row>
        <Col sm={3}>
          <Nav className="flex-column">
            <Nav.Link onClick={() => handleExpandSection('wiki')} className="nav-section">
              Wiki/Doc
              <span className="expand-icon">{expandedSection === 'wiki' ? '▼' : '▶'}</span>
            </Nav.Link>
            {expandedSection === 'wiki' && (
              <div className="nav-subsection">
                <Nav.Link onClick={() => handleSelectSubSection('getting-started')} className="nav-item">Getting Started</Nav.Link>
                <Nav.Link onClick={() => handleSelectSubSection('account-management')} className="nav-item">Account Management</Nav.Link>
                <Nav.Link onClick={() => handleSelectSubSection('server-setup')} className="nav-item">Server Setup</Nav.Link>
                <Nav.Link onClick={() => handleSelectSubSection('advanced-configuration')} className="nav-item">Advanced Configuration</Nav.Link>
                <Nav.Link onClick={() => handleSelectSubSection('troubleshooting')} className="nav-item">Troubleshooting</Nav.Link>
              </div>
            )}
            <Nav.Link onClick={() => handleExpandSection('guides')} className="nav-section">
              Guides/Tutorials
              <span className="expand-icon">{expandedSection === 'guides' ? '▼' : '▶'}</span>
            </Nav.Link>
            {expandedSection === 'guides' && (
              <div className="nav-subsection">
                <Nav.Link onClick={() => handleSelectSubSection('create-server')} className="nav-item">Create Your First Server</Nav.Link>
                <Nav.Link onClick={() => handleSelectSubSection('customize-server')} className="nav-item">Customizing Your Server</Nav.Link>
                <Nav.Link onClick={() => handleSelectSubSection('manage-security')} className="nav-item">Managing Server Security</Nav.Link>
                <Nav.Link onClick={() => handleSelectSubSection('optimize-performance')} className="nav-item">Optimizing Server Performance</Nav.Link>
                <Nav.Link onClick={() => handleSelectSubSection('backup-data')} className="nav-item">Backing Up Your Data</Nav.Link>
              </div>
            )}
          </Nav>
        </Col>
        <Col sm={9}>
          {expandedSection === 'wiki' && selectedSubSection === '' && (
            <div className="content-section">
              <h3>Wiki/Documentation</h3>
              <p>Select a sub-section to view detailed documentation.</p>
            </div>
          )}
          {expandedSection === 'guides' && selectedSubSection === '' && (
            <div className="content-section">
              <h3>Guides/Tutorials</h3>
              <p>Select a sub-section to view detailed guides and tutorials.</p>
            </div>
          )}
          {expandedSection === 'wiki' && selectedSubSection === 'getting-started' && (
            <div className="content-section">
              <h3>Getting Started with Our Services</h3>
              <p>Welcome to our services. This guide will help you get started with setting up your account and using our platform effectively.</p>
              <ul>
                <li>Creating an Account</li>
                <li>Logging In</li>
                <li>Setting Up Your Profile</li>
                <li>Exploring the Dashboard</li>
              </ul>
            </div>
          )}
          {expandedSection === 'wiki' && selectedSubSection === 'account-management' && (
            <div className="content-section">
              <h3>Account Management</h3>
              <p>Learn how to manage your account, update your information, and handle security settings.</p>
              <ul>
                <li>Updating Personal Information</li>
                <li>Changing Password</li>
                <li>Enabling Two-Factor Authentication</li>
                <li>Viewing Account Activity</li>
              </ul>
            </div>
          )}
          {expandedSection === 'wiki' && selectedSubSection === 'server-setup' && (
            <div className="content-section">
              <h3>Server Setup</h3>
              <p>Follow these steps to set up your server quickly and easily.</p>
              <ul>
                <li>Choosing a Server Plan</li>
                <li>Configuring Server Settings</li>
                <li>Deploying Your Server</li>
                <li>Monitoring Server Performance</li>
              </ul>
            </div>
          )}
          {expandedSection === 'wiki' && selectedSubSection === 'advanced-configuration' && (
            <div className="content-section">
              <h3>Advanced Configuration</h3>
              <p>Advanced settings and configurations for experienced users.</p>
              <ul>
                <li>Custom Scripts</li>
                <li>Integrating Third-Party Services</li>
                <li>Automating Tasks</li>
                <li>Scaling Your Infrastructure</li>
              </ul>
            </div>
          )}
          {expandedSection === 'wiki' && selectedSubSection === 'troubleshooting' && (
            <div className="content-section">
              <h3>Troubleshooting</h3>
              <p>Common issues and how to resolve them.</p>
              <ul>
                <li>Server Downtime</li>
                <li>Performance Issues</li>
                <li>Configuration Errors</li>
                <li>Contacting Support</li>
              </ul>
            </div>
          )}
          {expandedSection === 'guides' && selectedSubSection === 'create-server' && (
            <div className="content-section">
              <h3>How to Create Your First Server</h3>
              <p>Step-by-step instructions to create your first server.</p>
              <ul>
                <li>Selecting a Server Plan</li>
                <li>Setting Up the Server</li>
                <li>Deploying the Server</li>
                <li>Initial Configuration</li>
              </ul>
            </div>
          )}
          {expandedSection === 'guides' && selectedSubSection === 'customize-server' && (
            <div className="content-section">
              <h3>Customizing Your Server</h3>
              <p>Guide to customize your server to suit your needs.</p>
              <ul>
                <li>Installing Plugins</li>
                <li>Modifying Server Settings</li>
                <li>Custom Scripts</li>
                <li>User Permissions</li>
              </ul>
            </div>
          )}
          {expandedSection === 'guides' && selectedSubSection === 'manage-security' && (
            <div className="content-section">
              <h3>Managing Server Security</h3>
              <p>Ensure your server is secure with these tips.</p>
              <ul>
                <li>Setting Up Firewalls</li>
                <li>Using Strong Passwords</li>
                <li>Monitoring Access Logs</li>
                <li>Regular Backups</li>
              </ul>
            </div>
          )}
          {expandedSection === 'guides' && selectedSubSection === 'optimize-performance' && (
            <div className="content-section">
              <h3>Optimizing Server Performance</h3>
              <p>Tips to optimize the performance of your server.</p>
              <ul>
                <li>Monitoring Server Metrics</li>
                <li>Upgrading Server Resources</li>
                <li>Optimizing Code and Queries</li>
                <li>Regular Maintenance</li>
              </ul>
            </div>
          )}
          {expandedSection === 'guides' && selectedSubSection === 'backup-data' && (
            <div className="content-section">
              <h3>Backing Up Your Data</h3>
              <p>Ensure your data is safe by performing regular backups.</p>
              <ul>
                <li>Choosing a Backup Strategy</li>
                <li>Automating Backups</li>
                <li>Restoring from Backups</li>
                <li>Storing Backup Files</li>
              </ul>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
