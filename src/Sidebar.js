import React from 'react'
import Home from './Home'

function Sidebar() {
  return (
    <div class="container-fluid">
    <div class="row">
      <div class="sidebar col-md-3 col-lg-2 p-0 bg-body-side" style={{backgroundColor:'#111c43 !important'}}>
        <div class="offcanvas-md offcanvas-end bg-body-side" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="#">
                <i class="bi bi-bank"></i>
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                <i class="bi bi-card-list"></i>
                 My Tasks
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                <i class="bi bi-pencil-square"></i>
                Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                <i class="bi bi-people-fill"></i>
                  Clients
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                <i class="bi bi-file-earmark-excel-fill"></i> Reports.
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                <i class="bi bi-box"></i>
                  Settings.
                </a>
              </li>
            </ul>
  
        {/*   <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
              <span>Saved reports</span>
              <a class="link-secondary" href="#" aria-label="Add a new report">
                <svg class="bi"><use xlink:href="#plus-circle"/></svg>
              </a>
            </h6>
            <ul class="nav flex-column mb-auto">
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                  <svg class="bi"><use xlink:href="#file-earmark-text"/></svg>
                  Current month
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                  <svg class="bi"><use xlink:href="#file-earmark-text"/></svg>
                  Last quarter
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                  <svg class="bi"><use xlink:href="#file-earmark-text"/></svg>
                  Social engagement
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                  <svg class="bi"><use xlink:href="#file-earmark-text"/></svg>
                  Year-end sale
                </a>
              </li>
            </ul>
  
            <hr class="my-3" />
  
            <ul class="nav flex-column mb-auto">
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                  <svg class="bi"><use xlink:href="#gear-wide-connected"/></svg>
                  Settings
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                  <svg class="bi"><use xlink:href="#door-closed"/></svg>
                  Sign out
                </a>
              </li>
            </ul>
              */} 

          </div>
        </div>
      </div>
  
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-home">
     <Home />
      </main>
    </div>
  </div>
  )
}

export default Sidebar
