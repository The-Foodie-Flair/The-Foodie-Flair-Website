import React from 'react'

const BlogCard = (props) => {
  return (
    <div>
        <iframe src="{props.url}" width="100%" height="300" />
      {/* <embed src="{props.url}" /> */}
    </div>
  )
}

export default BlogCard
