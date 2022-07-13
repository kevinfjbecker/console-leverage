var getSectionTitles = () => [...document.querySelectorAll('.section header span.simple_content')].slice(1).map(e => e.innerText)
var getProjectTitle = () => document.querySelector('.project_view span.simple_content').innerText
var getProject = () => ({
    title: getProjectTitle(),
    sections: getSectionTitles()
})

var myProjects = []
myProjects.push(getProject())
