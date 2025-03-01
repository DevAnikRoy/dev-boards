// card-1
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
    <h3 class=" text-sm ">You have completed the task ${sendingText} at ${currentTime}</h3> `
    getActivity.appendChild(div);

})

// card-2
document.getElementById('card-2-btn').addEventListener('click', function(event){
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
    document.getElementById('card-2-btn').disabled = true;
    // sending to the activity board
    const getTime = new Date();
    const currentTime = getTime.toLocaleString();

    const getActivity = document.getElementById('remove-activity');
    const div = document.createElement('div');
    const sendingText = document.getElementById('card-2-heading').innerText;

    div.classList.add ("bg-[#F4F7FF]", "border-sm","border-black", "rounded-lg","p-2","mt-4")
    div.innerHTML = `
    <h3 class=" text-sm ">You have completed the task ${sendingText} at ${currentTime}</h3> `
    getActivity.appendChild(div);

})

// card-3
document.getElementById('card-3-btn').addEventListener('click', function(event){
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
    document.getElementById('card-3-btn').disabled = true;
    // sending to the activity board
    const getTime = new Date();
    const currentTime = getTime.toLocaleString();

    const getActivity = document.getElementById('remove-activity');
    const div = document.createElement('div');
    const sendingText = document.getElementById('card-3-heading').innerText;

    div.classList.add ("bg-[#F4F7FF]", "border-sm","border-black", "rounded-lg","p-2","mt-4")
    div.innerHTML = `
    <h3 class=" text-sm ">You have completed the task ${sendingText} at ${currentTime}</h3> `
    getActivity.appendChild(div);

})

// card-4
document.getElementById('card-4-btn').addEventListener('click', function(event){
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
    document.getElementById('card-4-btn').disabled = true;
    // sending to the activity board
    const getTime = new Date();
    const currentTime = getTime.toLocaleString();

    const getActivity = document.getElementById('remove-activity');
    const div = document.createElement('div');
    const sendingText = document.getElementById('card-4-heading').innerText;

    div.classList.add ("bg-[#F4F7FF]", "border-sm","border-black", "rounded-lg","p-2","mt-4")
    div.innerHTML = `
    <h3 class=" text-sm ">You have completed the task ${sendingText} at ${currentTime}</h3> `
    getActivity.appendChild(div);

})

// card-5
document.getElementById('card-5-btn').addEventListener('click', function(event){
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
    document.getElementById('card-5-btn').disabled = true;
    // sending to the activity board
    const getTime = new Date();
    const currentTime = getTime.toLocaleString();

    const getActivity = document.getElementById('remove-activity');
    const div = document.createElement('div');
    const sendingText = document.getElementById('card-5-heading').innerText;

    div.classList.add ("bg-[#F4F7FF]", "border-sm","border-black", "rounded-lg","p-2","mt-4")
    div.innerHTML = `
    <h3 class=" text-sm ">You have completed the task ${sendingText} at ${currentTime}</h3> `
    getActivity.appendChild(div);

})

// card-6
document.getElementById('card-6-btn').addEventListener('click', function(event){
    event.preventDefault;
    alert('Board Updated Successfully');
    alert('Congrats!!! You have completed all the current task');

    // task assign
    const taskNumber = document.getElementById('task-number').innerText;
    const taskSum = taskNumber - 1;
    document.getElementById('task-number').innerText = taskSum;
    // nav assign
    const navNumber = document.getElementById('nav-number').innerText;
    const navSum = parseInt(navNumber) + 1;
    document.getElementById('nav-number').innerText = navSum;
    // btn disable
    document.getElementById('card-6-btn').disabled = true;
    // sending to the activity board
    const getTime = new Date();
    const currentTime = getTime.toLocaleString();

    const getActivity = document.getElementById('remove-activity');
    const div = document.createElement('div');
    const sendingText = document.getElementById('card-6-heading').innerText;

    div.classList.add ("bg-[#F4F7FF]", "border-sm","border-black", "rounded-lg","p-2","mt-4")
    div.innerHTML = `
    <h3 class=" text-sm ">You have completed the task ${sendingText} at ${currentTime}</h3> `
    getActivity.appendChild(div);

})