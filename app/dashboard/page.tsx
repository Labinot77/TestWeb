import { auth } from '@/auth'
import Note from '@/components/Note'
import NoteRef from '@/components/NoteRef'
import { FindUserTickets } from '@/lib/actions/TicketActions'
import { redirect } from 'next/navigation'

interface Props {
    title: string
    content: string
    image: string | null
    color: string
    background: string
    id: string
    createdAt: Date
}

// make it so notes take as much space as they need, fix deleting notes
// if i have time add a theme

const page = async () => {
  const session = await auth()
  if (!session?.user) redirect("/authentication/sign-in?callbackUrl=/dashboard")

  const data = await FindUserTickets(session.user.id as string)

  if (!data?.Notes) {
    return (
      <h1>No notes</h1>
    )
  }
  return (
    <>
    <main className='p-2 grid grid-cols-1 lg:grid-cols-2 auto-rows-auto gap-4 items-center justify-start'>
      {data.Notes.length ? (
        data.Notes.map((note: Props) => ( 
          <>
          <Note key={note.id} {...note} />
          </>
        ))
      ) : (
        <p className='mt-10 text-center font-bold text-2xl'>No notes found</p>
      )}
    </main>
      <NoteRef /> 
    </>
  )
}

export default page
