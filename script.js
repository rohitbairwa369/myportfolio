const sidebar = document.querySelector('.sidebar');

function showSidebar(){
  sidebar.style.display = "flex";
}

function hideSidebar(){
  sidebar.style.display = "none";
}


function progressBarAndCountNumber () {
    const progress = document.querySelectorAll('.progress');
    let count = 0;
    let MAX = 100;

    let run = setInterval(() => {
        count++;
        progress.forEach(element => {
            if (count <= element.dataset.progress) {
                element.parentElement.style.background = `conic-gradient(#fff ${count}%, #212428 0)`;
                element.firstElementChild.textContent = `${count}%`;
            };
            if (count == MAX) {
                clearInterval(run);
            };
        });
    }, 20);
    isNotViewed = false;
}

var isNotViewed = true;

  const section = document.getElementById('skillset');
        new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && isNotViewed) progressBarAndCountNumber();
        }).observe(section);


        