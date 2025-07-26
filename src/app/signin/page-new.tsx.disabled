import GlobalHeader from "@/components/layout/GlobalHeader";

export default function SignInPage() {
  return (
    <>
      <GlobalHeader />
      <main
        className="min-h-screen flex items-center justify-center bg-black text-white relative"
        style={{
          backgroundImage: "url('/images/signin  bots saintsal entrance.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-0" />
        
        {/* Decorative neon glow effects */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
        
        <div className="relative z-10 bg-black/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gold/20 p-12 max-w-md w-full mx-4">
          {/* SaintSal™ Branding */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent">
              <h1 className="text-4xl font-bold mb-2">SaintSal™</h1>
            </div>
            <p className="text-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent font-semibold">
              Enterprise Access Portal
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-black/60 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-400"
                placeholder="Enter your enterprise email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-black/60 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400"
                placeholder="Enter your secure password"
              />
            </div>
            
            {/* Forgot Password */}
            <div className="text-right">
              <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                Forgot your password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gold via-yellow-400 to-gold text-black py-3 rounded-lg font-bold text-lg hover:from-yellow-400 hover:via-gold hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gold/20"
            >
              Access Enterprise Portal
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
            <span className="px-4 text-sm text-gray-400">or</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-400 mb-2">New to SaintSal™ Enterprise?</p>
            <a 
              href="/signup" 
              className="inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent font-bold hover:from-pink-400 hover:via-purple-500 hover:to-cyan-400 transition-all duration-300"
            >
              Request Enterprise Access →
            </a>
          </div>

          {/* Enterprise Features */}
          <div className="mt-8 pt-6 border-t border-gold/20">
            <p className="text-xs text-gray-500 text-center mb-3">Enterprise Benefits Include:</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="text-cyan-400">• Advanced AI Analytics</div>
              <div className="text-purple-400">• Real-time Insights</div>
              <div className="text-pink-400">• Custom Integrations</div>
              <div className="text-green-400">• Priority Support</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
