import { useState } from "react";

const questions = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-[hsl(273,75%,66%)] to-[hsl(240,73%,65%)] w-screen h-screen flex items-center justify-center font-KumbhSans p-6 py-[300px] lg:py-0 lg:overflow-hidden">
      <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg max-w-5xl w-full items-center lg:overflow-hidden">
        {/* Image Section */}
        <div className="relative flex-shrink-0 lg:w-1/2 flex items-center justify-center">
          {/* Mobile Illustration */}
          <div className="lg:hidden -mt-26 mb-6 flex flex-col items-center">
            <img
              src="src/images/illustration-woman-online-mobile.svg"
              alt=""
              className="w-56"
            />
            <img
              src="src/images/bg-pattern-mobile.svg"
              alt=""
              className="w-56 -mt-18"
            />
          </div>

          {/* Desktop Illustration */}
          <div className="hidden lg:flex lg:flex-shrink-0 lg:flex-col">
            <img
              src="src/images/illustration-woman-online-desktop.svg"
              alt=""
              className=" w-min z-10"
            />
            <img
              src="src/images/bg-pattern-desktop.svg"
              alt=""
              className=" -mt-[600px] -ml-60 -mb-20"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="p-6 lg:p-10 lg:w-1/2">
          <h1 className="text-3xl lg:text-4xl font-bold text-center lg:text-left text-[hsl(292,42%,14%)] mb-8">
            FAQ
          </h1>

          <div className="space-y-4">
            {questions.map((item, index) => (
              <div key={index} className="border-b pb-4">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left text-md font-semibold text-[hsl(292,42%,14%)] hover:text-[hsl(292,100%,35%)]"
                >
                  <span>{item.question}</span>
                  <span>{activeIndex === index ? "^" : "+"}</span>
                </button>
                {activeIndex === index && (
                  <p className="mt-2 text-sm text-[hsl(292,16%,49%)]">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
