// search functionality
const jobroleSearch = document.querySelector(".search_jobrole");
const locationSearch = document.querySelector(".search_location");
const searchBtn = document.querySelector(".btn-search");
const data = [
  {
    name: "John Doe",
    jobRole: "Software Engineer",
    location: "San Francisco",
    description:
      "John Doe is a skilled Software Engineer with expertise in developing web applications and software solutions.",
  },
  {
    name: "Jane Smith",
    jobRole: "Software Engineer",
    location: "New York",
    description:
      "Jane Smith is an experienced Data Analyst proficient in analyzing and interpreting complex data sets to provide valuable insights.",
  },
  {
    name: "David Johnson",
    jobRole: "Software Engineer",
    location: "Seattle ",
    description:
      "David Johnson is a seasoned Product Manager with a track record of successfully leading product development and launch.",
  },
  {
    name: "Emily Davis",
    jobRole: "Software Engineer",
    location: "Chicago",
    description:
      "Emily Davis is a creative UX Designer known for crafting intuitive user experiences and visually appealing designs.",
  },
  {
    name: "Michael Wilson",
    jobRole: "Sales Representative",
    location: "San Francisco",
    description:
      "Michael Wilson is a dynamic Sales Representative with a proven ability to drive sales and build strong client relationships.",
  },
  {
    name: "Jessica Brown",
    jobRole: "Designer",
    location: "Austin",
    description:
      "Jessica Brown is a talented Marketing Specialist adept at creating and implementing effective marketing strategies.",
  },
  {
    name: "Andrew Thompson",
    jobRole: "Data Scientist",
    location: "Boston",
    description:
      "Andrew Thompson is a skilled Data Scientist with expertise in machine learning algorithms and statistical analysis.",
  },
  {
    name: "Olivia Anderson",
    jobRole: "Data Scientist",
    location: "Denver",
    description:
      "Olivia Anderson is a creative Graphic Designer known for delivering visually stunning and impactful designs.",
  },
  {
    name: "William Martinez",
    jobRole: "Data Scientist",
    location: "Houston",
    description:
      "William Martinez is an accomplished Project Manager experienced in leading cross-functional teams and delivering successful projects.",
  },
  {
    name: "Sophia Clark",
    jobRole: "Data Scientist",
    location: "Atlanta",
    description:
      "Sophia Clark is a detail-oriented Business Analyst with expertise in requirement gathering and process improvement.",
  },
  {
    name: "Daniel Lee",
    jobRole: "Software Developer",
    location: "San Diego",
    description:
      "Daniel Lee is a talented Software Developer proficient in developing robust and scalable software applications.",
  },
  {
    name: "Isabella Rodriguez",
    jobRole: "HR Manager",
    location: "Miami",
    description:
      "Isabella Rodriguez is an experienced HR Manager known for her strategic approach to talent acquisition, employee relations, and performance management.",
  },
  {
    name: "Ethan Lewis",
    jobRole: "HR Manager",
    location: "Dallas",
    description:
      "Ethan Lewis is a skilled Network Administrator responsible for maintaining and optimizing network infrastructure and ensuring its smooth operation.",
  },
  {
    name: "Ava Garcia",
    jobRole: "HR Manager",
    location: "Philadelphia",
    description:
      "Ava Garcia is a talented Content Writer known for crafting engaging and persuasive content across various platforms and industries.",
  },
  {
    name: "Matthew Taylor",
    jobRole: "Financial Analyst",
    location: "Charlotte",
    description:
      "Matthew Taylor is a meticulous Financial Analyst with expertise in financial modeling, budgeting, and forecasting.",
  },
  {
    name: "Mia Walker",
    jobRole: "Financial Analyst",
    location: "Phoenix",
    description:
      "Mia Walker is an experienced Operations Manager skilled in optimizing business processes and driving operational efficiency.",
  },
  {
    name: "James Green",
    jobRole: "Systems Engineer",
    location: "Washington",
    description:
      "James Green is a knowledgeable Systems Engineer experienced in designing, implementing, and maintaining complex systems and infrastructure.",
  },
  {
    name: "Abigail Baker",
    jobRole: "Marketing Manager",
    location: "Portland, OR",
    description:
      "Abigail Baker is a results-driven Marketing Manager known for developing and executing strategic marketing campaigns to drive brand awareness and sales.",
  },
  {
    name: "Benjamin Wright",
    jobRole: "UI Designer",
    location: "San Jose, CA",
    description:
      "Benjamin Wright is a talented UI Designer skilled in creating visually appealing and user-friendly interfaces for digital products.",
  },
  {
    name: "Sofia Hill",
    jobRole: "Customer Support Specialist",
    location: "Las Vegas, NV",
    description:
      "Sofia Hill is a dedicated Customer Support Specialist known for delivering exceptional service and resolving customer issues with efficiency and empathy.",
  },
];

searchBtn.addEventListener("click", async function (e) {
  const jobrole = jobroleSearch.value;
  const location = locationSearch.value;
  console.log(jobrole === "", location === "");
  let jobData = data.filter((d) => d.jobRole === jobrole);
  let locationData = data.filter((d) => d.location === location);

  let html = ``;

  for (let i = 0; i < jobData.length; i++) {
    html += `
        <div class="candidate">
          <div class="container-header">
            <div class="developer-name">${jobData[i].name}</div>
            <div class="developer-role">${jobData[i].location}</div>
          </div>
          <div class="developer-tags">
            <div class="tag">${jobData[i].jobRole}</div>
          </div>
          <div class="container-description">
            <ul>
              <li>
               ${jobData[i].description}
              </li>
               
            </ul>
          </div>
        </div>
    `;
  }
  for (let i = 0; i < locationData.length; i++) {
    html += `
        <div class="candidate">
          <div class="container-header">
            <div class="developer-name">${locationData[i].name}</div>
            <div class="developer-role">${locationData[i].location}</div>
          </div>
          <div class="developer-tags">
            <div class="tag">${locationData[i].jobRole}</div>
          </div>
          <div class="container-description">
            <ul>
              <li>
               ${locationData[i].description}
              </li>
               
            </ul>
          </div>
        </div>
    `;
  }

  const container = document.querySelector(".candicate-box");
  container.innerHTML = html;
});
