import GlobalHeader from "@/components/layout/GlobalHeader";
import GlobalFooter from "@/components/layout/GlobalFooter";

export default function SignUpPage() {
  return (
    <>
      <GlobalHeader />
      <main
        className="min-h-screen flex items-center justify-center bg-black text-white relative"
        style={{
          backgroundImage: "url('/images/auth-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-0" />
        
        {/* Decorative neon glow effects */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
        
        <div className="relative z-10 bg-black/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gold/20 p-12 max-w-lg w-full mx-4">
          {/* SaintSal™ Branding */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent">
              <h1 className="text-4xl font-bold mb-2">SaintSal™</h1>
            </div>
            <p className="text-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent font-semibold">
              Enterprise Registration
            </p>
            <p className="text-sm text-gray-400 mt-2">Join the next generation of enterprise intelligence</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/60 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/60 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">Enterprise Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-black/60 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 text-white placeholder-gray-400"
                placeholder="john.doe@company.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">Company</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-black/60 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 text-white placeholder-gray-400"
                placeholder="Your Organization"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-black/60 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-400"
                placeholder="Create a secure password"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-black/60 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400"
                placeholder="Confirm your password"
              />
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 text-gold bg-black border-2 border-gold/30 rounded focus:ring-gold focus:ring-2"
              />
              <p className="text-sm text-gray-300">
                I agree to the{" "}
                <a href="/terms" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Privacy Policy
                </a>
              </p>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gold via-yellow-400 to-gold text-black py-3 rounded-lg font-bold text-lg hover:from-yellow-400 hover:via-gold hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gold/20"
            >
              Request Enterprise Access
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
            <span className="px-4 text-sm text-gray-400">or</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-gray-400 mb-2">Already have an account?</p>
            <a 
              href="/signin" 
              className="inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent font-bold hover:from-pink-400 hover:via-purple-500 hover:to-cyan-400 transition-all duration-300"
            >
              Sign In to Enterprise Portal →
            </a>
          </div>

          {/* Enterprise Note */}
          <div className="mt-8 pt-6 border-t border-gold/20">
            <div className="bg-gradient-to-r from-gold/10 to-purple-500/10 rounded-lg p-4">
              <p className="text-xs text-gray-300 text-center">
                <span className="text-gold font-semibold">Enterprise Review:</span> All registration requests are reviewed for enterprise eligibility. You'll receive confirmation within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </main>
      <GlobalFooter />
    </>
  );
}
