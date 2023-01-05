// gitprofile.config.js

const config = {
  github: {
    username: 'ederjavs', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'ederjavs',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    website: '',
    phone: '5568162497',
    email: 'ederjavs@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'GCP',
    'Azure',
    'FireBase',
    'PHP',
    'Codeigniter',
    'JavaScript',
    'Angular',
    'Angular Material',
    'Node.js',
    'Nest.js',
    'MySQL',
    'SQL Server',
    'Dart',
    'Flutter',
    'Git',
    'Docker',
    'C#',
    'CSS',
    'UiPath',
    'Bootstrap',
  ],
  experiences: [
    {
      company: 'Consiss',
      position: 'Angular & C# Developer',
      from: 'March 2022',
      to: 'Present',
      companyLink: 'https://consiss.com/',
    },
    {
      company: 'Sodimac Chile',
      position: 'Angular & Node Developer',
      from: 'September 2020',
      to: 'March 2022',
      companyLink: 'https://sodimac.falabella.com/sodimac-cl',
    },
    {
      company: 'CyberIdeas CallCenter',
      position: 'FullStack Developer',
      from: 'July 2018',
      to: 'September 2020',
      companyLink: 'https://cyberideas.com.mx/',
    },
  ],
  certifications: [
    {
      name: 'UiPath',
      body: 'Desarrollador de RPA',
      year: 'Jun 2020',
      link: 'https://learningpath.cdn.contentraven.com/crcloud/learningpathcertificate/2357/968973/LearningPath_Certificate_08262022000718939.pdf?Expires=1672884631&Signature=h7e~stVdRlQBDTH8lUBnXz7ihML5RZPfEzjfQEOfnA9c1f7vVfsbaBJ0db97D0J9HYBPK-5hi03pOUfSQMSfqCoeQXj6gvtlM0TEHZY3OgQAJtpEeyrFrBnPTyCx4PpJYHD8QB4LuBqBpvWryMhSfVsiumiakHkQlLWbkXLvVLw_&Key-Pair-Id=APKAILVQOTZN4SHI6YSA',
    },
  ],
  education: [
    {
      institution: 'Tecnologico de Estudios Superiores de Ixtapaluca',
      degree: 'Ingenieria en Sistemas',
      from: '2008',
      to: '2015',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],

  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'ederjavs', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      /*'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',*/
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
