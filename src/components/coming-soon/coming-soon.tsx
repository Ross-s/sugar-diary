import { Base } from "./base";

export function ComingSoon() {
  return (
    <Base>
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
        <p className="text-xl text-gray-600 dark:text-gray-300">Smart Insulin Bolus Calculator</p>
      </div>

      {/* Description */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Coming Soon
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          We&apos;re building the next generation diabetes management tool with intelligent insulin
          bolus calculations, seamless Nightscout integration, and personalized insights to help you
          manage your blood glucose levels with confidence.
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
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Nightscout Sync</h3>
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
    </Base>
  );
}
