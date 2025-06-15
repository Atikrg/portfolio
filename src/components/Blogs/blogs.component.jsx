import "./blogs.styles.css";
import BlogsData from '../../assests/json_files/blogs.json';

const Blogs = () => {
      return (
            <div className="blogs-wrapper">
                  <h1 className="blogs-title">📝 Latest Blogs</h1>

                  <div className="blogs_container">
                        {BlogsData.map((item, index) => (
                              <a
                                    href={item.link}
                                    key={item.id}
                                    className="blog-card"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ "--delay": `${index * 100}ms` }}
                              >
                                    <div className="blog-content">
                                          <h4>{item.header}</h4>
                                          {item.description && (
                                                <p className="blog-description">{item.description}</p>
                                          )}
                                          <span className="read-more">Read More →</span>
                                    </div>
                              </a>
                        ))}
                  </div>

                  {/* <div className="more-blogs">
                        <a href="#">View All Blogs →</a>
                  </div> */}
            </div>
      );
}

export default Blogs;
