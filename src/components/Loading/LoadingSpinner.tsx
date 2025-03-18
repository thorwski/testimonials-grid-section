const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-purple-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
