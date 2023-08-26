$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/udi3.PNG',
            link: 'https://github.com/abhn/Mporter',
            title: 'UDI Scaneer',
            demo: 'https://mporter.co',
            technologies: ['Flutter', 'Flask', 'Python'],
            description: "UDI 바코드를 스캔하여 의약품들을 관리할 수 있는 앱",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/ootd3.PNG',
            link: 'https://github.com/abhn/Wall-E',
            title: '오뭐입?',
            demo: 'http://wall-e-jekyll.github.io/',
            technologies: ['Flutter', 'FCM', 'kakao api', 'naver api'],
            description: "체감온도, 습도, 일교차 등을 고려하여 오늘의 옷차림을 추천하는 앱",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/bb.PNG',
            link: 'https://github.com/abhn/Wall-E',
            title: '오뭐입?',
            demo: 'http://wall-e-jekyll.github.io/',
            technologies: ['Flutter', 'FCM', 'kakao api', 'naver api'],
            description: "체감온도, 습도, 일교차 등을 고려하여 오늘의 옷차림을 추천하는 앱",
            categories: ['featured', 'webdev']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}