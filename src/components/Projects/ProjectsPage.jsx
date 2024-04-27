import React from "react";
import "./projects.css";

// import assets
import SuperApp from './assets/superApp.jpg'
import QuizzApp from './assets/QuizzApp.jpg'
import MusicCart from './assets/Ecommerce.jpg'
import PocketNotes from './assets/pocketNotes.png'
import Recommendationsystem from './assets/recommendation system.jpg'
const ProjectsPage = () => {

  return (
    <div className="ProjectPageBody">
      <div className="ProjectsPageContainer">
        <div className="card" 
        style={{ color: "#009688" }}
        >
          <div className="img-box">
            <img
             src={MusicCart}
              alt="project1"
            />
          </div>
          <div className="content">
            <h2>Music Store (eCommerce)</h2>
            <p>
              Created a shopping cart platform for music-related products,
              facilitating browsing (grid/list view), product details, adding to
              cart, ordering, and purchase. Implemented sorting by type,
              company, color, cost, and alphabetically. Utilized frontend local
              storage and backend Node.js with MongoDB for user data storage.
            </p>
            <button>
              <a
                href="https://github.com/gone-keerthi/keertigone2002-gmail.com_cuvette-evaluation-test_3"
                target="blank"
              >
                Source Code
              </a>
            </button>
            <button>
              <a href="https://keertigone2002-gmail-com-cuvette-evaluation-test-3-rlqdwmwc0.vercel.app/" target="blank">View Live</a>{" "}
            </button>
          </div>
        </div>

        <div className="card" style={{ color: "#009688" }}>
          <div className="img-box">
            <img
              src={QuizzApp}
              alt="project1"
            />
          </div>
          <div className="content">
            <h2>IDEA BOOK</h2>
            <p>
              The quiz app allows users to create and share quizzes. users can
              access their created quizzes in their dashboard. It supports both
              poll and Q&A types with text or image options. Features include
              view counting, promoting quizzes to trending if views exceed 10,
              and MongoDB is used to store data
            </p>
            <button>
              <a
                href="https://github.com/gone-keerthi/IDEA-BOOK/tree/main/frontend"
                target="blank"
              >
                Source Code
              </a>
            </button>
            <button>
              <a href="https://idea-book-1h82-9ukexsxd3-gone-keerthi.vercel.app/" target="blank">View Live</a>{" "}
            </button>
          </div>
        </div>

        <div className="card" style={{ color: "#009688" }}>
          <div className="img-box">
            <img
              src={SuperApp}
              alt="project1"
            />
          </div>
          <div className="content">
            <h2>Super-App</h2>
            <p>
              The project integrates key React.js concepts. It encompasses user
              info, entertainment categories, daily weather, note-taking, news,
              timer, and movies. Users can sign up, select entertainment
              categories to receive movie suggestions, take notes, view current
              weather, and check the latest news.
            </p>
            <button>
              <a
                href="https://github.com/gone-keerthi/Super-App-3"
                target="blank"
              >
                Source Code
              </a>
            </button>
            <button>
              <a href="https://super-app-3-c8kacmarq-gone-keerthi.vercel.app/" target="blank">View Live</a>{" "}
            </button>
          </div>
        </div>

        <div className="card" style={{ color: "#009688" }}>
          <div className="img-box">
            <img
              src={PocketNotes}
              alt="project1"
            />
          </div>
          <div className="content">
            <h2>POCKET NOTES APP</h2>
            <p>
              The project aims to create a streamlined note-taking app using
              React.js. It features personalized grouped notes for daily needs.
              Users can create and manage notes seamlessly, with responsive
              design for desktop and mobile. Data is stored locally for
              persistence, and switching groups dynamically fetches relevant
              notes.
            </p>

            <button>
              <a
                href="https://github.com/gone-keerthi/Notes-App-MERN"
                target="blank"
              >
                Source Code
              </a>
            </button>
            <button>
              <a href="https://notes-app-mern-busfl4i6q-gone-keerthi.vercel.app/" target="blank">View Live</a>{" "}
            </button>
          </div>
        </div>

        <div className="card" style={{ color: "#009688" }}>
          <div className="img-box">
            <img
              src={Recommendationsystem}
              alt="project1"
            />
          </div>
          <div className="content">
            <h2>Movie Recommendation System</h2>
            <p>
              The project aims to recommend 5 similar movies from a dataset of
              5000 movies.Machine learning algorithms including clustering,
              k-nearest neighbors, and matrix factorization were applied to find
              patterns in the data matrix.
            </p>
            <button>
              <a
                href="https://github.com/gone-keerthi/data-science"
                target="blank"
              >
                Source Code
              </a>{" "}
            </button>
            <button>
              <a href="https://github.com/gone-keerthi/data-science/blob/main/machine%20learning%20project.ipynb" target="blank">View Live</a>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
