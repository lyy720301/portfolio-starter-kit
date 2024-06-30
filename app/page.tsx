import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        主页
      </h1>
      <p className="mb-4">
        {`我叫李智，这是我的博客。`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
