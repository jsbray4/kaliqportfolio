// app/contact/page.js

export default function Contact() {
  return (
    <div className="min-h-screen bg-white flex items-start justify-center p-6 pt-16">
      <div className="text-left text-gray-800 tracking-[.15em]">
        <h1 className="text-2xl mb-4">Contact</h1>
        <p className="text-lg">
          For any and all inquiries, please contact{" "}
          <a href="mailto:kaliqlowe@gmail.com" className="text-blue-500 hover:text-blue-600">
          kaliqlowe@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
