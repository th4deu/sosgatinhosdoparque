export default function CatCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
      <div className="aspect-square bg-gray-200" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="h-6 bg-gray-200 rounded w-24" />
          <div className="h-5 bg-gray-200 rounded-full w-16" />
        </div>
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-4/6" />
        </div>
        <div className="h-10 bg-gray-200 rounded-full w-full" />
      </div>
    </div>
  )
}

export function CatCardSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <CatCardSkeleton key={index} />
      ))}
    </div>
  )
}
