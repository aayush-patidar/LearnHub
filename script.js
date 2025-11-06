console.log("✅ JS file is connected");


// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("navMenu")

hamburger?.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger?.classList.remove("active")
    navMenu?.classList.remove("active")
  })
})

// Course Data
const coursesData = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    category: "web",
    description: "Learn HTML, CSS, and JavaScript from scratch",
    price: "Rs.500",
    rating: "4.8",
    image: "public/web-development-coding.png",
  },
  {
    id: 2,
    title: "Advanced CSS & Responsive Design",
    category: "web",
    description: "Master CSS3 and create responsive layouts",
    price: "Rs.800",
    rating: "4.7",
    image: "public/css-responsive-design.jpg",
  },
  {
    id: 3,
    title: "JavaScript Advanced Concepts",
    category: "web",
    description: "Deep dive into JavaScript ES6+ and async programming",
    price: "Rs.900",
    rating: "4.9",
    image: "public/javascript-programming.png",
  },
  {
    id: 4,
    title: "Data Science Masterclass",
    category: "data",
    description: "Master Python, SQL, and data visualization",
    price: "Rs.1600",
    rating: "4.9",
    image: "public/data-science-analytics.jpg",
  },
  {
    id: 5,
    title: "Python for Data Analysis",
    category: "data",
    description: "Learn Python libraries for data analysis",
    price: "Rs.1200",
    rating: "4.8",
    image: "public/python-data-analysis.png",
  },
  {
    id: 6,
    title: "Machine Learning Basics",
    category: "data",
    description: "Introduction to ML algorithms and models",
    price: "Rs.1500",
    rating: "4.7",
    image: "public/machine-learning-concept.png",
  },
  {
    id: 7,
    title: "Mobile App Development",
    category: "mobile",
    description: "Build iOS and Android apps with React Native",
    price: "Rs.1800",
    rating: "4.7",
    image: "public/mobile-app-development.png",
  },
  {
    id: 8,
    title: "React Native Advanced",
    category: "mobile",
    description: "Advanced React Native techniques and patterns",
    price: "Rs.1900",
    rating: "4.8",
    image: "public/react-native-concept.png",
  },
  {
    id: 9,
    title: "Business Strategy & Growth",
    category: "business",
    description: "Learn strategies to scale your business",
    price: "Rs.800",
    rating: "4.9",
    image: "public/business-strategy-growth.jpg",
  },
  {
    id: 10,
    title: "Digital Marketing Essentials",
    category: "business",
    description: "Master digital marketing and social media",
    price: "Rs.800",
    rating: "4.6",
    image: "public/digital-marketing-strategy.png",
  },
]

// Render Courses
function renderCourses(coursesToShow = coursesData) {
  const coursesGrid = document.getElementById("coursesGrid")
  if (!coursesGrid) return

  coursesGrid.innerHTML = coursesToShow
    .map(
      (course) => `
        <div class="course-card">
            <img src="${course.image}" alt="${course.title}">
            <div class="course-info">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-footer">
                    <span class="rating">★★★★★ (${course.rating})</span>
                    <span class="price">${course.price}</span>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Filter and Search
const searchInput = document.getElementById("searchInput")
const categoryFilter = document.getElementById("categoryFilter")

function filterCourses() {
  const searchTerm = searchInput?.value.toLowerCase() || ""
  const selectedCategory = categoryFilter?.value || "all"

  const filtered = coursesData.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm) || course.description.toLowerCase().includes(searchTerm)
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  renderCourses(filtered)
}

searchInput?.addEventListener("input", filterCourses)
categoryFilter?.addEventListener("change", filterCourses)

// Render courses on page load
if (document.getElementById("coursesGrid")) {
  renderCourses()
}

// Contact Form Handling
const contactForm = document.getElementById("contactForm")

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const subject = document.getElementById("subject").value
  const message = document.getElementById("message").value
  const successMessage = document.getElementById("successMessage")

  if (name && email && subject && message) {
    successMessage.style.display = "block"
    successMessage.textContent = "✅ Thank you! Your message has been sent successfully."
    contactForm.reset()

    setTimeout(() => {
      successMessage.style.display = "none"
    }, 5000)
  } else {
    successMessage.style.display = "block"
    successMessage.textContent = "❌ Please fill in all fields."
    successMessage.style.backgroundColor = "#fee2e2"
    successMessage.style.color = "#991b1b"

    setTimeout(() => {
      successMessage.style.display = "none"
    }, 5000)
  }
})

// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#") {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  })
})
