<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../../public/programming.jpg"
                class="d-block"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3">
            <div class="card">
              <img
                src="../../public/HtmlCss.svg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title">HTML & CSS</h6>
                <p class="card-text">
                  HTML is the language in which most websites are written. HTML is used to create pages and make them functional.
                The code used to make them visually appealing is known as CSS and we shall focus on this in a later tutorial.
                </p><br>
                <!-- <a href="#" class="btn btn-dark p-1">_</a> -->
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <img
                src="../../public/nodeJs.svg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title">NODE JS</h6>
                <p class="card-text">
                  Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. 
                </p><br>
                <!-- <a href="#" class="btn btn-dark p-1">_</a> -->
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <img src="../../public/git.svg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">GIT</h6>
                <p class="card-text">
                  Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.
                </p><br><br>
                <!-- <a href="#" class="btn btn-dark p-1">_</a> -->
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <img
                src="../../public/react.svg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title">REACT</h6>
                <p class="card-text">
                  React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
                </p><br><br>
                <!-- <a href="#" class="btn btn-dark p-1">_</a> -->
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <img
                src="../../public/Javascript.svg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title">JAVASCRIPT</h6>
                <p class="card-text">
                  JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.
                </p>
                <!-- <a href="#" class="btn btn-dark p-1">_</a> -->
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <img
                src="../../public/jquery.svg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title">JQUERY</h6>
                <p class="card-text">
                  jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.
                </p>
                <!-- <a href="#" class="btn btn-dark p-1">_</a> -->
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <img
                src="../../public/python.svg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title">PYTHON</h6>
                <p class="card-text">
                  Python is a high-level, interpreted, general-purpose programming language. 
                </p><br>
                <!-- <a href="#" class="btn btn-dark p-1">_</a> -->
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <img src="../../public/sql.svg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">SQL</h6>
                <p class="card-text">
                  SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system
                </p>
                <!-- <a href="#" class="btn btn-dark p-1">_</a> -->
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursesSection",
};
</script>

<style>
    img {
        max-height: 100px;
        width : 100%;
    }
    .card {
        overflow: hidden;
        max-width: fit-content;
    }
</style>
