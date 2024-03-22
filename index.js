import { kota } from "./assets/data/data.js";
import { konsultasi } from "./assets/data/data.js";
import { konseling } from "./assets/data/data.js";
import { kesehatan } from "./assets/data/data.js";
import { bantuan_hukum } from "./assets/data/data.js";
import { rumah_aman } from "./assets/data/data.js";

const card_konsultasi = document.getElementById("card-konsultasi")
const card_bantuanhukum = document.getElementById("card-bantuanhukum")
const card_rumahaman = document.getElementById("card-rumahaman")
// const card_kesehatan = document.getElementById("card-kesehatan")
const card_konseling = document.getElementById("card-konseling")
const list_kota = document.getElementById("list-kota")
const selected_kategori = document.getElementById("selected-kategori")
const selected_kategori_title = document.getElementById("selected-kategori-title")
const content = document.getElementById("content")
const btn_modal_1 = document.getElementById("btn-modal-1")
const btn_modal_2 = document.getElementById("btn-modal-2")
const btn_modal_3 = document.getElementById("btn-modal-3")
const btn_modal_4 = document.getElementById("btn-modal-4")
const nav = document.getElementById("nav")
const nav_items_mobile = document.getElementById("nav-items-mobile")
const menu_bar = document.getElementById("menu-bar")
const card_image = document.getElementsByClassName("card-image")

let seterkota;
let selectedcontent;


function selectkota(event)  {
    const selectedkota = event.target.textContent;
    let selectedEl = event.target.id
    const allKotaEls = document.querySelectorAll('.kota'); // Ambil semua elemen kota

    // Setel semua elemen kota menjadi normal (tidak tebal)
    allKotaEls.forEach((el) => {
        el.style.color = 'black';
        el.style.fontWeight = 'normal';
    });

    // Setel elemen kota yang dipilih menjadi tebal
    event.target.style.color = 'var(--primary-color)';
    event.target.style.fontWeight = 'bold';
    seterkota = selectedkota;
    handleContent(selectedkota)
}

