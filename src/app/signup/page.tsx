import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/layout/GlobalFooter";

export default function SignUpPage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700 p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-thin text-white mb-2">Join SaintVision AI</h1>
              <p className="text-gray-400">Create your account and start building</p>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-white focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-white focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-white focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
              </div>
              
              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-600" />
                  <span className="ml-2 text-sm text-gray-400">
                    I agree to the <a href="/terms" className="text-white hover:text-gray-300">Terms of Service</a> and <a href="/privacy" className="text-white hover:text-gray-300">Privacy Policy</a>
                  </span>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-white hover:bg-gray-100 text-black py-3 rounded-xl font-medium transition-all"
              >
                Create Account
              </button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <a href="/signin" className="text-white hover:text-gray-300">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <GlobalFooter />
    </>
  );
}
