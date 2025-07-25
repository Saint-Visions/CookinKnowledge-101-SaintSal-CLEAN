import TopNav from "@/components/TopNav";

export default function SignInPage() {
  return (
    <>
      <TopNav />
      <main
        className="min-h-screen flex items-center justify-center bg-black text-white relative"
        style={{
          backgroundImage: "url('/images/auth-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-0" />
        <div className="relative z-10 bg-charcoal bg-opacity-80 rounded-xl shadow-xl p-10 max-w-md w-full">
          <h1 className="text-3xl font-bold text-gold mb-6 text-center">Welcome Back</h1>
          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-black border border-gold rounded focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-black border border-gold rounded focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gold text-black py-2 rounded font-semibold hover:bg-yellow-400 transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-sm text-center text-gray-400 mt-4">
            Don’t have an account? <a href="/signup" className="text-gold hover:underline">Sign up</a>
          </p>
        </div>
      </main>
    </>
  );
}
