import { InlineCode } from "@/once-ui/components";
import { Analytics } from "@vercel/analytics/react";
import { display } from "./config";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from '@vercel/speed-insights'; 

inject();
injectSpeedInsights();

const person = {
    firstName: 'Odin',
    lastName:  'Wattez',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/Amsterdam',
    languages: ['Nederlands', 'Engels'] 
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/OdinWattz',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/odin-wattez-a78a02264/',
    },
    {
        name: 'Email',
        icon: 'email',
    link: 'mailto:o.wattez@student.alfa-college.nl',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Student Software Development</>,
    subline: <>Ik ben Odin, Ik ben een Software Developer op het Alfa-College, Waar ik leer te programmeren.<br/>Buiten school, maak ik mijn eigen projecten en doe ik andere dingen.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Odin Wattez, 19 jaar, tweedejaars student Software Developer. Kennis van HTML, CSS, JavaScript, Python, PHP en Next.js. Gedreven om te leren en code creatief toe te passen. Klaar voor nieuwe uitdagingen in softwareontwikkeling!</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Werk Ervaring',
        experiences: [
            {
                company: 'Zorgboodschap Meppel',
                timeframe: '2023 - Present',
                role: 'Magazijnmedewerker en Bezorger',
                achievements: [
                    <>In het magazijn verdeel ik kratjes onder pallets.</>,
                    <>Wanneer ik bezorg, breng ik voedsel naar Bejaardetehuizen en Zorginstellingen.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/werk/zorgboodschap.jpg',
                        alt: 'Zorgboodschap',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Action Beilen',
                timeframe: '2021 - 2023',
                role: 'Vakkenvuller',
                achievements: [
                    <>Vulde de schappen bij en hielp klanten.</>,
                ],
                images: [
                    {
                        src: '/images/projects/werk/action.jpg',
                        alt: 'Zorgboodschap',
                        width: 16,
                        height: 9
                    }
                 ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Opleidingen',
        institutions: [
            {
                name: 'Alfa-College Groningen',
                role: 'Software Developer',
                description: <>Doe de opleiding Software Development<br/>2023 - Present</>,
            },
            {
                name: 'Alfa-college Groningen',
                role: 'Technicus Engineering/Technischus Informatica',
                description: <>Deed de opleiding Technicus Engineering en Technicus Informatica<br/>2022 - 2023</>,
            },
            {
                name: 'Dr. Nassau College Beilen',
                description: <>Deed Mavo op het Dr. Nassau College in Beilen<br/>2018 - 2022</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'HTML, CSS, JavaScript',
                description: <>Ik heb met behulp van HTML, CSS en JavaScript al een aantal websites gemaakt. </>,
                images: [
                    {
                        src: '/images/projects/werk/oudeportfolio.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/werk/projectpageportfolio.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/werk/contactpageoud.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/werk/cvpageportfolio.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/werk/rekensite.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Python',
                description: <>Ik heb met Python al eens eerder een project gemaakt, Een receptenbeheerder.</>,
                images: [
                    {
                        src: '/images/projects/werk/pythonapp1.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Ik heb met Next.Js mijn nieuwe portfolio gemaakt.</>,
                images: [
                    {
                        src: '/images/projects/werk/portfolio2.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]

            },
            {
                title: 'PHP',
                description: <>Ik heb met PHP en een database voor een school opdracht een webshop gemaakt.</>,
                images: [
                    {
                        src: '/images/projects/werk/webshop.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/werk/blackwoodfantasyproduct.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/werk/signuppage.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/werk/loginpage.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const work = {
    label: 'Projecten',
    title: 'Mijn projecten',
    description: `Design en dev projecten door ${person.name}`
    // All projects will be listed on the /home and /work routes
}

export { person, social, home, about, work };