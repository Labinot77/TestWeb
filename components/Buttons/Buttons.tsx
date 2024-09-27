"use client"

import { logout } from "@/acitons/logout"
import { Button } from "@/components/ui/button"
import { deleteNote } from "@/lib/actions/TicketActions"
import { ReloadIcon } from "@radix-ui/react-icons"
import { PenLine, Trash } from "lucide-react"
import Link from "next/link"
import { useFormStatus } from "react-dom"


interface Props {
  title: string;
  pending: boolean;
  onClick?: () => void 
}


export const SubmitButton = ({ title, pending, onClick }: Props ) => {
  return (
    <>  
    {pending ? (
          <Button disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Saving
        </Button>
    ): (
      <Button type="submit" onClick={onClick}>{title}</Button>
    )}
    </>
  )
}

export const EditButton = ({ title, pending, id }: { title: string; pending: boolean; id: string }) => {
  // const {pending} = useFormStatus()
  return (
    <>  
    {pending ? (
          <Button disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Saving
        </Button>
    ): (
      <Link href={`/dashboard/new/${id}`}>
        <Button>
         <PenLine size={15}/>
        </Button>
        </Link>
      )}
    </>
  )
}

export const TrashDelete = ({ title, pending, onClick}: Props) => {
  return (
    <>
      {pending ? (
        <Button variant={"destructive"} size="icon" disabled>
             <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        </Button>
      ) : (
        <Button variant={"destructive"} type="submit" onClick={onClick}>
          <Trash className="h-4 w-4" />
        </Button>
      )}
    </>
  );
}
// export const TrashDelete = ({noteId, pending}: {noteId: string, pending?: boolean}) => {
//   return (
//     <>
//       {pending ? (
//         <Button variant={"destructive"} size="icon" disabled>
//              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
//         </Button>
//       ) : (
//         <Button variant={"destructive"} size="icon" type="submit" 
//         onClick={() => deleteNote(noteId)}
//         >
//           <Trash className="h-4 w-4" />
//         </Button>
//       )}
//     </>
//   );
// }

export const RemoveImageButton = ({ event, classes }: { classes?: string, event: () => void }) => {
  return (
        <Button className={`px-2 ${classes}`} variant={"destructive"} size="icon" onClick={event}>
          <Trash size={16} />
        </Button>
  );
};



// export const Logout = ({ pending }: { pending?: boolean }) => {
export const Logout = () => {
  const {pending} = useFormStatus();
  return (
    <>  
    {pending ? (
          <Button disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Saving
        </Button>
    ): (
      <Button variant="destructive" onClick={() => logout()} className="px-4 py-2">
         Logout
        </Button>
      )}
    </>
  )
}
