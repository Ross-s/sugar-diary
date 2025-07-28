import Link from "next/link";
import { Base } from "./base";

export function ComingSoonSignedUp() {
  return (
    <Base>
      {/* Success Icon */}
      <div className="mb-8">
        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Success checkmark"
          >
            <title>Email Confirmed</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Email Confirmed!
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Welcome to the Sugar Diary Community
        </p>
      </div>
      {/* Confirmation Message */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          You&apos;re All Set!
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Thank you for confirming your email address. You&apos;re now on our priority list and will
          be among the first to know when Sugar Diary launches with its comprehensive diabetes
          management features.
        </p>
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Checkmark"
              >
                <title>Verified</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <p className="text-green-800 dark:text-green-200 font-medium">
            Your email has been successfully verified!
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            What Happens Next?
          </h3>
          <div className="text-left max-w-md mx-auto space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 pt-1">
                You&apos;ll be notified as soon as Sugar Diary is ready
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 pt-1">
                Be the first to experience our smart insulin bolus calculator
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Action Button */}
      <div className="flex justify-center">
        <Link
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-medium"
        >
          Back to Home
        </Link>
      </div>
    </Base>
  );
}
