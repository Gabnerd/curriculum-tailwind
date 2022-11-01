if(window.window.innerWidth >= 768){

window.onhashchange = () => {
    routeAccess(location.hash);
};

window.onload = () => {
    routeAccess(location.hash);
    document.querySelectorAll(".route-link").forEach(routelink=>{
        routelink.addEventListener("click", (e)=>{
            location.hash = routelink.dataset.route;
        });
    })
}

function routeAccess(rota) {
    const routesPages = document.querySelectorAll(".rota");
    let founded = false;
    routesPages.forEach(page => {
        if (`#${page.id}` == rota) {
            page.classList.remove("hidden");
            founded = true;
            let stop = false;
            document.querySelectorAll(".route-link").forEach(routelink=>{
                if(!stop){
                    routelink.querySelector(".route-indicator").classList.remove("bg-indigo-500");
                    routelink.querySelector(".route-indicator").classList.remove("hover:bg-indigo-800");
                    routelink.querySelector(".route-indicator").classList.add("bg-indigo-800");
                    routelink.querySelector(".route-indicator").classList.add("hover:bg-indigo-500");
                    if(routelink.dataset.route == page.id){
                        stop = true;
                    }
                }else{
                    routelink.querySelector(".route-indicator").classList.remove("bg-indigo-800");
                    routelink.querySelector(".route-indicator").classList.remove("hover:bg-indigo-500");
                    routelink.querySelector(".route-indicator").classList.add("bg-indigo-500");
                    routelink.querySelector(".route-indicator").classList.add("hover:bg-indigo-800");
                }
            });
            

        } else {
            page.classList.add("hidden");
        }
    });

    if(!founded){
        location.hash = "inicio";
    }
}
}

window.onresize = ()=>{
    location.reload();
}