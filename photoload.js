const photos = [
    { number: "00412", caption: "urth caffe beverly hills" },
    { number: "00432", caption: "the getty, los angeles" },
    { number: "00433", caption: "the getty, los angeles" },
    { number: "00441", caption: "los angeles skyline" },
    { number: "00486", caption: "the grove, los angeles" },
    { number: "00510", caption: "santa monica pier" },
    { number: "00591", caption: "little tokyo, los angeles" },
    { number: "00662", caption: "ithaca commons" },
    { number: "00679", caption: "ithaca commons" },
    { number: "00695", caption: "bus 30" },
    { number: "00884", caption: "sackett bridge" },
    { number: "00910", caption: "bailey hall" },
    { number: "01239", caption: "main street cupertino" },
    { number: "02204", caption: "bacalar lagoon, mexico" },
    { number: "02210", caption: "bacalar lagoon, mexico" },
    { number: "02349", caption: "mahahual, mexico" },
    { number: "02675", caption: "roatan, honduras" },
    { number: "02797", caption: "space center houston" },
    { number: "02806", caption: "space center houston" },
    { number: "02816", caption: "apollo mission control" },
    { number: "02875", caption: "cvi.che 105, miami" },
    { number: "02920", caption: "miami design district" },
    { number: "02979", caption: "wynwood walls" },
    { number: "03012", caption: "miami design district" },
    { number: "03110", caption: "little havana, miami" },
    { number: "03126", caption: "domino park miami" },
    { number: "03210", caption: "everglades" },
    { number: "03246", caption: "everglades" },
    { number: "03332", caption: "vizcaya museum & gardens" },
    { number: "03612", caption: "miami beach" },
    { number: "03661", caption: "miami beach" },
    { number: "09722", caption: "downtown monterey" },
    { number: "09811", caption: "lovers point beach, monterey" }
];

function populateGallery() {
    const gallery = document.getElementById('photoGallery');

    photos.forEach(photo => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.innerHTML = `
            <img src="images/DSC${photo.number}.jpg" alt="${photo.caption}">
            <p class="caption">${photo.caption}</p>
        `;
        gallery.appendChild(photoItem);
    });
}

populateGallery();