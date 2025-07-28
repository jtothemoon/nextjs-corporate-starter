import { Button } from '@/components/ui/button'

export default async function Home() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return (
    <div className="p-8">
      <Button>Hello shadcn/ui!</Button>
    </div>
  )
}