function handleContent (kotaname){
    let filteredkota = kota.find(item => item.name === kotaname)
    let contentelement = ""
    console.log(kotaname,selectedcontent)
    if(selectedcontent === "Konsultasi"){
        if(kotaname === "Semua"){
            konsultasi.map(item => {             
                contentelement += ` 
                <div class="card-image w-20 h-auto" id='${item.id}'>
                    <div id='${item.id}>
                        <img src="https://carilayanan.com/wp-content/uploads/2021/06/tingey-injury-law-firm-6sl88x150Xs-unsplash-424x280.jpg" class='w-100 h-half' />
                    </div>
                    <div class="p-8" id='${item.id}'>
                        <h4>${item.name}</h4>
                        <span class="text-primary text-clamp-1 mb-4" style="font-weight: bold;">${item.alamat}</span>
                        <p style="font-size:0.9rem" class='text-clamp-2 mb-16'>${item.deskripsi}</p>
                        <div class='flex justify-center'>
                            <button class='cursor-pointer w-16 text-white bg-primary btn rounded-lg p-8' id='${item.id}'>Detail Lokasi</button>
                        </div>
                    </div>
                </div>
            `
            }
        )
        }
        else{
            konsultasi.forEach(item => {
                if(item.id_kota === filteredkota.id ){
                    contentelement += ` 
                    <div class="card-image w-20 h-auto" id='${item.id}'>
                        <div>
                            <img src="https://carilayanan.com/wp-content/uploads/2021/06/tingey-injury-law-firm-6sl88x150Xs-unsplash-424x280.jpg" class='w-100 h-half' id='${item.id}'/>
                        </div>
                        <div class="p-8" id='${item.id}'>
                            <h4>${item.name}</h4>
                            <span class="text-primary text-clamp-1 mb-4" style="font-weight: bold;" id='${item.id}'>${item.alamat}</span>
                            <p style="font-size:0.9rem" class='text-clamp-2 mb-16' id='${item.id}'>${item.deskripsi}</p>
                            <div class='flex justify-center'>
                                <button class='cursor-pointer w-16 text-white bg-primary btn rounded-lg p-8' id='${item.id}'>Detail Lokasi</button>
                            </div>
                        </div>
                    </div>
                `
                }
                }
            )
        }
    }       
    else if(selectedcontent === "Bantuan Hukum"){
        if(kotaname === "Semua"){
            bantuan_hukum.map(item => {             
                contentelement += ` 
                <div class="card-image w-20 h-auto" id='${item.id}'>
                    <div>
                        <img src="https://carilayanan.com/wp-content/uploads/2021/06/tingey-injury-law-firm-6sl88x150Xs-unsplash-424x280.jpg" class='w-100 h-half' id='${item.id}' />
                    </div>
                    <div class="p-8">
                        <h4>${item.name}</h4>
                        <span class="text-primary text-clamp-1 mb-4" style="font-weight: bold;" id='${item.id}'>${item.alamat}</span>
                        <p style="font-size:0.9rem" class='text-clamp-2 mb-16' id='${item.id}'>${item.deskripsi}</p>
                        <div class='flex justify-center'>
                        <button class='cursor-pointer w-16 text-white bg-primary btn rounded-lg p-8' id='${item.id}'>Detail Lokasi</button>
                         </div>
                    </div>
                </div>
            `
            }
        )
        }
        else{
            bantuan_hukum.forEach(item => {
                if(item.id_kota === filteredkota.id ){
                    contentelement += ` 
                    <div class="card-image w-20 h-auto" id='${item.id}'>
                        <div>
                            <img src="https://carilayanan.com/wp-content/uploads/2021/06/tingey-injury-law-firm-6sl88x150Xs-unsplash-424x280.jpg" class='w-100 h-half' id='${item.id}'/>
                        </div>
                        <div class="p-8" id='${item.id}'>
                            <h4 id='${item.id}'>${item.name}</h4>
                            <span class="text-primary text-clamp-1 mb-4" style="font-weight: bold;" id='${item.id}'>${item.alamat}</span>
                            <p style="font-size:0.9rem" class='text-clamp-2 mb-16' id='${item.id}'>${item.deskripsi}</p>
                            <div class='flex justify-center' id='${item.id}'>
                                <button class='cursor-pointer w-16 text-white bg-primary btn rounded-lg p-8' id='${item.id}'>Detail Lokasi</button>
                            </div>
                        </div>
                    </div>
                `
                }
                }
            )
        }
        
    }
    else if(selectedcontent === "Rumah Aman"){
        if(kotaname === "Semua"){
            rumah_aman.map(item => {             
                contentelement += ` 
                <div class="card-image w-20 h-auto" id='${item.id}' >
                    <div>
                        <img src="https://carilayanan.com/wp-content/uploads/2021/06/tingey-injury-law-firm-6sl88x150Xs-unsplash-424x280.jpg" class='w-100 h-half' id='${item.id}'/>
                    </div>
                    <div class="p-8" id='${item.id}'>
                        <h4 id='${item.id}'>${item.name}</h4>
                        <span class="text-primary text-clamp-1 mb-4" style="font-weight: bold;" id='${item.id}'>${item.alamat}</span>
                        <p style="font-size:0.9rem" class='text-clamp-2' mb-16 id='${item.id}'>${item.deskripsi}</p>
                        <div class='flex justify-center'>
                            <button class='cursor-pointer w-16 text-white bg-primary btn rounded-lg p-8' id='${item.id}'>Detail Lokasi</button>
                        </div>
                    </div>
                </div>
            `
            }
        )
        }
        else{
            rumah_aman.forEach(item => {
                if(item.id_kota === filteredkota.id ){
                    contentelement += ` 
                    <div class="card-image w-20 h-auto" id='${item.id}'>
                        <div>
                            <img src="https://carilayanan.com/wp-content/uploads/2021/06/tingey-injury-law-firm-6sl88x150Xs-unsplash-424x280.jpg" class='w-100 h-half' id='${item.id}'/>
                        </div>
                        <div class="p-8">
                            <h4 id='${item.id}'>${item.name}</h4>
                            <span class="text-primary text-clamp-1 mb-4" style="font-weight: bold;" id='${item.id}'>${item.alamat}</span>
                            <p style="font-size:0.9rem" class='text-clamp-2 mb-16' id='${item.id}'>${item.deskripsi}</p>
                            <div class='flex justify-center' id='${item.id}'>
                                <button class='cursor-pointer w-16 text-white bg-primary btn rounded-lg p-8' id='${item.id}'>Detail Lokasi</button>
                            </div>
                        </div>
                    </div>
                `
                }
                }
            )
        }
    }
    else if(selectedcontent === "Konseling"){
        if(kotaname === "Semua"){
            konseling.map(item => {             
                contentelement += ` 
                <div class="card-image w-20 h-auto" id='${item.id}'>
                    <div>
                        <img src="https://carilayanan.com/wp-content/uploads/2021/06/tingey-injury-law-firm-6sl88x150Xs-unsplash-424x280.jpg" class='w-100 h-half' id='${item.id}'/>
                    </div>
                    <div class="p-8" id='${item.id}'>
                        <h4 id='${item.id}'>${item.name}</h4>
                        <span class="text-primary text-clamp-1 mb-4" style="font-weight: bold;" id='${item.id}'>${item.alamat}</span>
                        <p style="font-size:0.9rem" class='text-clamp-2 mb-16' id='${item.id}'>${item.deskripsi}</p>
                        <div class='flex justify-center' >
                            <button class='cursor-pointer w-16 text-white bg-primary btn rounded-lg p-8' id='${item.id}'>Detail Lokasi</button>
                        </div>
                    </div>
                </div>
            `
            }
        )
        }
        else{
            konseling.forEach(item => {
                if(item.id_kota === filteredkota.id ){
                    contentelement += ` 
                    <div class="card-image w-20 h-auto" id='${item.id}'>
                        <div>
                            <img src="https://carilayanan.com/wp-content/uploads/2021/06/tingey-injury-law-firm-6sl88x150Xs-unsplash-424x280.jpg" class='w-100 h-half' id='${item.id}'/>
                        </div>
                        <div class="p-8" id='${item.id}'>
                            <h4>${item.name}</h4>
                            <span class="text-primary text-clamp-1 mb-4" style="font-weight: bold;" id='${item.id}'>${item.alamat}</span>
                            <p style="font-size:0.9rem" class='text-clamp-2 mb-16' id='${item.id}'>${item.deskripsi}</p>
                            <div class='flex justify-center'>
                                <button class='cursor-pointer w-16 text-white bg-primary btn rounded-lg p-8' id='${item.id}'>Detail Lokasi</button>
                            </div>
                        </div>
                    </div>
                `
                }
                }
            )
        }
        
    }
    else if(selectedcontent === "Kesehatan"){
        if(kotaname === "Semua"){
            kesehatan.map(item => {             
                contentelement += ` 
                <div class="card-image w-20 h-auto" id='${item.id}'>
                    <div>
                        <img src="https://carilayanan.com/wp-content/uploads/2021/06/tingey-injury-law-firm-6sl88x150Xs-unsplash-424x280.jpg" class='w-100 h-half' id='${item.id}'/>
                    </div>
                    <div class="p-8" id='${item.id}'>
                        <h4 id='${item.id}'>${item.name}</h4>
                        <span class="text-primary text-clamp-1 mb-4" style="font-weight: bold;" id='${item.id}'>${item.alamat}</span>
                        <p style="font-size:0.9rem" class='text-clamp-2 mb-16' id='${item.id}'>${item.deskripsi}</p>
                        <div class='flex justify-center'>
                            <button class='cursor-pointer w-16 text-white bg-primary btn rounded-lg p-8' id='${item.id}'>Detail Lokasi</button>
                        </div>
                    </div>
                </div>
            `
            }
        )
        }
        else{
            konseling.forEach(item => {
                if(item.id_kota === filteredkota.id ){
                    contentelement += ` 
                    <div class="card-image w-20 h-auto" id='${item.id}'>
                        <div>
                            <img src="https://carilayanan.com/wp-content/uploads/2021/06/tingey-injury-law-firm-6sl88x150Xs-unsplash-424x280.jpg" class='w-100 h-half' id='${item.id}'/>
                        </div>
                        <div class="p-8" id='${item.id}'>
                            <h4 id='${item.id}'>${item.name}</h4>
                            <span class="text-primary text-clamp-1 mb-4" style="font-weight: bold;" id='${item.id}'>${item.alamat}</span>
                            <p style="font-size:0.9rem" class='text-clamp-2 mb-16' id='${item.id}'>${item.deskripsi}</p>
                            <div class='flex justify-center'>
                                <button class='cursor-pointer w-16 text-white bg-primary btn rounded-lg p-8' id='${item.id}'>Detail Lokasi</button>
                             </div>
                        </div>
                    </div>
                `
                }
                }
            )
        }
        
    }
    content.innerHTML = contentelement
}

