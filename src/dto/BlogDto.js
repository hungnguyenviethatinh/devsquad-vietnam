export function BlogDto(blog) {
  const blogDto = blog || {};

  this.id = blogDto.id || '';
  this.background_image =
    blogDto.backgroundImage ||
    'https://ichef.bbci.co.uk/news/1024/cpsprodpb/83D7/production/_111515733_gettyimages-1208779325.jpg';
  this.title = blogDto.title || '';
  this.slug = blogDto.slug || '';
  this.creator = 'DevSquad';
  this.created_date = blogDto.createdAt || '';
  this.description = blogDto.description || '';
  this.content = blogDto.content || '';
}

export function BlogListDto(blogs) {
  return blogs.map(blog => new BlogDto(blog));
}