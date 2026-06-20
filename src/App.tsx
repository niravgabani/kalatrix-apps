/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Apps from './components/Apps';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Apps />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="June 13, 2026"
      content={
        <>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">1. Introduction</h2>
            <p><strong className="text-white">HideYou – Calculator Photo Vault</strong> ("the App", "we", "us", or "our") is developed and published by Kalatrix Apps. We respect your privacy and are committed to protecting it. This Privacy Policy explains what information the App accesses, how it is used, the device permissions we request, and how third-party advertising (Google AdMob) works within the App.</p>
            <p className="mt-4">HideYou – Calculator is a privacy app disguised as a fully functional calculator. It provides a secret, PIN-protected vault where you can store private photos, videos, and files on your own device. By downloading, installing, or using the App, you agree to this Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">2. Information We Collect</h2>
            <p>The App is designed to work locally on your device. Your private photos, videos, files, calculator PIN, and vault contents <strong className="text-white">never leave your device</strong> and are never uploaded to our servers or shared with anyone.</p>
            <p className="mt-4">We do <strong className="text-white">not</strong> collect, store, sell, or transmit your personal media or personally identifiable information. The only data processed is:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong className="text-white">Locally stored data</strong> — your hidden media, vault items, and your security PIN/pattern. This is stored only in the App's private storage on your device.</li>
              <li><strong className="text-white">Advertising &amp; usage data</strong> — collected by our advertising partner (Google AdMob) to serve ads. See Section 5.</li>
              <li><strong className="text-white">Contact data</strong> — only if you voluntarily email us for support (e.g., your email address and message).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">3. App Permissions We Request</h2>
            <p>To provide its features, the App may request the following Android permissions. Each is used only for the purpose stated and never for tracking your personal media:</p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li><strong className="text-white">Storage / Photos &amp; Media / Files</strong> (<code className="text-brand-400">READ_MEDIA_IMAGES</code>, <code className="text-brand-400">READ_MEDIA_VIDEO</code>, <code className="text-brand-400">READ_EXTERNAL_STORAGE</code>, <code className="text-brand-400">WRITE_EXTERNAL_STORAGE</code>, <code className="text-brand-400">MANAGE_EXTERNAL_STORAGE</code>) — required so you can select photos, videos, and files from your device and move them into (or restore them from) the private vault. We only access the files you choose to hide.</li>
              <li><strong className="text-white">Camera</strong> (<code className="text-brand-400">CAMERA</code>) — used only if you choose to capture a photo or video directly into the vault, or to capture an "intruder selfie" of anyone who enters a wrong PIN (if you enable that feature). Camera access is never used in the background.</li>
              <li><strong className="text-white">Internet &amp; Network State</strong> (<code className="text-brand-400">INTERNET</code>, <code className="text-brand-400">ACCESS_NETWORK_STATE</code>) — required to load advertisements through Google AdMob and to check connectivity. The Private Browser feature also uses this to load the websites you visit.</li>
              <li><strong className="text-white">Vibrate</strong> (<code className="text-brand-400">VIBRATE</code>) — provides haptic feedback when you tap the calculator keypad.</li>
              <li><strong className="text-white">Foreground Service / Wake Lock</strong> (where applicable) — used only to complete file import/export operations reliably while the App is open.</li>
              <li><strong className="text-white">Notifications</strong> (<code className="text-brand-400">POST_NOTIFICATIONS</code>) — used to inform you about App updates, security alerts, or the status of a file operation. You can disable these in your device settings.</li>
            </ul>
            <p className="mt-4">You may revoke any permission at any time through your device's system Settings. Revoking a permission may disable the related feature (for example, revoking storage access will prevent you from adding or restoring media).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">4. How We Use Information</h2>
            <p>Information accessed by the App is used solely to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Securely hide, store, and restore the photos, videos, and files you choose</li>
              <li>Lock and protect your vault behind the calculator PIN/pattern</li>
              <li>Display advertisements that keep the App free (via Google AdMob)</li>
              <li>Maintain, troubleshoot, and improve App performance and stability</li>
              <li>Respond to your support requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">5. Advertising &amp; Third-Party Services (Google AdMob)</h2>
            <p>The App is free and supported by advertisements served through <strong className="text-white">Google AdMob</strong>, a service provided by Google LLC. AdMob may collect and process certain data to deliver and measure ads, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Advertising identifier (Google Advertising ID / GAID)</li>
              <li>Device information (model, operating system, language, country)</li>
              <li>IP address and general (non-precise) location</li>
              <li>Ad interaction and performance data</li>
            </ul>
            <p className="mt-4">This data is collected and used by Google in accordance with its own policies. AdMob may serve personalized (interest-based) ads where permitted. On supported devices and regions, you will be shown a consent request and can choose non-personalized ads. You can also opt out of personalized advertising at any time via your device settings (<em>Settings → Google → Ads</em>) or by resetting your Advertising ID.</p>
            <p className="mt-4"><strong className="text-white">User Consent (UMP):</strong> In regions where it is legally required (such as the European Economic Area, the UK, and Switzerland under GDPR), the App uses Google's User Messaging Platform (UMP) to present a consent form before any ads are shown. Through this form you can grant or decline consent for the use of your data for personalized advertising. We do not load personalized ads until consent is obtained where required, and your choice is respected on subsequent sessions. You may change or withdraw your consent at any time from within the App (where the consent option is provided) or through your device's advertising settings.</p>
            <p className="mt-4">For more information about how Google uses data, please review:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Google Privacy Policy — <span className="text-brand-400">https://policies.google.com/privacy</span></li>
              <li>How Google uses information from sites/apps that use its services — <span className="text-brand-400">https://policies.google.com/technologies/partner-sites</span></li>
            </ul>
            <p className="mt-4">We do not share your private vault contents with Google, AdMob, or any other third party.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">6. Data Storage &amp; Security</h2>
            <p>All hidden media and your security credentials are stored locally within the App's protected storage on your device. We implement reasonable technical measures to safeguard your data. However, please note:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Because your data is stored only on your device, it is not backed up to our servers. If you uninstall the App, reset your device, or clear the App's data, your vault contents may be permanently lost. Please keep your own backups of important files.</li>
              <li>You are responsible for remembering your PIN/pattern. For security reasons, we cannot recover or reset a forgotten PIN.</li>
              <li>No method of electronic storage is 100% secure, and we cannot guarantee absolute security.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">7. Children's Privacy</h2>
            <p>The App is rated for general audiences and is not directed at children under the age of 13 (or the equivalent minimum age in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us so we can remove it.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">8. Your Rights</h2>
            <p>Depending on your location, you may have the right to access, correct, or delete personal data, and to opt out of personalized advertising. Because we do not store your personal media on our servers, you can exercise full control by managing the data directly on your device or by uninstalling the App. To make a request, contact us at the address below.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in the App, legal requirements, or our practices. Updates will be posted on this page with a revised "Last Updated" date. Continued use of the App after changes are posted constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">10. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us at:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Developer: <span className="text-white">Kalatrix Apps</span></li>
              <li>Email: <span className="text-brand-400">viralgk23@gmail.com</span></li>
            </ul>
          </section>
        </>
      }
    />
  );
}