function handleModal(event){
    const id = event.target.getAttribute("id")
    const slicedid = id.slice(4)
    const modal = document.getElementById(slicedid)
    console.log(modal)
    modal.style.display = "flex"
    const btnclose = document.getElementById("close-"+slicedid)
    btnclose.addEventListener("click",() => modal.style.display = "none")
}

function handleDetailModal(event){
    const id = event.target.getAttribute("id")
    const modalid = `modal-${id}`
    let findData;
    if(selectedcontent === "Konsultasi"){
        findData = konsultasi.find(item => item.id === id)
    }
    else if (selectedcontent === "Bantuan Hukum"){
        findData = bantuan_hukum.find(item => item.id === id)
    }
    else if (selectedcontent === "Konseling"){
        findData = konseling.find(item => item.id === id)
    }
    else if (selectedcontent === "Rumah Aman"){
        findData = rumah_aman.find(item => item.id === id)
    }
    const modalEl = ` <div class="modal" id="modal-${id}">
            <div class="modal-content">
                <div class="modal-title">
                    <h3>${findData && findData.name}</h3>
                </div>
                <div class="modal-body">
                   <div>
                        <img src='https://carilayanan.com/wp-content/uploads/2021/06/tingey-injury-law-firm-6sl88x150Xs-unsplash-424x280.jpg' class='w-100 h-12 rounded-lg mb-24' />
                   </div>
                   <div>
                        <h3 class='mb-4'>${findData && findData.name}</h3>
                        <h3 class='mb-12' style='font-size:0.95rem'>Alamat : ${findData && findData.alamat}</h3>
                        <p style='font-size:0.9rem'>${findData && findData.deskripsi}</p>
                   </div>
                </div>
                <div class="modal-footer">
                    <button class="btn bg-primary cursor-pointer p-8 rounded-md text-white" id="close-${modalid}">Tutup</button>
                </div>
            </div>
        </div>`
        content.innerHTML += modalEl
        const el_modal = document.getElementById(modalid)
        const closebtn = document.getElementById(`close-${modalid}`)
        el_modal.style.display = "flex"
        closebtn.addEventListener("click",() => el_modal.style.display = "none")
}

