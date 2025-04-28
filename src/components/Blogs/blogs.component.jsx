import { Height } from "@mui/icons-material";
import "./blogs.styles.css";
import BlogsData from '../../assests/json_files/blogs.json';


const Blogs = () => {
      return (
            <div className="blogs-wrapper">
                  <h1 className="blogs-title">📝 Latest Blogs</h1>

                  <div className="blogs_container">
                        {BlogsData.map((item, index) => (
                              <a href={item.link} key={item.id} className="blog-card">
                                    <div className="blog-content">
                                          <h4>{item.header}</h4>
                                          <span className="read-more">Read More →</span>
                                    </div>
                              </a>
                        ))}
                  </div>

                  <div className="more-blogs">
                        <a href="#">View All Blogs →</a>
                  </div>
            </div>
      );
}

export default Blogs;
