


const params = new URLSearchParams(window.location.search);
const projectName = params.get('project');
console.log(projectName); // Outputs "isole"

fetch('projects-database.json')
.then(response => {
    if (!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then( data =>{
    curr_data = data[projectName];
    console.log(curr_data.description);
    document.querySelector('.project-name').textContent = curr_data.name;
    document.querySelector('.project-description').textContent = curr_data.description;
    
})
.catch(error => console.error('Error:', error));