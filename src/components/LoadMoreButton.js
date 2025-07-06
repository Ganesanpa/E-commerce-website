"use client";

export default function LoadMoreButton({loading,hasMore,onClick}){
    if(!hasMore) return null;

    return(
        <div className="text-center mt-6">
            <button
            onClick={onClick}
            className="bg-blue-600 text-white px-6 py-2 round hover:bg-blue-700 disabled:opacity-50"
                disabled={loading}
                >
                    {loading ? "loading...":"Load More"}
            </button>
        </div>
    )
}