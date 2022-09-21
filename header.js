document.write(`
<header id="header" class="fixed-top">
<div class="container d-flex align-items-center">

  <!-- <h1 class="logo me-auto"><a href="index.html">Mentor</a></h1> -->
  <!-- Uncomment below if you prefer to use an image logo -->
  <a href="index.html" class="logo me-auto"><img src="assets/img/ieee-logo.jpg" alt="" class="img-fluid"></a>

  <nav id="navbar" class="navbar order-last order-lg-0">
    <ul>
      <li><a class="active" href="index.html">Home</a></li>
      <li class="dropdown"><a href="#"><span>About Us</span> <i class="bi bi-chevron-down"></i></a>
        <ul>
          <li><a href="officers.html">Officers</a></li>
          <li><a href="ourMission.html">Our Mission</a></li>
        </ul>
      </li>
      <li class="dropdown"><a href="#"><span>Projects</span> <i class="bi bi-chevron-down"></i></a>
        <ul>
          <li><a href="ops.html">Open Project Space</a></li>
          <li><a href="micromouse.html">Micromouse</a></li>
        </ul>
      </li>
      <li><a href="workshops.html">Workshops</a></li>
      <li><a href="events.html">Events</a></li>
      <li><a href="lab.html">Lab</a></li>

      <!-- DEEP DROPDOWN EXAMPLE
      <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
        <ul>
          <li><a href="#">Drop Down 1</a></li>
          <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
            <ul>
              <li><a href="#">Deep Drop Down 1</a></li>
              <li><a href="#">Deep Drop Down 2</a></li>
              <li><a href="#">Deep Drop Down 3</a></li>
              <li><a href="#">Deep Drop Down 4</a></li>
              <li><a href="#">Deep Drop Down 5</a></li>
            </ul>
          </li>
          <li><a href="#">Drop Down 2</a></li>
          <li><a href="#">Drop Down 3</a></li>
          <li><a href="#">Drop Down 4</a></li>
        </ul>
      </li> -->
    </ul>

  </nav><!-- .navbar -->

  <a class="get-started-btn" onClick="document.getElementById('end').scrollIntoView();">Contact</a>

</div>
</header>
`);