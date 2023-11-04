const SkeletonModal = () => {
  return (
    <div className="relaive mx-auto mb-10 mt-[35rem] max-h-[initial] w-[80%] max-w-6xl rounded-lg bg-primary-900 p-4 shadow md:mb-0 md:mt-0 md:max-h-[800px]">
      <div className="flex animate-pulse space-x-4">
        <div className="flex-2 space-y-6 py-1">
          <div className="h-96 w-60 rounded bg-primary-850"></div>
          <div className="space-y-3">
            <div className="flex w-60 gap-4">
              <div className="h-10  w-60 rounded bg-primary-850"></div>
            </div>
            <div className="flex w-60 gap-4">
              <div className="h-10  w-60 rounded bg-primary-850"></div>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6 py-1">
          <div className="h-80 w-full rounded bg-primary-850"></div>
          <div className="space-y-3">
            <div className="flex gap-4">
              <div className="h-20  w-full rounded bg-primary-850"></div>
            </div>
            <div className="h-10 rounded bg-primary-850"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonModal
