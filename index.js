const starlist = document.querySelectorAll(".fas");
const emojilist = document.querySelectorAll(".far");
const colorArr = ["red","orange","lightblue","lightgreen","green"];


var i;

updateRating(0);

starlist.forEach(function (starlist, index) {
    starlist.addEventListener("click", function () {
        updateRating(index);
    })
})

function updateRating(index) {
    starlist.forEach(function (starlist, idx) {
        if (idx < index + 1) {
            starlist.classList.add("active");

        }

        else {
            starlist.classList.remove("active");
        }
    })

    emojilist.forEach(function (emojilist) {
        emojilist.style.transform = `translateX(-${index * 50}px)`;
        emojilist.style.color=colorArr[index];
    })

    

}