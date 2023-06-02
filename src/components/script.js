// HTML Structure:
// <div id="blog-list"></div>
// <div id="blog-content"></div>

// Function to fetch blog posts from Contentful
async function fetchBlogPosts() {
    const spaceId = 'hg1u54oagxq7';
    const accessToken = '7CS4_8RGyDCl89YavvuH3GY1QZv6bf5bO0_3pqYnyWw';
  
    const response = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&content_type=blogPost`);
    const data = await response.json();
  
    return data.items;
  }
  
  // Function to display the blog post content
  function displayBlogContent(content) {
    const blogContent = document.getElementById('blog-content');
    blogContent.innerHTML = `
      <h2>${content.title}</h2>
      <p>${content.body}</p>
      <p>Author: ${content.author}</p>
    `;
  }
  
  // Function to display the list of blog posts
  function displayBlogList(blogPosts) {
    const blogList = document.getElementById('blog-list');
    
    blogPosts.forEach(blog => {
      const blogItem = document.createElement('div');
      blogItem.innerHTML = `<h3>${blog.fields.title}</h3>`;
      
      blogItem.addEventListener('click', async () => {
        const response = await fetch(`https://cdn.contentful.com/spaces/${hg1u54oagxq7}/entries/${blog.sys.id}?access_token=${7CS4_8RGyDCl89YavvuH3GY1QZv6bf5bO0_3pqYnyWw}`);
        const data = await response.json();
        
        displayBlogContent(data.fields);
      });
      
      blogList.appendChild(blogItem);
    });
  }
  
  // Fetch and display the list of blog posts
  fetchBlogPosts().then(blogPosts => {
    displayBlogList(blogPosts);
  }).catch(error => {
    console.error('Error fetching blog posts:', error);
  });
  