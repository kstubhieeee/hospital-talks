import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface SectionHeadingProps {
  title: string
  description: string
  badge?: string
  className?: string
  align?: "left" | "center" | "right"
}

export function SectionHeading({ title, description, badge, className, align = "center" }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "text-center", align === "right" && "text-right", className)}>
      {badge && <Badge className="bg-[#006400] hover:bg-[#004d00] text-white">{badge}</Badge>}
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
      <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{description}</p>
    </div>
  )
}
