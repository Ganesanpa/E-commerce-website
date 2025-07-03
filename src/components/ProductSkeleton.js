export default function ProductSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-xl shadow p-4 w-full max-w-xs">
      <div className="bg-gray-200 h-48 w-full rounded mb-4" />
      <div className="h-4 bg-gray-200 rounded mb-2 w-3/4" />
      <div className="h-3 bg-gray-100 rounded mb-1 w-1/2" />
      <div className="h-4 bg-gray-300 rounded w-1/3" />
    </div>
  );
}
