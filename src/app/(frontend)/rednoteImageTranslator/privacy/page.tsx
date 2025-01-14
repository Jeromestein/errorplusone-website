import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Privacy Policy for <span className="text-[#ea3f4a]">Rednote CN Image Translator</span>
      </h1>
      <p className="text-sm text-gray-600 mb-8">Last Updated: 2025-1-13</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          Rednote CN Image Translator (we, our, or the extension) is committed to protecting your
          privacy. This Privacy Policy explains how we handle information when you use our Chrome
          extension.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information We Process</h2>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">1. Image Content</h3>
          <ul className="list-disc pl-6">
            <li>What: Images that you explicitly select for translation</li>
            <li>How: Images are processed temporarily for OCR and translation purposes</li>
            <li>Duration: Images are processed in real-time and are not stored</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">2. Text Content</h3>
          <ul className="list-disc pl-6">
            <li>What: Text extracted from selected images</li>
            <li>How: Text is processed through OCR and translation services</li>
            <li>Duration: Processed temporarily during translation only</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">1. Google Cloud Vision API</h3>
          <ul className="list-disc pl-6">
            <li>Purpose: For OCR (text detection in images)</li>
            <li>Data shared: Selected image content only</li>
            <li>
              Privacy Policy:{' '}
              <a
                href="https://cloud.google.com/terms/cloud-privacy-notice"
                className="text-blue-600 hover:underline"
              >
                Google Cloud Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">2. DeepL API</h3>
          <ul className="list-disc pl-6">
            <li>Purpose: For text translation</li>
            <li>Data shared: Extracted text only</li>
            <li>
              Privacy Policy:{' '}
              <a href="https://www.deepl.com/privacy" className="text-blue-600 hover:underline">
                DeepL Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Collection and Storage</h2>
        <ul className="list-disc pl-6">
          <li>We do not collect or store any personal information</li>
          <li>We do not track user behavior or analytics</li>
          <li>We do not maintain any databases or user profiles</li>
          <li>All processing is done in real-time and temporary</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:nietsemorej@gmail.com" className="text-blue-600 hover:underline">
            nietsemorej@gmail.com
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify users of any material
          changes by updating the &quot;Last Updated&quot; date.
        </p>
      </section>
    </div>
  )
}
