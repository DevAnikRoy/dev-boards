document.getElementById('card-1-btn').addEventListener('click', function(event){
    event.preventDefault;
    alert('Board Updated Successfully');

    // task assign
    const taskNumber = document.getElementById('task-number').innerText;
    const taskSum = taskNumber - 1;
    document.getElementById('task-number').innerText = taskSum;
    // nav assign
    const navNumber = document.getElementById('nav-number').innerText;
    const navSum = parseInt(navNumber) + 1;
    document.getElementById('nav-number').innerText = navSum;
    // btn disable
    document.getElementById('card-1-btn').disabled = true;
    // sending to the activity board
    const getTime = new Date();
    const currentTime = getTime.toLocaleString();

    const getActivity = document.getElementById('remove-activity');
    const div = document.createElement('div');
    const sendingText = document.getElementById('card-1-heading').innerText;

    div.classList.add ("bg-[#F4F7FF]", "border-sm","border-black", "rounded-lg","p-2","mt-4")
    div.innerHTML = `
    <h3 class=" text-sm ">You have completed the task ${sendingText} at ${currentTime}</h3>
    `
    getActivity.appendChild(div);



    // You have completed the task (Fix.....) at (time)

})