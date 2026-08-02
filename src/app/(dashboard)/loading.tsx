import { Skeleton } from "@/components/ui/skeleton";
export default function Loading() { return <div className="space-y-8"><Skeleton className="h-8 w-48" /><div className="grid gap-4 sm:grid-cols-3">{[1, 2, 3].map((item) => <Skeleton key={item} className="h-36" />)}</div><Skeleton className="h-64" /></div>; }
