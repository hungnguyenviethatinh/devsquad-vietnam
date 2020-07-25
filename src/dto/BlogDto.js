export function BlogDto(blog) {
  this.id = blog.id || '';
  this.background_image =
    blog.backgroundImage ||
    'https://ichef.bbci.co.uk/news/1024/cpsprodpb/83D7/production/_111515733_gettyimages-1208779325.jpg';
  this.title = blog.title || '';
  this.slug = blog.slug || '';
  this.creator = 'DevSquad';
  this.created_date = blog.createdAt || '';
  this.description = blog.description || '';
  this.content = blog.content || '';
}

export function BlogListDto(blogs) {
  return blogs.map(transformBlog);
}

const transformBlog = (blog) => new BlogDto(blog);
