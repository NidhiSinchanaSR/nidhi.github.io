export default function ResumePage() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Resume</h1>
      
      {/* Embed PDF */}
      <div className="mb-6">
        <embed
          src="https://NidhiSinchanaSR.github.io/nidhi.github.io/Nidhi.pdf"
          type="application/pdf"
          width="100%"
          height="1000px"
        />
      </div>
      
      {/* Download Link */}
      <a
        href="/Nidhi.pdf"
        download
        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </main>
  );
}
