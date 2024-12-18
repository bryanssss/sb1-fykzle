import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft,
  Lock,
  Shield,
  Eye,
  Database,
  Cookie,
  Mail,
  Globe,
  FileText,
  UserCheck,
  Key,
  Bell,
  Server,
  Share2
} from 'lucide-react';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link 
          to="/"
          className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Dashboard
        </Link>

        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lock className="text-purple-500" size={40} />
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your privacy is our top priority. Learn about how we protect your data and respect your privacy rights.
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-purple-500" size={24} />
              <h2 className="text-2xl font-bold dark:text-white">Introduction</h2>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                At Meme Coin Tracker, we take your privacy seriously. This Privacy Policy explains in detail 
                how we collect, use, and protect your personal information when you use our website. We are 
                committed to ensuring the privacy and security of your personal data in compliance with the 
                General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other 
                applicable privacy laws worldwide.
              </p>
              <p>
                By using our service, you trust us with your information. We are committed to maintaining 
                that trust and protecting your privacy through industry-standard security measures and 
                transparent data practices.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="text-purple-500" size={24} />
              <h2 className="text-2xl font-bold dark:text-white">Information We Collect</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold dark:text-white mb-3">Personal Information</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Email address (when you contact us or subscribe to updates)</li>
                  <li>Name (when provided through contact forms)</li>
                  <li>Cryptocurrency wallet addresses (if voluntarily provided)</li>
                  <li>IP address and device information</li>
                  <li>User preferences and settings</li>
                  <li>Communication history with our support team</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold dark:text-white mb-3">Technical Data</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Browser type and version</li>
                  <li>Operating system information</li>
                  <li>Device type and screen resolution</li>
                  <li>Access times and dates</li>
                  <li>Pages viewed and features used</li>
                  <li>Click patterns and interaction data</li>
                  <li>Performance and error data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold dark:text-white mb-3">Usage Information</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Cryptocurrency tracking preferences</li>
                  <li>Portfolio data (if provided)</li>
                  <li>Alert settings and notifications</li>
                  <li>User-generated content</li>
                  <li>Feature usage patterns</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Server className="text-purple-500" size={24} />
              <h2 className="text-2xl font-bold dark:text-white">How We Use Your Data</h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Providing and improving our services</li>
                <li>Personalizing your experience</li>
                <li>Sending important updates and notifications</li>
                <li>Processing and responding to your inquiries</li>
                <li>Analyzing website usage and trends</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Complying with legal obligations</li>
                <li>Improving our user interface and features</li>
                <li>Conducting research and analytics</li>
                <li>Managing user accounts and preferences</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Key className="text-purple-500" size={24} />
              <h2 className="text-2xl font-bold dark:text-white">Data Security</h2>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                We implement robust security measures to protect your data, including:
              </p>
              <ul>
                <li>End-to-end encryption for sensitive data</li>
                <li>Regular security audits and assessments</li>
                <li>Secure data storage and transmission</li>
                <li>Access controls and authentication</li>
                <li>Regular security updates and patches</li>
                <li>Employee security training</li>
                <li>Incident response procedures</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="text-purple-500" size={24} />
              <h2 className="text-2xl font-bold dark:text-white">Cookie Policy</h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience. 
                Our cookies serve the following purposes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 dark:text-white">Essential Cookies</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Authentication and security</li>
                    <li>Basic functionality</li>
                    <li>Session management</li>
                    <li>Load balancing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 dark:text-white">Analytics Cookies</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Usage patterns</li>
                    <li>Performance monitoring</li>
                    <li>Feature optimization</li>
                    <li>Error tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Share2 className="text-purple-500" size={24} />
              <h2 className="text-2xl font-bold dark:text-white">Data Sharing</h2>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                We may share your information with:
              </p>
              <ul>
                <li>Service providers who assist in operating our website</li>
                <li>Analytics partners for website optimization</li>
                <li>Law enforcement when required by law</li>
                <li>Third-party APIs for cryptocurrency data</li>
              </ul>
              <p>
                We never sell your personal information to third parties.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <UserCheck className="text-purple-500" size={24} />
              <h2 className="text-2xl font-bold dark:text-white">Your Rights</h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>Under applicable privacy laws, you have the following rights:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:topmemecoins@mail.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                  topmemecoins@mail.com
                </a>
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-purple-500" size={24} />
              <h2 className="text-2xl font-bold dark:text-white">International Data Transfers</h2>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Your information may be transferred to and processed in countries other than your country 
                of residence. We ensure appropriate safeguards are in place through:
              </p>
              <ul>
                <li>Standard contractual clauses</li>
                <li>Data processing agreements</li>
                <li>Privacy Shield certification (where applicable)</li>
                <li>Regional data storage options</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="text-purple-500" size={24} />
              <h2 className="text-2xl font-bold dark:text-white">Updates to This Policy</h2>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or for legal, operational, or regulatory reasons. We will notify you of any material 
                changes through:
              </p>
              <ul>
                <li>Email notifications (if you've subscribed)</li>
                <li>Website announcements</li>
                <li>In-app notifications</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-purple-500" size={24} />
              <h2 className="text-2xl font-bold dark:text-white">Contact Us</h2>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul>
                <li>Email: topmemecoins@mail.com</li>
                <li>Response Time: Within 48 hours</li>
              </ul>
              <p>
                For urgent privacy concerns or data breaches, please mark your email as "URGENT: Privacy Concern"
              </p>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl">
            <p className="text-center text-gray-600 dark:text-gray-300">
              This Privacy Policy was last updated on {new Date().toLocaleDateString()}. We regularly 
              review and update our privacy practices to ensure the highest standards of data protection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};