function card_selected(){
    let title = this.getAttribute("title")
    selectedcontent = title
    selected_kategori.scrollIntoView({behavior:"smooth",block:"start"})
    selected_kategori.style.display = 'flex'
    selected_kategori_title.innerHTML = title
    seterkota = "Semua"
    renderContent(title)
    // console.log(card_image)
}

function renderContent(contenttitle){
    let contentelement = ''
    if(contenttitle === "Konsultasi"){
        konsultasi.map(item => 
            contentelement += ` 
            <div class="card-image w-20 h-auto" id='${item.id}'>
                <div>
                    <img src="https://carilayanan.com/wp-content/uploads/2021/06/tingey-injury-law-firm-6sl88x150Xs-unsplash-424x280.jpg" class='w-100 h-half' id='${item.id}'/>
                </div>
                <div class="p-8" id='${item.id}'>
                    <h4 id='${item.id}'>${item.name}</h4>
                    <span class="text-primary text-clamp-1 mb-4" style="font-weight: bold;" id='${item.id}'>${item.alamat}</span>
                    <p style="font-size:0.9rem" class='text-clamp-2 mb-16' id='${item.id}'>${item.deskripsi}</p>
                    <div class='flex justify-center' id='${item.id}'>
                    <button class='cursor-pointer w-16 text-white bg-primary btn rounded-lg p-8' id='${item.id}'>Detail Lokasi</button>
                    </div>
                </div>
            </div>
            `  
        )
    }
    if(contenttitle === "Bantuan Hukum"){
        bantuan_hukum.map(item => 
            contentelement += ` 
            <div class="card-image w-20 h-auto" id='${item.id}'>
                <div>
                    <img src="https://carilayanan.com/wp-content/uploads/2021/06/tingey-injury-law-firm-6sl88x150Xs-unsplash-424x280.jpg" class='w-100 h-half' id='${item.id}'/>
                </div>
                <div class="p-8" id='${item.id}'>
                    <h4 id='${item.id}'>${item.name}</h4>
                    <span class="text-primary text-clamp-1 mb-4" style="font-weight: bold;" id='${item.id}'>${item.alamat}</span>
                    <p style="font-size:0.9rem" class='text-clamp-2 mb-16' id='${item.id}'>${item.deskripsi}</p>
                    <div class='flex justify-center' id='${item.id}'>
                        <button class='cursor-pointer w-16 text-white bg-primary btn rounded-lg p-8' id='${item.id}'>Detail Lokasi</button>
                    </div>
                </div>
            </div>
            `  
        )
    }
    if(contenttitle === "Rumah Aman"){
        rumah_aman.map(item => 
            contentelement += ` 
            <div class="card-image w-20 h-auto" id='${item.id}'>
                <div>
                    <img src="https://carilayanan.com/wp-content/uploads/2021/06/tingey-injury-law-firm-6sl88x150Xs-unsplash-424x280.jpg" class='w-100 h-half' id='${item.id}'/>
                </div>
                <div class="p-8">
                    <h4 id='${item.id}'>${item.name}</h4>
                    <span class="text-primary text-clamp-1 mb-4" style="font-weight: bold;" id='${item.id}'>${item.alamat}</span>
                    <p style="font-size:0.9rem" class='text-clamp-2 mb-16' id='${item.id}'>${item.deskripsi}</p>
                    <div class='flex justify-center'>
                        <button class='cursor-pointer w-16 text-white bg-primary btn rounded-lg p-8' id='${item.id}'>Detail Lokasi</button>
                    </div>
                </div>
            </div>
            `  
        )
    }
    if(contenttitle === "Kesehatan"){
        kesehatan.map(item => 
            contentelement += ` 
            <div class="card-image w-20 h-auto" id='${item.id}'>
                <div>
                    <img src="https://carilayanan.com/wp-content/uploads/2021/06/tingey-injury-law-firm-6sl88x150Xs-unsplash-424x280.jpg" class='w-100 h-half' id='${item.id}'/>
                </div>
                <div class="p-8" id='${item.id}'>
                    <h4 id='${item.id}'>${item.name}</h4>
                    <span class="text-primary text-clamp-1 mb-4" style="font-weight: bold;" id='${item.id}'>${item.alamat}</span>
                    <p style="font-size:0.9rem" class='text-clamp-2 mb-16' id='${item.id}'>${item.deskripsi}</p>
                    <div class='flex justify-center'>
                        <button class='cursor-pointer w-16 text-white bg-primary btn rounded-lg p-8' id='${item.id}'>Detail Lokasi</button>
                    </div>
                </div>
            </div>
            `  
        )
    }
    if(contenttitle === "Konseling"){
        konseling.map(item => 
            contentelement += ` 
            <div class="card-image w-20 h-auto" id='${item.id}'>
                <div>
                    <img src="https://carilayanan.com/wp-content/uploads/2021/06/tingey-injury-law-firm-6sl88x150Xs-unsplash-424x280.jpg" class='w-100 h-half' id='${item.id}'/>
                </div>
                <div class="p-8" id='${item.id}'>
                    <h4 id='${item.id}'>${item.name}</h4>
                    <span class="text-primary text-clamp-1 mb-4" style="font-weight: bold;" id='${item.id}'>${item.alamat}</span>
                    <p style="font-size:0.9rem" class='text-clamp-2 mb-16' id='${item.id}'>${item.deskripsi}</p>
                    <div class='flex justify-center'>
                        <button class='cursor-pointer w-16 text-white bg-primary btn rounded-lg p-8' id='${item.id}'>Detail Lokasi</button>
                    </div>
                </div>
            </div>
            `  
        )
    }

    content.innerHTML = contentelement
}

