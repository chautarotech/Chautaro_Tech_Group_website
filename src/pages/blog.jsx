import React, { useState, useEffect } from 'react';
import { Container, Wrapper, Title, Desc } from './ProjectsStyle';
import ProjectCard from '../components/ProjectCards';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blogs = ({openModal,setOpenModal}) => {
  const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch blogs from the server when the component mounts
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://localhost/myportfolio_back/c_fetch_blogs.php');
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };
    
  const projects = [

  ]
      const [page, setPage] = useState(1);
      const projectsPerPage = 12;
      const totalPage = Math.ceil(projects.length / projectsPerPage);
    
      // Calculate the index of the first project on the current page
      const startIndex = (page - 1) * projectsPerPage;
      // Slice projects array to get projects for the current page
      const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects" className='mt-24'>
      <Wrapper>
        <Title>Blogs</Title>
        <Desc>
          Here are some of my blogs
        </Desc>
        <div className='w-[75%] max-md:w-[85%] mx-auto'>
            <input type="text" placeholder='Search the blogs...' className='w-full p-4 rounded-md border border-solid border-gray-300 ' />
        </div>
        <div className="flex flex-wrap justify-center mx-auto items-center gap-2">
                    {blogs.map((blog) => (
                        <Link to={`/blogdetails/${blog.id}`} key={blog.id}>
                            <ProjectCard project={blog} openModal={openModal} setOpenModal={setOpenModal} />
                        </Link>
                    ))}
                </div>
        <div className="pagination flex justify-center">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="flex max-sm:hidden items-center justify-center max-sm:text-xs px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-darkred hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-[color:var(--main)]"
          >
            Previous
          </button>

          {Array.from({ length: Math.min(totalPage, 5) }).map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={index}
                onClick={() => {
                  setPage(pageNumber);
                }}
                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-darkred hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-[color:var(--main)] ${page === pageNumber ? "!bg-[color:var(--main)] text-white" : ""}`}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPage}
            className="flex max-sm:hidden items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-darkred hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-[color:var(--main)]"
          >
            Next
          </button>
        </div>
      </Wrapper>
    </Container>
  )
}

export default Blogs