import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Section = ({ children, className = "" }: SectionProps) => (
  <div
    className={`flex-1 flex flex-col items-center text-center space-y-4 ${className}`}
  >
    {children}
  </div>
);

const Title = ({ children }: { children: ReactNode }) => (
  <h2 className="text-2xl md:text-4xl font-bold text-gray-900">{children}</h2>
);

const Text = ({ children }: { children: ReactNode }) => (
  <p className="text-gray-700">{children}</p>
);

const Button = ({ children }: { children: ReactNode }) => (
  <button className="mt-4 md:mt-8 px-4 py-2 md:px-8 md:py-4 bg-indigo-600 text-white rounded-md shadow-md transform transition duration-500 ease-in-out hover:scale-110">
    {children}
  </button>
);

const HomePage = () => (
  <main className="flex flex-col md:flex-row flex-grow items-center justify-center p-4 md:p-8 w-full space-y-4 md:space-y-0 md:space-x-4">
    <Section className="mt-8 md:mt-16">
      <img
        className="mx-auto h-24 md:h-32 w-auto mb-4"
        src="/icon.svg"
        alt="Workflow"
      />
      <Title>Welcome to our React Scaffold</Title>
      <Text>
        This is an adaptive scaffold powered by React, Vite, and Tailwind CSS.
      </Text>
    </Section>
    <Section>
      <Title>Start Building Now</Title>
      <Text>
        Our scaffold is optimized for all devices and ready for your next
        project.
      </Text>
      <Button>Get Started</Button>
    </Section>
  </main>
);

export default HomePage;
