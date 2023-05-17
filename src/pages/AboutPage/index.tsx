const AboutPage = () => (
  <main className="flex flex-grow items-center justify-center p-4 md:p-8 w-full">
    <div className="text-center space-y-4">
      <img
        className="mx-auto h-24 md:h-32 w-auto mb-4"
        src="/icon.svg"
        alt="Workflow"
      />
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
        About This Scaffold
      </h2>
      <p className="text-gray-700">
        This is a powerful React scaffold powered by Vite and styled with
        Tailwind CSS. It's designed to kickstart your project and get you
        building fast. It's adaptable and optimized for various devices.
      </p>
      <button className="mt-4 md:mt-8 px-4 py-2 md:px-8 md:py-4 bg-indigo-600 text-white rounded-md shadow-md transform transition duration-500 ease-in-out hover:scale-110">
        Learn More
      </button>
    </div>
  </main>
);

export default AboutPage;
