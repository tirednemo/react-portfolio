const StackService = {
  list: [
    {
      name: 'HTML 5',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" ,
      category: 'Web Development',
    },
    {
      name: 'CSS 3',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      category: 'Web Development',
    },
    {
      name: 'Bootstrap 5',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" ,
      category: 'Web Development',
    },
    {
      name: 'Tailwind CSS',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
      category: 'Web Development',
    },
    {
      name: 'React',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" ,
      category: 'Web Development',
    },
    {
      name: 'JavaScript',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      category: 'Web Development',
    },
    {
      name: 'Laravel',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain.svg" ,
      category: 'Web Development',
    },
    {
      name: 'Spring Boot',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
      category: 'Web Development',
    },
    {
      name: 'Express',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      category: 'Web Development',
    },
    {
      name: 'Java',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" ,
      category: 'App Development',
    },
    {
      name: 'C++',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      category: 'Desktop Development',
    },
    {
      name: 'SFML',
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a0/SFML_Logo.svg",
      category: 'Desktop Development',
    },
    {
      name: 'Java',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      category: 'Desktop Development',
    },
    {
      name: 'JavaFX',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javafx/javafx-original.svg",
      category: 'Desktop Development',
    },
    {
      name: 'Oracle',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
      category: 'Database',
    },
    {
      name: 'MySQL',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      category: 'Database',
    },
    {
      name: 'Firebase',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
      category: 'Database',
    },
    {
      name: 'Git',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      category: 'DevOps',
    },
    {
      name: 'Heroku',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg",
      category: 'DevOps',
    },
    {
      name: 'Vercel',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
      category: 'DevOps',
    },
    {
      name: 'Fast API',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
      category: 'DevOps',
    },
    {
      name: 'Jira',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg",
      category: 'DevOps',
    },
    {
      name: 'Python',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg",
      category: 'Data Science',
    },
    {
      name: 'Python',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      category: 'DevOps',
    },
    {
      name: 'Figma',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
      category: 'Graphics',
    },
    {
      name: 'Blender',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/blender/blender-original.svg",
      category: 'Graphics',
    },
    {
      name: 'LATEX',
      logoUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/latex/latex-original.svg",
      category: 'Graphics',
    },
  ],
  getStackByCategory(category) {
    return this.list.filter(i => i.category == category);
  }
};
export default StackService;