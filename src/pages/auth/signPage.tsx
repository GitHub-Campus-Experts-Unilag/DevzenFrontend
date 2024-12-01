import googleIcon from './icons/google.svg'; // Adjust the path as you see fit
import githubIcon from './icons/github.svg'; // Adjust the path as you see fit

interface SignInProps {
  token: string | null;
  decodedToken: unknown;
  loading: boolean;
  error: string | null;
  handleSignUp: (e: React.FormEvent<HTMLFormElement>) => void;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSocialSignIn: (provider: 'google' | 'github') => void;
}

const SignIn: React.FC<SignInProps> = ({ token, decodedToken, loading, error, handleSignUp, username, setUsername, email, setEmail, password, setPassword, handleSocialSignIn }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-black via-gray-800 to-black">
      <h1 className="text-white font-extrabold text-3xl mb-6">Create Your Account</h1>
      
      <form onSubmit={handleSignUp} className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Username</label>
          <input
            type="text"
            className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full py-3 rounded-lg font-bold ${loading ? 'bg-gray-400' : 'bg-blue-500'} text-white hover:bg-blue-600`}
          disabled={loading}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>

      <div className="flex flex-col gap-4 w-full max-w-[349px] mt-6">
        <button 
          className="flex items-center justify-center gap-2 p-6 font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white border border-[hsl(188,89%,26%)] shadow-[0_2px_4px_0_hsla(187,90%,15%,0.25)] transition-all duration-300 hover:brightness-[0.85]"
          onClick={() => handleSocialSignIn('github')}
        >
          <img src={githubIcon} alt="Github icon" />
          <span>Continue with GitHub</span>
        </button>
        <button 
          className="flex items-center justify-center gap-2 p-6 font-semibold rounded-lg bg-primary text-primary-foreground border-2 border-[hsl(188,89%,21%)] shadow-[0_0_0_2px_hsla(188,89%,21%,0.25)] transition-all duration-300 hover:brightness-[0.85]"
          onClick={() => handleSocialSignIn('google')}
        >
          <img src={googleIcon} alt="Google icon" />
          <span>Continue with Google</span>
        </button>
      </div>

      {token && (
        <div className="mt-6">
          <h2 className="text-white">Decoded JWT:</h2>
          <pre className="text-white">{JSON.stringify(decodedToken, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SignIn;
