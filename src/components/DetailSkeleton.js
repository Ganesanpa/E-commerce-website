export default function DetailSkeleton() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-80 bg-gray-200 rounded-xl" />
        <div>
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4" />
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
          <div className="h-5 bg-gray-300 rounded w-full mb-6" />
          <div className="h-10 bg-gray-300 rounded w-1/3" />
        </div>
      </div>
    </div>
  );
}
