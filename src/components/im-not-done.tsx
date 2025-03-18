import { Badge } from "@/components/ui/badge"

const IMNotDone = () => {
  return (
    <div className='my-2 font-mono text-xs'>
      <Badge variant={'secondary'} className="lg:col-start-1 mr-2 border border-neutral-300 dark:border-neutral-600">Draft</Badge>
      May have typos and incomplete thoughts.
    </div>
  )
}

export default IMNotDone