function ClearWavePrivacyPolicy() {
  return (
    <LegalPage
      title="ClearWave – Privacy Policy"
      lastUpdated="June 13, 2026"
      content={
        <>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">1. Introduction</h2>
            <p><strong className="text-white">ClearWave</strong> ("the App", "we", "us", or "our") is developed and published by Kalatrix Apps. We respect your privacy and are committed to protecting it. This Privacy Policy explains what the App accesses, how that information is used, the device permissions we request, and how third-party advertising (Google AdMob) works within the App.</p>
            <p className="mt-4">ClearWave is a tool designed to fix muffled sound by removing water and dust trapped inside your device speakers. It plays scientifically tuned low- and high-frequency sound waves that create vibrations to safely eject moisture and particles, and includes features such as Quick Clean, Deep Clean, Stereo testing, a Frequency Generator, and a Sound Quality Checker. By downloading, installing, or using the App, you agree to this Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">2. Information We Collect</h2>
            <p>ClearWave is designed to work locally on your device. We do <strong className="text-white">not</strong> collect, store, sell, or transmit any personally identifiable information, and the App does not require you to create an account or sign in.</p>
            <p className="mt-4">The only data processed is:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong className="text-white">Local app data</strong> — your in-app settings and cleaning history are stored only on your device.</li>
              <li><strong className="text-white">Advertising &amp; usage data</strong> — collected by our advertising partner (Google AdMob) to serve ads. See Section 5.</li>
              <li><strong className="text-white">Contact data</strong> — only if you voluntarily email us for support (e.g., your email address and message).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">3. App Permissions We Request</h2>
            <p>To provide its features, the App may request the following Android permissions. Each is used only for the purpose stated:</p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li><strong className="text-white">Internet &amp; Network State</strong> (<code className="text-brand-400">INTERNET</code>, <code className="text-brand-400">ACCESS_NETWORK_STATE</code>) — required to load advertisements through Google AdMob and to check connectivity. ClearWave does not require an internet connection to perform speaker cleaning itself.</li>
              <li><strong className="text-white">Modify Audio Settings</strong> (<code className="text-brand-400">MODIFY_AUDIO_SETTINGS</code>) — required to control audio output and play the cleaning tones and test frequencies at the correct volume and channel (left/right/stereo).</li>
              <li><strong className="text-white">Vibrate</strong> (<code className="text-brand-400">VIBRATE</code>) — used for the vibration-assisted cleaning modes and for haptic feedback on button presses.</li>
              <li><strong className="text-white">Bluetooth</strong> (<code className="text-brand-400">BLUETOOTH</code>, <code className="text-brand-400">BLUETOOTH_CONNECT</code>) — used only to detect whether audio is routed to a Bluetooth speaker or headset so the App can warn you and report the correct device status. We do not access your contacts, files, or other Bluetooth data.</li>
              <li><strong className="text-white">Keep Device Awake</strong> (<code className="text-brand-400">WAKE_LOCK</code>, foreground service where applicable) — keeps the cleaning cycle running reliably without the screen turning off mid-cycle.</li>
              <li><strong className="text-white">Notifications</strong> (<code className="text-brand-400">POST_NOTIFICATIONS</code>) — used to inform you when a cleaning cycle completes or about App updates. You can disable these in your device settings.</li>
            </ul>
            <p className="mt-4">ClearWave does <strong className="text-white">not</strong> request access to your photos, camera, microphone, contacts, location, or personal files. You may revoke any permission at any time through your device's system Settings; doing so may disable the related feature.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">4. How We Use Information</h2>
            <p>Information accessed by the App is used solely to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Play cleaning tones and test frequencies through your speakers</li>
              <li>Run vibration-assisted cleaning and stereo/sound-quality diagnostics</li>
              <li>Display advertisements that keep the App free (via Google AdMob)</li>
              <li>Maintain, troubleshoot, and improve App performance and stability</li>
              <li>Respond to your support requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">5. Advertising &amp; Third-Party Services (Google AdMob)</h2>
            <p>The App is free and supported by advertisements served through <strong className="text-white">Google AdMob</strong>, a service provided by Google LLC. AdMob may collect and process certain data to deliver and measure ads, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Advertising identifier (Google Advertising ID / GAID)</li>
              <li>Device information (model, operating system, language, country)</li>
              <li>IP address and general (non-precise) location</li>
              <li>Ad interaction and performance data</li>
            </ul>
            <p className="mt-4">This data is collected and used by Google in accordance with its own policies. AdMob may serve personalized (interest-based) ads where permitted. On supported devices and regions, you will be shown a consent request and can choose non-personalized ads. You can also opt out of personalized advertising at any time via your device settings (<em>Settings → Google → Ads</em>) or by resetting your Advertising ID.</p>
            <p className="mt-4"><strong className="text-white">User Consent (UMP):</strong> In regions where it is legally required (such as the European Economic Area, the UK, and Switzerland under GDPR), the App uses Google's User Messaging Platform (UMP) to present a consent form before any ads are shown. Through this form you can grant or decline consent for the use of your data for personalized advertising. We do not load personalized ads until consent is obtained where required, and your choice is respected on subsequent sessions. You may change or withdraw your consent at any time from within the App (where the consent option is provided) or through your device's advertising settings.</p>
            <p className="mt-4">For more information about how Google uses data, please review:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Google Privacy Policy — <span className="text-brand-400">https://policies.google.com/privacy</span></li>
              <li>How Google uses information from sites/apps that use its services — <span className="text-brand-400">https://policies.google.com/technologies/partner-sites</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">6. Data Security</h2>
            <p>Because the App stores its settings and history only on your device and does not transmit personal data to our servers, your information stays under your control. We implement reasonable technical measures to safeguard the App, but no method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">7. Safety Notice</h2>
            <p>ClearWave plays sound waves at varying frequencies and volumes. For your safety and to protect your hearing and equipment, please remove headphones or earphones before running a cleaning cycle and keep the volume at a comfortable level, as described in the in-app safety warning. Results may vary depending on device condition.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">8. Children's Privacy</h2>
            <p>The App is rated for general audiences and is not directed at children under the age of 13 (or the equivalent minimum age in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us so we can remove it.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in the App, legal requirements, or our practices. Updates will be posted on this page with a revised "Last Updated" date. Continued use of the App after changes are posted constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">10. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us at:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Developer: <span className="text-white">Kalatrix Apps</span></li>
              <li>Email: <span className="text-brand-400">viralgk23@gmail.com</span></li>
            </ul>
          </section>
        </>
      }
    />
  );
}

function TermsAndConditions() {
  return (
    <LegalPage 
      title="Terms & Conditions"
      lastUpdated="May 19, 2026"
      content={
        <>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">1. Agreement to Terms</h2>
            <p>By accessing or using our website and applications, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">2. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Kalatrix Apps and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Kalatrix Apps.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">3. User Obligations</h2>
            <p>As a user, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Use the service for any illegal purposes</li>
              <li>Attempt to reverse engineer any of our software</li>
              <li>Infringe upon our intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">4. Limitation of Liability</h2>
            <p>In no event shall Kalatrix Apps, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">5. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of Gujarat, India, without regard to its conflict of law provisions.</p>
          </section>
        </>
      }
    />
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/clearwave-privacy" element={<ClearWavePrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}