menu_bar.addEventListener("click",() => {
    if(nav_items_mobile.style.display === "none"){
        nav_items_mobile.style.display = "flex"
    }
    else{
        nav_items_mobile.style.display = "none"
    }
})

window.addEventListener("scroll",() => {
    if(window.scrollY > 50){
        nav.style.backgroundColor = "var(--secondary-color)"
        nav.style.transition = "0.4s"
    }
    else{
        nav.style.backgroundColor = "transparent"
    }
})

card_konsultasi.addEventListener("click",card_selected)
card_bantuanhukum.addEventListener("click",card_selected)
card_rumahaman.addEventListener("click",card_selected)
// card_kesehatan.addEventListener("click",card_selected)
card_konseling.addEventListener("click",card_selected)
btn_modal_1.addEventListener("click",handleModal)
btn_modal_2.addEventListener("click",handleModal)
btn_modal_3.addEventListener("click",handleModal)
btn_modal_4.addEventListener("click",handleModal)

// Membuat instance dari MutationObserver
const observer = new MutationObserver((mutationsList, observer) => {
    // Iterasi melalui setiap mutasi
    for (let mutation of mutationsList) {
        // Periksa apakah elemen yang ditambahkan memiliki kelas "card-image"
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(addedNode => {
                if (addedNode.classList && addedNode.classList.contains('card-image')) {
                    // Jika elemen baru memiliki kelas "card-image", tambahkan event listener
                    addedNode.addEventListener('click', handleDetailModal);
                }
            });
        }
    }
});

// Konfigurasi observer
const observerConfig = {
    childList: true, // Melacak perubahan dalam anak-anak elemen
    subtree: true // Melacak semua perubahan dalam subtree (anak-anak elemen secara rekursif)
};

// Mulai mengamati perubahan di dalam elemen body
observer.observe(document.body, observerConfig);


window.addEventListener("DOMContentLoaded",() => {
   
    kota.map((item) => 
      list_kota.innerHTML += `<p class='cursor-pointer kota' id='${item.id}'>${item.name}</p>`
    )
    kota.forEach((item) => {
        const kotael = document.getElementById(item.id)
        kotael.addEventListener("click",selectkota)
    })


    
})