const inputTasks = process.argv[2]
const tasksList = ['acordar', 
                   'escovar os dentes']
const newList = tasksList.push(inputTasks)

console.log(`Tarefa adcionada com sucesso!  tarefas: ${tasksList}`)
