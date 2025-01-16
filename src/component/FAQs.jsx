import React from 'react'

export default function FAQs() {
  return (
    <>
    <div className='w-11/12 mx-auto bg-base-100'>
    <h2 className='text-4xl font-extrabold my-8'>FAQs?.</h2>

    <div className='space-y-6 mb-10'>
    <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">What is the purpose of a blog?</div>
  <div className="collapse-content">
    <p>A blog is a platform for individuals or businesses to share information, ideas, and experiences on specific topics. It allows creators to connect with their audience, showcase expertise, and even drive traffic for marketing purposes. Blogs can serve as educational resources, storytelling mediums, or tools for building an online presence.</p>
  </div>
    </div>
    <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">How can you make a blog engaging for readers?s</div>
  <div className="collapse-content">
    <p>To make a blog engaging:

Write compelling headlines to grab attention.
Use a conversational tone to connect with readers.
Include visuals like images, videos, and infographics.
Organize content with subheadings, bullet points, and short paragraphs.
Encourage interaction by asking questions or inviting comments.
</p>
  </div>
    </div>
    <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What are the key components of a successful blog post?</div>
  <div className="collapse-content">
    <p>A successful blog post includes:
An attention-grabbing headline that clearly communicates the topic.
A strong introduction to hook the reader.
Well-structured content with clear subheadings and logical flow.
Visual elements such as images, videos, or charts.
A call-to-action (CTA) encouraging readers to take the next step, like commenting, sharing, or subscribing.</p>
  </div>
    </div>
    </div>

    </div>
    </>
  )
}
