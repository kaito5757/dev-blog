import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium text-sky-500 hover:text-sky-600 dark:hover:text-sky-400"
    >
      {text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()}
    </Link>
  )
}

export default Tag
