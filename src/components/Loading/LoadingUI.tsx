
 export  const LoadingUi = () => {
    return <div className="flex flex-col items-center justify-center min-h-screen bg-white text-white p-4">
      {/* Loading Spinner */}
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-0 w-full h-full border-4  rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-t-blue-300 rounded-full animate-spin"></div>
      </div>

      {/* Loading Text */}
      <h2 className="mt-8 text-2xl font-bold tracking-wide text-blue-300">
        Loading...
      </h2>

      {/* Animated dots for a dynamic feel */}
      <div className="flex space-x-2 mt-4">
        <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
        <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
 }

