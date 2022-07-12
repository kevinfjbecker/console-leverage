function tasksTableView() {

    ///////////////////////////////////////////////////////////////////////////

    return getTaskList().map(element => getTask(element));

    ///////////////////////////////////////////////////////////////////////////

    function getPriority(t) {
        return t.querySelector('button')
        .classList[1]
        .split('_')[1];
    }

    function getContent(t) {
        return t.querySelector('.task_content')
            .innerText;
    }

    function getDate(t) {
        const element = t.querySelector('.date');
        return element && element.innerText;
    }

    function getDescription(t) {
        const element = t.querySelector('.task_description');
        return element && element.innerText;
    }

    function getProjectSection(t) {
        const element = t.querySelector('.task_list_item__project');
        return element && element.innerText.split(' / ');
    }

    function getTask(t) {
        const [project, section] = getProjectSection(t);
        return {
            priority: getPriority(t),
            content: getContent(t),
            description: getDescription(t),
            date: getDate(t),
            project: project || null,
            section: section || null
        };
    }

    function getTaskList() {
        return [... document
            .querySelector('.view_content')
            .querySelector('.list_holder')
            .querySelectorAll('.task_list_item')
        ];
    }

}
