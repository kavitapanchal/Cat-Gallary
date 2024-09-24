let i=0;
let images=[];
const imagesPerPage = 2;

async function getAllCatImages() {
    try{
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
    const data = await response.json();
    images = data;
    showImg();
    updatePagination();
    }
    catch (error){
        console.error("Error fetching cat images");
        
    }
}



function showImg() {
    const gallary1 = document.getElementById("gallary1")
    const gallary2 = document.getElementById("gallary2")
    if (i < 0) i = 0;
   if (i >= images.length - imagesPerPage) i = images.length - imagesPerPage;
     gallary1.style.backgroundImage = `url(${images[i].url})`;
     gallary1.style.backgroundSize = 'cover';


     gallary2.style.backgroundImage = `url(${images[i+1].url})`;
     gallary2.style.backgroundSize = 'cover';
    }

    function updatePagination() {
        const pageInfo = document.getElementById('page-info');
        const currentPage = Math.floor(i / imagesPerPage) + 1;
        const totalPages = Math.ceil(images.length / imagesPerPage);
    
        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    
        document.getElementById('previous').disabled = currentPage === 1;
        document.getElementById('next').disabled = currentPage === totalPages;
    }
    
    

document.getElementById('previous').addEventListener('click', () => {
        if (i > 0) {
            i -= 2; 
             showImg();
             updatePagination();
         }
});


document.getElementById('next').addEventListener('click', () => {
         if (i < images.length - 2) {
                 i += 2; 
                 showImg();
                 updatePagination();
             }
});

getAllCatImages();