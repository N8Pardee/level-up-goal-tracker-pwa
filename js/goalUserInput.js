
const goalPrompt = document.getElementById('goalText');
const openDialogueBox = document.getElementById('openPrompt');
const closePrompt = document.getElementById('closeDialogueBox');

openDialogueBox.addEventListener('click', () => {
    goalPrompt.showModal();
})

closePrompt.addEventListener('click', () =>{
    goalPrompt.close();
})