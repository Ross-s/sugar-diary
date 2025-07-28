"use client";
import { useSearchParams } from "next/navigation";
import Script from "next/script";

export function ComingSoon() {
  const searchParams = useSearchParams();

  if (searchParams.get("confirm") === "true") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center">
          {/* Main Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 mb-8">
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
                Thank you for confirming your email address. You&apos;re now on our priority list
                and will be among the first to know when Sugar Diary launches with its comprehensive
                diabetes management features.
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
              <button
                type="button"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-medium"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Back to Home
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p className="text-sm">Built with ❤️ for the diabetes community</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 mb-8">
          {/* Icon/Logo Area */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Blood drop icon"
              >
                <title>Sugar Diary Logo</title>
                <path d="M12 2c-4 4-8 8-8 12a8 8 0 0 0 16 0c0-4-4-8-8-12z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Sugar Diary
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Smart Insulin Bolus Calculator
            </p>
          </div>

          {/* Description */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              We&apos;re building the next generation diabetes management tool with intelligent
              insulin bolus calculations, seamless Nightscout integration, and personalized insights
              to help you manage your blood glucose levels with confidence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 bg-blue-50 dark:bg-gray-700 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Calculator icon"
                >
                  <title>Calculator</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Smart Calculations
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Accurate insulin-to-carb ratios and correction factors for precise dosing
              </p>
            </div>

            <div className="p-6 bg-green-50 dark:bg-gray-700 rounded-xl">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Lightning bolt icon"
                >
                  <title>Lightning</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Nightscout Sync
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Seamless integration with your existing Nightscout setup and CGM data
              </p>
            </div>

            <div className="p-6 bg-purple-50 dark:bg-gray-700 rounded-xl">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Chart bars icon"
                >
                  <title>Analytics</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Data Insights</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Comprehensive analytics and trends to optimize your diabetes management
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <iframe
              data-w-type="embedded"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://sy6xq.mjt.lu/wgt/sy6xq/0157/form?c=7b1c523e"
              width="100%"
              style={{ height: 0 }}
              className=""
              title="Newsletter subscription form"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm">Built with ❤️ for the diabetes community</p>
        </div>
      </div>
    </div>
  );
}
