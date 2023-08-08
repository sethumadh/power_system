import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { icons } from "@/constant"

type HoverCardInfoType = {
  message?: string
  title?: string
}

export function HoverCardInfo({ message, title }: HoverCardInfoType) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="p-1">
          <icons.RiInformationLine />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-50">
        <div className="flex justify-between items-center space-x-4">
          {/* <Avatar> */}
          <icons.MdOutlineAddAlert />
          {/* <AvatarFallback>VC</AvatarFallback> */}
          {/* </Avatar> */}
          {/* <div className="space-y-1"> */}
            {/* <h4 className="text-sm font-semibold">@{title}</h4> */}
            <p className="text-sm">{message}</p>
            {/* <div className="flex items-center pt-2">
             
            </div> */}
          {/* </div> */}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
